"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function LampDemo() {
  return (
    <LampContainer>
      {/* Contact Me Title */}
      <motion.h1
        initial={{ opacity: 0.5, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative z-50 mt-16 md:mt-20 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Contact Me
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({ children, className }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <div
      className={cn(
        "relative flex min-h-[110vh] flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0 px-6",
        className
      )}
    >
      {/* Background Glow Adjusted */}
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top] -translate-y-10"
        />
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top] -translate-y-10"
        />
      </div>

      {/* Content inside the lamp */}
      <div className="relative z-50 flex flex-col items-center px-5 w-full">
        {children}

        {/* Contact Form Inside Lamp */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: "easeInOut" }}
          className="mt-14 md:mt-20 w-full max-w-md"
        >
          <form onSubmit={handleSubmit} className="space-y-8 mb-10">
            <div>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full bg-transparent border-b border-gray-500 focus:border-cyan-400 text-white py-4 outline-none placeholder-gray-400"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="w-full bg-transparent border-b border-gray-500 focus:border-cyan-400 text-white py-4 outline-none placeholder-gray-400"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
                rows={5}
                className="w-full bg-transparent border-b border-gray-500 focus:border-cyan-400 text-white py-4 outline-none placeholder-gray-400"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
