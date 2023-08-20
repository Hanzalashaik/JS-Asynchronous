let bucket=["coffee","sugar","tea","vegetables","salt","rice"];

//produce
const friedRicePromise=new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
        resolve("friedRice");
    }
    else{
        reject(new Error("Could not do it"))
    }
})

//consume

friedRicePromise.then((myfriedRice)=>{
    console.log("let's eat",myfriedRice);
    
},
(error)=>{
    console.log(error);
    
})