/*    operator spread  & rest 
  *spread di gunakan untuk "membuka" array / object untuk menjadi '' 
   individu-individu sendiri

   * rest unutk mengumpulkan elemen-elemen, menjadi 1array / object
*/

//contoh spread

const array1 = [1,2]
const array2 = [3,4]
const gabung = [...array1, ...array2] //dia mengisi lalu mensatukan antara array1 dan 2, jadi hasil nya akan [1, 2, 3, 4]
console.log(gabung);



//contoh rest

function sum(...numbers){
  return numbers.reduce((a,b) => a + b, 0)
}
console.log(sum(1,2,3,4));