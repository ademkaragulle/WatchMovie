import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Skeleton } from '@mui/material'
import { fetchSeries } from '../../store/slices/seriesSlice'
import { Link, useSearchParams } from 'react-router-dom'
import { Pagination } from '../Pagination/Pagination'
import SeriesListItem from './SeriesListItem'
import './Series.css'

function SeriesList({ genre }) {
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams()
    const currentPage = searchParams.get('page')

    useEffect(() => {
        dispatch(fetchSeries(currentPage))
    }, [dispatch, currentPage])


    const { data, loading, error } = useSelector((store) => {
        return {
            data: store.series.data,
            loading: store.series.loading,
            error: store.series.error,
        }
    })
    




    return (
        <div>
            <h1 id='movies' className='banner-movies'>{String(genre).toUpperCase()}</h1>
            <div className='serie-lists'>
                {loading && <Skeleton variant="rectangular" width="100%" height={2000} sx={{ bgcolor: 'grey.900' }} />}
                {!loading && error ? <div>Error: {error}</div> : null}
                {!loading && data ? <div className='serie-list'>
                    {
                        data.map((item, index) => {
                            return (
                                <Link key={index} to={`/serie-detail-${item.id}`}>
                                    <div className='serie-list-item'>
                                        <SeriesListItem serieItem={item} />
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

export default SeriesList