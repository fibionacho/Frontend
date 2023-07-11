import { useEffect, useState } from 'react'
import './App.css'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  const END_POINT_RANDOM_FACT = 'https://catfact.ninja/fact'


  // efecto para recuperar el dato
  useEffect(() => {
    fetch(END_POINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  // efecto para cargar la imagen relacionada
  useEffect(() => {
    const firstWord = fact.split(' ', 3).join(' ')
    console.log(firstWord)
    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(`https://cataas.com/${url}`)
      })
  }, [])

  return (
    <main>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt='cat' />}
    </main>
  )
}
