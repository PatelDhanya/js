const accountId = 123456
let accountPassword = "121212"
var accountCity = "ahmedabad"

console.log(accountId);

console.table([accountId , accountPassword , accountCity]);

// accountId = 12341234
// console.log(accountId) // const cannot be changed error

accountPassword = "123123"
accountCity = "mehsana"

console.table([accountId , accountPassword , accountCity]);

