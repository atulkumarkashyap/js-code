
const myArr = [1,2,3,4,5,6,7]
const myArr1 = ["one","two","three"]

const myArr2 = new Array(1,2,3,4,5,6,7)
console.log(myArr[1])

// array method
myArr.push(8)
myArr.push(10)
myArr.pop()
myArr.unshift(12)
myArr.shift()

console.log(myArr.includes(14))
console.log(myArr.indexOf(3))

const newArr = myArr.join()

console.log(myArr)
console.log(newArr)
console.log(typeof newArr)


console.log(myArr)

// slice splice

console.log("A ", myArr)

const myn1 = myArr.slice(1,3) 

console.log(myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1,3) 
console.log("C ", myArr)
console.log(myn2)









