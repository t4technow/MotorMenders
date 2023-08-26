import React from 'react';
import { Link } from 'react-router-dom';

function SuccessPage() {
  return (
    <div className="bg-gradient-to-br from-blue-300 to-blue-500 flex justify-center items-center h-screen">
      <div className="bg-white p-6 md:mx-auto rounded-lg shadow-lg">
        <div className="animate-pulse transform">
          <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
            <path fill="currentColor" d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"></path>
          </svg>
        </div>
        <div className="text-center">
          <h3 className="md:text-3xl text-xl text-gray-900 font-semibold">Payment Successful!</h3>
          <p className="text-gray-700 my-2">Thank you for completing your secure online payment.</p>
          <p className="text-gray-700">Have a fantastic day ahead!</p>
          <div className="py-6 text-center">
            <Link to={'/prolists'} className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-full inline-block transition duration-300">
              GO BACK
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
