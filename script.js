

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
        return 'وزنك صحي';
    }
    else if (bmi>=25){
        return 'لديك زيادة في الوزن';
    }
 }


 function calculate(){
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let bmi = BMI(weight,height);
    let desc = Status(bmi);
    
document.getElementById("result").innerHTML = `<h2>your BMI is ${bmi} <br> ${desc}</h2>`;
if (desc=='لديك نقص في الوزن'){
    document.getElementById("result").style.color="orange";
}
else if (desc == 'وزنك صحي'){
    document.getElementById("result").style.color="green";
}
else if (desc=='لديك زيادة في الوزن'){
    document.getElementById("result").style.color="red";

}
console.log(`your BMI is ${bmi} and ${desc}`);


 }
