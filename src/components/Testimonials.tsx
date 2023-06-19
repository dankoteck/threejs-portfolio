import { motion } from "framer-motion";
import { horizontalVariants, verticalVariants } from "../utils/motion";
import { useEffect, useState } from "react";

type Testimonial = {
  name: {
    first: string;
    last: string;
    title: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
};

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    getTestimonials();
  }, []);

  async function getTestimonials() {
    try {
      const res = await fetch("https://randomuser.me/api/?results=3");
      const data = await res.json();
      const { results } = data;

      setTestimonials(results);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <section className="relative z-0 p-16 mx-auto max-w-7xl">
      <span className="thresh-hold" id="testimonials">
        &nbsp;
      </span>

      <div className="bg-[#100d25] rounded-2xl">
        <div className="p-16 bg-[#151030] rounded-2xl h-72">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={horizontalVariants()}
            viewport={{ once: true, amount: 0.25 }}
          >
            <h1 className="text-6xl uppercase">Testimonials.</h1>
            <span className="block text-2xl uppercase text-slate-300">
              What are my clients saying
            </span>
          </motion.div>
        </div>

        <div className="z-10 grid grid-cols-3 gap-4 p-16 pt-0 -mt-40">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={verticalVariants()}
              viewport={{ once: true, amount: 0.25 }}
              className="flex flex-col items-center gap-5 px-6 py-12 mt-20 rounded-2xl bg-[#090325]"
            >
              <div className="flex items-center w-full gap-5">
                <img
                  src={item.picture.large}
                  alt={item.name.first}
                  className="w-10 h-10 rounded-full"
                />

                <div className="flex flex-col gap-1 italic">
                  <span className="text-lg font-bold text-white">
                    <span className="">@ </span>
                    <span>
                      {item.name.title}. {item.name.first}
                    </span>
                  </span>
                  <span className="text-sm">CTO of VinGroup Corp</span>
                </div>
              </div>

              <div className="flex flex-col gap-0">
                <p className="text-6xl font-bold text-white">"</p>

                <span className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatum! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quisquam, voluptatum!
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
