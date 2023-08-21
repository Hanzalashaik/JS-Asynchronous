let data=new Promise((resolve,reject)=>{
    resolve();
    reject();
})

data.then(()=>{
    console.log("I am first");
    
}).then(()=>{
    console.log("I am second");
    
}).then(()=>{
    console.log("I am third");
    
}).catch(()=>{
    console.log("I am Error");
    
})