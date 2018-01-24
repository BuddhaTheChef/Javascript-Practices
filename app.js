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

////////////////////////////////////////////////////////////////////////////////
// var a;
//
// a=0;
//
// if(a || a === 0) {
//   console.log('something is there');
// }

////////////////////////////////////////////////////////////////////////////////
// function greet(name) {
//   name = name || '<Your name here>';
//   console.log(name);
//   console.log('Hello ' + name);
// }
//
// greet('AJ');
// greet();

////////////////////////////////////////////////////////////////////////////////
//                                Objects
//
// var person = new Object();
//
// person["firstname"] = "AJ";
// person["lastname"] = "WIETECHA"
//
// var firstNameProp = "firstname";
//
// console.log(person);
// console.log(person[firstNameProp]);
//
// console.log(person.firstname);
// console.log(person.lastname);
//
// person.address = new Object();
//
// person.address.street  = "123 Poop St.";
// person.address.city = 'Kapolei';
// person.address.state = 'HI';
//
// console.log(person.address)
// console.log(person["address"]["state"]);

////////////////////////////////////////////////////////////////////////////////
//                                Object Literal

// var person = {
//   firstname: "AJ",
//   lastname: "Wietecha",
//   address: {
//     street: "Poop St.",
//     city: "kapolei",
//     state: "HI"
//   }
// };
//
// function greet(person){
//   console.log('Hi ' + person.firstname );
// }
//
// greet(person)
//
// greet({
//   firstname: "Mary",
//   lastname: "Jane"
// })
//
// person.address2 = {
//   street: '1234 P St.'
// }

////////////////////////////////////////////////////////////////////////////////
//Namespace - a container for variables anf functions

// var objectLiteral = {
//   firstname: 'Aj',
//   isAProgrammer: true,
// }
//
// console.log(JSON.stringify(objectLiteral));
//
//
// var jsonValue = JSON.parse('{"firstname": "AJ", "isAProgrammer":true}');
//
// console.log(jsonValue);

////////////////////////////////////////////////////////////////////////////////
//First class functions - everything you can do with other types you can do with
// functions

// function greet() {
//   console.log('HI');
// }
//
// greet.language = "english";
// console.log(greet.language);
////////////////////////////////////////////////////////////////////////////////
//Expression - a unit of code that results in a value

// function greet() {
//   console.log('HI');
// }
//
// greet();
//
// var greatAnon = function() {
//   console.log('HI');
// }
//
// greatAnon();

// function log(a) {
//   console.log(a);
//   a();
// }
//
// log(function(){
//   console.log('HI');
// });
////////////////////////////////////////////////////////////////////////////////
// var a = 3;
// var b;
//
// b = a;
// a = 2;
//
// console.log(a);
// console.log(b);
//
// //Mutate - to change something
// //Immutable - something cant be changed
//
// var c = {greeting: 'Hi'}
// var d;
//
// d = c;
//
// c.greeting = "HELLO";
//
// console.log(c);
// console.log(d);
//
// function changeGreeting(obj){
//   obj.greeting = 'HOLA';
// }
//
// changeGreeting(d);
// console.log(c);
// console.log(d);
//
// c = {greeting: 'HOWDY'};
// console.log(c);
// console.log(d);
////////////////////////////////////////////////////////////////////////////////
// function a(){
//   console.log(this);
//   this.newVar = "hello";
// }
//
// var b = function(){
//   console.log(this);
// }
// a();
// b();
//
// console.log(newVar);
//
// var c = {
//   name: "the c object",
//   log: function(){
//     var that = this;
//     that.name = "updated C object";
//     console.log(that);
//
//     var setname = function(newname){
//       that.name = newname;
//     }
//     setname('Updated the CCC object');
//     console.log(that);
//   }
// }
// c.log();
////////////////////////////////////////////////////////////////////////////////
// var arr = new Array();
// var arr = [
//   1,
//   false,
//   {
//     name: "Aj",
//     address: "Poop St."
//   },
//   function(name){
//     var greeting = 'HELLo';
//     console.log(greeting+ " " + name)
//   },
//   "Hello"
// ];
// console.log(arr);
// arr[3](arr[2].name);
////////////////////////////////////////////////////////////////////////////////
//Arguments - the parameters you pass to a function

// function greet(firstname, lastname, language, ...other){
//   language = language || "english"
//   if(arguments.length === 0){
//     console.log("Missing params");
//     console.log('-----------');
//   }
//   console.log(firstname);
//   console.log(lastname);
//   console.log(language);
//   console.log(arguments);
//   console.log('arg 0: ' + arguments[0]);
//   console.log('-----------');
// }
//
// greet();
// greet("AJ");
// greet("AJ","Wietecha");
// greet("AJ","Wietecha","wow","dodod","defendld");
////////////////////////////////////////////////////////////////////////////////

// function greet(firstname, lastname, language){
//   language = language || "english"
//   if(language === "english"){
//     console.log("Hello " + firstname + " " + lastname);
//   }
//   if(language === "spanish"){
//     console.log("Hola " + firstname + " " + lastname);
//   }
//   }
//
//   function greetEng(firstname, lastname){
//     greet(firstname, lastname, "english")
//   }
//   function greetSpan(firstname, lastname){
//     greet(firstname, lastname, "spanish")
//   }
//
//   greetEng('AJ', 'Wietecha');
//   greetSpan('AJ', 'Wietecha');
////////////////////////////////////////////////////////////////////////////////
//WHitespace- invisible characters that create literal space
// function getPerson(){
//   return {
//     firstname: 'AJJ'
//   }
// }
// console.log(getPerson());
//
// var first, last, lang;
//
// var person = {
//   first: 'John',
//   last: 'WOW'
// }
//
// console.log(person);
////////////////////////////////////////////////////////////////////////////////
//                                IIFE

// function greet(name){
//   console.log("HEllo " + name);
// }
// greet("John");
//
// var greetFunc = function(name){
//   console.log("Hello " + name);
// }
// greetFunc("Mark");
//
// //IIFE
// var greeting = function(name){
//   console.log("Hello " + name);
// }('Aj');
//
// (function(name){
//   var greeting = "Hello";
//   console.log(greeting + " " + name);
// }("MOTTO"));

////////////////////////////////////////////////////////////////////////////////
//                              Closures

// function greet(whattosay){
//   return function(name){
//     console.log(whattosay + " " + name);
//   }
// }
// //1 way
// greet("Hi")('TONY');
// //2 way
// var sayHi = greet('HI');
// sayHi("AJ");
////////////////////////////////////////////////////////////////////////////////
// function  buildFunc() {
//   var arr = [];
//
//   for( var i = 0; i < 3; i++){
//     arr.push(
//       function(){
//         console.log(i)
//       }
//     )
//   }
//   return arr;
// }
//
// var fs = buildFunc();
//
// fs[0]();
// fs[1]();
// fs[2]();
// //////////////////////////////////
// function  buildFunc2() {
//   var arr = [];
//
//   for( var i = 0; i < 3; i++){
//     arr.push(
//       (function(j){
//         return function(){
//           console.log(j);
//         }
//       }(i))
//     )
//   }
//   return arr;
// }
//
// var fs2 = buildFunc2();
//
// fs2[0]();
// fs2[1]();
// fs2[2]();
////////////////////////////////////////////////////////////////////////////////

// function makeGreeting(language){
//   return function(firstname, lastname){
//     if(language === 'en'){
//       console.log("Hello " + firstname + " " + lastname);
//     }
//     if(language === 'es'){
//       console.log("Hola " + firstname + " " + lastname);
//     }
//   }
// }
//
// var greetEng = makeGreeting('en');
// var greetSpan = makeGreeting('es');
//
// greetEng("John", "Doe");
// greetSpan("Aj", "WOR");

////////////////////////////////////////////////////////////////////////////////
//Callback function -function you give to another function , to be run when
//the other function is finished

// function sayHiLater(){
//   var greeting = 'HI!';
//   setTimeout(function(){
//     console.log(greeting)
//   }, 3000)
// }
//
// sayHiLater();

// //jquery uses function expressions and first-class functions
// $("button").click(function(){
//
// });


//                               CallBack

// function tellMeWhenDone(callback){
//   var a = 1000;
//   var b = 2000;
//
//   callback();
// }
//
// tellMeWhenDone(function(){
//   console.log('I am done!')
// })
//
// tellMeWhenDone(function(){
//   alert('All done!')
// })

////////////////////////////////////////////////////////////////////////////////
//                           CALL - APPLY - BIND

// var person = {
//   firstname: "AJ",
//   lastname: 'Wietecha',
//   getFullName: function(){
//     var fullname = this.firstname + " " + this.lastname;
//     return fullname
//   }
// }
//
// var logName = function(lang1, lang2){
//   console.log("Logged: " + this.getFullName());
//   console.log("Arguments: " + lang1 + " " + lang2);
//   console.log('--------------------');
// }.bind(person)
//
// logName();
//
// var logPersonName = logName.bind(person);
// logPersonName('en');
//
// logName.call(person, 'en', 'es');
//
// logName.apply(person, ['1', '2']);
//
// (function(lang1, lang2){
//  console.log("Logged: " + this.getFullName());
//  console.log("Arguments: " + lang1 + " " + lang2);
//  console.log('--------------------');
// }).apply(person,['OPPs', 'WHOOPs']);

////////////////////////////////////////////////////////////////////////////////
// //function borrowing
// var person2 = {
//   firstname: "Jane",
//   lastname: 'Doe'
// }
//
// console.log(person.getFullName.apply(person2));
//
// //function currying - creating a copy of a function but with some preset paramaters
// function multiply(a, b){
//   return a*b;
// }
//
// var multiplyByTwo = multiply.bind(this, 2);
//
// console.log(multiplyByTwo(4));
//
// var multiplyByTwo = multiply.bind(this, 3);
//
// console.log(multiplyByTwo(4));

////////////////////////////////////////////////////////////////////////////////
//                          functional Programming

// function mapForEach(arr, fn){
//   var newArr = [];
//   for(var i = 0; i < arr.length; i++) {
//     newArr.push(
//       fn(arr[i])
//     )
//   }
//   return newArr;
// }
//
// var arr1 = [1,2,3];
// console.log(arr1);
//
// var arr2 = mapForEach(arr1, function(item){
//   return item * 2;
// });
//  console.log(arr2);
//
// var arr3 = mapForEach(arr1, function(item){
//   return item > 2;
// });
//  console.log(arr3);
//
//  var checkPastLimit = function(limiter, item){
//    return item > limiter;
//  }
//  var arr4 = mapForEach(arr1,checkPastLimit.bind(this, 1));
//
//  console.log(arr4);
//
// var past = function(limiter){
//   return function(limiter, item){
//     return item > limiter;
//   }.bind(this, limiter);
// };
//
// var arr5 = mapForEach(arr1, past(2));
// console.log(arr5);
//
// ////////////////////////////////////////////////////////////////////////////////
// //                        Functional Programming 2(underscore.js)
//
// var arr6 = _.map(arr1,function(item){return item * 3});
// console.log(arr6);
//
// var arr7 = _.filter([2,3,4,5,6,7], function(item){return item % 2 === 0})
// console.log(arr7);

////////////////////////////////////////////////////////////////////////////////
// inheritence - one object gets access to the propertysand methods of another object

//                                    Protoypes
// var person = {
//   firstname: "Aj",
//   lastname: "Wietecha",
//   getFullName: function (){
//     return this.firstname + " " + this.lastname;
//   }
// }
//
// var john = {
//   firstname: "John",
//   lastname: "doe",
// }
//
// john.__proto__ = person;
// console.log(john.getFullName());
// console.log(john.firstname);
//
// var jane = {
//   firstname: "Jane"
// }
//
// jane.__proto__ = person;
//
// console.log(jane.getFullName());

////////////////////////////////////////////////////////////////////////////////
//Reflection - an object can look at itself, listing and changing its propertys and methods

// var person = {
//   firstname: "Aj",
//   lastname: "Wietecha",
//   getFullName: function (){
//     return this.firstname + " " + this.lastname;
//   }
// }
//
// var john = {
//   firstname: "John",
//   lastname: "doe",
// }
//
// john.__proto__ = person;
//
// for (var prop in john) {
//   if(john.hasOwnProperty(prop)){
//   console.log(prop + ': ' + john[prop]);
// }
// }
//
// var jane = {
//   address: "111 Main St.",
//   getFormalFullName: function(){
//     return this.lastname + ', ' + this.firstname;
//   }
// }
//
// var jim = {
//   getFirstName: function(){
//     return firstname;
//   }
// }
//
// _.extend(john,jane,jim);
//
// console.log(john);
////////////////////////////////////////////////////////////////////////////////
//                        Constructor Functions
//Constructor Functions - a normal function that is used to construct objects

// function Person(firstname, lastname) {
//   console.log(this);
//   this.firstname = firstname;
//   this.lastname = lastname;
// };
//
// var john = new Person("John", "Doe");
// console.log(john);
//
// var jane = new Person("Jane", "POOP");
// console.log(jane);
//
// Person.prototype.getFullName = function(){
//   return "HI " + this.firstname + " " + this.lastname;
// }
//
// console.log(john.getFullName());

////////////////////////////////////////////////////////////////////////////////

// String.prototype.isLengthGreaterThan = function(limit){
//   return this.length > limit;
// }
// console.log("flshjbrlhkjb".isLengthGreaterThan(10));
//
// Number.prototype.isPositive = function(){
//   return this > 0;
// }

////////////////////////////////////////////////////////////////////////////////

//DANGEROUS DO NOT USE FOR IN OR FOR LOOPS WITH CONSTURCTERS!!!!!!!!!!

// Array.prototype.myCustom = "COOL!";
//
// var arr = ["john", "jane", "jim"];
//
// for (var prop in arr) {
//   console.log(prop + ": " + arr[prop]);
// }

////////////////////////////////////////////////////////////////////////////////
//                              Object.create

//  var person = {
//    firstname: "Default",
//    lastname: "Default",
//    greet: function(){
//      return 'Hi ' + this.firstname;
//    }
//  }
//
//  var john = Object.create(person);
//  john.firstname = "John";
//  john.lastname = "Doe"
//  console.log(john);
//
//  // PolyFill - code that adds a feature which the engine may lack.
//
// if(!Object.create){
//   Object.create = function (i) {
//     if(arguments.length > 1) {
//       throw new Error('Object.create does not exsist')
//     }
//     function F() {}
//     F.prototype = i;
//     return new F();
//   };
// }

////////////////////////////////////////////////////////////////////////////////
//                            ES6 and CLASSES



// class InformalPerson extends Person {
//   constructor(firstname,lastname){
//     super(firstname,lastname);
//   }
//   greet(){
//     return "Yo " + firstname;
//   }
// }
//      ^ this is still prototypal inheritence but es6 way


//Syntactic sugar - a diffrent way of typing your code that doesnt change how
//it works under the hood.

////////////////////////////////////////////////////////////////////////////////
// object literal syntax big data

// var people = [
//   {
//     firstname: 'Aj',
//     lastname: 'Wietecha',
//     address: [
//       '111 Main St.',
//       '222 Third St.'
//     ]
//   },
//   {
//     firstname: 'Jane',
//     lastname: 'Doe',
//     address: [
//       '213 Main St.',
//       '123 Third St.'
//     ],
//     greet: function(){
//       return 'Hello';
//     }
//   }
// ]
//
// console.log(people);

////////////////////////////////////////////////////////////////////////////////
// type of and instance of (figuring out what something is)

// function Person(name) {
//   this.name = name;
// }
//
// var e = new Person('Jane');
// console.log(typeof e);
// console.log(e instanceof Person);
//
//
// var z = function() {}
//
// console.log(typeof z);
//
// console.log(typeof Person);

////////////////////////////////////////////////////////////////////////////////
//                               Strict Mode
// function logNewPerson(){
//   "use strict";
//
//   var person2;
//   persom2 = {};
//   console.log(persom2);
// }
//
//
// //"use strict"
//
// var person;
//
// persom  = {};
//
// console.log(persom);
//
// logNewPerson();

////////////////////////////////////////////////////////////////////////////////
// Method Chaining - calling one method after another and each method affects
// the parent object

// var q = $("ul.people").addClass("newclass").removeClass("people");
// console.log(q);


////////////////////////////////////////////////////////////////////////////////
//Transpile - convert the syntax of one programming language to another
//                      Making my own reuseable libary

var g = G$('John', 'Doe');
g.greet().setLang('es').greet(true).log();

//when button is clicked
$('#login').click(function(){
  //creates a new object
  var loginGreeter = G$('Aj','Wietecha');
 // hides UI
  $('#logindiv').hide();
// select language based on select box and chain method that updates h1 id and true = "formal" then log
  loginGreeter.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();

});

























////////////////////////////////////////////////////////////////////////////////
