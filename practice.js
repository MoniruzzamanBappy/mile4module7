// -----------------------------//
// Cube of N number calculation
//------------------------------\\
function series(number) {
    let result = (number * (number + 1) / 2) ** 2;
    return result;
}

let myNumber = 12;
let resultOfSeries = series(myNumber);
console.log(resultOfSeries);



// ------------------------//
// Profit Loss calculation
//-------------------------\\
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓\\
// Simple profit loss function
function simpleInterest(principal, rateOfInterest, time) {
    let sinterest = principal * (rateOfInterest / 100) * time;
    return sinterest;
}
// cumulative profit loss function
function cumulativeInterest(cprincipal, crateOfInterest, ctime) {
    let cInterest = (cprincipal * (1 + crateOfInterest / 100) ** ctime) - cprincipal;
    return cInterest;
}

let myPrinciple, myRateOfInterest, myTime;
myPrinciple = 10000;
myRateOfInterest = 5;
myTime = 3;

// Simple profit loss result
let simpleInterestis = simpleInterest(myPrinciple, myRateOfInterest, myTime);
console.log('the simple interest is =', simpleInterestis);

// cumulative profit loss result
let cumuInterestis = cumulativeInterest(myPrinciple, myRateOfInterest, myTime);
console.log('the cumulative interest is =', cumuInterestis);