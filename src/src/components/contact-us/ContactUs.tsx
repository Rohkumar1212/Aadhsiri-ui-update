import React from "react";

export default function ContactUs() {
  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="relative bg-[#D9D9D9] w-full h-[371px] md:h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 md:px-12">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative max-w-3xl text-center text-black space-y-6">
          <p className="text-[20px] md:text-[24px] leading-relaxed">
            Whether you&apos;re interested in our books, services, or just want
            to share your feedback, we’d love to hear from you! Reach out by
            phone or email, and our team will be happy to assist you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-4 py-8">
          {/* Left Section - Office Info */}
          <div className="space-y-4 text-sm">
            <h3 className="font-bold text-[20px] text-[#E31A4E]">
              Head Office
            </h3>
            <p className="text-[16px] text-[#E31A4E]">
              Adisri Publications ShivMitraya, D-258, Sector-63, Noida Uttar
              Pradesh, 201301 (INDIA) +91
            </p>
            <p className="text-[16px] text-[#E31A4E]">
              <strong>For Export Queries:</strong> info@aditibooks.com
            </p>
            <p className="text-[16px] text-[#E31A4E]">
              <strong>Office Hours:</strong> Mon-Sat: 9:00 AM – 5:00 PM
            </p>
            <p className="text-[16px] text-[#E31A4E]">
              For books / Book Related Queries / Errors:
            </p>
            <p className="text-[16px] text-[#E31A4E]">For Specimen Queries:</p>
            <p className="text-[16px] text-[#E31A4E]">
              Office Hours: Monday - Saturday: 9:00 AM - 5:00 PM
            </p>
            <p className="text-[16px] text-[#E31A4E]">
              We are available / reachable in all other states.
            </p>
          </div>

          {/* Right Section - Enquiry Form */}
          <div>
            <h2 className="text-2xl font-bold text-[#E31A4E] mb-4">
              Enquiry Form
            </h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-3 transition-all duration-300">
              <input
                type="text"
                placeholder="Name*"
                className="w-full p-2 border bg-white border-gray-300 rounded placeholder-[#039A9C]"
              />
              <input
                type="email"
                placeholder="E-mail*"
                className="w-full p-2 border bg-white border-gray-300 rounded placeholder-[#039A9C]"
              />
              <input
                type="text"
                placeholder="School Name*"
                className="w-full p-2 border bg-white border-gray-300 rounded placeholder-[#039A9C]"
              />
              <input
                type="text"
                placeholder="City*"
                className="w-full p-2 border bg-white border-gray-300 rounded placeholder-[#039A9C]"
              />
              <input
                type="text"
                placeholder="Phone*"
                className="w-full p-2 border bg-white border-gray-300 rounded placeholder-[#039A9C]"
              />
              <select className="w-full p-2 border bg-white border-gray-300 rounded text-[#039A9C]">
                <option>-Please Choose-</option>
                <option>Product Inquiry</option>
                <option>Support</option>
                <option>Other</option>
              </select>
              <textarea
                placeholder="Message"
                className="md:col-span-2 w-full p-2 border bg-white border-gray-300 rounded h-24 placeholder-[#039A9C]"
              ></textarea>
              <div className="md:col-span-2 flex justify-start">
                <button
                  type="submit"
                  className="w-32 h-10 rounded-2xl bg-[#E31A4E] text-white font-bold hover:bg-pink-700 transition"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-8 flex justify-center">
          <div className="w-full md:w-2/3 h-64 bg-gray-300 flex items-center justify-center text-gray-600">
            Map Placeholder
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-4xl text-center font-bold text-[#e31a4e] mb-6">
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 px-5 gap-6 text-sm">
          <div>
            <h4 className="font-semibold text-[20px]">
              Q1. How can I place an order with Adisri Publications?
            </h4>
            <p className="text-[#676767] text-[20px]">
              A: You can call us or email us directly. Our team will help you
              with bulk orders, customization, and all details.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-[20px]">
              Q2. Do you sell to individual buyers?
            </h4>
            <p className="text-[#676767] text-[20px]">
              A: No, we primarily serve schools and educational institutions for
              bulk orders.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-[20px]">
              Q3. Can I see book samples online?
            </h4>
            <p className="text-[#676767] text-[20px]">
              A: Yes! You can view our e-samples and catalogs on the website
              before placing an order.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-[20px]">
              Q4. Do you provide teacher training services?
            </h4>
            <p className="text-[#676767] text-[20px]">
              A: Yes. We offer school-based teacher training programs aligned
              with NEP goals. Contact us to know more or schedule a session.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-[20px]">
              Q5. Do you offer customization with school branding?
            </h4>
            <p className="text-[#676767] text-[20px]">
              A: Yes. We can add your school’s name, logo, and details to book
              covers and notebooks.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-[20px]">
              Q6. How do I get pricing or catalog details?
            </h4>
            <p className="text-[#676767] text-[20px]">
              A: Simply contact us by phone or email, and we’ll share our latest
              catalog and bulk pricing.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
