

// function A(a, b) {
//     console.log(a + b)
// };

// console.log(
//     A(20, 30)
// );



// function MyFun(b) {
//     console.log("Myfun is Run");
//     b();


// };

// MyFun(function b() {
//     console.log("b is runing....")
// });



// function Data() {
//     console.log("This is Data Fuction.....");
//     Simple();


// }

// function Simple() {
//     console.log("Simple Function.... ")
// }

// Data();


// function A() {
//     console.log("This is A function.......");

//     function B() {
//         console.log("This is B Function.....");



//     }
//     B();
// };

// A();  


function A() {

    setTimeout(() => {
        console.log(" A is Runing....."); 

        B();
    }, 2000)


};


function B() {
    console.log(" B is Runing ... ")
}


A();


