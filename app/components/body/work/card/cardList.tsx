import Card from "./card";

import { works } from "../../../../models/work";
import { FC } from "react";


const CardList: FC = () => {
  return (
    <div className="flex flex-wrap gap-4 lg:gap-12 justify-center">
      {works.map((work, index) => (
        <Card work={work} key={work.name} index={index} />
      ))}
    </div>
  );
};

export default CardList
