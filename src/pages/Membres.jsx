import React, { useState } from 'react';
import FacultyAdvisers from '../components/FacultyAdivers';
import StudentCoreTeam from '../components/StudentCoreTeam';


const Members = () => {
  const [activeComponent, setActiveComponent] = useState('faculty'); // Default to 'student'

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mb-14">
        <button
          className={`md:px-10 px-8  md:text-xl py-2 rounded-2xl my-2  md:py-3 mx-2 ${activeComponent === 'faculty' ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveComponent('faculty')}
        >
          Faculty Advisers
        </button>
        <button
          className={`md:px-10 px-5  md:text-xl py-2 rounded-2xl my-2  md:py-3 mx-2 ${activeComponent === 'student' ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveComponent('student')}
        >
          Student Committee
        </button>
      </div>
      <div>
        {activeComponent === 'faculty' ? <FacultyAdvisers /> : <StudentCoreTeam />}
      </div>
    </div>
  );
};

export default Members;
