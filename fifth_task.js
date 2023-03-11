function chessBoard(rows, columns) {
    let result = []
    for (let i = 0; i < rows; i++) {
        let array = []
        for (let j = 0; j < columns; j++) {
            if ((i + j) % 2) {
                array.push('X')
            } else {
                array.push('O')
            }
        }
        result.push(array)
    }
    return result
}