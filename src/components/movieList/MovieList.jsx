import React, { useEffect, useState } from 'react'
import MovieListItem from './MovieListItem'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMovies } from '../../store/slices/moviesSlice'
import './MovieList.css'
import { Skeleton } from '@mui/material'
import { Link, useSearchParams } from 'react-router-dom'
import { Pagination } from '../Pagination/Pagination'


function MovieList({ genre }) {
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams()
    const currentPage = searchParams.get('page')


    useEffect(() => {
        dispatch(fetchMovies(currentPage))
    }, [dispatch, currentPage])


    const { data, loading, error } = useSelector((store) => {
        return {
            data: store.movies.data,
            loading: store.movies.loading,
            error: store.movies.error,
        }
    })


    return (
        <div>
            <h1 id='movies' className='banner-movies'>{String(genre).toUpperCase()}</h1>
            <div className='movie-lists'>
                {loading && <Skeleton variant="rectangular" width="100%" height={2000} sx={{ bgcolor: 'grey.900' }} />}
                {!loading && error ? <div>Error: {error}</div> : null}
                {!loading && data ? <div className='movie-list'>
                    {
                        data.map((item, index) => {
                            return (
                                <Link key={index} to={`/movie-detail-${item.id}`}>
                                    <div className='movie-list-item'>
                                        <MovieListItem movieItem={item} />
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div> : null
                }
            </div>
            <Pagination />
        </div >
    )
}

export default MovieList