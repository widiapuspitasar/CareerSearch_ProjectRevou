import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom'; 
import axios from 'axios';
import MainCompany from "../../component/maincompany";

function ListappliersByjob() {
  const [applicants, setApplicants] = useState([]);
  const { post_job_id } = useParams();

  useEffect(() => {
    const fetchApplicantsByPostJobId = async () => {
      try {
        const response = await axios.get(`https://backendproject-production-41c5.up.railway.app/apply_list/post_job/${post_job_id}`);
        setApplicants(response.data.data);
      } catch (error) {
        console.error('Error fetching applicants:', error);
      }
    };

    fetchApplicantsByPostJobId();
  }, [post_job_id]);

  return (
    <div>
      <header>
        <MainCompany />
      </header>
      <section className="container rounded mt-10 mx-auto p-8 bg-[#0F2C59] relative">
        <div className="flex justify-center relative">
          <div className="w-full sm:w-10/12 lg:w-9/12 xl:w-8/12">
            {applicants.length > 0 ? (
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
            ) : (
                <div className="bg-[#0F2C59] rounded-lg p-3 text-center" style={{ fontSize: "1.5rem" }}>
                  <div className='justify-center container mx-auto p-8 bg-[#0F2C59] relative flex items-center'>
                    <div className="flex flex-col items-center font-poppins">
                        <img src="/assets/x_icon.png" className="w-[10rem] h-[10rem] mb-5" alt="Profile" />
                        <p className="text:large md:text-4xl text-white">There are no applicants for this job yet!</p>
                    </div>
                    </div>
                </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListappliersByjob;
