"use client";

import Image from "next/image";
import {useState, useEffect} from "react";
import dynamic from "next/dynamic";
// import TeacherForm from "@/components/forms/TeacherForm";
// import StudentForm from "@/components/forms/StudentForm";

const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
    loading: () => <h1>Loading...</h1>,
});
const StudentForm = dynamic(() => import("./forms/StudentForm"), {
    loading: () => <h1>Loading...</h1>,
});

const forms: {
    [key: string]: (type: "create" | "update", data?: any) => JSX.Element;
} = {
    teacher: (type, data) => <TeacherForm type={type} data={data}/>,
    student: (type, data) => <StudentForm type={type} data={data}/>
};

interface FormModalProps {
    table:
        | "teacher"
        | "student"
        | "parent"
        | "subject"
        | "class"
        | "lesson"
        | "exam"
        | "assignment"
        | "result"
        | "attendance"
        | "event"
        | "announcement";
    type: "create" | "update" | "delete";
    data?: any;
    id?: number;
}

const FormModal = ({table, type, data, id}: FormModalProps) => {
    const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
    const bgColor = type === "create" ? "bg-primYellow"
        : type === "update" ? "bg-primSky"
            : "bg-primPurple";
    const [open, setOpen] = useState(false);

    // Effect to handle ESC key press
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setOpen(false);
            }
        };

        if (open) {
            window.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [open]);

    const Form = () => {
        return type === "delete" && id ? (
            <form action="" className="flex flex-col gap-4">
                    <span className="text-center font-medium">
                        All data will be lost. Are you sure you want to delete this {table}?
                    </span>
                <button className="bg-red-700 text-white py-2 px-4 mt-2 rounded-md border-none">
                    Delete
                </button>
            </form>
        ) : type === "create" || type === "update" ? (
            forms[table](type, data)
        ) : (
            "Form not found!"
        );
    };

    return (
        <>
            <button
                className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
                onClick={() => setOpen(true)}
            >
                <Image src={`/icons/${type}.svg`} alt={type} width={16} height={16}/>
            </button>
            {open && (
                <div
                    className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center"
                >
                    <div
                        className="bg-white p-10 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] flex flex-col">
                        {/* Close button */}
                        <button
                            className="absolute top-4 right-4 w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full"
                            onClick={() => setOpen(false)}
                        >
                            <Image src="/icons/close.svg" alt="close" width={16} height={16}/>
                        </button>

                        {/* Form content */}
                        <Form/>
                        {/* Add your modal content here */}
                    </div>
                </div>
            )}
        </>
    );
};

export default FormModal;
