// Creating & assigning a variable to my current age
var myAge = 27;

// Pertaining to dog's aging faster in their first 2 years of life versus later on
var earlyYears = 2;

earlyYears *= 10.5; // 21

var laterYears = myAge - 2; // Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it,
                            // to account for the constant aging rate of 4 years after the first 2 years of a dog's life

// Calculating the constant aging rate of 4 years after the first 2 years of a dog's life comparable to my age
laterYears *= 4;

//Getting the actually value of a dog's age comparable to my age 
var myAgeInDogYears = earlyYears + laterYears;

// Getting my name in lower case letters
var myName = "MATTHEW";
myName = myName.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
