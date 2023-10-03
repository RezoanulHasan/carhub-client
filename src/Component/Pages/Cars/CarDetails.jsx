
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

function CarDetails() {
  const { id } = useParams();

  // Assuming the data is fetched and is an array of cars with unique IDs
  const data = useLoaderData();

  // Find the selected car based on id
  const car = data.find(car => car.id === parseInt(id)) || {};

  return (
    <div className='mt-32'>
      <h2>{car.model}</h2>
      <p>Year: {car.year}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default CarDetails;


