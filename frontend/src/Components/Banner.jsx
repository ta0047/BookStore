import React from 'react'
import BannerBook2 from '../images/BannerBook2.jpg'
const Banner = () => {
    return (
        <div className="hero min-h-screen dark:bg-slate-900 text-gray-500">
            
            <div className="hero-content flex-col md:flex-row-reverse">
                <div className="w-full md:w-[50%]  ">

                    <img src={BannerBook2} alt="" className='shadow-gray-600 rounded-tl-[100px] rounded-br-[100px]'/>
                </div>
                <div className='w-full md:w-[50%]'>
                    <h1 className="text-5xl font-bold">Welcome to Book Store</h1>
                    <p className="py-6">
                        Knowledge is power always try to learn something new. We have huge varity of books in our store. Feedback is always welcome. Search your favorite book now.
                    </p>
                    <label className=" dark:bg-slate-900 text-gray-500 input input-bordered input-primary flex items-center gap-2 w-full sm:w-[70%]">
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
                        <input type="text" className="grow " placeholder="Enter Book Title Here" />
                    </label>
                    <button className="btn btn-primary rounded-md text-white mt-3">SEARCH</button>
                </div>
            </div>
        </div>)
}

export default Banner