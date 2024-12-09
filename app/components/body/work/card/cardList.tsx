import Card from "./card";

import { works } from "../../../../models/work";
import { Dispatch, FC, SetStateAction } from "react";

interface CardListProps {
  onModalOpen: (content: string) => void
}

const CardList: FC<CardListProps> = ({onModalOpen}) => {
  return (
    <ul className="flex flex-wrap gap-12 justify-center">
      {works.map((work, index) => (
        <Card work={work} key={work.name} onModalOpen={onModalOpen} index={index} />
      ))}
    </ul>
  );
};

export default CardList
