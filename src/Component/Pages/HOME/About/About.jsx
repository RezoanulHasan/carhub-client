import React from 'react';
import { Helmet } from 'react-helmet';
import { BiDollar, BiCalculator, BiCar } from 'react-icons/bi';
import './About.css'

const About = () => {
    return (
        <div className="py-5">
            <Helmet>
                <title>About | Car Hub </title>
                <meta name="description" content="Corify - Car Dealer Website" />
            </Helmet>
            <div className="about-bg py-20">
                <div className="container mx-auto px-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8  mt-20">
                        <div className="p-4">
                            <p className="text-blue-200  text-xl uppercase font-bold">CAR HUB</p>
                            <h1 className="text-4xl font-bold text-white mb-3">LUXURY CAR RENT</h1>
                            <h5 className="text-white">Car Hub is a premier luxury car rental company that has been setting the standard since its inception in 2005. With its headquarters located in the heart of Bogra, Car Hub provides discerning clients with unparalleled access to an exquisite fleet of high-end vehicles.</h5>
                       <h5 className="text-white mt-5" > Dedicated to offering more than just cars, Car Hub prides itself on delivering an exceptional experience from start to finish. The company's commitment to excellence is evident in its meticulously curated selection of top-tier automobiles, which includes the latest models from renowned luxury brands.

Whether you're looking to make a statement at a special event, indulge in a weekend getaway, or simply elevate your everyday commute, Car Hub's diverse range of vehicles ensures that every preference is met. From sleek sports cars to spacious SUVs, each vehicle is maintained to the highest standard, guaranteeing a safe and luxurious journey.</h5>
                       <h5 className="text-white" > </h5>
                       <h5></h5>
                       
                        </div>
                        
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
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto py-20">
    <p className="text-2xl font-bold text-blue-500 mb-5">Why Choose Car Hub</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="h-100">
            <div className="flex mb-2">
                <BiDollar className="text-3xl text-brown" />
                <h5 className="ml-2 text-blue-500 font-bold">Unbeatable Luxury at Affordable Prices</h5>
            </div>
            <div className="text-gray-700">
                <h1 className="text-4xl text-brown">1</h1>
                <p className="ml-2">Experience the pinnacle of luxury with our meticulously maintained fleet. Each car is thoroughly inspected and comes with a complimentary Carfax history report, along with a limited warranty for added peace of mind.</p>
            </div>
        </div>
        <div className="h-100">
            <div className="flex mb-2">
                <BiCalculator className="text-3xl text-brown" />
                <h5 className="ml-2 text-blue-500 font-bold">Effortless Online Financing</h5>
            </div>
            <div className="text-gray-700">
                <h1 className="text-4xl text-brown">2</h1> 
                <p className="ml-2">Calculating your financing options has never been easier. Utilize our user-friendly online calculator to get an estimate within minutes. With over 12 financing partners, we ensure you receive a highly competitive rate.</p>             
            </div>
        </div>
        <div className="h-100">
            <div className="flex mb-2">
                <BiCar className="text-3xl text-brown" />
                <h5 className="ml-2 text-blue-500 font-bold">Efficient and Reliable Delivery</h5>
            </div>
            <div className="text-gray-700">
                <h1 className="text-4xl text-brown">3</h1>
                <p className="ml-2">Experience the convenience of having your chosen car or truck delivered straight to your doorstep or a nearby location of your choice. We pride ourselves on fast and accurate service.</p>
            </div>
        </div>
    </div>
</div>
        </div>
    );
};

export default About;
