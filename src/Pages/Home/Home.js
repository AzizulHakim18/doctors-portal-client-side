import React from 'react';
import Bannere from './Bannere';
import BannerFootsec from './BannerFootsec';
import HomeContact from './HomeContact';
import MakeAppoinment from './MakeAppoinment';
import Service from './Service';
import Testimonials from './Testimonials';


const Home = () => {
    return (
        <div>
            <Bannere></Bannere>
            <BannerFootsec></BannerFootsec>
            <Service></Service>
            <MakeAppoinment></MakeAppoinment>
            <Testimonials></Testimonials>
            <HomeContact></HomeContact>
        </div>
    );
};

export default Home;