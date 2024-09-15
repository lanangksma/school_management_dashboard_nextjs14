"use client"

import {BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const data = [
    {
        name: 'Mon',
        Present: 67,
        Absent: 2,
    },
    {
        name: 'Tue',
        Present: 65,
        Absent: 4,
    },
    {
        name: 'Wed',
        Present: 60,
        Absent: 3,
    },
    {
        name: 'Thu',
        Present: 50,
        Absent: 7,
    },
    {
        name: 'Fri',
        Present: 60,
        Absent: 2,
    },
];

const AttendanceChart = () => {
    return (
        <div className="bg-white rounded-lg p-4 h-full">
            {/*TITLE*/}
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Attendance</h1>
                <span className="material-symbols-outlined text-black">more_horiz</span>
            </div>
            {/*CHART*/}
            <ResponsiveContainer width="100%" height="90%">
                <BarChart width={500} height={300} data={data} barSize={20}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB"/>
                    <XAxis dataKey="name" axisLine={false} tick={{fill: "#9CA3AF"}} tickLine={false} />
                    <YAxis axisLine={false} tick={{fill: "#9CA3AF"}} tickLine={false}/>
                    <Tooltip contentStyle={{borderRadius: "10px", borderColor: "lightgray"}}/>
                    <Legend align="left" verticalAlign="top" wrapperStyle={{paddingTop: "20px", paddingBottom: "40px"}}/>
                    <Bar dataKey="Present" fill="#FAE27C" radius={[10,10,0,0]}/>
                    <Bar dataKey="Absent" fill="#C3EBFA" radius={[10,10,0,0]}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AttendanceChart;