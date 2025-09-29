import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
function Footer() {
  return (
    <main className="bg-[url('/image/footer.png')] bg-cover p-8 md:p-20">
      <section
        className="text-white flex flex-col md:flex-row justify-between w-full gap-8"
        style={{ fontFamily: "poppins" }}
      >
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={Logo} alt="" className="w-20 mb-10" />
          <p className="w-[90%] mb-3 mt-3">
            Let Tamara Catering transform your special occasion into a
            masterpiece with our professional touch.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <button className="bg-transparent w-10 h-10 border-2 border-[#858585] text-[#878787] font-semibold rounded-2xl transition duration-300 hover:bg-[#FFBB00] hover:text-white hover:border-none cursor-pointer">
              <i className="fa-brands fa-facebook-f"></i>
            </button>
            <button className="bg-transparent w-10 h-10 border-2 border-[#858585] text-[#878787] font-semibold rounded-2xl transition duration-300 hover:bg-[#FFBB00] hover:text-white hover:border-none cursor-pointer">
              <i className="fa-brands fa-whatsapp"></i>
            </button>
            <button className="bg-transparent w-10 h-10 border-2 border-[#858585] text-[#878787] font-semibold rounded-2xl transition duration-300 hover:bg-[#FFBB00] hover:text-white hover:border-none cursor-pointer">
              <i className="fa-brands fa-tiktok"></i>
            </button>
            <button className="bg-transparent w-10 h-10 border-2 border-[#858585] text-[#878787] font-semibold rounded-2xl transition duration-300 hover:bg-[#FFBB00] hover:text-white hover:border-none cursor-pointer">
              <i className="fa-brands fa-instagram"></i>
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h2 className="font-semi-bold text-3xl md:text-3xl mb-6 md:mb-10">
            Contact Us
          </h2>
          <p className="flex gap-4 items-center">
            <span>
              <i className="fa-solid fa-location-dot text-2xl"></i>
            </span>
            <span>123 Catering St., Food City, FC 12345</span>
          </p>
          <p className="mt-3 flex gap-4 items-center">
            <span>
              <i className="fa-solid fa-envelope text-2xl"></i>
            </span>
            <span className="hover:underline hover:text-[blue] cursor-pointer">
              info@tamaracatering.com
            </span>
          </p>
          <p className="mt-3 flex gap-4 items-center">
            <span>
              <i className="fa-solid fa-phone text-2xl"></i>
            </span>
            <a
              href="tel:+33773625823"
              className="text-white"
              target="blank"
              rel="noreferrer"
            >
              <span className="hover:underline hover:text-[blue]">
                (123) 456-7890
              </span>
            </a>
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <h2 className="font-semi-bold text-2xl md:text-3xl mb-6 md:mb-10">
            Quick Links
          </h2>
          <ul>
            <li className="hover:text-[#FFBB00] mb-4">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="hover:text-[#FFBB00] mb-4">
              <Link to={"/gallery"}>Gallery</Link>
            </li>
            <li className="hover:text-[#FFBB00] mb-4">
              <Link to={"/about"}>About Us</Link>
            </li>
            <li className="hover:text-[#FFBB00] mb-4">
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Footer;
