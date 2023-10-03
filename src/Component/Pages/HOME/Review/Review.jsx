import React, { useState, useEffect } from 'react';
import "swiper/css";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import 'swiper/swiper-bundle.css';
import { FaQuoteLeft } from "react-icons/fa";
import {  Navigation} from 'swiper/modules';
import { Fade } from "react-awesome-reveal";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/reviews/')
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Error fetching reviews:', error));
  }, []);

  return (
    <section className="my-10">

<Fade direction="down"> 
      <SectionTitle
        subHeading="What Our Client Say"
        heading="Testimonials"
      />


      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map(review => (
          <SwiperSlide key={review.id}>
            <div className="flex flex-col items-center   mx-24 my-16">
            <FaQuoteLeft className="text-3xl text-blue-500 mb-1" />
            
          <p className="mt-10 text-xl text-center md:w-2/3">
                  {review?.review}
                </p>
                <div>
                <div className="avatar mt-2">
  <div className="w-20 rounded-full">
  <img   src={review?.image}  alt={review?.name}/>
  </div>
</div>
<h3 className="text-xl font-medium text-blue-500 mt-2">
                    {review?.name}
                  </h3>
                </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </Fade> 
    </section>
  );
};

export default Review;

