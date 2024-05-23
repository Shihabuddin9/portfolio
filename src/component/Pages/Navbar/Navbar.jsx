import { NavLink } from "react-router-dom";
import './Navbar.css'
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const links = <>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </>


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <div className="navbar-style xl:mx-20 lg:mx-10">
                <div className="navbar-start flex justify-arounds items-center">
                    <div onClick={toggleMenu} className="dropdown">
                        <div onClick={toggleMenu} tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                        <div className={`fixed left-0 top-0 z-30 flex h-screen w-full bg-white shadow-lg transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                            <ul onClick={toggleMenu} tabIndex={0} className="menu menu-sm dropdown-content mt-10 z-[1] p-2 space-y-5 ml-28">
                                {links}
                            </ul>
                            <button onClick={toggleMenu} className="top-5 text-3xl absolute right-10">X</button>
                        </div>
                    </div>
                    <h1 className="text-xl font-extrabold"><span className="common-bg-color px-3 py-1 rounded-full text-white">S</span><span>hihab</span></h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 xl:space-x-16 lg:space-x-10 font-medium">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
