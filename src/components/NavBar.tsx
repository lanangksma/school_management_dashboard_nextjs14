import React from 'react';
import Image from "next/image";

const NavBar = () => {
    return (
        <div className="flex items-center justify-between p-4">
            {/*SEARCH BAR*/}
            <div className="hidden md:flex items-center gap-0.5 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
                <Image src="/icons/search.svg" alt="search" width={24} height={24}/>
                <input type="text" placeholder="Search..." className="w-[200px] p-2 bg-transparent outline-none" />
            </div>
            {/*ICONS AND USER*/}
            <div className="flex items-center gap-6 justify-end w-full">
                <div className="bg-white rounded-full w-7 flex items-center justify-center cursor-pointer">
                    <Image src="/icons/message.svg" alt="message" width={24} height={24}/>
                </div>
                <div className="bg-white rounded-full w-7 flex items-center justify-center cursor-pointer relative">
                    <Image src="/icons/announcement.svg" alt="announcement" width={24} height={24}/>
                    <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">1</div>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs leading-3 font-medium">John Cena</span>
                    <span className="text-[10px] text-gray-500 text-right">Admin</span>
                </div>
                <Image src="/icons/avatar.svg" alt="avatar" width={24} height={24} className="rounded-full"/>
            </div>
        </div>
    );
};

export default NavBar;