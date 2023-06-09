import { Avatar, Badge, Box, Grid, Skeleton } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'

function SerieInfo({ movieData }) {
    const [actors, setActors] = useState('')


    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmRlMmI0YzIxMmUxZTQwZmQ0MjA3NDQ4ZjM2MzhlYyIsInN1YiI6IjY0NmY2NzRkZTIyZDI4MTZhZGY3YjVhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x7AqcjZYxomIS_sC7Hqvq9hiJF4asIvnwJCIBnxRgv8'
        }
    };

    const getMovieActors = async () => {
        const response = await axios(`https://api.themoviedb.org/3/tv/${movieData.id}/credits?language=en-US`, options)
        setActors(response)
    }

    useEffect(() => {
        getMovieActors()
    }, [movieData])


    return (
        <Box>
            <div className='serie-info-name'>
                <BsFillInfoCircleFill />
                <span>Information About <span style={{ color: '#dd3444' }}>{movieData.name}</span></span>
            </div>
            <Grid className='serie-info-detail' container sx={{ backgroundColor: '#212529' }}>
                <Grid item xs={12} md={4}>
                    <img className='img-fluid' src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`} alt="" />
                </Grid>
                <Grid className='serie-info-detail-items' item xs={12} md={8}>
                    <div className='serie-overview'>{movieData.overview}</div>
                    <hr />
                    <div className='serie-info-detail-item'>
                        <AiFillStar style={{ color: '#ffc107' }} />
                        <span style={{ color: '#ffc107', fontWeight: 'bold' }}>IMDb: </span><span style={{ color: "#fff" }}>{movieData.vote_average.toFixed(1)}</span><span>/10</span>
                    </div>
                    <div className='serie-info-detail-item'>
                        Episode Run Time:
                        <div className='serie-info-badge'>{movieData.episode_run_time[0]} minutes</div>
                    </div>
                    <div className='serie-info-detail-item'>
                        Seasons:
                        <div className='serie-info-badge'>{movieData.last_episode_to_air.season_number} Season</div>
                    </div>
                    <div className='serie-info-detail-item'>
                        Country:
                        <div className='serie-info-badge'>{movieData.origin_country[0] ? movieData.origin_country[0] : '-'}</div>
                    </div>
                    <div className='serie-info-detail-item'>
                        First Air Date:
                        <div className='serie-info-badge'>{movieData.first_air_date}</div>
                    </div>
                    <div className='serie-info-detail-item'>
                        Genre:
                        {
                            movieData.genres.map((item) => <div key={item.id} className='serie-info-badge'>{item.name}</div>)
                        }
                    </div>
                    <div className='serie-info-detail-item'>
                        <div>actor and actress:</div>
                        {
                            <div className='actors-avatars'>
                                {actors == '' ? null : actors.data.cast.map((actor, index) => {
                                    return (
                                        index < 9 ?
                                            <div key={index} className='actors-avatar-badge'>
                                                <Avatar sx={{ width: '32px', height: '32px' }} alt="Remy Sharp" src={actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` : 'https://img.freepik.com/free-photo/man-paper-bag-cover-face-ashamed-portrait-concept_53876-146313.jpg?w=1060&t=st=1686229657~exp=1686230257~hmac=9499771a3db63404679801665691866f0a71e0d7dff5e17d7d4873ffe6646224'} />
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

export default SerieInfo