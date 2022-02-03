console.log("hello darkness");
let nom = "me";
let prenom = "you";
console.log(nom + " " + prenom);

let person = { 
    name : "me", 
    prenom : "you",
    isStudent : false,
    
}
console.log(person.name);

let a = 6 ;
console.log(a);
a += 5 ; 
console.log(a);
let b = 7 ;
if (a < 1 || a > 11){
    console.log("YES");
}
else {
    console.log("NOP");
}
function login (name , password){
    if(name=="me"&& password =="123")
    console.log("welcome");
    else console.log("NOP");
}
// appel funcion
console.log(login("me" , "123"));

