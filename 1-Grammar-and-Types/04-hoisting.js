/*
 It is best practice to list any variable declarations at the top of each code block in order to reduce scope leak as much as possible.
An additional feature of block scope is that variables with the same name are not treated as the same variable. Consider:
*/

let x = 5;
console.log(x); //5
{
    let x = 7;
    console.log(x); //7
    
    let y = 10;
    console.log(y);

    let z = 2; 
    console.log(z);
}
console.log(x); //5

/*
The second x declaration only applies within its code block, and thus is a separate variable from the first x declaration. Similarly, if we were to change the value of x within the code block, it would not affect the value of x outside the code block.*/