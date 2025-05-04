import React, { useState, useEffect } from 'react'
import Login from './Login';
import { Link } from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import { FaServicestack, FaPhoneVolume, FaUserCircle } from "react-icons/fa";
import { SiCoursera } from "react-icons/si";
import { FaBookOpen } from "react-icons/fa6";
const Navbar = () => {
    
    const [theme, settheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : "light")
    const element = document.documentElement;
    useEffect(() => {
        if (theme === 'dark') {
            element.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            document.body.classList.add('dark');
        }
        else {
            element.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            document.body.classList.remove('dark');
        }
    }, [theme])

    const [Sticky, setSticky] = useState(false)
    useEffect(() => {
        const HandleScroll = () => {
            if (window.scrollY > 0) {
                setSticky(true)
            }
            else {
                setSticky(false)
            }
        }
        window.addEventListener('scroll', HandleScroll);
        return () => {
            window.addEventListener('scroll', HandleScroll)
        }
    }, [])


    return (
        <div className={`navbar dark:bg-slate-900 text-gray-500 bg-base-100 shadow-slate-500 sticky top-0 z-50 ${Sticky && "shadow-md duration-150 ease-in-out"}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        // small screen menu
                        tabIndex={0}
                        className="dark:bg-slate-900 text-gray-500 menu menu-sm dropdown-content bg-base-100 rounded-md z-[1] mt-3 w-52 p-1">
                        <Link to="/" className='btn btn-ghost btn-sm'><IoHome /><li className='w-20 '>HOME</li></Link>
                        <Link to="/services" className='btn btn-ghost btn-sm'><FaServicestack /><li className='w-20'>SERVICES</li></Link>
                        <Link to="/contact" className='btn btn-ghost btn-sm'><FaPhoneVolume /><li className='w-20'>CONCACT</li></Link>
                        <Link to="/about" className='btn btn-ghost btn-sm'><FaUserCircle /><li className='w-20'>ABOUT</li></Link>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">BookStore</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {/* Large screen links */}
                    <Link to="/" className='btn btn-ghost btn-sm'><IoHome /><li>HOME</li></Link>
                
                    <li>
                        <details>
                            <summary className='btn btn-ghost btn-sm text-[14px] '><FaServicestack />SERVICES</summary>
                            <ul className="p-2 rounded-md dark:bg-slate-800 text-gray-500 w-full">
                                <li><Link to="/courses" className='btn btn-ghost btn-sm'><SiCoursera/>COURSES
                                    </Link></li>
                                <li><Link to="/books" className='btn btn-ghost btn-sm'><FaBookOpen />BOOKS</Link></li>
                            </ul>
                        </details>
                    </li>
                    <Link to="/contact" className='btn btn-ghost btn-sm'><FaPhoneVolume /><li>CONCACT</li></Link>
                    <Link to="/about" className='btn btn-ghost btn-sm'><FaUserCircle /><li>ABOUT</li></Link>

                   
   
                </ul>
            </div>


            <div className="navbar-end">
                <label className="dark:bg-slate-900 text-gray-500 input input-bordered input-sm flex items-center gap-2">
                    <input type="text" className="grow w-28" placeholder="Search" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>

                <label className="swap swap-rotate mx-5">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" className="theme-controller" value="synthwave" />

                    {/* sun icon */}

                    <svg
                        className="swap-off h-7 w-7 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        onClick={() => settheme(theme === 'light' ? 'dark' : 'light')}
                    >
                        <path
                            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>

                    {/* moon icon */}
                    <svg
                        className="swap-on h-7 w-7 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        onClick={() => settheme(theme === 'dark' ? 'light' : 'dark')}
                    >
                        <path
                            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                </label>
                <a className="btn btn-success btn-sm rounded-sm text-white" onClick={() => { document.getElementById('my_modal_3').showModal() }}>Login</a>
                <Login />
                {/* <a className="btn btn-success btn-sm">Login</a> */}

            </div>
        </div >)
}
export default Navbar