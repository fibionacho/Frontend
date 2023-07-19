
import './App.css'

function App() {
 
  return (
    <div className='page'>
      <header>
        <h1>Prueba técnica</h1>

        <form className='form'>
          <input placeholder='Busca tu pelicula'/>
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        Aqui irán los resultados
      </main>
    </div>
  )
}

export default App
