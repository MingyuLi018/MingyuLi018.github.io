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
  },{id: "nav-projects",
          title: "projects",
          description: "A collection of research projects and competition awards. / 科研项目与竞赛获奖集锦。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "论文发表（按年份倒序）/ Publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "李明宇的个人简历 / Curriculum Vitae of Li Mingyu.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-misc",
          title: "misc",
          description: "Miscellaneous / 杂记",
          section: "Navigation",
          handler: () => {
            window.location.href = "/misc/";
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
          section: "News",},{id: "projects-precision-grasping-with-2d-camera-and-embedded-system",
          title: 'Precision Grasping with 2D Camera and Embedded System',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/car_race_arm/";
            },},{id: "projects-dual-vision-infinite-roll-hand-for-edge-native-grasping",
          title: 'Dual-Vision Infinite-Roll Hand for Edge-Native Grasping',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dexterous_hand/";
            },},{id: "projects-emawd-manual-work-simulation-in-smart-manufacturing",
          title: 'emaWD Manual Work Simulation in Smart Manufacturing',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/emaWD/";
            },},{id: "projects-edge-ai-snake-robot-for-cross-domain-operations",
          title: 'Edge-AI Snake Robot for Cross-Domain Operations',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/smart_snake/";
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
