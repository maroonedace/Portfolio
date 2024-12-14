import { works } from "../../../../models/work";
import Content from "./reusable/content";
import { nZeroList } from "../../../../models/skill";

const TritonXR = (): JSX.Element => {
  const work = works.find((work) => work.name === "TritonXR");
  return (
    <Content work={work} listOfSkills={nZeroList} />
  );
};

export default TritonXR;