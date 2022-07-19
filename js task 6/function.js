//function 

// denoted by function keyword

// Function keyword // function names
// Anonymous function // var names = function ()
// Arrow function // without function keyword and name
// IIFE function // 

//function keyword
console.log("****function keyword****")
function days(data){
    for(i=0;i< data.length;i++){
          console.log(data[i])
    }
}
days(["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"])


//anonymous function
console.log("****anonymous function****")
var days = function (data) {
     for(var i = 0; i < data.length; i++){
         console.log(data[i])
     }
 }
 days(["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"])

 //arrow function
 console.log("****arrow function****")
 var days = (data) => {
     for(var i = 0; i < data.length; i++){
         console.log(data[i])
     }
 }
 days(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"])


 //IIFE

 (function(){
    console.log("Hello")
  })()

  days(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"])