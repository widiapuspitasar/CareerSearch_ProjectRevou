
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  const handleLogin = async (values) => {
    try {
        const response = await axios.post('https://backendproject-production-41c5.up.railway.app/login_user', values, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            withCredentials: true 
        });
        
        console.log('Server Response:', response.data); 
        
        const userData = response.data.data.user;
        localStorage.setItem('userData', JSON.stringify({
          token: response.data.token,
          user_id: response.data.data.user.id // Simpan user_id dari respons dalam userData
        }));
        localStorage.setItem('name', userData.name);
        localStorage.setItem('role', userData.role);
        
        console.log('Login successful:', userData);

        // Pindahkan useEffect ke sini
        const userId = userData.id;
        axios.get(`https://backendproject-production-41c5.up.railway.app/about_user/${userId}`)
            .then(response => {
                setUserData(response.data.data);
                // Simpan data ke localStorage
                localStorage.setItem('name', response.data.data.about_user[0].name);
                localStorage.setItem('role', response.data.data.about_user[0].role);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });

        navigate('/mainpage');
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
      email: '',
      password: ''
    },
    validationSchema: yup.object({
      email: yup.string().email('Please enter a valid email address').required('Email is required'),
      password: yup.string().required('Please enter your password')
        .min(8, 'Password must be at least 8 characters')
        .matches(/[a-zA-Z]/, 'Password can only contain letters')
        .matches(/[0-9]/, 'Password can only contain numbers')
    }),
    onSubmit: handleLogin
  });

  return (
    <div>
      <section className="min-h-screen flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 p-8 bg-[#0F2C59] flex flex-col justify-center items-center md:flex">
          <h1 className="text-2xl font-poppins mb-4 text-white text-center">CareerSearch is here as your faithful partner in finding the right career opportunities.</h1>
          <img src="/assets/signup_user.png" alt="logo" />
        </div>
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-poppins mb-4">
          <Link to="/"><img src="/assets/logo.png" alt="logo"/></Link>
            </h2>
          <form onSubmit={formik.handleSubmit} className="mb-8 flex flex-col items-center w-full max-w-md">
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
            <button type="submit" className="bg-[#0F2C59] text-white font-poppins px-4 py-2 rounded self-end">Login</button>
          </form>
          <p>Don’t have an account? <Link to="/signup" className="text-[#0F2C59] font-bold">Sign up!</Link></p>
        </div>
      </section>
    </div>
  );
}

export default Login;
