import virtualvista from "../assets/events/VirtualVista.jpg";


const RegisterComponent = (
  <div className="regist m-5 md:m-8 cen">
    <div className="fontf text-6xl md:text-8xl">
      <a href="https://konfhub.com/nlpc-gnitc">Register</a>
    </div>
    <div></div>
  </div>
);

const EventInfo = [
    {
      id: "1",
      title: "Virtual Vista",
      img: virtualvista,
      content:
       "IEEE-Computer Society of Guru Nanak Institutions Technical Campus, Hyderabad is thrilled to invite you all to participate and to showcase your talent and innovation at the National Level Online Project Competition VIRTUAL VISTA-1.0 Sponsored by IEEE. This virtual event is set to ignite your intelligence and provide an online platform to showcase your talent."
       
       ,
      link: "/#/events/VirtualVista",
      register: RegisterComponent,
    },
    
  ];


export default EventInfo


