import React from 'react';

import './Banner.css'
import { FaArrowDown} from "react-icons/fa";
const Banner = () => {
    return (
        <div className="banner mt-32 mb-20">
            <div className="container mx-20 text-white pt-5">
                <p className="sub-header pt-5">LATEST EDITION</p>
                <h2 className="header ">AllCARS</h2>
                <p className="header-bottom pb-5">Cayman <span >S</span></p>
                <h2><span className="price brown">$625</span> / <span >Month</span></h2>
                <h6>$0 first payment paid by Porsche up to $325.</h6>
                <h6>Taxes, title and fees extra. </h6>
                <div className="pt-5 d-flex">
                    <button
                 className=" btn btn-md me-2 bg-white hover:bg-blue-500 text-dark  rounded-0">
                        Learn More
                       
                  </button><button

              className=" btn btn-md drive me-2 bg-blue-500  hover:text-black text-white  rounded-0">
                 Rent Now <FaArrowDown></FaArrowDown>  </button>
                </div>  
            </div>
        </div>
    );
};

export default Banner;
