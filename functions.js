//method 1
function greeting(){
    console.log("Hello I am Samiksha");
}
function sum(a,b,c=0,d=0){
    return a+b+c+d;
}
console.log(sum(10,45));
console.log(sum(10,45,15));
console.log(sum(10,45,87,0));
console.log(sum(10,45,5,1));

greeting();


//REST operator
function sumnumbers(...num){
    let sum=0;
    for(let i of num){
        sum+=i;
    }
    console.log(sum);
    
}

sumnumbers(10,20,30,40,50,60);
sumnumbers(10,40,80);


//method 2 to declare function
const addnumbers=function(num1,num2){
    return num1+num2;
}
console.log(addnumbers(10,56));


//Arrow Functions-1
const sumOfNumbers=(num1,num2)=>{
    return num1+num2;
}
console.log(sumOfNumbers(10,35));


//Arrow funnctions -2 when you want to only return somthing
const addNumbers=(num1,num2)=>num1+num2;
console.log(addNumbers(5,6));


//sorting of an array
const arr=[34,78,90,12,6];
console.log(arr);
arr.sort((a,b)=>a-b);
console.log(arr);


// square of a number 
const sq=(num)=>num*num;
console.log(sq(5));

// for objects
const hello=()=>({name:"Samiksha",age:20});
console.log(hello());

// immediately invoke function
(function greet(){
    console.log("Hello World");
})();