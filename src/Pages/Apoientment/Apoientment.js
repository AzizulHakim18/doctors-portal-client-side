import React, { useState } from 'react';
import ApointmentBanner from './ApointmentBanner';
import AvailableApointments from './AvailableApointments';

const Apoientment = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div>
            <ApointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></ApointmentBanner>


            <AvailableApointments
                selectedDate={selectedDate}

            ></AvailableApointments>
        </div>
    );
};

export default Apoientment;