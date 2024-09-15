const Announcements = () => {
    return (
        <div className="bg-white p-4 rounded-md">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Announcemets</h1>
                <span className="text-gray-400 text-xs">View All</span>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                <div className="bg-secnSky rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">New Feature Launch</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2024-09-15</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">We are excited to announce the launch of a new feature
                        that will enhance your user experience. Be sure to check out the latest updates on your
                        dashboard.</p>
                </div>
                <div className="bg-secnPurple rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">Scheduled Maintenance</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2024-09-20</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">We will be performing scheduled system maintenance on
                        September 20, 2024. Services may be unavailable during this time. We apologize for any
                        inconvenience this may cause.</p>
                </div>
                <div className="bg-secnYellow rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">Webinar Invitation</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2024-10-05</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">Don’t miss our upcoming webinar on the latest trends in
                        technology. Register now and get the chance to learn from industry experts.</p>
                </div>

            </div>
        </div>
    );
};

export default Announcements;