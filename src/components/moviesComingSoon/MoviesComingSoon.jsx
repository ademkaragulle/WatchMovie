import React, { useEffect } from 'react'
import { Box, Grid, Skeleton } from '@mui/material'
import { AiFillYoutube } from 'react-icons/ai'
import MoviesComingSoonItem from './MoviesComingSoonItem'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUpComingSlice } from '../../store/slices/upComingSlice'





function MoviesComingSoon() {
    const dispatch = useDispatch()

    const { data, loading, error } = useSelector((store) => {
        return {
            data: store.upComing.data,
            loading: store.upComing.loading,
            error: store.upComing.error,
        }
    })

    useEffect(() => {
        dispatch(fetchUpComingSlice())
    }, [dispatch])


    return (
        <Box sx={{ background: '#131619', padding: '30px 0', color: '#fff' }}>
            <div style={{ textAlign: 'center', margin: '0 30px' }}>
                <Grid justifyContent={'space-between'} className='coming-soon' container>
                    <Grid padding='10px 0' justifyContent={'center'} sx={{ borderRadius: '5px', display: 'flex', gap: '10px', alignItems: 'center', background: '#212529;' }} item xs={12} md={3}>
                        <AiFillYoutube style={{ color: 'red', fontSize: '20px' }} />
                        Coming Soon
                    </Grid>
                    <Grid item textAlign={'right'} sx={{ margin: 'auto 0' }} xs={12} md={1}>All Trailer</Grid>
                </Grid>
                <Grid className='border-top' container>
                    <Grid item className='cooming-soon-avatars' padding='0 30px' sx={{ background: '#212529', margin: '-2px 0 0 0 ', border: 0 }} md={12}>
                        {loading && <Skeleton variant="rectangular" width="100%" height={2000} sx={{ bgcolor: 'grey.900' }} />}
                        {!loading && error ? <div>Error: {error}</div> : null}
                        {!loading && data ?
                            <div className='cooming-soon-avatars'>
                                {
                                    data.map((item, index) => {
                                        if (index < 6) {
                                            return (
                                                <MoviesComingSoonItem key={item.id} movie={item} />
                                            )
                                        }
                                    })
                                }
                            </div>
                            : null
                        }
                    </Grid>
                </Grid>
            </div>
        </Box >
    )
}

export default MoviesComingSoon