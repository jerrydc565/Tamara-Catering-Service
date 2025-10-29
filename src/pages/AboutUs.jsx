import React from "react";
import { motion } from "framer-motion";
import dec from "../assets/images/many-decoration.jpg";
import cookingPeople from "../assets/images/people-cooking.jpg";
import chef1 from "../assets/images/chef1.png";
import chef2 from "../assets/images/chef2.png";
import chef3 from "../assets/images/chef3.png";
import { useEffect, useState } from "react";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

function AboutUs() {
 
  return (
    <main>
      {/* Hero Section */}
      <motion.section
        className='bg-[url("/image/foods.jpg")] bg-cover bg-center w-full bg-[#000000dc] bg-blend-overlay h-[220px] md:h-[300px] flex flex-col justify-center items-center gap-3 md:gap-5 text-white px-4'
        style={{ fontFamily: "poppins" }}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <motion.h2
          className="font-semibold text-3xl md:text-5xl text-center"
          custom={0.1}
          variants={fadeUp}
        >
          About Us
        </motion.h2>
        <motion.h3
          className="font-medium text-lg md:text-2xl text-center"
          custom={0.2}
          variants={fadeUp}
        >
          <span>Home</span> <span className="text-[#FFBB00]">/About Us</span>
        </motion.h3>
      </motion.section>

      <div className="relative overflow-hidden">
        {/* Who We Are Section */}
        <motion.section
          className="p-4 md:p-10 md:px-20 flex flex-col md:flex-row gap-6 md:gap-10 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="w-full md:w-[50%] flex justify-center"
            custom={0.1}
            variants={fadeUp}
          >
            <img
              src={dec}
              alt=""
              className="w-full max-w-[500px] h-[200px] md:h-[300px] object-cover rounded-2xl object-center"
            />
          </motion.div>
          <motion.div
            className="w-full md:w-[50%]"
            custom={0.2}
            variants={fadeUp}
          >
            <p className="text-base md:text-lg text-[#4E4E4E]">
              We're a local food delivery service committed to bringing you
              restaurant-quality meals made with the freshest ingredients. Our
              experienced chefs prepare each dish with care, ensuring every bite
              is packed with flavor. From comfort food classics to exciting new
              flavors, we make it easy to enjoy great food without leaving home.
              Fast delivery, fair prices, and food you'll love - that's our
              promise to you.
            </p>
          </motion.div>
        </motion.section>

        {/* Our Story Section */}
        <motion.section
          className="p-4 md:p-10 md:px-20 flex flex-col-reverse md:flex-row gap-6 md:gap-10 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="w-full md:w-[50%]"
            custom={0.1}
            variants={fadeUp}
          >
            <h2 className="font-semibold text-2xl md:text-3xl mb-3 text-[#976f00]">
              Our Story
            </h2>
            <p className="mb-5 text-base md:text-lg text-[#4E4E4E]">
              It all began in 2015 when Tamara discovered her passion for
              creating extraordinary culinary experiences. What started as
              cooking for family gatherings quickly blossomed into a calling to
              bring joy to others through exceptional food and service.
            </p>
            <p className="text-base md:text-lg text-[#4E4E4E]">
              From humble beginnings in a home kitchen, Tamara's dedication to
              quality ingredients, innovative flavors, and impeccable
              presentation caught the attention of friends and neighbors who
              began requesting her catering services for their special events.
            </p>
          </motion.div>
          <motion.div
            className="w-full md:w-[50%] flex justify-center"
            custom={0.2}
            variants={fadeUp}
          >
            <img
              src={cookingPeople}
              alt=""
              className="w-full max-w-[500px] h-[200px] md:h-[300px] object-cover object-center rounded-2xl"
            />
          </motion.div>
        </motion.section>

        {/* Mission and Values Section */}
        <motion.section
          className="p-4 md:p-10 md:px-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h4
            className="font-semibold text-2xl md:text-3xl mb-2 text-[#976f00]"
            custom={0.1}
            variants={fadeUp}
          >
            Our Mission
          </motion.h4>
          <motion.p
            className="mb-6 text-base md:text-lg text-[#4E4E4E]"
            custom={0.2}
            variants={fadeUp}
          >
            To create extraordinary culinary experiences that bring people
            together and make every celebration unforgettable.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 px-0 md:px-20">
            <motion.div
              className="w-full bg-[#d7d7d7] p-5 rounded-2xl shadow-lg mb-4"
              custom={0.1}
              variants={fadeUp}
            >
              <h4 className="font-semibold text-lg md:text-xl mb-2 text-[#976f00]">
                Quality First
              </h4>
              <p className="text-[15px] md:text-base text-[#4E4E4E]">
                We are committed to using only the freshest, premium ingredients
                sourced from trusted suppliers to ensure every dish exceeds
                expectations.
              </p>
            </motion.div>
            <motion.div
              className="w-full bg-[#d7d7d7] p-5 rounded-2xl shadow-lg mb-4"
              custom={0.2}
              variants={fadeUp}
            >
              <h4 className="font-semibold text-lg md:text-xl mb-2 text-[#976f00]">
                Our Personalized Service
              </h4>
              <p className="text-[15px] md:text-base text-[#4E4E4E]">
                Every event is unique and deserves individual attention. We work
                closely with you to create a customized experience that reflects
                your vision.
              </p>
            </motion.div>
            <motion.div
              className="w-full bg-[#d7d7d7] p-5 rounded-2xl shadow-lg mb-4"
              custom={0.3}
              variants={fadeUp}
            >
              <h4 className="font-semibold text-lg md:text-xl mb-2 text-[#976f00]">
                Our Community Connection
              </h4>
              <p className="text-[15px] md:text-base text-[#4E4E4E]">
                We proudly support local suppliers and actively participate in
                community events, giving back to the neighborhoods we serve.
              </p>
            </motion.div>
            <motion.div
              className="w-full bg-[#d7d7d7] p-5 rounded-2xl shadow-lg mb-4"
              custom={0.4}
              variants={fadeUp}
            >
              <h4 className="font-semibold text-lg md:text-xl mb-2 text-[#976f00]">
                Get Memorable Experiences
              </h4>
              <p className="text-[15px] md:text-base text-[#4E4E4E]">
                Our goal is to create moments that last a lifetime, combining
                exceptional food with flawless service and elegant presentation.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Decorative Chefs */}
        <img
          src={chef1}
          alt=""
          className="w-[100px] md:w-[200px] absolute top-[-10px] opacity-10 left-[-30px] md:left-[-90px] pointer-events-none"
        />
        <img
          src={chef2}
          alt=""
          className="w-[150px] md:w-[300px] absolute top-[200px] opacity-5 right-[-30px] md:right-[-90px] pointer-events-none"
        />
        <img
          src={chef3}
          alt=""
          className="w-[100px] md:w-[200px] absolute bottom-[-10px] opacity-10 left-[-20px] md:left-[-50px] pointer-events-none"
        />
      </div>
    </main>
  );
}

export default AboutUs;
