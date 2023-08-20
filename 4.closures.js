
function greet(){
    let name="hanzala";
    function displayname(){
        return "Hi "+name
    }
    return displayname;
}
let x=greet();
console.log(x);//ƒ displayname(){
                     //     return "Hi "+name
                        // }

console.log(x());//Hi hanzala
