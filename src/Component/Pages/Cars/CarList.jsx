// CarList.jsx

import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Container from '../../Shared/Contanier/Container';
import { useSearchParams } from 'react-router-dom';
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
    <input
  id='model'
  type='text'
  placeholder='Search by location'
  className='p-2 w-auto border border-gray-300 rounded-full'
  value={model}
  onChange={(e) => setModel(e.target.value)}
/>
{filteredCars.length > 0 ? (
<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-32 gap-4">
  {filteredCars.map((car) => (
    <li key={car.id} className="mb-5 rounded">
  
      <div className="card w-full  h-full bg-base-100 shadow-xl mt-4">
        <figure>
          <img className = "h-56"src={car.image} alt={car.model} /> {/* Assuming there's an imageUrl property in your car object */}
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {car.model}
            <div className="badge badge-secondary">NEW</div> {/* You can customize this part */}
          </h2>
          <p>{car.description}</p> {/* Assuming there's a description property in your car object */}
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{car.category}</div> {/* Assuming there's a category property in your car object */}
            <div className="badge badge-outline">{car.brand}</div> {/* Assuming there's a brand property in your car object */}
         
            <Link to={`/car/${car.id}`} className="font-bold">{car.model}</Link>
          </div>
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