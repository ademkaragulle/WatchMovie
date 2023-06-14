import './App.css'
import Header from './components/header/Header'
import MoviesComingSoon from './components/moviesComingSoon/MoviesComingSoon'
import CarouselSlide from './components/carousel/Carousel'
import MovieList from './components/movieList/MovieList'
import { Routes, Route, useLocation } from 'react-router-dom'
import Movies from './components/movies/Movies'
import Series from './components/series/Series'
import WrongURL from './components/wrongUrl/WrongURL'
import Overlay from './components/Overlay/Overlay'
import { useSelector } from 'react-redux'
import MovieDetail from './components/movieDetail/MovieDetail'
import { useEffect, useState } from 'react'
import SeriesDetail from './components/SeriesDetail/SeriesDetail'
import DropDownMenu from './components/header/DropDownMenu'
import Footer from './components/footer/Footer'

function App() {
  const [isTrueDropDownMenu, setIsTrueDropDownMenu] = useState(false)

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
    }
  }, [locationPathName])


  return (
    <>
      {manageOverlay ? <Overlay /> : null}
      <div className='App'>
        {
          isTrueDropDownMenu ?
            <>
              <div onClick={() => setIsTrueDropDownMenu(false)} className='drop-down-menu-overlay'></div>
              <DropDownMenu setIsTrueDropDownMenu={setIsTrueDropDownMenu} />
            </> : ''
        }

        {/* <Routes>
          <Header setIsTrueDropDownMenu={setIsTrueDropDownMenu} />
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
        <Footer />
 */}


        <Routes>
          <Route
            path='/*'
            element={
              <>
                <Header setIsTrueDropDownMenu={setIsTrueDropDownMenu} />
                <Routes>
                  <Route
                    path='/'
                    element={
                      <>
                        <CarouselSlide />
                        <MoviesComingSoon />
                        <MovieList genre='movies' />
                      </>
                    }
                  />
                  <Route path='/movies' element={<Movies />} />
                  <Route path='/series' element={<Series />} />
                  <Route path={`${locationPathName.substring(1, locationPathName.length)}`} element={determineGenre} />
                  <Route path='*' element={<WrongURL />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>






        {/* <Routes>
          <Route
            path='/*'
            element={
              <>
                <Header setIsTrueDropDownMenu={setIsTrueDropDownMenu} />
                <Routes>
                  <Header setIsTrueDropDownMenu={setIsTrueDropDownMenu} />
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
                <Footer />
              </>
            }
          />
        </Routes> */}
      </div>
    </>
  )
}

export default App
