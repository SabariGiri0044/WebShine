//arithmetic operators

var val1=10;
var val2=20;

var result = val1 % val2

var inc = ++val1
var inc = val2--
var inc = ++val2
var inc = val1--

// console.log(inc)

//Assignment operator

var val3 = 16
var val4 = 32

val3 += 10;

//console.log(val3)

//string operator

var name1 = "sabu"
var name2 = "giri"
 
var fullname = name1 + name2
name1 += "v" 
//console.log(fullname)
//console.log(name1)

//comparison operator

var val5 = 40; //num
var val6 = "40"; // string

//var output = val5 == val6
var output = val5 === val6
//console.log(output)

var val7 = 40; //num
var val8 = 4; // string

var output = val7 > val8 ? 'val7 is greater' : 'val7 is smaller'
//console.log(output)

//logical operators AND GATE , OR GATE , XOR GATE, NOT GATE
var num = 10; // yes or no = yes
var firstName = "Sabu" // yes or no = yes
var myVal = !num && !firstName ? "yes its true" : "it is not true"
//console.log(myVal)

var myVal = !num || !firstName ? "true" : false
console.log(myVal)
