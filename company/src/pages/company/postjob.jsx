import React from 'react';
import { Link } from "react-router-dom";
import Maincompany from "../../component/maincompany";

function Postjob() {
  return (
    <div>
      <section>
        <Maincompany />
      </section>
      <div className="bg-[#0F2C59] min-h-screen flex flex-col items-center">
        <div className="bg-white p-8 rounded-md shadow-md max-w-xl w-full mt-8">
          <h2 className="text-center text-xl font-poppins font-bold mb-4">Post Job</h2>
          <form>
            
            <div className="grid grid-cols-2 gap-4 mb-4 font-poppins">
              <input className="border-black border p-2 rounded shadow-lg bg-[#eadbc8]" type="text" placeholder="Job's Name" />
              <input className="border-black border p-2 rounded shadow-lg bg-[#eadbc8]" type="text" placeholder="Company Name" />
              <input className="border-black border p-2 rounded shadow-lg bg-[#eadbc8]" type="text" placeholder="Phone Number" />
              <input className="border-black border p-2 rounded shadow-lg bg-[#eadbc8]" type="text" placeholder="Address Job" />
              <input className="border-black border p-2 rounded bg-[#eadbc8]" type="email" placeholder="Email" />
            </div>

            <h3 className="text-left text-sm font-poppins font-bold mb-4">Post Until</h3>
            <div className="grid grid-cols-2 gap-4 mb-4 font-poppins">
              <input className="border-black border p-2 rounded bg-[#eadbc8]" type="date" placeholder="DD/MM/YY" pattern="\d{2}/\d{2}/\d{2}" />
            </div>

            
            <h3 className="text-left text-sm font-poppins font-bold mb-4">Jobs Description</h3>
            <div className="mb-4">
              <textarea className="border-black border p-2 rounded shadow-lg w-full bg-[#eadbc8]"></textarea>
            </div>
            <h3 className="text-left text-sm font-poppins font-bold mb-4">Qualification</h3>
            <div className="mb-4">
              <textarea className="border-black border p-2 rounded w-full bg-[#eadbc8]"></textarea>
            </div>
            <h3 className="text-left text-sm font-poppins font-bold mb-4">Benefit</h3>
            <div className="mb-4">
              <textarea className="border-black border p-2 rounded w-full bg-[#eadbc8]"></textarea>
            </div>

            
            <h3 className="text-left text-sm font-poppins font-bold mb-4">Job Summary</h3>
            <div className="grid grid-cols-1 gap-4 mb-4">
              <select className="border-black border p-2 rounded font-poppins bg-[#eadbc8]">
                <option disabled selected>Jobs Level</option>
                <option>Entry-level</option>
                <option>Intermediate</option>
                <option>First-level management</option>
                <option>Middle management</option>
                <option>Senior management</option>
              </select>
              <input className="border-black border p-2 rounded font-poppins bg-[#eadbc8]" type="text" placeholder="Jobs Category" />
              <input className="border-black border p-2 rounded font-poppins bg-[#eadbc8]" type="text" placeholder="Vacancy" />
              <input className="border-black border p-2 rounded font-poppins bg-[#eadbc8]" type="text" placeholder="Educational Requirement" />
            </div>

            
            <div className="flex justify-between mb-4">
              <Link to="/mainpagecompany" className="text-[#0F2C59] font-poppins">Cancel</Link>
              <Link to="/jobdetailcompany" className="bg-[#0F2C59] text-white py-2 px-4 rounded-md font-poppins">Post Job</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Postjob;
