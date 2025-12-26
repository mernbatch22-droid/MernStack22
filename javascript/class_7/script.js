console.log("Control folw in js")

// control flow-> it is used to control the code flow 
//if, if-else, if-else-ladder

//1) if -: ka use sirf kuch shi ho tp batame ke liye hota h

// let age = 20

// if (age >= 18) {
//     console.log("you are aigable to drive car")
// }

//2 if else -: if or else ka use agar true h to if wali conditisain
//  chlgi or false h to else wali chalgi else optional hota h

// let age1 = 14

// if (age1 >= 18) {
//     console.log("you are aigable to drive car")
// }
// else {
//     console.log("you are not aligable to drive car")
// }

//3  ladder :- ladder ka use nested if else condetisation ka use karne ke liye hota h

// let age3 = 17

// if(age3>=16){
//     console.log("your age is 16 but you have a child driving lisense you can drive")
//     if(age3>=18){
//         console.log("you are aligable to driive kar")
//     }
// }
// else {
//     console.log("you are not aligable to drive car")
// }

// (2) switch  -:   switch ka use compicated task ko karne 
//ke liye kiya jata h if else ke comparisaon m code redable or simple or stucured way m rhta h
// if ke pass jese else hota h usi tarah is ke pass default hota h or 
// switch case m agar kisi condition ko terminate karna hoto break ka use kiya jata h


let day = 7;

switch (day) {
    case 1: console.log("Monday")
        break;
    case 2: console.log("Tue")
        break;
    case 3: console.log("Wenseday")
        break;
    case 4: console.log("Thruday")
        break;
    case 5: console.log("Friday")
        break;
    case 6: console.log("Saturday")
        break;
    case 7: console.log("Sunday")
        break;
    default: ("envalid input")
}

