"use client";

import Link from "next/link";
import Content from "../components/body/work/content/reusable/content";
import { nZeroList } from "../models/skill";
import { works } from "../models/work";
import CardDisplayWrapper from "../components/mobile/cardDisplayWrapper";

const NZeroPage = (): JSX.Element => {
  const work = works.find((work) => work.name === "NZero");
  return (
    <CardDisplayWrapper>
      <Content work={work} listOfSkills={nZeroList} />
    </CardDisplayWrapper>
  );
};

export default NZeroPage;
