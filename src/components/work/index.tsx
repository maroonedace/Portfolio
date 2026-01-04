import { type FC } from "react";

import { format } from "date-fns";
import type { Work } from "./model";
import SkillTile from "../skills/tile";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

const works: Work[] = [
  {
    name: "Mercor",
    title: "Software Engineer",
    website: "https://www.mercor.com",
    logoUrl: "/img/work/mercor.png",
    descriptions: [
      "Built and maintained web applications to assess and evaluate machine learning model performance",
      "Identified and documented UI/UX issues and worked with cross-functional teams to improve evaluation workflows and data accuracy",
      "Participated in code reviews and maintained test suites to ensure high-quality, well-scoped changes",
    ],
    skillNames: ["React", "Typescript", "Javascript"],
    startDate: "2025-03",
    endDate: "",
  },
  {
    name: "Oceanside Perspective",
    title: "Senior Software Engineer",
    website: "https://www.oceansideperspective.org",
    logoUrl: "/img/work/opLogo.jpeg",
    descriptions: [
      "Led a team of three developers to build and deploy a subscription-based content platform demo using Next.js and Vercel",
      "Improved user engagement by 30% through enhanced search filtering, dynamic navigation components, and optimized UI animations",
      "Designed RESTful API endpoints to fetch and serve dynamic content, integrating with Supabase for backend data storage and authentication",
    ],
    skillNames: ["Next.js", "Supabase", "Node.js", "Vercel", "Tailwind CSS"],
    startDate: "2024-06",
    endDate: "2025-03",
  },
  {
    name: "NZero",
    title: "Software Engineer II",
    website: "https://nzero.com",
    logoUrl: "/img/work/nZero.svg",
    descriptions: [
      "Promoted twice within two years due to consistent ownership and delivery across the full stack using React, Rails, and PostgreSQL",
      "Led development of a data management portal that reduced manual data entry time by 60%",
      "Helped lead UI redesign efforts, implemented new metric visualizations, client filtering, and unit conversions",
      "Optimized API performance using React Query and expanded frontend test coverage by 35% using Jest",
    ],
    skillNames: ["React", "Rails", "PostgreSQL", "AWS", "Docker"],
    startDate: "2021-10",
    endDate: "2024-04",
  },
];

const WorkSection: FC = () => {
  return (
    <section className="px-6 pb-12 scroll-mt-28" id="work">
      <div className="px-4 py-12 bg-background rounded-lg">
        <h2 className="mb-12 text-center">Professional Experience</h2>
        {works && (
          <div className="px-4 md:px-12">
            <div className="relative border-l-2 border-foreground space-y-20">
              {works.map((exp) => {
                const startDate = format(new Date(exp.startDate), "MMM yyyy");
                const endDate = exp.endDate
                  ? format(new Date(exp.endDate), "MMM yyyy")
                  : "Present";

                return (
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8 ml-8">
                    <div className="md:w-1/2 relative">
                      <span
                        className="absolute -left-10 top-12 h-4 w-4 rounded-full bg-background ring-4 ring-foreground"
                        aria-hidden="true"
                      />
                      <div className="flex flex-col items-center md:items-start md:flex-row text-center md:text-start gap-4">
                        <img
                          src={exp.logoUrl}
                          alt={`${exp.name} logo`}
                          className="w-24 h-24 rounded-lg bg-foreground p-2"
                        />
                        <div className="flex flex-col">
                          <span className="text-2xl font-semibold">
                            {exp.title}
                          </span>
                          <span className="text-xl font-medium">
                            {exp.name}
                          </span>
                          <time
                            className="text-base italic mt-1"
                            dateTime={exp.startDate}
                          >
                            {startDate} - {endDate}
                          </time>
                        </div>
                      </div>
                      <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-2">
                        {exp.skillNames.map((name) => (
                          <SkillTile name={name} key={`${exp.name}-${name}`} />
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 md:w-1/2 flex flex-col gap-4">
                      <ul className="list-disc pl-5 space-y-2">
                        {exp.descriptions.map((bullet, index) => (
                          <li
                            key={`${exp.name}-bullet-${index}`}
                            className="text-lg leading-relaxed"
                          >
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      <div className="flex justify-center md:justify-start mt-2">
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          tabIndex={0}
                          aria-label={`Visit ${exp.name} website (opens in new tab)`}
                          className="inline-flex items-center gap-2 bg-foreground text-background rounded-xl py-2 px-4 
                          font-medium transition-transform hover:scale-105 active:scale-95
                          focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background"
                        >
                          <span className="text-lg">Visit Website</span>
                          <ArrowUpRightIcon
                            size={20}
                            aria-hidden="true"
                            weight="fill"
                          />
                        </a>
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
