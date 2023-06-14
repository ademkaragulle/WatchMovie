import React from 'react'
import MovieList from '../movieList/MovieList'

function Movies() {
    return (
        <div style={{ padding: "30px 0 0 0" }}>
            <MovieList genre="movies" />
        </div>
    )
}

export default Movies