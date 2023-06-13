import React, { useEffect } from 'react'
import CarouselItemBadge from '../carousel/CarouselItemBadge'
import { FaComment } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'
import './Series.css'



const genres = [
    {
        "id": 10759,
        "name": "Action & Adventure"
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
        "id": 10762,
        "name": "Kids"
    },
    {
        "id": 9648,
        "name": "Mystery"
    },
    {
        "id": 10763,
        "name": "News"
    },
    {
        "id": 10764,
        "name": "Reality"
    },
    {
        "id": 10765,
        "name": "Sci-Fi & Fantasy"
    },
    {
        "id": 10766,
        "name": "Soap"
    },
    {
        "id": 10767,
        "name": "Talk"
    },
    {
        "id": 10768,
        "name": "War & Politics"
    },
    {
        "id": 37,
        "name": "Western"
    }
]




function SeriesListItem({ serieItem }) {
    console.log()
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
    serieItem.genre_ids ? findGenre(serieItem.genre_ids, genres) : null

    return (
        <div className='serie-item'>
            <div className='serie-image' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${serieItem.poster_path})` }}>
                <div className='serie-info'>
                    <div className='serie-Desc'>
                        {serieItem.overview ? serieItem.overview : 'Not Found Description For This Series'}
                    </div>
                    <div className='serie-badges'>
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
            <div className='serie-serie-bottom-item'>
                <div className='series-serie-item'>
                    <div>
                        {String(serieItem.first_air_date).substring(0, 4)}
                    </div>
                    <div>
                        <FaComment style={{ margin: 'auto 5px auto 0 ' }} />
                        {Math.floor(Math.random() * 100)}
                    </div>
                    <div className='imdb'>
                        <AiFillStar />
                        <span >{serieItem.vote_average}</span>
                    </div>
                </div>
                <div className='series-serie-title'>
                    {serieItem.name}
                </div>
            </div>
        </div>
    )

}

export default SeriesListItem