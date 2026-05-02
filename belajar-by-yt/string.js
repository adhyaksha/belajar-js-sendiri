//! string

//! 1. escaping string
//? penjelasan = cara supaya karakter khusus tetap dibaca sebagai string, bukan sebagai perintah code.
/**
 //? macam macam escape sequence (kode escape) yaitu
 * \"" digunakan untuk menulis kutip di dalam string
 * \'' kurang lebih sama dengan yg pertama
 * \n digunakan ketika kita ingin membuat baris baru tapi masih di dalam string
 * \t digunakan untuk membuat tab di dalam sting
 * \\ digunakan ketika ingin memberikan lambang slash di dala string
 * \uXXXX digunakan untuk memberikan emoji atau simbol tertentu contohnya : /u2764 => ❤️
 */

 //todo: contoh dari escaping kutip
 let escaping = 'hallo semua nya saya dari \"sekolah letris"'
 console.log(escaping) //?output => hallo semua nya saya dari "sekolah letris"

 //todo: contoh dari escaping new line
 let escaping1 = "nama : akhsa \nkelas : RPL-2 \ndifisi : ketuaGeng sekolah"
 console.log(escaping1) //?output => dia akan turuh di line bawah nya dan terlihat rapih

 //todo: contoh dari escaping tab
 let escaping2 = "hallo \tkirana"
 console.log(escaping2) //?output=> hallo   kirana

 //todo: contoh dari escaping slash
 let escaping3 = "cd:document \\akhsa\\kirana"
 console.log(escaping3) //?output => cd:document \akhsa\kirana

 //todo: contoh dari escaping unicode
 let escaping4 = "\u2708"
 console.group(escaping4) //?output => logo pesawat

 let escaping5 = "\u2728"
 console.log(escaping5) //? output => logo bintang




//! 2. literal string
//? literal string adalah nilai mentah yg langsung di tulis di dalam strin
//? di dalam js es6 : literal juga sudah menggunakan cara modern yg lebih cepat dan efisien yaitu dengan cara yg nama nya interpolasi string=> '${}'
//? onsep interpolasi string ini yaitu denga memasukan variable/nilai ke dalam string secara langsung, dan code nya pun terlihatrapih
//todo: ini adalah contoh lama literal string
let nama = "akhsa"
let kelas = "11 RPL-2"
let umur = 17
let bioData = nama + " " + kelas + " " + umur
console.log(bioData) //?maka hasil yg keluar adalah (akhsa 11 RPL-2 17)
//ini di sebut cara lama, karena cara nya yg tidak efisien dan fungsional

//todo: ini adalah contoh cepatnya membuat literal string (interpolasi string)
let name = "apel"
let celas = 12
let age = 17
console.log(`${name} ${celas} ${age}`) //? hasil nya adalah (apel 12 17)
//ini cara cepat dan efisien, apalagi jika kita ingin membuat data atau object yg sangat banyak, ini akan sangat membantu

