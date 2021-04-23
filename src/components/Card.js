import React from 'react'

const displayValues = {
  1: 'A',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7', 
  8: '8',
  9: '9',
  10: '10',
  11: 'J',
  12: 'Q',
  13: 'K',
  diamonds: '♦',
  clubs: '♣',
  hearts: '♥',
  spades: '♠'
}

export const Card = ({ className = '', style = {}, suit = 'hearts', value = 1 }) => {
  const cardColor = suit === 'hearts' || suit === 'diamonds' ? 'text-red-500' : 'text-black'
  return <div className={`card card-lift relative w-56 h-80 ${cardColor} ${className}`} style={style}>
    <div className='card-flip-container'>
      <div className='absolute min-h-full min-w-full card-back'></div>
      <div className='absolute min-h-full min-w-full card-front p-2 bg-white flex flex-col'>
        <div className='mr-auto flex-center flex-col'>
          <span className='text-3xl'>{displayValues[value]}</span>
          <span className='text-3xl'>{displayValues[suit]}</span>
        </div>
        <span className='text-6xl m-auto'>{displayValues[suit]}</span>
        <div className='ml-auto flex-center flex-col'>
          <span className='text-3xl'>{displayValues[suit]}</span>
          <span className='text-3xl'>{displayValues[value]}</span>
        </div>
      </div>
    </div>
  </div>
}
