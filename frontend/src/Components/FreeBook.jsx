import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';

const FreeBook = () => {
    const [Book, setBook] = useState([]);
    useEffect(() => {
        const Fetch = async () => {
            try {
                const response = await axios.get('/api/book/getBook');
                console.log(response.data)
                setBook(response.data);

            } catch (error) {
                console.log(error)
            }

        }
        Fetch();
    }, [])

    var settings = {
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="min-h-screen dark:bg-slate-900">
            <div className="mx-8">
                <div className="slider-container rounded-xl text-gray-500">
                    <Slider {...settings}>
                        {Book.map((data, index) => {
                            return (
                                <div key={index} className="m-3 text-gray-500 shadow-custom rounded-xl hover:-translate-y-2 duration-200 ease-in">
                                    <figure className=''>
                                        <img src={data.image} className='rounded-t-xl w-full h-60' alt='Images' />
                                    </figure>
                                    <div className="px-2">
                                        <h2 className="card-title">{data.title}</h2>
                                        <h2 className="text-teal-600 text-xl">By: {data.author}</h2>
                                        <p className='w-full line-clamp-2'>{data.description}</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary btn-sm m-3 rounded-md">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default FreeBook;
