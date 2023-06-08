import React, { useEffect } from 'react'
import './Overlay.css'
import { useDispatch, useSelector } from 'react-redux'
import { closeOverlay } from '../../store/slices/manageOverlaySlice'
import { fetchMovieVideo } from '../../store/slices/movieVideoSlice'
import { Skeleton } from '@mui/material'


function Overlay() {


    const dispatch = useDispatch()
    const { movieID } = useSelector((store) => {
        return {
            movieID: store.manageOverlay.movieID
        }
    })

    const { data, loading, error } = useSelector((store) => {
        return {
            data: store.fetchVideo.data,
            loading: store.fetchVideo.loading,
            error: store.fetchVideo.error,
        }
    })

    useEffect(() => {
        dispatch(fetchMovieVideo(movieID))
    }, [movieID])

    const closeOverlayTrailer = () => {
        dispatch(closeOverlay())
    }

    return (
        <div onClick={closeOverlayTrailer} className='overlay'>
            <div className='overlay-item'>
                {loading && <Skeleton variant="rectangular" width="100%" height={2000} sx={{ bgcolor: 'grey.900' }} />}
                {!loading && error ? <div>Error: {error}</div> : null}
                {!loading && data ? <iframe width="560" height="315" src={`https://www.youtube.com/embed/${data}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> : null}
            </div>
        </div>
    )
}

export default Overlay