import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

const Signup = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      Name: '',
      email: '',
      password: ''
    },
    validationSchema: yup.object({
      Name: yup.string().required('Please enter your name'),
      email: yup.string().email('Please enter a valid email address').required('Email is required'),
      password: yup.string().required('Please enter your password')
        .min(8, 'Password must be at least 8 characters')
        .matches(/[a-zA-Z]/, 'Password can only contain letters')
        .matches(/[0-9]/, 'Password can only contain numbers')
    }),
    onSubmit: (values) => {
      console.log('Form submitted with values:', values);
      navigate('/login');
    }
  });

  return (
    <div>
      <section className="min-h-screen flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 p-8 bg-[#0F2C59] flex flex-col justify-center items-center">
          <h1 className="text-2xl font-poppins mb-4 text-white text-center">CareerSearch hadir sebagai mitra setia anda dalam menemukan kesempatan karier yang tepat</h1>
          <img src="assets/email.png" alt="CareerSearch Logo" className="mb-8" />
        </div>
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-poppins mb-4"><img src="assets/logo.png" className="w-full h-auto" alt="Logo"/></h2>
          <form onSubmit={formik.handleSubmit} className="mb-8 flex flex-col items-center w-full max-w-md">
            <div className="rounded-md p-3 w-full">
              <label htmlFor="Name" className="block text-sm font-poppins mb-2 sr-only">Name</label>
              <input type="text" id="Name" name="Name" placeholder="Name" className={`shadow-md border border-gray-300 rounded-md px-3 py-2 w-full ${formik.touched.Name && formik.errors.Name ? 'border-red-500' : ''}`} {...formik.getFieldProps('Name')} />
              {formik.touched.Name && formik.errors.Name && <div className="text-red-500">{formik.errors.Name}</div>}
            </div>
            <div className="rounded-md p-3 w-full">
              <label htmlFor="email" className="block text-sm font-poppins mb-2 sr-only">Email</label>
              <input type="email" id="email" name="email" placeholder="Email" className={`shadow-md border border-gray-300 rounded-md px-3 py-2 w-full ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`} {...formik.getFieldProps('email')} />
              {formik.touched.email && formik.errors.email && <div className="text-red-500">{formik.errors.email}</div>}
            </div>
            <div className="mb-2 rounded-md p-3 w-full">
              <label htmlFor="password" className="block text-sm font-poppins mb-2 sr-only">Password</label>
              <input type="password" id="password" name="password" placeholder="Password" className={`shadow-md border border-gray-300 rounded-md px-3 py-2 w-full ${formik.touched.password && formik.errors.password ? 'border-red-500' : ''}`} {...formik.getFieldProps('password')} />
              {formik.touched.password && formik.errors.password && <div className="text-red-500">{formik.errors.password}</div>}
            </div>
            <button type="submit" className="bg-[#0F2C59] text-white font-poppins px-4 py-2 rounded self-end">Sign up</button>
          </form>
          <p>Already have an account? <Link to="/login" className="text-blue-950">Log in!</Link></p>
        </div>
      </section>
    </div>
  );
}

export default Signup;