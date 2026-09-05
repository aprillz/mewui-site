import { bundledThemes } from "shiki";

// Sampled from the editor capture the palette was taken from, then mapped onto
// the Dark+ token colors that carry the same meaning. Dark+ supplies the scope
// coverage; these values supply the look.
const REMAP: Record<string, string> = {
  "#569CD6": "#93C763", // keywords and storage: new, var, class
  "#C586C0": "#93C763", // control keywords
  "#4EC9B0": "#4EC9B0", // types
  "#DCDCAA": "#DCDCAA", // methods
  "#9CDCFE": "#70B9E3", // parameters and properties
  "#4FC1FF": "#70B9E3", // constant locals
  "#CE9178": "#EC7600", // strings
  "#D16969": "#EC7600", // regex literals
  "#B5CEA8": "#FFCD22", // numbers
  "#D7BA7D": "#FFCD22", // escapes
  "#D4D4D4": "#F1F2F3", // plain text
};

const FOREGROUND = "#F1F2F3";
const BACKGROUND = "#1E1E1E";

function remap(color: string): string {
  return REMAP[color.toUpperCase()] ?? color;
}

export async function loadCodeTheme() {
  const loaded = await bundledThemes["dark-plus"]();
  const source = "default" in loaded ? loaded.default : loaded;
  const theme = structuredClone(source) as typeof source & {
    name: string;
    colors?: Record<string, string>;
    tokenColors?: { settings?: { foreground?: string } }[];
  };

  theme.name = "mewui-editor";
  for (const token of theme.tokenColors ?? []) {
    const foreground = token.settings?.foreground;
    if (typeof foreground === "string") {
      token.settings!.foreground = remap(foreground);
    }
  }

  theme.colors ??= {};
  theme.colors["editor.foreground"] = FOREGROUND;
  theme.colors["editor.background"] = BACKGROUND;

  return theme;
}
