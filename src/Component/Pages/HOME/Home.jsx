
import React from 'react';
import Slider from './Slider/Slider';
import Subscribe from './Sibcribe/Sibcribe';
import Contact from '../Contact/Contact';
import ParallaxMessag from './ParallaxMessage/ParallaxMessag';
import Container from '../../Shared/Contanier/Container';

const Home = () => {
    return (
        <div>
<Slider></Slider>
<Container>
<Subscribe></Subscribe>
<ParallaxMessag></ParallaxMessag>
<Contact></Contact>
</Container>
        </div>
    );
};

export default Home;