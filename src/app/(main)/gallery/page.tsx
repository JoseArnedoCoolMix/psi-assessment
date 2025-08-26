import GalleryComponent from "../Components/Gallery/GalleryComponent";
import GetInquiryLight from "../Components/HomeGetInquiryLight";

export default function Plan() {
  return (
    <div className="flex justify-center flex-col items-center w-full">
      <div className="flex w-full flex-col">
        <GalleryComponent />
        <GetInquiryLight />
      </div>
    </div>
  );
}
