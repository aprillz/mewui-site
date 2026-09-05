export const links = {
  repo: "https://github.com/aprillz/MewUI",
  gallery: "https://aprillz.github.io/MewUI/Gallery/",
  nuget: "https://www.nuget.org/packages/Aprillz.MewUI/",
  docs: "https://github.com/aprillz/MewUI/tree/main/docs",
};

export const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export function asset(path: string): string {
  return `${base}/assets/${path}`;
}
