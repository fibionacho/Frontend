import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export function App () {
  const { fact, getFactAndUpdateReactState } = useCatFact()
  const { imageUrl } = useCatImage({ fact })
  const handeClick = async () => {
    getFactAndUpdateReactState()
  }

  return (
    <main>
      <button onClick={handeClick}>Nuevo dato</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt='cat' />}
    </main>
  )
}
