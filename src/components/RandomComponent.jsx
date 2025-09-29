import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function Counter({ target, duration = 1 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end =
      typeof target === "number" ? target : parseInt(target.replace(/\D/g, ""));
    if (start === end) return;

    let incrementTime = (duration * 1000) / end;
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <span>
      {count}
      {typeof target === "string" && isNaN(Number(target))
        ? target.replace(/[0-9]/g, "")
        : ""}
    </span>
  );
}

function RandomComponent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (isInView) {
      setStartCount(true);
    }
  }, [isInView]);

  return (
    <main
      ref={ref}
      className="overflow-hidden"
      style={{ fontFamily: "poppins" }}
    >
      <section className="flex flex-col md:flex-row gap-6 md:gap-10 p-4 md:p-10">
        <div className="bg-[url(/image/manyfood.jpg)] bg-cover bg-center p-6 md:p-10 rounded-4xl w-full bg-[#000000c5] bg-blend-overlay mb-4 md:mb-0">
          <h2 className="text-white text-3xl md:text-5xl text-center mb-3 font-semibold">
            {startCount ? <Counter target={10} duration={1} /> : 0}
          </h2>
          <p className="text-center text-white text-base md:text-lg">
            Years of Experience
          </p>
        </div>
        <div className="bg-[url(/image/manyfood2.jpg)] bg-cover bg-center p-6 md:p-10 rounded-4xl w-full bg-[#000000c5] bg-blend-overlay mb-4 md:mb-0">
          <h2 className="text-white text-3xl md:text-5xl text-center mb-3 font-semibold">
            {startCount ? <Counter target={50} duration={1} /> : 0}+
          </h2>
          <p className="text-center text-white text-base md:text-lg">
            Menu option
          </p>
        </div>
        <div className="bg-[url(/image/snacks.jpg)] bg-cover bg-center p-6 md:p-10 rounded-4xl w-full bg-[#000000c5] bg-blend-overlay mb-4 md:mb-0">
          <h2 className="text-white text-3xl md:text-5xl text-center mb-3 font-semibold">
            {startCount ? <Counter target={340} duration={1.5} /> : 0}
          </h2>
          <p className="text-center text-white text-base md:text-lg">Staff</p>
        </div>
        <div className="bg-[url(/image/rice.jpg)] bg-cover bg-center p-6 md:p-10 rounded-4xl w-full bg-[#000000c5] bg-blend-overlay">
          <h2 className="text-white text-3xl md:text-5xl text-center mb-3 font-semibold">
            {startCount ? <Counter target={"1500K"} duration={2} /> : 0}
          </h2>
          <p className="text-center text-white text-base md:text-lg">
            Happy Foodies
          </p>
        </div>
      </section>
    </main>
  );
}

export default RandomComponent;
