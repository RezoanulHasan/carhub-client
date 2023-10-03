import React, { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import {
  FaArrowCircleRight,
  FaLocationArrow,
  FaPhoneAlt,
  FaMobileAlt,
  FaTelegramPlane,
} from "react-icons/fa";
import Leaflet from "./Leaflet/Leaflet";
import ContactForm from "./ContactForm/ContactForm";
import useTitle from "../../../Hooks/useTitle";

const Contact = () => {

  useTitle('Contact'),

  useEffect(() => { 

    window.scrollTo(0, 0);

}, []); 

  return (
    <div className="container mx-auto px-3  sm:px-5">
      <Fade direction="down" >
      <div className="py-16 sm:py-24">
        <div className="text-left border-l-4 border-[#1d4ed8] pl-3">
          <h2 className="font-bold text-2xl sm:text-4xl">Reach Out to Us</h2>
          <p className="font-medium text-lg mt-2 text-[#1d4ed8]">
            Let's Connect
          </p>
        </div>
      </div>
      </Fade>


      <div className="contact-body grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-5 pb-16 sm:pb-24">
      <Fade direction="left" >
        <div className="contact-left">
          <div className="mb-12">
            <h2 className="text-3xl font-medium mb-5 pb-3 border-b-2 border-[#1d4ed8]">
              Our Address
            </h2>
            <p className="text-lg my-3">
              Discover various luxury car around the world, 
              enjoy world class  premium service.
            </p>
            <div className="text-lg my-5 font-medium">
              <p className="flex items-center gap-2 mb-2">
                <FaLocationArrow className="text-[#1d4ed8]" /> 21 Street, Bogra
                , Bangladesh # 12 Road, House #1
              </p>
              <p className="flex items-center gap-2 cursor-pointer mb-2">
                <FaMobileAlt className="text-[#1d4ed8]" /> +8801734639066
              </p>
              <p className="flex items-center gap-2 cursor-pointer mb-2">
                <FaPhoneAlt className="text-[#1d4ed8]" /> +880170000000
              </p>
              <p className="flex items-center gap-2 cursor-pointer mb-2">
                <FaTelegramPlane className="text-[#1d4ed8]" />
              Carhub@gmail.com
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-medium mb-8 pb-3 border-b-2 border-[#1d4ed8]">
              Send Us Message
            </h2>
            <div>
              <ContactForm></ContactForm>
            </div>
          </div>
        </div>
       </Fade >
        <Fade direction="right" >
        <div className="contact-right mt-10 mb-5 mx-10">
          <Leaflet />   
        </div>  </Fade >
      </div>
    </div>
  );
};

export default Contact;
