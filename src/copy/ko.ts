import type { Copy } from "./en";

export const ko: Copy = {
  lang: "ko",
  path: "/ko/",
  otherLocaleLabel: "English",
  otherLocalePath: "/",
  title: "MewUI",
  description:
    "크로스 플랫폼 코드 우선 .NET GUI 프레임워크. 데스크톱 앱을 몇 메가바이트짜리 네이티브 실행 파일 하나로 배포하며, .NET 런타임 설치가 필요 없습니다.",

  nav: {
    docs: "문서",
    nuget: "NuGet",
    github: "GitHub",
  },

  footer: {
    tagline:
      "크로스 플랫폼 코드 우선 .NET GUI 프레임워크. MIT 라이선스로 배포됩니다.",
    project: "프로젝트",
    community: "커뮤니티",
    documentation: "문서",
    demo: "브라우저 데모",
    contributing: "기여 안내",
    codeOfConduct: "행동 강령",
    notices: "서드파티 고지",
    license: "라이선스",
    version: (version: string) =>
      `NuGet 게시 버전 ${version}. 사랑하는 사월을 기억하며.`,
  },

  hero: {
    headline: "C#으로 만드는 데스크톱 앱, 작은 네이티브 파일 하나로.",
    lede: "크로스 플랫폼 코드 우선 .NET GUI 프레임워크입니다. 앱은 몇 메가바이트짜리 네이티브 실행 파일 하나로 배포되고, .NET 런타임 설치 없이 실행됩니다. XAML도 디자이너도 없습니다.",
    demo: "브라우저에서 데모 실행",
    meta: (frameworks: string, version: string) =>
      `MIT 라이선스. .NET ${frameworks}. 최신 릴리스 ${version}.`,
    lightAlt: "라이트 테마로 실행한 MewUI Gallery 샘플",
    darkAlt: "같은 샘플의 다크 테마",
    compareLabel: "라이트와 다크 테마를 비교하려면 좌우로 움직이세요",
    caption:
      "좌우로 움직여 비교하고, 클릭하면 창 전체를 볼 수 있습니다. 테마 객체 하나를 실행 중에 바꾼 결과입니다.",
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
    title: "설치하기 전에 먼저 써보기",
    lede: "요구하는 것이 적은 순서대로 세 가지 경로가 있습니다.",
    browser: {
      title: "브라우저에서",
      body: "설치할 것이 없습니다. Gallery 샘플은 같은 코드를 WebAssembly로 컴파일한 것입니다.",
      action: "Gallery 열기",
    },
    command: {
      title: "명령 한 줄",
      body: ".NET 10 SDK만 있으면 됩니다. 클론도, 프로젝트도, 템플릿도 필요 없습니다. 이 명령은 GitHub에서 코드를 받아 실행합니다.",
    },
    project: {
      title: "내 프로젝트에",
      body: "메타패키지 하나가 코어, 플랫폼 호스트, 렌더링 백엔드를 함께 가져옵니다.",
    },
  },

  why: {
    title: "MewUI를 쓰는 이유",
    lede: "이 프레임워크는 한 가지를 위해 최적화되어 있습니다. 작고, 자체 완결적이며, 빠르게 뜨는 데스크톱 앱입니다.",
    aot: {
      title: "NativeAOT와 트리밍 우선",
      body: "명시적인 코드 경로와 소스 생성 interop을 쓰고, 리플렉션 기반 바인딩이 없습니다. .NET 런타임 없이 실행되는 네이티브 실행 파일 하나로 배포합니다.",
    },
    small: {
      title: "작게 설계됨",
      body: (hello: string, gallery: string) =>
        `Hello World 창은 ${hello} MB, 전체 컨트롤 갤러리는 ${gallery} MB로 배포됩니다. 이 페이지의 모든 수치는 추정이 아니라 실측입니다.`,
    },
    markup: {
      title: "XAML 없는 C# 마크업",
      body: "순수 C#의 fluent API로 UI 트리를 구성합니다. 마크업 컴파일러도, 디자이너도, 따로 배울 언어도 없습니다.",
    },
    targets: {
      title: "하나의 코드베이스, 네 개의 대상",
      body: "Windows, Linux/X11, macOS 데스크톱 호스트에 더해, 같은 UI를 브라우저에서 실행하는 WebAssembly 빌드가 있습니다.",
    },
  },

  size: {
    title: "주장이 아니라 측정값",
    lede: "여기 있는 모든 수치는 NativeAOT 퍼블리시의 주 실행 파일 크기이며, 저장소의 크기 측정 도구로 잰 값입니다. 이진 단위 기준이라 1 MB는 1024 KB입니다.",
    helloCaption: (platformBackend: string) => `Hello World, ${platformBackend}`,
    galleryCaption: "Gallery, 전체 컨트롤 쇼케이스",
    columnPlatform: "플랫폼 / 백엔드",
    columnHello: "Hello World",
    columnGallery: "Gallery",
  },

  code: {
    title: "앱 전체가 C#입니다",
    lede: "컨트롤은 fluent API로 구성합니다. 창 뒤에 마크업 파일도, 디자이너도, 생성된 partial 클래스도 없습니다.",
  },

  binding: {
    title: "리플렉션 없는 바인딩",
    lede: "소스는 observable 값, 평범한 INotifyPropertyChanged 뷰 모델, 또는 다른 요소의 속성입니다. 점으로 이어진 경로는 컴파일 시점에 단계별 구독으로 분해되므로 트리밍과 AOT가 그대로 동작합니다.",
  },

  tooling: {
    title: "만드는 동안 쓰는 도구",
    lede: "코드 우선이라고 해서 눈을 감고 만드는 것은 아닙니다. 프리뷰가 에디터 안에 창을 그리고, 실행 중인 앱이 편집을 그대로 받습니다.",
    preview: {
      name: "에디터 프리뷰",
      body: "앱을 실행하지 않고 Window나 UserControl을 에디터 패널에 렌더합니다. 세션을 시작할 때 한 번 빌드하고, 이후 저장할 때마다 다시 그립니다.",
    },
    hotReload: {
      name: "핫 리로드",
      body: "dotnet watch로 실행하면 편집이 실행 중인 앱에 반영됩니다. MewUI는 빌드 코드가 실제로 바뀐 노드만 다시 구성하며, 활성화를 위해 선언할 것이 없습니다.",
    },
    devTools: {
      name: "DevTools",
      body: "요소 인스펙터, 비주얼 트리 창, 프레임 통계 오버레이, 프로파일러 타임라인. Debug에서 기본으로 켜지고 Release에서는 꺼집니다.",
    },
    analyzers: {
      name: "분석기",
      body: "fluent 마크업을 위한 Roslyn 분석기와 리팩터링입니다. 객체 초기화자를 체인으로 바꾸고, 체인을 펼치거나 접고, 문장을 체인으로 병합합니다. 빌드 시점에만 동작하므로 배포 산출물에는 아무것도 들어가지 않습니다.",
    },
  },

  ai: {
    title: "코딩 에이전트가 다루도록 만들어졌습니다",
    lede: "MewUI는 Claude Code, Codex, GitHub Copilot용 에이전트 스킬을 함께 제공합니다. 에이전트가 추측했을 사실을 미리 알려주어, 생성한 코드가 실제로 컴파일되게 합니다.",
    action: "에이전트 스킬 보기",
    recipes: {
      title: "패키지 레시피",
      body: "대상 플랫폼에 어떤 메타패키지를 참조해야 하는지, 동작하는 프로젝트 파일이 어떤 모양인지.",
    },
    markup: {
      title: "마크업 API",
      body: "fluent 표면 전체. 없는 메서드를 지어내는 대신 컴파일되는 코드를 생성합니다.",
    },
    verify: {
      title: "빌드와 검증",
      body: "각 플랫폼에서 빌드하고 퍼블리시하고 결과를 확인하는 방법.",
    },
  },

  controls: {
    title: "기대하는 컨트롤은 기본 제공",
    lede: "버튼, 텍스트 입력, 리스트, 트리, 그리드, 탭, 메뉴, 툴바, 피커, 내비게이션, 그리고 이들을 배치할 패널이 있습니다. Gallery 샘플이 전부를 다루며, 설치 없이 브라우저에서 실행됩니다.",
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
    title: "선택형 확장",
    lede: "코어는 얇게 유지됩니다. 규모가 큰 기능은 필요할 때만 참조하는 별도 패키지로 제공됩니다.",
    mewDock:
      "Visual Studio 방식의 도킹. 문서와 도구 탭, 드래그 재배치, 분할, 자동 숨김, 팝아웃.",
    svg: "순수 C# SVG 파싱과 렌더링. System.Drawing을 쓰지 않으며 AOT와 호환됩니다.",
    skia: "SkiaSharp로 그리는 SkiaCanvasView. 백엔드별 무복사 GPU interop을 제공합니다.",
    mewCharts:
      "LiveChartsCore 엔진 기반의 직교, 파이, 폴라 차트. SkiaSharp 의존성이 없습니다.",
    webView2:
      "Win32 WebView2 컨트롤. Microsoft Edge WebView2 런타임이 필요합니다.",
  },

  platforms: {
    title: "플랫폼과 렌더링 백엔드",
    lede: "창 관리는 플랫폼 호스트를 거치고, 그리기는 백엔드를 거칩니다. 퍼블리시 시점에 백엔드 하나를 골라 나머지를 트리밍할 수 있습니다.",
    columnPlatform: "플랫폼",
    columnHost: "호스트",
    columnBackends: "백엔드",
  },

  status: {
    title: "프로젝트 현재 상태",
    body: (version: string) =>
      `MewUI는 ${version}이며 활발히 개발 중입니다. 공개 API가 아직 안정화되는 중이라 마이너 릴리스 사이에 파괴적 변경이 있을 수 있습니다. 패키지 버전을 고정하고 업그레이드 전에 릴리스 노트를 확인하십시오.`,
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
