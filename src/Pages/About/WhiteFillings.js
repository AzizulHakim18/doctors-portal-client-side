import React from 'react';

const WhiteFillings = () => {
    return (
        <div className='md:flex lg:flex justify-center items-center sm:w-full md:w-3/5 lg:w-5/6  mx-auto'>
            <div className='m-8'>
                <h1 className='text-2xl font-bold text-sky-600'>White Fillings</h1>
                <p className='text-xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, placeat! Amet, provident hic aspernatur cupiditate nemo veritatis nostrum et harum? Dolores doloribus et quae labore excepturi, voluptate id error officia!</p>
                <p>
                    Doctor : Dr. Bora Tumnus <br />
                    Patient : Roy Ramirez <br />
                    Diagnosis : Bonding-broken Teeth
                </p>
            </div>
            <div>
                <img src="https://img.freepik.com/free-photo/dentist-white-teeth_624325-1623.jpg?w=996&t=st=1680887762~exp=1680888362~hmac=ebc335acb7da2c561644e6bac1ce89a51ff552f6dbbf95cb98d474bedad82f43" alt="" />
            </div>
        </div>
    );
};

export default WhiteFillings;