import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardItem2 from "@/components/Items/CardItem2";
import EventInfo from "../info/events";
import Autoplay from "embla-carousel-autoplay"
import IEEE from "../assets/IEEE.png"
import TIinfo1 from "../assets/events/tech-ignition/info1.jpeg"
import TIinfo2 from "../assets/events/tech-ignition/info2.png"
import TIinfo3 from "../assets/events/tech-ignition/info3.jpeg"
import TIinfo4 from "../assets/events/tech-ignition/info4.jpeg"

function Home() {

  const posters =[
    {
      title: "Tech Ignition",
      img: TIinfo1,
      link: "/#/events/TechIgnition"
    },
    {
      title: "Tech Ignition",
      img: TIinfo2,
      link: "/#/events/TechIgnition"
    },
    {
      title: "Tech Ignition",
      img: TIinfo3,
      link: "/#/events/TechIgnition"
    },
    {
      title: "Tech Ignition",
      img: TIinfo4,
      link: "/#/events/TechIgnition"
    }
  ];
  return (
    <div
      id="home"
      className="h-screen w-full  flex overflow-hidden justify-center items-center"
    >
      <div className="container flex h-[90%] w-[98%]   md:flex-row  p-4 m-4 flex-col ">
       
         

          <div className="  flex  p-2  mt-24 ml-4  md:mt-52 ">
            <img src={IEEE} alt="logo" className="h-20 mt-6 md:h-40" />
            <span className="text-4xl text-white mt-12 md:mt-14 md:text-8xl md:w- wrap font-serif">
             
              <p className="">IEEE GNITC</p>
            </span>
        
          </div>
     
        <div className=" mt-32 flex ml-6 md:ml-56 md:w-96">
          <div className="events flex overflow-hidden">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
            >
              <CarouselContent>
                {posters.map((props) => {
                  return (
                    <>
                      <CarouselItem>
                        <CardItem2 cardTitlee={props.title} cardImg={props.img } link={props.link}/>
                      </CarouselItem>
                    </>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="bg-slate-700"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
