// Exercise 4 - M Romi Ario - Modus
function cariModus(arr) {
    var angkaUnik = [];
    var hitungAngka = [];

    for(var i = 0; i<arr.length; i++){ //Mencari angka unik yang ada di list
        if(angkaUnik.indexOf(arr[i]) == -1){
            angkaUnik.push(arr[i]);
        }   
    }
    
    for(var j=0; j<angkaUnik.length; j++){ //Hitung jumlah angka unik yang muncul
        var count = 0;
        for(var k=0; k<arr.length; k++){
            if(angkaUnik[j] === arr[k]){
                count++;
            }
        }
        hitungAngka.push(count);
    }

    var max = 0;
    for(var l=0; l<hitungAngka.length; l++){ // Mencari jumlah maksimum yang terhitung
        if(hitungAngka[l]>max){
            max = hitungAngka[l];
        }
    }


    if(angkaUnik.length == 1 || max == 1){
        return -1
    } else{
        return angkaUnik[hitungAngka.indexOf(max)]; 
    }
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1