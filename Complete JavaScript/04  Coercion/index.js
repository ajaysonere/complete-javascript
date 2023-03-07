// coercion in js

// console.log(1 + "2");
// console.log(true - 4);
// console.log(1 - 'abc');
// console.log('a' - true);
// console.log("as"  - "sa");
// console.log(11 - {"a": 10 , valueOf(){return this.a}});

console.log(11 - {"a":5 , valueOf(){return this.a}});

console.log(33 + {a:20});
console.log("33" - { a: 30 });
console.log(33 - { a: 30 });