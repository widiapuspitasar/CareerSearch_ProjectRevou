import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Maincompany from "../../component/maincompany";

function Mainpagecompany() {
  const [jobslist, setJobsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJobsByCompanyId = async () => {
      try {
        const companyId = localStorage.getItem('companyData') ? JSON.parse(localStorage.getItem('companyData')).company_id : null;
        const response = await axios.get(`https://backendproject-production-41c5.up.railway.app/company/job_list/${companyId}`);
        setJobsList(response.data.data); 
        setIsLoading(false); 
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      }
    };

    fetchJobsByCompanyId(); 
  }, []);

  return (
    <div>
      <header>
        <Maincompany />
      </header>

      {isLoading && (
        <div className='justify-center container mx-auto p-8 bg-[#0F2C59] relative flex items-center'>
          <div className="flex flex-col items-center font-poppins">
            <img src="/assets/x_icon.png" className="w-[10rem] h-[10rem] mb-5" alt="Profile" />
            <p className="text-5xl text-white">You currently have no published job applications</p>
            <p className="text-5xl text-white">Let's do it now!</p>
            <button type="submit" className="bg-[#0F2C59] text-white text-4xl px-4 py-2 rounded "><Link to="/postjob">Post A Job</Link></button>
          </div>
        </div>
      )}

      <section className='container rounded mx-auto p-8 bg-[#0F2C59] relative mt-5 font-poppins '>

        <div className="flex justify-end items-center mb-4 ml-20 mt-2 mx-auto"> 
          <button type="submit" className="bg-white hover:bg-blue-500 text-[#0F2C59] hover:text-white px-4 py-2 font-bold rounded self-end "><Link to="/postjob">Post A Job</Link></button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {jobslist.map(job => (
            <div key={job.id}  className="rounded overflow-hidden shadow-lg bg-gray-100 flex p-3 relative">
              <div className="w-1/3 flex flex-col items-center justify-center">
                <img src="assets/company_logo.png" className="w-[4rem] h-[4rem] md:w-[6rem] md:h-[6rem] object-cover" alt="Profile" />
              </div>
              <div className="w-2/3 flex flex-col justify-center md:pl-6">
                <Link className="text-lg font-poppins" to={`/detailpage/${job.id}`}>{job.job_name}</Link>
                <p className="text-gray-600">{job.company_name}</p>
                <p className="text-gray-600 mb-4 md:mb-0">{job.address_job}</p>
              </div>
              
              <Link to={`/listappliersByjob/${job.id}`} className="text-sm text-gray-600 absolute right-0 bottom-0 mr-3 mb-3 md:mb-0">
                View Applied
              </Link>
            </div>
          ))}
        </div>
      </section>

      {!isLoading && jobslist.length === 0 && (
        <div class='justify-center container mx-auto p-8 bg-[#0F2C59] relative flex items-center'>
          <div class="flex flex-col items-center font-poppins">
            <img src="assets/x_icon.png" class="w-[10rem] h-[10rem] mb-5" alt="Profile" />
            <p class="text-5xl text-white">You currently have no published job applications</p>
            <p class="text-5xl text-white">Let's do it now!</p>
            <button type="submit" className="bg-[#0F2C59] text-white text-4xl px-4 py-2 rounded "><Link to="/postjob">Post A Job</Link></button>
          </div>
        </div>
      )}
    </div>
  );  
}

export default Mainpagecompany;
