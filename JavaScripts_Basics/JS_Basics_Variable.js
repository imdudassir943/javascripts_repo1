const accountId = 454355
let accountName = "Mudassir Sharif"
var accountEmail = "mudassir@gmail.com"

console.log(accountId)
console.log(accountEmail)
console.log(accountName)

/* 
Prefer not to use var,
because of its issue in the block scope and functional scope
*/

console.table([accountId, accountEmail, accountName])