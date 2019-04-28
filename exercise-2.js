//Exercise 2 - M Romi Ario - Week 4
function fpb(angka1, angka2) {
    // Membagi angka sampai sisanya 0
    var mod;
    while(angka2 !== 0){
        mod = angka1%angka2;
        angka1 = angka2;
        angka2 = mod;

  }
    return angka1;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1