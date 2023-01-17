
import React from 'react';

const ApoientmentOptions = ({ apointmentOption, setTreatment }) => {


    const { name, slots } = apointmentOption;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body text-center">
                    <h2 className=" text-emerald-500 text-2xl font-bold ">{name}</h2>
                    <p className='text-xl font-semibold '>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                    <p className='text-xl font-semibold '>{slots.length} Spaces Available</p>
                    <div className="card-actions justify-center">

                        <label
                            disabled={slots.length === 0}
                            htmlFor="booking-modal" onClick={() => setTreatment(apointmentOption)} className="btn bg-emerald-500 w-full">Book Appointment
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApoientmentOptions;