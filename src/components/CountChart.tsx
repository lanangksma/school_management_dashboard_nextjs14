"use client"

import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import Image from "next/image";

const data = [
    {
        name: 'total',
        count: 100,
        fill: '#FFFFFF',  // Warna untuk bagian terisi
    },
    {
        name: 'Girls',
        count: 45,
        fill: '#FAE27C',
    },
    {
        name: 'Boys',
        count: 50,
        fill: '#C3EBFA',
    },
];

const CountChart = () => {
    return (
        <div className="bg-white rounded-xl w-full h-full p-4">
            {/*TITLE*/}
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Students</h1>
                <span className="material-symbols-outlined text-black">more_horiz</span>
            </div>
            {/*CHART*/}
            <div className="relative w-full h-[75%]">
                <ResponsiveContainer>
                    <RadialBarChart
                        cx="50%"
                        cy="50%"
                        innerRadius="40%"
                        outerRadius="100%"
                        barSize={32}
                        data={data}
                    >
                        {/* Radial bars with white background */}
                        <RadialBar
                            background
                            dataKey="count"
                            cornerRadius={5} // Optional: adds rounded corners
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image
                    src="/icons/maleFemale.png"
                    alt="Students"
                    width={50}
                    height={50}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
            </div>
            {/*BOTTOM*/}
            <div className="flex justify-center gap-16">
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 rounded-full bg-primSky"/>
                    <h1 className="font-bold text-xs">1.222</h1>
                    <h2 className="text-xs text-gray-400">Boys (55%)</h2>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 rounded-full bg-primYellow"/>
                    <h1 className="font-bold text-xs">1.222</h1>
                    <h2 className="text-xs text-gray-400">Girls (45%)</h2>
                </div>
            </div>
        </div>
    );
};

export default CountChart;