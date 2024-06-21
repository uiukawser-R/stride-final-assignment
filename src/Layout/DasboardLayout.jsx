

import { Link, Outlet } from "react-router-dom";

const DasboardLayout = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="sm:col-span-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white min-h-1/2-screen md:min-h-screen p-4 sm:p-12">
                <ul>
                    <li className="border border-black p-2 sm:p-4 text w-full">
                        <Link to={"dashboard"}>Dashboard</Link>
                    </li>
                    <li className="border border-black p-2 sm:p-4 text w-full">
                        <Link to={"profile"}>Profile</Link>
                    </li>
                    <li className="border border-black p-2 sm:p-4 text w-full">
                        <Link to={"all-products"}>All Event</Link>
                    </li>
                    <li className="border border-black p-2 sm:p-4 text w-full">
                        <Link to={"add-products"}>Add Event</Link>
                    </li>
                    <li className="border border-black p-2 sm:p-4 text w-full">
                        <Link to={"/"}>Home</Link>
                    </li>
                </ul>
            </div>
            <div className=" sm:col-span-10 p-4 sm:p-20">
                <Outlet />
            </div>
        </div>
    );
};

export default DasboardLayout;

