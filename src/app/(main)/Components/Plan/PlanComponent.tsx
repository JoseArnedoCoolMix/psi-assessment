import Image from "next/image";
import React from "react";

const yearLabel = (y: number) => {
  switch (y) {
    case 1:
      return "FIRST YEAR";
    case 2:
      return "SECOND YEAR";
    case 3:
      return "THIRD YEAR";
    default:
      return `FOURTH YEAR`;
  }
};

const paymentPlans = [
  {
    title: "40%-60%",
    subtitle: "Best for first-time buyers",
    downpayment: "20%",
    handover: "60%",
    quarters: [
      { label: "Year 1 - Q1", value: "3%", year: 1, quarter: "Q1" },
      { label: "Year 1 - Q2", value: "3%", year: 1, quarter: "Q2" },
      { label: "Year 1 - Q3", value: "3%", year: 1, quarter: "Q3" },
      { label: "Year 1 - Q4", value: "3%", year: 1, quarter: "Q4" },
      { label: "Year 2 - Q1", value: "2%", year: 2, quarter: "Q1" },
      { label: "Year 2 - Q2", value: "1%", year: 2, quarter: "Q2" },
      { label: "Year 2 - Q3", value: "2%", year: 2, quarter: "Q3" },
      { label: "Year 2 - Q4", value: "1%", year: 2, quarter: "Q4" },
      { label: "Year 3 - Q1", value: "1%", year: 3, quarter: "Q1" },
      { label: "Year 3 - Q2", value: "1%", year: 3, quarter: "Q2" },
    ],
  },
  {
    title: "50%-50%",
    subtitle: "Pay after moving in",
    downpayment: "20%",
    handover: "50%",
    quarters: [
      { label: "Year 1 - Q1", value: "4%", year: 1, quarter: "Q1" },
      { label: "Year 1 - Q2", value: "4%", year: 1, quarter: "Q2" },
      { label: "Year 1 - Q3", value: "4%", year: 1, quarter: "Q3" },
      { label: "Year 1 - Q4", value: "4%", year: 1, quarter: "Q4" },
      { label: "Year 2 - Q1", value: "4%", year: 2, quarter: "Q1" },
      { label: "Year 2 - Q2", value: "2%", year: 2, quarter: "Q2" },
      { label: "Year 2 - Q3", value: "4%", year: 2, quarter: "Q3" },
      { label: "Year 2 - Q4", value: "2%", year: 2, quarter: "Q4" },
      { label: "Year 3 - Q1", value: "1%", year: 3, quarter: "Q1" },
      { label: "Year 3 - Q2", value: "1%", year: 3, quarter: "Q2" },
    ],
  },
  {
    title: "60%-40%",
    subtitle: "Ideal for investors",
    downpayment: "20%",
    handover: "40%",
    quarters: [
      { label: "Year 1 - Q1", value: "5%", year: 1, quarter: "Q1" },
      { label: "Year 1 - Q2", value: "5%", year: 1, quarter: "Q2" },
      { label: "Year 1 - Q3", value: "5%", year: 1, quarter: "Q3" },
      { label: "Year 1 - Q4", value: "5%", year: 1, quarter: "Q4" },
      { label: "Year 2 - Q1", value: "5%", year: 2, quarter: "Q1" },
      { label: "Year 2 - Q2", value: "4%", year: 2, quarter: "Q2" },
      { label: "Year 2 - Q3", value: "5%", year: 2, quarter: "Q3" },
      { label: "Year 2 - Q4", value: "4%", year: 2, quarter: "Q4" },
      { label: "Year 3 - Q1", value: "1%", year: 3, quarter: "Q1" },
      { label: "Year 3 - Q2", value: "1%", year: 3, quarter: "Q2" },
    ],
  },
];

const years = [1, 2, 3];

const PlanComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center p-2  min-h-[100dvh] w-full relative pt-[100px] md:pt-[100px]">
      <div className="absolute top-0 left-0 h-full w-full hidden md:block">
        <Image
          src={"/plan/bg.jpg"}
          alt={`bg`}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          className={"object-center"}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30 z-3 pointer-events-none" />
      </div>
      <h2 className="text-2xl md:text-5xl text-white font-serif font-semibold mb-2 z-5 text-center">
        Flexible Payment
      </h2>
      <p className="text-base md:text-lg font-sans text-white mb-10 md:mb-20 text-center max-w-2xl z-5">
        Choose a payment plan that fits your needs. <br />
        Our flexible options make owning your dream home easier than ever.
      </p>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full max-w-6xl justify-center items-stretch z-5 mb-10 md:mb-20">
        {paymentPlans.map((plan, idx) => (
          <div
            key={idx}
            className={`flex-1 bg-black/10 backdrop-blur-md rounded-2xl md:rounded-3xl transition-all shadow-lg border border-neutral-200 p-4 md:p-8 flex flex-col items-center min-w-[90vw] md:min-w-[260px] max-w-full md:max-w-md ${
              idx === 1
                ? "scale-100 md:scale-105 md:hover:scale-110"
                : "md:hover:scale-105"
            }`}
          >
            <h3 className="text-xl md:text-3xl mb-5 md:mb-7 text-center font-serif text-white">
              {plan.title}
              <br />
              PAYMENT PLAN
            </h3>
            {/* Downpayment */}
            <div className="mb-2 md:mb-4 w-full flex flex-col items-center text-white">
              <div className="text-2xl md:text-3xl font-serif">
                {plan.downpayment}
              </div>
              <div className="font-light border-t text-xs md:text-base">
                DOWNPAYMENT
              </div>
            </div>
            {/* Per year rows */}
            {years.map((year) => {
              const quarters = plan.quarters.filter((q) => q.year === year);
              if (quarters.length === 0) return null;
              return (
                <div key={year} className="w-full mb-2 md:mb-4 mt-2 md:mt-4">
                  <div className="mb-1 md:mb-2 text-center font-serif text-lg md:text-2xl text-white">
                    {yearLabel(year)}
                  </div>
                  <div className="grid grid-cols-4 gap-2 md:gap-3">
                    {year === 3 && quarters.length === 2
                      ? quarters.map((q, i) => (
                          <div
                            key={i}
                            className="mb-2 md:mb-4 w-full flex flex-col items-center text-white col-span-2"
                          >
                            <div className="text-lg md:text-3xl font-serif">
                              {q.value}
                            </div>
                            <div className="font-light border-t text-xs md:text-base">
                              {q.quarter}
                            </div>
                          </div>
                        ))
                      : quarters.map((q, i) => (
                          <div
                            key={i}
                            className="mb-2 md:mb-4 w-full flex flex-col items-center text-white"
                          >
                            <div className="text-lg md:text-3xl font-serif">
                              {q.value}
                            </div>
                            <div className="font-light border-t text-xs md:text-base">
                              {q.quarter}
                            </div>
                          </div>
                        ))}
                  </div>
                </div>
              );
            })}
            {/* Handover */}
            <div className="mt-2 w-full flex flex-col items-center">
              <div className="mb-1 md:mb-2 text-center font-serif text-lg md:text-2xl text-white">
                HANDOVER
              </div>
              <div className="text-lg md:text-3xl font-serif text-white">
                {plan.handover}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanComponent;
