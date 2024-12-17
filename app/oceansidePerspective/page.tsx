"use client";

import Content from "../components/body/work/content/reusable/content";
import { opList } from "../models/skill";
import { works } from "../models/work";
import CardDisplayWrapper from "../components/mobile/cardDisplayWrapper";

const OPPage = (): JSX.Element => {
  const work = works.find((work) => work.name === "Oceanside Perspective");
  return (
    <CardDisplayWrapper>
      <Content work={work} listOfSkills={opList} />
    </CardDisplayWrapper>
  );
};

export default OPPage;
