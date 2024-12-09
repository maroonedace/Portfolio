import { motion } from "framer-motion";
import { works } from "../../../../models/work";
import Image from "next/image";

const TritonXR = (): JSX.Element => {
  const work = works.find((work) => work.name === "TritonXR");
  return (
    <div className="flex">
      <motion.div
        className={`bg-white p-4 rounded-2xl w-[200px] h-[200px] flex items-center justify-center`}
        layoutId={`card-${work.name}`}
      >
        <Image src={work.logo} alt="" />
      </motion.div>
      <div className="p-4 flex flex-col gap-2 w-9/12">
        <div className="text-white text-2xl">{work.title}</div>
      </div>
    </div>
  );
};

export default TritonXR;