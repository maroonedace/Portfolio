import { useRef, type FC } from "react";
import { motion, useInView } from "motion/react";
import { fadeUp } from "../../utils";
import { certificates } from "./constants";
import CertificateItem from "./certificate";

const CertificateList: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.h3
        className="mb-4 text-3xl md:text-5xl"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeUp(0)}
      >
        Certificates
      </motion.h3>
      <ul
        role="list"
        className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-8 items-start justify-center"
        ref={ref}
      >
        {certificates.map((certificate, index) => (
          <motion.li
            key={certificate.url}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp(index)}
          >
            <CertificateItem certificate={certificate} />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default CertificateList;
