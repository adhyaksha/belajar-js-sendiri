//belajar dengan bang Natha

/*

  * operator unary *

   increment
   - pre-increment
          #penjelasan : membalikan lalu ketika di panggil lagi dia menambahkan satu nilai kepada variable tersebut
   - post-increment
          #penjelasan : tidak membalikan, tapi langsung

    dicrement
    #penjelasan : membalikan lalu ketika di panggil lagi di mengurangi satu niilai kepada variable tersebut
   - pre-dicrement
   - post-dicrement 

*/

// let x = 5 //ini nilai kalau mau jalanin yg di bawah ini

/*
let y = '5'
console.log(+x); //ini tuh buat memastikan lagi nilai nya apakah benar atau bukan, penjelasan lebih lanjut nya tanya gpt aja
console.log(-y); //ini juga sama aja
                  // lebih pasti nya tuh kayak kalau kita cetak (+) maka hasil nya positive 5, kalau kita cetak nya (-) maka hasil yg keluar juga -5
*/

/*

// contoh konsep post-incretment
    #ini menambahkan satu
console.log(x++); //membalikan lalu menmabahkan satu (5 + 1)
console.log(x); //ini buat hasil akhir nya

//contoh konsep post-decrement
    #ini mengurangi satu
console.log(x--); //membalikan lalu mengurangi satu (5 - 1)
console.log(x); //ini buat hasil akhir nya

//contoh konsep pre-increment
    #kalau ini dia tidak melakukan pengembalian, tapi langsung ditambahkan satu, makany pas di cetak langsung keluar hasil nya "6"
console.log(++x)

//contoh konsep pre-decrement
    #kalau ini dia tidak melakukan pengembalian, tapi langsung dikurangkan satu, makanya pas di cetak langsung keluar hasil nya "4"
console.log(--x)

*/


/*operator ternary

*/

//let age = 12 //ini var kalau mau menjalan kan yg ada di bawah ini

/*//ini cara umum
if (age >= 18) {
  console.log("dewasa");
  
} else {
  console.log("bocah")
}
  */

//pakai metode ternary, kayak lebih short hand, jadi kode nya lebih sedikit
/*
let age = 15
let status = (age >= 18) ? "DEWASA" : "BOCIL" ;
console.log(status);
*/


/*    operator ternary dan intanceof
  *operator typeof = penjelasan : untuk mengecek tipe data
  *instnceof = penjelasan : untuk mengecek sebuah object apakah instance dari kelas
  *object instanceof constructor

*/

/*
//contoh type of
console.log(typeof "abc");// maka yg akan mucul itu dia string
console.log(typeof 123); //maka yg akan muncul itu number
console.log(typeof []); //maka yg keluar adalah object
console.log(typeof true); //maka yg keluar adalah boolean
*/ 

/*
//contoh instanceof
class hewan {};
let kucing = new hewan();
console.log(kucing instanceof hewan);
*/



/*    operator spread  & rest 
  *spread di gunakan untuk "membuka" array / object untuk menjadi '' 
   individu-individu sendiri

   * rest unutk mengumpulkan elemen-elemen, menjadi 1array / object
*/

//contoh spread
/*
const array1 = [1,2]
const array2 = [3,4]
const gabung = [...array1, ...array2] //dia mengisi lalu mensatukan antara array1 dan 2, jadi hasil nya akan [1, 2, 3, 4]
console.log(gabung);
*/


//contoh rest

function sum(...numbers){
  return numbers.reduce((a,b) => a + b, 0)
}
console.log(sum(1,2,3,4));
