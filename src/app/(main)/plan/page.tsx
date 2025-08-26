import GetInquiryLight from "../Components/HomeGetInquiryLight";
import PlanComponent from "../Components/Plan/PlanComponent";

export default function Plan() {
  return (
    <div className="flex justify-center flex-col items-center w-full">
      <div className="flex w-full flex-col">
        <PlanComponent />
        <GetInquiryLight />
      </div>
    </div>
  );
}
