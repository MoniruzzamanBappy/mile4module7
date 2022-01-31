// -------------------------//
// Inches to Feet conversion
//--------------------------\\
function inchesToFeet(inches) {
    let feet = inches / 12;
    return feet;
}

let myInches = 484;
let resultToFeetIs = inchesToFeet(myInches);
console.log(myInches, 'inches =', resultToFeetIs, 'Feet');


// -------------------------//
//  Leap Year Varification
//--------------------------\\
function leapYear(year) {
    if (year % 400 == 0) {
        return true;
    }
    else if (year % 100 == 0) {
        return false;
    }
    else if (year % 4 == 0) {
        return true;
    }
    return false;
}

let myYear = 2020;
let resultToLeapYearIs = leapYear(myYear);
if (resultToLeapYearIs == true) {
    console.log(myYear, 'is a leap year.');
}
else {
    console.log(myYear, 'is not a leap year.');
}


// -------------------------//
// Odd or Even Varification
//--------------------------\\
function oddOrEven(number) {
    let result = number % 2;
    return result;
}

let mynumber = 5;
let resultToOddEven = oddOrEven(mynumber);
if (resultToOddEven == 0) {
    console.log(mynumber, 'is an Even number');
}
else {
    console.log(mynumber, 'is an Odd number');
}


// ----------------------------//
// Factorial number calculation
//-----------------------------\\
function factorialCalc(num1) {
    let resultOfFact = 1;
    for (let i = 1; i <= num1; i++) {
        resultOfFact = resultOfFact * i;
    }
    return resultOfFact;
}

let mynumberfact = 6;
let resultOfFactorial = factorialCalc(mynumberfact);
console.log(mynumberfact, 'factorial is = ', resultOfFactorial);
