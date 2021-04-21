/* String
const what = "JONGBO";
console.log(what);
*/
/* Boolean
const wat = false;
console.log(wat);
*/

//Number
//const wat=666;

//Float
//const wat = 55.1;

//Array - can use with different types of variables
//const dayOfWeek =["Mon","Tues", "Wedn","Thurs","Fri", "Sat", "Sun"];
//console.log(dayOfWeek);

//Object
//  const jbInfo = {
//      name: "jongbo",
//      age: 36,
//      gender: "Male",
//      isHandsome: true,
//      favMovies:[
//          "Along with gods", "LOTR", "Oldboy"
//      ],
//      favFoods: [
//          {
//              name: "Kimchi",
//              fatty: false
//          },
//          {
//              name:"Cheese burger",
//              fatty: true
//          }
//         ]
//     };

//     // console.log(jbInfo);
//     // console.log(jbInfo.gender);
//     // jbInfo.gender = "Female";
//     // console.log(jbInfo.gender);
//     console.log(jbinfo, console)


function sayHello(name,age) {
    return(
        `Hello ${name}, you are ${age} years old.`
        );
}

const greetJongbo = sayHello('jongbo', 36);

console.log(greetJongbo);


const calculator = {
    plus: function(a,b){
        return  a + b ;
    },
    minus: function(a,b){
        return  a - b ;
    },
    multi: function(a,b){
        return  a * b ;
    },
    devide: function(a,b){
        return  a / b ;
    },
    power: function(a,b){
        return  a ** b ;
    }
}
const plus = calculator.plus(6,3)
const minus = calculator.minus(6,3)
const devide = calculator.devide(6,3)
const multi = calculator.multi(6,3)
const power = calculator.power(6,3)
console.log(plus);
console.log(minus);
console.log(devide);
console.log(multi);
console.log(power);