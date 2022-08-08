// codechal1

// var markMass, johnMass, markHeight, johnHeight;
// markMass = 80;
// johnMass = 90;
// markHeight = 1.7;
// johnHeight = 1.8;

// var markBMI, johnBMI;
// markBMI = markMass / markHeight**2;
// johnBMI = johnMass / johnHeight**2;
// console.log(markBMI, johnBMI)

// var markHigher = markBMI > johnBMI;
// console.log("Is Mark's BMI higher than John's?", markHigher)

// codechal2

// var j1, j2, j3, m1, m2, m3, r1, r2, r3, avj, avm, avr;

// j1 = 89;
// j2 = 120;
// j3 = 103;

// m1 = 116;
// m2 = 94;
// m3 = 123;

// r1 = 97;
// r2 = 134;
// r3 = 105;

// avj = (j1 + j2 + j3)/3;
// avm = (m1 + m2 + m3)/3;
// avr = (r1 + r2 + r3)/3;
// console.log(avj, avm, avr);

// switch(true) {
//     case avj > avm:
//         console.log('John\'s team wins');
//         break;
//     case avj < avm:
//         console.log('Mike\'s team wins');
//         break;
//     default:
//         console.log('It\'s a draw');
// }

// if (avj > avm && avj > avr) {
//     console.log('John\'s team wins');
// } else if (avm > avj && avm > avr) {
//     console.log('Mike\'s team wins');
// } else if (avr > avj && avr > avm) {
//     console.log('Mary\'s team wins');
// } else {
//     console.log('It\'s a draw');
// }

// codechal3

// function calculateTip (bill) {
//     if (bill < 50) {
//         return bill*20/100;
//     } else if (50 <= bill < 200) {
//         return bill*15/100;
//     } else {
//         return bill*10/100;
//     }
// }


// var billList = [124, 48, 268];

// var tipList = [calculateTip(billList[0]), calculateTip(billList[1]), calculateTip(billList[2])];

// var totalList = [tipList[0]+billList[0], tipList[1]+billList[1],tipList[2]+billList[2]];

// console.log(tipList);
// console.log(totalList);

// var markMass, johnMass, markHeight, johnHeight;
// markMass = 80;
// johnMass = 90;
// markHeight = 1.7;
// johnHeight = 1.8;

// var markBMI, johnBMI;
// markBMI = markMass / markHeight**2;
// johnBMI = johnMass / johnHeight**2;
// console.log(markBMI, johnBMI)

// codechal4
// var john = {
//     fullName : 'John Smith',
//     mass : 90,
//     height : 1.8,
//     calcBMI : function() {
//         var BMI;
//         BMI = this.mass / this.height**2;
//         this.BMI = BMI;
//         return BMI;
//     }
// };

// var mark = {
//     fullName : 'Mark Brock',
//     mass : 100,
//     height : 1.7,
//     calcBMI : function() {
//         var BMI;
//         BMI = this.mass / this.height**2;
//         this.BMI = BMI;
//         return BMI;
//     }
// };

// john.calcBMI();
// mark.calcBMI();

// console.log(john)

// if (john.BMI > mark.BMI) {
//     console.log(john.fullName + '\'s BMI is higher of ' + john.BMI);
// } else if (john.BMI < mark.BMI) {
//     console.log(mark.fullName + '\'s BMI is higher of ' + mark.BMI);
// } else {
//     console.log('John and Mark have equal BMIs')
// }

// codechal5

// var john = {
//     bills : [124, 48, 268, 180, 42],
//     tips : [],
//     total : [],
//     calc : function () {
//             for (var i = 0; i < this.bills.length; i++) {
//                 if (this.bills[i] < 50) {
//                     this.tips.push(this.bills[i]*20/100);
//                     this.total.push((this.bills[i]*20/100)+this.bills[i]);
//                 } else if (50 <= this.bills[i] && this.bills[i] < 200) {
//                     this.tips.push(this.bills[i]*15/100);
//                     this.total.push((this.bills[i]*15/100)+this.bills[i]);
//                 } else {
//                     this.tips.push(this.bills[i]*10/100);
//                     this.total.push((this.bills[i]*10/100)+this.bills[i]);
//                 }
//             }        
//         }
// };
// john.calc();

// var mark = {
//     bills : [77, 5, 110, 45],
//     tips : [],
//     total : [],
//     calc : function () {
//             for (var i = 0; i < this.bills.length; i++) {
//                 if (this.bills[i] < 100) {
//                     this.tips.push(this.bills[i]*20/100);
//                     this.total.push((this.bills[i]*20/100)+this.bills[i]);
//                 } else if (100 <= this.bills[i] && this.bills[i] < 300) {
//                     this.tips.push(this.bills[i]*10/100);
//                     this.total.push((this.bills[i]*10/100)+this.bills[i]);
//                 } else {
//                     this.tips.push(this.bills[i]*25/100);
//                     this.total.push((this.bills[i]*25/100)+this.bills[i]);
//                 }
//             }        
//         }
// };
// mark.calc();

// function calcAv (x) {
//     y = 0;
//     for (var i = 0; i < x.length; i++) {
//         y += x[i];
//     }
//     return y / x.length;
// };

// john.average = calcAv(john.tips);
// mark.average = calcAv(mark.tips);

// console.log(john);
// console.log(mark);

// if (john.average > mark.average) {
//     console.log('John tips higher on average');
// } else if (mark.average > john.average) {
//     console.log('Mark tips higher on average');
// } else {
//     console.log('John tips equally as Mark');
// }