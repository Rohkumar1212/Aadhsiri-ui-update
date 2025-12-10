import React from "react";

const CustomCovers = () => {
  return (
    <section className="px-4 md:px-12 py-12 max-w-7xl mx-auto">
      {/* Section 1 - Form + Preview */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#E31A4E] mb-4">
        Build Your Brand with Customised Covers
      </h2>
      <p className="text-gray-700 mb-6 max-w-3xl">
        Design notebooks and learning materials that carry your school’s
        identity, with your name, logo, and details printed professionally on
        every cover.
      </p>

      <div className="grid md:grid-cols-2 gap-8 items-center bg-gray-100 p-6 rounded-xl shadow-sm">
        {/* Form */}
        <div className="bg-gray-100 rounded-xl shadow-md p-6 md:p-8 max-w-2xl mx-auto">
          {/* School Details */}
          <h3 className="text-lg font-bold text-[#E31A4E] mb-4">
            School Details:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                School Name
              </label>
              <input
                type="text"
                placeholder="Enter school name"
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Logo</label>
              <input
                type="file"
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">
                Contact No.
              </label>
              <input
                type="text"
                placeholder="Enter contact number"
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
              />
            </div>
          </div>

          {/* Notebook Specs */}
          <h3 className="text-lg font-bold text-[#C2185B] mt-8 mb-4">
            Notebook Specs:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Pages</label>
              <select className="w-full border border-gray-300 rounded-md p-2 text-sm">
                <option>140</option>
                <option>160</option>
                <option>180</option>
                <option>200</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Size</label>
              <input
                type="text"
                placeholder="e.g., A4, A5"
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Binding</label>
              <select className="w-full border border-gray-300 rounded-md p-2 text-sm">
                <option>Center Staped</option>
                <option>Spiral</option>
                <option>Hard Bound</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Ruling</label>
              <select className="w-full border border-gray-300 rounded-md p-2 text-sm">
                <option>Ruled</option>
                <option>Unruled</option>
                <option>Double Line</option>
                <option>Graph</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Lamination
              </label>
              <select className="w-full border border-gray-300 rounded-md p-2 text-sm">
                <option>Matte</option>
                <option>Gloss</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Quantity</label>
              <select className="w-full border border-gray-300 rounded-md p-2 text-sm">
                <option>20</option>
                <option>50</option>
                <option>100</option>
                <option>200</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button className="bg-[#E31A4E] hover:bg-[#a01548] text-white font-medium px-6 py-2 rounded-md shadow-md">
              Submit
            </button>
          </div>
        </div>

        {/* Preview Image */}
        <div className="flex justify-center">
          <img
            src="src/assets/img/pre-book.png" // replace with actual book cover image
            alt="Sample Custom Cover"
            className="rounded-md shadow-md max-h-[700px] object-contain"
          />
        </div>
      </div>

      {/* Section 2 - Things to Know */}
      <h3 className="text-xl md:text-2xl font-bold text-[#E31A4E] mt-12 mb-4">
        Things to Know
      </h3>
      <ol className="list-decimal pl-5 text-gray-700 space-y-2">
        <li>Customized notebooks are economical and non-returnable.</li>
        <li>
          A minimum order of 500 copies is required for every single customized
          material.
        </li>
        <li>
          Orders once placed cannot be modified, canceled, or completely
          returned.
        </li>
        <li>
          Cover design templates must be provided in high resolution (300 DPI).
        </li>
        <li>
          Approximate production timeline: 4-6 weeks after final artwork
          approval.
        </li>
        <li>All prices are inclusive of basic printing & binding support.</li>
      </ol>

      {/* Section 3 - Gallery */}
      <h3 className="text-xl md:text-2xl font-bold text-[#E31A4E] mt-12 mb-6">
        Previous Work Gallery
      </h3>
      <p className="text-gray-700 mb-6 max-w-3xl">
        See how other schools have branded their materials. We’ve created
        customized covers featuring school names, logos, slogans, and designs to
        reflect each institution’s identity.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src="src/assets/img/pre-book.png"
              alt={`School Name ${i}`}
              className="w-full h-100 object-cover"
            />
            <div className="p-2 text-left text-sm font-medium text-gray-700">
              School Name{i}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomCovers;
