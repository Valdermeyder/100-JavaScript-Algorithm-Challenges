const BORDER_CHAR = '*'

function addBorder(picture) {
    const borderRow = new Array(picture[0].length + 2).fill(BORDER_CHAR).join('')
    return [borderRow, ...picture.map(row => `${BORDER_CHAR}${row}${BORDER_CHAR}`), borderRow]
}

console.log(addBorder(["abc", "ded"]))