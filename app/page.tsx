import AboutMe from "./components/body/aboutMe/aboutMe";
import Home from "./components/body/home/home";
import Work from "./components/body/work/work";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Skills from "./components/body/skills/skills";
import Project from "./components/body/project/project";

import type { Metadata } from 'next'


const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
  title: "Anthony Ostia | Software Engineer",
  description: "Hi, I'm Anthony Ostia. Always looking for new opportunities to grow and engage in insightful conversations.",
  openGraph: {
    title: "Anthony Ostia | Software Engineer",
    description: "Hi, I'm Anthony Ostia. Always looking for new opportunities to grow and engage in insightful conversations.",
    images: [
      {
        url: `${baseUrl}/preview.jpg`,
        width: 1200,
        height: 630,
      },
    ],
    url: baseUrl,
    type: "website",
  },
}

const Page = () => {
  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <Skills />
      <Work />
      <Project />
      <Footer />
    </>
  );
};

export default Page;
