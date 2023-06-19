import { motion } from "framer-motion";
import { skills, tools } from "../constants";
import { horizontalVariants, verticalVariants } from "../utils/motion";

export default function Skills() {
  return (
    <section className="relative z-0 p-16 mx-auto max-w-7xl">
      <span className="thresh-hold" id="skills">
        &nbsp;
      </span>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={horizontalVariants()}
        viewport={{ once: true, amount: 0.25 }}
        className="flex flex-col items-center justify-center gap-4"
      >
        <h1 className="text-6xl uppercase">Skills.</h1>
        <span className="block text-2xl uppercase text-slate-300">
          I can say I'm quite good at
        </span>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={verticalVariants()}
        viewport={{ once: true, amount: 0.25 }}
        className="grid grid-cols-3 gap-24 mt-16 lg:grid-cols-5"
      >
        {skills.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="Skill"
            className={index === skills.length - 1 ? "invert" : ""} // Next.js icon
          />
        ))}
      </motion.div>

      <div className="mt-40">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={horizontalVariants()}
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-col items-center justify-center gap-4"
        >
          <h1 className="text-6xl uppercase">Tools.</h1>
          <span className="block text-2xl uppercase text-slate-300">
            My favorites tools
          </span>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={verticalVariants()}
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-3 gap-24 mt-16 lg:grid-cols-5"
        >
          {tools.map((tool, index) => (
            <img
              key={index}
              src={tool}
              alt="tool"
              className={index === tools.length - 1 ? "invert" : ""} // Next.js icon
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
