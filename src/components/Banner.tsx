import { motion } from "framer-motion";
import ComputerCanvas from "./canvas/Computer";

export default function Banner() {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5">
        <div className="flex flex-col items-center justify-center">
          <div className="w-5 h-5 bg-purple-700 rounded-full" />
          <div className="w-1 violet-gradient h-60" />
        </div>

        <div className="w-1/2 text-white ">
          <span className="block text-6xl font-extrabold">
            Hi, I'm <span className="text-purple-700">Khoa</span>
          </span>

          <span className="block mt-4 text-2xl font-bold">
            I specialize in creating visually appealing and user-friendly web
            applications.
          </span>
        </div>
      </div>

      <ComputerCanvas />

      <div className="absolute flex items-center justify-center w-full mx-auto bottom-10">
        <a href="#about">
          <div className="w-8 h-20 border-4 rounded-full border-slate-400">
            <motion.div
              className="w-3 h-3 mx-auto mt-4 rounded-full bg-slate-400"
              animate={{
                y: [0, 26, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </a>
      </div>
    </section>
  );
}
