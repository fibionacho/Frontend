import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'
export function useCatFact () {
  const [fact, setFact] = useState()

  const getFactAndUpdateReactState = () => {
    getRandomFact().then(setFact)
  }

  useEffect(getFactAndUpdateReactState, [])

  return { fact, getFactAndUpdateReactState }
}
