import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Services = () => {
  const [Books, setBooks] = useState([])
  useEffect(() => {
    const Fetch = async () => {
      try {
        const response = await axios.get('/api/course/getCourse')
        console.log(response.data)
        setBooks(response.data)
      } catch (error) {
        console.error(error)

      }
    }
    Fetch()

  }, [])
  return (
    <>
      <Navbar />
      <div className="dark:bg-slate-900">

        <h3 className='w-5/6 m-auto text-2xl text-center text-pink-600 pt-10'>A huge variety on following topics are available. Please visit our store or order online..
        </h3>
        <div className='min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[98%] m-auto lg:grid-cols-4 '>
          {Books.map((data, index) => {
            return (
              <div key={index} className="card shadow-custom border-slate-500 m-1 hover:-translate-y-1 duration-200 text-gray-500">
                <figure>
                  <img
                    className='w-full h-40'
                    src={data.image}
                    alt="Shoes" />
                </figure>
                <div className="p-2">
                  <h3 className="text-xl">
                    {data.name}
                    <div className="badge badge-secondary">{data.cost}</div>
                  </h3>
                  <div>Offered By </div>
                  <div> {data.provider} </div>

                  <div>
                    <button className="px-2 py-1 text-xs focus:ring-2 bg-teal-500 text-white rounded-md">
                      Get Started
                    </button></div>
                </div>
              </div>

            )
          })}

        </div>
        <Footer />
      </div>
    </>
  )
}

export default Services