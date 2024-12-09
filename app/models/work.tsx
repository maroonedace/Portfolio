import { StaticImageData } from "next/image";
import NZeroSVG from "../assets/work/nZero/nZero.svg"
import OPLogo from "../assets/work/opLogo.jpeg";
import TritonXRLogo from "../assets/work/TritonXR.png";
import NZero from "../components/body/work/content/nzero";
import OP from "../components/body/work/content/op";
import TritonXR from "../components/body/work/content/tritonXR";

export type Work = {
  name: string;
  url: string,
  title: string;
  logo: StaticImageData;
  content: JSX.Element;
};

export const works: Work[] = [
  {
    name: "NZero",
    url: "nZero",
    title: "Software Engineer II",
    logo: NZeroSVG,
    content: <NZero />,
  },
  {
    name: "Oceanside Perspective",
    url: "oceansidePerspective",
    title: "Software Engineer Project Lead",
    logo: OPLogo,
    content: <OP />,
  },
  {
    name: "TritonXR",
    url: "tritonXR",
    title: "Project Manager",
    logo: TritonXRLogo,
    content: <TritonXR />,
  },
];
