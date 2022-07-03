

function BMI(weight,height){
   return weight/(height*height);
}

let bmi=BMI(52,1.62);
console.log(bmi);

//bonus 1

// function BMI(weight=52,height=162){
//     return weight/(height*height);
//  }
//  let bmi=BMI();
//  console.log(bmi);


 function Status(bmi){
    if (bmi <18.5){
        return 'لديك نقص في الوزن';
    }
    else if (bmi>=18.5 && bmi<25){
        return 'وزنك صحي'
    }
    else if (bmi>=25){
        return 'لديك زيادة في الوزن'
    }
 }