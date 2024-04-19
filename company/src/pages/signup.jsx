import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
  render() {
    return (
    <div className="min-h-[100vh]">
        <section className=" min-h-[90vh] column-12 flex">
          <div className="w-1/2 p-8 bg-blue-950 flex flex-col justify-center items-center">
            <h1 className="text-2xl font-semibold mb-4 text-white text-center">CareerSearch hadir sebagai mitra setia anda dalam menemukan kesempatan karier yang tepat</h1>
            <img src="assets/email.png" alt="CareerSearch Logo" className="mb-8" />
          </div>
          <div className="w-1/2 p-8 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold mb-4"><img src="assets/logo.png" className="w-full h-auto mb-4"/></h2>
            <form className="mb-8 flex flex-col items-center w-full max-w-md">
              <div className="rounded-md p-3 w-full">
                <label htmlFor="Name" className="block text-sm font-medium mb-2 sr-only">Name</label>
                <input type="Name" id="Name" name="Name" placeholder="Name" className="shadow-md border border-gray-300 rounded-md px-3 py-2 w-full" />
              </div>
              <div className="rounded-md p-3 w-full">
                <label htmlFor="email" className="block text-sm font-medium mb-2 sr-only">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" className="shadow-md border border-gray-300 rounded-md px-3 py-2 w-full" />
              </div>
              <div className="mb-2 rounded-md p-3 w-full">
                <label htmlFor="password" className="block text-sm font-medium mb-2 sr-only">Password</label>
                <input type="password" id="password" name="password" placeholder="Password" className="shadow-md border border-gray-300 rounded-md px-3 py-2 w-full" />
              </div>
              <button type="submit" className="bg-blue-950 text-white font-semibold px-4 py-2 rounded self-end"><Link to="/login">Sign up</Link></button>
            </form>
            <p>Don’t have an account? <Link to="/login"  className="text-blue-950">Log in!</Link></p>
          </div>
        </section>
      </div>
    );
  }
}

export default Signup;
