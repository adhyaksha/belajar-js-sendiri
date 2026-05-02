//contoh type of

console.log(typeof "abc");// maka yg akan mucul itu dia string
console.log(typeof 123); //maka yg akan muncul itu number
console.log(typeof []); //maka yg keluar adalah object
console.log(typeof true); //maka yg keluar adalah boolean



//contoh instanceof
class hewan {};
let kucing = new hewan();
console.log(kucing instanceof hewan);