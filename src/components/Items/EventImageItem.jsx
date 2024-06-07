import React from "react";

function EventImageItem({ img}) {
  return (
    <div>
  
    <div className="bg-slate-700 border-2 p-2 rounded-xl overflow-hidden shadow-md w-auto">

        
      <img src={img} alt="Employee Image" className="w-72  hover:p-2  hover:rounded-2xl  h-auto rounded-xl" />
    </div>
    </div>
  );
}

export default EventImageItem;
