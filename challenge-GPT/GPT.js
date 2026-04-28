//! level 1

let akhsa = true && true
console.log(akhsa)

let akhsa1 = false || true
console.log(akhsa1)

let akhsa2 = !false
console.log(akhsa2)

let akhsa3 = true && false
console.log(akhsa3)

//! level 2
let apel = (true && false) || true
console.log(apel) //* yg dikerjakan itu harus yg di dalam kurung terlebih dahulu, baru si akumulasi ke operator velue yg di luar nya

let apel2 = !(true && false)
console.log(apel2) //* ini juka sama karena yg dia dalam kurung false, dan di luar ada legasi, makanya dia berbalik nilai nya jadi true

let apel3 = false || (false && true)
console.log(apel3) 


//! level 3
