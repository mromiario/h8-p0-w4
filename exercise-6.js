//Exercise 6 - M Romi Ario
function digitPerkalianMinimum(angka) {
    
    var min=10000; //max value of integer, is it ok?
    for(var i = 1;i<=angka;i++){
        var digit = '';
        if(angka%i==0){
            digit = i+''+angka/i;
            if (digit.length<min){
                min= digit.length;
            }
        }
    }
    return min;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2