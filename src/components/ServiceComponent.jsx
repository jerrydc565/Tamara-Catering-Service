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
        className=" p-4 md:p-10"
        style={{ fontFamily: "poppins" }}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="w-full   overflow-hidden mt-20 flex justify-between">
          <div className="h-70 w-130 overflow-hidden rounded-2xl">
            <img src={wedding} alt="" className="h-full w-full object-cover" />
          </div>

          <div className="w-[50%]">
            <h4 className="font-bold text-[17px] text-[#634900] mt-3 ml-3 mr-3">
              Service
            </h4>
            <h3 className="font-semibold text-xl md:text-2xl  mb-1 ml-3 mr-3 ">
              Wedding Events
            </h3>
            <p className="m-3 text-[15px] md:text-base text-[#6b6b6b]">
              Wedding. Why we have the concept of inviting all our relatives,
              friends and known ones? Its because, when a family celebrates an
              event means, its an occasion, when lot of people celebrates an
              event means, it turns as a feast. If there any feast occurs
              without food?? We are here to make a memorable experience for your
              guests by pampering their taste buds.
            </p>
          </div>
        </motion.div>
        <motion.div className="w-full   overflow-hidden mt-20 flex justify-between">
          <div className="w-[50%]">
            <h4 className="font-bold text-[17px] text-[#634900] mt-3 ml-3 mr-3">
              Service
            </h4>
            <h3 className="font-semibold text-xl md:text-2xl  mb-1 ml-3 mr-3 ">
              Birthday Event
            </h3>
            <p className="m-3 text-[15px] md:text-base text-[#6b6b6b]">
              "Make every birthday a memorable one with our birthday
              photography. Whether it’s a child's first birthday or a milestone
              celebration, we capture the joy, excitement, and love of the day
              and preserve it forever. At Venus Catering Service, we take care
              of the happiness of your guests by offering them amazing food on
              behalf of you.
            </p>
          </div>
          <div className="h-70 w-130 overflow-hidden rounded-2xl ">
            <img src={birthday} alt="" className="h-full w-full object-cover" />
          </div>
        </motion.div>
        <motion.div className="w-full   overflow-hidden mt-20 flex justify-between">
          <div className="h-70 w-130 overflow-hidden rounded-2xl ">
            <img
              src={corporate}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          <div className="w-[50%]">
            <h4 className="font-bold text-[17px] text-[#634900] mt-3 ml-3 mr-3">
              Service
            </h4>
            <h3 className="font-semibold text-xl md:text-2xl  mb-1 ml-3 mr-3 ">
              Corporate Events
            </h3>
            <p className="m-3 text-[15px] md:text-base text-[#6b6b6b]">
              From corporate events to business occasions or milestone
              celebrations, our event catering team captures the heart of their
              audiences on their special occasions. We focus on delivering the
              customized delicacies of different types. We make sure all the
              audience feel good about the food too and that make your event
              unique.
            </p>
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
}

export default ServiceComponent;
