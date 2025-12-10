import React from "react";

export default function CareerPage() {
  return (
    <div className="w-full">
      <section className="flex justify-center items-center py-10">
        <div
          className="
          bg-white shadow-lg rounded-md overflow-hidden
          w-full h-auto
          max-w-[922px] 
          xl:h-[964px]
        "
        >
          {/* Header */}
          <div className="bg-[#f39c12] text-center py-3">
            <h2 className="text-lg text-[34px] font-bold text-black uppercase">
              SHARE YOUR CV
            </h2>
          </div>

          {/* Form */}
          <form className="bg-[#E9E9E9] p-6 flex flex-col gap-4 h-full">
            <div>
              <label className="block text-md font-medium">Full Name *</label>
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full border p-2 bg-white rounded"
              />
            </div>

            <div>
              <label className="block text-md font-medium">Mobile *</label>
              <input
                type="text"
                placeholder="Enter Mobile"
                className="w-full border p-2 bg-white rounded"
              />
            </div>

            <div>
              <label className="block text-md font-medium">Email *</label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full border p-2  bg-white rounded"
              />
            </div>

            <div>
              <label className="block text-md font-medium">Job Title *</label>
              <input
                type="text"
                placeholder="Job Post Name"
                className="w-full border p-2 bg-white rounded"
              />
            </div>

            <div>
              <label className="block text-md font-medium">Upload CV *</label>
              <input type="file" className="w-79 border p-2 rounded bg-white" />
            </div>

            <div className="flex-0">
              <label className="block text-md font-medium">Message :</label>
              <textarea
                placeholder="Enter Message"
                rows={2}
                className="w-full border p-2 bg-white rounded resize-none h-[300px]"
              ></textarea>
            </div>

          
            {/* Submit Button */}
            <div className="w-full  flex md:mb-19.5 justify-end mt-4">
              <button
                type="submit"
                className="bg-[#e31a4e] text-white px-6 py-2 rounded font-semibold hover:bg-[#c2184b] transition"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
