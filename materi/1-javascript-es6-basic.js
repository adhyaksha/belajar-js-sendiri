
//fitur fitur ES6 :

//1. Deklarasi variable let dan cont:
/*      -. let : block-scupe ({}), niali tidak bisa berubah namun tidak bisa deklarasi ulang.
        -. const : block scube ({}), nilai masih bisa berubah namun tidak bisa di deklarasi ulang
*/

//perbedaan deklarasi ulang (rerodeclare) dengan definisi ulang (redefine)

/*

//contoh let

let nama = "fahrul"
console.log(nama);
nama = "fahri"
console.log(nama);





//contoh let dengan scupe
let umur = "17"
{
    let umur = "25"
    console.log(umur);
}
console.log("umur kamu sekarang adalah :");




//contoh const
const pajak = 100
console.log(pajak);


//contoh const dengan scupe
const g_force = 9.8;
{
    const g_force = 0;
    console.log(g_force);
}
console.log(g_force);



//contoh redefine
let buah = "apel";
buah = "semangka";
console.log(buah);//ini yg di sebut redifine, karena 


//contoh declaration dan Arrow Function

//contoh declaration function
function sayHelloWorld(){
    console.log("fungsi deklarasi");
}
sayHelloWorld()


//contoh Arrow Function
const sayHelloArrow = () => {
    console.log("Fungsi Arrow");
}
sayHelloArrow()

*/

//operator penugasan
let a = 5;//ini tuh masukin 5 ke variable a
{a +=10// kalau ini tambah 5 ke variable a
    console.log(a);
}

{a -=5
    console.log(a);
    
}

{a *=10
    console.log(a);
    
}

{a /=5
    console.log(a);
    
}

{a **=2
    console.log(a)
}

///perbandingan
// let x =10
// let y ="10"
// console.log(x == y);


let x = 5
console.log(x)