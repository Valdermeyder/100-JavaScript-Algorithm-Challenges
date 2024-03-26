function addTwoDigits(input) {
    return input.toString().split('').reduce((sum, char) => sum + parseInt(char), 0)
}

console.log(addTwoDigits(39))