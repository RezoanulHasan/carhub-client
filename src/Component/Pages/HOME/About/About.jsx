import React from 'react';
import { Helmet } from 'react-helmet';
import { BiDollar, BiCalculator, BiCar, BiSupport, BiCalendarCheck, BiShieldAlt } from 'react-icons/bi';
import './About.css'
import { Fade } from "react-awesome-reveal";
import GetRandomColor from './../../../../Hooks/GetRandomColor';


const About = () => {
    const textColor = GetRandomColor(); 
    
    return (
        <div className="py-5">
            <Helmet>
                <title>About | Car Hub </title>
                <meta name="description" content="Car Hub - Car rent Website" />
            </Helmet>
            <div className="about-bg py-20">
                <div className="container mx-auto px-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8  mt-32">
                    <Fade direction="left" >
                        <div className="p-4">
                            <p className="text-blue-200  text-xl uppercase font-bold">CAR HUB</p>
                            <h1 className="text-4xl font-bold text-white mb-3">LUXURY CAR RENT</h1>
                            <h5 className="text-white">Car Hub is a premier luxury car rental company that has been setting the standard since its inception in 2005. With its headquarters located in the heart of Bogra, Car Hub provides discerning clients with unparalleled access to an exquisite fleet of high-end vehicles.</h5>

                       <h5></h5>
                       
                        </div>
                        </Fade > <Fade direction="right" >
                        <div className="p-4 flex justify-center items-center">
                            <div className="grid grid-cols-2 gap-4 text-center">
                                <div>
                                    <h1 className="text-5xl font-bold text-blue-200">100 k<span className="text-base font-normal">+</span></h1>
                                    <h6 className=" text-white font-bold">VEHICLES AVAILABLE RIGHT NOW</h6>
                                </div>
                                <div>
                                    <h1 className="text-5xl font-bold text-blue-200">250 k<span className="text-base font-normal">+</span></h1>
                                    <h6 className="text-white font-bold">HAPPY & TRUSTED CUSTOMERS</h6>
                                </div>
                                <div>
                                    <h1 className="text-5xl font-bold text-blue-200">125</h1>
                                    <h6 className=" text-white font-bold">CAR MAKES AND MODELS</h6>
                                </div>
                                <div>
                                    <h1 className="text-5xl font-bold text-blue-200">100</h1>
                                    <h6 className="text-white font-bold">RECOGNITION AND AWARDS</h6>
                                </div>
                            </div>
                        </div></Fade >
                    </div>
                </div>
            </div>
            <div className="container mx-auto py-20">
            <Fade direction="right" >
      <div className="py-10 sm:py-10">
        <div className="text-left border-l-4 border-[#1d4ed8] pl-3">
          <h2 className="font-bold text-2xl sm:text-4xl">Why choose Us</h2>
          <p className="font-medium text-lg mt-2 text-[#1d4ed8]">
            Let's Know
          </p>
        </div>
      </div>
      </Fade>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  bg-slate-200 p-20  ">
        <div className="h-100">
            <div className="flex mb-2">
                <BiDollar  style={{ color: textColor }}  className="text-3xl " />
                <h5  className="ml-2 text-black font-bold">Unbeatable Luxury at Affordable Prices</h5>
            </div>
            <div className="text-gray-700">
                <h1 style={{ color: textColor }}  className="text-4xl text-brown">1</h1>
                <p className="ml-2">Experience the pinnacle of luxury with our meticulously maintained fleet. Each car is thoroughly inspected and comes with a complimentary Carfax history report, along with a limited warranty for added peace of mind.</p>
            </div>
        </div>
        <div className="h-100">
            <div className="flex mb-2">
                <BiCalculator  style={{ color: textColor }}  className="text-3xl" />
                <h5 className="ml-2 text-black  font-bold">Effortless Online Financing</h5>
            </div>
            <div className="text-gray-700">
                <h1  style={{ color: textColor }}  className="text-4xl ">2</h1> 
                <p className="ml-2">Calculating your financing options has never been easier. Utilize our user-friendly online calculator to get an estimate within minutes. With over 12 financing partners, we ensure you receive a highly competitive rate.</p>             
            </div>
        </div>
        <div className="h-100">
            <div className="flex mb-2">
                <BiCar  style={{ color: textColor }}  className="text-3xl text-brown" />
                <h5 className="ml-2 text-black font-bold">Efficient and Reliable Delivery</h5>
            </div>
            <div className="text-gray-700">
                <h1  style={{ color: textColor }} className="text-4xl text-brown">3</h1>
                <p className="ml-2">Experience the convenience of having your chosen car or truck delivered straight to your doorstep or a nearby location of your choice. We pride ourselves on fast and accurate service.</p>
            </div>
        </div>
        <div className="h-100">
            <div className="flex mb-2">
                <BiSupport   style={{ color: textColor }} className="text-3xl text-brown" />
                <h5 className="ml-2 text-black font-bold">Dedicated Customer Support</h5>
            </div>
            <div className="text-gray-700">
                <h1   style={{ color: textColor }} className="text-4xl text-brown">4</h1>
                <p className="ml-2">Our team is committed to providing you with exceptional support at every stage of your rental experience. Whether you have questions about our fleet or need assistance with your reservation, we're here to help.</p>
            </div>
        </div>
        <div className="h-100">
            <div className="flex mb-2">
                <BiCalendarCheck  style={{ color: textColor }}   className="text-3xl text-brown" />
                <h5 className="ml-2 text-black font-bold">Flexible Booking Options</h5>
            </div>
            <div className="text-gray-700">
                <h1  style={{ color: textColor }}  className="text-4xl  text-brown">5</h1>
                <p className="ml-2">Choose from a range of booking options tailored to your needs. Whether you require a short-term rental for a special occasion or a long-term arrangement, Car Hub has you covered.</p>
            </div>
        </div>
        <div className="h-100">
            <div className="flex mb-2">
                <BiShieldAlt   style={{ color: textColor }}    className="text-3xl text-brown" />
                <h5 className="ml-2 text-black font-bold">Safety First</h5>
            </div>
            <div className="text-gray-700">
                <h1   style={{ color: textColor }}    className="text-4xl text-brown">6</h1>
                <p className="ml-2">Your safety is our priority. We implement stringent measures to ensure that every vehicle is in top condition. From regular maintenance to thorough cleanings, we go the extra mile to guarantee your peace of mind.</p>
            </div>
        
    </div>
</div>
</div>
        </div>
    );
};

export default About;
