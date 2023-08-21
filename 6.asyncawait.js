//We use the async keyword with a function to represent that the function is an asynchronous function. The async function returns a promise.

async function weather(){
    let delhiweather=new Promise((reslove,reject)=>{
        setTimeout(()=>{
            reslove("24 degree");
        },4000)
    })

    let hyderabadweather=new Promise((reslove,reject)=>{
        setTimeout(()=>{
            reslove("21 degree")
        },2000)
    })

    console.log("Fetching Delhi weather data Please wait .....");
    let delhi=await delhiweather;
    console.log("Delhi weather has been fetched",delhi);
    
    console.log("Fetching Hyderabad weather data Please wait .....");
    let hyderabad=await hyderabadweather;
    console.log("Hyderabad weather has been fetched",hyderabad);
    return [delhi,hyderabad]
}

console.log("Welcome to Weather Control Room");

let a=weather();
console.log(a);

