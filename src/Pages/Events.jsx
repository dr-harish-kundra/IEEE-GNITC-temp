import React from "react";
import EventInfo,{moreInfo} from "../info/events";
import Autoplay from "embla-carousel-autoplay";
import EventImageItem from "@/components/Items/EventImageItem";


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,

} from "@/components/ui/carousel";

import CardItem from "@/components/Items/CardItem";
import { InfinityIcon } from "lucide-react";

function Events() {
  return (
    <div id="events">
      <div  >
      <div className="h-full">
        <div className="   eventsbg  w-full">
          <p>.</p>
          <div className=" flex justify-between items-center mt-12 gap-3">
            <div className=" heading ">Events</div>
           
          </div>


              <div className=" flex justify-center items-center mt-1 mr-6 gap-3 ">
              </div>
            </div>
            <div className=" memcard flex overflow-hidden  mt-14 gap-4 ml-10 m-6 w-4/6">
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
                  {moreInfo.map((data,index) => {
                    return (
                      <CarouselItem
                        className=" md:basis-1/5 md:pl-4"
                        key={index}
                      >
                        <EventImageItem
                          img={data.img}
                        />
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
              </Carousel>
            </div>
            
        
          </div>

          <div className="cerodrag  m-6">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                // Autoplay({
                //   delay: 5000,
                // }),
              ]}
            >
              <CarouselContent>
                {EventInfo.map((eve) => {
                  return (
                    <div key={eve.id}>
                      <CarouselItem className="m-2 ">
                        <CardItem
                          cardImg={eve.img}
                          cardContent={eve.content}
                          cardTitlee={eve.title}
                          cardLink={eve.link}
                          registerComponent={eve.register}
                        />
                      </CarouselItem>
                    </div>
                  );
                })}
              </CarouselContent>
              <div className="flex justify-between ">
              <div className="hidden md:flex gap-10 mt-5">  <CarouselPrevious />
                <CarouselNext />
              </div>
              <a href="/#/events" className="mt-7">
              <button className="btn1 text-white border-2 rounded-xl text-lg cursor-pointer l mt-5 ">View All</button>
              </a>
                </div>

              </Carousel>
            </div>
          </div>
        </div>
  );
}



export default Events;
