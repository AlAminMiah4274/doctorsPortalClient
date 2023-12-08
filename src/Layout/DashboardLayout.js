import React from "react";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer lg:drawer-open">

                <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />

                {/* page content */}
                <div className="drawer-content bg-green-50">

                    <Outlet></Outlet>

                </div>

                {/* drawer content */}
                <div className="drawer-side">
                    <label htmlFor="dashboardDrawer" aria-label="close sidebar" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-80 min-h-full text-base-content">
                        <li><Link>My Appointment</Link></li>
                        <li><Link>Sidebar Item 2</Link></li>
                    </ul>

                </div>

            </div>
        </div>
    );
};

export default DashboardLayout;