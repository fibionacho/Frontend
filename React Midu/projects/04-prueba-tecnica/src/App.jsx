import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './services/facts'

function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  // efecto para cargar la imagen relacionada
  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ', 3).join(' ')
    console.log(firstWord)
    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(`https://cataas.com/${url}`)
      })
  }, [fact])
  return { imageUrl }
}
export function App () {
  const [fact, setFact] = useState()
  const { imageUrl } = useCatImage({ fact })
  // efecto para recuperar el dato
  useEffect(() => {
    getRandomFact().then(setFact)
  }, [])

  const handeClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main>
      <button onClick={handeClick}>Nuevo dato</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt='cat' />}
    </main>
  )
}
