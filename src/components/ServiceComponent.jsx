import React from "react";
import { motion } from "framer-motion";
import wedding from "../assets/images/wedding.jpg";
import birthday from "../assets/images/birthday.jpg";
import corporate from "../assets/images/corporate.jpg";

const cardData = [
  {
    img: wedding,
    title: "Wedding Events",
    desc: "Wedding. Why we have the concept of inviting all our relatives, friends and known ones? Its because, when a family celebrates an event means, its an occasion, when lot of people celebrates an event means, it turns as a feast. If there any feast occurs without food?? We are here to make a memorable experience for your guests by pampering their taste buds.",
  },
  {
    img: birthday,
    title: "Birthday Events",
    desc: "Make every birthday a memorable one with our birthday photography. Whether it’s a child's first birthday or a milestone celebration, we capture the joy, excitement, and love of the day and preserve it forever. At Venus Catering Service, we take care of the happiness of your guests by offering them amazing food on behalf of you.",
  },
  {
    img: corporate,
    title: "Corporate Events",
    desc: "From corporate events to business occasions or milestone celebrations, our event catering team captures the heart of their audiences on their special occasions. We focus on delivering the customized delicacies of different types. We make sure all the audience feel good about the food too and that make your event unique.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
    },
  },
};

function ServiceComponent() {
  return (
    <main>
      <motion.p
        className="text-center text-black mt-20 mb-5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        WHAT WE DO
      </motion.p>
      <motion.h2
        className="text-5xl text-center mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Premium Catering Service
      </motion.h2>
      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 p-4 md:p-10"
        style={{ fontFamily: "poppins" }}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {cardData.map((card, idx) => (
          <motion.div
            key={idx}
            className="w-full rounded-2xl overflow-hidden bg-[#fff8de] shadow-lg flex flex-col"
            variants={cardVariants}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 8px 32px #FFBB0080",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-48 md:h-64 lg:h-80 object-cover object-center"
            />
            <h3 className="font-semibold text-xl md:text-2xl mt-5 mb-1 m-3">
              {card.title}
            </h3>
            <p className="m-3 text-[15px] md:text-base text-[#6b6b6b]">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </motion.section>
    </main>
  );
}

export default ServiceComponent;
