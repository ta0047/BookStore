import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'
import axios from 'axios'
import Login from './Login';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const UserInfo = {
                "name": data.name,
                "email": data.email,
                "password": data.password
            }
            const response = await axios.post('/api/user/signup', UserInfo);
            if (response.data) {                
                console.log(response.data);
                toast.success("Signup Successfully");
                localStorage.setItem('users', JSON.stringify(UserInfo));
            }
        } catch (error) {
            toast.warn("Invalid credentials or email already exists");
           }
    }
    return (
        <div className="w-72 lg:w-96 m-auto p-5 mt-10 shadow-custom rounded-lg  text-gray-700">
            <Link to='/' className="btn btn-sm btn-circle btn-ghost relative -right-56 lg:-right-80 -top-3 bg-gray-300 text-gray-400"
                onClick={() => { document.getElementById('my_modal_4').close() }}
            >✕</Link>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
                <div className=''>
                    <h1 className='text-3xl text-center'>SIGNUP</h1>
                    <label htmlFor="email" className="block text-lg font-medium mb-2 ">
                        Name
                    </label>
                    <input
                        {...register('name', { required: true })}
                        type="text"
                        className="input input-bordered input-primary w-full "
                        placeholder="Enter your name"
                    />
                    {errors.name && <span className='text-red-500'>This field is required</span>}
                </div>
                <div>
                    <label htmlFor="email" className="block text-lg font-medium mb-2 ">
                        Email Address
                    </label>
                    <input
                        {...register('email', { required: true })}
                        type="email"
                        className="input input-bordered input-primary w-full "
                        placeholder="Enter your email"
                    />
                    {errors.email && <span className='text-red-500'>This field is required</span>}
                </div>
                <div>
                    <label htmlFor="email" className="block text-lg font-medium mb-2">
                        Password
                    </label>
                    <input
                        {...register('password', { required: true })}
                        type="password"
                        className="input input-bordered input-primary w-full "
                        placeholder="Enter your password"
                    />
                    {errors.password && <span className='text-red-500'>This field is required</span>}
                </div>
                <div className=''>
                    <button
                        type="submit"
                        className="btn btn-primary me-9 btn-sm">
                        SIGNUP
                    </button>
                </div>
            </form>
            Already Account?
            <button className="btn btn-link " onClick={() => { document.getElementById('my_modal_3').showModal() }} >Login
            </button>
            <Login/>
        </div>
    )
}
export default Signup
