import React from 'react';

const DentalImplant = () => {
    return (
        <div className='md:flex lg:flex justify-center items-center sm:w-full md:w-3/5 lg:w-5/6  mx-auto'>
            <div className='m-8'>
                <h1 className='text-2xl font-bold text-sky-600'>Dental Implant</h1>
                <p className='text-xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, placeat! Amet, provident hic aspernatur cupiditate nemo veritatis nostrum et harum? Dolores doloribus et quae labore excepturi, voluptate id error officia!</p>
                <p>
                    Doctor : Dr. Hennah Krish <br />
                    Patient : Sean Bush <br />
                    Diagnosis : Missing Tooth
                </p>
            </div>
            <div>
                <img src="https://img.freepik.com/free-vector/dental-implants-anatomy-closeup-model_1284-15064.jpg?w=826&t=st=1680887018~exp=1680887618~hmac=178c57e4fe5f60c963ce4df2ec78a95e61b522ec57785594049c2cd7f2f35ac0" alt="" />
            </div>
        </div>
    );
};

export default DentalImplant;