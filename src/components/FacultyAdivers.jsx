import InstituteHead from "../assets/people/Dr.S.SreenathaReddy.webp"
import React from "react";
import BranchCounceller from "../assets/people/DrRishiSayal.png"
import BranchCoordinator from "../assets/people/Dr.HarishKundra.jpg"
import ComputerAdvisor from "../assets/people/Dr.GeetaTripathi.png"
import ComAdvisor from "../assets/people/DrMdRashidMahmood.png"
import CasAdvisor from "../assets/people/Dr.S.M.K.M.AbbasAhmad.png"


function FacultyAdvisers() {
  const advisers = [
    {
      name: "Dr. S. Sreenatha Reddy",
      title: "Institute Head",
      imgSrc: InstituteHead,
    },
    {
      name: "Dr. Rishi Sayal",
      title: "Branch Counceller",
      imgSrc: BranchCounceller, 
    },
    {
      name: "Dr. Harish Kundra",
      title: "Branch Coordinator",
      imgSrc: BranchCoordinator,
    },
    {
      name: "Dr. Geeta Tripathi",
      title: "Computer Society Adviser",
      imgSrc: ComputerAdvisor,
    },
    {
      name: "Dr.Md Rashid Mahmood",
      title: "Communication Society Adviser",
      imgSrc: ComAdvisor,
    },
    {
      name: "Dr. SMKS Abbas Ahmed",
      title: "Circuits And Systems Society",
      imgSrc: CasAdvisor,
    }
  ];

  return (
    <div className="p-6 my-5 border-b overflow-hidden container mx-auto "id="Faculty">
      {/* <h2 className="text-center text-3xl font-bold mb-16">Faculty Advisers</h2> */}
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-20 gap-5 ">
        {advisers.map((adviser, index) => (
          <div
            key={index}
            className="bg-white max-w-md mb-16 shadow-lg rounded-lg p-6 text-center"
          >
            <img
              src={adviser.imgSrc}
              alt={adviser.name}
              className="w-48  mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {adviser.name}
            </h3>
            <p className="text-md text-gray-600">{adviser.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FacultyAdvisers;
