import { Container } from 'postcss';
import React from 'react';
import Slider from './Slider/Slider';
import Subscribe from './Sibcribe/Sibcribe';
import Contact from '../Contact/Contact';



const Home = () => {
    return (
        <div>
<Slider></Slider>
<Subscribe></Subscribe>
<Contact></Contact>
        </div>
    );
};

export default Home;