import Chair from "../assets/people/MohammedAbdulRahman.png"
import Pr from "../assets/people/MohithaVinnakota.png"
import ComputerChair from "../assets/people/PranavVojjala.png" 
import CasChair from "../assets/people/Karthikeya.png"
import ComChair from "../assets/people/MohammedImranAli.png"
import Secretary from "../assets/people/yashaswini.jpeg"
import Webmaster1 from "../assets/people/Kevin.png"
import Webmaster2 from "../assets/people/SumithReddy.png"
import DesignLead from "../assets/people/Sumidha.png"
//import SocialmediaLead from "../assets/people/Jatin.png"


function StudentCoreTeam() {
	const students = [
		{
			name: "Mohammed Abdul Rahman",
			title: "Chair",
			imgSrc: Chair,
		},
		{
			name: "Mohitha Vinnakota",
			title: "Public Relations",
			imgSrc: Pr,
		},

		{
			name: "Nekkanti Yashaswini",
			title: "Secretary",
			imgSrc: Secretary,
		},
		{
			name: "Sumidha",
			title: "Design Lead",
			imgSrc: DesignLead,
		},
		//{
		//	name: "",
		//	title: "",
		//	imgSrc: ,
		//},
		{
			name: "S. Sumith Reddy",
			title: "Web Master",
			imgSrc: Webmaster2,
		},
		{
			name: "Kevin Paul Reddy J",
			title: "Web Master",
			imgSrc: Webmaster1,
		},
		{
			name: "Pranav Vojjala",
			title: "Computer Society Chair",
			imgSrc: ComputerChair, 
		},
		{
			name: "Mohammed Imran Ali",
			title: "Communication Society Chair",
			imgSrc: ComChair,
		},
		{
			name: "M. Narashima Karthikeya",
			title: "Circuits and Systems Society Chair",
			imgSrc: CasChair 
		},

	];

	return (
		<div className="p-6 my-5 border-b  overflow-hidden container mx-auto" id="Students">
		{/* <h2 className="text-center text-3xl font-bold mb-16">Core Team</h2> */}
		<div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-20 gap-5 ">
		{students.map((student, index) => (
			<div
			key={index}
			className="bg-white max-w-md mb-16 shadow-lg rounded-lg p-6 text-center"
			>
			<img
			src={student.imgSrc}
			alt={student.name}
			className="w-48  mx-auto rounded-full mb-4 object-cover"
			/>
			<h3 className="text-xl font-bold text-gray-800 mb-2">
			{student.name}
			</h3>
			<p className="text-md text-gray-600">{student.title}</p>
			</div>
		))}
		</div>
		</div>
	);
}

export default StudentCoreTeam;

