import React, { useState } from "react";

const ShareCVForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    jobTitle: "",
    cvFile: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add form submission logic here (API call, etc.)
  };

  return (
    <div className="w-full mx-auto mt-10 p-6 bg-white shadow rounded-lg sm:w-11/12 md:w-5/3 lg:w-3/4 xl:w-3/4">
      <div className="bg-orange-500 text-white text-center py-4 rounded-t">
        <h2 className="text-lg font-semibold">SHARE YOUR CV</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 mt-6">
        <div>
          <label className="block text-gray-700 font-medium">Full Name *</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Mobile *</label>
          <input
            type="text"
            name="mobile"
            placeholder="Enter Mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Email *</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Job Title *</label>
          <input
            type="text"
            name="jobTitle"
            placeholder="Job Post Name"
            value={formData.jobTitle}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Upload CV *</label>
          <input
            type="file"
            name="cvFile"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Message</label>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            rows="4"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default ShareCVForm;
