const accountId = 123
let accountEmail = "ant@gmail.com"
var accountPassword = "123"
accountCity = "roorkee"
let accountState;

// accountId = 2 not allowed 
// var, scope issue
// prefer not to use var,issue in block scope

console.log(accountId)

accountEmail = "an@gmail.com"
accountPassword = "789"
accountCity = "city1"


console.table([accountEmail,accountPassword,accountCity])



