function adjacentElementsProduct(elements) {
    console.time('run')
    let maxProduct = -Infinity
    for (let i = 1; i < elements.length; i++) {
        const currentProduct = elements[i] * elements[i-1]
        if (currentProduct > maxProduct) {
            maxProduct = currentProduct
        }
    }
    console.timeEnd('run')
    return maxProduct
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]))