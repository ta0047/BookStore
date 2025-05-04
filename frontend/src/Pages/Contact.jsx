import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import axios from 'axios'
import { useForm } from 'react-hook-form'
const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm(); 
  const onSubmit = async (data) => {
    try {
      const NewContact={
        name:data.name,
        email:data.email,
        message:data.message
      }
      const response =await axios.post('/api/contact/newContact',NewContact)
      console.log(response.data)
    } catch (error) {
      console.error(error);
      
    }
  }
  return (
    <>
      <Navbar />
      <div className='min-h-screen dark:bg-slate-900 text-gray-400'>
        <div className="max-w-lg mx-auto p-4">
          <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-medium mb-2 dark:bg-slate-900">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                {...register('name', { required: true })}
                className="input input-bordered input-primary w-full dark:bg-slate-900"
                placeholder="Enter your full name"
              />
              {errors.name && <span className='text-red-500'>This field is required</span>}
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2 dark:bg-slate-900">
                Email Address
              </label>
              <input
                {...register('email', { required: true })}
                type="email"
                className="input input-bordered input-primary w-full dark:bg-slate-900"
                placeholder="Enter your email"
              />
              {errors.email && <span className='text-red-500'>This field is required</span>}
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium mb-2">
                Your Message
              </label>
              <textarea
                {...register('message', { required: true, maxLength: 100 })}
                className="textarea textarea-bordered textarea-primary w-full dark:bg-slate-900"
                placeholder="Write your message here"
                rows="4"
              />
              {errors.message && <span className='text-red-500'>This field is required</span>}
            </div>
            <div>
              <button
                type="submit"
                className="btn btn-primary w-full"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact