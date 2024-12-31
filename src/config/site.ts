export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Vite + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/sameermcfc",
    sponsor: "https://www.justgiving.com/page/donatetogaza",
    instagram: "https://www.instagram.com/sameersnapshots/",
    linkedin: "https://www.linkedin.com/in/sameer-mahmud-5b2399144/"
  },
  projectsItems: [
    {
      name:"LLM Message Generator",
      href:"https://ymb-web-app-391968102571.australia-southeast1.run.app/",
      imageUrl: "/img/message-generator.png",
      desc: "Rust | React"
    },
    {
      name:"Al Tadhkirah Institute Website",
      href:"https://altadhkirah.org.au/",
      imageUrl: "/img/altadhkirah.png",
      desc: "Wordpress | Elementor"
    },
    {
      name:"Etheruem Card Creator",
      href:"https://ethereum-card-maker-7bzmx5tez-sameermcfc.vercel.app/",
      imageUrl:"/img/ethcardmaker.png",
      desc: "React"
    },
    {
      name:"Vue Quiz App",
      href:"https://sameer-mahmud.github.io/vuequizapp/",
      imageUrl: "/img/Vue-QuizApp.png",
      desc: "Vue"
    },

  ]
};
