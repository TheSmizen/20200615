console.log(__filename + " starting. " + Date());
require("./functions");
console.log("Node project starting. " + Date());
let time = 501;
//global object:
let timer = setTimeout(function(){ //setTimeout runs once
    time += 2;
    console.log(time + " milliseconds have passed in setTimeout");
}, time)
time = 500;
let timer2 = setInterval(function(){
    console.log(time + " milliseconds have passed in setInterval")
    time += 2;
    if (time > 505){
        clearInterval(timer2);
    }
}, time);
let timer3 = setTimeout(function(){ //setTimeout runs once
    console.log("2000 milliseconds have passed in setTimeout");
}, 2000);
//Here in app.js all three timers get launched at the same time.
//They will all fire only as and when their timers run out.

//2020-06-15
//Payday woop
//Today: Function expressions
function callFunction(fnc){
    fnc();
}
function sayHi(){
    console.log("hi");
}
sayHi();
var sayBye = function(){
    console.log("bye");
};
callFunction(sayBye);
//Starting a new project so this starts to make sense.

//So as things stand right now, if I run "node app"
//-All the requires run as a script(in order?)
//-This file runs as a script
//-All the timeout and interval functions fire in their own time

console.log(__filename + " ending. " + Date());