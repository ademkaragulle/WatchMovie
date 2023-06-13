import React from 'react'
import CarouselItemBadge from './CarouselItemBadge'
import { AiFillStar } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import './Style/CarouselItem.css'

const genres = [
    {
        "id": 28,
        "name": "Action"
    },
    {
        "id": 12,
        "name": "Adventure"
    },
    {
        "id": 16,
        "name": "Animation"
    },
    {
        "id": 35,
        "name": "Comedy"
    },
    {
        "id": 80,
        "name": "Crime"
    },
    {
        "id": 99,
        "name": "Documentary"
    },
    {
        "id": 18,
        "name": "Drama"
    },
    {
        "id": 10751,
        "name": "Family"
    },
    {
        "id": 14,
        "name": "Fantasy"
    },
    {
        "id": 36,
        "name": "History"
    },
    {
        "id": 27,
        "name": "Horror"
    },
    {
        "id": 10402,
        "name": "Music"
    },
    {
        "id": 9648,
        "name": "Mystery"
    },
    {
        "id": 10749,
        "name": "Romance"
    },
    {
        "id": 878,
        "name": "Science Fiction"
    },
    {
        "id": 10770,
        "name": "TV Movie"
    },
    {
        "id": 53,
        "name": "Thriller"
    },
    {
        "id": 10752,
        "name": "War"
    },
    {
        "id": 37,
        "name": "Western"
    }
]




export const CarouselItem = ({ items }) => {


    const findgenres = []

    const findGenre = (arr, genres) => {
        arr.map((genre_id) => {
            genres.map((genre) => {
                if (genre_id === genre.id) {
                    findgenres.push(genre.name)
                }
            })
        })
    }
    items.genre_ids ? findGenre(items.genre_ids, genres) : null



    return (
        <div className='carousel-item'>
            <div className='carousel-image' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${items.poster_path})` }}>
                <div className='carousel-info'>
                    <div className='carouser-Desc'>
                        {items.overview}
                    </div>
                    <div className='carousel-badges'>
                        {findgenres.map((item) => {
                            return (
                                <CarouselItemBadge key={item} item={item} />
                            )
                        }
                        )}
                    </div>
                </div>
            </div>
            <div className='carousel-movie-bottom-item'>
                <div className='carousel-movie-item'>
                    <div>
                        {items.release_date.split('-')[0]}
                    </div>
                    <div>
                        <FaComment style={{ margin: 'auto 5px auto 0 ' }} />
                        {Math.floor(Math.random() * 100)}
                    </div>
                    <div className='imdb'>
                        <AiFillStar />
                        <span >{items.vote_average}</span>
                    </div>
                </div>
                <div className='carousel-movie-title'>
                    {items.title}
                </div>
            </div>
            <div className='carousel-overlay'></div>

        </div>
    )
}
