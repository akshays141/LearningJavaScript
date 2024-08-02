
//let, var, const
//insted of int, float, char and string we use var, let and const
/*var a=20; // a is a variable and 20 is a value
var a=21;
var a=22;
a--
console.log(a);
var a1="sai";
console.log(a1);
let C=30;
let c='#$%^^&';
console.log(c);

const d=20;
console.log(d);
*/
/*
//integer
let X=10;
console.log(X);
//float
const y=20.32;
console.log(y);
//character
var z='c';
console.log(z);
//string
let w='sai from rajahmundry';
console.log(w);
//Boolean 
let E=true;
console.log(E);
//null
let d=null;
console.log(d);
//Undefined
let c= undefined;
console.log(c);
*/

/*
let a=10;
a=20+a;
console.log(a);
let b=10.235;
console.log(b);
let c="sai";
console.log(c);
const d='d';
console.log(d);
*/

//Arithmetic operators(+, -, *, /, %, **)
/*
let x=20,y=15,e=3,f=2;
let d=x--;
console.log("sum = ",d);
console.log("Difference = ",x-y);
console.log("mul = ",x*y);
console.log("div = ",x/y );
console.log("mod = ",x%y);
console.log("power of 3,2 = ",e**f);
*/

/*
let a=25;
let b='25';
console.log(a);//25
console.log(b);//25
console.log(a==b);//True
console.log(a===b);//False
*/

/*
if(condition){
    statements....
}
else{
    statements....
}    
 */
/*
let a=20;
if(a>25){
  console.log("if condition is Correct")
}
else if(a<25){
  console.log("else if condition is Correct")
}
else{
  console.log("Wrong");
}
*/

//if and if else
/*
function fun1(){
let SwitchOn = document.getElementById("Switch").value;
if(SwitchOn==1){
  console.log("Fan is Rotating");
  console.log("Ready to SwitchOff");
}
else if(SwitchOn==0){
  console.log("Fan is not rotating");
  console.log("ready to SwitchOn");
}
else{
  console.log("just you can enter either 0 or 1");
}
}
*/
/*
if(num==num1){
  console.log("Correct Condition");//statements
}
else{
  console.log("Condition Incorrect");
}
if(condition){
  //statements
}
*/
/*
var age = prompt("Enter age here: ");
if(age>18){
  console.log("Voting Age");
}
else{
  console.log("not a voting age");
}

var num=prompt("Enter a number: ");
if(num%2===0){
  console.log("Even Number");
}
else{
  console.log("odd Number");
}
*/

//Relational Operator(<, >, <=, >=,===,!=)
/*
let a=20,b=30;
if(a<b){
  console.log("a is less than b")
}
else if(a>b){
  console.log("a is greater than b")
}
else if(a<=b){
  console.log("a is less than or equal to b")
}
else if(a>=b){
  console.log("a is greater than or equal to b")
}
else{
  console.log("a is not equal to b")
}
*/
/*function fun1(){
if(x<y){
  console.log("Hii");
}
else{
  console.log("Hello");
}
}
function fun1(){
  let X=document.getElementById("bhanu").value;
if(X+y>=75)
{
  console.log("equal");
}
else{
  console.log("not equal");
}
}
function fun1(){
  let a=document.getElementById("jaggu").value
  

if(a!='10'){
  console.log("Hello");
}
else
{
  console.log("Hi");
}
}
*/

//Logical Operators (&&, ||, !)
/*
let a=25,b=20;
// let c=prompt("Enter a Number: ");
if(a<10 && a<=30){
    console.log("Hello");
}
if(a<10 || a<=25){
    console.log("Hi");
}
if(!(a==35)){
    console.log("Hello1");
}
*/
//Bitwise Operators (&, |, ~, ^, <<, >>)
/*
let a=5,b=6, c=-5;
console.log(a^b);//3
console.log(a&b);//4
console.log(a|b);//7
console.log(a<<3);//5*2=10*2=20*2=40
console.log(a>>4);//5/2=2/2=1/2=0
console.log(~c);//4
*/

/*
let num=30
b=++num + num++
console.log(b)
*/

/*
10
+1
---
11
---

11001
00010
------
11011
------
*/
//Assignment operators(+=, -=, *=, /=, %=)
/*
var a=20;
// var a=a+12;
console.log(a+=15);//a=a+15 //a=35
console.log(a*=2);//a=a*2 //a=70
console.log(a-=50);//a=a-50 //a=20
console.log(a/=2);//a=a/2 //a=10
console.log(a%=2);//a=a%2 //a=0
*/

//terenary operator
//(condition)?"True":"Flase"
/*
let c=20;
(c=='20')?console.log("correct"):console.log("not correct");
*/
//my name is sai and age is 20 years and salary 20000.

/*
let age =20;
let name1="sai"
let salary= 20000;
console.log(name1,age,salary);
console.log(`${age} ${name1} ${salary}`);
console.log(`${name1} ${age} ${salary}`);
console.log(name1 + " " +age +" "+ salary);

console.log("my name is ",name1,"and age is ",age,"and salary is ",salary);
console.log(`my name is ${name1} and salary is ${salary} and age is ${age}`);
console.log("my name is " + name1 + " and age is " + age + " and salary is " + salary);
/*
console.log("my name is " , b , " and age is " , age , " and salary is " , c);
console.log(`my name is ${b} and age is ${age} and salary is ${c}`);
*/

/*
const name1 = "sai";
const age1 = 22;
const job = "Teacher";

let data= `i am ${name1} my age is ${age1} and job is ${job}`;
const details = "I'am" + name1 + ", age is " + age1 + "Years old" + job;
const newdetails = `i am  ${name1} , a  ${age1}  Years old  ${job}`;

console.log(newdetails);
console.log(details);
console.log(data);
*/

//Adding number strings
/*
console.log('10'+'20');//1020
console.log(2+5+'10');//710
console.log('10'+2+'10');//10210
console.log('10'+2+6+8+9+'10');//10268910
console.log(10+20+'10');//3010
*/

//type conversion and type coercion
//type conversion
/*
let a=20;
console.log(a);//20
console.log(typeof(a));//number

let b=Number('25');
console.log(typeof(b));//number
console.log(b);//25

let c= String(b);
console.log(typeof(c));//String

let d ="sai from rajahmundry";
let e=Number(d);
console.log(typeof(e))//number
console.log(e);//NaN(Not a Number)

let f=String(e);
console.log(f);//NaN
*/


//type coercion
/*
console.log('10'-'15');//-5
console.log('5'*'5');//25
console.log('12'-'10');//2
console.log('10'-'5'-2);//3
console.log('10'/2);//5
console.log(15%'2');//1
console.log(15/'2');//7.5
console.log('3'**'2');//9
*/

/*
console.log('10'+ 2 + '5');
console.log('10'+'15'+'2'+ 3);
console.log(10 + 2+ 15);
let a='15';
let b= Number(a);
console.log(b);
console.log(typeof(b))
console.log(String(a));
console.log(typeof(a));
let c=null;
console.log(c);
*/

//Numbers and number methods
/*Method Description
toString() = Returns a number as a string
toExponential()	= Returns a number written in exponential notation
toFixed() =	Returns a number written with a number of decimals
toPrecision() =	Returns a number written with a specified length
ValueOf() =	Returns a number as a number

Number.isInteger() = Returns true if the argument is an integer
Number.isSafeInteger() = Returns true if the argument is a safe integer
Number.parseFloat() = Converts a string to a number
Number.parseInt() = Converts a string to a whole number
*/

/*
let a=20.235689;
// let b=a;
let b=a.toString();
console.log(b);//20.235689
console.log(typeof b);//string
*/
/*
let a=10;
let d=25007.32653;
let c=d.toExponential();
let e=a.toExponential();
console.log(e);//1e+1
console.log(c);//2.500732653e+4
*/
/*
let a=20.23569878;
let e=a.toFixed(5);
console.log(e);//20.23570


let a=20.235694;
let f=a.toPrecision(10);
console.log(f);//20.236
let g=a.valueOf();
console.log(g);//20.235694

/*
function fun1(){
  let a=document.getElementById("bhanu").value
  let b=document.getElementById("sri").value
  let c=a-b;
  document.getElementById("c").value= c
}


/*
let a=20.35686;
let b=a.toString()
let c=Number.isInteger(100002356889);
console.log(c)
console.log(a.toFixed());
console.log(b);
console.log(typeof(b));
*/




//isInteger
/*
console.log(Number.isInteger(1)); // true
console.log(Number.isInteger(-100000)); // true
console.log(Number.isInteger(99999999999999999999999)); // true
console.log(Number.isInteger(0.1)); // false
console.log(Number.isInteger(Math.PI)); // false
console.log(Number.isInteger(NaN)); // false
console.log(Number.isInteger(Infinity)); // false
console.log(Number.isInteger(-Infinity)); // false
console.log(Number.isInteger("10")); // false
console.log(Number.isInteger(true)); // false
console.log(Number.isInteger(false)); // false
console.log(Number.isInteger([1])); // false
console.log(Number.isInteger(5.0)); // true
console.log(Number.isInteger(5.000000000000001)); // false
console.log(Number.isInteger(5.0000000000000001)); // true, because of loss of precision
console.log(Number.isInteger(4500000000000000.1)); // true, because of loss of precision
console.log(Number.isInteger(2**54));//true

//isSafeInteger

console.log(Number.isSafeInteger(3)); // true
console.log(Number.isSafeInteger(2.000000000000000000))//true
console.log(Number.isSafeInteger(2 ** 53)); // false
console.log(Number.isSafeInteger(2 ** 53 - 1)); // true
//2**53-1 is the range of isSafeInteger
console.log(Number.isSafeInteger(NaN)); // false
console.log(Number.isSafeInteger(Infinity)); // false
console.log(Number.isSafeInteger("3")); // false
console.log(Number.isSafeInteger(3.1)); // false
console.log(Number.isSafeInteger(3.0)); // true
*/



//parseint and parse float
/*
let c="100.23";
let d="Hello"
let e="2**53";
let h=Number.parseFloat(d);
let b=Number.parseInt(e);
let f=Number.parseFloat(c);
let g=Number.parseInt(c);
console.log(h);//NaN
console.log(typeof(b));//number
console.log(b);//2
console.log(typeof(g));//number
console.log(g);//100.23
console.log(typeof(f));//number
console.log(f);//100
*/
/*
let student1={
  name:"Akshay",
  email:"akshay@gmail.com",
  age:23,
  Regno:22,
  GPA: 8.9,
  edu:{
    ssc:{
      school:"Akshay Schools",
    },
    inter:{
      college:"chaitanya college"
    },
    degree:{
      college:"ANC College",
      branch:{
        b1:"CSE",
        b2:"MECH",
        b3:"ECE"
      }
    }
  }
}
console.log(student1.edu.degree.branch)
console.log(student1['edu']['degree']['branch']);
console.log(student1.edu.inter.college)
//DOT Notation
console.log(student1.name,student1.email)
let student2={
  name:"nitin",
  email:"nitin@gmail.com",
  age:23,
  Regno:22,
  GPA: 8.9
}
// Bracket Notation
console.log(student1['age'], student2['age']);
student1['age']=24;
console.log(student1.age);
*/
/*
let mobiles={
  model:"realme 5s",
  color:"navy blue",
  storage:128,
  price:22000,
}
console.log(mobiles);
//Dot Notation
console.log(mobiles.model);
mobiles.storage=256;
console.log(mobiles.storage);
//Bracket Notation
console.log(mobiles['price']);
mobiles['color']="white";
console.log(mobiles['color'])
console.log(mobiles)

let details={
  name:"sai",
  age:22,
  email:"sai@gmail.com",
  degree:{
    inter:"MPC",
    BTech:"CSE",
    MTech:"AI/ML"
  },
  jobs:{
    first:"infosys",
    second:"wipro"
  },
}
console.log(details['jobs']['first'])
console.log(details.degree.inter)

details['age']=23;
console.log(details['age']);
console.log(details['degree']['BTech']);
console.log(details.degree.inter);
console.log(details);
c,onsole.log(typeof details);
console.log(details.name)
console.log(details.age +" "+details.email+" "+details.name)
details.name="ravi";
console.log(details.name)
console.log(details)
*/

/*
let name="sai from rajahmundry"
let name1="KIRAN FROM KAKINADA"
console.log(name.length)
console.log(name.toUpperCase())
console.log(name1.toLowerCase())
console.log(name.slice(4))



/*

const person = {
    fname:"John",
    lname:"Doe",
    age:25,
    cars:
    {
        car1:"BMW",
        car2:"Audi",
    },
    email:"john@gmail.com"
  }; 
  console.log(person.fname,person.lname,person.age,person.cars.car1)
  console.log(person['fname'], person['email'], person['cars']['car1']);
  
  let txt = "";
  for (let x in person) {
    txt += person[x] + " ";
  }
  console.log(txt);
  delete person.age;
  console.log(person);


//String Methods
/*
length = The length property returns the length of a string
slice() = extracts a part of a string and returns the extracted part in a new string.
            The method takes 2 parameters: start position, and end position (end not included)
substring() = it is similar to slice. The difference is that start and end values less than 0 are treated as 0 in substring().
substr() = it is also similar to slice. The difference is that the second parameter specifies the length of the extracted part.
replace() = the replace() method replaces only the first match. the method is case sensitive. Writing MICROSOFT (with upper-case) will not work
replaceAll() = The replaceAll() method allows you to specify a regular expression instead of a string to be replaced
Upper()  and Lower() = A string is converted to upper case with toUpperCase().
                     A string is converted to lower case with toLowerCase().
concat() = concat() joins two or more strings.The concat() method can be used instead of the plus operator.
trim() = The trim() method removes whitespace from both sides of a string.
trimStart() = The trimStart() method works like trim(), but removes whitespace only from the start of a string.
trimEnd() = The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
padStart() = The padStart() method pads a string from the start. It pads a string with another string (multiple times) until it reaches a given length.
padEnd() = The padEnd() method pads a string from the end. It pads a string with another string (multiple times) until it reaches a given length.
charAt() = The charAt() method returns the character at a specified index (position) in a string.
charCodeAt() = The charCodeAt() method returns the unicode of the character at a specified index in a string
*/
/*
let text="varma,vishnu,vijay";
console.log(text.length);//18
console.log(text.slice(6,12));//vishnu
console.log(text.slice(6));//vishnu,vijay
console.log(text.slice(-2));//ay
console.log(text.slice(-5));//vijay
let a=text.slice(5,10);
console.log(a);
console.log(text.slice(-15,-9))//ma,vis
console.log(text.substring(7,10))//ish
console.log(text.substring(6))//vishnu,vijay
console.log(text.substring(10,5))//,vish
console.log(text.substr(6,10));//vishnu,vij
*/

/*
let text = "My Name is sai. and my friend Name is vijay. ";
console.log(text.replace("name","name1"));//normal replace
console.log(text.replace(/name/g,"state"));//global replace
console.log(text.replace(/name/ig,"place"));//case sensitive and globally
console.log(text.replaceAll("Name","state"));//replace globally without globally
console.log(text.replaceAll(/name/ig,"Names"));//replace case sensitive and globally
*/

/*
let text = "My Name is sai. and my friend Name is vijay. ";
let c="  he is my best friend  ";
let l="he is my class mate";
let d="MY NAME IS KIRAN";
console.log(d.toLowerCase());
console.log(c.toUpperCase());

let h=c.concat(l,d);//it will join two or more strings
console.log(h);
console.log(text.charCodeAt(25));//105
console.log(text.charAt(25));//i
console.log(c);
console.log(c.trim());
let e="salary for us is 25000";
console.log(e.padStart(50,text));
console.log(e.padEnd(120,text));


console.log(e);
console.log(e.trimStart());
console.log(e.trimEnd());
let b=text.toUpperCase();
console.log(b);
let f=text.concat(c,e);
console.log(f);
*/



//String Search methods
/*
indexOf() = The indexOf() method returns the index (position) the first occurrence of a string in a string.
lastIndexOf() = The lastIndexOf() method returns the index of the last occurrence of a specified text in a string.
                Both indexOf(), and lastIndexOf() return -1 if the text is not found.
search() = The search() method searches a string for a string (or a regular expression) and returns the position of the match
match() = The match() method returns an array containing the results of matching a string against a string 
matchAll() = The matchAll() method returns an iterator containing the results of matching a string against a string.
includes() = The includes() method returns true if a string contains a specified value. Otherwise it returns false.
startWith() = The startsWith() method returns true if a string begins with a specified value. Otherwise it returns false.
endWidth() = The endsWith() method returns true if a string ends with a specified value. Otherwise it returns false.
*/

/*
let a= "my friend name is vijay and my name is sai and my dog name is rocky";
let b=a.indexOf("is");
let c=a.lastIndexOf("is");
console.log(b);
console.log(c);

let d=a.search(/name/gi);
console.log(d);


let f= a.match(/name/ig);
console.log(f);

let h="My Name is sai and my brother name is sai"
let g= h.matchAll(/sai/ig);
console.log(g);


let i=h.includes("nam");
console.log(i);
let j=h.startsWith("hi")
console.log(j);
let k=h.endsWith("sai");
console.log(k);
*/

/*
let a=[1,2,3,4,5];
let b=["hi",1,2.56,"a"];
console.log(b);
console.log(a);
console.log(typeof a);
console.log(typeof b);
*/

/*Array Methods
pop() and push() = Popping items out of an array, or pushing items into an array.
shift() = The shift() method removes the first array element and "shifts" all other elements to a lower index
unshift() = The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements
delete = Array elements can be deleted using the JavaScript operator delete. Using delete leaves undefined holes in the array.
concat() = The concat() method creates a new array by merging (concatenating) existing arrays. 
        The concat() method does not change the existing arrays. 
           It always returns a new array.
slice() = The slice() method slices out a piece of an array into a new array.
*/

/*
let a=[1,2,3,4,5];
let b=[7,8,9]
let m=a.push(6,7,8);
console.log(a);
let c=a.push("Hi");
console.log(a);
let n=a.pop("Hi");
console.log(a);
let e=a.pop();
let d=a.pop();
let f=a.pop();
console.log(a);

let l=a.pop();
console.log(a);

let g=a.shift();
console.log(a);

let h=a.unshift(8,10);
console.log(a);

delete a[2];
console.log(a);

let j=a.concat(b);
console.log(j);

let k=a.slice(1)
console.log(k);
*/

/*Array sorting
sort() = The sort() method sorts an array alphabetically.
reverse() = The reverse() method reverses the elements in an array. You can use it to sort an array in descending order.
numerical sort = sort() = By default, the sort() function sorts values as strings.
                          This works well for strings ("Apple" comes before "Banana").
                          However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1"
*/

/*
let a=["durga","lakshman","babu","varsha","Akhil"];
// let a=[2,10,5,15,3,7,6]
let b=a.sort();
console.log(b);

let c=["kiran",100,200,2,"tarun","Anju","subbu",25,500,5,"boost"];
let d=c.sort();
console.log(d);

let f=a.reverse();
console.log(f);
*/

/*
let a=[10,2,5,15];
let i,max=0;              //max=15
for(i=0;i<a.length;i++){  //a[3]=15>10
  if(a[i]>max)
  {
    max=a[i];
  }
}
console.log(max)
*/


/*
let value = [10,12,5,8,15,23,22,50,42]
console.log(value.sort());
//find max value in a array
function Max(a) {
    return Math.max.apply(null,a);
  }
  console.log(Max(value));


//find min value in a array
function Min(arr) {
    return Math.min.apply(null, arr);
}
console.log(Min(value));



// Function to sort an array
function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}
// Example usage
let array = [5, 3, 8, 1, 2];
console.log("Original array:", array);
let sortedArray = sortArray(array);
console.log("Sorted array:", sortedArray);
*/

/*
let x=find_max(20,30,15,45,80,66)
let y=find_min(10,5,20,60,45,2)
function find_max() {
    let max=-Infinity;
    for(i=1;i<=arguments.length;i++)
    {
        if(arguments[i]>max)
        {
            max=arguments[i];
        }
    }
    console.log(max);
}

function find_min(){
  let min=Infinity;
  for(i=1;i<=arguments.length;i++){
    if(arguments[i]<min)
    {
      min=arguments[i];
    }
  }
  console.log(min);
}
*/


/*
let details={
  id:1,
  name:"sai",
  age:20,
  email:"sai@gmail.com"
}
//Bracket Notation
details["gender"]="male";
console.log(details);

let persons={}
//Dot Notation
persons.name="sai";
persons.age=22;
console.log(persons);

let details2=[
  {
    name:"sai",
    age:20
  },
  {
    name:"ravi",
    age:22,
  }
]
console.log(typeof details);
*/

/*
let purse={
  cash: 25000,
  card: "ATM Card",
  credit: "ICICI Credit card",
  coins: 7
}
console.log(purse.cash);//Dot notation
console.log(purse);
console.log(purse.credit);
console.log(purse["card"]);
console.log(purse["cash"]);//Bracket Notation
purse["cash"] = 30000;//Data Change
console.log(purse["cash"]);
*/

/*
let student={
    name:"kiran",
    age: 22,
    average_marks:89.33,
    email:"kiran@gmail.com"
}
console.log(typeof(student))
console.log(`name= ${student.name} and Age is ${student.age}`);
console.log("name =",student.name," Age =",student.age," Avg=",student.average_marks," email=",student.email);
console.log(student['name']);
student['name'] = "krishna";
console.log(student);
*/

/*
let student={}
student.name="sai";
student.age=22;
student.email="sai@gmail.com";
console.log(student);
*/


/*
let students={}

let s1={ name:"sai", age:20, email:"sai@gmail.com"}
s1.age=21;
console.log(s1);
let s2={ name:"kiran", age:20, email:"kiran@gmail.com"}
students.student1=s1;
students.student2=s2;
students.student1.age=22;
console.log(students);
*/

/*
let details={
  name:"sai",
  age:20,
  degree:{
    degree1:"B.tech",
    degree2:"MBA",
    degree3:"PG",
  },
  bikes:{
    bike1:"Scooty",
    bike2:{
      bullet1:"Royal Enfield 100",
      bullet2:"Royal Enfield 400",
    },
    bike3:"Pulsar",
  }
}
console.log(details.bikes.bike2.bullet1)
console.log(details)
*/

/*
let student={}
student.name="kiran";
student.age=23;
student.email="Kiran@gmail.com";
console.log(student);
student.branch="CSE";
console.log(student);
*/
/*
function fun1(){
  let a=Number(document.getElementById("a").value)
  let b=Number(document.getElementById("b").value)
  let c=a+b;
  document.getElementById("c").value=c;
}
*/
/*
function add(a,b){
  console.log(a+b);
}
add(10,20);
add("sai ","varma");


/*
function sum(a,b){
  console.log(a+b);
}

sum(10,20);
sum(25,30);
sum("sai","varma");
*/


/*
let man={
    age:25,
};
man.fname="Ravi";
man.lname="varma";
man.fullname=function(a,b,c){
  return "my first name is "+man.fname +" and my last name is "+man.lname+" my age is "+man.age+" i am studying in "+ a +" in "+b+" "+c;
}
console.log(man);
console.log(man.fullname());
console.log(man.fullname("from Rajahmundry","state AP"));
console.log(man.fullname("AH Career","Rajahmundry","state AP"))
console.log(typeof(man.fullname))
console.log(typeof(man.fname))
console.log(typeof man.age);
console.log(man.fname,man.lname,man.age);
*/

/*
let person1={
    fname:"sai",
    lname:"varma",
    age: 25,
    fullname:function() {
        return this.fname+" "+ this.lname;
    },
    // fullname1:"Sai varma",
}
console.log(person1.fname);
console.log(person1.fullname());
console.log(person1.fname,person1.lname,person1.age,person1.fullname());
*/

/*
let person ={
    name: "sai",
    lname :"varma",
    language :" ",
    language1:" ",
    fun: function(lang,lang2){
        this.language=lang;
        this.language1=lang2;
    },
    get fname1(){
      return this.name+" "+this.lname;
    },
}
person.fun("Telugu","English");
console.log(person.language)
console.log(person.language1)
console.log(person.fname1)
console.log(typeof(person.fun));
*/

/*
//store mutliple objects in a single object
// Create an object to store multiple objects
let objectStore = {};
// Add objects to the object store
objectStore['person1'] = {name:"sai", age:22};
objectStore['person2'] = {name:"kiran", age:25};
objectStore['person3'] = {name:"ravi",age:24};
// Access objects from the object store
console.log(objectStore['person1']); 
//console.log(objectStore['person2'])
//console.log(objectStore['person3'])
console.log(objectStore);
*/


/*
let Students={}

let s1={name:"sai", age:25, email:"sai@gmail.com"}
let s2={name:"kiran", age:30, emai:"kiran@gmail.com"};

s1.name="Ravi";

Students.student1 = s1;
Students["student2"] = s2;
Students.student1.name="Kanna";
console.log(Students);
*/

/*
const pure = {}
pure['fname'] = "sai";
pure.lname = "varma";
pure.age=25;
console.log(pure.fname +" "+ pure.lname);

//Displaying object using loop
let txt = "";
for(let x in pure){
    txt+=pure[x]+ " ";
    console.log(x);
}
console.log(txt);
//Displaying Objects using Values
console.log(Object.values(pure));
//Displaying Object using JSON.stringify
console.log(JSON.stringify(pure));



const letters = new Set();
letters.add(1);
console.log(letters)
*/


/*Set Methods
new Set() =	Creates a new Set
add() =	Adds a new element to the Set
delete() =	Removes an element from a Set
has() =	Returns true if a value exists
clear() = Removes all elements from a Set
*/

/*
let a = new Set([1,2,3,8,9]);
console.log(a);
a.add(4);
a.add(5);
console.log(a);
a.delete(2);
console.log(a);
console.log(a.has(5));
console.log(a);
a.clear();
console.log(a);
*/

/*
console.log(a.values());
let letters = a.entries();
let txt ="";
for(let x in a){
    txt+=x;//txt=txt+x
}
console.log(txt);
console.log(a.clear());
console.log(a);*/

/*Map Methods
new Map() =	Creates a new Map object
set() =	Sets the value for a key in a Map
get() =	Gets the value for a key in a Map
clear() = Removes all the elements from a Map
delete() = Removes a Map element specified by a key
has() =	Returns true if a key exists in a Map
*/

/*
const fruits = new Map([["Apple",500],["oragne",200],["Papaya",300]]);
console.log(fruits);
fruits.set("Mango",300);
fruits.set("Banana",100);
console.log(fruits);
console.log(fruits.size);
console.log(fruits.get("Apple"));
fruits.delete("Apple");
console.log(fruits);
console.log(fruits.has("Apple"));
fruits.clear();
console.log(fruits);
*/


/*
function add(a,b){
    return a*b+b-2;
    return fname+" "+lname;
}
console.log(add("sai","varma"));
console.log(add(10,20));
console.log(add(10.2,20.1));
*/

/*
function sum(a,b){
  console.log(a-b);
}
sum(10,"10");
sum(15,20);
*/

/*
function add(a,b){
    console.log(a+b);
}
add(2,3);
add(10,20);
add(30,60);
*/

/*
const persons={
    fulldetails: function() {
        return this.name+ " "+this.age+" "+this.email;    
    }
}
let person1={
    name:"sai",
    age:23,
    email:"sai@gmail.com",
}
let person2 ={
    name:"Ravi",
    age:24,
    email:"ravi@gmail.com"
}
console.log(persons.fulldetails.call(person1));
console.log(persons.fulldetails.call(person2));
console.log(typeof(persons));
*/

/*
let fruits = new Map([["Apple",500],["Mango",600],["Banana",200],["Orange",300]]);
let text = "";
fruits.forEach (function(value, key){
  text += key + ' = ' + value
})
console.log(text);
*/

//Function Call method
/*
const person = {
  fullName: function(a,b) {
    return this.firstName + " " + this.lastName + " "+ a + " "+ b;
  }
}
const varma = {
  firstName:"sai",
  lastName: "varma"
}
const vishnu = {
  firstName:"vishnu",
  lastName: "kumar"
}
console.log(person.fullName.call(varma,"from Rajahmundry","i am a Teacher"));
*/



//Function apply method
/*
const person = {
  fullName: function(a,b) {
    return this.firstName + " " + this.lastName+" "+a+" "+b;
  }
}
const person1 = {
  firstName: "Mary",
  lastName: "Doe"
}
 const person2={
    firstName:"Sai",
    lastName: "Varma"
}
console.log(person.fullName.apply(person2,["I am","teacher"]));
*/

//Function Bind Method
/*
const person = {
  firstName:"John",
  lastName: "lather",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}
const details={
  firstName:"sai",
  lastName:"varma",
}
const student={
  firstName:"kiran",
  lastName:"kumar",
}
let fullName = person.fullName.bind(details);
console.log(fullName());
*/

/*
let details = {name:"sai", age:25, salary:25000}
let i;
for (i in details) {
  console.log(i+" = "+details[i]);    
  }
console.log(details['age']);


let arr=[1,2,3,4,5];
arr.forEach(i => {
  console.log(i);
});
*/

/*
let arr1=[10,20,30];
let detail={name:"ravi",age:25};
let i;
for(i=0;i<=detail.length;i++){
  console.log(i+" = "+detail[i]);
}
for(i=0;i<=arr1.length;i++){
  console.log(i);
}
*/

/*
let a=2,b=3,c,j;
console.log(a);
console.log(b);
for(j=0;j<=5;j++)
{
  c=a+b;
  a=b;
  b=c;
  console.log(c);
}
*/

/*
let i=1;
while(i<=10){
  console.log(i);
  i++;
}

let j=1;
do{
  console.log(j);
  j++;
}while(j<=10);
*/

/*
function handle(){
let a=document.getElementById("a").value;
let b= document.getElementById("b").value;
let z=a+b;
document.getElementById("c").value=z;
}
*/

/*
let a=document.getElementById("p1");
a.style.color="red";
a.style.fontSize="25px";
a.style.fontWeight="bold";
a.style.border="2px solid black";
a.style.padding="20px";
a.style.backgroundColor="lightgreen";
a.style.margin="30px 20px";
*/

/*
let b=document.getElementById("div0");
b.style.border="2px solid black";
b.style.width="300px";
b.style.height="50px";
b.style.backgroundColor="blue"
b.style.marginLeft="40px"
b.style.marginTop="25px";

let c=document.getElementById("div1");
c.style.border="2px solid black";
c.style.width="400px";
c.style.height="100px";
c.style.backgroundColor="green";
c.style.marginLeft="40px"
c.style.marginTop="25px";

let d=document.getElementById("div2");
d.style.border="2px solid black";
d.style.width="500px";
d.style.height="150px";
d.style.backgroundColor="yellow";
*/

//Single Element Selector
/*
let b=document.querySelector(".heading");
b.style.color="red";
b.style.textAlign="center";
b.style.fontSize="40px";
*/


//multi Element Selector
/*
let c= document.querySelectorAll(".heading");
c[2].innerHTML="Hi Hello";
c[3].innerHTML = "i am from js"
console.log(c);
*/

/*
let d=document.getElementsByTagName("div");
d[2].innerText = "I am 2nd Division in HTML Document"
console.log(d);
*/

/*
let e=document.getElementsByClassName("h1");
e[1].innerHTML="<b><i>Class Name</i></b>"
console.log(e);
*/

//parent child and traversing
/*
let x = document.querySelector('.container');
console.log(x.childNodes);
console.log(x.children);

let y = document.querySelector("body")
console.log(y.childNodes)
console.log(y.children)

let nodeName = x.childNodes[1].nodeType;
console.log(nodeName);

let nodenumber = y.childNodes[].nodeType;
console.log(nodenumber);
//Node Types

//  Element==>1
//  Attribute==>2
//  Text Node==>3
//  Comment==>8
//  Document==>9
//  Doctype==>10
*/

/*
let container = document.querySelector('div.container');
console.log(container.children);
console.log(container.children[0]);
console.log(container.firstChild);
console.log(container.firstElementChild);
console.log(container.lastChild);
console.log(container.lastElementChild);
console.log(container.childElementCount);
console.log(container.nextSibling);
console.log(container.previousSibling)
console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);
*/

//creating and replacing using DOM
// createElement()
/*
let elem3=document.createElement("h1");
elem3.id="p4";
elem3.innerHTML="i am from Dom as h1 element";
elem3.setAttribute("title","heading element");
console.log(elem3)
//elem3.style.fontSize="40px";
//elem3.style.color="red";


let elem2=document.createElement("i");
elem2.id="p3";
elem2.innerHTML="I am Creating a paragraph using Dom";
elem2.setAttribute("title","this is dom");
console.log(elem2);
elem2.style.fontSize="40px";
elem2.style.color="red";


var elem = document.createElement("a");
elem.className = "jsClass";
elem.id = "jsID";
elem.setAttribute("href", "https://www.google.com");
//elem.innerText = "<b>DO NOT CLICK HERE</b>";
elem.innerHTML = "<b>DO NOT CLICK HERE</b>";
console.log(elem);

//setting element in a html
let div = document.querySelector('div.container');
let div4=document.querySelector('div#div2');
let select=document.querySelector("body");
select.appendChild(elem3);
div4.appendChild(elem2);
div.appendChild(elem);
console.log(elem);
*/

/*
//getAttribute()
var h = document.getElementById("p4").getAttribute("title");
console.log(h);

// removeAttribute()
var h = document.getElementById("myAnchor").removeAttribute("href");

// hasAttribute()
var e = document.getElementById("myAnchor").hasAttribute("href");
console.log(e);


// replaceWith
/*
let element2 = document.createElement("div");
let content = document.createTextNode("Content Added using only JavaScript");
element2.appendChild(content);

let element1 = document.getElementById("myId1");
element1.replaceWith(element2);
*/

// removeChild()
/*
let list = document.getElementById("myUl");
if(list.hasChildNodes()){
    list.removeChild(list.childNodes[3]);
}

//Destructing Assignment
let person = {
  fname:"kiran",
  lname:"Reddy",
  email:"kiran@gmail.com"
}
 let person1={
  fname:"Akshay",
  lname:"kumar",
  email:"akshay@gmail.com"
}
console.log(person.fname)
let {fname, lname, email} = person;
console.log(fname);

let arr=[10,20,30];
console.log(arr[1]);

let [a,b,c]= arr;
console.log(b);
*/


/*
1. **Date Functions**:
   - `new Date()`: Creates a new Date object with the current date and time.
   - `new Date('2024-07-18T12:00:00')`: Creates a Date object for a specific date and time.
   - `getFullYear()`, `getMonth()`, `getDate()`: Methods to get the year, month (zero-based), and day.
   - `getHours()`, `getMinutes()`, `getSeconds()`: Methods to get the hours, minutes, and seconds.
   - `getTime()`: Gets the time in milliseconds since January 1, 1970.
   - `setFullYear()`, `setMonth()`, `setDate()`: Methods to set the year, month, and day.

2. **Math Functions**:
   - `Math.PI`, `Math.E`: Constants for PI and Euler's number.
   - `Math.round()`, `Math.ceil()`, `Math.floor()`: Methods to round numbers to the nearest integer, round up, and round down.
   - `Math.pow()`, `Math.sqrt()`: Methods to calculate powers and square roots.
   - `Math.sin()`, `Math.cos()`: Trigonometric functions (input in radians).
   - `Math.random()`: Generates a random number between 0 (inclusive) and 1 (exclusive).
   - `Math.floor(Math.random() * 10)`: Generates a random integer between 0 and 9.

*/

//Date Functions
/*
// Create a new Date object with the current date and time
let now = new Date();
console.log("Current date and time: " + now);

// Create a Date object for a specific date and time
let specificDate = new Date('2025-07-18T12:00:00');
console.log("Specific date and time: " + specificDate);

// Get the year, month, and day
console.log("Year: " + now.getFullYear());
console.log("Month: " + (now.getMonth() + 1)); // Months are zero-based, so add 1
console.log("Day: " + now.getDate());

// Get the hours, minutes, and seconds
console.log("Hours: " + now.getHours());
console.log("Minutes: " + now.getMinutes());
console.log("Seconds: " + now.getSeconds());

// Get the time in milliseconds since January 1, 1970
console.log("Milliseconds since January 1, 1970: " + specificDate.getTime());


// Set a specific date and time
now.setFullYear(2025);
now.setMonth(11); // December (months are zero-based)
now.setDate(25);
console.log("Updated date: " + now);
*/


//math Functions
/*
// Math constants
console.log("PI: " + Math.PI);
console.log("E: " + Math.E);

// Rounding numbers
console.log("Round 4.6: " + Math.round(4.6)); //5
console.log("Ceil 4.2: " + Math.ceil(4.2)); //5
console.log("Floor 4.8: " + Math.floor(4.5)); //4

// Power and square root
console.log("2 to the power of 3: " + Math.pow(2, 3));
console.log("Square root of 16: " + Math.sqrt(16));

// Trigonometric functions (values in radians)
console.log("Sin(PI/2): " + Math.sin(Math.PI / 2));
console.log("Cos(PI): " + Math.cos(Math.PI));
console.log(Math.cos(90));

// Random number between 0 (inclusive) and 1 (exclusive)
console.log("Random number: " + Math.random());

// Random integer between 0 and 9
console.log("Random integer between 0 and 9: " + Math.floor(Math.random() * 10));
*/

/*
function fun1(){
  console.log("Hello World");
  fun2();
}
function fun2(){
  setTimeout(function() {
    console.log("I am from India");
  }, 5000);
  const interval = setInterval(function() {
    console.log("Hello i will Not Stop")
  }, 2000);
  setTimeout(function(){
    clearInterval(interval);
  },10000);
}
fun1();
// fun2();
*/

/*
function fun1(){
  console.log("Hello How are you");
  fun2();
}
function fun2(){
  setTimeout(function() {
    console.log("I am Fine What About You");
  }, 2000);
  const interval = setInterval(() => {
    console.log("What about you");
  }, 1000);
  setTimeout(function(){
    clearInterval(interval);
  },3000);

  // console.log("I am Fine What about You");
}
fun1();
// fun2();
*/

//CallBack Example
/*
// Function to register a user
function registerUser(username, callback) {
  console.log(`Registering user: ${username}...`);
  setTimeout(() => {
      console.log(`User ${username} registered successfully.`);
      callback(username);
      //sendWelcomeEmail(username);
  }, 2000); // Simulate a 2-second registration time
}

// Function to send a welcome email
function sendWelcomeEmail(username) {
  console.log(`Sending welcome email to ${username}...`);
  setTimeout(() => {
      console.log(`Welcome email sent to ${username}.`);
  }, 1000); // Simulate a 1-second email sending time
}

// Use the registerUser function with the sendWelcomeEmail callback
const username = "JohnDoe";
registerUser(username, sendWelcomeEmail);
*/

//promises
/*
function fun1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      var age = Number(document.getElementById("n").value);
      // console.log(age);
      if (age > 18) {
        console.log("You are Eligible for Vote");
        resolve();
      }
      else {
        console.log("not Eligible for vote");
        reject("Your age is less than 18");
      }
    }, 2000);
  })
}
fun1()
  .then(function(){
    console.log("Vote Done");
  })
  .catch(function(error){
    console.log("Error:", error);
  });
*/

/*local and Session storage */
/*
let a ="hello";
let b="My name is sai";
localStorage.setItem(a,b);
localStorage.setItem("sai","is a developer");

let myfav=localStorage.getItem(a);
console.log(myfav);

localStorage.removeItem("sai");
localStorage.clear(); 

let obj={
  name:"sai",
  age:22,
  email:"sai@gmail.com"
}
localStorage.setItem(key,JSON.stringify(obj));

let item = JSON.parse(localStorage.getItem(key));
console.log(item);
*/


//OOPS in Java Script 
/*
var mobile={
  brand:"Redmi",
  storage:"128gb",
  model:"12A"
}
console.log(mobile);

//creating a constructor
class mobiles {
  constructor(brand, storage, model) {
    this.brand = brand,
      this.storage = storage,
      this.model = model;
  }
}

let SaiPhone=new mobiles("Redmi","128gb","note9");
console.log(SaiPhone);
*/


//inheritance

/*
class vehicle{
  constructor(name,model){
    this.name = name;
    this.model = model;
  }
  return(){
    return `Model name is ${this.name} `;
  }
  
}
class bike extends vehicle{
  constructor(name,model,year){
    super(name,model);
      this.name=name;
      this.model=model;
      this.year=year;
  }
}
class car extends vehicle{
  constructor(name,model,cost){
    super(name,model);
    this.name=name;
    this.model=model;
    this.cost=cost;
  }
}

var car2= new car("Maruti", "i20", 750000);
console.log(car2.cost);

var car1 = new vehicle("Honda","i10");
console.log(car1);

var bike1= new bike("2023");
console.log(bike1);*/

/*var bike1= new bike("Suziki",125,2023);
console.log(bike1.name);*/


//synchronous function
/*
function fun1(){
  console.log("Hello i am calling Function");
}
function fun2(){
  console.log("Hello world");
  fun1();
  console.log("Calling Function 2");
}
fun1();
fun2();
*/

/*
o/p:- 
Hello i am calling Function
Hello world
Hello i am calling Function
Calling Function 2
 */

//asynchronous Function
/*
function fun3(){
  setTimeout(() => {
    console.log("Hello miss are you there");
  }, 10000);
}
function fun4(){
  fun3();
  console.log("Hello miss nina");
}
fun4();

*/
/*
Here the output will display after 10seconds

Hello miss nina
Hello miss are you there
*/

/*
class ATM{
  constructor(withdraw){
    this.amount=2000;
    this.minimum=1000;
    this.withdraw=withdraw;
  }
  getAmount(){
    if((this.amount-this.minimum)>=this.withdraw){
      console.log("Successfully withdraw");
    }
    else{
      console.log("Withdraw Failed");
    }
  }
}
var cash = new ATM(900);
cash.getAmount();
*/



//AJAX - Asynchronous java script and XML
/*
function InfoFunction(){
  var request = new XMLHttpRequest();
  request.open("GET","new.html");
  request.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      console.log(this.responseText)
      document.getElementById("container").innerHTML = this.responseText;
    }
  }
  request.send();
}
*/

/*
function Infofunction() {
  var request = new XMLHttpRequest();
  request.open("POST", "test.html", true);
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");//Set the content type header

  // Prepare the data to be sent with the POST request
  var data = "param1=value1&param2=value2";

  request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      document.getElementById("container").innerHTML = this.responseText;
    }
  };
  request.send(data);
}


//promises
/*
function fun1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      var age = Number(document.getElementById("n").value);
      console.log(age);
      if (age > 18) {
        console.log("You are Eligible for Vote");
        resolve();
      }
      else {
        console.log("not Eligible for vote");
        reject("You age is less than 18");
      }
    }, 2000);
  })
}

fun1()
  .then(function(){
    console.log("Vote Done");
  })
  .catch(function(error){
    console.log("Error:", error);
  });
  */
 

/*
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding("ascii");
let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (chunk) {
    inputString += chunk;
});
process.stdin.on("end", function () {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
  return inputString[currentLine++];
}

function Activity(amount) {
    this.amount =amount;
}
Activity.prototype.setAmount = function(value){
    if(value<=0){
        return false;
    }
    else{
        this.amount=value;
        return true;
    }
}
Activity.prototype.getAmount = function(){
    return this.amount;
}

function Payment(amount, receiver) {
    Activity.call(this, amount);
    this.receiver=receiver;
}
Payment.prototype = Object.create(Activity.prototype);

Payment.prototype.setReceiver = function(receiver){
    this.receiver = receiver;
}
Payment.prototype.getReceiver = function(){
    return this.receiver;
}

function Refund(amount, sender) {
    Activity.call(this,amount);
    this.sender = sender;
}
Payment.prototype = Object.create(Activity.prototype);

Refund.prototype.setSender = function(sender){
    this.sender = sender;
}
Refund.prototype.getSender = function(){
    return this.sender;
}

const payment = new Payment(100,"john");
console.log(payment.getAmount());
console.log(payment.getReceiver());
payment.setAmount(150);
console.log(payment.getAmount());

const refund = new Refund(50, "Alice");

console.log(refund.getAmount());
console.log(refund.getSender());
refund.setAmount(200);
console.log(refund.getAmount());
*/


/*
// Activity constructor function
function Activity(amount) {
  this.amount = amount;
}

// Adding functions to Activity prototype
Activity.prototype.setAmount = function(value) {
  if (value <= 0) {
    return false;
  } else {
    this.amount = value;
    return true;
  }
};

Activity.prototype.getAmount = function() {
  return this.amount;
};

// Payment constructor function inheriting from Activity
function Payment(amount, receiver) {
  Activity.call(this, amount);
  this.receiver = receiver;
}

// Inheriting Activity's prototype
Payment.prototype = Object.create(Activity.prototype);

// Adding functions to Payment prototype
Payment.prototype.setReceiver = function(receiver) {
  this.receiver = receiver;
};

Payment.prototype.getReceiver = function() {
  return this.receiver;
};

// Refund constructor function inheriting from Activity
function Refund(amount, sender) {
  Activity.call(this, amount);
  this.sender = sender;
}

// Inheriting Activity's prototype
Refund.prototype = Object.create(Activity.prototype);

// Adding functions to Refund prototype
Refund.prototype.setSender = function(sender) {
  this.sender = sender;
};

Refund.prototype.getSender = function() {
  return this.sender;
};

// Testing the implementation
const payment = new Payment(100, 'John');
console.log(payment.getAmount()); // Output: 100
console.log(payment.getReceiver()); // Output: John
payment.setAmount(150);
console.log(payment.getAmount()); // Output: 150

const refund = new Refund(50, 'Alice');
console.log(refund.getAmount()); // Output: 50
console.log(refund.getSender()); // Output: Alice
refund.setAmount(75);
console.log(refund.getAmount()); // Output: 75
*/
/*
function fun1(){
  
  var bhanu =document.getElementById("bhanu").value 
  console.log(bhanu)
  var sri =document.getElementById("sri").value
console.log(sri)
}
function rock(){
  var chitti=document.getElementById("1").value
  console.log(chitti)
  var my=document.getElementById("2").value
console.log(my)
}
*/