import React from 'react';
import DentalImplant from './DentalImplant';
import Cavity from './Cavity';
import WhiteFillings from './WhiteFillings';

const About = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-emerald-500 text-center'>About Us</h1>
            <DentalImplant></DentalImplant>
            <Cavity></Cavity>
            <WhiteFillings></WhiteFillings>
        </div>
    );
};

export default About;