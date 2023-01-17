import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import treatement from '../../assets/images/treatment.png';

const Service = () => {
    return (
        <div>
            <h1>this is service section</h1>
            <div className='text-center'>
                <h1 className='text-3xl font-bold text-emerald-500'>Our Services</h1>
                <h3 className='text-5xl font-semibold tracking-wide'>Service We Provide</h3>
            </div>


            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 lg:m-20 md:m-10 sm:m-8 lg:p-20 md:p-8 sm:p-4 '>
                <div className="card w-96 mx-auto bg-base-100 shadow-xl hover:bg-emerald-500 hover:text-white ease-in-out duration-700">
                    <figure className="px-10 pt-10">
                        <img src={fluoride} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Fluride Treatement</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, sint.</p>
                    </div>
                </div>
                <div className="card w-96 mx-auto bg-base-100 shadow-xl hover:bg-emerald-500 hover:text-white ease-in-out duration-700">
                    <figure className="px-10 pt-10">
                        <img src={cavity} alt="Shoes" className="rounded-xl " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Cavity Filling</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam amet provident sed nostrum. Dolor, autem.</p>
                    </div>
                </div>
                <div className="card w-96 mx-auto bg-base-100 shadow-xl hover:bg-emerald-500 hover:text-white ease-in-out duration-700">
                    <figure className="px-10 pt-10">
                        <img src={whitening} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Teeth Whithening</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nihil temporibus aperiam suscipit. Quo, harum.</p>
                    </div>
                </div>
            </div>

            <div className='lg:m-20 md:m-10 sm:m-8 lg:p-20 md:p-8 sm:p-4 '>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img className='lg:w-full sm:w-1/2' src={treatement} alt="Album" /></figure>
                    <div className="card-body lg:p-20 md:p-12 sm:p-2">
                        <h2 className="card-title text-4xl font-bold">Exceptional Dental Care, on Your Terms</h2>
                        <p className='text-xl font-semibold'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <div className="card-actions">
                            <button className="btn bg-emerald-500">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;