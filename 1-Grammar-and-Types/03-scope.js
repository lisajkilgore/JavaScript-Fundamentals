//Global scope
var x = 12
{
    //local scope
    var y = 12;
}

/*So, notice that the scope of y is within the curly braces. 
Curly braces are one of the defining factors in the various levels of scope. 
Curly braces define a code block.*/

var x ="outside"
console.log(x);
{
    let y ="inside"
    console.log(y);
}

var x = 15;
console.log(x); //15
{
    var y = 12;
    console.log(y); //12
}
console.log(y); //12
