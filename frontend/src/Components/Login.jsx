import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { toast } from 'react-toastify';
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const UserLogin = {
            "email": data.email,
            "password": data.password
        }
        try {
            const response = await axios.post('/api/user/login', UserLogin);
            if (response) {
                toast.success("Login Successfull")
                console.log(response.data);
                localStorage.setItem('users', JSON.stringify(UserLogin));

            }
        } catch (error) {
            toast.warn("Invalid Email or Password");
            console.error("Login Failed invalid credentials");
        }
    }

    return (
        <dialog id="my_modal_3" className="modal sm:w-[460px] m-auto ">
    
            <div className="modal-box dark:bg-slate-900">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    onClick={() => { document.getElementById('my_modal_3').close() }}
                >✕</button>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <h1 className='text-3xl text-center'>LOGIN</h1>
                        <label htmlFor="email" className="block text-lg font-medium mb-2">
                            Email Address
                        </label>
                        <input
                            {...register('email', { required: true })}
                            type="email"
                            className="input input-bordered input-primary w-full  dark:bg-slate-900 "
                            placeholder="Enter your email"
                        />
                        {errors.email && <span className='text-red-500'>This field is required</span>}
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-lg font-medium mb-2">
                            Password
                        </label>
                        <input
                            {...register('password', { required: true })}
                            type="password"
                            className="input input-bordered input-primary w-full dark:bg-slate-900"
                            placeholder="Enter your password"
                        />
                        {errors.password && <span className='text-red-500'>This field is required</span>}
                    </div>

                    <div className=''>
                        <button
                            type="submit"
                            className="btn btn-primary btn-sm me-9">
                            LOGIN
                        </button>

                    </div>
                </form>
                Not Registered?
                <a href='signup' className="btn btn-link dark:bg-slate-900 text-gray-300" >Signup</a>
            </div>
        </dialog>
    )
}

export default Login