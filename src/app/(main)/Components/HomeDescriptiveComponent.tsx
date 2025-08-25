import React from "react";
import { ContentReveal } from "./Animation/ContentReveal";

const DescriptionFeatures = () => {
  return (
    <div className="flex flex-col gap-20 justify-center items-center py-20 px-20">
      <ContentReveal>
        <div className="flex w-full items-center gap-10">
          <div className="basis-3/5 flex flex-col gap-5">
            <h3 className="text-3xl font-semibold text-amber-400">
              Something Good About This
            </h3>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada. Nunc congue urna id laoreet tempor. Nunc rhoncus nec
              ante eu dapibus. Sed egestas neque vel vehicula ullamcorper.
              Phasellus quis accumsan turpis, et aliquet lectus feugiat a.
            </p>
          </div>
          <div className="basis-2/5">
            <div className="h-[300px] w-full rounded-[20px] bg-[rgba(160,160,160,0.3)] backdrop-blur-md border border-[rgba(160,160,160,0.8)]"></div>
          </div>
        </div>
      </ContentReveal>
      <ContentReveal>
        <div className="flex w-full items-center gap-10">
          <div className="basis-2/5">
            <div className="h-[300px] w-full rounded-[20px] bg-[rgba(160,160,160,0.3)] backdrop-blur-md border border-[rgba(160,160,160,0.8)]"></div>
          </div>
          <div className="basis-3/5 flex flex-col gap-5 ">
            <h3 className="text-3xl font-semibold text-amber-400 text-right">
              Something Good About This
            </h3>
            <p className="text-xl text-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada. Nunc congue urna id laoreet tempor. Nunc rhoncus nec
              ante eu dapibus. Sed egestas neque vel vehicula ullamcorper.
              Phasellus quis accumsan turpis, et aliquet lectus feugiat a.
            </p>
          </div>
        </div>
      </ContentReveal>
    </div>
  );
};

export default DescriptionFeatures;
