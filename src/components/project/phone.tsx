import { type FC, type ReactNode } from "react";

interface PhoneFrameProps {
  children: ReactNode;
}

// Adapted from Flowbite's phone mockup. The screen is 6:13 with every size on the 4px grid,
// stepping down on short viewports so the whole phone stays visible.
const PhoneFrame: FC<PhoneFrameProps> = ({ children }) => (
  <div className="relative shrink-0 rounded-[2.5rem] bg-neutral-800 p-2 shadow-2xl ring-1 ring-white/10">
    <span className="absolute -left-1 top-16 h-7 w-1 rounded-l-lg bg-neutral-800 shorter:hidden" aria-hidden="true" />
    <span className="absolute -left-1 top-28 h-11 w-1 rounded-l-lg bg-neutral-800 shorter:hidden" aria-hidden="true" />
    <span className="absolute -left-1 top-40 h-11 w-1 rounded-l-lg bg-neutral-800 shorter:hidden" aria-hidden="true" />
    <span className="absolute -right-1 top-32 h-15 w-1 rounded-r-lg bg-neutral-800 shorter:hidden" aria-hidden="true" />
    <div className="overflow-hidden rounded-4xl bg-black w-60 h-130 short:w-48 short:h-104 shorter:w-30 shorter:h-65">
      {children}
    </div>
  </div>
);

export default PhoneFrame;
