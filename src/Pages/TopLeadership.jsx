import React from 'react'
import MemItem from "@/components/Items/MemItem";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import leadersinfo from "@/info/leadersinfo";

function TopLeadership() {
  return (
    <div>
      <div className="min-h-screen" id='TopLeadership'>
        <p>.</p>
      <div className="faclty  mt-44 md:mt-8 w-full h-auto overflow-hidden">
            <div className="">
            <div className=" heading text-lg m-8 ">Top Leadership</div>
            </div>
            <div className=" flex m-10  flex-col md:flex-row justify-between">
           
             
                {leadersinfo.map((data) => {
                  return (
                      <div className="m-5 mt-10">
                      <MemItem
                        memimg={data.img}
                        memname={data.name}
                        memrole={data.role}
                      />
                      </div>
                   
                  );
                })}
              
           
          </div>
          </div>
      </div>
    </div>
  )
}

export default TopLeadership
