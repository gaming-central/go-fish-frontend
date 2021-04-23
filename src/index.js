import React, { useEffect, useState } from 'react'
import { render } from 'react-dom'

import { Card } from './components/Card'
import { newDeck, shuffleDeck } from './utils'

const rotate = [
  '-rotate-6',
  '-rotate-5',
  '-rotate-4',
  '-rotate-3',
  '-rotate-2',
  '-rotate-1',
  'rotate-0',
  'rotate-1',
  'rotate-2',
  'rotate-3',
  'rotate-4',
  'rotate-5',
  'rotate-6',
]

export const App = props => {
  const [deck, setDeck] = useState(() => shuffleDeck(newDeck()))
  const [shuffling, setShuffling] = useState(false)

  useEffect(() => {
    if (shuffling) {
      const s = setTimeout(() => {
        setDeck(shuffleDeck(deck))
      }, 800)
      const t = setTimeout(() => {
        setShuffling(false)
      }, 1500)

      return () => {
        clearTimeout(s)
        clearTimeout(t)
      }
    }
  }, [shuffling])

  return <main className='bg-pink-500 text-purple-600 min-h-screen flex flex-col'>
    <h1 className='text-center text-6xl'>Go Fish!</h1>
    <button disabled={shuffling} className='btn mx-auto my-12' onClick={e => setShuffling(true)}>Shuffle</button>
    <div className='flex flex-center flex-wrap'>
      {deck.map(({ suit, value }, i) => <Card
        key={i}
        className={`${i % 13 !== 0 ? 'card-overlap-x' : '' } ${i >= 13 ? 'card-overlap-y' : ''} ${rotate[i % 13]} ${shuffling ? 'flipped' : ''} mb-4`}
        suit={suit}
        value={value}
      />)}
    </div>
  </main>
}

render(<App />, document.getElementById('app'))
