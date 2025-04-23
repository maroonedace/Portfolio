import { MutableRefObject, useEffect, useState } from "react";
import Image from "next/image";
import menu from "../../../assets/home/menu.svg";
import NavigationLinks from "../navigationLinks/navigationLinks";

const MobileLinks = ({ links, handleScrollToWork }) => {
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);

  const onMobileMenuClick = () => {
    setIsMobileModalOpen((prev) => !prev);
  };

  const handleMobileMenuClick = (ref: MutableRefObject<HTMLDivElement>) => {
    handleScrollToWork(ref);
    setIsMobileModalOpen(false);
  };

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");

    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) setIsMobileModalOpen(false);
    };

    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  return (
    <>
      <div className="flex sm:hidden">
        <button
          onClick={onMobileMenuClick}
          className="p-2 rounded-full hover:bg-gray-700 duration-150"
          aria-label="menu"
        >
          <Image className={`h-8 w-8`} src={menu} alt="menu" />
        </button>
      </div>
      {isMobileModalOpen && (
        <div className="absolute top-24 inset-x-0 bg-gray-800 p-4 rounded-md shadow-lg flex flex-col gap-2 m-4">
          <NavigationLinks
            links={links}
            handleScrollToWork={handleMobileMenuClick}
          />
        </div>
      )}
    </>
  );
};

export default MobileLinks;
