import Image from "next/image";

const UserCard = ({type}: { type: string }) => {
    return (
        <div className="rounded-2xl odd:bg-primPurple even:bg-primYellow p-4 flex-1 min-w-[130px]">
            <div className="flex justify-between items-center">
                <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">2024/5</span>
                <span className="material-symbols-outlined text-white">more_horiz</span>
                {/*<Image src="/icons/more.svg" alt="more" width={24} height={24}/>*/}
            </div>
            <h1 className="text-2xl font-semibold my-4">1,244</h1>
            <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
        </div>
    );
};

export default UserCard;