// function calling the another function in it is called call back function

// function greet(name,callme){
//     console.log("hello");
//     callme(name)
// }
// function sayname(myname){
//     console.log(`My name is ${myname}`);
    
// }
// greet("hanzala",sayname)

//With setTimeout

function hello(){
    console.log("Hello");
    
}

function callback(){
    console.log("I am call back function");
    
}
setTimeout(hello,1000)
callback()


//Example 2
function greet(name,myfunction){
    console.log("how are you");
    
    myfunction(name)
    
}
function sayname(name){
    console.log(`my name is ${name}`);
    
}
setTimeout(greet,2000,"john",sayname)