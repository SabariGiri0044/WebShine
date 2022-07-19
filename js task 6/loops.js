// for, for...of, for...in, while, do..while

var a = 0;

a++;
console.log(a)
a++;
console.log(a)
a++;
console.log(a)
a++;
console.log(a)
a++;
console.log(a)
a++;

console.log("____________________USING FOR LOOP____________________")

var b = 10;

//for(initiallization; condition; increment/decrement)

for(var i = 1; i <= b; i++){ // 1 <= 10 -> true -> 1, 2 <= 10 -> true -> 2, 3 <= 10 -> true ->3
    console.log(i)
}

var names = ["Sabari", "santhosh", "Rajini"]

console.log(names[0])
console.log(names[1])
console.log(names[2])

console.log("____________________USING FOR LOOP____________________")

for(var i = 0; i < names.length; i++){ 
    console.log(names[i])
}

console.log("____________________USING WHILE LOOP____________________")
//initilization
var i = 0 ; 
//while(condition) { increment/decrement }
while(i < names.length){
    console.log(names[i])
    i++
}
console.log("____________________USING DO WHILE LOOP____________________")
var i = 0;
do{
    console.log(names[i])
    i++  
}
while(i < names.length)
console.log("____________________USING FOR IN LOOP____________________")
for(var i in names){
    console.log(names[i])
}

var names = ["Sabari", "santhosh", "Rajini", "kamal"]
console.log("____________________USING FOR OF LOOP____________________")
for(i of names){
    console.log(i)
}


//while loop
console.log("____________________USING WHILE LOOP____________________")
var myname = "Sabari"
while(myname === "Sabari"){
    console.log("My name is " + myname)
    myname--;
}

//do while loop
console.log("____________________USING DO WHILE LOOP____________________")
do{
    console.log("My name is " + myname)
    myname--; 
}while(myname === "Sabari")
