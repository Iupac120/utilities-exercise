//solution  to first file in utilities folder
const firstModule = require('./utilities/util-1');
const {cut3} = require('./utilities/util-1')
const arrayNum = [8,6,4,2,5,9]
const largestNum = firstModule.largeNumber(arrayNum)
const cut = cut3(arrayNum)


console.log(largestNum)
console.log(cut)

//solution to second file in utilities folder
const {sum,concat} = require('./utilities/util-2') 
const firstArray = [2,4,9,12]
const secondArray = [0,8,-3,2]
const addTotal = sum(firstArray)
console.log(addTotal)
console.log(concat(firstArray,secondArray))

const secondModule = require('./utilities/util-2')
console.log(secondModule.sum(secondArray))
console.log(secondModule.concat(firstArray,secondArray))

