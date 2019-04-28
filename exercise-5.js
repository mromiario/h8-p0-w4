//Exercise 5 - Ubah Huruf
function ubahHuruf(kata) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var newKata = ''
    for(var i =0;i<kata.length;i++){
        var indeks = alphabet.indexOf(kata[i]);
        newKata += alphabet[indeks+1];
    }
    return newKata;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu
