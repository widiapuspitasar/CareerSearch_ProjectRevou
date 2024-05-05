import React from "react";
import { Link } from 'react-router-dom'; 
import Maincompany from "../../component/maincompany";

function Listappliers() {
  const rows = [
    { date: "17-04-2024", jobName: "Software Engineering", name: "Lee Dohyun", email: "leedohyun@gmail.com" },
    { date: "17-04-2024", jobName: "Software Engineering", name: "Lee Dohyun", email: "leedohyun@gmail.com" },
    { date: "17-04-2024", jobName: "Software Engineering", name: "Lee Dohyun", email: "leedohyun@gmail.com" },
    { date: "17-04-2024", jobName: "Software Engineering", name: "Lee Dohyun", email: "leedohyun@gmail.com" }
  ];

  return (
    <div className="bg-[#0F2C59] min-h-screen">
      <section>
        <Maincompany />
      </section>
      <div className="flex justify-between items-center p-4">
        <div className="w-6"></div>
        <input
          type="text"
          className="bg-white text-black rounded px-4 py-2 w-64"
          placeholder="Search"
        />
      </div>
      <div className="flex justify-center">
        <div className="w-full sm:w-10/12 lg:w-9/12 xl:w-8/12">
          <div className="bg-[#0F2C59] rounded-lg">
            <main className="p-8 bg-white rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr className="text-left">
                    <th className="px-6 py-3">Date</th>
                    <th className="px-6 py-3">Job's Name</th>
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">Email</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {rows.map((row, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4">{row.date}</td>
                      <td className="px-6 py-4">{row.jobName}</td>
                      <td className="px-6 py-4">{row.name}</td>
                      <td className="px-6 py-4">{row.email}</td>
                      <td className="px-6 py-4">{row.status}</td>
                      <td className="px-6 py-4">
                        <Link to="/profile">
                          <button className="bg-[#0F2C59] text-white rounded-sm px-4 py-2">Detail</button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listappliers;
