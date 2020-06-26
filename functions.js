console.log(__filename + " starting. " + Date());
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


let timer = setTimeout(() => {
    console.log("Haha! I did a timeout in an import!\nYou expected me not to reappear, however I did! hahaha!");
}, 200);
console.log(__filename + " ending. " + Date());