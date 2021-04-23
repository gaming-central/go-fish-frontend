export const newDeck = () => {
  return ['spades', 'diamonds', 'clubs', 'hearts'].reduce((deck, suit) => {
    return [...deck, ...Array(13).fill(1).map((n, i) => ({ value: n + i, suit }))]
  }, [])
}

export const shuffleDeck = (deck = []) => {
  const pliableDeck = deck.slice()
  const newDeck = []

  let i = pliableDeck.length
  while (i --> 0) {
    newDeck.push(...pliableDeck.splice(Math.floor(Math.random() * pliableDeck.length), 1))
  }

  return newDeck
}
