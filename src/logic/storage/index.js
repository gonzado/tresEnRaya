export const saveGameToStorage = ({ board, turn }) => {
    // Guardar el estado del juego en localStorage
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
}

export const resetGameStorage = () => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}