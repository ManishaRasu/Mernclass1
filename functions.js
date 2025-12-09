let fun=function(name, password) {
    console.log("This is a function");
    console.log(`Usrname:${name},passwrd:${password}`);
    return [10,20];
    return "hello";
}
console.log(fun("mam", "1234"));
//imediately invoked function expression(IIFE)
(
function(name, password) {
    console.log("This is a function");
    console.log(`Usrname:${name},passwrd:${password}`);
    
})("mam", "1234");


//genrator function
function* gen() 
{
    yield a=10;
    yield b=20;
console.log("This is a generator function");
  
}
let res=gen();
console.log(res.next().value);
console.log(res.next().value);

//