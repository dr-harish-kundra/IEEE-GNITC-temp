import virtualvista from "../assets/events/VirtualVista.jpg";
import vv101 from "../assets/events/virtualvista/vv101.jpeg";
import vv102 from "../assets/events/virtualvista/vv102.jpeg";
import vv103 from "../assets/events/virtualvista/vv103.jpeg";
import vv104 from "../assets/events/virtualvista/vv104.jpeg";
import vv105 from "../assets/events/virtualvista/vv105.jpeg";
import vv106 from "../assets/events/virtualvista/vv106.jpeg";
import vv107 from "../assets/events/virtualvista/vv107.jpeg";
import vv108 from "../assets/events/virtualvista/vv108.jpeg";
import vv109 from "../assets/events/virtualvista/vv109.jpeg";
import vv110 from "../assets/events/virtualvista/vv110.jpeg";
import vv111 from "../assets/events/virtualvista/vv111.jpeg";
import vv112 from "../assets/events/virtualvista/vv112.jpeg";



const RegisterComponent = (
  <div className="regist m-5 md:m-8 cen">
    <div className="fontf text-6xl md:text-8xl">
      <a href="#/events/VirtualVista">View Images</a>
    </div>
    <div></div>
  </div>
);

const EventInfo = [
    {
      id: "1",
      title: "Virtual Vista",
      img2: virtualvista,
      img: <iframe width="560" height="315" src="https://www.youtube.com/embed/YXkWXIoWZhg?si=zfc12nc0P29zDWvu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
      content:
       "Vitual Vesta pannel 1 "
       
       ,
      link: "/#/events/VirtualVista",
      register: RegisterComponent,
    },
    {
      id: "2",
      title: "Virtual Vista",
      img2: virtualvista,
      img: <iframe width="560" height="315" src="https://www.youtube.com/embed/i6kXK_p94Ok?si=RtBMzredcstprsx5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
      content:
      "Vitual Vesta pannel 2"       
       ,
      link: "/#/events/VirtualVista",
      register: RegisterComponent,
    },
    
    {
      id: "3",
      title: "Virtual Vista",
      img2: virtualvista,
      img: <iframe width="560" height="315" src="https://www.youtube.com/embed/2yGKzUbdehI?si=C0NVwB8-bBaAPB2E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
      content:
        "Vitual Vesta pannel 3"       
       ,
      link: "/#/events/VirtualVista",
      register: RegisterComponent,
    },
    
    {
      id: "4",
      title: "Virtual Vista",
      img2: virtualvista,
      img: <iframe width="560" height="315" src="https://www.youtube.com/embed/RU--zDGc9uk?si=P9XoFrpx0SJAa-IF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
      content:
        "Vitual Vesta pannel 4"       
       ,
      link: "/#/events/VirtualVista",
      register: RegisterComponent,
    },
    
    {
      id: "5",
      title: "Virtual Vista",
      img2: virtualvista,
      img: <iframe width="560" height="315" src="https://www.youtube.com/embed/Hlu6_E1qyIw?si=Pk9mx7hVDA0sKo6I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
      content:
        "Vitual Vesta pannel 5"       
       ,
      link: "/#/events/VirtualVista",
      register: RegisterComponent,
    },
    
    
    
  ];

const moreInfo =[
  {
    img: vv101
  },
  {
    img: vv102
  }
  ,
  {
    img: vv103
  },
  {
    img: vv104
  },
  {
    img: vv105
  },
  {
    img: vv106
  },
  {
    img: vv107
  },
  {
    img: vv108
  },
  {
    img: vv109
  },
  {
    img: vv110
  },
  {
    img: vv111
  },
  {
    img: vv112
  }

]

export {moreInfo}
export default EventInfo 

