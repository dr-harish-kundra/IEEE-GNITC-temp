import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import IEEE from "../assets/IEEE.png";
import computer_society from "../assets/computer_society.png";
// import women_in_engineering from '../assets/women_in_engineering.png'
import communication_society from "../assets/communication_society.png";
import circuits_and_systems_society from "../assets/circuits_and_systems_society.png";

function FutureEventTimeLine() {
  return (
    <div id="events ">
      <div>
        <div className="overflow-hidden">
          <div className="   eventsbg border-b-4 mt-24 md:h-screen w-full">
            <p>.</p>
            <div className=" flex justify-between items-center mt-12 gap-3">
              <div className=" heading p-2">Upcoming Events</div>
            </div>
            <div className="m-2 md:border-b-2">

              <VerticalTimeline>


                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: 'rgb(33,243, 150 )', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                  date="????"
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<img src={computer_society} alt="computer society" className='rounded-full'/>}
                 >
                  <h3 className="vertical-timeline-element-title">Virtual Vista</h3>
                  <h5 className="vertical-timeline-element-subtitle">Ignite your intelligence</h5>
                  <p>
                    
                  </p>
                </VerticalTimelineElement>



                <a href="/events/Inauguration">
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    date="???"
                    iconStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    icon={
                      <img src={IEEE} alt="IEEE" className="rounded-full" />
                    }
                  >
                    <h3 className="vertical-timeline-element-title">
                      ???
                    </h3>
                    <h5 className="vertical-timeline-element-subtitle">
                      ???
                    </h5>
                    <p></p>
                  </VerticalTimelineElement>
                </a>

                
              </VerticalTimeline>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FutureEventTimeLine;
