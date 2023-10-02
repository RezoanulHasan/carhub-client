import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";


import "./Slider.css";
import {  Navigation, Autoplay } from 'swiper/modules';

const Slider = () => {

  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        loop={true}
        className="mySwiper"
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              className="h-[calc(100vh-76px)] w-full object-cover object-center"
              alt="slide 1"
            />
            <div
              className="slider-content flex justify-center items-center    h-full w-full mx-auto absolute p-5 ">
              <div className="sm:w-1/2 text-center my-bg p-5 md:p-10 rounded-2xl  bg-black bg-opacity-50 text-white word-wrap">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-5 leading-relaxed">
  <span className="firstWord word  text-white">Explore....</span>
  <span className="middleword text-blue-300">Exotic Destinations</span>
  <span className="lastworld word text-white ">with Style</span>
</h2>

<p className="text-base sm:text-lg font-medium text-blue-200">
  Experience the thrill of luxury travel, curated just for you.
</p>

              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              className="h-[calc(100vh-76px)] w-full object-cover object-center"
              alt="slide 1"
            />
            <div
              className="slider-content flex justify-center items-center h-full w-full mx-auto absolute p-5 "
            >
              <div className="sm:w-1/2 text-center my-bg p-5 md:p-10 rounded-2xl   bg-black bg-opacity-50   text-white word-wrap">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-5 leading-relaxed">
  <span className="firstWord word text-white">Indulge....</span>
  <span className="middleword text-blue-300">in Opulence</span>
  <span className="lastworld word text-white">and Elegance</span>
</h2>

<p className="text-base sm:text-lg font-medium  text-blue-200  t">
  Elevate your travel experience with our premium services.
</p>

              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1883&q=80"
              className="h-[calc(100vh-76px)] w-full object-cover object-center"
              alt="slide 1"
            />
            <div
              className="slider-content flex justify-center items-center h-full w-full mx-auto absolute p-5 "
              
            >
              <div className="sm:w-1/2 text-center my-bg p-5 md:p-10 rounded-2xl text-white word-wrap">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-5 leading-relaxed">
  <span className="firstWord word text-white">Luxurious....</span>
  <span className="middleword text-blue-300 ">Getaways</span>
  <span className="lastworld word text-white">Await You</span>
</h2>

<p className="text-base sm:text-lg font-medium  text-blue-200">
  Discover a world of luxury and sophistication like never before.
</p>

              </div>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1498887960847-2a5e46312788?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
              className="h-[calc(100vh-76px)] w-full object-cover object-center"
              alt="slide 1"
            />
            <div
              className="slider-content flex justify-center items-center h-full w-full mx-auto absolute p-5 "
              
            >
              <div className="sm:w-1/2 text-center my-bg p-5 md:p-10 rounded-2xl text-white word-wrap">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-5 leading-relaxed">
  <span className="firstWord word text-white">Unwind....</span>
  <span className="middleword text-blue-300">in Ultimate Comfort</span>
  <span className="lastworld word text-whitw">and Luxury</span>
</h2>

<p className="text-base sm:text-lg font-medium text-blue-200">
  Experience a world of relaxation and opulence.
</p>


              </div>
            </div>
          </div>
        </SwiperSlide>
 <SwiperSlide>
          <div className="relative">
            <img
              src="https://media.istockphoto.com/id/1425792472/photo/happy-family-enjoying-while-going-on-a-vacation-by-car.jpg?s=2048x2048&w=is&k=20&c=5Zu45yrCICVelm8ns1IpPZzqZJed6UspM8zoBfGEiNE="
              className="h-[calc(100vh-76px)] w-full object-cover object-center"
              alt="slide 1"
            />
            <div
              className="slider-content flex justify-center items-center h-full w-full mx-auto absolute p-5 "
              
            >
              <div className="sm:w-1/2 text-center my-bg p-5 md:p-10 rounded-2xl text-white word-wrap">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-5 leading-relaxed">
  <span className="firstWord word text-white">Journey....</span>
  <span className="middleword text-blue-300">in Style</span>
  <span className="lastworld word text-white">with Us</span>
</h2>

<p className="text-base sm:text-lg font-medium text-blue-200">
  Elevate your travel experience with our exclusive services.
</p>

              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
};

export default Slider;
