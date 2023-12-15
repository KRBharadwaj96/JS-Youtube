let score = "33abc"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

//RESULTS
// "33" => 33
// "33abc" => NaN
//  true => 1

let isLoggedIn = "hi"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// RESULTS
// 1 => true; 0 => false
// "" => false 
// "hi" => true

let someNumber = 33
let stringNumber = String(someNumber)

// console.log(stringNumber);
// console.log(typeof stringNumber);

/* ************** OPERATIONS ************** */

let value = 3;
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2)
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " Bhagu"

let str3 = str1 + str2
// console.log(str3);  
// console.log('1' + 2);
// console.log(1 + '2');
// console.log('1' + 2 + 2);
// console.log(1 + 2 + '2');

// console.log(+true); // gives output 1 but not used in any cases
// console.log(+"");  // give output 0 but not used anywhere

let num1, num2, num3;

num1 = num2 = num3 = 2+3

let gameCounter = 100
++gameCounter
console.log(gameCounter);