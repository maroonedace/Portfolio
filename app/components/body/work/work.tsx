import { FC, MutableRefObject, useState } from "react";
import CardDisplay from "./card/cardDisplay";
import CardList from "./card/cardList";

interface WorkProps {
  componentRef: MutableRefObject<HTMLDivElement>
}

const Work: FC<WorkProps> = ({componentRef}) => {
    const [isModalClicked, setIsModalClicked] = useState(false);
    const [modalContent, setModalContent] = useState<string | null>(null);
  
    const onModalOpen = (content: string) => {
      setIsModalClicked(true);
      setModalContent(content);
    };
  
    const onModalClose = () => {
      setIsModalClicked(false);
      setModalContent(null);
    };
    
  return (
    <div className="px-4 py-8 flex flex-col gap-4 relative items-center justify-center" ref={componentRef}>
      <h2>Featured Works</h2>
      <CardList onModalOpen={onModalOpen} />
      {isModalClicked && (
        <CardDisplay name={modalContent} onModalClose={onModalClose} />
      )}
    </div>
  );
};

export default Work
