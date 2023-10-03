import React, { useState, useEffect } from 'react';

function TotalCars() {
  const [totalCars, setTotalCars] = useState(null);

  useEffect(() => {
    fetch('https://car-dm2lqyusv-rezoanulhasan.vercel.app/totalCars')
      .then(response => response.json())
      .then(data => setTotalCars(data.totalCars));
  }, []);

  return (
    <div>
    
      <p>{totalCars}</p>
    </div>
  );
}

export default TotalCars;
