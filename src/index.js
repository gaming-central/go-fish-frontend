import React from 'react'
import { render } from 'react-dom'

import { Card } from './components/Card'

export const App = props => {
  return <main className='bg-pink-500 text-purple-600 h-screen'>
    <h1 className='text-center text-6xl'>Go Fish!</h1>
    <div className='flex flex-center'>
      <Card suit='spades' value={13} />
    </div>
  </main>
}

render(<App />, document.getElementById('app'))
