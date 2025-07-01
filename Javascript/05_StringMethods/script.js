// String Methods

let str = "Hello World!";
console.log(str.length);

let myCollege = "LIT ITM-B";
// console.log("The output length is:", myCollege.length);
console.log(`The output length is: ${myCollege.length}`);

let str1 = "LIT";
let str2 = "ITMB";
let output = str1 + " " + str2;
console.log(output);

let myName = "    Pramod  ";

let myBankLastFourDigit = "1234";
let maskedBankAc = myBankLastFourDigit.padStart(16, "*");

let myPhoneNo = "085";
let myMaskPhoneNo = myPhoneNo.padStart(10, "*");

let smile = "😊";

// Task :
let myname = prompt("Enter your name");
console.log(myname[0]);
console.log(myname[myname.length - 1]);
