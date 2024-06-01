import virtualvista from "../assets/events/VirtualVista.jpg";


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
      img: <iframe width="560" height="315" src="https://www.youtube.com/embed/Hlu6_E1qyIw?si=Pk9mx7hVDA0sKo6I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
      content:
        "Vitual Vesta pannel 5"       
       ,
      link: "/#/events/VirtualVista",
      register: RegisterComponent,
    },
    
    
    
  ];


export default EventInfo


