function isSeqSorted(sequence) {
    console.log(sequence)
    return sequence.toSorted().join('') === sequence.join('')
}

function almostIncreasingSequence(sequence) {
    console.time('run')
    const isSorted = isSeqSorted(sequence)
    let result = true
    if (!isSorted) {
        result = sequence.some((number, index) => {
            return isSeqSorted(sequence.toSpliced(index, 1))
        })
    }
    console.timeEnd('run')
    return result
}

console.log(almostIncreasingSequence([1, 3, 2, 1, 6]))
console.log(almostIncreasingSequence([1, 3, 2, 4]))