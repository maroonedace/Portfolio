import { works } from "../../../../models/work";
import Content from "./reusable/content";
import { tritonXRList } from "../../../../models/skill";

const TritonXR = (): JSX.Element => {
  const work = works.find((work) => work.name === "TritonXR");
  return (
    <Content work={work} listOfSkills={tritonXRList} />
  );
};

export default TritonXR;