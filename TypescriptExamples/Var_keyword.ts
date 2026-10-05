//variables - const, let , var
// define / represent the data - Data types and variables
// const - const value, can't reassign the value and reassign the variable


const empid :number = 1001;

// empid = 1002; //Cannot assign to 'empid' because it is a constant.

// const empid = 1003; //Cannot redeclare block-scoped variable 'empid'

console.log(empid);


// let - we can reassign the value, but can't redeclare variable

let a : number = 10;

a = 20;

// let a : number = 30: //Cannot redeclare block-scoped variable 'a'.

console.log(a);

// var = can reassign the value and redeclare variable

var b : number = 50;

b = 60;    //reassign the value

var b : number = 70;   //redeclare the variable

console.log(b);


