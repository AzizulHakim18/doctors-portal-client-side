import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Context/UserContexts';
import { success } from 'daisyui/src/colors';

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');
    console.log(name)

    const { user } = useContext(AuthContext);
    const PersonName = user?.displayName;
    const personEmail = user?.email;


    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const PersonName = form.name.value;
        const PersoneEmail = form.email.value;
        const slot = form.slot.value;
        const phone = form.phone.value;


        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: PersonName,
            slot,
            email: PersoneEmail,
            phone
        }
        console.log(booking);
        fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null)
                    refetch()
                    toast.success("Successfully booked")
                }
            })


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
                        <input name='name' readOnly type="text" placeholder="Full Name" value={PersonName} className="input w-full max-w-xs input-bordered" />
                        <input name='email' readOnly type="email" placeholder="Email" value={personEmail} className="input w-full max-w-xs input-bordered" />
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