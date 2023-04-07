import React from 'react';

const Cavity = () => {
    return (
        <div className='md:flex lg:flex justify-center items-center sm:w-full md:w-3/5 lg:w-5/6  mx-auto'>
            <div>
                <img src="https://img.freepik.com/free-vector/dental-care-set-icons_24877-58879.jpg?w=740&t=st=1680887462~exp=1680888062~hmac=b318dbe2c16609c105c5edb613f7aec028e4669ca614c4ea7c3257be747a5f3b" alt="" />
            </div>
            <div className='m-8'>
                <h1 >Root Cause : <span className='text-2xl font-bold text-sky-600'>Cavities</span></h1>
                <p className='text-xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, placeat! Amet, provident hic aspernatur cupiditate nemo veritatis nostrum et harum? Dolores doloribus et quae labore excepturi, voluptate id error officia!</p>
                <p>
                    Doctor : Dr. Anagha Menen <br />
                    Patient : Alton Pittman <br />
                    Diagnosis : Early stage Cavities
                </p>
            </div>
        </div>
    );
};

export default Cavity;