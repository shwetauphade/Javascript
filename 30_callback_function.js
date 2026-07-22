function greet(name){
    console.log("Hello" + name);
} 
function processUser(callback){
    callback("shweta" );
} 
processUser(greet);
