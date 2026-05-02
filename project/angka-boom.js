let prompt = require(`../array/node_modules/prompt-sync`)();

let you = prompt("pilih angka 1-10 : ")

let boom = Math.floor(Math.random() *10)+1

if (you == boom){
    console.log("kamu benar");
    
}else{
    console.log(`kamu salah, yg benar adalah ${boom}`);
    
}
