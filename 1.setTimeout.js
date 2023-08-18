// The setTimeout() method executes a block of code after the specified time.
//  The method executes the code only once.

// Method 1
function box() {
    console.log('This is a box');
}
setTimeout(box,3000)
////////////////////////////////////////////////
//Method 2

setTimeout(function rectangle(){
    console.log("This is rectangle");
    
},4000)
//////////////////////////////////////////////////////
//Method 3

setTimeout(()=>{
    console.log("This is Aynonumous function");
    
},5000)



//With Arguments

function add(a,b){
    console.log( a+b);
    
}

setTimeout(add,1000,5,4)

//ClearTimeOut

// program to stop the setTimeout() method

let count = 0;

function increaseCount(){

    // increasing the count by 1
    count += 1;
    console.log(count)
}

let id=setTimeout(increaseCount,1000)

clearTimeout(id)
console.log('setTimeout is stopped.');