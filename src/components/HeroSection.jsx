import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from "react-router-dom";

function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <main
      className="flex p-10 md:p-40 justify-between gap-10 bg-blend-overlay bg-[#000000e4] bg-[url(/image/peper.png)] bg-cover items-center bg-center w-full h-[100vh] max-h-[800px] text-white"
      style={{ fontFamily: "poppins" }}
    >
      {/* Left Content */}
      <motion.section
        className="w-full md:w-[50%] flex flex-col"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        ref={ref}
      >
        <motion.h1
          className="text-4xl md:text-6xl"
          style={{ fontFamily: "kavoon" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          We make the{" "}
          <span className="text-[#FFBB00]">best* African delicacies</span>
        </motion.h1>
        <motion.p
          className="w-[90%] mb-6 mt-6 text-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          Place your order and we will bring it to your doorstep. Buffet service
          is available as well.
        </motion.p>
        <div className="flex gap-4">
          <motion.a
            href="https://WA.ME/+33773625823"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="p-2 rounded-[10px] px-8 cursor-pointer bg-[#FFBB00] hover:bg-[#cf9800] text-black font-semibold shadow-lg">
              Book Now!
            </button>
          </motion.a>
          <Link to={"/about-us"}>
            <motion.button
              className="p-2 rounded-[10px] px-8 cursor-pointer bg-[#FFFFFF] hover:bg-[#e3e3e3] text-black font-semibold shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Learn More
            </motion.button>
          </Link>
        </div>
      </motion.section>

      {/* Right Image */}
      <motion.section
        className="hidden md:block w-[50%] h-[450px] rounded-3xl bg-[url(/image/chicken.png)] bg-cover bg-center food-change shadow-2xl"
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, delay: 0.3, type: "spring" }}
      />
    </main>
  );
}

export default HeroSection;
