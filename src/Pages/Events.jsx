import React from "react";
import EventInfo,{moreInfo1,moreInfo2} from "../info/events";
import Autoplay from "embla-carousel-autoplay";
import EventImageItem1 from "@/components/Items/EventImageItem1";
import EventImageItem2 from "@/components/Items/EventImageItem2";



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
            <div className=" flex md:flex-row flex-col">
            <div className=" memcard flex overflow-hidden flex- mt-14 gap-4 ml-10 m-6 w-4/6t">
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
                  {moreInfo1.map((data,index) => {
                    return (
                      <CarouselItem
                        className="  md:basis-1/2 basis-4/5  pl-6 md:pl-16"
                        key={index}
                      >
                        <EventImageItem1
                          img={data.img}
                        />
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
              </Carousel>
            </div>
            <div className="bg-slate-900 txt m-8 rounded-3xl md:max-h-[700px] md:mt-20 p-5">
              <p className="m-2 md:text-lg">On June 5, 2024, the Valedictory Function was held, where cash prizes and certificates were awarded to the winners. The top prize of Rs. 21,100 was awarded to the team from Anurag University, Telangana, comprising P. Karthik Rao, B. Venu Gopal, P. Sahithi Reddy, and V. Charitha Reddy. The second prize of Rs. 11,100 went to the team from Rajalakshmi Engineering College, Tamil Nadu, including Shaun Orlando M, Shivani S. R., and Sarathi. The third prize of Rs. 5,500 was given to the team from Acropolis Institute of Technology and Research, Madhya Pradesh, consisting of Sakshi Raut, Vihaan Vijayvargiya, Aditi Zingre, and Ira Joshi.</p>
              <br /> 
              <div className="hidden md:flex">
              <p> <h3 className="font-bold text-lg">The Valedictory Function featured several distinguished guests:</h3>
                <br />

Chief Guest: Dr. Krithika Sutrave, Assistant Professor at Grand Valley State University, USA, and Visiting Professor at the University of South Dakota
Guest of Honor: Dr. Mousmi Ajay Chaurasia, Vice Chair of the IEEE Hyderabad Section
Other Dignitaries: <br /> <br />
Dr. M.A. Jabbar, Secretary of the IEEE Hyderabad Section
<br />
Mr. G. Kapil Kumar, Delivery Manager at TCS <br />
Mr. U. Arjun, Cyber Security Manager at Capgemini <br />
Dr. K. Venkata Rao, Director at GNITC <br />
Dr. Rishi Sayal, Associate Director and IEEE Branch Counsellor <br />
Dr. Harish Kundra, Dean of Students and Faculty Welfare and IEEE Branch Coordinator <br />
Dr. Geeta Tripathi, Head of CSE Department and IEEE CS Advisor  <br />
Dr Ch Ravindra, Convener of the event <br />
The event was made possible with the full support of the IEEE GNITC chapter's leadership, including Vice Chairman Sardar Gagandeep Singh Kohli and Managing Director Dr. H. S. Saini. Their dedication and support were instrumental in the success of Virtual Vista-1.0.</p></div>
            </div>
            </div>
            </div>

            <div className=" memcard flex overflow-hidden mb-24  mt-14 gap-4 ml-10 m-6 w-[90%]">
              <div >
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
                  {moreInfo2.map((data,index) => {
                    return (
                      <CarouselItem
                        className="  md:basis-1/3 md:pl-10"
                        key={index}
                      >
                        <EventImageItem2
                          img={data.img}
                        />
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
              </Carousel>
              </div>
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

  );
}



export default Events;
