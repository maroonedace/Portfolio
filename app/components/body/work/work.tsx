import { FC, MutableRefObject, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { checkAboveThreshold } from "../utils/check";
import Link from "next/link";
import { works } from "../../../models/work";
import { projects } from "../../../models/project";

interface WorkProps {
  componentRef: MutableRefObject<HTMLDivElement>;
}

const Work: FC<WorkProps> = ({ componentRef }) => {
  const [isAboveThreshold, setIsAboveThreshold] = useState(false);

  useEffect(() => {
    if (componentRef?.current) {
      setIsAboveThreshold(checkAboveThreshold(componentRef));
    }
  }, [componentRef]);

  return (
    <section
      className="px-4 flex flex-col gap-8 items-center justify-center bg-cyan-700 py-10 md:py-20"
      id="work"
      ref={componentRef}
    >
      {/* ---------- Experience ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Professional Experience
        </h2>

        <ul className="relative border-l border-zinc-200 dark:border-zinc-700 pl-6">
          {works.map((exp) => (
            <li key={exp.name} className="mb-12 ml-4">
              <span className="absolute -left-[10px] mt-1 h-4 w-4 rounded-full ring-4 ring-zinc-900" />

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <Image
                    src={exp.logo}
                    alt={`${exp.name} logo`}
                    className="h-20 w-20 rounded-md object-contain bg-white p-2"
                  />
                  <div>
                    <h3 className="font-semibold">{exp.title}</h3>
                    <p>{exp.name}</p>
                  </div>
                </div>
                <time>{exp.period}</time>
              </div>

              <ul className="mt-4 list-disc pl-5 text-sm space-y-1">
                {exp.points.map((b) => (
                  <li key={b}>
                    {b}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* ---------- Projects ---------- */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <motion.article
              key={p.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-zinc-200 dark:ring-zinc-800 transition"
            >
              <div className="relative h-48">
                <Image
                  src={p.logo}
                  alt={`${p.title} screenshot`}
                  fill
                  priority={false}
                  className="transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.description}</p>
                <ul className="flex flex-wrap gap-2 text-xs font-medium">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded bg-primary/10 px-2 py-0.5 text-primary"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4 pt-2">
                  {p.embedLink && (
                    <Link
                      href={p.embedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                    >
                      Live demo
                    </Link>
                  )}
                  {p.github && (
                    <Link
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                    >
                      Source
                    </Link>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Work;
