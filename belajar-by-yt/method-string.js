//!method string atau operasi string
//? method string => fungsi bawaan buat ngolah teks/string, karena string di js sering di anggap object, jadi dia punya alat bantu nya sendiri, contoh nya ada di bawah ini

//todo: contoh charAt
//?penjelasan = chartAt ini dia mengambil nilai string berdasarkan posisi index atau nilai yg pengen kita ambil. dan juga dia di mulai dari 0, karena index itu mulau nya dari angka 0
let abjat = "abcde"
huruf = abjat.charAt(0) //*artinya dia ngambil nilai ke1 dari index ke 0
console.log(`maka hasil yg di keluarkan adalah "${huruf}"`)
huruf = abjat.charAt(1) //*artinya dia ngambil nilai ke 2 dari index ke 1
console.log(`maka hasil yg di keluarkan adalah "${huruf}"`)


//todo: menyambungg string (concat)
//? menyambungkan string dengan menggunakan .concat, ya fungsi nya untuk menggabungkan dua nilai
let cihuy = "akhsa"
let aci = "ganteng"

let bergabung = cihuy.concat(" ", aci) //*dipakein kutip dua untuk nambah spasi
console.log(bergabung) //* output nya adalah (akhsa ganteng)
//? ada sedikit kemiripan dengan literal string yaitu sama sama 



//todo: mencari posisi index (indexOf)
//? fungsi nya untuk mencari posisi/index dari suatu nilai di dalam string atau array, contoh ada di bawah ini
//? indexOf berfungsi ketika kita butuh posisi suatu index

let name = "akhsa apel"
console.log(name.indexOf("l"))//* output yg di hasilkan adalah 9, jadi dia itu menghitung posisi si index/velue nya

let number = [10, 20, 30, 40, 50]
let total = number.indexOf(50)
console.log(total)//* output : 4
                //* output 4, karena kalau di pakai koma dia itu seperti di dalam kelompok, dan yg dalam koma di hitung sebakai satu index


let katni = "siang siang jangan lupa makan siang"
console.log(katni.lastIndexOf("makan")) //*hasil output nya 24, karena yg saya butuh kan adalah posisi index dari kata makan
console.log(katni) //*ini mah cuman buat liat doang



//todo: substring
//? penjelasan => biasa si pakai buat ngambil sebagian teks (awal, dan akhir) dari sebuah string / motong dari sebagian teks, contoh di bawah


//? contoh di bawah ini adalah contoh paling basic
let asik = "akhsa apel yg keren lagi leburan ke pantai sambil ngoding"
let asikBgt = asik.substring(6,42) 
console.log(asikBgt)//* ini penggunaan nya sangat amat tidak efisien


//? 
let mabar = "akhsa lagi mabar ml bareng temen temen"
console.log(mabar.substring(0, mabar.length))



//? di bawah ini adalah cara yg lebih efisien untuk menggunakan substring
let pandai = "belajar js bersama teman teman PPLG123"
let pandaiBgt = pandai.indexOf("belajar bersama teman PPLG2")//*ini kalau di cetak hasil -1, karena dia gak nemu nih kata kata("belajar bersama teman PPLG2") makanya hasil nya -1
                                                            //*kenapa gak 0, karena -1 satu itu adalah kode khusus untuk suatu nilai/data yg gak di temukan, kalau ini bukan gak di
                                                            //*tapi emg saya sendiri gy ngambil nya secara acak

console.log(pandai.substring(pandaiBgt)) //hasil nya adalah (belajar bersama teman PPLG2)
console.log(pandaiBgt)//hasil nya -1, penjelasan ada di atas
                                         //* penjelasan buat substring + sama indexOf => jadi yg pertama itu kita inisialisasi mana yg mau kita ambil nih nilai nya menggunakan indexOf
                                         //* kemudian kita cetak dengan menggabungkan variable pertama dan kedua dengan .substring untuk bisa menghasilkan hasil yg kita ingin keluarkan.

