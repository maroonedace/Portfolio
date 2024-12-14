import { works } from "../../../../models/work";
import { nZeroList } from "../../../../models/skill";
import Content from "./reusable/content";

const NZero = (): JSX.Element => {
  const work = works.find((work) => work.name === "NZero");
  return (
    <Content work={work} listOfSkills={nZeroList} />
  );
};

export default NZero;
