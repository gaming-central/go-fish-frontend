import { newDeck, shuffleDeck } from '../src/utils'
import { fullDeck, fullDeckPlusDupe } from './mocks'

test('should create a new deck of 52 unique cards', () => {
  expect(newDeck()).toEqual(fullDeck)
})


test('shuffling deck should create a new randomized deck of the same size', () => {
  const shuffled = shuffleDeck(fullDeck)

  expect(shuffled.length).toEqual(fullDeck.length)
  expect(shuffled).not.toEqual(fullDeck)
})

test('shuffling deck should not create duplicates or lose original values', () => {
  const shuffled = shuffleDeck(fullDeck)

  const fdSet = new Set(fullDeck)
  const shufSet = new Set(shuffled)

  expect(fdSet).toEqual(shufSet)
})

test('shuffling deck should not create duplicates or lose original values even with decks with duplicates', () => {
  const shuffled = shuffleDeck(fullDeckPlusDupe)

  const fdSet = new Set(fullDeckPlusDupe)
  const shufSet = new Set(shuffled)

  expect(fdSet).toEqual(shufSet)
})