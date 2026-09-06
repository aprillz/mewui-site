// Every translatable string on the page. Structure (icons, links, ids) stays in
// the components, so a locale file only ever carries words.
export const en = {
  lang: "en",
  path: "/",
  otherLocaleLabel: "한국어",
  otherLocalePath: "/ko/",
  title: "MewUI",
  description:
    "A cross-platform, code-first .NET GUI framework. Desktop apps publish as a single native executable of a few megabytes, with no .NET runtime to install.",

  nav: {
    docs: "Docs",
    nuget: "NuGet",
    github: "GitHub",
  },

  footer: {
    tagline:
      "A cross-platform, code-first .NET GUI framework. Released under the MIT License.",
    project: "Project",
    community: "Community",
    documentation: "Documentation",
    demo: "Browser demo",
    contributing: "Contributing",
    codeOfConduct: "Code of conduct",
    notices: "Third party notices",
    license: "License",
    version: (version: string) =>
      `Version ${version} on NuGet. In loving memory of April.`,
  },

  hero: {
    headline: "Desktop apps in C#, shipped as one small native file.",
    lede: "A cross-platform, code-first .NET GUI framework. Apps publish as a single native executable of a few megabytes and run with no .NET runtime installed. No XAML, no designer.",
    demo: "Run the demo in your browser",
    meta: (frameworks: string, version: string) =>
      `MIT licensed. .NET ${frameworks}. Latest release ${version}.`,
    lightAlt: "The MewUI Gallery sample with the light theme",
    darkAlt: "The same sample with the dark theme",
    compareLabel: "Move across to compare the light and dark themes",
    caption:
      "Move across to compare, click to see the whole window. One theme object, switched at runtime.",
    dialogLabel: "The Gallery sample in both themes",
    close: "Close",
  },

  targets: {
    windows: { name: "Windows", detail: "10 and later" },
    linux: { name: "Linux", detail: "X11" },
    macos: { name: "macOS", detail: "12 and later" },
    browser: { name: "Browser", detail: "WebAssembly" },
  },

  try: {
    title: "Try it before you install anything",
    lede: "Three ways in, ordered by what they ask of you.",
    browser: {
      title: "In your browser",
      body: "Nothing to install. The Gallery sample is the same code compiled to WebAssembly.",
      action: "Open the Gallery",
    },
    command: {
      title: "One command",
      body: "Needs the .NET 10 SDK, nothing else. No clone, no project, no template. This downloads and runs code from GitHub.",
    },
    project: {
      title: "In your own project",
      body: "One metapackage brings the core, the platform hosts and the rendering backends.",
    },
  },

  why: {
    title: "Why MewUI",
    lede: "The framework optimizes for one thing: a small, self contained desktop app that starts fast.",
    aot: {
      title: "NativeAOT and trimming first",
      body: "Explicit code paths and source generated interop, with no reflection based binding. Publish one native executable that runs without a .NET runtime installed.",
    },
    small: {
      title: "Small by design",
      body: (hello: string, gallery: string) =>
        `A Hello World window publishes at ${hello} MB, and the full control gallery at ${gallery} MB.`,
    },
    markup: {
      title: "C# markup, no XAML",
      body: "Build the UI tree with a fluent API in plain C#. A live preview shows the window as you write it, and refactorings keep the chains readable.",
    },
    targets: {
      title: "One codebase, four targets",
      body: "Windows, Linux/X11 and macOS desktop hosts, plus a WebAssembly build that runs the same UI in the browser.",
    },
  },

  size: {
    title: "Deployment size",
    lede: "Every number here is the main executable of a NativeAOT publish, measured by the repository's own size tooling. Binary units, so 1 MB is 1024 KB.",
    helloCaption: (platformBackend: string) => `Hello World, ${platformBackend}`,
    galleryCaption: "Gallery, the full control showcase",
    columnPlatform: "Platform / backend",
    columnHello: "Hello World",
    columnGallery: "Gallery",
  },

  code: {
    title: "The whole app is C#",
    lede: "Controls are composed with a fluent API. There is no markup file, no designer and no generated partial class behind the window.",
  },

  binding: {
    title: "Bindings without reflection",
    lede: "A source is an observable value, an ordinary INotifyPropertyChanged view model, or another element's property. Dotted paths are decomposed into per step subscriptions at compile time, so trimming and AOT keep working.",
  },

  tooling: {
    title: "Tools while you build",
    lede: "Code first does not mean flying blind. The preview draws your window in the editor, and the running app takes your edits as you type.",
    preview: {
      name: "Editor preview",
      body: "Renders a Window or UserControl in an editor panel without launching the app. The session builds once, then every save redraws the panel.",
    },
    hotReload: {
      name: "Hot reload",
      body: "Run under dotnet watch and edits reach the running app. MewUI rebuilds only the nodes whose build code changed, and nothing is declared to enable it.",
    },
    devTools: {
      name: "DevTools",
      body: "An element inspector, a visual tree window, a frame statistics overlay and a profiler timeline. On by default in Debug, off in Release.",
    },
    analyzers: {
      name: "Analyzers",
      body: "Roslyn analyzers and refactorings for fluent markup: turn an object initializer into a chain, expand or collapse one, merge statements into it. Build time only, so nothing reaches the published output.",
    },
  },

  ai: {
    title: "Built to be driven by coding agents",
    lede: "MewUI ships an agent skill for Claude Code, Codex and GitHub Copilot. It gives the agent the facts it would otherwise guess, so what it writes compiles.",
    action: "Read the agent skill",
    recipes: {
      title: "Package recipes",
      body: "Which metapackage to reference for a target, and what a working project file looks like.",
    },
    markup: {
      title: "Markup API",
      body: "The fluent surface, so generated code compiles instead of inventing methods.",
    },
    verify: {
      title: "Build and verify",
      body: "How to build, publish and check the result on each platform.",
    },
  },

  controls: {
    title: "Controls you expect, in the box",
    lede: "Buttons, text input, lists, trees, grids, tabs, menus, toolbars, pickers, navigation, and the panels to lay them out. The Gallery sample exercises all of them, and it runs in the browser with no install.",
    openGallery: "Open the Gallery",
    samples: "Browse the samples",
    groups: {
      buttons: "Buttons",
      text: "Text",
      selection: "Selection",
      data: "Data",
      values: "Values",
      containers: "Containers",
      menus: "Menus and bars",
      media: "Media",
      app: "App",
      more: "More",
      panels: "Panels",
    },
  },

  extensions: {
    title: "Optional extensions",
    lede: "The core stays thin. Larger features ship as separate packages you reference only when you need them.",
    mewDock:
      "Visual Studio style docking: document and tool tabs, drag rearranging, splits, auto hide, popouts.",
    svg: "Pure C# SVG parsing and rendering. No System.Drawing, AOT compatible.",
    skia: "SkiaCanvasView for drawing with SkiaSharp, with zero copy GPU interop per backend.",
    mewCharts:
      "Cartesian, pie and polar charts on the LiveChartsCore engine, without a SkiaSharp dependency.",
    webView2:
      "Win32 WebView2 control. Requires the Microsoft Edge WebView2 runtime.",
  },

  platforms: {
    title: "Platforms and rendering backends",
    lede: "Windowing runs through a platform host, drawing through a backend. Pick one backend at publish time to trim the rest away.",
    columnPlatform: "Platform",
    columnHost: "Host",
    columnBackends: "Backends",
  },

  status: {
    title: "Where the project stands",
    body: (version: string) =>
      `MewUI is at ${version} and under active development. The public API is still being stabilized, so breaking changes can land between minor releases. Pin your package version and read the release notes before upgrading.`,
    action: "Release notes",
  },

  docs: {
    title: "Documentation",
    lede: "In English and Korean.",
    entries: {
      "Installation.md": "Installation and packages",
      "CSharpMarkup.md": "C# markup",
      "Binding.md": "Binding",
      "Layout.md": "Layout",
      "Styling.md": "Styling",
      "Theme.md": "Theme",
      "PropertySystem.md": "Property system",
      "ItemsAndTemplates.md": "Items and templates",
      "ControlTemplate.md": "Control template",
      "CustomControls.md": "Custom controls",
      "CommandSystem.md": "Command system",
      "ApplicationLifecycle.md": "Application lifecycle",
      "HotReload.md": "Hot reload",
      "Preview.md": "Editor preview",
      "DevTools.md": "DevTools",
    },
  },
};

export type Copy = typeof en;
