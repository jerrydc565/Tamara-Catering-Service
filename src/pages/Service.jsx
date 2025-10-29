import React from "react";
import { motion } from "framer-motion";
import corporate from "../assets/images/corporate.jpg";
import wedding from "../assets/images/wedding.jpg";
import birthday from "../assets/images/birthday.jpg";
import babyShower from "../assets/images/baby-shower.jpg";
import privateEvent from "../assets/images/private-event.jpg";
import delivery from "../assets/images/drop-off.webp";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    img: corporate,
    title: "Corporate",
    items: [
      "Business meetings, conferences, and corporate events",
      "Professional presentation with flexible timing",
      "Executive dining and client entertainment",
      "Team building events and company celebrations",
    ],
  },
  {
    img: wedding,
    title: "Wedding",
    items: [
      "Complete wedding day catering services",
      "Custom menus and complimentary tastings",
      "Cocktail hours and reception dining",
      "Decoration and setup services",
    ],
  },
  {
    img: birthday,
    title: "Birthday Party",
    items: [
      "Customized birthday party catering services",
      "Themes and decorations to match your vision",
      "Delicious cake and dessert options",
      "Fun and interactive food stations",
    ],
  },
  {
    img: babyShower,
    title: "Baby Shower",
    items: [
      "Customized baby shower catering services",
      "Themes and decorations to match your vision",
      "Delicious cake and dessert options",
      "Fun and interactive food stations",
    ],
  },
  {
    img: privateEvent,
    title: "Private Events",
    items: [
      "Anniversaries and family celebrations",
      "Holiday gatherings and special occasions",
      "Intimate dinner parties and social events",
      "Graduation parties and milestone celebrations",
    ],
  },
  {
    img: delivery,
    title: "Delivery & Drop-off",
    items: [
      "Convenient office lunch delivery",
      "Party platter and appetizer spreads",
      "Family meal packages for busy schedules",
      "Professional setup with serving equipment included",
    ],
  },
];

function Service() {
  
 

  return (
    <main style={{ fontFamily: "poppins" }}>
      {/* Hero Section */}
      <section className='bg-[url("/image/foods.jpg")] bg-cover bg-center w-full bg-[#000000dc] bg-blend-overlay h-[220px] md:h-[300px] flex flex-col justify-center items-center gap-3 md:gap-5 text-white px-4'>
        <h2 className="font-semibold text-3xl md:text-5xl text-center">
          Services
        </h2>
        <h3 className="font-medium text-lg md:text-2xl text-center">
          <span>Home</span> <span className="text-[#FFBB00]">/Services</span>
        </h3>
      </section>

      {/* Description */}
      <section className="max-w-4xl mx-auto mt-8 md:mt-12 mb-6 md:mb-8 text-center px-3 md:px-4">
        <p className="text-base md:text-lg text-[#616161]">
          Explore our wide range of catering services, tailored for every
          occasion. Whether it's a corporate event, wedding, birthday, or
          private gathering, Tamara Catering delivers exceptional taste and
          professional service.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-2 md:px-4 pb-10 md:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white/90 rounded-3xl shadow-lg overflow-hidden flex flex-col hover:scale-105 hover:shadow-2xl transition-all duration-300"
              style={{ fontFamily: "poppins" }}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: idx * 0.15,
                type: "spring",
                bounce: 0.2,
              }}
            >
              <img
                src={service.img}
                alt={service.title}
                className="h-44 md:h-56 w-full object-cover"
              />
              <div className="p-4 md:p-6 flex flex-col flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-[#FFBB00] mb-3 md:mb-4 text-center">
                  {service.title}
                </h3>
                <ul className="list-disc list-inside text-gray-700 flex-1 space-y-1 md:space-y-2 text-sm md:text-base">
                  {service.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        className="flex justify-center mb-8 md:mb-12 px-2"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <Link to={"/contact-us"}>
          <button
            whileHover={{
              scale: 1.07,
              boxShadow: "0 8px 32px #FFBB0080",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="bg-[#FFBB00] text-black font-semibold px-6 md:px-8 py-2 rounded-2xl shadow-lg hover:bg-[#e0a800] transition text-base md:text-lg"
          >
            Book Your Event Now
          </button>
        </Link>
      </motion.section>
    </main>
  );
}

export default Service;
