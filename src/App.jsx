import Event from "./pages/Event"
import About from "./pages/About"
import Home from "./pages/Home"
import Navbar from "./pages/Navbar"
import Societies from "./pages/Societies"
import Contact from "./pages/Contact"
import TopLeader from "./pages/TopLeader"
import FacultyAdvisers from "./components/FacultyAdivers"
import StudentCoreTeam from "./components/StudentCoreTeam"
import Members from "./pages/Membres"


function App() {


	return (
		<>
		<Navbar />
		<Home />
		<About />
		<Societies />
		<Event />
		<TopLeader />

    <Members />
		<Contact />

		</>
	)
}

export default App
