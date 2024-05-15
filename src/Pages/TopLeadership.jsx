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
      <div className="" id='TopLeadership'>
        <p>.</p>
      <div className="faclty mt-8 border-b-4 w-full h-auto overflow-hidden">
            <div className="">
            <div className=" heading text-lg mt-8  ">Top Leadership</div>
            </div>
            <div className=" memcard flex overflow-hidden gap-4 mt-20 ml-10  m-6">
            <Carousel
            className="w-full"
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
              <CarouselContent className="-ml-4 flex flex-col  md:flex-row justify-center flex-wrap ">
                {leadersinfo.map((data) => {
                  return (
                    <CarouselItem className="basis-1/4  ml-10" key={data.id}>
                      <MemItem
                        memimg={data.img}
                        memname={data.name}
                        memrole={data.role}
                      />
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
           
          </div>
          </div>
      </div>
    </div>
  )
}

export default TopLeadership
