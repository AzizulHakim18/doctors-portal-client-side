import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg'
const BannerFootsec = () => {
    return (

        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 lg:m-20 md:m-10 sm:m-8 lg:p-20 md:p-8 sm:p-4'>

            <div className="card text-white lg:card-side bg-emerald-500 shadow-xl p-4">
                <figure><img src={clock} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Opening Hours</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
            <div className="card text-white lg:card-side bg-emerald-500 shadow-xl p-4">
                <figure><img src={marker} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Visit Our Locations</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
            <div className="card text-white lg:card-side bg-emerald-500 shadow-xl p-4">
                <figure><img src={phone} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Contact Us Now</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
        </div>
    );
};

export default BannerFootsec;