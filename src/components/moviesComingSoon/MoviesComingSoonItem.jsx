import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './style/MoviesComingSoon.css'
import { useDispatch } from 'react-redux'
import { openOverlay } from '../../store/slices/manageOverlaySlice'



const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];


function MoviesComingSoonItem({ movie }) {

    const dispatch = useDispatch()

    const openOverlayTrailer = (movie) => {
        dispatch(openOverlay(movie.id))
    }

    const movieDate = new Date(movie.release_date)
    return (
        <div className='movie-trailer-avatars'>
            <button onClick={() => openOverlayTrailer(movie)} className='movie-trailer-avatar-button'>
                <div className='avatar-border'>
                    <Avatar
                        alt="Remy Sharp"
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        sx={{ width: 100, height: 100 }}
                    />
                    <div className='vision-date'>{movieDate.getDay()} {monthNames[movieDate.getMonth()]}</div>
                </div>
                <div className='movie-title'>{movie.title}</div>
            </button>
        </div>
    )
}

export default MoviesComingSoonItem