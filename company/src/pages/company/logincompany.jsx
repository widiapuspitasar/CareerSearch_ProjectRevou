import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const Logincompany = () => {
  const navigate = useNavigate();

  const handleLoginCompany = async (values) => {
    try {
      const response = await axios.post('https://backendproject-production-41c5.up.railway.app/login_company', values, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        withCredentials: true // Mengizinkan pengiriman kredensial
      });

      console.log('Server Response:', response.data);

      const companyData = response.data.data.company;
      localStorage.setItem('companyData', JSON.stringify({
        token: response.data.token,
        company_id: response.data.data.company.id
      }));
      console.log('Login successful:', companyData);
      navigate('/mainpagecompany');

    } catch (error) {
      console.error('Login failed:', error.response.data);
      if (error.response.status === 401) {
        alert('Email or password is incorrect. Please try again.');
      } else {
        alert('An error occurred. Please try again later.');
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      company_email: '',
      password: ''
    },
    validationSchema: yup.object({
      company_email: yup.string().email('Please enter a valid email address').required('Email is required'),
      password: yup.string().required('Please enter your password')
        .min(8, 'Password must be at least 8 characters')
        .matches(/[a-zA-Z]/, 'Password can only contain letters')
        .matches(/[0-9]/, 'Password can only contain numbers')
    }),
    onSubmit: handleLoginCompany
  });

  return (
    <div>
      <section className="min-h-screen flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 p-8 bg-[#0F2C59] flex flex-col justify-center items-center hidden md:flex">
          <h1 className="text-2xl font-poppins mb-4 text-white text-center">Welcome and get ready to discover the best talent for your company</h1>
          <img src="assets/concept_of_remote_team.png" alt="conceptofremoteteam" className="mb-0 md:w-[40rem] md:h-[35rem]" />
        </div>
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-poppins mb-4">
          <Link to="/"><img src="/assets/logo.png" alt="logo"/></Link>
            </h2>
          <form onSubmit={formik.handleSubmit} className="mb-8 flex flex-col items-center w-full max-w-md">
            <div className="rounded-md p-3 w-full">
              <label htmlFor="company_email" className="block text-sm font-poppins mb-2 sr-only">Email</label>
              <input type="email" id="company_email" name="company_email" placeholder="Email" className={`shadow-md border border-gray-300 rounded-md px-3 py-2 w-full ${formik.touched.company_email && formik.errors.company_email ? 'border-red-500' : ''}`} {...formik.getFieldProps('company_email')} />
              {formik.touched.company_email && formik.errors.company_email && <div className="text-red-500">{formik.errors.company_email}</div>}
            </div>
            <div className="mb-2 rounded-md p-3 w-full">
              <label htmlFor="password" className="block text-sm font-poppins mb-2 sr-only">Password</label>
              <input type="password" id="password" name="password" placeholder="Password" className={`shadow-md border border-gray-300 rounded-md px-3 py-2 w-full ${formik.touched.password && formik.errors.password ? 'border-red-500' : ''}`} {...formik.getFieldProps('password')} />
              {formik.touched.password && formik.errors.password && <div className="text-red-500">{formik.errors.password}</div>}
            </div>
            <button type="submit" className="bg-[#0F2C59] text-white font-poppins px-4 py-2 rounded">Login</button>
          </form>
          <Link to="/signupcompany" className="text-blue-950">Sign Up Your Company Here!</Link>
        </div>
      </section>
    </div>
  );
}

export default Logincompany;
