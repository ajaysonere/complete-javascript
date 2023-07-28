// for in is used for iterating the key of an object
const person = {
    name: 'John',
    age: 30,
    occupation: 'Engineer'
};

for(let key in person){
    console.log(key + " " + person[key]);
}