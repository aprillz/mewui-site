# Visit counter

A Cloudflare Worker backed by D1. It records one row per page per day and stores
nothing that identifies a visitor: no address, no user agent, no cookie.

The site posts to it and ignores the result. Nothing is shown on the page, so if
this worker is unreachable the site behaves exactly as it does now.

## Endpoints

- `POST /hit` with the path as a plain text body. Records the visit.
- `GET /stats` returns the total, the last 30 days, and the per page totals.

## Setup

```bash
npx wrangler login
npx wrangler d1 create mewui-site-visits    # put the id into wrangler.toml
npx wrangler d1 execute mewui-site-visits --remote --file=./schema.sql
npx wrangler deploy
```

Then set `PUBLIC_COUNT_URL` in the site's deploy workflow to the worker's URL.
Leaving it unset keeps the beacon out of the built pages.

## Reading the numbers

```bash
curl https://<worker-url>/stats
```

## Free tier

Workers allows 100,000 requests a day and D1 allows 100,000 row writes a day,
which is far above what this site sees. Going over makes further writes fail
rather than incurring a charge, and a failed write is invisible to the reader.
