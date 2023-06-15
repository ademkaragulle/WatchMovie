import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchMovies } from '../../../store/slices/searchSlice'
import { Skeleton } from '@mui/material'
import { Link } from 'react-router-dom'

function SearchItems({ value, setIsTrueDropDownMenu }) {

    console.log('adem')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(searchMovies(value))
    }, [dispatch, value])

    const { data, loading, error } = useSelector((store) => {
        return {
            data: store.search.data,
            loading: store.search.loading,
            error: store.search.error,
        }
    })

    return (

        <div className='search-items'>
            {loading && <Skeleton variant="rectangular" width="100%" height={300} sx={{ bgcolor: 'grey.900' }} />}
            {!loading && error ? <div>Error: {error}</div> : null}
            {!loading && data ? data.map((movie, index) => {
                if (index < 4 && movie.poster_path) {
                    return (
                        <Link onClick={() => setIsTrueDropDownMenu(false)} to={`movie-detail-${movie.id}`} key={index} className='search-item'>
                            <div className='search-img'><img className='img-fluid' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" /></div>
                            <div className='search-title'>{movie.original_title}</div>
                        </Link>
                    )
                }
            }) : null
            }
            {!loading && data.length < 1 ?
                <div className='search-error-message'>The movie which you search, is not found</div>
                : null}
        </div >
    )
}

export default SearchItems