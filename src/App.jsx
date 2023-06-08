import './App.css'
import Header from './components/header/Header'
import MoviesComingSoon from './components/moviesComingSoon/MoviesComingSoon'
import CarouselSlide from './components/carousel/Carousel'
import MovieList from './components/MovieList/MovieList'
import { Routes, Route, useLocation } from 'react-router-dom'
import Movies from './components/movies/Movies'
import Series from './components/series/Series'
import WrongURL from './components/wrongUrl/WrongURL'
import Overlay from './components/Overlay/Overlay'
import { useSelector } from 'react-redux'
import MovieDetail from './components/movieDetail/MovieDetail'
import { useEffect, useState } from 'react'
import SeriesDetail from './components/SeriesDetail/SeriesDetail'

function App() {
  const { manageOverlay, movieID } = useSelector((store) => {
    return {
      manageOverlay: store.manageOverlay.manageOverlay,
      movieID: store.manageOverlay.movieID,
    }
  })
  const [determineGenre, setDetermineGenre] = useState('')
  const locationPathName = useLocation().pathname

  useEffect(() => {
    const determineMovieOrSerie = locationPathName.split('-')
    if (determineMovieOrSerie[0] + '-' + determineMovieOrSerie[1] === '/movie-detail') {
      setDetermineGenre(<MovieDetail movieID={locationPathName} />)
    } else if (determineMovieOrSerie[0] + '-' + determineMovieOrSerie[1] === '/serie-detail') {
      setDetermineGenre(<SeriesDetail serieID={locationPathName} />)
    } else {
      setDetermineGenre(<WrongURL />)
    }
  }, [locationPathName])


  return (
    <>
      {manageOverlay ? <Overlay /> : null}
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={
            <>
              <CarouselSlide />
              <MoviesComingSoon />
              <MovieList genre="movies" />
            </>
          } />
          <Route path='/movies' element={<Movies />} />
          <Route path='/series' element={<Series />} />
          <Route path={`${locationPathName.substring(1, locationPathName.length)}`} element={determineGenre} />
          <Route path='*' element={<WrongURL />} />
        </Routes>
      </div>
    </>
  )
}

export default App
