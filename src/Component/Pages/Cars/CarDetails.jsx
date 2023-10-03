
import React, { useEffect } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';
import Container from '../../Shared/Contanier/Container';
import { Fade } from "react-awesome-reveal";
function CarDetails() {
  useTitle('Car Details'),

  useEffect(() => { 

    window.scrollTo(0, 0);

}, []); 

  const { id } = useParams();
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  }
  // Assuming the data is fetched and is an array of cars with unique IDs
  const data = useLoaderData();

  // Find the selected car based on id
  const car = data.find(car => car.id === parseInt(id)) || {};
  //<p className='text-xl'> Type: {car?.}</p>
  return (
    <>
    
    <Container>
    <div className='mt-20 mb-10'>

    <div className=' overflow-hidden rounded-xl w-full   md:w-[150vh]'>
      
      <img
        className='object-cover w-full '
        src={car.image}
        alt='header image'
      />    
    

      </div>
<div className='mt-5 mb-5'>
<h2 className='font-bold text-blue-500 text-4xl'> Brand - {car.car_brand}</h2>
      <h2 className=' text-black text-2xl'> Car Model - {car.model}</h2>
      <h2 className=' text-black text-xl mb-5'> {car.transmission}</h2>
      <hr />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 text-lg p-5  bg-black text-white  rounded-lg shadow-md'>
    <div className="border-b border-gray-300 pb-3 mb-3">
        <p className="font-bold text-xl mb-1 text-blue-500 ">Details Basics</p>
        <p>Year: {car.year}</p>
        <p>Drive: {car.drive_type}</p>
        <p>Fuel: {car.fuel_type}</p>
    </div>
    <div className="border-b border-gray-300 pb-3 mb-3  ">
        <p className="font-bold text-xl mb-1 text-blue-500 ">Specifications</p>
        <p>Fuel Capacity: {car.fuel_capacity_gal} gal</p>
        <p>Weight: {car.weight_lbs} lbs</p>
        <p>Cargo Capacity: {car.cargo_capacity_cubic_ft} ft³</p>
    </div>
    <div className="border-b border-gray-300 pb-3 mb-3  ">
        <p className="font-bold text-xl mb-1 text-blue-500 ">Price</p>
        <p>Set : {car.seating_capacity} person</p>
        <p>Rent:   ${car.rent} /month</p>
        <p> Price:   $ {car.base_price_usd} </p>
    </div>



</div>

      </div>
      <hr/>
   
      <Fade direction="down" >
      <div className="card lg:card-side bg-black text-zinc-100  shadow-xl mb-10">
<figure><img src="https://plus.unsplash.com/premium_photo-1680699963114-6a39b597df50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRpbWVuc2lvbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Album"/></figure>
<div className="card-body">
<h2 className="card-title text-3xl text-blue-500 mb-10">Dimensions</h2>

<p className='text-xl'> Legnth: {car?.dimensions.length_in} inc</p>
<p className='text-xl'> width: {car?.dimensions.width_in} inc</p>
<p className='text-xl'> Height: {car?.dimensions.height_in}inc</p>
<p className='text-xl'> wheelbase{car?.dimensions.wheelbase_in} inc</p>
</div>
</div>

</Fade>
<Fade direction="down" >
      <hr/>
<div className="card lg:card-side bg-black text-zinc-100  shadow-xl mb-10">
<figure><img src="https://media.istockphoto.com/id/1693201803/photo/human-hand-holding-gasoline-nozzle-in-the-parking-lot.webp?b=1&s=170667a&w=0&k=20&c=AQzBrZ3mJMAQL7LfvFOXzkWgoyUkj5ELVaLT6P7AJvk=" alt="Album"/></figure>
<div className="card-body">
<h2 className="card-title text-3xl text-blue-500 mb-10">Fuel-Efficiency</h2>


<p className='text-xl'> In City: {car?.fuel_efficiency_km_per_liter.city_km_per_liter}</p>
<p className='text-xl'> In Highway: {car?.fuel_efficiency_km_per_liter.highway_km_per_liter}</p>
<p className='text-xl'> Combined: {car?.fuel_efficiency_km_per_liter.combined_km_per_liter}</p>
</div>
</div>

</Fade>
<Fade direction="down" >
      <hr/>

      <div className="card lg:card-side bg-black text-zinc-100 shadow-xl">
  <figure><img src="https://media.istockphoto.com/id/154411696/photo/transparent-vehicle.webp?b=1&s=170667a&w=0&k=20&c=iKE4Cpn-zGPSxpjYU5XAkf-AxIIzZNwnrh8677t67YI=" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title text-3xl text-blue-500 mb-10">Engine Details</h2>


    <p className='text-xl'> Type: {car?.engine.type}</p>
    <p  className='text-xl'>Displacement: {car?.engine.displacement}</p>
    <p className='text-xl' >Horsepower: {car?.engine.horsepower}</p>
    <p  className='text-xl'  >torque_lb: {car?.engine.torque_lb_ft}ft</p>
  
  </div>
</div>

</Fade>
</div>



 



      <div className='text-center mt-10'>
        <button onClick={back} className="btn bg-blue-400 text-white mb-10 mt-4  center btn-lg  hover:bg-primary-700">
          Back
        </button>
      </div></Container>
      </>
  );
}

export default CarDetails;


