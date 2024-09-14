import React from 'react';
import Link from "next/link";
import Image from "next/image";

interface MenuItem {
    icon: string;
    label: string;
    href: string;
}

interface MenuGroup {
    title: string;
    items: MenuItem[];
}

const menuItems: MenuGroup[] = [
    {
        title: "MENU",
        items: [
            { icon: "/icons/home.svg", label: "Home", href: "/" },
            { icon: "/icons/teacher.svg", label: "Teachers", href: "/teacher" },
            { icon: "/icons/student.svg", label: "Students", href: "/student" },
            { icon: "/icons/parent.svg", label: "Parents", href: "/parent" },
            { icon: "/icons/class.svg", label: "Classes", href: "/class" },
            { icon: "/icons/lesson.svg", label: "Lessons", href: "/lessons" },
            { icon: "/icons/exam.svg", label: "Exams", href: "/exam" },
            { icon: "/icons/assignment.svg", label: "Assignments", href: "/assignments" },
            { icon: "/icons/attendance.svg", label: "Attendance", href: "/attendance" },
            { icon: "/icons/calendar.svg", label: "Calendar", href: "/calendar" },
            { icon: "/icons/message.svg", label: "Messages", href: "/messages" },
            { icon: "/icons/announcement.svg", label: "Announcements", href: "/announcements" },
        ],
    },
    {
        title: "OTHERS",
        items: [
            { icon: "/icons/profile.svg", label: "Profile", href: "/profile" },
            { icon: "/icons/settings.svg", label: "Settings", href: "/settings" },
            { icon: "/icons/logout.svg", label: "Logout", href: "/logout" },
        ],
    }
]

const Menu: React.FC = () => {
    return (
        <div className="mt-4 text-sm">
            {menuItems.map((item) => (
                <div className="flex flex-col gap-2" key={item.title}>
                    <span className="hidden lg:block text-gray-400 font-light my-4">{item.title}</span>
                    {item.items.map((item) => (
                        <Link href={item.href} key={item.label} className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2">
                            <Image src={item.icon} alt={item.label} width={20} height={20} />
                            <span className="hidden lg:block">{item.label}</span>
                        </Link>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Menu;