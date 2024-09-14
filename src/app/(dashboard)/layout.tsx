import Link from "next/link";
import Logo from "../../../public/icons/Logo";
import Menu from "@/components/Menu"
import NavBar from "@/components/NavBar";


export default function DashboardLayout({
                                            children,
                                        }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen flex">
            {/*LEFT*/}
            <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
                <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
                    <Logo/>
                    <span className="hidden lg:block">DashSchool</span>
                </Link>
                <Menu />
            </div>
            {/*RIGHT*/}
            <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
                <NavBar/>
                {children}
            </div>
        </div>
    );
}
