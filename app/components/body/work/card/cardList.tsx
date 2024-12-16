import Card from "./card";

import { works } from "../../../../models/work";
import { FC } from "react";

interface CardListProps {
  onModalOpen: (content: string) => void
}

const CardList: FC<CardListProps> = ({onModalOpen}) => {
  return (
    <div className="flex flex-wrap gap-4 lg:gap-12 justify-center">
      {works.map((work, index) => (
        <Card work={work} key={work.name} onModalOpen={onModalOpen} index={index} />
      ))}
    </div>
  );
};

export default CardList
