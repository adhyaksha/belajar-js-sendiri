//! operator logika
//*ada tiga yaitu and, or, not
//todo operator lagika ini dipakai biasanya di gunakan di looping




//? not (!)
//* operator not = dia itu membalikan nilai yg tadinya true di balik menjadi false atau di sebut data boolean, begitu juga sebalik nya
//* contoh nya ada dibawah ini:

//todo: contoh level pertama
fahri = true
console.log(!fahri) //* hasilnya false karena dia membalikan nilai true menjadi false


//todo: contoh level kedua
let index = true
for (let index = 0; index < index.length; index++) {
    const element = array[index];
    
}console.log(!index) //*hasil yg keluar adalah false


//todo: contoh level ketiga
let nilai = [2, 4, 12, 90, 35, 29, 17]
for (let i = 0; i < nilai.length; i++) {
    if ((nilai[i] > 2 && nilai[i] < 15) || nilai[i] === 2){
        console.log(nilai[i])
    }
} //* hasilnya : 2, 4, 12





//? or (||)
//* penjelasan = dia itu menghasilkan nilai true ketika ada kondisi yg true
//* contoh code ada di bawah ini

//todo: contoh level pertama
let a = true
let b = false
console.log(a || b) //* hasilnya true, karena ada salah satu nya yang true

//todo: contoh level kedua
let isi = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
for (let i = 0; i < isi.length; i++) {
    if (isi[i] < 5 || isi[i] >10) {
        console.log(isi[i])
    }
    
} //* hasilnya : 1, 3, 11, 13, 15, 17, 19



//? and (&&) 
//* penjelasan = dia itu menghasilkan nilai true ketika semua nya true, tapi jika ada salah satu yg false maka hasilnya false

//todo: contoh level pertama
let c = true
let d = false
console.log(c && d) //* output yg dihasilkan adalah false


//todo: contoh level kedua
let angka = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}