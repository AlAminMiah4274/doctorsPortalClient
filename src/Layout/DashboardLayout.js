import React, { useContext } from "react";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import { AuthContext } from "../Context/AuthProvider";

const DashboardLayout = () => {

    const { user } = useContext(AuthContext)

    const [isAdmin] = useAdmin(user?.email);

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
                        <li><Link to="/dashboard">My Appointment</Link></li>
                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/allUsers">All Users</Link></li>
                                <li><Link to="/dashboard/addDoctor">Add a doctor</Link></li>
                                <li><Link to="/dashboard/manageDoctor">Manage Doctors</Link></li>
                            </>
                        }
                    </ul>

                </div>

            </div>
        </div>
    );
};

export default DashboardLayout;