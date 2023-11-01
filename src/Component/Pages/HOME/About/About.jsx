import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { Fade } from "react-awesome-reveal";


const About = () => {
    return (
        <div className="bg">
         
                    <Fade direction="right"> 
            <div className="container mx-auto p-5">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2">
                        <img src="https://e0.pxfuel.com/wallpapers/407/193/desktop-wallpaper-sports-races-lamborghini-cars-sports-car-lamborghini-veneno-thumbnail.jpg" alt="" className="w-full md:py-5" />
                    </div>


                    <div className="md:w-1/2 p-3 mt-5 text-center md:text-left bg-black text-white">
                        <div className="text-center text-md-start mb-4">
                            <h5 className="text-blue-200 text-5xl mb-5 font-serif   italic ">ABOUT US</h5>
                            <h1 className="text-2xl font-bold">Traveezy || Travel Made Easy</h1>
                            <p className="text-secondary  ">Start planning your dream trip today! Traveezy is the largest independently owned travel agency headquartered in Dhaka, and consistently ranked among the top 5 largest in Bangladesh.</p>
                        </div>
                        <div className="text-start mb-4">
                            <div className="flex items-center mb-2">
                                <FontAwesomeIcon icon={faCheckSquare} className="text-primary text-2xl mr-2" />
                                <h5>Cost Effective</h5>
                            </div>
                            <div className="flex items-center mb-2">
                                <FontAwesomeIcon icon={faCheckSquare} className="text-primary text-2xl mr-2" />
                                <h5>No Hidden Charges</h5>
                            </div>
                            <div className="flex items-center mb-2">
                                <FontAwesomeIcon icon={faCheckSquare} className="text-primary text-2xl mr-2" />
                                <h5>Quality Assurance</h5>
                            </div>
                            <div className="flex items-center mb-2">
                                <FontAwesomeIcon icon={faCheckSquare} className="text-primary text-2xl mr-2" />
                                <h5>Hassle Free Travelling</h5>
                            </div>
                        </div>
                        <button className="bg-primary text-white text-lg py-2 px-6 rounded-full">More About Us</button>
                    </div>  
                </div>
            </div></Fade> 
        </div>
    );
};

export default About;
