import { readFileSync } from "node:fs";
import { resolve } from "node:path";

// Reads a marked region out of the snippets project, so nothing on the page is
// C# that was never compiled.
export function snippet(file: string, name: string): string {
  const source = readFileSync(resolve("snippets", file), "utf8");
  const open = `// <landing:${name}>`;
  const close = `// </landing:${name}>`;
  const start = source.indexOf(open);
  const end = source.indexOf(close);
  if (start < 0 || end < 0) {
    throw new Error(`snippets/${file} has no landing:${name} region.`);
  }

  const lines = source
    .slice(start + open.length, end)
    .replace(/^\r?\n/, "")
    .trimEnd()
    .split("\n");

  const indent = Math.min(
    ...lines
      .filter((line) => line.trim().length > 0)
      .map((line) => line.length - line.trimStart().length),
  );

  return lines.map((line) => line.slice(indent)).join("\n");
}
