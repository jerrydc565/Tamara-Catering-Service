import React from "react";
import { motion } from "framer-motion";

const cardData = [
  {
    icon: "fa-utensils",
    title: "Authentic Taste",
    desc: "Enjoy our traditional recipes, inspired by rich culinary heritage.",
  },
  {
    icon: "fa-truck",
    title: "Service Excellence",
    desc: "Outstanding service and unforgettable experiences.",
  },
  {
    icon: "fa-award",
    title: "Best Quality",
    desc: "Top quality standards, excellence in every bite.",
  },
  {
    icon: "fa-hexagon-nodes",
    title: "Heritage",
    desc: "Tamara caterings blends food and heart, rooted in family traditions.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.2, duration: 0.8 },
  },
};

function WhyChooseUs() {
  return (
    <main
      className="bg-[url(/image/blackbackground.jpg)] p-6 md:p-20 w-full bg-center bg-cover text-white"
      style={{ fontFamily: "poppins" }}
    >
      <motion.p
        className="text-center mb-3 text-[#FFBB00] text-sm md:text-base"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        WHY CHOOSE US
      </motion.p>
      <motion.h2
        className="text-center text-3xl md:text-5xl mb-10 md:mb-20 font-bold"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Leave Your Guests <span className="text-[#FFBB00]">Speechless</span>{" "}
        With Our <span className="text-[#FFBB00]">Fabulous Food!</span>
      </motion.h2>
      <motion.section
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {cardData.map((card, idx) => (
          <motion.div
            key={idx}
            className="text-center p-8 rounded-2xl backdrop-blur-[7px] border-2 border-[#333333] bg-black/40 w-full shadow-lg flex flex-col items-center"
            variants={cardVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 32px #FFBB0080" }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
          >
            <i
              className={`fa-solid ${card.icon} text-3xl text-[#FFFFFF] mb-3`}
            ></i>
            <h3 className="font-semibold text-lg md:text-xl mb-2 text-[#FFBB00]">
              {card.title}
            </h3>
            <p className="text-[14px] md:text-[15px] text-white/90">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </motion.section>
    </main>
  );
}

export default WhyChooseUs;
