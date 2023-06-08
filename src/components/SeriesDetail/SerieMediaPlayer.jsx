import { Skeleton } from '@mui/material';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BsFillPlayFill } from 'react-icons/bs'

function SerieMediaPlayer({ serieID, movieData, currentOption, setClosePosterPath, closePosterPath }) {
    const [getVideo, setgetVideo] = useState([])
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmRlMmI0YzIxMmUxZTQwZmQ0MjA3NDQ4ZjM2MzhlYyIsInN1YiI6IjY0NmY2NzRkZTIyZDI4MTZhZGY3YjVhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x7AqcjZYxomIS_sC7Hqvq9hiJF4asIvnwJCIBnxRgv8'
        }
    };

    const getMovieVideo = async () => {
        const response = await axios.get(`https://api.themoviedb.org/3/tv/${serieID}/videos?language=en-US`, options);
        setgetVideo(response.data.results[currentOption])
    }

    const handleClosePosterPath = () => {
        setClosePosterPath(true)
    }

    useEffect(() => {
        getMovieVideo()
    }, [serieID, currentOption])


    return (
        <>
            <div onClick={handleClosePosterPath} style={{ display: `${closePosterPath ? 'none' : 'block'}` }} className='media-player-poster-path'>
                <div className='media-player-movie-title'>{movieData.name} / <span style={{ color: 'red' }}>Series Video - {currentOption + 1}</span></div>
                {
                    !movieData.backdrop_path ? <Skeleton height={800} /> : <img className='img-fluid-media-player' src={`https://image.tmdb.org/t/p/original${movieData.backdrop_path}`} alt="" />
                }
                <button onClick={handleClosePosterPath} className='play-btn-media-player'><BsFillPlayFill /></button>
            </div>
            {
                closePosterPath && getVideo ? <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${getVideo.key}?autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> : <div className={closePosterPath ? 'video-not-found' : null} style={{ display: 'none' }}>something is wrong</div>
            }
        </>
    )
}

export default SerieMediaPlayer