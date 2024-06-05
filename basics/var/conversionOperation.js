let score ="44";

console.log(typeof score);
console.log(typeof (score));

let valueIntNumber = Number(score)
console.log(typeof valueIntNumber);
console.log(valueIntNumber)// Nan 

//"33" = 33, as a number convert use Number
//"33abc" = NaN
// true = 1;false =0
//null = 0
//undefined = undefined

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) //convert in boolean 1 is true
// 1=> true; 0=>false
//"" => false ; "hello"=> true


// ------------------OPERATIONS-------------

let value =8;
let negValue = -value
console.log(negValue)

console.log(8+8);
console.log(8-8);
console.log(8*8);
console.log(8**9);
console.log(8/8);
console.log(8%8);

let str1 ="Anjali"
let str2 ="Sharma"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + "2")
console.log("1" + 2 + 2)
console.log(1 + "2" + "2")

console.log(+true)
let gamecounter = 100;
gamecounter++;//post
++gamecounter;//pre
console.log(gamecounter)


