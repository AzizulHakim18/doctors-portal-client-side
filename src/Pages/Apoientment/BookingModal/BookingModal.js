import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');
    console.log(name)

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const slot = form.slot.value;
        const phone = form.phone.value;


        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: name,
            slot,
            email,
            phone
        }

        console.log(booking);
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center mb-2">{name}</h3>
                    <form onSubmit={handleBooking} action="" className='grid grid-cols-1 gap-2 mt-2 font-bold text-semibold'>
                        <input type="text" value={date} disabled className="input w-full max-w-xs input-bordered" />
                        <select name='slot' className="select select-bordered w-full max-w-xs ">

                            {
                                slots.map((slot, i) => <option
                                    key={i}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Full Name" className="input w-full max-w-xs input-bordered" />
                        <input name='email' type="email" placeholder="Email" className="input w-full max-w-xs input-bordered" />
                        <input name='phone' type="number" placeholder="Phone Number" className="input w-full max-w-xs input-bordered" />
                        <br />
                        <input type="submit" value="Submit" className='w-full text-xl font-bold bg-gray-500 text-white rounded-lg m-2 p-2' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;