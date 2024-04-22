import React from "react";
import { Link } from 'react-router-dom';

const Signyourcompany = () => {
  return (
    <div className="bg-[#0F2C59] min-h-screen flex justify-center items-center">
      <section className="bg-white p-8 rounded-lg shadow-lg text-center text-white">
        
        <div className="mb-4">
          <img src="assets/logo.png" alt="logo" className="h-16 mx-auto" />
        </div>
        
        <div className="font-poppins flex flex-col space-y-4">
          <Link to="/logincompany" className="bg-[#0F2C59] text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600">
            Log in as Employer 
          </Link>
          <Link to="/signupcompany" className="bg-[#0F2C59] text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600">
            Sign Up as Employer
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Signyourcompany;
