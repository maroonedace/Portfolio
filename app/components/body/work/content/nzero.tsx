import { motion } from "framer-motion";
import { works } from "../../../../models/work";
import nZeroDashboard from "../../../../assets/work/nZero/nzeroDashboard.jpeg"
import Image from "next/image";

const NZero = (): JSX.Element => {
  const work = works.find((work) => work.name === "NZero");
  return (
    <div className="flex items-center justify-center">
      <Image className="w-[60%] h-[400px] rounded-2xl" src={nZeroDashboard} alt="Dashboard Page" />
      {/* <div className="p-4 flex flex-col gap-2 w-9/12">
        <div className="text-white text-2xl">{work.title}</div>
      </div> */}
    </div>
  );
};

export default NZero;
