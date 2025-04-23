import { motion } from "framer-motion";
import { contactItems } from "./model";
import Link from "next/link";
import Image from "next/image";

const Socials = () => {
  return (
    <div className="flex gap-2">
      {contactItems.map((item) => {
        return (
          <motion.div
            key={item.name}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.1 }}>
              <Link
                href={item.href}
                tabIndex={0}
                className="flex items-center"
                target="_blank"
              >
                <Image width="40" height="40" src={item.src} alt={item.name} />
              </Link>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Socials;
