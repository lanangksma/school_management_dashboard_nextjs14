import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {role} from "@/lib/data";

interface MenuItem {
    icon: string;
    label: string;
    href: string;
    visible: string[];
}

interface MenuGroup {
    title: string;
    items: MenuItem[];
}

const menuItems: MenuGroup[] = [
    {
        title: "MENU",
        items: [
            {
                icon: "/icons/home.svg",
                label: "Home",
                href: "/",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/icons/teacher.svg",
                label: "Teachers",
                href: "/list/teachers",
                visible: ["admin", "teacher"],
            },
            {
                icon: "/icons/student.svg",
                label: "Students",
                href: "/list/students",
                visible: ["admin", "teacher"],
            },
            {
                icon: "/icons/parent.svg",
                label: "Parents",
                href: "/list/parents",
                visible: ["admin", "teacher"],
            },
            {
                icon: "/icons/subject.svg",
                label: "Subjects",
                href: "/list/subjects",
                visible: ["admin"],
            },
            {
                icon: "/icons/class.svg",
                label: "Classes",
                href: "/list/classes",
                visible: ["admin", "teacher"],
            },
            {
                icon: "/icons/lesson.svg",
                label: "Lessons",
                href: "/list/lessons",
                visible: ["admin", "teacher"],
            },
            {
                icon: "/icons/exam.svg",
                label: "Exams",
                href: "/list/exams",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/icons/assignment.svg",
                label: "Assignments",
                href: "/list/assignments",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/icons/grade.svg",
                label: "Results",
                href: "/list/results",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/icons/attendance.svg",
                label: "Attendance",
                href: "/list/attendance",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/icons/calendar.svg",
                label: "Events",
                href: "/list/events",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/icons/message.svg",
                label: "Messages",
                href: "/list/messages",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/icons/announcement.svg",
                label: "Announcements",
                href: "/list/announcements",
                visible: ["admin", "teacher", "student", "parent"],
            },
        ],
    },
    {
        title: "OTHERS",
        items: [
            {
                icon: "/icons/profile.svg",
                label: "Profile",
                href: "/profile",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/icons/settings.svg",
                label: "Settings",
                href: "/settings",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/icons/logout.svg",
                label: "Logout",
                href: "/logout",
                visible: ["admin", "teacher", "student", "parent"],
            },
        ],
    },
];

const Menu: React.FC = () => {
    return (
        <div className="mt-4 text-sm">
            {menuItems.map((item) => (
                <div className="flex flex-col gap-2" key={item.title}>
                    <span className="hidden lg:block text-gray-400 font-light my-4">{item.title}</span>
                    {item.items.map((item) => {
                        if (item.visible.includes(role)) {
                            return (
                                <Link href={item.href} key={item.label}
                                      className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-secnSky ">
                                    <Image src={item.icon} alt={item.label} width={20} height={20}/>
                                    <span className="hidden lg:block">{item.label}</span>
                                </Link>
                            )
                        }
                    })}
                </div>
            ))}
        </div>
    );
};

export default Menu;