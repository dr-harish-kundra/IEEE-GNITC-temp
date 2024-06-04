import React from "react";
import { Link as Scrool} from "react-scroll";
import {
  IoLogoLinkedin,
  IoLogoYoutube,
  IoLogoGithub,
  IoLogoWhatsapp,
} from "react-icons/io";
import { FaDiscord } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaReddit } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";



function Contact() {
  //discord
  return (
    <div id="contact">
      <div className="h-screen overflow-hidden" >
        <p>.</p>
        <div className="flex gap-5 justify-center items-center m-8 mt-20 ">
          <a
            href="https://www.linkedin.com/company/ieee-gnitc/"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoLinkedin className="text-5xl" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCrG5uoqFoiS31ZauRihrQXA"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoYoutube className="text-5xl" />
          </a>
          <a
            href="https://www.instagram.com/ieee_gnitc/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagramSquare className="text-5xl" />
          </a>
          <a
            href="https://twitter.com/IEEE_GNITC"
            target="_blank"
            rel="noreferrer"
          >
            <FaSquareXTwitter className="text-5xl" />
          </a>
          <a
            href="https://www.reddit.com/r/ieee_gnitc/"
            target="_blank"
            rel="noreferrer"
          >
            <FaReddit className="text-5xl" />
          </a>
          <a href="" target="_blank" rel="noreferrer">
            <IoLogoWhatsapp className="text-5xl" />
          </a>
          <a
            href="https://github.com/IEEE-GNITC"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoGithub className="text-5xl" />
          </a>
          <a href="https://discord.gg/4G3jXV7" target="_blank" rel="noreferrer">
            <FaDiscord className="text-5xl" />
          </a>
        </div>
        <div className=" flex justify-between m-8">
          <div className="text-slate-300 gap-4 underline font-semibold flex flex-col m-4 text-xl">
            <Scrool className="cursor-pointer" to="home">Home</Scrool>
            <Scrool  className="cursor-pointer" to="about">About</Scrool>
            <Scrool className="cursor-pointer" to="events">Events</Scrool>
            <Scrool className="cursor-pointer" to="members">Members</Scrool>
          </div>
          <div>
            <h1 className="text-3xl txt ml-80">KNOW ABOUT US</h1>
            <h1 className="text-2xl txt ml-80">visit <a href="https://gniindia.org"><u>https://gniindia.org</u></a></h1>
          </div>
          <div className=" txt text-xl ">
            <u className="text-3xl">Contact Us</u>
            <h2 className="text-2xl">Chair : Chandra Kiran Reddy Kasireddy</h2>
            <div className="px-10">
              <h2>email : <a href="mailto:chandukasireddy@ieee.org">chandukasireddy@ieee.org</a></h2>
              <h2>phone : <a href="tel:+918179833743">+91 8179833743</a></h2>
            </div>
            <h2 className="text-2xl">Vice Chair : Mohammed Abdul Rahman</h2>
            <div className="px-10">
              <h2>email : <a href="mailto:Mohammedabdulrahman@ieee.org">Mohammedabdulrahman@ieee.org</a></h2>
              <h2>phone : <a href="tel:+918008243308">+91 8008243308</a></h2>
            </div>
            <h2 className="text-2xl">Public Relations : Mohitha Vinnakota</h2>
            <div className="px-10">
              <h2>email : <a href="mailto:mohithav@ieee.org">mohithav@ieee.org</a></h2>
              <h2>phone : <a href="tel:+919951150501">+91 9951150501</a></h2>
            </div>
          </div>
        </div>
        {/* <a href="/#/code-of-conduct"><b className="flex justify-center mb-8">IEEE GNITC CODE OF CONDUCT</b></a> */}
        <b className="flex justify-center mb-8">ALL RIGHTS RESERVED</b>
      </div>
    </div>
  );
}

export default Contact;
