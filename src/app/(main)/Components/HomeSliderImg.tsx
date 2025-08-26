// "use client";
// import Image from "next/image";
// import React, { useCallback, useMemo, useState } from "react";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import { Autoplay, Parallax } from "swiper/modules";
// import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

// const SLIDER_IMAGES = [
//   "/images/home/slider-2/slider-image-1.png",
//   "/images/home/slider-2/slider-image-2.png",
//   "/images/home/slider-2/slider-image-3.png",
// ];

// const HomeSecondSlider = () => {
//   const [swiper, setSwiper] = useState<SwiperClass | null>(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const onSwiperChange = useCallback((swiper: SwiperClass) => {
//     setActiveIndex(swiper.activeIndex);
//   }, []);

//   const isLastImage = useMemo(() => {
//     return activeIndex === SLIDER_IMAGES?.length - 1;
//   }, [activeIndex]);

//   const isFirstImage = useMemo(() => {
//     return activeIndex === 0;
//   }, [activeIndex]);

//   const nextImage = useCallback(
//     (e: any) => {
//       e?.stopPropagation();
//       e?.preventDefault();
//       if (swiper) {
//         if (isLastImage) {
//           swiper.slideTo(0);
//           return;
//         }
//         swiper.slideNext();
//       }
//     },
//     [swiper, isLastImage]
//   );

//   const prevImage = useCallback(
//     (e: any) => {
//       e?.stopPropagation();
//       e?.preventDefault();
//       if (swiper) {
//         if (isFirstImage) {
//           swiper.slideTo(SLIDER_IMAGES.length - 1);
//           return;
//         }
//         swiper.slidePrev();
//       }
//     },
//     [swiper, isFirstImage]
//   );

//   return (
//     <>
//       <div className="flex-1 aspect-[710/550] w-full rounded-[10px] min-[1200px]:rounded-[20px] overflow-hidden min-w-0">
//         <Swiper
//           onSwiper={setSwiper}
//           modules={[Autoplay, Parallax]}
//           parallax={true}
//           onSlideChange={onSwiperChange}
//           direction="vertical"
//           loop={false}
//           autoplay={true}
//           className="w-[calc(100%+1px)] h-full"
//         >
//           {SLIDER_IMAGES.map((image, index) => (
//             <SwiperSlide className="w-full h-full">
//               <Image
//                 quality={100}
//                 src={image}
//                 alt={`slider image ${index + 1}`}
//                 className="w-full h-full object-cover"
//                 width={2133}
//                 height={1392}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//       <div className="flex flex-row justify-end h-full">
//         <div className="p-[10px] min-[1200px]:p-[25px] aspect-[225/182] rounded-2xl glass border-[0.5px] border-white absolute right-[-5%] top-[48%] z-10 max-w-[160px] min-[1200px]:max-w-[200px] text-white flex flex-col justify-center">
//           <p className="text-3xl mb-[10px]">500+</p>
//           <p className="text-[14px]">Clients find their dream kitchen</p>
//         </div>
//         <ul className="flex gap-[8px] px-[10px] z-[1] flex-col items-center justify-end h-auto">
//           <li
//             className={`text-[15px] cursor-pointer opacity-25`}
//             onClick={prevImage}
//           >
//             <IoIosArrowUp />
//           </li>
//           {swiper &&
//             swiper.slides.map((slide, index) => (
//               <li
//                 key={index}
//                 className={`bg-[white] text-[1px] w-[8px] h-[8px] rounded-full ${
//                   index === activeIndex ? "" : "opacity-25 cursor-pointer"
//                 }`}
//                 onClick={() => {
//                   swiper.slideTo(index);
//                 }}
//               >
//                 &nbsp;
//               </li>
//             ))}
//           <li
//             className={`text-[15px] cursor-pointer opacity-25`}
//             onClick={nextImage}
//           >
//             <IoIosArrowDown />
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// };

// export default HomeSecondSlider;
