import './App.css'
import { HashRouter as Router, Route, Routes} from 'react-router-dom'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'
import Events from './Pages/Events'
import Home from './Pages/Home'
import AllMem from './Pages/Indepages/Allmem'
import Members from './Pages/Members'
import Nav from './Pages/Nav'
import Societies from './Pages/Societies'
import NotFound from './Pages/NotFound'
import ComputerSociety from './Pages/societies/ComputerSociety'
import CommunicationSociety from './Pages/societies/CommunicationSociety'
import CircuitsAndSystemsSociety from './Pages/societies/CircuitsAndSystemsSociety'
import FacltyAdv from './Pages/FacltyAdv'
import AllEvents from './Pages/AllEvents.jsx'
// import CodeOfConduct from './Pages/CodeOfConduct'
import FutureEventTimeLine from './Pages/FutureEventTimeLine'
import Collaborators from './Pages/Collaborators'
import VirtualVista from './Pages/events/computersociety/VirtualVista'



function App1() {
  return (
    <>
      <Nav/>
      <Home />
      <AboutUs />
      <Societies />
      <Events />
      <FutureEventTimeLine />
      <FacltyAdv />
      <Members />
      <Collaborators />
      <Contact />
    </>
  )
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App1 />} />
        <Route path="/members" element={<AllMem />} />
        <Route path='/ComputerSociety' element={<ComputerSociety/>} />
        <Route path='/CommunicationSociety' element={<CommunicationSociety/>} />
        <Route path='/CircuitsAndSystemsSociety' element={<CircuitsAndSystemsSociety/>} />
        <Route path="/events" element={<AllEvents />} />
        <Route path="/events/VirtualVista" element={<VirtualVista />} />
          
        {/* <Route path='/code-of-conduct' element={<CodeOfConduct />} /> */}
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </Router>
  )
}

export default App


