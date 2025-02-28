import Card from "./card";

import { works } from "../../../../models/work";
import { FC } from "react";

interface CardListProps {
  isAboveThreshold: boolean;
}


const CardList: FC<CardListProps> = ({isAboveThreshold}) => {
  return (
    <div className="flex flex-wrap gap-4 lg:gap-12 justify-center">
      {works.map((work, index) => (
        <Card work={work} key={work.name} isAboveThreshold={isAboveThreshold} index={index} />
      ))}
    </div>
  );
};

export default CardList
