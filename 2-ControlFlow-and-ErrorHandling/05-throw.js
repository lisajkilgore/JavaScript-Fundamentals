/*The throw statement throws an exception. The execution of the code will stop, and 
the code will move on to the next catch block. 
If no catch block exists among caller functions, the program will stop running.*/

function addNumbers(a, b) {
    if (isNaN(a) || isNaN(b)) {
        throw "One of the parameters is not a number";
    } else {
        return a + b;
        
    }
}
    // try-catch
    try {
        addNumbers(10, bob);
    }
    catch (error) {
        console.log(error);
    }
