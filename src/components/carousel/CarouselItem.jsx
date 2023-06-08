import React from 'react'
import CarouselItemBadge from './CarouselItemBadge'
import { AiFillStar } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import './Style/CarouselItem.css'

export const CarouselItem = ({ items }) => {
    return (
        <div className='carousel-item'>
            <div className='carousel-image' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${items.poster_path})` }}>
                <div className='carousel-info'>
                    <div className='carouser-Desc'>
                        {items.overview}
                    </div>
                    <div className='carousel-badges'>
                        {items.genre_ids.map((item) => {
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
