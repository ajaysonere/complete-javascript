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