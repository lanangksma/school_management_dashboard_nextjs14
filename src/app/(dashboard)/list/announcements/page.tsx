import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import Link from "next/link";
import {announcementsData, role} from "@/lib/data";
import FormModal from "@/components/FormModal";

type Announcemnt = {
    id: number;
    title: string;
    class: string;
    date: string;
}

const columns = [
    {
        header: "Title", accessor: "title",
    },
    {
        header: "Student", accessor: "student",
    },
    {
        header: "Class", accessor: "class",
    },
    {
        header: "Date", accessor: "date", className: "hidden md:table-cell",
    },
    {
        header: "Actions", accessor: "action",
    },
]

const AnnouncemntListPage = () => {
    const renderRow = (item: Announcemnt) => (
        <tr
            key={item.id}
            className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-secnPurple"
        >
            <td className="flex items-center gap-4 p-4">
                {item.title}
            </td>
            <td>
                {item.class}
            </td>
            <td className="hidden md:table-cell">
                {item.date}
            </td>
            <td>
                <div className="flex items-center gap-2">
                    {role === "admin" && (
                        <>
                            <FormModal table="subject" type="update" id={item.id}/>
                            <FormModal table="subject" type="delete" data={item}/>
                        </>
                    )}
                </div>
            </td>
        </tr>
    );

    return (
        <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
            {/*TOP*/}
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold">All Announcemets</h1>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <TableSearch/>
                    <div className="flex items-center gap-4 self-end">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-primYellow">
                            <Image src={"/icons/filter.svg"} alt={"filter"} width={20} height={20}/>
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-primYellow">
                            <Image src={"/icons/sort.svg"} alt={"filter"} width={20} height={20}/>
                        </button>
                        {role === "admin" && (
                            <FormModal table="result" type="create"/>
                        )}
                    </div>
                </div>
            </div>
            {/*LIST*/}
            <Table columns={columns} renderRow={renderRow} data={announcementsData}/>
            {/*PAGINATION*/}
            <Pagination/>
        </div>
    );
};

export default AnnouncemntListPage;