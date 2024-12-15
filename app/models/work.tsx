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
  startDate: Date
  endDate: Date | null
};

export const works: Work[] = [
  {
    name: "NZero",
    url: "nZero",
    title: "Software Engineer II",
    logo: NZeroSVG,
    startDate: new Date("2021-09-01T00:00:00"),
    endDate: new Date("2024-03-01T00:00:00"),
    content: <NZero />,
  },
  {
    name: "Oceanside Perspective",
    url: "oceansidePerspective",
    title: "Software Engineer Project Lead",
    logo: OPLogo,
    startDate: new Date("2024-05-01T00:00:00"),
    endDate: null,
    content: <OP />,
  },
  {
    name: "TritonXR",
    url: "tritonXR",
    title: "Project Manager",
    logo: TritonXRLogo,
    startDate: new Date("2018-11-01T00:00:00"),
    endDate: new Date("2020-06-01T00:00:00"),
    content: <TritonXR />,
  },
];
