/*
Literals are fixed values within JavaScript. Rather than assigning these values like variables, you insert values directly into the literal.

There are seven types of literals within JavaScript:
1. Array literals
        An array is a group of values, indicated by square brackets [ ] using commas , to separate the values.
2. Boolean literals
        true or  false
3. Floating-point literals 
        Essentially numbers with decimal points, but can also include exponents (similar to scientific notation) 3.2e12
4.1, 5.5, 10.1

4. Integers 
        Literally numbers. Can appear in multiple forms: Base 10 (0-9), Base 8 (octal; 0-7), Base 16 (hexidecimal; 0-e), or Base 2 (binary; 0-1)
5. Object literals 
        Similar to the object data-type. Example:
        let x = { a:0, b:1, c:2 }
        console.log(x.a)// 0
        console.log(x.b)// 1
        console.log(x.c)// 2
6. RegExp literals 
        RegExp will be explained further later. It is a pattern within slashes, like this: /ab+c/
7. String literals 
        A set of characters within either single quotation marks ( ' ) or double quotation marks ( " ). Either can be used for a string, but they cannot be used together. Examples: 'hello', "hello"



*/
//Array: 
var players = ["Steph Curry", "Kevin Durant", "Klay Thompson"];

let x = { a:0, b:1, c:2 }
console.log(x.a)// 0
console.log(x.b)// 1
console.log(x.c)// 2