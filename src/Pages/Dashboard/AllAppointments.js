import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContexts';
import { useQuery } from '@tanstack/react-query';

const AllAppointments = () => {


    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/allappointments`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data
        }
    })
    console.log(bookings);

    return (
        <div>
            <h3 className='text-xl font-semibold mb-4'>All Appointments</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.length && bookings?.map((booking, i) => <tr key={booking._id}>

                                <th>{i + 1}</th>
                                <td>{booking.patient}</td>
                                <td>{booking.treatment}</td>
                                <td>{booking.appointmentDate}</td>
                                <td>{booking.slot}</td>
                                <td ><button className='btn btn-sm btn-info'>Payment Done</button></td>
                                <td><button className='btn btn-error btn-sm'>Delete</button></td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllAppointments;