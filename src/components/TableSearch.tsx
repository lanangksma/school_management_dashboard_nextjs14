import Image from "next/image";
import React from "react";

const TableSearch = () => {
    return (
        <div className="">
            <div className="w-full md:w-auto flex md:flex items-center gap-0.5 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
                <Image src="/icons/search.svg" alt="search" width={24} height={24}/>
                <input type="text" placeholder="Search..." className="w-[200px] p-2 bg-transparent outline-none"/>
            </div>
        </div>
    );
};

export default TableSearch;