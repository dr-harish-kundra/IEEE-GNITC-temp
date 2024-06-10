import React from "react";
const TechIgnition = () =>{
  return (
    <>
      <div className="bluebg ">
        <p className="text-xs">.</p>
        <div className="md:mt-10 mt-6 mb-8">
          <span className="md:text-4xl text-center text-lg p-2 cen font-semibold font-serif">
            GURU NANAK INSTITUTIONS TECHNICAL CAMPUS
          </span>
          <span className="md:text-3xl text-center text-lg p-2 cen mt-2 font-serif">
            IEEE GNI Chapters Present
          </span>
          <span className="md:text-3xl text-center text-2xl mt-3 p-2 cen fontf font-serif">
            IEEE Studnet Branch Inauguration
          </span>
          <span className="md:text-7xl text-center text-4xl p-3 cen fontf">
           
            <a href="https://konfhub.com/nlpc-gnitc"> TECH - IGNITION</a>
          </span>
        </div>
        <div className="about flex m-3 p-3 flex-col">
          <span className="cen fontf text-3xl  ">About</span>
          <span className=" text-lg fontt cen md:w-[85%]">
            The IEEE Student Branches of GNI are organizing a "TECH-IGNITION" an event which marks as the sucessful start of the IEEE student branches in the campus <br/>
            we encourage students to participate in this event and showcase their talents and innovation in the field of science and technology.
          </span>
        </div>
        <div className="rules flex-col mt-10 ">
          <span className="cen fontf font-semibold text-3xl">
            Rules and Guidelines
          </span>
          <span className="  fontt  text-lg cen md:ml-16  ">
            <ol>
              <li>
                -The competition will be conducted entirely virtual mode, making
                it accessible to all students irrespective of their physical
                location.
              </li>
              <li>
                -It will be open to all students across Country, encouraging
                interdisciplinary research and presentation of Project topics
                aligned with IEEE's fields of interest.
              </li>
              <li>
                -Participants will be required to submit PowerPoint presentation
                and video of project on innovative topics, which will be
                evaluated by a panel of industry experts and faculty members
                associated with IEEE.
              </li>
              <li>
                -Based on Evaluation, shortlisted entries will be selected for
                final round.
              </li>
              <li>
                -In the final round, the team must present their project on
                livestream and give a working demo of their project.
              </li>
              <li>
                -The team must contain a minimum of 2 people and maximum of 4
                people.
              </li>
            </ol>
          </span>
        </div>
        <div className="impDCat">
          <div className="flex flex-col justify-between gap-5 m-7 md:flex-row mt-7 md:mx-40 md:mt-24">
            <div className="impdate">
              <span className=" fontf text-3xl  ml-3 font-semibold ">
                Important Dates :
              </span>
              <span className="fontf text-lg  ">
                <li> Registrations start from: 9th May 2024</li>
                <li>Thursday Last date of Submission: 20th May 2024</li>
                <li>Monday 1st round Results : 23rd May 2024</li>
                <li>Thursday Final round: 25th May 2024</li>
                <li>Saturday Online award ceremony: 1st June 2024</li>
              </span>
            </div>
            <div className="categories  ">
              <span className=" fontf text-3xl  cen  font-semibold ">
                Categories :
              </span>
              <span className=" flex mt-5 fonta text-lg">
                <div>
                  <p className=" fontf text-xl mt-2 ml-2  ">1. Software</p>
                  <span className="fontt">
                    <li>Mobile App</li>
                    <li>Web App </li>
                  </span>
                </div>
                <div>
                  <p className=" fontf text-xl   mt-2 ml-2 font-bold ">
                    2. Hardware + software
                  </p>
                  <span className="fontt">
                    <li>Embedded</li>
                    <li>Internet of things</li>
                    <li>ROBOTICS</li>
                  </span>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="feePre ml-10 flex flex-col justify-between gap-5 md:mx-40 m-7 md:flex-row mt-7 md:mt-28">
          <div className="fee">
            <span className=" fontf font-semibold text-3xl">
              Registration fee:
            </span>
            <span className="fontt text-lg">
              <li>IEEE Member: 50/-per individual</li>
              <li>Non-IEEE Member: 150/-per individual</li>
            </span>
          </div>
          <div className="prizes">
            <span className="fontf text-3xl  ml-3 font-semibold">
              Cash Prizes :
            </span>

            <span className="fontt text-lg">
              <li>1st Position: Rs. 21,100</li>
              <li>2nd Position: Rs. 11,100 </li>
              <li> 3rd Position: Rs. 5,500</li>
            </span>
          </div>

        </div>
        <div className="regist m-5 md:m-20 cen">
            <div className="fontf text-6xl md:text-8xl"><a href="https://konfhub.com/nlpc-gnitc">Register</a></div>
            <div className=""></div>
        </div>
      </div>
    </>
  );
}

export default TechIgnition;
