import { motion } from "framer-motion";
import { works } from "../../../../models/work";
import nZeroDashboard from "../../../../assets/work/nZero/nzeroDashboard.jpeg";
import Image from "next/image";
import SkillList from "../../reusable/skillList";
import { nZeroList } from "../../../../models/skill";

const NZero = (): JSX.Element => {
  const work = works.find((work) => work.name === "NZero");
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center gap-4">
        <motion.div className="flex shrink-0" layoutId={`card-${work.name}`}>
          <Image
            className="rounded-2xl bg-white w-[300px] h-[300px] p-8"
            src={work.logo}
            alt="Logo"
          />
        </motion.div>
        <div className="p-4 bg-gray-700 rounded-2xl flex flex-col w-full justify-between gap-4 text-white">
          <motion.div
            initial={{ transform: "translateX(-200px)", opacity: 0 }}
            whileInView={{ transform: "translateX(0px)", opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2>Software Engineer II</h2>
            <h3>September 2019 - March 2024</h3>
          </motion.div>
          {/* <motion.div
            initial={{ transform: "translateX(-200px)", opacity: 0 }}
            whileInView={{ transform: "translateX(0px)", opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p>
              NZero is a real-time data decarbonization platform for
              sustainability leaders focusing on performance tracking and
              delivering a carbon ROI. Brought into the company during an
              interview with the CEO and managed to get promoted twice during my
              tenure.
            </p>
          </motion.div> */}
          <div className="flex flex-col gap-2">
            <motion.div
              initial={{ transform: "translateX(-200px)", opacity: 0 }}
              whileInView={{ transform: "translateX(0px)", opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h3>Technologies Utilized</h3>
            </motion.div>
            <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-10 gap-12">
              <SkillList listOfSkills={nZeroList} />
            </div>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ transform: "translateX(-200px)", opacity: 0 }}
        whileInView={{ transform: "translateX(0px)", opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-gray-700 rounded-2xl p-4 flex"
      >
        <Image
          className="rounded-2xl bg-white w-[800px] h-[400px] p-8"
          src={nZeroDashboard}
          alt="Dashboard Page"
        />
        <p className="text-white p-4 text-lg">
          NZero is a real-time data decarbonization platform for sustainability
          leaders focusing on performance tracking and delivering a carbon ROI.
          I was hired on the spot during an interview with the CEO and was
          promoted twice within the company. During my tenure, I was tasked with a variety of stories such as creating new 
        </p>
      </motion.div>
    </div>
  );
};

export default NZero;
