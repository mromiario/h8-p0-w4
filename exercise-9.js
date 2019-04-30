// M Romi Ario - Exercise 9
function checkAB(num) {
    var check = false;
    for(i=0;i<num.length;i++){
        var count = 0;
        if(num[i]==='a'){ //cek a to b
            var j=i+1;
            while((num[j] != 'b' || count<3) && j<num.length){
                count++;
                j++;
            }
            if(num[j] == 'b' && count == 3){
                check = true;
            }
            
        }   
        if(num[i]==='b'){ //cek b to a
            var k=i+1;
            while((num[k] != 'a' || count<3)  && k<num.length){
                count++;
                k++;
            }
            if(num[k] == 'a' && count == 3){
                check = true;
            }
            
        }   
    }


    return check;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false