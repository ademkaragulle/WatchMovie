import { Avatar, Badge, Box, Grid, Skeleton } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'

function MovieInfo({ movieData }) {
    const [actors, setActors] = useState('')



    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmRlMmI0YzIxMmUxZTQwZmQ0MjA3NDQ4ZjM2MzhlYyIsInN1YiI6IjY0NmY2NzRkZTIyZDI4MTZhZGY3YjVhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x7AqcjZYxomIS_sC7Hqvq9hiJF4asIvnwJCIBnxRgv8'
        }
    };

    const getMovieActors = async () => {
        const response = await axios(`https://api.themoviedb.org/3/movie/${movieData.id}/credits?language=en-US`, options)
        setActors(response)
    }

    useEffect(() => {
        getMovieActors()
    }, [movieData])


    return (
        <Box>
            <div className='movie-info-name'>
                <BsFillInfoCircleFill />
                <span>Information About <span style={{ color: '#dd3444' }}>{movieData.title}</span></span>
            </div>
            <Grid className='movie-info-detail' container sx={{ backgroundColor: '#212529' }}>
                <Grid item xs={12} md={4}>
                    <img className='movie-img-fluid' src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`} alt="" />
                </Grid>
                <Grid className='movie-info-detail-items' item xs={12} md={8}>
                    <div className='movie-overview'>{movieData.overview}</div>
                    <hr />
                    <div className='movie-info-detail-item'>
                        <AiFillStar style={{ color: '#ffc107' }} />
                        <span style={{ color: '#ffc107', fontWeight: 'bold' }}>IMDb: </span><span style={{ color: "#fff" }}>{movieData.vote_average.toFixed(1)}</span><span>/10</span>
                    </div>
                    <div className='movie-info-detail-item'>
                        Run Time:
                        <div className='movie-info-badge'>{movieData.runtime} minutes</div>
                    </div>
                    <div className='movie-info-detail-item'>
                        Country:
                        <div className='movie-info-badge'>{movieData.production_countries[0] ? movieData.production_countries[0].iso_3166_1 : '-'}</div>
                    </div>
                    <div className='movie-info-detail-item'>
                        Release Date:
                        <div className='movie-info-badge'>{movieData.release_date}</div>
                    </div>
                    <div className='movie-info-detail-item'>
                        Genre:
                        {
                            movieData.genres.map((item) => <div key={item.id} className='movie-info-badge'>{item.name}</div>)
                        }
                    </div>
                    <div className='movie-info-detail-item'>
                        <div>Actor and Actress:</div>
                        {
                            <div className='actors-avatars'>
                                {actors == '' ? null : actors.data.cast.map((actor, index) => {
                                    return (
                                        index < 9 ?
                                            <div key={index} className='actors-avatar-badge'>
                                                <Avatar sx={{ width: '32px', height: '32px' }} alt="Remy Sharp" src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} />
                                                <div>{actor.name}</div>
                                            </div>
                                            : ''
                                    )
                                })}
                            </div>
                        }
                    </div>
                </Grid>
            </Grid>
        </Box>
    )
}

export default MovieInfo