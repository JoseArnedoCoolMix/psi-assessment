import React from "react";
import { TbClock, TbMail, TbPhone } from "react-icons/tb";

const ContactUsPage = () => {
  return (
    <>
      <div
        className="w-full flex items-start md:items-center justify-center flex-col pt-[150px] pb-[70px] md:pb-[100px] mb-[50px] md:mb-[100px] relative"
        style={{
          background: "url(/contact/banner.jpg) no-repeat center center/cover",
        }}
      >
        {/* Tint overlay */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none z-0" />
        <h1 className="text-3xl font-serif content-section text-left w-full z-10 relative">
          Register Your Interest
        </h1>
        <div className="content-section flex z-10 relative">
          <p className="normal-text  text-md md:text-xl !text-white mb-[20px] w-full md:w-[40%]">
            Be a part of our exclusive community. Register your interest today
            and take the first step towards owning a piece of this extraordinary
            development.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="max-w-[1200px] mx-auto px-4 mb-28 flex gap-10 w-full max-[1000px]:flex-col">
        <div>
          <div className="bg-[#1c1c1c] text-white rounded-3xl p-8 max-[1000px]:p-[20px] shadow-lg basis-1/2 h-fit">
            <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
            <ul className="space-y-6 text-sm">
              <li className="flex gap-4 normal-text !text-white items-center">
                <span className="border border-white rounded-lg text-xl p-[8px]">
                  <TbMail />
                </span>
                <span className="">info@saasproperties.com</span>
              </li>
              <li className="flex gap-4 normal-text !text-white items-center">
                <span className="border border-white rounded-lg text-xl p-[8px]">
                  <TbPhone />
                </span>
                <span className="">+971 800 27</span>
              </li>
              <li className="flex gap-4 normal-text !text-white items-center">
                <span className="border border-white rounded-lg text-xl p-[8px]">
                  <TbClock />
                </span>
                <span className="">
                  Monday - Thusday 9:00 AM | 6:00 PM - Friday 10:00 AM | 4:00 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Google Maps Embed */}
          <div className="mt-10 w-full h-[400px] rounded-3xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81058.95401300678!2d55.190072567283856!3d25.08821930596885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6f004dc52df3%3A0x1c38f2e512be44c5!2sSAAS%20Hills!5e0!3m2!1sen!2sae!4v1756207074417!5m2!1sen!2sae"
              width="600"
              height="450"
              // style="border:0;"
              // allowfullscreen=""
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <form className="grid gap-4 basis-1/2">
          <input
            type="text"
            placeholder="Name"
            className="bg-[#1c1c1c] text-white p-4 rounded-xl border-none outline-[0.5px] outline-transparent focus:outline-gray-300"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-[#1c1c1c] text-white p-4 rounded-xl border-none outline-[0.5px] outline-transparent focus:outline-gray-300"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="bg-[#1c1c1c] text-white p-4 rounded-xl border-none outline-[0.5px] outline-transparent focus:outline-gray-300"
          />
          <textarea
            rows={10}
            placeholder="Type your message"
            className="bg-[#1c1c1c] text-white p-4 rounded-xl border-none outline-[0.5px] outline-transparent focus:outline-gray-300"
          ></textarea>
          <button
            type="submit"
            className="border border-[#1c1c1c] bg-[#292929] text-white py-3 rounded-xl hover:bg-white hover:text-black transition"
          >
            Send
          </button>
        </form>
      </section>
    </>
  );
};

export default ContactUsPage;
