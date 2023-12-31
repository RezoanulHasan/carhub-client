import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom'
import Navbar from './Component/Shared/Navbar/Navbar';
import { Link } from 'react-scroll';
import {FaArrowUp} from 'react-icons/fa'
import Footer from './Component/Shared/Footer/Footer';
const App = () => {

  useEffect(() => {  
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="top">
      <Navbar />
    
 <div className='py-20 min-h-[calc(100vh-68px)]'>
        <Outlet />
      </div>

      <div className="card-actions justify-center">
 <Link to="top" smooth={true} duration={500}><button className= "btn bg-blue-400 text-white"><FaArrowUp className=''></FaArrowUp></button></Link> </div>            
   
 <Footer></Footer>
    </div>
  );
};

export default App;