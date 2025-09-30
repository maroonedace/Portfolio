import type { Metadata } from "next";
import Content from "./components/content";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
  title: "Anthony Ostia | Software Engineer",
  description:
    "Hi, I'm Anthony Ostia. Always looking for new opportunities to grow and engage in insightful conversations.",
  authors: [{ name: "Anthony Ostia" }],
  keywords: [
    "Anthony Ostia",
    "Software Engineer",
    "Web Development",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Machine Learning",
    "AI",
  ],
  openGraph: {
    title: "Anthony Ostia | Software Engineer",
    description:
      "Hi, I'm Anthony Ostia. Always looking for new opportunities to grow and engage in insightful conversations.",
    images: [
      {
        url: `${baseUrl}/preview.png`,
        width: 1200,
        height: 630,
      },
    ],
    url: baseUrl,
    type: "website",
  },
};

const Page = () => {
  return (
    <Content />
  );
};

export default Page;
