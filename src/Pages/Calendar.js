import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calendar = () => {
    const [date,setDate] = useState(new Date())
    return (
        <div  className="container mx-auto text-center">
            <h2>Calendar</h2>
            <div  className="text-center">
            <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
            />
            <p className='text-green-500 text-2xl'>You select the date: {format(date, 'PP')}</p>
            </div>
        </div>
    );
};

export default Calendar;