import { FC, MutableRefObject } from "react";
import CardList from "./card/cardList";

interface WorkProps {
  componentRef: MutableRefObject<HTMLDivElement>
}

const Work: FC<WorkProps> = ({componentRef}) => {

  return (
    <div className="px-4 flex flex-col gap-8 items-center justify-center bg-cyan-700 py-10 md:py-20" ref={componentRef}>
      <h2 className="text-white sm:text-2xl md:text-3xl lg:text-4xl">Featured Works</h2>
      <CardList />
    </div>
  );
};

export default Work
