import linkedInSvg from "../../../assets/socials/linkedin.svg";
import githubSvg from "../../../assets/socials/github.svg";
import hackerRankSvg from "../../../assets/socials/hackerrank.svg";

type ContactItem = {
    name: string;
    href: string;
    src: string;
  };
  
export const contactItems: ContactItem[] = [
{
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/aostia",
    src: linkedInSvg,
},
{
    name: "Github",
    href: "https://github.com/maroonedace",
    src: githubSvg,
},
{
    name: "HackerRank",
    href: "https://www.hackerrank.com/profile/meximanianace",
    src: hackerRankSvg,
},
];