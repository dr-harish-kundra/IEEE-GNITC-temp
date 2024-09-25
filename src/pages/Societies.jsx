import React from "react";
import computer from "../assets/computer.png";
import cas from "../assets/cas.png";
import com from "../assets/com.png";

function Societies() {
  return (
    <div>
        <span className="flex my-10 md:text-5xl justify-center items-center text-4xl font-bold" id="Societies">Societies</span>
      <div className=" flex flex-col md:flex-row gap-10 items-center justify-center my-10">
        <a href="https://www.computer.org"><img src={computer} alt="img" className=" computer w-[20rem] md:w-[28rem]  rounded-3xl " /></a >
        <a href="https://ieee-cas.org/"><img src={cas} alt="img" className=" cas w-[20rem] md:w-[28rem] rounded-3xl"/></a >
        <a href="https://www.comsoc.org/"><img src={com} alt="img" className=" com w-[20rem] md:w-[28rem]  rounded-3xl"/></a >
      </div>
    </div>
  );
} 

export default Societies;
