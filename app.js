////////////////////////////////////////////////////////////////////////////////
// var a = 'hello world';
//
// function b() {
//   console.log('CALL b!');
// }
//
// b();
//
// console.log(a);

////////////////////////////////////////////////////////////////////////////////
// var a;
// console.log(a);
//
// if(a === undefined){
//   console.log('a is undefined');
// }
// else {
//   console.log('a is defined');
// }

////////////////////////////////////////////////////////////////////////////////
// function b() {
//   console.log('CALL b!');
// }
//
// b();
//
// console.log(a);
//
// var a = 'hello world';
//
// console.log(a);
////////////////////////////////////////////////////////////////////////////////
//Single threaded - one command at a time;

//Synchronous - one at a time and in order it appears;

//Invocation - running or calling a function;

// function b() {
//   var d;
// }
//
// function a() {
//  b();
//  var c;
// }
//
// a();
// var d;

////////////////////////////////////////////////////////////////////////////////
// function b() {
//   var myVar;
//   console.log(myVar);
// }
//
// function a() {
//  var myVar = 2;
//    console.log(myVar);
// b();
// }
//
// var myVar = 1;
//   console.log(myVar);
// a();
//   console.log(myVar);
////////////////////////////////////////////////////////////////////////////////
// function a() {
//   function b() {
//     console.log(myVar);
//   }
//  var myVar = 2;
// b();
// }
//
// var myVar = 1;
// a();
//   console.log(myVar);
////////////////////////////////////////////////////////////////////////////////
//scope - where a variable is availabe lin your code;

//let - same as var but you cant use it until you define the vasriable;

//Asynchronous callbacks - more than one at a time

// function waitThreeSeconds() {
//   var ms = 3000 + new Date().getTime();
//   while (new Date() < ms){}
//   console.log('finished function');
// }
//
// function clickHandler(){
//   console.log('click event!');
// }
//
// // listen for the click event
// document.addEventListener('click', clickHandler);
//
// waitThreeSeconds();
// console.log('finished execution');

////////////////////////////////////////////////////////////////////////////////
// Dynamic typing - you dont tell the engine what data to holf and figures it out
// while code is running

//Primitive Types - undefined, null, string, number, boolean, symbol

//operator- specific function that is syntacfully written diffrent(usually takes
// two parameters and return one result)

//Operator precednce- which operator gets called first (PEMDAS)

//Operator associativity- what order a operator function gets called in
//(left to right) or (right to left)

// var a = 2,  b= 3, c = 4;
//
// a = b = c;
//
// console.log(a);
// console.log(b);
// console.log(c);

//ALL LOG TO 4

////////////////////////////////////////////////////////////////////////////////

//Coercion - converting a value from one type to another

//var a = 'heelo' + 'world';
//var a = 1 + '2' => 12

// console.log(1 < 2 < 3) => true
// console.log(3 < 2 < 1) => true "because of left to right associativity"

//false == 0 => true
//null == 0 => false
//null < 1 => true
//""== 0 => true
//""== false => true
