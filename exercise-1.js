//M Romi Ario - Exercise 1 Week 4
function angkaPrima(angka) {
    var i=2;//bilangan prima terkecil
    var prima = true;
     while(i<angka){
        if(angka%i == 0){ //jika angka dapat dibagi angka lain selain dirinya
            prima = false;
      }
        i++;
  }
    if (angka<=1){
        prima = false;
}
    return prima;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false