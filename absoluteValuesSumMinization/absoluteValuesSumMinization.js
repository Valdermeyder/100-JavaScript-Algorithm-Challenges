function absoluteValuesSumMinization(sortedNumbers) {
    sortedNumbers.sort()
    console.log(sortedNumbers)
    const isEven = sortedNumbers.length % 2 === 0
    const middleIndex = isEven ? sortedNumbers.length/2 - 1 : Math.floor(sortedNumbers.length / 2)

    const middleSums = new Array(sortedNumbers.length).fill(0)

    sortedNumbers.forEach((currentNumber) => {
        sortedNumbers.forEach((middleNumber, middleIndex) => {
            middleSums[middleIndex] += Math.abs(currentNumber - middleNumber)
        })
    })
    console.log(middleSums)
    return sortedNumbers[middleIndex]
}

console.log(absoluteValuesSumMinization([2, 4, 7]))
console.log(absoluteValuesSumMinization([2, 4, 7, 6]))
console.log(absoluteValuesSumMinization([2, 4, 7, 6, 6]))
console.log(absoluteValuesSumMinization([2, 4, 7, 6, 6, 8]))
console.log(absoluteValuesSumMinization([1, 2, 2, 2, 3, 3]))