import type { Copy } from "./en";

export const ko: Copy = {
  lang: "ko",
  path: "/ko/",
  otherLocaleLabel: "English",
  otherLocalePath: "/",
  title: "MewUI",
  description:
    "코드로 UI를 만드는 크로스 플랫폼 .NET GUI 프레임워크입니다. 데스크톱 앱이 몇 MB짜리 네이티브 실행 파일 하나로 나오고, .NET 런타임 없이 실행됩니다.",

  nav: {
    docs: "문서",
    nuget: "NuGet",
    github: "GitHub",
  },

  footer: {
    tagline: "코드로 UI를 만드는 크로스 플랫폼 .NET GUI 프레임워크. MIT 라이선스.",
    project: "프로젝트",
    community: "커뮤니티",
    documentation: "문서",
    demo: "브라우저 데모",
    contributing: "기여 안내",
    codeOfConduct: "행동 강령",
    notices: "서드파티 고지",
    license: "라이선스",
    version: (version: string) =>
      `NuGet 최신 버전 ${version}. 사랑하는 내 사월이를 기억하며.`,
  },

  hero: {
    headline: "C#으로 만드는 데스크톱 앱, 작은 네이티브 파일 하나로.",
    lede: "코드로 UI를 만드는 크로스 플랫폼 .NET GUI 프레임워크입니다. 앱은 몇 MB짜리 네이티브 실행 파일 하나로 나오고, .NET 런타임 없이 실행됩니다. XAML 없이 C#만으로 작성하며, 디자이너 도구도 필요 없습니다.",
    demo: "브라우저에서 바로 실행해 보기",
    meta: (frameworks: string, version: string) =>
      `MIT 라이선스. .NET ${frameworks}. 최신 릴리스 ${version}.`,
    lightAlt: "라이트 테마로 실행한 MewUI Gallery 샘플",
    darkAlt: "같은 샘플의 다크 테마",
    compareLabel: "좌우로 움직여 라이트 테마와 다크 테마 비교",
    caption:
      "마우스를 좌우로 움직이면 테마가 바뀌고, 클릭하면 더 크게 볼 수 있습니다. 실행 중에 테마 객체 하나만 바꾼 결과입니다.",
    dialogLabel: "두 테마로 본 Gallery 샘플",
    close: "닫기",
  },

  targets: {
    windows: { name: "Windows", detail: "10 이상" },
    linux: { name: "Linux", detail: "X11" },
    macos: { name: "macOS", detail: "12 이상" },
    browser: { name: "브라우저", detail: "WebAssembly" },
  },

  try: {
    title: "설치 없이 먼저 써보기",
    lede: "준비물이 적은 순서로 세 가지 방법이 있습니다.",
    browser: {
      title: "브라우저에서",
      body: "아무것도 설치하지 않아도 됩니다. Gallery 샘플을 WebAssembly로 컴파일해 브라우저에서 그대로 실행합니다.",
      action: "Gallery 열기",
    },
    command: {
      title: "명령 한 줄",
      body: ".NET 10 SDK만 있으면 됩니다. 저장소를 클론하거나 프로젝트를 만들 필요 없이, GitHub에서 소스 파일 하나를 받아 바로 실행합니다.",
    },
    project: {
      title: "내 프로젝트에",
      body: "메타패키지 하나로 코어와 플랫폼 호스트, 렌더링 백엔드가 모두 들어옵니다.",
    },
  },

  why: {
    title: "MewUI의 특징",
    lede: "목표는 하나입니다. 작고, 런타임 설치 없이 실행되며, 빠르게 뜨는 데스크톱 앱입니다.",
    aot: {
      title: "NativeAOT와 트리밍 우선",
      body: "리플렉션 없는 명시적인 코드라 NativeAOT로 빌드해 .NET 런타임 없이 실행되는 실행 파일 하나로 배포합니다.",
    },
    small: {
      title: "처음부터 작게",
      body: (hello: string, gallery: string) =>
        `AOT 빌드의 결과물은 Hello World 창 ${hello} MB, 전체 컨트롤 갤러리 ${gallery} MB입니다.`,
    },
    markup: {
      title: "XAML 없는 C# 마크업",
      body: "C#의 Fluent API만으로 UI 트리를 구성합니다. 코드 작성 편의를 위한 분석기와 포매터가 제공되고, 창 프리뷰는 주요 IDE에서 동작합니다.",
    },
    targets: {
      title: "코드 하나로 네 곳에서",
      body: "Windows, Linux(X11), macOS 데스크톱에 더해, 같은 UI를 WebAssembly로 빌드해 브라우저에서도 실행합니다.",
    },
  },

  size: {
    title: "배포 크기",
    lede: "NativeAOT로 퍼블리시한 주 실행 파일의 크기이며, 저장소에 있는 측정 도구로 잰 값입니다. 1 MB = 1024 KB 기준입니다.",
    helloCaption: (platformBackend: string) => `Hello World, ${platformBackend}`,
    galleryCaption: "Gallery (전체 컨트롤 쇼케이스)",
    columnPlatform: "플랫폼 / 백엔드",
    columnHello: "Hello World",
    columnGallery: "Gallery",
  },

  code: {
    title: "앱 전체가 C#입니다",
    lede: "컨트롤을 Fluent API로 이어 붙입니다. 창 뒤에 숨은 마크업 파일이나 생성된 partial 클래스가 없어서, 보이는 코드가 실행되는 코드 전부입니다.",
  },

  binding: {
    title: "리플렉션 없는 바인딩",
    lede: "바인딩 소스로 Observable 값, INotifyPropertyChanged 뷰 모델, 다른 요소의 속성을 쓸 수 있고, 중첩 경로도 지원합니다. 경로는 컴파일 시점에 해석되므로 트리밍과 AOT에서도 그대로 동작합니다.",
  },

  tooling: {
    title: "개발 도구",
    lede: "코드로 만든다고 화면을 못 보는 것은 아닙니다. 에디터 안에서 창을 미리 보고, 실행 중인 앱에 수정이 바로 반영됩니다.",
    preview: {
      name: "에디터 프리뷰",
      body: "앱을 띄우지 않고 Window나 UserControl을 에디터 패널에 렌더링합니다. Visual Studio, VS Code, Rider를 지원하며, 처음 한 번만 빌드하고 이후에는 저장할 때마다 다시 그립니다.",
    },
    hotReload: {
      name: "핫 리로드",
      body: "dotnet watch로 실행하면 수정한 내용이 실행 중인 앱에 반영됩니다. 빌드 코드가 실제로 바뀐 노드만 다시 만들고, 따로 설정할 것은 없습니다.",
    },
    devTools: {
      name: "DevTools",
      body: "요소 인스펙터, 비주얼 트리 창, 프레임 통계 오버레이, 프로파일러 타임라인을 제공합니다. Debug 빌드에서는 기본으로 켜지고 Release에서는 꺼집니다.",
    },
    analyzers: {
      name: "분석기",
      body: "Fluent 마크업용 Roslyn 분석기와 리팩터링입니다. 객체 초기화자를 체인으로 바꾸거나, 체인을 펼치고 접거나, 여러 문장을 체인 하나로 합칩니다. 빌드 때만 동작하므로 배포 결과물에는 들어가지 않습니다.",
    },
  },

  ai: {
    title: "코딩 에이전트와 함께",
    lede: "Claude Code, Codex, GitHub Copilot용 에이전트 스킬을 제공합니다. 에이전트가 추측으로 채우던 부분을 미리 알려주어, 생성된 코드가 실제로 컴파일되게 합니다.",
    action: "에이전트 스킬 보기",
    recipes: {
      title: "패키지 레시피",
      body: "대상 플랫폼별로 어떤 메타패키지를 참조해야 하는지, 동작하는 프로젝트 파일은 어떤 모양인지.",
    },
    markup: {
      title: "마크업 API",
      body: "Fluent API 전체 목록. 없는 메서드를 지어내지 않고 컴파일되는 코드를 만듭니다.",
    },
    verify: {
      title: "빌드와 검증",
      body: "플랫폼별로 빌드하고 퍼블리시한 뒤 결과를 확인하는 방법.",
    },
  },

  controls: {
    title: "기본 제공 컨트롤",
    lede: "버튼, 텍스트 입력, 리스트, 트리, 그리드, 탭, 메뉴, 툴바, 피커, 내비게이션, 그리고 이들을 배치하는 패널까지 갖추고 있습니다. Gallery 샘플에서 전부 볼 수 있고, 설치 없이 브라우저에서 실행됩니다.",
    openGallery: "Gallery 열기",
    samples: "샘플 둘러보기",
    groups: {
      buttons: "버튼",
      text: "텍스트",
      selection: "선택",
      data: "데이터",
      values: "값",
      containers: "컨테이너",
      menus: "메뉴와 바",
      media: "미디어",
      app: "앱",
      more: "기타",
      panels: "패널",
    },
  },

  extensions: {
    title: "확장 패키지",
    lede: "코어는 가볍게 유지하고, 큰 기능은 필요할 때만 참조하는 별도 패키지로 제공합니다.",
    mewDock:
      "Visual Studio 스타일 도킹. 문서·도구 탭, 드래그로 재배치, 분할, 자동 숨김, 팝아웃.",
    svg: "순수 C#으로 구현한 SVG 파싱·렌더링. System.Drawing 없이 동작하며 AOT와 호환됩니다.",
    skia: "SkiaSharp로 그리는 SkiaCanvasView. 렌더링 백엔드와 GPU 텍스처를 직접 주고받아 빠르게 동작합니다.",
    mewCharts:
      "LiveChartsCore 엔진 기반의 직교·파이·폴라 차트. SkiaSharp에 의존하지 않습니다.",
    webView2:
      "Win32 WebView2 컨트롤. Microsoft Edge WebView2 런타임이 필요합니다.",
  },

  platforms: {
    title: "플랫폼과 렌더링 백엔드",
    lede: "창 관리는 플랫폼 호스트가, 그리기는 렌더링 백엔드가 맡습니다. 퍼블리시할 때 백엔드 하나만 고르면 나머지는 트리밍됩니다.",
    columnPlatform: "플랫폼",
    columnHost: "호스트",
    columnBackends: "백엔드",
  },

  status: {
    title: "프로젝트 상태",
    body: (version: string) =>
      `현재 버전은 ${version}이고 활발히 개발 중입니다. 공개 API가 아직 안정화 단계라 마이너 릴리스 사이에도 호환이 깨지는 변경이 있을 수 있습니다. 패키지 버전을 고정하고, 업그레이드 전에 릴리스 노트를 확인하세요.`,
    action: "릴리스 노트",
  },

  docs: {
    title: "문서",
    lede: "영어와 한국어로 제공됩니다.",
    entries: {
      "Installation.md": "설치와 패키지",
      "CSharpMarkup.md": "C# 마크업",
      "Binding.md": "바인딩",
      "Layout.md": "레이아웃",
      "Styling.md": "스타일링",
      "Theme.md": "테마",
      "PropertySystem.md": "속성 시스템",
      "ItemsAndTemplates.md": "아이템과 템플릿",
      "ControlTemplate.md": "컨트롤 템플릿",
      "CustomControls.md": "사용자 컨트롤",
      "CommandSystem.md": "명령 시스템",
      "ApplicationLifecycle.md": "애플리케이션 수명주기",
      "HotReload.md": "핫 리로드",
      "Preview.md": "에디터 프리뷰",
      "DevTools.md": "DevTools",
    },
  },
};
