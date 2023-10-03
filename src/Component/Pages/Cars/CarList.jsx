import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Container from '../../Shared/Contanier/Container';
import { useSearchParams } from 'react-router-dom';
import { FaSearch ,FaUsers,FaGasPump ,FaTachometerAlt, FaCar} from 'react-icons/fa';



function CarList() {
  const [cars, setCars] = useState([]);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const maxPages = 10;
  const [model, setModel] = useState('');
  const navigate = useNavigate();
  const { page } = useParams();
  const [params, setParams] = useSearchParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/cars/${page}`);
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

  const filteredCars = cars.filter((car) => car.model.toLowerCase().includes(model.toLowerCase()));

  return (
    <><Container>
    <div className='mt-32'>
    <div className="relative flex justify-center items-center mb-4">
  <input
    id='model'
    type='text'
    placeholder='Search by                    Car name'
    className='pl-4 pr-12 py-4  w-96 border border-blue-500 rounded-full text-center mx-auto'
    value={model}
    onChange={(e) => setModel(e.target.value)}
  />
  <FaSearch className="absolute flex justify-end items-end top-1/2 transform -translate-y-1/2 text-blue-700" />
</div>

{filteredCars.length > 0 ? (
<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-32 gap-4">
  {filteredCars.map((car) => (
    <li key={car.id} className="mb-5  rounded">
  
      <div className="card w-full  h-full bg-blue-100   hover:bg-black hover:text-white  shadow-xl mt-4">
      <figure className=" relative overflow-hidden">
  <img
    className="w-full h-72 transform transition-transform duration-300 hover:scale-150"
    src={car.image} 
    alt={car.model} 
  />
</figure>
        <div className="card-body">



        <h2 className="card-title flex justify-between items-center">
  {car.model}
  <div className="text-sm border-dashed border-2 border-indigo-600 rounded-lg p-2">
    {car.year}
  </div>
</h2>


<h2 className="card-title flex justify-around items-center">
  <div className='-mx-10 card-title text-xl'>
    <FaUsers className="text-blue-500 ml-1" />
    <h1>{car.seating_capacity}</h1>
  </div>
  <div className="p-2 card-title text-lg ">

  <FaTachometerAlt className="ml-1 text-blue-500  " />
 
  {car.fuel_efficiency_km_per_liter.combined_km_per_liter}
   
  </div>
</h2>


<h2 className="card-title flex justify-around items-center">
  <div className='card-title text-xl'>
    < FaGasPump className="text-blue-500 ml-1" />
    <h1>{car.fuel_type}</h1>
  </div>
  <div className="p-2 card-title text-lg ">

  <FaCar className="ml-1 text-blue-500  " />
    {car.transmission}

  </div>
</h2>


<div className="divider h-1 bg-white"></div>





          
<h2 className="card-title flex justify-between items-center">
$ {car.rent}/month
  <div className="text-sm  p-2">
  <button className='btn bg-blue-400 text-white hover:text-black'><Link to={`/car/${car.id}`} className="font-bold">View Deatils</Link></button>
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
                  currentPage === pageNumber ? 'bg-blue-500' : 'bg-gray-200 hover:bg-blue-700'
                } text-white font-bold py-2 px-4`}
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
      </div>
    </div> </Container> </>
  );
}

export default CarList;