//M Romi Ario - Exercise 10 - Week 4
function changeMe(arr) {
  for(var i=0;i<arr.length;i++){
      console.log((i+1)+'. '+arr[i][0]+' '+arr[i][1]);
      var convAge;
      if(arr[i][3] == undefined || arr[i][3]>2019){
          convAge = 'Invalid Birth Year';
      } else{
          convAge = 2019-arr[i][3];
      }

      var changeObj = {
          firstName: arr[i][0],
          lastName: arr[i][1],
          gender: arr[i][2],
          age: convAge
      }
      console.log(changeObj);
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""