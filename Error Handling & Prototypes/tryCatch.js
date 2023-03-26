// Syntax of try - catch

try{
    //block of code for testing.
}catch{
    //block of code for addressing errors.
}

// Syntax of try - catch - finally

try{
    //block of code for testing.
}catch{
    //block of code for addressing errors.
}finally{
    // block of code to run after try-catch
}

//example 1

try{
    let x = undefined;
    console.log(x[0]);
}catch(err){
    console.log("error handling in catch", err);
}finally{
    console.log("finally always gets executed");
}

console.log("end");

// example 2
try{
    console.log("hello");
    console.log(a);
    console.log("ending try");
}catch{
    console.log("handled");
}finally{
    console.log("Finally");
}

console.log("end");