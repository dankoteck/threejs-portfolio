import { motion } from "framer-motion";
import { verticalVariants } from "../utils/motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { works } from "../constants";
import { AcademicCapIcon } from "@heroicons/react/24/outline";

export default function Works() {
  return (
    <section className="relative z-0 p-16 mx-auto space-y-16 max-w-7xl">
      <span className="thresh-hold" id="work">
        &nbsp;
      </span>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={verticalVariants()}
        viewport={{ once: true, amount: 0.25 }}
        className="flex flex-col items-center justify-center gap-4"
      >
        <h1 className="text-6xl uppercase">Work Experience.</h1>
        <span className="block text-2xl uppercase text-slate-300">
          What I've done so far
        </span>
      </motion.div>

      <VerticalTimeline>
        {works.map((work) => (
          <VerticalTimelineElement
            key={work.subtitle}
            date={work.date}
            icon={work.image}
            className="shadow-lg vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(29, 24, 54)",
              color: "#fff",
              boxShadow: "0 25px 120px -7px rgb(6 182 212 / 0.5)",
            }}
            contentArrowStyle={{ borderRight: `7px solid rgb(29, 24, 54)` }}
            iconStyle={{ background: "rgb(56, 62, 86)", color: "#fff" }}
          >
            <h3 className="text-4xl font-extrabold vertical-timeline-element-title">
              {work.title}
            </h3>
            <h4 className="mt-2 text-2xl text-slate-300 vertical-timeline-element-subtitle">
              {work.subtitle}
            </h4>
            <ul className="mt-8 space-y-2 text-lg text-white list-disc list-inside">
              {work.responsibility.map((desc) => (
                <li key={desc}>{desc}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}

        {/* For Academy */}
        <VerticalTimelineElement
          date="2016 - 2018"
          icon={
            <AcademicCapIcon className="!w-8 !h-8 !m-0 -translate-x-1/2 -translate-y-1/2" />
          }
          className="shadow-lg vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(29, 24, 54)",
            color: "#fff",
            boxShadow: "0 25px 120px -7px rgb(6 182 212 / 0.5)",
          }}
          contentArrowStyle={{ borderRight: `7px solid rgb(29, 24, 54)` }}
          iconStyle={{ background: "rgb(56, 62, 86)", color: "#fff" }}
        >
          <h3 className="text-4xl font-extrabold vertical-timeline-element-title">
            Information Technology
          </h3>
          <h4 className="mt-2 text-2xl text-slate-300 vertical-timeline-element-subtitle">
            University of Science - VNUHCM
          </h4>
          <div className="mt-8">
            <ul className="mt-8 space-y-2 text-lg text-white list-disc list-inside">
              <li>HTML | CSS | JavaScript | Node.js | Git | Database</li>
              <li>Teamwork | Time management | Problem-solving</li>
            </ul>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}
