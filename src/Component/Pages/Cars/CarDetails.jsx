// CarDetails.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/cars/${id}`);
        const data = await response.json();
        setCar(data);
      } catch (error) {
        console.error('Error fetching car data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!car) return <div>Loading...</div>;

  return (
    <div className='mt-52'>
      <h2 className="text-2xl font-bold mb-4">{car.model}</h2>
      {/* Render other car details */}
    </div>
  );
}

export default CarDetails;
