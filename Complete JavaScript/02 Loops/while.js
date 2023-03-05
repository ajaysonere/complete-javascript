
// while loop 
// let i = 1;
// while(i<10){
//     console.log(i);
//     i++;
// }


// // for loop 

// for(let i=0 ; i<10; i++){
//     console.log(i);
// }

// let x = 1;
// do{
//     console.log(x);
//     x++;
// }while(x<10);

for(let i=0; i<5; i++){
    let str = "";
    for(let j=0; true; j++){
        str += "*"; 
        if(i==j){
            break;
        }
    }
    console.log(str);
}