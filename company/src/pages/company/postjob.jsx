import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import MainCompany from "../../component/maincompany";

function Postjob() {
  const navigate = useNavigate();

    const [formData, setFormData] = useState({
      job_name: '',
      job_description: '',
      post_until: '',
      qualification: [],
      benefit: [],
      address_job: '',
      job_level: 'Entry-level',
      job_category: '',
      vacancy: '',
      educational_requirenment: ''
    });

    const [newQualification, setNewQualification] = useState('');
    const [newBenefit, setNewBenefit] = useState('');

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    };

    const handleAddQualification = () => {
      if (newQualification.trim() !== '') {
        setFormData((prevData) => ({
          ...prevData,
          qualification: [...prevData.qualification, newQualification],
        }));
        setNewQualification('');
      }
    };

    const handleAddBenefit = () => {
      if (newBenefit.trim() !== '') {
        setFormData((prevData) => ({
          ...prevData,
          benefit: [...prevData.benefit, newBenefit],
        }));
        setNewBenefit('');
      }
    };

    const handleRemoveQualification = (index) => {
      setFormData((prevData) => ({
        ...prevData,
        qualification: prevData.qualification.filter((_, i) => i !== index),
      }));
    };

    const handleRemoveBenefit = (index) => {
      setFormData((prevData) => ({
        ...prevData,
        benefit: prevData.benefit.filter((_, i) => i !== index),
      }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const companyId = localStorage.getItem('companyData') ? JSON.parse(localStorage.getItem('companyData')).company_id : null;
        const response = await axios.post(`https://backendproject-production-41c5.up.railway.app/company/create_job/${companyId}`, formData, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log('Job posted successfully:', response.data);
        navigate('/mainpagecompany');
      } catch (error) {
        console.error('Error posting job:', error);
      }
    };

  return (
    <div>
      <section>
        <MainCompany />
      </section>
      <div className="bg-[#0F2C59] min-h-screen flex flex-col items-center mt-5">
        <div className="bg-white p-8 rounded-md shadow-md max-w-xl w-full mt-8">
          <h2 className="text-center text-xl font-poppins font-bold mb-4">Post Job</h2>
          <form onSubmit={handleSubmit}> 

            <h3 className="text-left text-sm font-poppins font-bold mb-1 w-full">Job name</h3>
            <div className="gap-4 mb-4 font-poppins ">
              <input className="border-black border p-2 rounded shadow-lg bg-[#eadbc8] w-full" type="text" name="job_name" value={formData.job_name} onChange={handleChange} placeholder="Job Name" />
            </div>

            <h3 className="text-left text-sm font-poppins font-bold mb-1">Addres Job</h3>
            <div className="gap-4 mb-4 font-poppins">
              <input className="border-black border p-2 rounded shadow-lg bg-[#eadbc8] w-full" type="text" name="address_job" value={formData.address_job} onChange={handleChange} placeholder="Address Job" />
            </div>

            <h3 className="text-left text-sm font-poppins font-bold mb-1">Post Until</h3>
            <div className="gap-4 mb-4 font-poppins">
            <input className="border-black border p-2 rounded shadow-lg bg-[#eadbc8]" type="date" name="post_until" value={formData.post_until} onChange={handleChange} placeholder="Post Until" />
            </div>

            <h3 className="text-left text-sm font-poppins font-bold mb-1">Jobs Description</h3>
            <div className="mb-4">
              <textarea className="border-black border p-2 rounded shadow-lg w-full bg-[#eadbc8]" name="job_description" value={formData.job_description} onChange={handleChange} placeholder="Job Description"></textarea>
            </div>

            <h3 className="text-left text-sm font-poppins font-bold mb-1">Qualification</h3>
            <div className="mb-4">
                {formData.qualification.map((qual, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <p className=" w-full border-black rounded border p-2 overflow-hidden shadow-lg bg-[#EADBC8]  p-3 w-60 flex justify-center text-gray-600">{qual}</p>
                    <button onClick={() => handleRemoveQualification(index)} className="ml-2">Remove</button>
                  </div>
                ))}
                <input
                  type="text"
                  value={newQualification}
                  onChange={(e) => setNewQualification(e.target.value)}
                  placeholder="Type Here...."
                  className=" w-full border-black border rounded overflow-hidden shadow-lg bg-[#EADBC8] flex p-3 w-60 flex justify-center text-gray-600"
                />
                <button type="button" onClick={handleAddQualification}>Add Qualification</button>
            </div>

            <h3 className="text-left text-sm font-poppins font-bold mb-1">Benefit</h3>
            <div className="mb-4 font-poppins">
              {formData.benefit.map((bene, index) => (
                <div key={index} className="flex items-center mb-2">
                <p className="w-full border-black border rounded overflow-hidden shadow-lg bg-[#EADBC8] flex p-3 w-60 flex justify-center text-gray-600">{bene}</p>
                <button onClick={() => handleRemoveBenefit(index)} className="ml-2">Remove</button>
                </div>
              ))}
              <input
                type="text" 
                value={newBenefit}
                onChange={(e) => setNewBenefit(e.target.value)}
                placeholder="Type Here...."
                className="w-full border-black border rounded overflow-hidden shadow-lg bg-[#EADBC8] flex p-3 w-60 flex justify-center text-gray-600"
              />
              <button type="button" onClick={handleAddBenefit}>Add Benefit</button>   
            </div>
            
            <h3 className="text-left text-sm font-poppins font-bold mb-1">Job Summary</h3>
            <div className="grid grid-cols-1 gap-4 mb-4 font-poppins">
            <select onChange={handleChange} className="border p-2 rounded bg-[#eadbc8]" name="job_level">
              <option value="">Jobs Level</option>
              <option value="Entry-level">Entry-level</option>
              <option value="Intermediate">Intermediate</option>
              <option value="First-level management">First-level management</option>
              <option value="Senior management">Senior management</option>
            </select>
              <input className="border-black border p-2 rounded  bg-[#eadbc8]" type="text" name="job_category" value={formData.job_category} onChange={handleChange} placeholder="Jobs Category" />
              <input className="border-black border p-2 rounded  bg-[#eadbc8]" type="text" name="vacancy" value={formData.vacancy} onChange={handleChange} placeholder="Vacancy" />
              <input className="border-black border p-2 rounded  bg-[#eadbc8]" type="text" name="educational_requirenment" value={formData.educational_requirenment} onChange={handleChange} placeholder="Educational Requirement" />
            </div>

            <div className="flex justify-between">
              
              <button type="submit" className="bg-blue-900 text-white py-2 px-4 rounded-md font-poppins">Post Job</button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default Postjob;
