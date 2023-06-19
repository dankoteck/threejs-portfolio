import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { services } from "../constants";
import { verticalVariants, horizontalVariants } from "../utils/motion";

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

      <div className="flex flex-wrap gap-10 mt-20">
        {services.map((item, index) => (
          <Tilt
            className="w-full sm:w-64"
            key={index}
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={verticalVariants()}
              viewport={{ once: true, amount: 0.25 }}
              className="w-full rounded-md violet-gradient"
            >
              <div className="flex flex-col items-center px-12 py-5 violet-gradient rounded-3xl h-72 justify-evenly">
                <span className="w-4 h-4">{item.icon}</span>

                <h3 className="text-2xl font-bold text-center text-white">
                  {item.name}
                </h3>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
