//M Romi Ario - Exercise 16 Week 4
function graduates (students) {
    var classStudent= [];
    var grad = new Object();
    for(var i = 0;i<students.length;i++){
        if(classStudent.indexOf(students[i].class)==-1){
            classStudent.push(students[i].class);
        }
    for(var j=0;j<classStudent.length;j++){
        grad[classStudent[j]] = []
        for(var k=0;k<students.length;k++){
            if(students[k].class==classStudent[j]){
                if(students[k].score>75){
                    var obj ={
                        name:students[k].name,
                        score: students[k].score
                    }
                    grad[classStudent[j]].push(obj);
                }

                }
            }
        }
  }
    return grad;
}

console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}