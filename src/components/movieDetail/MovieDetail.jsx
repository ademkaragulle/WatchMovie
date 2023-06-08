import React, { useEffect, useState } from 'react'
import { AiFillYoutube } from 'react-icons/ai'
import { MdOutlineOndemandVideo } from 'react-icons/md'
import axios from 'axios'
import MovieMediaPlayer from './MovieMediaPlayer'
import MovieInfo from './MovieInfo'
import './MovieDetail.css'
import { Skeleton } from '@mui/material'
import MovieComments from './MovieComments'
import SimilarMovie from './SimilarMovie'


function MovieDetail({ movieID }) {
    const [closePosterPath, setClosePosterPath] = useState(false)
    const [data, setData] = useState()
    const setMovieID = movieID.split('-')[2]
    const [currentOption, setCurrentOption] = useState(0)
    const [amountOfMovieVideos, setAmountOfMovieVideos] = useState(1)
    const MovieOptions = ['Movie Video 1', 'Movie Video 2', 'Movie Video 3']
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmRlMmI0YzIxMmUxZTQwZmQ0MjA3NDQ4ZjM2MzhlYyIsInN1YiI6IjY0NmY2NzRkZTIyZDI4MTZhZGY3YjVhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x7AqcjZYxomIS_sC7Hqvq9hiJF4asIvnwJCIBnxRgv8'
        }
    };


    const getMovieDetail = async () => {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${setMovieID}?language=en-US`, options);
        setData(response.data)
    }
    const getMovieVideo = async () => {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${setMovieID}/videos?language=en-US`, options);
        setAmountOfMovieVideos(response.data.results.length)
    }

    getMovieVideo()
    const moveScroll = () => {
        let scrollPagination = document.getElementById('header')
        if (scrollPagination) {
            scrollPagination.scrollIntoView({ behavior: 'smooth' });
        }
    }
    useEffect(() => {
        getMovieDetail()
        moveScroll()
    }, [movieID])


    const getActiveClass = (index) => {
        setClosePosterPath(false)
        setCurrentOption(index)
    }

    return (
        <>
            {!data ? <Skeleton height={1000} /> :
                <div className='asdasds'>
                    <div className='movie-media'>
                        <div>
                            <div className='movie-name'>
                                <AiFillYoutube color='#dd3444' />
                                <p >{data.title}</p>
                            </div>
                        </div>
                        <div className='movies-options-media'>
                            {amountOfMovieVideos < 3 ?
                                <button className='movies-options-media-item' onClick={() => getActiveClass(0)}>
                                    <MdOutlineOndemandVideo />
                                    <p>Movie Video 1</p>
                                </button>

                                : MovieOptions.map((item, index) => {
                                    return (
                                        <button className='movies-options-media-item' onClick={() => getActiveClass(index)} key={index} >
                                            <MdOutlineOndemandVideo />
                                            <p>{item}</p>
                                        </button>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='media-player'>
                        <MovieMediaPlayer movieID={setMovieID} movieData={data} currentOption={currentOption} setClosePosterPath={setClosePosterPath} closePosterPath={closePosterPath} />
                    </div>
                    <div className='movie-detail-info'>
                        <MovieInfo movieData={data} />
                    </div>
                    <div className='movie-detail-info'>
                        <SimilarMovie movieData={data} setClosePosterPath={setClosePosterPath} />
                    </div>
                    <div className='movie-comment'>
                        <MovieComments movieData={data} />
                    </div>
                </div>}
        </>
    )
}

export default MovieDetail