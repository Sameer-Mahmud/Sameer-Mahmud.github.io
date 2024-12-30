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
  links: {
    github: "https://github.com/sameermcfc",
    sponsor: "https://www.justgiving.com/page/donatetogaza",
    instagram: "https://www.instagram.com/sameersnapshots/",
    linkedin: "https://www.linkedin.com/in/sameer-mahmud-5b2399144/"
  },
};
