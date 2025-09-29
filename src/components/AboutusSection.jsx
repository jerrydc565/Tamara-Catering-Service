import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function AboutusSection() {
  return (
    <section
      className="flex gap-16 md:gap-40 p-10 items-center px-4 md:px-30 mt-20 flex-col md:flex-row"
      style={{ fontFamily: "poppins" }}
    >
      <motion.div
        className="w-full md:w-[35%] flex justify-center items-center"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <img
          src="/image/egusi.png"
          alt="Egusi"
          className="w-full h-[200px] md:h-[350px] object-contain rounded-2xl"
        />
      </motion.div>
      <motion.div
        className="w-full md:w-[40%]"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl ml-0 md:ml-5 font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          About Us
        </motion.h2>
        <motion.p
          className="text-[15px] text-[#4E4E4E] mb-6 mt-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          We're a local food delivery service committed to bringing you
          restaurant-quality meals made with the freshest ingredients. Our
          experienced chefs prepare each dish with care, ensuring every bite is
          packed with flavor. From comfort food classics to exciting new
          flavors, we make it easy to enjoy great food without leaving home.
          Fast delivery, fair prices, and food you'll love - that's our promise
          to you.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link to={"/about-us"}>
            <button className="p-2 rounded-[10px] px-8 bg-[#000000] text-[#FFBB00] font-semibold hover:bg-[#222222] cursor-pointer shadow-md transition">
              Learn More
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default AboutusSection;
