/* 
 *Array => struktur data yg bisa menyimpan lebih dari satu nilai
 
 * syantax Array
 * Mendefinisikan array dengan nilai default 
 * keywordVariable NamaArray = [nilai1,....nilai.....]
 * 
 * es6
 * keywordVariabel NamaArray = new Array (banyakData)
 * 
 * index => urutan data nya (semua index start dari)
 * 
 * Method Array:
 * -Mutating = Merubah isi data
 * -push() => untuk menmabhkan nilai, di index terkahir
 * -namaArr.push(nilainya)
 * -non-Mutating = membuat array baru
 * -shift() => untuk menghapus data pertama dari index
 * -unshift() => untuk menambahkan data pertama dari index
 * -pop() =>
 * -splice() => menambah, menghapus, mengedit isi Array. tapi di posisi tertentu

*/

let mewing = ["akhsa", "ejar"]
console.log(mewing);

mewing.push("fahri", "dewang", "shaka")
console.log(mewing);

mewing.pop() //
console.log(mewing);

mewing.shift()  //buat menghaous nama data dari index pertama
console.log(mewing);

mewing.unshift("hello world") //untuk menambahkan data dari index pertama
console.log(mewing);

//contoh splice :


// hapus data
let temanSaya = ["shaka", "fahri", 1]
console.log(temanSaya);
temanSaya.splice(2, 1)
console.log(temanSaya)

// nambah data
//namaArr.splice (index, jumlah dataDihapus, item baru nya)
temanSaya.splice(2, 0, "im-Batman")
console.log(temanSaya)

//edit data / mengganti data
//namaArr.splice (index, dataDihapus,dataBaru)
temanSaya.splice(0, 1, "apel")
console.log(temanSaya)

// penjelasan nya karena index itu menghitung nya itu dari 0


//sort() => untuk mengurutkan data yg berantakan
let velue = [2, 3, 1, 5, 4]
velue.sort()
console.log(velue);

let nilai = [1, 12, 13, 3, 21, 20, 5, 6, 80]
nilai.sort((a,b)=> a - b)
console.log(nilai)

//reverse() => untuk membalikan urutan nya
velue.reverse()
console.log(velue);

nilai.reverse()
console.log(nilai)



//Array Method non-mutating
/*
1.slice () => ambil sebagian data 
2.concat () => menggabungkan arr
3.map () => transformasi setiap item
*/

//contoh slice
let data = [1, 2, 3, 4, 5]
let newArr = data.slice(3, 5)
console.log(data);
console.log(newArr);

//contoh concat
let arr1 = [1, 2]
let arr2 = [3, 4]
let hasil = arr1.concat(arr2)
console.log(hasil);

//contoh map
let angka = [1, 2, 3]
let kaliDua = angka.map(n => n*2)
console.log(kaliDua);
