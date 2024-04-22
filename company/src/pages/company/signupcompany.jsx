import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

const Signupcompany = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      companyName: '',
      companyEmployerName: '',
      companyEmail: '',
      password: ''
    },
    validationSchema: yup.object({
      companyName: yup.string().required('Company Name is required'),
      companyEmployerName: yup.string().required('Company Employer Name is required'),
      companyEmail: yup.string().email('Please enter a valid email address').required('Company Email is required'),
      password: yup.string().required('Please enter your password')
        .min(8, 'Password must be at least 8 characters')
        .matches(/[a-zA-Z]/, 'Password can only contain letters')
        .matches(/[0-9]/, 'Password can only contain numbers')
    }),
    onSubmit: (values) => {
      console.log('Form submitted with values:', values);
      navigate('/mainpage');
    }
  });

  return (
    <div>
      <section className="min-h-screen flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 p-8 bg-[#0F2C59] flex flex-col justify-center items-center">
        <h1 className="text-2xl font-poppins mb-4 text-white text-center">Selamat datang, bersiaplah untuk menemukan bakat terbaik untuk perusahaan anda</h1>
          <img src="assets/concept_of_remote_team.png" alt="conceptofremoteteam" className="mb-8" />
        </div>
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-poppins mb-4"><img src="assets/logo.png" className="w-full h-auto" alt="Logo"/></h2>
          <form onSubmit={formik.handleSubmit} className="mb-8 flex flex-col items-center w-full max-w-md">
            <div className="rounded-md p-3 w-full">
              <label htmlFor="companyName" className="block text-sm font-poppins mb-2 sr-only">Company Name</label>
              <input type="text" id="companyName" name="companyName" placeholder="Company Name" className={`shadow-md border border-gray-300 rounded-md px-3 py-2 w-full ${formik.touched.companyName && formik.errors.companyName ? 'border-red-500' : ''}`} {...formik.getFieldProps('companyName')} />
              {formik.touched.companyName && formik.errors.companyName && <div className="text-red-500">{formik.errors.companyName}</div>}
            </div>
            <div className="mb-2 rounded-md p-3 w-full">
              <label htmlFor="companyEmployerName" className="block text-sm font-poppins mb-2 sr-only">Company Employer Name</label>
              <input type="text" id="companyEmployerName" name="companyEmployerName" placeholder="Company Employer Name" className={`shadow-md border border-gray-300 rounded-md px-3 py-2 w-full ${formik.touched.companyEmployerName && formik.errors.companyEmployerName ? 'border-red-500' : ''}`} {...formik.getFieldProps('companyEmployerName')} />
              {formik.touched.companyEmployerName && formik.errors.companyEmployerName && <div className="text-red-500">{formik.errors.companyEmployerName}</div>}
            </div>
            <div className="mb-2 rounded-md p-3 w-full">
              <label htmlFor="companyEmail" className="block text-sm font-poppins mb-2 sr-only">Company Email</label>
              <input type="email" id="companyEmail" name="companyEmail" placeholder="Company Email" className={`shadow-md border border-gray-300 rounded-md px-3 py-2 w-full ${formik.touched.companyEmail && formik.errors.companyEmail ? 'border-red-500' : ''}`} {...formik.getFieldProps('companyEmail')} />
              {formik.touched.companyEmail && formik.errors.companyEmail && <div className="text-red-500">{formik.errors.companyEmail}</div>}
            </div>
            <div className="mb-2 rounded-md p-3 w-full">
              <label htmlFor="password" className="block text-sm font-poppins mb-2 sr-only">Password</label>
              <input type="password" id="password" name="password" placeholder="Password" className={`shadow-md border border-gray-300 rounded-md px-3 py-2 w-full ${formik.touched.password && formik.errors.password ? 'border-red-500' : ''}`} {...formik.getFieldProps('password')} />
              {formik.touched.password && formik.errors.password && <div className="text-red-500">{formik.errors.password}</div>}
            </div>
            <button type="submit" className="bg-[#0F2C59] text-white font-poppins px-4 py-2 rounded">Sign Up</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Signupcompany;
