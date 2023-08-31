//  var myname ='Chandan';
//  console.log(myname);

//  console.log(typeof(myname));
// var myage =25;
// // console.log(iamchandan ); 
// console.log(  34+"67");


//  var myname =  "chandan";
//  console.log(myname);
//  console.log(typeof(myname));

// #Number

//  var myname =   56;
//   console.log(myname);
//    console.log(typeof(myname));

//#Boolean

// var iAmchandan = true;
// console.log(iAmchandan);
// console.log(typeof(iAmchandan));

//    a=10+"20";
//    console.log(a);


// a=10-"20";
//    console.log(a);

// a=10*"20";
//    console.log(a);

// a=10/"20";
//    console.log(a);

// a=""+"";
//    console.log(a);

// a=""+"0";
//    console.log(a);



// a=true-true;
//    console.log(a);

//    a=true+true;
//    console.log(a);

//    a=true-false;
//    console.log(a);

//    a= false-true;
//    console.log(a);

//  a=NaN=== NaN;
// console.log(a)

// a=Number.NaN===NaN;
// console.log(a)

// a=isNaN(NaN);
// console.log(a)

// a=isNaN(Number.NaN);
// console.log(a)

// a=Number.isNaN(NaN);
// console.log(a)

// var x = 5;
// var y = 5;
// console.log("is both the x and y are equaler not" +x==y );var x = 5;

// var y = 5;
// var x = 5;
// console.log(x==y)

// #Arithmetic operators

// console.log(3+3);
// console.log(3-3);

// console.log(21/5);
// console.log(5*6);

// console.log("Remainder operator "+27%4);

// #comparison operators

// #equal(==)

// var a = 30;
// var b = 10;

// console.log(a==b);

// #not equal(!=)

// var a = 30;
// var b = 10;

// console.log(a!=b);

//#greater than or equal(=>)

// var a = 30;
// var b = 10;
// console.log(a>=b);

//#less than or equal

// var a = 30;
// var b = 10;
// console.log(a<=b);

//#logical operator

//#logical and (&&)
// var a = 30;
// var b =-20;

// console.log(a>b&&b>a);

//#logical or(||)

// var a = 30;
// var b = 10;
// console.log((a>b)||(b>a)||(b>0));

//#logical not(!)

// var a = 30;
// var b = 10;
// console.log(!((a>76)||(b<0)));

// console.log("hello "+"world");

// var myname="chandan";
// console.log(myname +" kumar")

// console.log(3**3);

// console.log(3**5);


// console.log(10**-1)

//swap two number


// var a= 5;
// var b= 10;
// var c= b;

// b=a;
// a=c;

// console.log("the value of a is "+a);
// console.log("the value of b is "+b);

// var a= 5;
// var b= 10;

// a=a+b;
// b=a-b;
// a=a-b;

// console.log("the value of a is "+a);
// console.log("the value of b is "+b);

//@ control statement & loops

//# if.... else


// if()
// {

// }else
// {

// }


// var tomr ='rain';
// if(tomr=='rain')
// {
//     console.log('take a raincoat');
// }
// else
// {
//     console.log('no need to lake a raincoat');
//}

// give year is a leap year or not?














//@ Condition (ternary)operator

// var age=87;
// if(age>=18){
//     console.log("you are eligible to vote");
// }else{
//     console.log("you are not eligible to vote")
// }


// var age=18;
// console.log((age>=18)?"you can vote":"ypu can't vote");

//@ Switch Statement

var area = "rectangle";
var PI =3.142, l=5,b=4,r=3;

switch( area){
    case "cirea":
        console.log("the area of the circle is :"+PI*r**2);
       break;
        case"triangle":
        console.log("the area of the triangle is :"+(l*b)/2);
        break;

        case"rectangle":
        console.log("the area of the rectangle  is:"+(l*b));
        break;

        default:
        console.log("plase enter valid data");
}

//@ while loop statement

// var num = 0;
// while(num<=10){
//     console.log(num);
//     num++
// }


//@ do - while loop

// var num =0;
// do{
//     console.log(num);
//     num++;
// }
// while(num<=10);


//# for loop

// for(var num = 0; num <=10; num++){
//     debugger;
//     console.log(num);
// }

// challenge time

// table the give number

// for( num=1; num<=10; num++)
// {
//     var tableof =8;
//     console.log(tableof + "*" + num + "=" +tableof * num);
// }


// for( num=1; num<=10; num++)
// {
//     var tableof =9;
//     console.log(tableof + "*" + num + "=" +tableof * num);
// }

//@ fFunction


// function functionName()
// {
//     Statement
// }


//  var a=10;
//  var b=20;
// sum=a+b;
// console.log(sum);

// function sum(){
//     var a=10, b=20;
//      total=a+b;
//     console.log(total);
// }

// function sum(a,b){
//      total=a+b;
//     console.log(total);
// }


// sum();
// sum(20,30);
// sum(50,50);

// function sum(a,b){
//      total=a+b;
//     console.log(total);
// }

// var funExp = sum(5,15);


//@function

//# return keyword

// function sum(a,b){
//       return total=a+b;

//      }
// var funExp  = sum(5,15);

// console.log(funExp);

//# Anonymous function

//  var funExp =function sum(a,b){
//     return total=a+b;

//    }
 
// console.log(funExp(15,15));


 
// var funExp =function sum(a,b){
//     return total=a+b;

//    }
//    sum=funExp(15,34);
//    sum1=funExp(23,45);
// console.log(sum>sum1);



// let vs const vs var


// var myname =  "chandan kumar";
// console.log(myname);

// myname= "ranjan kumaR";
// console.log(myname);


// const myname =  "chandan kumar";
// console.log(myname);

// myname= "ranjan kumaR";
// console.log(myname);


// const myname =  "chandan kumar";
// console.log(myname);

// myname= "ranjan kumaR";
// console.log(myname);

// function biodata(){
//     var  myFristname ="chandan";
//     console.log(myFristname);

//     if(true){
//         var myLastName ="kumar";
//         console.log('inner '  + myLastName);
//         console.log('inner '  + myFristname);
//     }

//     console.log('innerOuter '  + myLastName);
// }

// biodata();


// function biodata(){
//      let myFristname ="chandan";
//     console.log(myFristname);

//     if(true){
//          let myLastName ="kumar";
//         console.log('inner '  + myLastName);
//         console.log('inner '  + myFristname);
//     }

//     console.log('innerOuter '  + myLastName);
// }

// biodata();


// function biodata(){
//      const myFristname ="chandan";
//     console.log(myFristname);

//     if(true){
//          const myLastName ="kumar";
//         console.log('inner '  + myLastName);
//         console.log('inner '  + myFristname);
//     }

//     console.log('innerOuter '  + myLastName);
// }

// biodata();


// Temptate  literals (Template Strings)

// for(let num = 1; num<=10; num++){
//      let tableof = 12;
//      console.log(tableof + " * "+num + " = " + tableof * num);
// }


// for(let num = 1; num<=10; num++){
//     let tableof = 12;
//     //console.log(tableof + " * "+num + " = " + tableof * num);
//     console.log(`${tableof} * ${num} = ${tableof * num}`);
// }

//   $Default  Parameters

// function mult(a,b){
//     return a*b;
// }
// console.log(mult(5,2));


// function mult(a,b=2){
//     return a*b;
// }
// console.log(mult(5));


// console.log(sum());

//   function sum(){
//   let a = 5; b =6;
//   let sum = a+b;
//   return`the sum of the two number is ${sum}`;
//}

//# fat Arror function

// const sum = () =>{
//     let a = 5; b =6;
//     let sum = a+b;
//   return`the sum of the two number is ${ sum}`;
// }

// console.log(sum());


// const sum = () =>{
//     let a = 5; b =6;
//   return`the sum of the two number is ${a+b}`;
// }

// console.log(sum());




// const sum = () =>{
//     let a = 5; b =6;
//   return`the sum of the two number is ${(a=5)+(b=6)}`;
// }

// console.log(sum());




// const sum = () =>
//   `the sum of the two number is ${(a=5)+(b=6)}`

// console.log(sum());


//## Arrays in java Script

//let`s start the 6th section

// var Names = ["chandan","kumar","ranjan","suraj"];

//# traversal of an Array


// var myFriends = ["chandan","kumar","ranjan","suraj"];

// console.log(myFriends[1]);




// var myFriends = ["chandan","kumar","ranjan","suraj"];

// console.log(myFriends.length);



// var myFriends = ["chandan","kumar","ranjan","suraj"];

// console.log(myFriends[myFriends.length-1]);


//## For in loop


// var myFriends = ["chandan","kumar","ranjan","suraj"];

// for(var i=0; i<myFriends.length; i++){
// console.log(myFriends[i]);
// }




// After Es6 we have for..in and for..of loop too


// var myFriends= ["chandan","kumar","ranjan","suraj"];

// for(let element in myFriends){
//     console.log(element);
// }

//#for of loop

// var myFriends= ["chandan","kumar","ranjan","suraj"];

// for(let element of myFriends){
//     console.log(element);
// }

//#forEach

// var myFriends= ["chandan","kumar","ranjan","suraj"];


// myFriends.forEach(function(element,index,Array){
//     console.log(element);
// });




// var myFriends= ["chandan","kumar","ranjan","suraj"];


// myFriends.forEach(function(element,index,Array){
//     console.log(element + " index : " + index + " " + Array);
// });


//##  Seaching and filter in Array 


// var myFriends = ["vinod","bahadur","thapa","thapatechnical","thapa"];


//# how to insert ,add ,replace and delete Elements in Array (crvd)
    

// const animals = ['pigs','goats','sheep'];

// animals.push('chicken');
// console.log(animals);



//  const animals = ['pigs','goats','sheep'];

// const count= animals.push('chicken');
// console.log(animals);
// console.log(count);



//  const animals = ['pigs','goats','sheep'];

//  animals.push('chicken','cats','cow');
//  console.log(animals);


//## Array.Prototype.Unshift

// const animals = ['pigs','goats','sheep'];

// const count= animals.unshift('chicken');
//  console.log(animals);
//  console.log(count)



// const animals = ['pigs','goats','sheep'];

//  animals.unshift('chicken','cats','cow');
//  console.log(animals);

// const myNumbers =[1,2,3,5];
// console.log(myNumbers.unshift(4,6));







// const animals = ['pigs','goats','sheep'];

//  animals.unshift('chicken','cats','cow');
//  console.log(animals);

// const myNumbers =[1,2,3,5];
// myNumbers.unshift(4,6);

// console.log(myNumbers);


//# Array.prototype.pop()

// const plants =['broccoli','cauliflower','kale','tomato','cabbaage'];

// console.log(plants);
// console.log(plants.pop());  
// console.log(plants);


// $$ Array.prototype.shift()

// const plants =['broccoli','cauliflower','kale','tomato','cabbaage'];

// console.log(plants);
// console.log(plants.shift());  
// console.log(plants);
 

// H.W

// 1. Add dec at the end of an array?

// const months = ['jan','march','april','jane','july'];

// const newMonth = months.splice(4,0,"dec");
// console.log(months);

 
// const months = ['jan','march','april','jane','july'];

// const newMonth = months.splice(months.length,0,"dec");
// console.log(months);


//2.

// const months = ['jan','march','april','jane','july'];

// const newMonth = months.splice(months.length,0,"dec");
// console.log(newMonth);


//3.

// const months = ['jan','march','april','jane','july'];

// const updateMonth = months.splice(1,1,'March');
// console.log(months);




// const months = ['Jan','March','April','June','July'];

// const indexofmonth = months.indexOf('June')

// if(indexofmonth !== -1){
// const updateMonth = months.splice(indexofmonth,1,'june');
// console.log(months);
// }else{
//     console.log('No such data found');
// }

// sol 3.

// const months = ['Jan','March','April','June','July'];

// const indexofmonth = months.indexOf('April')

// if(indexofmonth !== -1){
// const updateMonth = months.splice(indexofmonth,1);
// console.log(months);
// }else{
//     console.log('No such data found');
// }




// const months = ['Jan','March','April','June','July'];

// const indexofmonth = months.indexOf('June')

// if(indexofmonth !== -1){
// const updateMonth = months.splice(indexofmonth,1);
// console.log(months);
// console.log(updateMonth)
// }else{
//     console.log('No such data found');
// }



// const months = ['Jan','March','April','June','July'];

// const indexofmonth = months.indexOf('April')

// if(indexofmonth !== -1){
// const updateMonth = months.splice(indexofmonth,Infinity);
// console.log(months);
// console.log(updateMonth)
// }else{
//     console.log('No such data found');
// }




// const months = ['Jan','March','April','June','July'];

// const indexofmonth = months.indexOf('April')

// if(indexofmonth !== -1){
// const updateMonth = months.splice(indexofmonth,2);
// console.log(months);
// console.log(updateMonth)
// }else{
//     console.log('No such data found');
// }

// const array1 = [1, 4, 9, 16, 25];
// let newArr = array1.map((curElem,index,arr)=>{
//     return curElem > 9;
// })

// console.log(array1);

// console.log(newArr);


// let arr = [25,36,49,64,81];

// let arrsqr =arr.map((curElem) => {
//     return Math.sqrt(curElem);
// })
// console.log(arrsqr);


































