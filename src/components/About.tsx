import { motion } from "framer-motion";
import { services } from "../constants";
import { horizontalVariants, verticalVariants } from "../utils/motion";

export default function About() {
  return (
    <section className="relative z-0 p-16 mx-auto max-w-7xl">
      <span className="thresh-hold" id="about">
        &nbsp;
      </span>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={horizontalVariants()}
        viewport={{ once: true, amount: 0.25 }}
      >
        <span className="block text-6xl uppercase">About me.</span>
        <span className="block mt-4 text-lg font-medium text-slate-200">
          I build a career as a Front-end Developer, and work on challenging
          projects that allow me to learn and grow as a developer while
          delivering value to target users. As a Front-end Developer with 2
          years of experience, I specialize in creating visually appealing and
          user-friendly web applications.
        </span>
      </motion.div>

      <div className="grid grid-cols-2 gap-10 mt-20">
        {services.map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            variants={verticalVariants()}
            viewport={{ once: true, amount: 0.25 }}
            className="flex flex-col items-center w-full px-8 py-6 space-y-4 transition duration-300 cursor-pointer hover:!-translate-y-4 green-gradient justify-evenly"
          >
            <span className="w-28 h-28">{item.image}</span>

            <h3 className="text-2xl font-bold text-center text-white">
              {item.name}
            </h3>

            <p className="text-base text-center text-white">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
