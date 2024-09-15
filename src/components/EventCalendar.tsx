"use client"

import {useState} from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
    {
        id: 1,
        title: "Annual Tech Conference",
        time: "10:00 AM - 4:00 PM",
        description: "Join us for our Annual Tech Conference featuring industry leaders, keynote speakers, and networking opportunities. Learn about the latest trends and innovations in technology.",
    },
    {
        id: 2,
        title: "Product Launch Webinar",
        time: "2:00 PM - 3:00 PM",
        description: "Be the first to witness the launch of our new product. This webinar will provide an in-depth look at the features and benefits, along with a Q&A session with our product team.",
    },
    {
        id: 3,
        title: "Monthly Team Meeting",
        time: "9:00 AM - 11:00 AM",
        description: "Our monthly team meeting where we review progress, set goals for the upcoming month, and discuss any challenges or opportunities. Attendance is mandatory for all team members.",
    },
];

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
    return (
        <div className="bg-white p-4 rounded-md">
            <Calendar onChange={onChange} value={value}/>
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold my-4">Events</h1>
                <span className="material-symbols-outlined text-black">more_horiz</span>
            </div>
            <div className="flex flex-col gap-4">
                {events.map((event) => (
                    <div className="p-5 border-2 border-gray-100 border-t-4 odd:border-t-primSky even:border-t-primPurple" key={event.id}>
                        <div className="flex items-center justify-between">
                            <h1 className="font-semibold text-gray-600">{event.title}</h1>
                            <span className="text-gray-300 text-xs">{event.time}</span>
                        </div>
                        <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventCalendar;