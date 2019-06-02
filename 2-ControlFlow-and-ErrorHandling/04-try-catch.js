/* try-catch block marks a block of statements to try, and specifies one or more responses should an 
exception be thrown. If an exception is thrown, the try-catch statement catches it.

The try block will contain one or more statements. That is, you want the try block to succeed, and if it 
does not succeed, you want control to pass to the catch block. 
Let's start by creating a function and putting the try block inside of it:

*/
function tryCatchDemo(a){
    try {
        var upperCaseWord = a.toUpperCase();
        console.log(upperCaseWord);
    }
    catch(err){
        console.log(err);
    }
}
tryCatchDemo("Hello");
tryCatchDemo("stupid"); //2nd call
