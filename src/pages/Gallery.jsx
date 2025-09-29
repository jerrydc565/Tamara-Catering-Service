import React, { useState } from "react";
import { motion } from "framer-motion"; // Add this import
import { useEffect } from "react";
function Gallery() {
  // Always scroll to top when this component is rendered
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  const [more, setMore] = useState("Hide");

  const handleClick = () => {
    if (more === "Hide") {
      setMore("Show");
    } else {
      setMore("Hide");
    }
  };

  const [more2, setMore2] = useState("Hide");

  const handleClick2 = () => {
    if (more2 === "Hide") {
      setMore2("Show");
    } else {
      setMore2("Hide");
    }
  };

  const [more3, setMore3] = useState("Hide");

  const handleClick3 = () => {
    if (more3 === "Hide") {
      setMore3("Show");
    } else {
      setMore3("Hide");
    }
  };

  const [more4, setMore4] = useState("Hide");

  const handleClick4 = () => {
    if (more4 === "Hide") {
      setMore4("Show");
    } else {
      setMore4("Hide");
    }
  };

  const [more5, setMore5] = useState("Hide");

  const handleClick5 = () => {
    if (more5 === "Hide") {
      setMore5("Show");
    } else {
      setMore5("Hide");
    }
  };

  const [more6, setMore6] = useState("Hide");

  const handleClick6 = () => {
    if (more6 === "Hide") {
      setMore6("Show");
    } else {
      setMore6("Hide");
    }
  };

  const [more7, setMore7] = useState("Hide");

  const handleClick7 = () => {
    if (more7 === "Hide") {
      setMore7("Show");
    } else {
      setMore7("Hide");
    }
  };

  const [more8, setMore8] = useState("Hide");

  const handleClick8 = () => {
    if (more8 === "Hide") {
      setMore8("Show");
    } else {
      setMore8("Hide");
    }
  };

  return (
    <main style={{ fontFamily: "poppins" }}>
      <section className='bg-[url("/image/foods.jpg")] bg-cover bg-center w-full bg-[#000000dc] bg-blend-overlay h-[220px] md:h-[300px] flex flex-col justify-center items-center gap-3 md:gap-5 text-white px-4'>
        <h2 className="font-semibold text-3xl md:text-5xl text-center">
          Gallery
        </h2>
        <h3 className="font-medium text-lg md:text-2xl text-center">
          <span>Home</span> <span className="text-[#FFBB00]">/Gallery</span>
        </h3>
      </section>

      <section className="p-4  md:p-10 md:px-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.2 }}
          style={{
            backgroundBlendMode: more === "Show" ? "overlay" : "normal",
          }}
          onMouseEnter={() => setMore("Show")}
          onMouseLeave={() => setMore("Hide")}
          className='bg-[url("/image/gallery1.jpg")] relative bg-[#00000079] bg-cover bg-center w-full h-[220px] md:h-[300px] rounded-2xl cursor-pointer ...'
        >
          <section
            style={{
              display: more === "Show" ? "block" : "none",
            }}
            className="opacity-100  items-center text-white p-4  justify-end h-full"
          >
            <h3 className="absolute font-me  left-5 bottom-6 text-[15px] text-[#FFBB00]">
              Meet pies
            </h3>
            <p className="absolute  left-5 bottom-2 text-[11px]">Food</p>
          </section>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.2 }}
          style={{
            backgroundBlendMode: more2 === "Show" ? "overlay" : "normal",
          }}
          onMouseEnter={() => setMore2("Show")}
          onMouseLeave={() => setMore2("Hide")}
          className='bg-[url("/image/gallery9.jpg")] relative bg-[#00000079] bg-cover bg-center w-full h-[220px] md:h-[300px] rounded-2xl cursor-pointer ...'
        >
          <section
            style={{
              display: more2 === "Show" ? "block" : "none",
            }}
            className="opacity-100  items-center text-white p-4  justify-end h-full"
          >
            <h3 className="absolute font-me  left-5 bottom-6 text-[15px] text-[#FFBB00]">
              Corporate table setup
            </h3>
            <p className="absolute  left-5 bottom-2 text-[11px]">Corporate</p>
          </section>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.2 }}
          style={{
            backgroundBlendMode: more3 === "Show" ? "overlay" : "normal",
          }}
          onMouseEnter={() => setMore3("Show")}
          onMouseLeave={() => setMore3("Hide")}
          className='bg-[url("/image/gallery3.jpg")] relative bg-[#00000079] bg-cover bg-center w-full h-[220px] md:h-[300px] rounded-2xl cursor-pointer ...'
        >
          {" "}
          <section
            style={{
              display: more3 === "Show" ? "block" : "none",
            }}
            className="opacity-100  items-center text-white p-4  justify-end h-full"
          >
            <h3 className="absolute font-me  left-5 bottom-6 text-[15px] text-[#FFBB00]">
              Wedding food
            </h3>
            <p className="absolute  left-5 bottom-2 text-[11px]">Wedding</p>
          </section>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.2 }}
          style={{
            backgroundBlendMode: more4 === "Show" ? "overlay" : "normal",
          }}
          onMouseEnter={() => setMore4("Show")}
          onMouseLeave={() => setMore4("Hide")}
          className='bg-[url("/image/gallery12.jpg")] relative bg-[#00000079] bg-cover bg-center w-full h-[220px] md:h-[300px] rounded-2xl cursor-pointer ...'
        >
          {" "}
          <section
            style={{
              display: more4 === "Show" ? "block" : "none",
            }}
            className="opacity-100  items-center text-white p-4  justify-end h-full"
          >
            <h3 className="absolute font-me  left-5 bottom-6 text-[15px] text-[#FFBB00]">
              Birthday party
            </h3>
            <p className="absolute  left-5 bottom-2 text-[11px]">Birthday</p>
          </section>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.2 }}
          style={{
            backgroundBlendMode: more5 === "Show" ? "overlay" : "normal",
          }}
          onMouseEnter={() => setMore5("Show")}
          onMouseLeave={() => setMore5("Hide")}
          className='bg-[url("/image/gallery4.jpg")] relative bg-[#00000079] bg-cover bg-center w-full h-[220px] md:h-[300px] rounded-2xl cursor-pointer ...'
        >
          {" "}
          <section
            style={{
              display: more5 === "Show" ? "block" : "none",
            }}
            className="opacity-100  items-center text-white p-4  justify-end h-full"
          >
            <h3 className="absolute font-me  left-5 bottom-6 text-[15px] text-[#FFBB00]">
              Birthday stew
            </h3>
            <p className="absolute  left-5 bottom-2 text-[11px]">Birthday</p>
          </section>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.2 }}
          style={{
            backgroundBlendMode: more6 === "Show" ? "overlay" : "normal",
          }}
          onMouseEnter={() => setMore6("Show")}
          onMouseLeave={() => setMore6("Hide")}
          className='bg-[url("/image/gallery10.jpg")] relative bg-[#00000079] bg-cover bg-center w-full h-[220px] md:h-[300px] rounded-2xl cursor-pointer ...'
        >
          {" "}
          <section
            style={{
              display: more6 === "Show" ? "block" : "none",
            }}
            className="opacity-100  items-center text-white p-4  justify-end h-full"
          >
            <h3 className="absolute font-me  left-5 bottom-6 text-[15px] text-[#FFBB00]">
              wedding settings
            </h3>
            <p className="absolute  left-5 bottom-2 text-[11px]">Wedding</p>
          </section>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.2 }}
          style={{
            backgroundBlendMode: more7 === "Show" ? "overlay" : "normal",
          }}
          onMouseEnter={() => setMore7("Show")}
          onMouseLeave={() => setMore7("Hide")}
          className='bg-[url("/image/gallery7.jpg")] relative bg-[#00000079] bg-cover bg-center w-full h-[220px] md:h-[300px] rounded-2xl cursor-pointer ...'
        >
          {" "}
          <section
            style={{
              display: more7 === "Show" ? "block" : "none",
            }}
            className="opacity-100  items-center text-white p-4  justify-end h-full"
          >
            <h3 className="absolute font-me  left-5 bottom-6 text-[15px] text-[#FFBB00]">
              Proteins
            </h3>
            <p className="absolute  left-5 bottom-2 text-[11px]">Food</p>
          </section>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.2 }}
          style={{
            backgroundBlendMode: more8 === "Show" ? "overlay" : "normal",
          }}
          onMouseEnter={() => setMore8("Show")}
          onMouseLeave={() => setMore8("Hide")}
          className='bg-[url("/image/gallery11.jpg")] relative bg-[#00000079] bg-cover bg-center w-full h-[220px] md:h-[300px] rounded-2xl cursor-pointer ...'
        >
          {" "}
          <section
            style={{
              display: more8 === "Show" ? "block" : "none",
            }}
            className="opacity-100  items-center text-white p-4  justify-end h-full"
          >
            <h3 className="absolute font-me  left-5 bottom-6 text-[15px] text-[#FFBB00]">
              Wedding cake
            </h3>
            <p className="absolute  left-5 bottom-2 text-[11px]">Wedding</p>
          </section>
        </motion.div>
      </section>
    </main>
  );
}

export default Gallery;
