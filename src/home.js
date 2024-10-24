// Home.js
import React from 'react';

function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-500 min-h-screen flex items-center justify-center">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg max-w-2xl">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Welcome to MyApp</h1>
        <p className="text-lg text-gray-700 mb-8">
          We provide the best solutions to help your business grow. Explore our services and get to know more about us.
        </p>
        <a
          href="/about"
          className="inline-block bg-blue-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-600 transition duration-300"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}

export default Home;
