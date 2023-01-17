import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import ApoientmentOptions from './ApoientmentOptions';
import BookingModal from './BookingModal/BookingModal';


const AvailableApointments = ({ selectedDate }) => {


    const [apointmentOptions, setApointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
    console.log(treatment)
    useEffect(() => {
        fetch('http://localhost:5000/appointmentOptions')
            .then(res => res.json())
            .then(data => setApointmentOptions(data))
    }, [])
    return (
        <div className='lg:m-20 md:m-10 sm:m-8 lg:p-20 md:p-8 sm:p-4'>
            <p className='text-2xl font-bold text-emerald-500 text-center my-8 py-4 '>Available Services on {format(selectedDate, 'PP')}</p>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                {
                    apointmentOptions.map(option => <ApoientmentOptions

                        key={option._id}
                        apointmentOption={option}
                        setTreatment={setTreatment}
                    ></ApoientmentOptions>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableApointments;