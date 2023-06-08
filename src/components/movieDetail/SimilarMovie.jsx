import { Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { BsSearchHeart } from 'react-icons/bs'
import './MovieDetail.css'
import axios from 'axios'
import SimilarMovieItem from './SimilarMovieItem'
import { Link } from 'react-router-dom'

function SimilarMovie({ movieData, setClosePosterPath }) {
    const [similarMovies, setSimilarMovies] = useState('')

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmRlMmI0YzIxMmUxZTQwZmQ0MjA3NDQ4ZjM2MzhlYyIsInN1YiI6IjY0NmY2NzRkZTIyZDI4MTZhZGY3YjVhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x7AqcjZYxomIS_sC7Hqvq9hiJF4asIvnwJCIBnxRgv8'
        }
    };


    const getSimilarMovie = async () => {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieData.id}/similar?language=en-US&page=1`, options)
        setSimilarMovies(response.data.results)
    }

    useEffect(() => {
        getSimilarMovie()
    }, [movieData])



    return (
        <div>
            <Box>
                <div className='movie-info-name'>
                    <BsSearchHeart color='#dd3444' />
                    <span>More Like This Movie</span>
                </div>
                <div className='simalar-movie-info-detail' style={{ backgroundColor: '#212529' }}>
                    {similarMovies ?
                        similarMovies.map((movie, index) => {
                            if (index < 4) {
                                return (
                                    <Link onClick={() => setClosePosterPath(false)} key={index} to={`/movie-detail-${movie.id}`}>
                                        <SimilarMovieItem movieItem={movie} />
                                    </Link>
                                )
                            }
                        }) : null
                    }
                </div>
            </Box >
        </div >
    )
}

export default SimilarMovie