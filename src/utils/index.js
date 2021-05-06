export const newDeck = function() {
    const spades = Array(13).fill(1).map((value, i) => {
        return {
            suit: 'spades',
            value: value + i
        }
    })
    const hearts = Array(13).fill(1).map((value, i) => {
        return {
            suit: 'hearts',
            value: value + i
        }
    })
    const clubs = Array(13).fill(1).map((value, i) => {
        return {
            suit: 'clubs',
            value: value + i
        }
    })
    const diamonds = Array(13).fill(1).map((value, i) => {
        return {
            suit: 'diamonds',
            value: value + i
        }
    })
    return [...spades, ...hearts, ...clubs, ...diamonds]
}


deck = [{
    suit: 'spades',
    value: 4
},{
    suit: 'spades',
    value: 5
}]