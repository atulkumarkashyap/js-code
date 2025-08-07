const name = "aman"
const repo = 50

console.log(name + repo + " value")
console.log(`hello my name is ${name} and my repo count is ${repo}`) // string interpolation

const gameName = new String("aman")
console.log(gameName[0]) 
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('n'))

const newString = gameName.substring(0,4)
console.log(newString)



const anotherString = gameName.slice(-4,2)
console.log(anotherString)

const newStringOne = "  aman  ";
console.log(newStringOne)
console.log(newStringOne.trim())












