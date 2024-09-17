const Pagination = () => {
    return (
        <div className="flex items-center justify-between p-4 text-gray-500">
            <button disabled
                    className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
                Prev
            </button>
            <div className="flex items-center text-sm gap-2">
                <button className="px-2 rounded-sm bg-primSky">1</button>
                <button className="px-2 rounded-sm">2</button>
                <button className="px-2 rounded-sm">3</button>
                ...
                <button className="px-2 rounded-sm">10</button>
            </div>
            <button disabled
                    className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
                Next
            </button>
        </div>
    );
};

export default Pagination;