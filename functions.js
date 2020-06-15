//app.js
//Function expressions

function callFunction(fnc){
    fnc();
}

//Function Declaration
function aDeclaration(){
    console.log("I'm a Declared Function");
}
//Function 
let anExpression = function(){
    console.log("I'm a Function Expression");
}

aDeclaration();
anExpression();

callFunction(aDeclaration);
callFunction(anExpression);

let arrLength = function(myArr){
    return myArr.length;
}
console.log(arrLength([1,2,3]));

module.exports = arrLength([]);