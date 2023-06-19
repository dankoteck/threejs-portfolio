import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { projects } from "../constants";
import { horizontalVariants } from "../utils/motion";

export default function Projects() {
  return (
    <section className="relative z-0 p-16 mx-auto space-y-16 max-w-7xl">
      <span className="thresh-hold" id="projects">
        &nbsp;
      </span>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={horizontalVariants()}
        viewport={{ once: true, amount: 0.25 }}
        className="flex flex-col items-center justify-center gap-4"
      >
        <h1 className="text-6xl uppercase">Projects.</h1>
        <span className="block text-2xl uppercase text-slate-300">
          Showcase of my latest works, projects and developments
        </span>
      </motion.div>

      <VerticalTimeline>
        {projects.map((project) => (
          <VerticalTimelineElement
            key={project.title}
            icon={project.image}
            className="shadow-lg vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(29, 24, 54)",
              color: "#fff",
              boxShadow: "0 25px 120px -7px rgb(6 182 212 / 0.56",
            }}
            contentArrowStyle={{ borderRight: `7px solid rgb(29, 24, 54)` }}
            iconStyle={{ background: "rgb(56, 62, 86)", color: "#fff" }}
          >
            <div className="space-y-8">
              {project.thumbnail}

              <div className="">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-slate-300 text-black mr-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="">
                <h3 className="text-3xl font-extrabold vertical-timeline-element-title">
                  {project.title}
                </h3>
                <h4 className="text-xl text-slate-300 vertical-timeline-element-subtitle">
                  {project.subtitle}
                </h4>
                <p>{project.description}</p>
              </div>

              <div className="flex items-center gap-4 mt-8">
                {project.visitLink && (
                  <a
                    href={project.visitLink}
                    target="_blank"
                    className="px-8 py-2 text-black rounded-md bg-slate-300"
                  >
                    Visit
                  </a>
                )}
                {project.sourceLink && (
                  <a
                    href={project.sourceLink}
                    target="_blank"
                    className="px-8 py-2 text-black rounded-md bg-slate-300"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
