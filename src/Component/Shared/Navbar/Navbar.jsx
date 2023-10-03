import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll} from "framer-motion";
import "./scroll.css"
import { FaHome, FaCar} from 'react-icons/fa';
import {AiFillMessage } from 'react-icons/ai';
const Navbar = () => {

  const { scrollYProgress } = useScroll();
    return (
        <div>
             <motion.div
       
       style={{ scaleX: scrollYProgress }}
    className=' progress-bar   '/>
            <div className="navbar  fixed w-full z-10 shadow-sm   ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
       
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <h1 className="normal-case text-2xl font-bold ">Car</h1>
    <div className="avatar ">
  <div className="w-20 mask mask-hexagon">
    <img src="https://i5.walmartimages.com/asr/1a90f7c3-678e-4bc2-bc97-571b34ceae70.67669fc5994ba85fe07dac3d25da7cbe.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" />
  </div>
  </div>


    <h1 className='text-blue-400 text-2xl font-bold '>Hub</h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-3">
      
    <li className='hover:bg-blue-400 text-xl  text-blue-400 hover:text-white rounded-xl'>
  <Link to="/">
    <FaHome className="inline-block mr-1" /> Home
  </Link>
</li>

<li className='hover:bg-blue-400 text-xl  text-blue-400 hover:text-white rounded-xl'>
  <Link to="/cars">
    <FaCar className="inline-block mr-1" /> All Cars
  </Link>
</li>
<li className='hover:bg-blue-400 text-xl  text-blue-400 hover:text-white rounded-xl'>
  <Link to="/contact">
    <AiFillMessage className="inline-block  " /> Contact
  </Link>
</li>
    
    </ul>
  </div>
  <div className="navbar-end">
    <button className="btn  bg-blue-400  btn-outline text-white">login</button>
  </div>
</div>




        </div>
    );
};

export default Navbar;
