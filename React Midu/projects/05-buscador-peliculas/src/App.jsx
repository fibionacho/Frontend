import { useRef, useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'



function App() {
  const { movies: mappedMovies } = useMovies()
  const inputRef = useRef()
  const [query, setQuery] = useState('')

  const handleSubmit = (event) =>{
    event.preventDefault()
    console.log(query)
  }

  const handleChange = (event)=>{
    setQuery(event.target.value)
  }
  
  return (
    <div className='page'>
      <header>
        <h1>Prueba técnica</h1>

        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} name='query' value={query} ref={ inputRef } placeholder='Busca tu pelicula'/>
          <button  type='submit'>Buscar</button>
        </form>
      </header>

      <main>
       <Movies movies={mappedMovies}/>
      </main>
    </div>
  )
}

export default App
