import Slider from './Slider/Slider';
import Subscribe from './Sibcribe/Sibcribe';
import ParallaxMessag from './ParallaxMessage/ParallaxMessag';
import Container from '../../Shared/Contanier/Container';
import useTitle from './../../../Hooks/useTitle';
import { useEffect } from 'react';
import Review from './Review/Review';
import About from './About/About';





const Home = () => {
    useTitle('Home'),
    useEffect(() => { 

 window.scrollTo(0, 0);

    }, []); 

    return (
        <div>
\
<Slider></Slider>

<Container>
<About></About>
<ParallaxMessag></ParallaxMessag>
<Review></Review>
<Subscribe></Subscribe>
</Container>
        </div>
    );
};


export default Home;