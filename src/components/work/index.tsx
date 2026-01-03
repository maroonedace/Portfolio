import { type FC } from "react";

import { format } from "date-fns";
import type { Work } from "./model";
import SkillTile from "../skills/tile";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

const works: Work[] = [
  {
    name: "Mercor",
    title: "Software Engineer",
    website: "nzero.com",
    logoUrl: "/img/work/mercor.png",
    descriptions: [
      "Built and maintained web applications to assess and evaluate machine learning model performance",
      "Identified and documented UI/UX issues and worked with cross-functional teams to improve evaluation workflows and data accuracy",
      "Participated in code reviews and maintained test suites to ensure high-quality, well-scoped changes",
    ],
    skillNames: ["React", "Typescript", "Javascript"],
    startDate: "2024-06-01",
    endDate: "2024-06-01",
  },
  {
    name: "Oceanside Perspective",
    title: "Senior Software Engineer",
    website: "nzero.com",
    logoUrl: "/img/work/opLogo.jpeg",
    descriptions: [
      "Led a team of three developers to build and deploy a subscription-based content platform demo using Next.js and Vercel",
      "Improved user engagement by 30% through enhanced search filtering, dynamic navigation components, and optimized UI animations",
      "Designed RESTful API endpoints to fetch and serve dynamic content, integrating with Supabase for backend data storage and authentication",
    ],
    skillNames: ["Next.js", "Supabase", "Node.js", "Vercel", "Tailwind CSS"],
    startDate: "2024-06-01",
    endDate: "2024-06-01",
  },
  {
    name: "NZero",
    title: "Software Engineer II",
    website: "nzero.com",
    logoUrl: "/img/work/nZero.svg",
    descriptions: [
      "Promoted twice within two years due to consistent ownership and delivery across the full stack using React, Rails, and PostgreSQL",
      "Led development of a data management portal that reduced manual data entry time by 60%",
      "Helped lead UI redesign efforts, implemented new metric visualizations, client filtering, and unit conversions",
      "Optimized API performance using React Query and expanded frontend test coverage by 35% using Jest",
    ],
    skillNames: ["React", "Rails", "PostgreSQL", "AWS", "Docker"],
    startDate: "2024-06-01",
    endDate: "2024-06-01",
  },
];

const WorkSection: FC = () => {
  return (
    <section className="px-6 pb-12 scroll-mt-20" id="work">
      <div className="px-4 py-12 bg-primary rounded-lg flex flex-col">
        <h2 className="mb-12 text-center">Professional Experience</h2>
        {works && (
          <div className="px-4 md:px-12">
            <div className="relative border-l border-white">
              {works.map((exp) => {
                const startDate = format(new Date(exp.startDate), "MMM yyyy");
                const endDate = exp.endDate
                  ? format(new Date(exp.endDate), "MMM yyyy")
                  : "Present";
                return (
                  <div key={exp.name} className="ml-8 mb-8">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                      <div className="md:w-1/2 relative">
                        <span className="absolute -left-10 top-10 h-4 w-4 rounded-full ring-4 ring-white" />
                        <div className="flex flex-col sm:flex-row items-center text-center sm:text-start gap-4">
                          <div className="w-24 h-24 flex-none rounded-md bg-white relative">
                            <img
                              src={exp.logoUrl}
                              sizes="64px"
                              alt={`${exp.name} logo`}
                              className="p-2 h-full"
                            />
                          </div>
                          <div className="flex flex-col">
                            <span className=" text-2xl">
                              {exp.title}
                            </span>
                            <span className=" text-xl">
                              {exp.name}
                            </span>
                            <time className=" text-lg italic">
                              {startDate} - {endDate}
                            </time>
                          </div>
                        </div>
                        <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-2">
                          {exp.skillNames.map((name) => {
                            return <SkillTile name={name} />;
                          })}
                        </div>
                      </div>
                      <div className="mt-4 ml-4 md:w-1/2 flex flex-col gap-4">
                        <ul className="list-disc">
                          {exp.descriptions.map((bullet, index) => {
                            return (
                              <li
                                key={`${exp.name}-bullet-${index}`}
                                className="text-lg text-white"
                              >
                                {bullet}
                              </li>
                            );
                          })}
                        </ul>
                        <div className="flex justify-center sm:justify-start">
                          <a
                            href={exp.website}
                            target="_blank"
                            tabIndex={0}
                            rel="noopener noreferrer"
                            className="flex gap-2 bg-foreground text-background rounded-2xl py-2 px-4 focus-ring items-center transition hover:scale-110 active:scale-95"
                          >
                            <span className="text-lg font-medium">Website</span>

                            <ArrowUpRightIcon size={32} weight="fill" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkSection;
