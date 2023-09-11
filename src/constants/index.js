import {
  linkedin,
  github,
  placeholder,
  email,
  emailWhite,
  githubWhite,
  linkedinWhite,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  { id: "projects", title: "Projects" },
  { id: "blog", title: "Blog" },
  {
    id: "contact",
    title: "Contact",
  },
];

export const footerLinks = [
  {
    title: "About Me",
    links: [
      {
        name: "About",
        link: "about",
      },
      {
        name: "Experience",
        link: "experience",
      },
      {
        name: "Projects",
        link: "projects",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Contact",
        link: "contact",
      },
      {
        name: "Blog",
        link: "blog",
      },
    ],
  },
];

export const placeholderImage = {
  id: "placeholder",
  icon: placeholder,
};

export const socialMedia = [
  {
    id: "social-media-1",
    icon: email,
    link: "mailto:contact@davidurschel.com?body=%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0ASent via DavidUrschel.com",
  },
  {
    id: "social-media-2",
    icon: github,
    link: "https://github.com/davidurschel",
  },
  {
    id: "social-media-3",
    icon: linkedin,
    link: "https://www.linkedin.com/in/david-urschel-2b87231b6/",
  },
];

export const socialMediaWhite = [
  {
    id: "social-media-1",
    icon: emailWhite,
    link: "mailto:contact@davidurschel.com?body=%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0ASent via DavidUrschel.com",
  },
  {
    id: "social-media-2",
    icon: githubWhite,
    link: "https://github.com/davidurschel",
  },
  {
    id: "social-media-3",
    icon: linkedinWhite,
    link: "https://www.linkedin.com/in/david-urschel-2b87231b6/",
  },
];

