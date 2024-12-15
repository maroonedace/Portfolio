import { works } from "../../../../models/work";
import Content from "./reusable/content";
import { opList } from "../../../../models/skill";

const OP = (): JSX.Element => {
  const work = works.find((work) => work.name === "Oceanside Perspective");
  return (
    <Content work={work} listOfSkills={opList} />
  );
};

export default OP;