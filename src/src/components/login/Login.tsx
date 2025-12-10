import React from "react";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-150 bg-gray-100 px-4">
      <div className="w-full max-w-[500px] bg-[#f2f2f2] rounded-md shadow-md">
        {/* Header */}
        <div className="bg-[#FCAF3F] py-3 text-center rounded-t-md">
          <h2 className="text-lg md:text-xl md:text-[33px] font-bold text-black tracking-wide">
            LOGIN
          </h2>
        </div>

        {/* Form */}
        <div className="p-6 bg-[#E9E9E9]">
          <form className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-black text-[16px] mb-1">
                Enter Email
              </label>
              <input
                type="email"
                placeholder="Enter Email Id"
                className="w-full border bg-[#FFFFFF] border-gray-400 rounded-sm p-2 text-sm focus:outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-black text-[16px] mb-1">
                Enter Password
              </label>
              <input
                type="password"
                className="w-full border  bg-[#FFFFFF] border-gray-400 rounded-sm p-2 text-sm focus:outline-none"
              />
            </div>

            {/* Login Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-32 py-2 bg-[#E31A4E] text-white font-semibold rounded-md hover:bg-[#c41642] transition"
              >
                Login
              </button>
            </div>

            {/* OR text */}
            <p className="text-center text-sm text-black">or</p>

            {/* Reset OTP Button */}
            <div className="flex justify-center">
              <button
                type="button"
                className="w-32 py-2 bg-[#E31A4E] text-white font-semibold rounded-md hover:bg-[#c41642] transition"
              >
                Reset OTP
              </button>
            </div>
          </form>

          {/* Footer Links */}
          <div className="flex justify-between text-sm mt-6 px-1">
            <a href="#" className="text-black hover:underline text-[18px]">
              Forget Password
            </a>
            <a href="#" className="text-black hover:underline text-[18px]">
              Create Account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

