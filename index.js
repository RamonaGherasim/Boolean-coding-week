console.log("Hello Coding Week")

const myName = "Ramona";
console.log(myName);
const surname = "Gherasim";
let fullName = myName + ' ' + surname;
console.log(fullName);
console.log(`My name is ${myName} ${surname}`);

//Defining arrays
number_array = [1, 2, 3];
string_array = ['Mario', 'Luigi', 'Peach'];

//Adding an element to an array
string_array.push('Bowser');
console.log(string_array);

//Property length
console.log(string_array.length);

//Access values by index
console.log(string_array[0]); //Mario

// CONTROL FLOW
// If Else statements
const x = 3;
const y = 4;

if (x === 3) {
    console.log('X is 3');
} else {
    console.log('X is not 3');
}

if (x === 3 && y === 4) {
    console.log('X is 3 and Y is 4');
}

// Simple loop using console.log
for (let i = 0; i < 10; i++) {
    console.log('Count: ' + i);
}

// Iteration array
const names = ['Edward', 'Nathan', 'Jules']
names[0] = 'Ramona'
for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}