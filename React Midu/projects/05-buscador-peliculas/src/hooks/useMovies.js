import './App.css'
import { useState } from 'react'
import withResults from '../mocks/with-results.json'
import withoutResults from '../mocks/no-results.json'

export function useMovies( {search} ){
    const movies = responseMovies.Search

  
    const mappedMovies = movies.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))

    const getMovies = () => {
      if(search){
        setResponsiveMovies(withResults)
      } else {
        setResponsiveMovies(withoutResults)
      }
    }
    return { movies: mappedMovies, getMovies }
  }