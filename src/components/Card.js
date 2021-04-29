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
  return <div className={`border-4 p-2 flex flex-col rounded-lg border-purple-900 bg-white text-3xl w-56 h-80 ${className}`} style={style}>
    <span className=' flex items-center mr-auto flex-col'>
      <span>
        {displayValues[value]}
      </span>
      <span>
        {displayValues[suit]}
      </span>
    </span>
    <span className='m-auto text-6xl'>
      {displayValues[suit]}
    </span>
    <span className='ml-auto flex items-center flex-col'>
      <span>
        {displayValues[suit]}
      </span>
      <span>
        {displayValues[value]}
      </span>
    </span>
  </div>
}
