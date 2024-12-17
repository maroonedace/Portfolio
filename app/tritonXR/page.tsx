"use client";

import Content from "../components/body/work/content/reusable/content";
import { works } from "../models/work";
import { tritonXRList } from "../models/skill";
import CardDisplayWrapper from "../components/mobile/cardDisplayWrapper";

const TritonXRPage = (): JSX.Element => {
  const work = works.find((work) => work.name === "TritonXR");
  return (
    <CardDisplayWrapper>
      <Content work={work} listOfSkills={tritonXRList} />
    </CardDisplayWrapper>
  );
};

export default TritonXRPage;
