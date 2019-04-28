//Exercise 8 - M Romi Ario
function tukarBesarKecil(kalimat) {
    var newKalimat = '';
    for(var i=0;i<kalimat.length; i++){
        var upper = kalimat[i].toUpperCase();
        if(kalimat[i]=== upper){
            newKalimat += kalimat[i].toLowerCase();
        } else{
            newKalimat += kalimat[i].toUpperCase();
        }
    }
    return newKalimat;
}


// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"