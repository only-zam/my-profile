import { IconType } from "react-icons";

import { BiWorld } from "react-icons/bi";
import { AiOutlineTwitter, AiFillGithub } from "react-icons/ai";
import { FaProductHunt } from "react-icons/fa";
import Logo from "@/assets/logo.jpg";

type ProjectsType = {
  id: number;
  name: string;
  image: any;
  description: string;
  website: string;
  github: string;
  product_hunt: null | string;
  twitter: null | string;
  links: { id: number; name: string; icon: IconType; href: string }[];
}[];

export type ProjectType = {
  id: number;
  name: string;
  image: any;
  description: string;
  website: string;
  github: string;
  product_hunt: null | string;
  twitter: null | string;
  links: { id: number; name: string; icon: IconType; href: string }[];
};

export const PROJECTS: ProjectsType = [
  {
    id: 1,
    name: "Capital Builders Quoting App",
    description:
      "This Web Applicaton accepts user input on measurements and calculates the quantities/materials needed to fabricate residential windows. It then processes all items and specs as per current prices and generates accurate prices/quote",
    image: "https://pbs.twimg.com/media/Fuu-6iOWcAAz9CN?format=jpg&name=medium",
    website: "http://www.capitalbuilders.co.ke/",
    github: "https://github.com/only-zam/building-quotes-webpage",
    product_hunt: null,
    twitter: null,
    links: [
      {
        id: 1,
        name: "Website",
        icon: BiWorld,
        href: "http://www.capitalbuilders.co.ke",
      },
      {
        id: 2,
        name: "GitHub",
        icon: AiFillGithub,
        href: "https://github.com/only-zam/building-quotes-webpage",
      },
      // {
      //   id: 3,
      //   name: "Product Hunt",
      //   icon: FaProductHunt,
      //   href: "#",
      // },
      // {
      //   id: 3,
      //   name: "Twitter",
      //   icon: AiOutlineTwitter,
      //   href: "#",
      // },
    ],
  },
  {
    id: 2,
    name: "Meal-DB",
    description:
      "A web application that provides chefs with an extensive database of recipes for all kinds of meals.",
    image:
      "https://pbs.twimg.com/media/FuxdB-TXwAA43_w?format=jpg&name=large",
    website: " ",
    github: "https://github.com/only-zam/meal-db",
    product_hunt: null,
    twitter: null,
    links: [
      {
        id: 1,
        name: "Website",
        icon: BiWorld,
        href: " ",
      },
      {
        id: 2,
        name: "GitHub",
        icon: AiFillGithub,
        href: "https://github.com/only-zam/meal-db",
      },
      // {
      //   id: 3,
      //   name: "Product Hunt",
      //   icon: FaProductHunt,
      //   href: "#",
      // },
      //{
      //  id: 3,
      //  name: "Twitter",
      //  icon: AiOutlineTwitter,
      //  href: "https://twitter.com/Ali_Developer05/status/1607304669491257345?t=_mCwr4PEncWJaVjchmUZng&s=19",
      //},
    ],
  },
    {
    id: 3,
    name: "Insure Pro Systems",
    description:
    "A web portal for managing policy and client data for insurance firms. The platform is designed to streamline the insurance management process, allowing users to easily access and organize all of your client information and policy details in one convenient location. ",
    image: "https://pbs.twimg.com/media/Fuxd9BiWcAAQ5fz?format=jpg&name=large",
    website: " ",
    github: "https://github.com/only-zam/Insure-Pro-Systems",
    product_hunt: null,
    twitter: null,
    links: [
    {
    id: 1,
    name: "Website",
    icon: BiWorld,
    href: " ",
    },
    {
    id: 2,
    name: "GitHub",
    icon: AiFillGithub,
    href: "https://github.com/only-zam/Insure-Pro-Systems",
    },
    // {
    //   id: 3,
    //   name: "Product Hunt",
    //   icon: FaProductHunt,
    //   href: "#",
    // },
    // {
    //   id: 3,
    //   name: "Twitter",
    //   icon: AiOutlineTwitter,
    //   href: "#",
    // },
    ],
    }
];
