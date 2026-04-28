/*    operator ternary dan intanceof
  *operator typeof = penjelasan : untuk mengecek tipe data
  *instnceof = penjelasan : untuk mengecek sebuah object apakah instance dari kelas
  *object instanceof constructor

*/

//operator ternary


//let age = 12 //ini var kalau mau menjalan kan yg ada di bawah ini

/* //ini cara umum
if (age >= 18) {
  console.log("dewasa");
  
} else {
  console.log("bocah")
}
  */

//pakai metode ternary, kayak lebih short hand, jadi kode nya lebih sedikit

let status = (age >= 18) ? "DEWASA" : "BOCIL" ;
console.log(status);