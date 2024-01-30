// even numbers
// for(i=1; i<10; i++){
//     if(i%2 == 0){
//         console.log("Even-"+i);
//     }
// }

// odd numbers
// for(i=1; i<10; i++){
//     if(i%2==1){
//         console.log("Odd-"+i);
//     }
// }

// ! == odd

// for(i=0; i<10; i++){
//     if(i%2 !== 0){
//         console.log("!== result = "+i);
//     }
// }

// for(i=3; i<10; i+=3){
//     console.log("3 increase = "+i);
// }

// let num = 5;
// while(num < 30){
//     if(num % 5 == 0){
//         console.log(num);
//     }
//     num++;
// }

// for(i=1; i<30; i++){
//     if(i%5 == 0){
//         console.log(i);
//     }
// }

// for(i=1; i<100; i++){
//     if(i%3===0 && i%5===0){
//         console.log(i);
//     }
// }

// let num = 1;
// while(num < 50){
//     if(num%3===0 || num%5===0){
//         console.log(num);  
//     }
//     num++;
// }


// let total = 0;
// for(i=1; i<20; i++){
//     if(i%3 === 0){
//         console.log(i);
//         total += i;
//         console.log("Total=",total);
//     }
// }
// console.log("Sum=",total);


let total = 1;
let sum = 0;
while(total < 20){
    if(total % 3 === 0){
        result = sum += total;
        console.log(sum);
    }
    total++;
}
console.log("Sum = ", sum);