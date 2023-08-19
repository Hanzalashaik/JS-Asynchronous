// function calling the another function in it is called call back function

function greet(name,callme){
    console.log("hello");
    callme(name)
}
function sayname(myname){
    console.log(`My name is ${myname}`);
    
}
greet("hanzala",sayname)

//Addtion of two numbers

function getnumbers(num1,num2,callback){
    console.log(`The addition of ${num1} and ${num2} is:`);
    callback(num1,num2)
    
}
function addtwonumbers(num1,num2){
    console.log(num1+num2);
    
}

getnumbers(23,4,addtwonumbers)

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