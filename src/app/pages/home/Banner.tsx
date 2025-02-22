import React from "react";

export default function Banner() {
  return (
    <div className="w-full bg-shadow min-h-[600px] pt-20 px-5 flex flex-col justify-center items-center gap-5">
      <h1 className="text-center text-[70px] font-bold uppercase bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600 bg-clip-text text-transparent drop-shadow-lg transition-colors duration-500">
        Code Biruny
      </h1>
      <h3 className="text-center text-lg max-w-3xl text-gray-800 dark:text-gray-200 leading-relaxed tracking-wide transition-colors duration-500">
        Welcome to{" "}
        <span className="font-semibold text-gray-900 dark:text-gray-100">
          Code Biruny
        </span>{" "}
        — where we specialize in creating impressive, responsive websites and
        powerful software solutions tailored to your needs. Our mission is to
        deliver high-quality digital products that make a difference.
      </h3>

      <div className="w-full max-w-md flex justify-between items-center gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-3/4 p-3 bg-transparent rounded-md focus:outline-none focus:ring-2 border transition-all duration-300 "
        />
        <button className="w-1/4 font-semibold py-3 rounded-md bg-shadow border transition-all duration-300">
          Contact Us
        </button>
      </div>
    </div>
  );
}
