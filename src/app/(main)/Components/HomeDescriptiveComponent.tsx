import React from "react";
import { ContentReveal } from "./Animation/ContentReveal";
import { TitleReveal } from "./Animation/TitleReveal";
import {
  TbBuildingBurjAlArab,
  TbHospital,
  TbRoad,
  TbShoppingBag,
} from "react-icons/tb";
import { PiAirplaneTilt, PiParkDuotone } from "react-icons/pi";
import { LuSchool } from "react-icons/lu";

const LOCATION = [
  {
    icon: <TbRoad size={32} />,
    time: 9,
    text: "to Sheikh Zayed Rd.",
  },
  {
    icon: <TbRoad size={32} />,
    time: 5,
    text: "to Al Khail Rd.",
  },
  {
    icon: <TbShoppingBag size={32} />,
    time: 3,
    text: "to Dubai Hills Mall",
  },
  {
    icon: <TbBuildingBurjAlArab size={32} />,
    time: 12,
    text: "to Burj Al Arab",
  },
  {
    icon: <PiAirplaneTilt size={32} />,
    time: 25,
    text: "to Al Maktoum Intl Airport",
  },
  {
    icon: <PiAirplaneTilt size={32} />,
    time: 20,
    text: "to Dubai Intl Airport",
  },
  {
    icon: <LuSchool size={32} />,
    time: 9,
    text: "to Repton School",
  },
  {
    icon: <TbHospital size={32} />,
    time: 9,
    text: "to Kings College Hospital",
  },
  {
    icon: <PiParkDuotone size={32} />,
    time: 9,
    text: "to Nearest Park",
  },
];

const DescriptionFeatures = () => {
  // Split into two rows: 5 on first, 4 on second
  const firstRow = LOCATION.slice(0, 5);
  const secondRow = LOCATION.slice(5);

  return (
    <div className="flex flex-col gap-10 justify-center items-center py-20 px-4 md:px-20 bg-neutral-100">
      <div className="flex w-full px-0 md:px-4 font-semibold md:font-normal p-0 md:p-5 justify-start md:justify-center">
        <TitleReveal>
          <h3 className="font-serif text-3xl md:text-6xl w-full px-0 md:px-5 text-left text-black">
            Prime Location
          </h3>
          <p className="font-serif italic text-xl md:text-3xl text-black">
            Right where you are meant to be
          </p>
        </TitleReveal>
      </div>
      <div className="w-full max-w-5xl mb-10">
        <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-lg border border-neutral-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81058.95401300678!2d55.190072567283856!3d25.08821930596885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6f004dc52df3%3A0x1c38f2e512be44c5!2sSAAS%20Hills!5e0!3m2!1sen!2sae!4v1756207074417!5m2!1sen!2sae"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="w-full max-w-5xl">
        <div className="flex flex-col gap-0 md:gap-10">
          <ContentReveal>
            <div className="flex flex-wrap justify-center">
              {firstRow.map((loc, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center flex-[0_0_48%] md:flex-[0_0_18%] mb-4 hover:scale-105 transition-all"
                >
                  <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-neutral-800 shadow-md mb-3">
                    {loc.icon}
                  </div>
                  <div className="font-serif text-xl md:text-2xl text-neutral-700 font-semibold">
                    {loc.time}{" "}
                    <span className="font-normal text-base text-neutral-700">
                      min
                    </span>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-[70%] font-sans text-base md:text-md text-neutral-700">
                      {loc.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ContentReveal>
          <ContentReveal>
            <div className="flex flex-wrap justify-center">
              {secondRow.map((loc, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center flex-[0_0_48%] md:flex-[0_0_18%] mb-4 hover:scale-105 transition-all"
                >
                  <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-neutral-800 shadow-md mb-3">
                    {loc.icon}
                  </div>
                  <div className="font-serif text-xl md:text-2xl text-neutral-700 font-semibold">
                    {loc.time}{" "}
                    <span className="font-normal text-base text-neutral-700">
                      min
                    </span>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-[70%] font-sans text-base md:text-md text-neutral-700">
                      {loc.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ContentReveal>
        </div>
      </div>
    </div>
  );
};

export default DescriptionFeatures;
