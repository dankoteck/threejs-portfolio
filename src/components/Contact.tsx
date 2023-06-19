import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import EarthCanvas from "./canvas/Earth";
import { horizontalVariants, verticalVariants } from "../utils/motion";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setLoading(true);

    try {
      if (formRef.current) {
        const result = await emailjs.sendForm(
          "service_81wbwse",
          "template_t4l6hno",
          formRef.current,
          "_51mMfjBk54Yo8hy-"
        );

        if (result.text === "OK") {
          alert(
            "Message sent successfully! I will get back to you as soon as possible."
          );
          setForm({
            name: "",
            email: "",
            message: "",
          });
        }
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const onChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value,
    });
  };

  return (
    <section className="relative z-0 p-16 mx-auto space-y-16 max-w-7xl">
      <span className="thresh-hold" id="contact">
        &nbsp;
      </span>

      <div
        className={`xl:mt-12 flex xl:flex-row-reverse flex-col gap-10 overflow-hidden`}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={verticalVariants()}
          viewport={{ once: true, amount: 0.25 }}
          className="flex-1 min-w-0 p-8 bg-gray-900 rounded-2xl"
        >
          <h3 className="text-6xl font-extrabold text-white uppercase">
            Contact.
          </h3>
          <p className="text-2xl uppercase text-slate-300">Get in touch</p>

          <form
            onSubmit={onSubmit}
            ref={formRef}
            className="flex flex-col gap-8 mt-12"
          >
            <label className="flex flex-col">
              <span className="mb-4 font-medium text-white">Your name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="What should I call you?"
                className="px-6 py-4 font-medium text-white bg-[#090325] border-none rounded-lg outline-none placeholder:text-slate-400"
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-4 font-medium text-white">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="What's your email?"
                className="px-6 py-4 font-medium text-white bg-[#090325] border-none rounded-lg outline-none placeholder:text-slate-400"
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-4 font-medium text-white">Message</span>
              <textarea
                rows={4}
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="What you want to say?"
                className="px-6 py-4 font-medium text-white bg-[#090325] border-none rounded-lg outline-none placeholder:text-slate-400"
              />
            </label>

            <button
              type="submit"
              className="px-12 py-3 font-bold text-white bg-[#090325] shadow-lg outline-none rounded-xl w-fit shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={horizontalVariants()}
          viewport={{ once: true, amount: 0.25 }}
          className="min-w-0 xl:flex-1"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </section>
  );
}
