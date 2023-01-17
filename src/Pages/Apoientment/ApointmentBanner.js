
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const ApointmentBanner = ({ selectedDate, setSelectedDate }) => {




    return (
        <div className='hero'>
            <div className="hero-content flex-col lg:flex-row-reverse  shadow-xl">
                <figure><img className='m-4 p-4' src={chair} alt="Album" /></figure>


                <div className="card-body bg-emerald-500 rounded-md mx-20 ">

                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}

                    />

                    <p className='font-bold text-white'>You Have Selected Date: {format(selectedDate, 'PP')}</p>
                </div>
            </div>
        </div>
    );
};

export default ApointmentBanner;