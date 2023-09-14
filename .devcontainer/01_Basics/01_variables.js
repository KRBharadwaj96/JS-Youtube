const AccountId = 112233
let accountEmail = "krb@google.com"
var accountPassword = "123"
accountCity = "Kochi"

// AccountId = 96 //not allowed
accountEmail = "kr@gg.com"
accountPassword = "2255"
accountCity = "Bengaluru"
let accountState;
/*
Prefer not to use var because of block scope and functional scope
*/

console.log(AccountId);
console.table([AccountId,accountEmail,accountPassword,accountCity,accountState])