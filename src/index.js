import React from 'react'
import { render } from 'react-dom'

import { Card } from './components/Card'
import { newDeck } from './utils'

export const App = props => {
  const onClick = () => {
    const deck = newDeck()

    console.log(deck)
  }
  return <main className='bg-pink-500 text-purple-600 h-screen'>
    <h1 className='text-center text-6xl'>Go Fish!</h1>
    <div className='flex flex-center'>
      {[{suit: 'spades', value: 5}, '', ''].map(card => <Card suit={card.suit} value={card.value} />)}
      <Card suit='spades' value={13} />
      <Card suit='hearts' value={13} />
      <button onClick={onClick}>New Deck</button>
    </div>
  </main>
}

render(<App />, document.getElementById('app'))
