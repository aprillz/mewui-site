/**
 * Visit counter for the MewUI site.
 *
 * Records one row per page per day and nothing else. No address, no user agent,
 * no cookie, no identifier of any kind, so there is nothing to leak or to purge.
 */

interface Env {
  DB: D1Database;
}

const ALLOWED_ORIGINS = [
  "https://mewui.aprillz.net",
  "http://localhost:4321",
];

function cors(origin: string | null): Record<string, string> {
  if (origin === null || !ALLOWED_ORIGINS.includes(origin)) {
    return {};
  }
  return {
    "access-control-allow-origin": origin,
    "access-control-allow-methods": "POST, GET, OPTIONS",
    "access-control-allow-headers": "content-type",
  };
}

// Keeps a stray or hostile body from becoming a row of its own.
function normalisePath(raw: string): string | null {
  const trimmed = raw.trim();
  if (trimmed.length === 0 || trimmed.length > 64) {
    return null;
  }
  if (!/^\/[a-z0-9/_-]*$/i.test(trimmed)) {
    return null;
  }
  return trimmed;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const headers = cors(request.headers.get("origin"));

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers });
    }

    if (request.method === "POST" && url.pathname === "/hit") {
      const path = normalisePath(await request.text());
      if (path === null) {
        return new Response(null, { status: 400, headers });
      }

      const day = new Date().toISOString().slice(0, 10);
      await env.DB.prepare(
        `INSERT INTO visits (day, path, count) VALUES (?1, ?2, 1)
         ON CONFLICT (day, path) DO UPDATE SET count = count + 1`,
      )
        .bind(day, path)
        .run();

      return new Response(null, { status: 204, headers });
    }

    if (request.method === "GET" && url.pathname === "/stats") {
      const total = await env.DB.prepare(
        "SELECT COALESCE(SUM(count), 0) AS total FROM visits",
      ).first<{ total: number }>();

      const byDay = await env.DB.prepare(
        `SELECT day, SUM(count) AS count FROM visits
         GROUP BY day ORDER BY day DESC LIMIT 30`,
      ).all<{ day: string; count: number }>();

      const byPath = await env.DB.prepare(
        `SELECT path, SUM(count) AS count FROM visits
         GROUP BY path ORDER BY count DESC`,
      ).all<{ path: string; count: number }>();

      return Response.json(
        {
          total: total?.total ?? 0,
          days: byDay.results,
          paths: byPath.results,
        },
        { headers },
      );
    }

    return new Response(null, { status: 404, headers });
  },
};
