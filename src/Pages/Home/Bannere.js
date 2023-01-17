import React from 'react';
import chair from "../../assets/images/chair.png"

const Bannere = () => {
    return (
        <div className="card lg:card-side sm:flex sm:flex-col-reverse  bg-base-100 shadow-xl lg:m-20 md:m-4 sm:m-2 lg:p-20 md:p-8 sm:p-4">

            <div className="card-body">
                <h2 className="card-title lg:text-5xl sm:text-3xl font-extrabold">Your New Smile Starts Here..</h2>
                <p className='lg:text-xl  font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit possimus enim sit, commodi quo optio! Numquam ad laborum cum nam!</p>
                <div className="card-actions">
                    <button className="btn bg-emerald-500 text-white border-slate-200">Get Started</button>
                </div>
            </div>
            <figure><img src={chair} alt="Movie" /></figure>

        </div>
    );
};

export default Bannere;