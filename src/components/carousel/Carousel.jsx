import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CarouselItem } from './CarouselItem';
import axios from 'axios';
import { Link } from 'react-router-dom';


function CarouselSlide() {
    const [data, setData] = useState('')
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmRlMmI0YzIxMmUxZTQwZmQ0MjA3NDQ4ZjM2MzhlYyIsInN1YiI6IjY0NmY2NzRkZTIyZDI4MTZhZGY3YjVhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x7AqcjZYxomIS_sC7Hqvq9hiJF4asIvnwJCIBnxRgv8'
        }
    };

    const getCarouselItem = async () => {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        setData(response.data.results)
    }

    useEffect(() => {
        getCarouselItem()
    }, [])



    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1200 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 1200, min: 900 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 900, min: 600 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 2
        }
    };

    return (
        <div>
            {data ?
                <Carousel responsive={responsive}>
                    {
                        data.map((item) => {
                            return (
                                <Link key={item.id} to={`/movie-detail-${item.id}`}>
                                    <CarouselItem items={item} />
                                </Link>
                            )
                        })
                    }
                </Carousel>
                : null}

        </div>
    )
}

export default CarouselSlide