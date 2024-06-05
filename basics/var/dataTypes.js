// refrence mdn and ECMAScript 2023 -- httpa://tc39.es/ecma262/#sec-intro
const accountId = 15125;
let accountEmail = "anjali@gmail.com";
var accountPassword ="@1346fyh";
accountCity = "jaipur";
//  accountId = "445154" nahi hoga change qki const hai 
accountPassword ="#233afc";
accountCity ="Bengaluru";
let accountSalary;
/*
Prefer not to use var
because of issue in block scope and functional scope 
 */
console.log(accountId);
console.table([accountEmail,accountPassword ,accountCity,accountId,accountSalary]);

// dataTypes

/*
--------Prmitive dataType----
number => 2 To power 53
bigInt
string =>"hello", 'bye'
boolean => true or false
null
undefined
symbol => unique

object*/
 
console.log(typeof "Anjali")//string
console.log(typeof 89)// number
console.log(typeof null)//object
console.log(typeof undefined)// undefined
console.log( typeof true) //boolean
console.log(typeof 44845484514551841584n)
console.log(typeof Symbol('123'))// function



/* Datatypes summary
primitive
7types -> string, Number , Boolean , null, undefined ,Symbol, bigInt

 Reference (non primitive) 
Array , Objects ,Functions*/

// stack(prmitive ) heap(non prmitive)