import React from "react";
import { ContentReveal } from "./Animation/ContentReveal";
import { TitleReveal } from "./Animation/TitleReveal";

const GetInquiryLight = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center py-20 px-4 md:px-20 bg-neutral-100">
      <div className="max-w-[1400px] bg-black rounded-2xl w-full px-4 py-8 flex flex-col md:flex-row gap-10 md:gap-0">
        <div className="flex flex-col">
          <TitleReveal>
            <h3 className="font-serif text-xl md:text-3xl w-full px-0 md:px-5 text-left">
              Be Luxury, Be Unique, Be You
            </h3>
            <p className="font-serif italic text-lg md:text-xl w-full px-0 md:px-5 text-left">
              Get a quotation
            </p>
          </TitleReveal>
          <ContentReveal>
            <p className="font-sans text-md md:text-lg full px-0 md:px-5 text-left w-full  md:w-[50%]">
              Experience the epitome of luxury living with our exclusive
              offerings. Indulge in unparalleled comfort and style, tailored to
              your every desire.
            </p>
          </ContentReveal>
        </div>

        <div className="flex w-auto justify-center items-center md:items-end flex-col gap-3">
          <div className="w-48 px-6 py-3 ml-3 rounded-full cursor-pointer transition-all font-sans bg-neutral-100 text-black hover:bg-[#e2d9c4] text-center">
            Inquire Now
          </div>
          <div>
            <a
              href="/brochure.pdf"
              download
              className="w-48 px-4 py-3 ml-3 rounded-full cursor-pointer transition-all font-sans border border-neutral-100 hover:border-[#e2d9c4] hover:bg-[rgba(255,255,255,0.2)] text-center block"
            >
              Grab a brochure
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInquiryLight;
