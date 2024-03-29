const hyArticle = {
  name: "Read Article",
  url: "https://blog.hyperiondev.com/index.php/2022/10/06/student-success-story-lerato-from-architectural-technologist-to-full-stack-web-developer/",
  img: "/projects/articles/hyperion.png",
  altText: "Article featuring Lerato Mokgwabona",
};
const stages = {
  empathize: {
    name: "Empathize",
    img: "/projects/stages/empathize.png",
    altText: "empathize icon",
  },
  define: {
    name: "Define",
    img: "/projects/stages/define.png",
    altText: "define icon",
  },
  ideate: {
    name: "Ideate",
    img: "/projects/stages/ideate.png",
    altText: "ideate icon",
  },
  prototype: {
    name: "Prototype",
    img: "/projects/stages/prototype.png",
    altText: "prototype icon",
  },
  test: {
    name: "Test",
    img: "/projects/stages/test.png",
    altText: "test icon",
  },
};
const market = {
  charette: {
    name: "The Charette",

    img: "/projects/market/uds.png",
    altText: "illustration of how our persona's trading mat and the redesign",
    description:
      "the Charette was an initial conceptual response to the issues which were found on the site. A persona called Neli was selected and the tool which she uses to facilitate her practices on the site was observed. It was then reconstructed to improve the efficiency of these nomadic practices on the site. Design was informed by the user and how they utilize the object.",
  },
  dResearch: {
    name: "Design  Research",
    url: "#research",
    img: "/projects/market/market-slide.png",
    altText: "Honours Research Project 2020",
  },
  ethno: {
    img: "/projects/market/ethno.png",
    altText: "Ethnographic map of the users found in Newtown",
  },
  nosign: {
    img: "/projects/market/nosign.png",
    altText: "No vending sign in Newtown",
  },
  diagram: {
    img: "/projects/market/diagram.png",
    altText: "The Market I Schemes",
  },
  final: [
    {
      name: "The Market Intervention",
      img: "/projects/market/final/market-1.png",
      altText: "Honours Research Project 2020 Page 1",
    },
    {
      name: "The Market Intervention Exhibition",
      img: "/projects/market/final/market2.png",
      altText: "Honours Research Project 2020 Page 2 Exhibition",
    },
    {
      name: "The Market Intervention Workshop",
      img: "/projects/market/final/market3.png",
      altText: "Honours Research Project 2020 Page 2",
    },
    {
      name: "The Market Intervention Market",
      img: "/projects/market/final/market4.png",
      altText: "Honours Research Project 2020 Page 2",
    },
  ],
  marketI: {
    tech: [
      "Photoshop",
      "Urban Design",
      "Research",
      "Interviews",
      "3D Modelling",
    ],
    name: "The Market Intervention",
    url: "/market",
    img: "/projects/market/final/market-1.png",
    altText: "Honours Research Project 2020",
    description:
      "The Market Intervention is a project that tackles the marginalisation of informal traders in the context of Newtown, Johannesburg. It is a lightweight scheme that reinforces and activates the heritage buildings on the site. ",
  },
};
const tbh = {
  static: false,
  name: "Thabisa Baby House",
  tech: ["MongoDB", "Express", "Next.js", "Javascript"],
  bg: "bgDark",
  url: "https://thabisa-baby-house.vercel.app/",
  description:
    "The Thabisa Baby House website is a full-stack MERN application using Next.js.",
  img: "/projects/thabisa.png",
  git: "https://github.com/Lerato029/thabisababyhouse",
};
const hopeA = {
  static: true,
  img: "/projects/hope.png",
  bg: "bgWhite",
  name: "Hope Academy",
  tech: ["ASP.NET", "HTML", "CSS", "Javascript"],
  description: "Catalogue Website for a school in Qqeberha South Africa",
  url: "http://www.hopeacademy.co.za/",
};
const weatherApp = {
  img: "/projects/weather.png",
  bg: "bgYellow",
  name: "My Weather App",
  description:
    "Website where one can get weather updates. Created with Next.js and uses the Open Weather API",
  url: "https://my-weather-ilixaqoit-lerato029.vercel.app/",
  git: "https://github.com/Lerato029/my-weather-app",
};
const taskM = {
  concept: {
    img: "/projects/uxui/tm/concept.png",
    altText: "an Illustration of app heirachy",
  },
  currentApp: {
    img: "/projects/uxui/tm/current-app.png",
    altText: "a snippet of the current Task Manager App",
  },
  moodBoard: {
    img: "/projects/uxui/tm/moodboard.png",
    altText: "a MoodBoard showcasing various power user platforms",
  },
  tmSitemap: {
    img: "/projects/uxui/tm/tm-sitemap.png",
    altText: "a illustration of the sitemap",
  },
};
const uxui = {
  taskM: taskM,
  verify: {
    name: "Task Manager Platform Design",
    tech: ["Figma", "Design Thinking", "Prototyping"],
    img: "/projects/uxui/verify-mock.png",
    altText: "Mockups of a platform application",
    url: "/task",
    description:
      "In this project, I led the transformation of the Task Manager App, a vital tool for power users. My role involved crafting a fresh design concept and implementing a robust design system. This initiative aimed to elevate user engagement and satisfaction by infusing the application with intuitive UI components and user-centric guidelines, while preserving its original functionality and visual identity.",
  },
  market: market.marketI,
  // prototype: {
  //   name: "Task Manager Prototype",
  //   img: "/projects/uxui/mockups.png",
  //   altText: "Protype overview of a platform application",
  // },
  // designSystem: {
  //   name: "Task Manager Design System",
  //   img: "/projects/uxui/design-system.png",
  //   altText: "Design System overview of a platform application",
  // },
};
const gdesign = {
  smoke: {
    name: "Logo Design",
    img: "/projects/graphic/logo-design.png",
    altText: "Yellow Hoodie with smoke'n aces logo",
  },
  uhuruES: {
    name: "Uhuru Engagement Services",
    tech: ["WordPress", "CSS", "Figma", "Affinity Publisher"],
    img: "/projects/graphic/uhuru-es.png",
    altText: "Company CI elements",
    description:
      "I designed and created this responsive web application on WordPress for an Accounting Start-Up based in Gauteng South Africa. I was also commissioned to create all of their company branding elements such as email signatures, business profiles, business cards, and posters to name a few.",
  },
  uhuruESWeb: {
    name: "Uhuru ES Website",
    img: "/projects/websites/uhuru-website.png",
    altText: "Uhuru ES Website Mock-ups overview",
    url: "https://uhuruengagement.co.za",
  },
  runiDTS: {
    name: "Runi Dynamic Trading Solutions",
    img: "/projects/graphic/runi.png",
    tech: ["WordPress", "CSS", "Figma", "Affinity Publisher"],
    altText: "Company CI elements for RUNI",
    description:
      "I designed and created this responsive web application on WordPress for Runi Dynamic Trading Solutions based in Gauteng South Africa. I was also commissioned to create all of their company branding elements such as email signatures, business profiles, business cards, and posters to name a few.",
  },
  runiDTSWeb: {
    name: "Runi DTS Website",
    img: "/projects/websites/runi-website.png",
    altText: "Runi TDS Website Mock-ups overview",
    url: "https://runi.co.za",
  },
  runiStickers: {
    name: "Runi DTS Stickers",
    img: "/projects/graphic/stickers.png",
    altText: "Runi TDS Stickers overview",
  },
  instagramPosts: [
    {
      name: "Tax Season Post",
      img: "/projects/graphic/tax-season.png",
      altText: "Tax Season Post",
    },
    {
      name: "Freedom Day Post",
      img: "/projects/graphic/fd.png",
      altText: "Freedom Day Poster",
    },
    {
      name: "Woman's Day Post",
      img: "/projects/graphic/women.png",
      altText: "Woman's Day Post",
    },
  ],
};

const sectionsPortfolio = [
  {
    name: "Explore UX/UI",
    url: "#uiux",
    img: "/projects/uxui/verify-mock.png",
    altText: "Mockups of a platform application",
  },
  market.dResearch,
  hyArticle,
  {
    name: "Explore Websites",
    url: "#websites",
    img: "/projects/websites/hope.png",
    altText: "Hope Academy Website mock up preview",
  },
  {
    name: "Explore Graphic Design",
    url: "#gdesign",
    img: "/projects/graphic/runi.png",
    altText:
      "Runi Dynamic Trading Solution Corporate Identity Elements preview",
  },
];
const blogs = [
  {
    name: "Hashing In JS",
    img: "/hash.svg",
    bg: "#FDC128",
    url: "https://hashing-in-javascript-by-lerato.blogspot.com/2021/06/how-javascript-uses-hashing.html",
  },
  {
    name: "The Big O Notation",
    img: "/bigO.svg",
    bg: "#16333F",
    url: "https://thebigonotationbylerato.blogspot.com/2021/06/the-big-o-notation.html",
  },
  {
    name: "Concurrency",
    img: "/consvg.svg",
    bg: "#C81E2A",
    url: "https://webdevconcurrencybylerato.blogspot.com/2021/06/what-is-concurreny.html",
  },
  {
    name: "Interfaces",
    img: "/interfaces.svg",
    bg: "#6EC7AA",
    url: "https://interfaces-in-web-development.blogspot.com/2021/06/interfaces-in-object-oriented.html",
  },
];
const caseStudies = [
  {
    static: true,
    img: "/projects/uxui/the-pm-app.png",
    bg: "bgDark",
    tech: ["Figma", "Prototyping", "Research"],
    name: "The PleatMeal App",
    description:
      "The PleatMeal App is an app created to help people who wish to incorporate more balanced meals throughout their days with the limitations of having very little time to prepare these meals.",
    url: "https://coursera-assessments.s3.amazonaws.com/assessments/1688808444611/39cd17ec-205e-4ae1-afff-377ded8cfe68/Pleat%20App.pdf",
  },
];

export {
  hyArticle,
  tbh,
  hopeA,
  weatherApp,
  uxui,
  gdesign,
  sectionsPortfolio,
  blogs,
  caseStudies,
  market,
  stages,
};
