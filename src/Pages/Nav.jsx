import React from "react";
// import "../index.css"
import logo from "../assets/n-logo.png";

import { Link as ScrollLink } from "react-scroll";

export default function Nav() {
  return (
    <div className="">
      <div className="flex justify-between text-center  border-b-2 navBg border-gray-200 md:h-20 z-30 fixed top-0 w-full">
        <div className="flex justify-between md:justify-start text-center  w-full  ">
          <span className="m-4 hidden md:flex text-slate-200	text-xl cursor-pointer">
          <ScrollLink to="home" smooth={true} duration={500}>
          <img src={logo} alt="Gnitc" className="max-w-36 rounded-xl logobg" />
          </ScrollLink>
          
          </span>
          <span className="m-4  mt-6 text-slate-200	 cursor-pointer">
            <ScrollLink to="aboutus" smooth={true} duration={500}>
            About us
            </ScrollLink>
          </span>
          <span className="m-4  mt-6 text-slate-200	 cursor-pointer">
            <ScrollLink to="societies" smooth={true} duration={500}>Societies</ScrollLink>
          </span>
          <span className="m-4 mt-6 text-slate-200	 cursor-pointer">
          <ScrollLink to="events" smooth={true} duration={500}>Events</ScrollLink>
          </span>
          <span className="m-4 mt-6 text-slate-200	hidden md:flex cursor-pointer">
            <ScrollLink to="advisors" smooth={true} duration={500}>
              Faculty Advisors
            </ScrollLink>
          </span>
          <span className="m-4 mt-6 text-slate-200	 cursor-pointer">
            <ScrollLink to="members" smooth={true} duration={500}>
            Members
            </ScrollLink>
          </span>
          
          
          <span className="m-4 mt-6 text-slate-200	hidden md:flex cursor-pointer">
            <ScrollLink to="collaborators" smooth={true} duration={500}>
            Collaborators
            </ScrollLink>
          </span>

          <span className="m-4  mt-6 mr-10 text-slate-200	 hidden md:flex cursor-pointer">
            <ScrollLink to="contact" smooth={true} duration={500}>
            Contact
            </ScrollLink>
          </span >
        </div>
        <div className=" justify-between text-center txt gap-14 mr-10 hidden md:flex  mt-6 m-5">
          <span className="cursor-pointer"><a href="https://www.ieee.org/">IEEE.org</a></span>
          <span className="cursor-pointer md:w-32"><a href="https://ieeehyd.org/">IEEE Hyderabad</a></span>
        </div>
      </div>
    </div>
  );
}
