import { useEffect,  useState, useRef } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function useSearch(){
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef('true')

  useEffect(()=>{
    if(isFirstInput.current){
      isFirstInput.current = search == ''
      return
    }
    if(search==''){
      setError('No se puede buyscar una película vacía')
      return
    }

    if(search.match(/^\d+$/)){
      setError('No se puede buscar una película con un número')
      return
    }

    if(search.length<3){
      setError('La búsqueda debe de tener al menos 3 caracteres')
      return
    }
    setError(null)
  }, [search])
  return { search, updateSearch, error }
}

function App() {
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies } = useMovies({search})



  const handleSubmit = (event) =>{
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event)=>{
    updateSearch(event.target.value)
  }


  return (
    <div className='page'>
      <header>
        <h1>Prueba técnica</h1>

        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} name='query' value={search} placeholder='Busca tu pelicula'/>
          <button  type='submit'>Buscar</button>
        </form>
        {error && <p className='error'>{error}</p>}
      </header>

      <main>
       <Movies movies={mappedMovies}/>
      </main>
    </div>
  )
}

export default App
