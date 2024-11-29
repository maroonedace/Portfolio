"use client";

import PageWrapper from "./pageWrapper";
import CardList from "./components/main/body/work/cardList";
import CardDisplay from "./components/main/body/work/cardDisplay";
import { useState } from "react";

export default function Page() {
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
    <PageWrapper>
      <div>
        <div className="p-4">
          <h1>
            Software Engineer
          </h1>
        </div>
        <div className="bg-cyan-700 p-4 flex flex-col gap-4 relative">
          <h1>Featured Works</h1>
          <CardList onModalOpen={onModalOpen} />
          {isModalClicked && (
            <CardDisplay name={modalContent} onModalClose={onModalClose} />
          )}
        </div>
      </div>
    </PageWrapper>
  );
}
