// abstract equality operator
console.log(null == undefined);
console.log(null === undefined);
console.log(10 == "10");
console.log(10 === "10");
console.log("152" == 152);
console.log(true == 1);
console.log(false == 1);

console.log(10 == {valueOf(){return 10;}});

let ans =0;
for(let i=0;i<"5"; i++){
    ans++;
}
console.log(ans);

// Nan(Not A Number )

let a = "10";
let b = "abc";
let c = "ajay";
let d = 10-c;

console.log(a ,b,c,d);
console.log(isNaN(a));
console.log(isNaN(b));
console.log(isNaN(c));
console.log(isNaN(d));

console.log( "Last" , (NaN == NaN));