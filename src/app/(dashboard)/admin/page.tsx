import UserCard from "@/components/UserCard";
import CountChart from "@/components/CountChart";
import AttendanceChart from "@/components/AttendanceChart";

const AdminPage = () => {
    return (
        <div className="p-4 flex flex-col gap-4 md:flex-row">
            {/*LEFT SIDE*/}
            <div className="flex flex-col gap-8 w-full lg:w-2/3">
                {/*USER CARDS*/}
                <div className="flex gap-4 justify-between flex-wrap">
                    <UserCard type="student" />
                    <UserCard type="teacher" />
                    <UserCard type="parent" />
                    <UserCard type="staff" />
                </div>
                <div>
                    {/*MIDDLE CHARTS*/}
                    <div className="flex gap-4 flex-col lg:flex-row">
                        {/*COUNT CHART*/}
                        <div className="w-full lg:w-1/3 h-[450px]">
                            <CountChart/>
                        </div>
                        {/*ATTENDANCE CHART*/}
                        <div className="w-full lg:w-2/3 h-[450px]">
                            <AttendanceChart/>
                        </div>
                    </div>
                    {/*BOTTOM CHARTS*/}
                </div>
            </div>
            {/*RIGHT SIDE*/}
            <div className="w-full lg:w-1/3">R</div>
        </div>
    );
};

export default AdminPage;