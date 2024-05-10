import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import MainCompany from "../../component/maincompany";

function Listappliers() {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    const companyId = localStorage.getItem('companyData') ? JSON.parse(localStorage.getItem('companyData')).company_id : null;
    axios.get(`https://backendproject-production-41c5.up.railway.app/apply_list/${companyId}`)
      .then(response => {
        setApplicants(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching applicants:', error);
      });
  }, []);

  return (
    <div>
      <header>
        <MainCompany />
      </header>
      <section className="container rounded mt-10 mx-auto p-8 bg-[#0F2C59] relative">
      <div className="flex justify-center relative">
        <div className="w-full sm:w-10/12 lg:w-9/12 xl:w-8/12">
          <div className="bg-[#0F2C59] rounded-lg">
            <main className="p-8 bg-white rounded-lg overflow-auto">
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
                  {applicants.map((applicant, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4">{applicant.date}</td>
                      <td className="px-6 py-4">{applicant.job_name}</td>
                      <td className="px-6 py-4">{applicant.user_name}</td>
                      <td className="px-6 py-4">{applicant.user_email}</td>
                      <td className="px-6 py-4">{applicant.status}</td>
                      <td className="px-6 py-4">
                        <Link to={`/profileuser/${applicant.user_id}/${applicant.apply_job_id}`}>
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
      </section>
      
    </div>
  );
};

export default Listappliers;
