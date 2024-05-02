import React from 'react';
import { Link } from "react-router-dom";
import Maincompany from "../../component/maincompany";

function Postjob() {
  return (
    <div>
      <section>
        <Maincompany />
      </section>
      <div className="bg-blue-900 min-h-screen flex flex-col items-center">
        <div className="bg-white p-8 rounded-md shadow-md max-w-xl w-full mt-8">
          <h2 className="text-center text-xl font-poppins font-bold mb-4">Post Job</h2>
          <form>
            {/* Rows for form fields */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input className="border p-2 rounded bg-[#eadbc8]" type="text" placeholder="Job's Name" />
              <input className="border p-2 rounded bg-[#eadbc8]" type="text" placeholder="Company Name" />
              <input className="border p-2 rounded bg-[#eadbc8]" type="text" placeholder="Phone Number" />
              <input className="border p-2 rounded bg-[#eadbc8]" type="text" placeholder="Address Job" />
              <input class="border p-2 rounded bg-[#eadbc8]" type="email" placeholder="Email" />
              <input class="border p-2 rounded bg-[#eadbc8]" type="text" placeholder="Post Until" />
            </div>

            {/* Textarea fields */}
            <div className="mb-4">
              <textarea className="border p-2 rounded w-full bg-[#eadbc8]" placeholder="Jobs Description"></textarea>
            </div>
            <div className="mb-4">
              <textarea className="border p-2 rounded w-full bg-[#eadbc8]" placeholder="Qualification"></textarea>
            </div>
            <div className="mb-4">
              <textarea class="border p-2 rounded w-full bg-[#eadbc8]" placeholder="Benefit"></textarea>
            </div>

            {/* Job Summary section */}
            <div className="grid grid-cols-1 gap-4 mb-4">
              <select class="border p-2 rounded bg-[#eadbc8]">
                <option>Jobs Level</option>
                <option>Entry-level</option>
                <option>Intermediate</option>
                <option>First-level management</option>
                <option>Middle management</option>
                <option>Senior management</option>
              </select>
              <input class="border p-2 rounded bg-[#eadbc8]" type="text" placeholder="Jobs Category" />
              <input class="border p-2 rounded bg-[#eadbc8]" type="text" placeholder="Vacancy" />
              <input class="border p-2 rounded bg-[#eadbc8]" type="text" placeholder="Educational Requirement" />
            </div>

            {/* Form actions */}
            <div className="flex justify-between">
              <button type="button" class="text-red-500 font-poppins">Cancel</button>
              <button type="submit" class="bg-blue-900 text-white py-2 px-4 rounded-md font-poppins">Post Job</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Postjob;
