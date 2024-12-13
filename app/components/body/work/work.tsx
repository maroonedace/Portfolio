import { FC, MutableRefObject, useState } from "react";
import CardList from "./card/cardList";

interface WorkProps {
  componentRef: MutableRefObject<HTMLDivElement>
  onModalOpen: (content: string) => void
}

const Work: FC<WorkProps> = ({componentRef, onModalOpen}) => {

  return (
    <div className="px-4 flex flex-col gap-16 items-center justify-center bg-cyan-700 py-40" ref={componentRef}>
      <h1 className="text-white">Featured Works</h1>
      <CardList onModalOpen={onModalOpen} />
      {/* {isModalClicked && (
        <CardDisplay name={modalContent} onModalClose={onModalClose} />
      )} */}
    </div>
  );
};

export default Work
