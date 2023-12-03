//Part 1 Thinking Functionally

//Take an array of numbers and return the sum
const basketNumbers = [15, 76, 5, 45, 67]
const addArray = (numArray) => {
    let sum = 0;
    for(let i = 0; i <= numArray.length - 1; i++) {
        sum = sum + numArray[i];
    }
    return sum;
}
console.log(addArray(basketNumbers));

//Take an array of numbers and return the average
const avgArray = (avgArray) => {
    let sum = 0;
    for(let i = 0; i <= avgArray.length - 1; i++) {
        sum = sum + avgArray[i];
    }
    return sum / avgArray.length;
}
console.log(avgArray(basketNumbers));

//Take an array of numbers and return the longest string
const lambChop = ["This", "is", "the", "song","that", "never", "ends"];

const longString = (groupString) => {
    let longestString = '';
    for(let i = 0; i <= groupString.length - 1; i++){
        if(groupString[i].length > longestString.length){
            longestString = groupString[i];
        }
    }
    return longestString;
}
console.log(longString(lambChop));

//Take an array of strings, and a number and return an array of the strings that are longer than the number given
const givenNumString = (groupString, num) => {
    let arrayStrings = [];
    for(let i = 0; i <= groupString.length - 1; i++){
        if(groupString[i].length > num){
         arrayStrings.push(groupString[i]);
        }
        
    }
    return arrayStrings;
}
console.log(givenNumString(lambChop, 2));
// Optional- Take a number n, and pring every number between 1 and n without using loops. Use recursion.

//Part 2 Thinking Methodically

// const data = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
// { id: "48", name: "Barry", occupation: "Runner", age: "25" },
// { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
// { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }];
// //Sort the array by age.
// data.sort(function( a, b ){ return a. age - b. age; });
// console.log(data);

//Filter the array to remove entries with an age greater than 50.
// const data = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
// { id: "48", name: "Barry", occupation: "Runner", age: "25" },
// { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
// { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }];
// let returnAge = (arr, num) => arr.filter(n => n > num);
// n = 50;
// console.log(returnAge( [41, 25, 19, 58, 111], 50))


//Map the array to change the “occupation” key to “job” and increment every age by 1.
// const data = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
// { id: "48", name: "Barry", occupation: "Runner", age: "25" },
// { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
// { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }];

//NEED HELP

//Use the reduce method to calculate the sum of the ages.
const data = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
{ id: "48", name: "Barry", occupation: "Runner", age: "25" },
{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }];
const objects = [{ x: 41 }, { x: 25 }, { x: 19 }, { x: 58 }, { x: 111 }];
const sum = objects.reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  0,
);
console.log(sum);

//Then use the result to calculate the average age.
//NEED HELP

//Part 3 Thinking Critically
// For this section, develop functions that accomplish the following:
// Take an object and increment its age field.

// Take an object, make a copy, and increment the age field of the copy. Return the copy.

// For each of the functions above, if the object does not yet contain an age field, create one and set it to 0. Also, add (or modify, as appropriate) an updated_at field that stores a Date object with the current time.
//