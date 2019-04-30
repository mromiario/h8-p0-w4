//M Romi Ario - Exercise 11 - Week 4
function shoppingTime(memberId, money) {
    listShop = [];
    var change = 0;
    if(memberId == '' || memberId == null){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    } else if (money<50000){
        return 'Mohon maaf, uang tidak cukup'
    } else{
        if(money-change>=1500000){
            listShop.push('Sepatu Stacattu');
            change += 1500000;
        }
        if(money-change>=500000){
            listShop.push('Baju Zoro');
            change += 500000;
        }
        if(money-change>=250000){
            listShop.push('Baju H&N');
            change += 250000;
        }
        if(money-change>=175000){
            listShop.push('Sweater Uniklooh');
            change += 175000;
        }
        if(money-change>=50000){
            listShop.push('Casing Handphone');
            change += 50000;
        }
        var buyer = {
            memberId: memberId,
            money: money,
            listPurchased: listShop,
            changeMoney: (money-change)
        }
        return buyer;
    }

  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja