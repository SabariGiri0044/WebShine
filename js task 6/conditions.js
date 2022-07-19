//if , if...else, nested if, switch


// if condition
console.log("---if condition---")
var text = "Hello"
if(text.length >= 5){
    console.log("welcome")
}


//if else
console.log("---if else condition---")
var i = 20;

if ( i < 60) {
	console.log("You are Eligible to proceed further");
} else {
	console.log("Not Eligible");
}



//Nested if
console.log("---Nested If---")
var subject =[sub1,sub2,sub3,sub4]
var sub1 = 100;
var sub2 = 90;
var sub3 = 30;
var sub4 = 100;
    
if (subject=35 ){
    console.log("you are pass")
    console.log("your total score=",sub1+sub2+sub3+sub4);
}
    else if (sub1<35){
        console.log("you are failed in sub1");
    } else if (sub2<35){
        console.log("you are failed in sub2");
    } else if (sub3<35) {
        console.log("you are failed in sub3");
    } else if (sub4<35){
    console.log("you are failed in sub4");
    }
    else{
    console.log("you are fail");
    console.log("your total score=",sub1+sub2+sub3+sub4);
    }


//switch case
console.log("---Switch Case---")
var operator = "+";
//var operator = "%";

var num1 = 80;
var num2 = 2;
var result;
switch (operator) {
    case '+':
        result = num1 + num2
        break;
    case '-':
        result = num1 - num2
        break;
    case '*':
        result = num1 * num2
        break;
    case '%':
        result = num1 % num2
        break;
    default:
        result = "operator not defined"
}

console.log(result)
