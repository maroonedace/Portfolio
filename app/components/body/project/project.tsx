"use client";

import { motion } from "framer-motion";

import { projects } from "./models/project";
import Image from "next/image";
import Link from "next/link";

const Project = () => {
  return (
    <section
      className="px-4 flex flex-col gap-8 items-center justify-center py-10 md:py-20"
      id="project"
    >
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
              key={p.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="rounded-2xl py-4 px-2 bg-zinc-900"
            >
              <div className="flex items-center justify-center">
                <Image
                  src={p.logo}
                  alt={`${p.name} Logo`}
                  priority
                  width="256"
                  height="256"
                  className="transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col space-between">
                <div className="flex flex-col gap-4">
                  <h3 className="font-semibold text-lg">{p.name}</h3>
                  <p className="text-sm">{p.description}</p>
                  <ul className="flex flex-wrap gap-2 text-xs font-medium">
                    {p.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded-xl bg-cyan-500/10 px-2 py-0.5"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-4 pt-2">
                  {p.embedLink && (
                    <Link
                      href={p.embedLink}
                      target="_blank"
                      tabIndex={0}
                      rel="noopener noreferrer"
                      className="text-sm font-medium underline underline-offset-4 focus-ring"
                    >
                      Live demo
                    </Link>
                  )}
                  {p.github && (
                    <Link
                      href={p.github}
                      target="_blank"
                      tabIndex={0}
                      rel="noopener noreferrer"
                      className="text-sm font-medium underline underline-offset-4 focus-ring"
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

export default Project;
