import React, { useEffect } from 'react'
import CarouselItemBadge from '../carousel/CarouselItemBadge'
import { FaComment } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'
import './MovieList.css'


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

function MovieListItem({ movieItem }) {


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
    movieItem.genre_ids ? findGenre(movieItem.genre_ids, genres) : null


    return (
        <div className='movie-item'>
            <div className='movie-image' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movieItem.poster_path})` }}>
                <div className='movie-info'>
                    <div className='movie-Desc'>
                        {movieItem.overview}
                    </div>
                    <div className='movie-badges'>
                        {
                            !findgenres ? null :
                                findgenres.map((item) => {
                                    return (
                                        <CarouselItemBadge key={item} item={item} />
                                    )
                                }
                                )

                        }
                    </div>
                </div>
            </div>
            <div className='movie-movie-bottom-item'>
                <div className='movies-movie-item'>
                    <div>
                        {String(movieItem.release_date).substring(0, 4)}
                    </div>
                    <div>
                        <FaComment style={{ margin: 'auto 5px auto 0 ' }} />
                        {Math.floor(Math.random() * 100)}
                    </div>
                    <div className='imdb'>
                        <AiFillStar />
                        <span >{movieItem.vote_average}</span>
                    </div>
                </div>
                <div className='movies-movie-title'>
                    {movieItem.title}
                </div>
            </div>
        </div>
    )

}

export default MovieListItem