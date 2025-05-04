import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import { FaServicestack, FaPhoneVolume, FaUserCircle,FaArrowUp } from "react-icons/fa";
const Footer = () => {
    const [ShowBtn, setShowBtn] = useState(false)
    useEffect(() => {
        const HandleScroll = () => {
            setShowBtn(window.scrollY > 500);
        };
        window.addEventListener('scroll', HandleScroll)
        return () => {
            window.addEventListener('scroll', HandleScroll)

        }
    }, [])
    const HandleTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }


    return (
        <footer className="dark:bg-slate-900 text-gray-500 footer footer-center bg-base-200  rounded p-10">
            <nav className="hidden sm:flex">
                <ul className="menu menu-horizontal px-1">
                    <Link to="/" className='btn btn-ghost btn-sm'><IoHome /><li>HOME</li></Link>
                    <Link to="/services" className='btn btn-ghost btn-sm'><FaServicestack /><li>SERVICES</li></Link>
                    <Link to="/contact" className='btn btn-ghost btn-sm'><FaPhoneVolume /><li>CONCACT</li></Link>
                    <Link to="/about" className='btn btn-ghost btn-sm'><FaUserCircle /><li>ABOUT</li></Link>
                </ul>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href='https://x.com/'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 48 48"
                            className="fill-current">
                            <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
                        </svg>
                    </a>
                    <a href='https://www.youtube.com/'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                        </svg>
                    </a>
                    <a href='https://web.facebook.com/'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                    </a>
                    {ShowBtn ? <button id='btn' onClick={HandleTop} className="btn btn-secondary  fixed top-[600px] right-3 rounded-full"><FaArrowUp /></button> : ""}

                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - This Book Store Application is developed by Tufail Ahmad</p>
            </aside>
        </footer>)
}

export default Footer