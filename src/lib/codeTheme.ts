import { bundledThemes } from "shiki";

const SATURATION_GAIN = 1.9;
const DARK_LIFT = 0.12;
const BRIGHT_TRIM = 0.07;

function toHsl(hex: string): [number, number, number] {
  const value = hex.slice(1);
  const full =
    value.length === 3
      ? value
          .split("")
          .map((digit) => digit + digit)
          .join("")
      : value.slice(0, 6);
  const red = parseInt(full.slice(0, 2), 16) / 255;
  const green = parseInt(full.slice(2, 4), 16) / 255;
  const blue = parseInt(full.slice(4, 6), 16) / 255;

  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const lightness = (max + min) / 2;
  const delta = max - min;
  if (delta === 0) {
    return [0, 0, lightness];
  }

  const saturation =
    lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
  let hue: number;
  if (max === red) {
    hue = ((green - blue) / delta + (green < blue ? 6 : 0)) / 6;
  } else if (max === green) {
    hue = ((blue - red) / delta + 2) / 6;
  } else {
    hue = ((red - green) / delta + 4) / 6;
  }
  return [hue, saturation, lightness];
}

function channel(p: number, q: number, t: number): number {
  let shifted = t;
  if (shifted < 0) shifted += 1;
  if (shifted > 1) shifted -= 1;
  if (shifted < 1 / 6) return p + (q - p) * 6 * shifted;
  if (shifted < 1 / 2) return q;
  if (shifted < 2 / 3) return p + (q - p) * (2 / 3 - shifted) * 6;
  return p;
}

function toHex(hue: number, saturation: number, lightness: number): string {
  let red = lightness;
  let green = lightness;
  let blue = lightness;
  if (saturation !== 0) {
    const q =
      lightness < 0.5
        ? lightness * (1 + saturation)
        : lightness + saturation - lightness * saturation;
    const p = 2 * lightness - q;
    red = channel(p, q, hue + 1 / 3);
    green = channel(p, q, hue);
    blue = channel(p, q, hue - 1 / 3);
  }
  return `#${[red, green, blue]
    .map((part) =>
      Math.round(part * 255)
        .toString(16)
        .padStart(2, "0")
        .toUpperCase(),
    )
    .join("")}`;
}

// Keeps every hue Dark+ assigns and only pushes saturation and lightness up,
// so the samples stay familiar but read as vivid next to the purple brand.
function vivid(hex: string): string {
  if (!/^#[0-9a-fA-F]{3,8}$/.test(hex)) {
    return hex;
  }
  const [hue, saturation, lightness] = toHsl(hex);
  if (saturation === 0) {
    return toHex(hue, 0, Math.min(0.88, lightness + 0.06));
  }

  // Lifting an already bright color only washes it out, so only dark tokens
  // gain lightness and bright ones give a little back to let the hue show.
  let adjusted = lightness;
  if (lightness < 0.55) {
    adjusted = Math.min(0.68, lightness + DARK_LIFT);
  } else if (lightness > 0.7) {
    adjusted = Math.max(0.62, lightness - BRIGHT_TRIM);
  }

  return toHex(hue, Math.min(1, saturation * SATURATION_GAIN), adjusted);
}

export async function loadCodeTheme() {
  const loaded = await bundledThemes["dark-plus"]();
  const source = "default" in loaded ? loaded.default : loaded;
  const theme = structuredClone(source) as typeof source & {
    name: string;
    colors?: Record<string, string>;
    tokenColors?: { settings?: { foreground?: string } }[];
  };

  theme.name = "mewui-vivid";
  for (const token of theme.tokenColors ?? []) {
    const foreground = token.settings?.foreground;
    if (typeof foreground === "string") {
      token.settings!.foreground = vivid(foreground);
    }
  }
  if (theme.colors?.["editor.foreground"] !== undefined) {
    theme.colors["editor.foreground"] = vivid(theme.colors["editor.foreground"]);
  }

  return theme;
}
