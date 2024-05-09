import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const Signupcompany = () => {
  const navigate = useNavigate();

  const handleSignupCompany = async (values) => {
    try {
      const response = await axios.post('https://backendproject-production-41c5.up.railway.app/signup', values);
      console.log('Signup successful', response.data);
      navigate('/logincompany');
    } catch (error) {
      console.log('Signup Failed', error.response ? error.response.data : error.message);
      if (error.response && error.response.data) {
        alert('signup Failed' + error.response.data.message);
      } else {
        alert('Signup failed. Please try again.');
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      company_name: '',
      employer_name: '',
      company_email: '',
      password: ''
    },
    validationSchema: yup.object({
      company_name: yup.string().required('Company Name is required'),
      employer_name: yup.string().required('Company Employer Name is required'),
      company_email: yup.string().email('Please enter a valid email address').required('Company Email is required'),
      password: yup.string().required('Please enter your password')
        .min(8, 'Password must be at least 8 characters')
        .matches(/[a-zA-Z]/, 'Password can only contain letters')
        .matches(/[0-9]/, 'Password can only contain numbers')
    }),
    onSubmit: handleSignupCompany
  });

  return (
    <div>
      <section className="min-h-screen flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 p-8 bg-[#0F2C59] flex flex-col justify-center items-center md:flex">
          <h1 className="text-2xl font-poppins mb-4 text-white text-center">Welcome and get ready to discover the best talent for your company</h1>
          <img src="assets/concept_of_remote_team.png" alt="conceptofremoteteam" className="mb-0 md:w-[40rem] md:h-[35rem]" />
        </div>
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center items-center">
          <div className="text-2xl font-poppins mb-4">
          <Link to="/"><img src="/assets/logo.png" alt="logo" /></Link>
          </div>
          <form onSubmit={formik.handleSubmit} className="mb-8 flex flex-col items-center w-full max-w-md">
            <div className="rounded-md p-3 w-full">
              <label htmlFor="company_name" className="block text-sm font-poppins mb-2 sr-only">Company Name</label>
              <input type="text" id="company_name" name="company_name" placeholder="Company Name" className={`shadow-md border border-gray-300 rounded-md px-3 py-2 w-full ${formik.touched.companyName && formik.errors.companyName ? 'border-red-500' : ''}`} {...formik.getFieldProps('company_name')} />
              {formik.touched.company_name && formik.errors.company_name && <div className="text-red-500">{formik.errors.company_name}</div>}
            </div>
            <div className="mb-2 rounded-md p-3 w-full">
              <label htmlFor="employer_name" className="block text-sm font-poppins mb-2 sr-only">Company Employer Name</label>
              <input type="text" id="employer_name" name="employer_name" placeholder="Company Employer Name" className={`shadow-md border border-gray-300 rounded-md px-3 py-2 w-full ${formik.touched.companyEmployerName && formik.errors.companyEmployerName ? 'border-red-500' : ''}`} {...formik.getFieldProps('employer_name')} />
              {formik.touched.employer_name && formik.errors.employer_name && <div className="text-red-500">{formik.errors.employer_name}</div>}
            </div>
            <div className="mb-2 rounded-md p-3 w-full">
              <label htmlFor="company_email" className="block text-sm font-poppins mb-2 sr-only">Company Email</label>
              <input type="email" id="company_email" name="company_email" placeholder="Company Email" className={`shadow-md border border-gray-300 rounded-md px-3 py-2 w-full ${formik.touched.companyEmail && formik.errors.companyEmail ? 'border-red-500' : ''}`} {...formik.getFieldProps('company_email')} />
              {formik.touched.company_email && formik.errors.company_email && <div className="text-red-500">{formik.errors.company_email}</div>}
            </div>
            <div className="mb-2 rounded-md p-3 w-full">
              <label htmlFor="password" className="block text-sm font-poppins mb-2 sr-only">Password</label>
              <input type="password" id="password" name="password" placeholder="Password" className={`shadow-md border border-gray-300 rounded-md px-3 py-2 w-full ${formik.touched.password && formik.errors.password ? 'border-red-500' : ''}`} {...formik.getFieldProps('password')} />
              {formik.touched.password && formik.errors.password && <div className="text-red-500">{formik.errors.password}</div>}
            </div>
            <button type="submit" className="bg-[#0F2C59] text-white font-poppins px-4 py-2 rounded">Sign Up</button>
            <p>Already have an account? <Link to="/logincompany" className="text-blue-950">Log in!</Link></p>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Signupcompany;
