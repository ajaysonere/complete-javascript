// for in is used for iterating the key of an object
const person = {
    name: 'John',
    age: 30,
    occupation: 'Engineer'
};

for(let key in person){
    console.log(key + " " + person[key]);
}

// for of loop is used for 
let arr = [10,20,30,40,50];

for(let x of arr){
    console.log(x + " ");
}

