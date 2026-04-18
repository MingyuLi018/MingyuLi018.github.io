// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "论文发表（按年份倒序）/ Publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "研究与工程项目集锦 / A collection of research and engineering projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "李明宇的个人简历 / Curriculum Vitae of Li Mingyu.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-competitions",
          title: "competitions",
          description: "Awards and competition photos / 竞赛获奖与照片集锦",
          section: "Navigation",
          handler: () => {
            window.location.href = "/competitions/";
          },
        },{id: "news-utility-model-patent-authorized-by-china-national-intellectual-property-administration",
          title: 'Utility model patent authorized by China National Intellectual Property Administration.',
          description: "",
          section: "News",},{id: "news-won-multiple-national-level-competition-awards-in-robotics-and-engineering",
          title: 'Won multiple national-level competition awards in robotics and engineering.',
          description: "",
          section: "News",},{id: "news-first-author-paper-accepted-at-ieee-icarm-2025",
          title: 'First-author paper accepted at IEEE ICARM 2025.',
          description: "",
          section: "News",},{id: "projects-dexterous-hand-zero-shot-visual-grasping",
          title: 'Dexterous Hand Zero-Shot Visual Grasping',
          description: "灵巧手零样本视觉抓取 / Zero-shot visual grasping using dexterous robotic hands.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-robotic-arm-embedded-control",
          title: 'Robotic Arm Embedded Control',
          description: "机械臂嵌入式控制 / Embedded control system for robotic arms with real-time control.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-intelligent-manufacturing-simulation",
          title: 'Intelligent Manufacturing Simulation',
          description: "智能制造仿真 / Simulation and optimization of intelligent manufacturing processes.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%32%33%35%32%36%35%39@%74%6F%6E%67%6A%69.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/MingyuLi018", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0009-4791-9253", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
