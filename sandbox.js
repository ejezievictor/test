//alert('messages for you');
// let email = "ejezievictor7@gmail.com";
// console.log(email);

// let myAge= 25
// console.log(myAge);

// let firstname = "victor";
// let lastname = "ejezie";
// let fullname = firstname +' '+ lastname;


// console.log(fullname);

// console.log(fullname.toUpperCase( ));
// console.log (fullname.length);

// //let result = email.lastIndexOf('m');
// //let result = email.slice(0,1);
// let result = email.substr(3,8);
// console.log (result);

// let radius = 10;
// let pi = 2;

// let answer = radius % 3; 
// console.log (answer )
// let final = pi * radius ** 2
// console.log (final) ; 

// let dogs = ['nama, vvv, kfkkf, kkee '];
// console.log (dogs); 

// let my = 0;
// //my = Number(my)
// my = Boolean(my)
// console.log (my, typeof my)

// for (let i = 0; i < 5; i++){
//     console.log('in loop:', i);
// }

// const x = 5;
// const y = 10;

// const 



// // x =5

// var z= x+y

// document.write(z)

// o = 1
// p = 0
// w = o^p
// document.write("<br>")
// document.write(w);

// let car = ["benz", "bmw", "bugatti"]
// document.write("<br>")

// document.write(car);

// let addy = (a, b) => {
//     return a * b;
// }
// const add = addy(21, 90);
// document.write("<br>");
// document.write(add)
// console.log(add)
 
// let myname = "victor"
// let nickname = "Starlord"
// let sum = myname + nickname
//  document.write(sum)

const fibunaccisequence = (num) => {
    let store = [1, 1];
    for(let i = 0; i< num; i++){
        store.push(store[i] + store[i + 1]);
    }
    return store;
    }

    const twosum = (num1, num2) => {
        return num1 + num2;

}
twosum(5, 7);
   console.log(fibunaccisequence(10));

// 