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
  return <div className={`border rounded-lg bg-white ${className}`} style={style}>
    {displayValues[value]}
    {displayValues[suit]}
  </div>
}
