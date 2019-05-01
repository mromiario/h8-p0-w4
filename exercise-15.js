// M Romi Ario - Exercise 15 - Weeks 4
function highestScore (students) {
    var classStudent= [];
    var finalClass = new Object();
    for(var i = 0;i<students.length;i++){
        if(classStudent.indexOf(students[i].class)==-1){
            classStudent.push(students[i].class);
        }
  }
    for(var j=0;j<classStudent.length;j++){
        var maxScore =0;
        var maxName;
        for(var k=0;k<students.length;k++){
            if(students[k].class==classStudent[j]){
                if(students[k].score>maxScore){
                    maxScore = students[k].score;
                    maxName = students[k].name;
                }
            }
        }
        finalClass[classStudent[j]] = {name : maxName,
            score : maxScore};
    }
    return finalClass;
}

// TEST CASE
console.log(highestScore([
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
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
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
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}