import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const Navbar = () => {

    // destructured auth elements 
    const { user, userLogOut } = useContext(AuthContext);

    // to log out the user 
    const handleUserLogOut = () => {

        // current user log out function from auth 
        userLogOut();
    };

    // item names for navbar
    const navmenuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
        <li><Link>About</Link></li>
        {
            user?.uid ?
                <>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><button onClick={handleUserLogOut}>Log Out</button></li>
                </>
                :
                <li><Link to="/login">Login</Link></li>
        }
    </>

    return (
        <div className="navbar">

            <div className="navbar-start">

                {/* dropdown menu for small devices */}
                <div className="dropdown">

                    {/* button for showing navbar menu items in small devices */}
                    <label tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    {/* navbar items for small devices */}
                    <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navmenuItems}
                    </ul>
                </div>

                {/* application logo or name */}
                <Link to="/" className="text-2xl font-bold">Doctors Portal</Link>

            </div>

            {/* navbar items for large devices */}
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navmenuItems}
                </ul>
            </div>

            {/* button for showing dashboard drawer in small device */}
            <label htmlFor="dashboardDrawer" tabIndex={1} role="button" className="btn btn-ghost lg:hidden navbar-end">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>

        </div>
    );
};

export default Navbar;