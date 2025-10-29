import React from "react";
import { motion } from "framer-motion";
import { useEffect,useState } from "react";
import MapEmbeded from "../components/MapEmbeded";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay },
  }),
};

function ContactUs() {

  return (
    <main style={{ fontFamily: "poppins" }}>
      {/* Hero Section */}
      <motion.section
        className='bg-[url("/image/foods.jpg")] bg-cover bg-center w-full bg-[#000000dc] bg-blend-overlay h-[180px] md:h-[300px] flex flex-col justify-center items-center gap-3 md:gap-5 text-white px-4'
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <motion.h2
          className="font-semibold text-3xl md:text-5xl text-center"
          custom={0.1}
          variants={fadeUp}
        >
          Contact Us
        </motion.h2>
        <motion.h3
          className="font-medium text-lg md:text-2xl text-center"
          custom={0.2}
          variants={fadeUp}
        >
          <span>Home</span> <span className="text-[#FFBB00]">/Contact Us</span>
        </motion.h3>
      </motion.section>

      {/* Description Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUp}
        custom={0.2}
      >
        <div className="max-w-4xl mx-auto mt-8 md:mt-12 mb-6 md:mb-8 text-center px-3 md:px-4">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#2e2e2e]">
            We prepare food just like your home in large quantities. Thats it.
            Do book us and relax.
          </h3>
          <p className="text-base md:text-lg text-[#616161]">
            We'd love to hear from you! Whether you have questions about our
            services, want to discuss a custom catering order, or just want to
            say hello, feel free to reach out. Our team is here to assist you
            and make your experience with Tamara Catering exceptional.
          </p>
          <a href="https://WA.ME/+33773625823"
        target="blank"
          >
            <button className="bg-transparent border-2 border-[#FFBB00] p-1 px-9 mt-5 cursor-pointer ...  rounded-4xl font-medium text-[#FFBB00] hover:bg-[#FFBB00] hover:border-transparent hover:text-black transition duration-1000">
              Book Now!
            </button>{" "}
          </a>
        </div>
      </motion.section>

      <div className="relative overflow-hidden bg-[#fffbea] py-6 md:py-10">
        <h3 className="text-2xl md:text-3xl text-center mt-15 font-bold mb-4 text-[#886400]">
          Get In Touch
        </h3>
        {/* Contact Info & Map */}
        <section className="max-w-5xl mx-auto p-4 md:p-10 flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Contact Info */}
          <motion.div
            className="w-full md:w-[50%] bg-[#ffffff] rounded-2xl shadow-lg p-6 mb-6 md:mb-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            custom={0.3}
          >
            <h3 className="text-2xl md:text-2xl text-center  font-bold mb-4 text-[#2e2e2e]">
              Contact Details
            </h3>
            <div className="mb-4 flex pb-10  border-b border-[#adadad] p-3 items-center gap-3">
              <i className="fa-solid fa-location-dot text-xl text-[#976f00]" />
              <span>123 Catering St., Food City, FC 12345</span>
            </div>
            <div className="mb-4 flex p-3 pb-10 items-center border-b border-[#adadad] gap-3">
              <i className="fa-solid fa-envelope text-xl text-[#976f00]" />
              <span className="hover:underline cursor-pointer">
                info@tamaracatering.com
              </span>
            </div>
            <div className="mb-4 flex p-3 items-center gap-3">
              <i className="fa-solid fa-phone text-xl text-[#976f00]" />
              <a
                href="tel:+33773625823"
                className="hover:underline cursor-pointer"
              >
                (123) 456-7890
              </a>
            </div>
          </motion.div>
          {/* Animated Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.7,
              type: "spring",
              bounce: 0.2,
              delay: 0.35,
            }}
          >
            <MapEmbeded />
          </motion.div>
        </section>
      </div>
    </main>
  );
}

export default ContactUs;
