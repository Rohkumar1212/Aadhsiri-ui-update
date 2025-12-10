import React from "react";
import ShareCVForm from "./formData";

const JobOpenings = () => {
  const jobs = [
    {
      title: "HR",
      exp: "2 - 5 Years",
      salary: "1 - 4 L.ac P.A.",
      location: "Noida, Delhi NCR",
    },
    {
      title: "Telecaller",
      exp: "2 - 5 Years",
      salary: "1 - 4 L.ac P.A.",
      location: "Noida, Delhi NCR",
    },
    {
      title: "Social Media Manager",
      exp: "2 - 5 Years",
      salary: "1 - 4 L.ac P.A.",
      location: "Noida, Delhi NCR",
    },
    {
      title: "HR",
      exp: "2 - 5 Years",
      salary: "1 - 4 L.ac P.A.",
      location: "Noida, Delhi NCR",
    },
    {
      title: "Telecaller",
      exp: "2 - 5 Years",
      salary: "1 - 4 L.ac P.A.",
      location: "Noida, Delhi NCR",
    },
    {
      title: "Social Media Manager",
      exp: "2 - 5 Years",
      salary: "1 - 4 L.ac P.A.",
      location: "Noida, Delhi NCR",
    },
    {
      title: "HR",
      exp: "2 - 5 Years",
      salary: "1 - 4 L.ac P.A.",
      location: "Noida, Delhi NCR",
    },
    {
      title: "Telecaller",
      exp: "2 - 5 Years",
      salary: "1 - 4 L.ac P.A.",
      location: "Noida, Delhi NCR",
    },
    {
      title: "Social Media Manager",
      exp: "2 - 5 Years",
      salary: "1 - 4 L.ac P.A.",
      location: "Noida, Delhi NCR",
    },
    {
      title: "HR",
      exp: "2 - 5 Years",
      salary: "1 - 4 L.ac P.A.",
      location: "Noida, Delhi NCR",
    },
  ];

  return (
    <section className="w-full mt-5">
      {/* Search Header */}
      <div className="bg-[#FCAF3F] p-4 px-5  flex flex-col md:flex-row md:flex-wrap gap-4 items-center justify-between w-full">
        <input
          type="text"
          placeholder="Job Title"
          className="px-3 py-2 rounded bg-[#E9E9E9] border flex-1 min-w-[200px]"
        />
        <input
          type="text"
          placeholder="Location"
          className="px-3 py-2 rounded bg-[#E9E9E9] border flex-1 min-w-[200px]"
        />
        <select className="px-3 py-2 rounded bg-[#E9E9E9] border flex-1 min-w-[200px]">
          <option>Experience</option>
          <option>0-1 Years</option>
          <option>2-5 Years</option>
          <option>5+ Years</option>
        </select>
        <select className="px-3 py-2 rounded bg-[#E9E9E9] border flex-1 min-w-[200px]">
          <option>Min CTC</option>
          <option>1 LPA</option>
          <option>2 LPA</option>
          <option>5 LPA</option>
        </select>
        <select className="px-3 py-2 rounded bg-[#E9E9E9] border flex-1 min-w-[200px]">
          <option>Max CTC</option>
          <option>5 LPA</option>
          <option>10 LPA</option>
          <option>15 LPA+</option>
        </select>
        <button className="bg-[#e31a4e] text-white px-6 py-2 rounded font-semibold hover:bg-[#c2184b] transition w-full md:w-auto">
          Search
        </button>
      </div>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#e31a4e] mt-10 mb-8">
        Current Opening
      </h2>

      {/* Job Grid */}
      <div className="grid md:px-12 grid-cols-1 sm:grid-cols-2 mb-10 md:grid-cols-3 gap-6">
        {jobs.map((job, index) => (
          <div key={index} className=" shadow bg-[#E9E9E9] flex flex-col">
            {/* Job Title Header */}
            <div className="bg-[#FCAF3F] text-black font-bold text-[24px] text-center py-2">
              {job.title}
            </div>

            {/* Job Details */}
            <div className="p-10 flex flex-col text-center flex-grow">
              <p className="text-block text-left text-sm mb-1">
                Experience: {job.exp}
              </p>
              <p className="text-black text-left text-sm mb-1">
                Salary: {job.salary}
              </p>
              <p className="text-black text-left text-sm mb-4">
                Location: {job.location}
              </p>

              {/* Button */}
              <div className="mt-auto text-center">
                <button className="bg-[#E31A4E] text-white px-2 py-2 rounded w-17 hover:bg-[#c2184b] transition">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ShareCVForm />

    </section>
  );
};

export default JobOpenings;
