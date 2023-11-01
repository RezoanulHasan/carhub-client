import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Container from '../../Shared/Contanier/Container';
import { useSearchParams } from 'react-router-dom';
import { FaSearch ,FaUsers,FaGasPump ,FaTachometerAlt, FaCar} from 'react-icons/fa';
import useTitle from '../../../Hooks/useTitle';
import TotalCars from './TotalCars';
import HeartButton from "../Cars/Button/HeartButton";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Banner from './../HOME/Banner/Banner';


function CarList() {

  useTitle('Car Info'),

  useEffect(() => { 

    window.scrollTo(0, 0);

}, []); 

  const [cars, setCars] = useState([]);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const maxPages = 10;
  const [model, setModel] = useState('');
  const navigate = useNavigate();
  const { page } = useParams();
  const [params, setParams] = useSearchParams();
  const [priceRange, setPriceRange] = useState('');
  const [brands, setBrands] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://car-dm2lqyusv-rezoanulhasan.vercel.app/cars/${page}`);
        const data = await response.json();
        setCars(data.cars);
      } catch (error) {
        console.error('Error fetching car data:', error);
      }
    };

    fetchData();
  }, [query, currentPage, page]);



  const handlePagination = (page) => {
    setCurrentPage(page);
    navigate(`/cars/page/${page}`);
  };

  const filteredCars = cars
  .filter((car) => car.model.toLowerCase().includes(model.toLowerCase()))
  .filter((car) => {
    if (!priceRange) return true;
    const [minPrice, maxPrice] = priceRange.split('-').map(Number);
    return car.rent >= minPrice && car.rent <= maxPrice;
  })
  .filter((car) => {
    if (!brands) return true;
    return car.car_brand.toLowerCase() === brands.toLowerCase();
  });



  return (
    <>
    <div className=''>
  
<Banner></Banner>
   
   <Container>
   
   <div className=' lg:mx-20 mx-0 overflow-x-auto mt-10 border-[1px] w-full md:w-auto py-1 rounded-full shadow-sm hover:shadow-md transition cursor-pointer  bg-white'>
    <div className="relative flex  flex-row items-center justify-between bg-blue-100 gap-3 mb-4 mx-10">
  <input
    id='model'
    type='text'
    placeholder='Search by Car name'
    className='pl-4 pr-12 py-2  w-96 border border-blue-500 rounded-full text-center mx-auto'
    value={model}
    onChange={(e) => setModel(e.target.value)}
  />

  

<select
            id='rent'
            className='p-2 border text-center border-gray-300 rounded-full'
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option  className='font-bold' value=''>Rent Price</option>
            <option value='1-400'>$100 - $400</option>
            <option value='401-800'>$401 - $800</option>
            <option value='801-90000'>Over $800</option>
          </select>



          <select
            id='car_brand'
            className='p-2 border text-center  border-gray-300 rounded-full'
            value={brands}
            onChange={(e) => setBrands(e.target.value)}
          >
            <option  className='font-bold'   value=''> Car Brand</option>
            <option value='Range Rover'>Range Rover </option>
            <option value='Ferrari'>Ferrari</option>
             <option value='Lamborghini'>Lamborghini</option>
           <option value='Audi'>Audi</option>
            <option value='Rolls-Royce'>Rolls-Royce</option>
            <option value='Porsche'>Porsche</option>
            <option value='BMW'>BMW</option>
            
            <option value='Toyota'>Toyota</option>
          </select> 

        



          </div>

</div>    

{filteredCars.length > 0 ? (
<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-32 gap-4">
  {filteredCars.map((car) => (
    <li key={car?.id} className="mb-5  rounded">
  
      <div className="card w-full  h-full bg-blue-100   hover:bg-black hover:text-white  shadow-xl mt-4">
      <figure className=" relative overflow-hidden">
  <img
    className="w-full h-72 transform transition-transform duration-300 hover:scale-150"
    src={car?.image} 
    alt={car?.model} 
  />
  <div className='absolute top-3 right-3'>
            <HeartButton />
            <ToastContainer />
          </div>


</figure>

 <div className="card-body">
<h2 className="card-title flex justify-between items-center">
  {car?.model}
  <div className="text-sm border-dashed border-2 border-indigo-600 rounded-lg p-2">
    {car?.year}
  </div>
</h2>


<h2 className="card-title flex justify-around items-center">
  <div className='-mx-10 card-title text-xl'>
    <FaUsers className="text-blue-500 ml-1" />
    <h1>{car?.seating_capacity}</h1>
  </div>
  <div className="p-2 card-title text-lg ">

  <FaTachometerAlt className="ml-1 text-blue-500  " />
 
  {car?.fuel_efficiency_km_per_liter.combined_km_per_liter}
   
  </div>
</h2>


<h2 className="card-title flex justify-around items-center">
  <div className='card-title text-xl'>
    < FaGasPump className="text-blue-500 ml-1" />
    <h1>{car?.fuel_type}</h1>
  </div>
  <div className="p-2 card-title text-lg ">

  <FaCar className="ml-1 text-blue-500  " />
    {car?.transmission}

  </div>
</h2>


<div className="divider h-1 bg-white"></div>     
<h2 className="card-title flex justify-between items-center">
$ {car.rent}/month
  <div className="text-sm  p-2">
  <Link to={`/car/${car.id}`} className="font-bold"> <button className='btn bg-blue-400 text-white hover:text-black'>View Deatils</button></Link>
  </div>
</h2>    
        </div>
      </div>
    </li>
  ))}
</ul>
    ) : (
      <div className='pt-12 text-center  mb-5'>
        <h2 className='text-3xl font-bold  text-blue-500'>No cars data available!</h2>
        <p className='text-gray-700'>Please select another option.</p>
      </div>
    )}

<div className='flex text-3xl  justify-center  font-bold text-center text-blue-400'>

    <h1>{ filteredCars.length} </h1> - cars  from -<TotalCars></TotalCars>
    </div>

<div className=' lg:mx-20 mx-0 overflow-x-auto mt-10 border-[1px] w-full md:w-auto py-1 rounded-full shadow-sm hover:shadow-md transition cursor-pointer  bg-white'>

      <div className="flex justify-center mt-4">
        <nav className="inline-flex">
          <button
            onClick={() => handlePagination(currentPage - 1)}
            disabled={currentPage === 1}
            className={`${
              currentPage === 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'
            } text-white font-bold py-2 px-4 rounded-l`}
          >
            Previous
          </button>
          {[...Array(maxPages)].map((_, index) => {
            const pageNumber = index + 1;
            return (
              <button
                key={pageNumber}
                onClick={() => handlePagination(pageNumber)}
                className={`${
                  currentPage === pageNumber ? 'bg-blue-500' : 'bg-gray-200 hover:bg-blue-700 hover:text-white'
                } text-black font-bold py-2 px-4`}
              >
                {pageNumber}
              </button>
            );
          })}
          <button
            onClick={() => handlePagination(currentPage + 1)}
            disabled={currentPage === maxPages}
            className={`${
              currentPage === maxPages ? 'bg-gray-200 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'
            } text-white font-bold py-2 px-4 rounded-r`}
          >
            Next
          </button>
        </nav>
      </div></div></Container>
    </div> 
    
    
     </>
  );
}

export default CarList;