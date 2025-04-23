import { MutableRefObject, useEffect, useRef, useState } from "react";
import Image from "next/image";
import menu from "../../../assets/home/menu.svg";
import close from "../../../assets/header/close.svg";
import NavigationLinks from "../navigationLinks/navigationLinks";

const MobileLinks = ({ links, handleScrollToWork }) => {
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!panelRef.current?.contains(e.target as Node)) {
        setIsMobileModalOpen(false);
      }
    }
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <>
      <div className="flex md:hidden">
        <button
          onClick={onMobileMenuClick}
          className="p-2 rounded-full hover:bg-gray-700 duration-150"
          aria-label="menu"
        >
          <Image className={`h-8 w-8`} src={menu} alt="Navigation Menu Button" />
        </button>
      </div>
      {isMobileModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-opacity z-20">
          <div className="relative bg-slate-800/95 flex flex-col gap-4 items-center w-64 p-8 shadow-xl rounded-2xl ring-1 ring-white/5 transition animate-[fade-in_150ms_ease-out]" ref={panelRef}>
            <button className="absolute top-4 right-4 p-2 hover:bg-slate-700 rounded-full" onClick={onMobileMenuClick}>
              <Image className={`h-6 w-6`} src={close} alt="Close Button" />
            </button>
            <h2 className="text-base font-semibold uppercase tracking-wide text-slate-400">Navigate</h2>
            <div className="flex flex-col gap-2">
            <NavigationLinks
              links={links}
              handleScrollToWork={handleMobileMenuClick}
            />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileLinks;
