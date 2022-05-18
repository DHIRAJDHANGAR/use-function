// var a = "Vidhya";
// function tryMe(){
//     let name = "Dhiraj";
//     let age = 24;
//     // console.log("LN 5.1",name + " LN5.2",age);
//     function tryMe2(){
//         let name1 = "kumar";
//         let age1 = 20;
//         return name1 +" "+ age1;
//         // console.log(name1 , age1);
//     }
//     console.log(tryMe2());
//     return name +" "+ age;
// }
// tryMe();
// console.log("LN 9", tryMe2());
// console.log("LN 10", a);


//         scope       //
// var a = 10;                       //golbal scope  creation    excusion
// let c = 34;                       //script        creation    excusion
// const s = 35;                     //script        creation    excusion

// function tryMe(){                 //golbal scope  creation    excusion
//     var a1 = 23;                  //local         creation    excusion
//     const c2 = 33;                //local         creation    excusion
//     let v = 12;                   //local         creation    excusion

//     {
//         var d = 35;               //local         creation    excusion
//         const d1 = 45;            //block         creation    excusion
//         let d2 = 55;              //block         creation    excusion
//     }
// }
// {
//     var d = 35;                   //global        creation    excusion
//     const d1 = 45;                //block         creation    excusion
//     let d2 = 55;                  //block         creation    excusion
// }
// tryMe();

//           for nested function find scope       //
var a = 1;                             //global        creation    excusion
let a1 = 11;                           //script        creation    excusion
const a2 = 111;                        //script        creation    excusion
// console.log("LN 47", a,a1,a2);

function tryMe() {                     //global        creation    excusion
    var c = 2;                         //local         creation    excusion
    let c1 = 22;                       //local         creation    excusion
    const c2 = 222;                    //local         creation    excusion
    // console.log("LN 53", c,c1,c2);
    // return "ccc";

    function tryMe2() {                //local         creation    excusion
        var d = 3;                     //local         creation    excusion
        let d1 = 33;                   //local         creation    excusion
        const d2 = 333;                //local         creation    excusion
        // console.log("LN 60", d,d1,d2);
        // return "ddd";

        function tryMe3() {            //local         creation    excusion
            var f = 4;                 //local         creation    excusion
            let f1 = 44;               //local         creation    excusion
            const f2 = 444;            //local         creation    excusion
            // console.log("LN 67", f,f1,f2);
            return "fff";
        }
        tryMe3();
        // console.log("LN 71",tryMe3());
    }
    tryMe2();
    // console.log("LN 74",tryMe2());
}
tryMe();
// console.log("LN 77", tryMe());