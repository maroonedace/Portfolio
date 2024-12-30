import { motion } from "framer-motion";
import Image from "next/image";
import { works } from "../../models/work";
import { FC } from "react";
import Link from "next/link";
import WorkDetailHeader from "./header";

interface WorkDetailProps {
  workTitle: string;
  children: JSX.Element;
}

const WorkDetail: FC<WorkDetailProps> = ({ workTitle, children }) => {
  const workDetails = works.find((work) => work.name === workTitle);

  return (
    <div className="flex flex-col gap-4">
      <WorkDetailHeader work={workDetails}/>
      <motion.div 
        initial={{ transform: "translateX(-200px)", opacity: 0 }}
        animate={{ transform: "translateX(0px)", opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-cyan-800 rounded-2xl py-4 px-8 flex flex-col"
      >
        {children}
        <div className="p-4 flex flex-col gap-4">
          <div className="flex gap-4">
            <Link
              href={workDetails.website}
              target="_blank"
              className="py-2 px-4 rounded-2xl border border-white  cursor-pointer hover:bg-cyan-600"
            >
              View Website
            </Link>
            {workDetails.github && (
              <Link
                href={workDetails.github}
                target="_blank"
                className="py-2 px-4 rounded-2xl border border-white  cursor-pointer hover:bg-cyan-600"
              >
                View Github
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WorkDetail;
