import { WINNER_COMBOS } from '../constants.js'

export const checkWinnerFrom = (boardToCheck) => {
    // Check las combinaciones para ver si X u O ganó
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo
        if (
            boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ) {
            return boardToCheck[a]
        }
    }
    // Si no hay un ganador
    return null
}

export const checkEndGame = (newBoard) => {
    // Check si hay un empate o no hay más espacios vacios
    return newBoard.every((square) => square !== null)
}