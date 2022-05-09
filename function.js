

//calculation of age function

const ageCalculation = ( name, dob ) => {
    let age = 2022 - dob;

    if(age>=0 && age<=12){
        return (`
        Hi ${name}, your age is ${age} & you're a children
        `)
    }else if (age>=13 && age<=19){
        return (`
        Hi ${name}, your age is ${age} & you're a teenager
        `)
    }else if (age>=20 && age<=50){
        return (`
        Hi ${name}, your age is ${age} & you're a young people
        `)
    }else if (age>50){
        return (`
        Hi ${name}, your age is ${age} & you're a old people
        `)
    }
}

    //Area Calculation function

    const areaCal = (type, value1, value2) =>{
        let shape;
        let area;

        switch(type){
            case 'r':
                shape = 'Rectangle';
                area = value1*value2;
                break

            case 's':
                shape = 'Square';
                area = value1*value1;
                break

            case 't':
                shape = 'Triangle';
                area = (value1*value2)/2;
                break
        }

        return (`The value of ${shape} is ${area}`)
    }

    //GPA, GRADE function for result publishing

    const getGpa=(marks)=>{
        let gpa;

        if(marks>=0 && marks<33){
            gpa=0;
        }else if(marks>=33 && marks<40){
            gpa=1;
        }else if(marks>=40 && marks<50){
            gpa=2;
        }else if(marks>=50 && marks<60){
            gpa=3;
        }else if(marks>=60 && marks<70){
            gpa=3.50;
        }else if(marks>=70 && marks<80){
            gpa=4;
        }else if(marks>=80){
            gpa=5;
        }
        return gpa;
    }

    const getGrad=(marks)=>{
        let grad;

        if(marks>=0 && marks<33){
            grad='F';
        }else if(marks>=33 && marks<40){
            grad='D';
        }else if(marks>=40 && marks<50){
            grad='C';
        }else if(marks>=50 && marks<60){
            grad='B';
        }else if(marks>=60 && marks<70){
            grad='A-';
        }else if(marks>=70 && marks<80){
            grad='A';
        }else if(marks>=80){
            grad='A+';
        }
        return grad;
    }

    //Age calculator function


const ageCal=(name, dob)=>{
    let age =2022-dob;
    return`Hi ${name}, you age ${age} years old`;

}


// BMI Calculation function for health


const bmiCal=(name, height, weight)=>{
    bmi= weight / (height*height);

    if(bmi < 18.5){
        return `Hi ${name}, your BMI is ${bmi}. Now you are Underweight`
    }else if(bmi >= 18.5 && bmi <= 24.9){
        return `Hi ${name}, your BMI is ${bmi}. Now you are Healthy`
    }else if(bmi >= 25.0 && bmi <= 29.9){
        return `Hi ${name}, your BMI is ${bmi}. Now you are Overweight`
    }else if(bmi > 30.0){
        return `Hi ${name}, your BMI is ${bmi}. Now you are Obese`
    }
}



//Currency converter function

const curConv=(amount, type)=>{
    let rate;
    

    switch(type){
        case 'USD':
        rate=85.76;
        break;

        case 'CAD':
            rate=68.35;
            break;

        case 'POUND':
            rate=112.62;
            break;

        case 'EURO ':
            rate=93.53;
            break;
    }
    let sum= amount*rate;
    return `${amount} ${type} = ${sum} BDT`;
}

