import React, { useEffect, useState } from 'react'
import { AiFillYoutube } from 'react-icons/ai'
import { MdOutlineOndemandVideo } from 'react-icons/md'
import axios from 'axios'
import SerieMediaPlayer from './SerieMediaPlayer'
import MovieInfo from './SerieInfo'
import './SerieDetail.css'
import { Skeleton } from '@mui/material'
import SerieComments from './SerieComments'


function SeriesDetail({ serieID }) {
    const [closePosterPath, setClosePosterPath] = useState(false)
    const [data, setData] = useState()
    const setserieID = serieID.split('-')[2]
    const [currentOption, setCurrentOption] = useState(0)
    const [amountOfMovieVideos, setAmountOfMovieVideos] = useState(1)
    const MovieOptions = ['Serie Video 1', 'Serie Video 2']
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmRlMmI0YzIxMmUxZTQwZmQ0MjA3NDQ4ZjM2MzhlYyIsInN1YiI6IjY0NmY2NzRkZTIyZDI4MTZhZGY3YjVhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x7AqcjZYxomIS_sC7Hqvq9hiJF4asIvnwJCIBnxRgv8'
        }
    };


    const getSerieDetail = async () => {
        const response = await axios.get(`https://api.themoviedb.org/3/tv/${setserieID}?language=en-US?`, options);
        setData(response.data)
    }
    const getSerieVideo = async () => {
        const response = await axios.get(`https://api.themoviedb.org/3/tv/${setserieID}/videos?language=en-US`, options);
        setAmountOfMovieVideos(response.data.results.length)
    }

    getSerieVideo()
    const moveScroll = () => {
        let scrollPagination = document.getElementById('header')
        if (scrollPagination) {
            scrollPagination.scrollIntoView({ behavior: 'smooth' });
        }
    }

    useEffect(() => {
        getSerieDetail()
        moveScroll()
    }, [serieID])


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
                                <p>{data.name}</p>
                            </div>
                        </div>
                        <div className='movies-options-media'>
                            {
                                amountOfMovieVideos < 2 ?
                                    <button className='movies-options-media-item' onClick={() => getActiveClass(0)}>
                                        <MdOutlineOndemandVideo />
                                        <p>Serie Video 1</p>
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
                        <SerieMediaPlayer serieID={setserieID} movieData={data} currentOption={currentOption} setClosePosterPath={setClosePosterPath} closePosterPath={closePosterPath} />
                    </div>
                    <div className='movie-detail-info'>
                        <MovieInfo movieData={data} />
                    </div>
                    <div className='movie-comment'>
                        <SerieComments movieData={data} />
                    </div>
                </div>}
        </>
    )
}

export default SeriesDetail