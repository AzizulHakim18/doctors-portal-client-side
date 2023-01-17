import React from 'react';
import "./MakeAppoinment.css";
import doctor from "../../assets/images/doctor.png";
const MakeAppoinment = () => {
    return (
        <div >
            <div className='background'>
                <div className="card lg:card-side shadow-xl">
                    <figure><img src={doctor} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold text-emerald-500 ">Appointment</h2>
                        <h2 className="card-title text-4xl font-bold text-white">Make an appointment Today</h2>
                        <p className='text-xl font-semibold text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <div className="card-actions ">
                            <button className="btn bg-emerald-500">Listen</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MakeAppoinment;