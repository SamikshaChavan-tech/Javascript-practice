let arr=[1,"Samiksha",true,undefined,null];
console.log(arr);
console.log(arr.length);
console.log(arr[1]);
console.log(typeof arr);
arr[0]=100;
console.log(arr);
arr.push(90);
console.log(arr);
console.log(arr.length);


arr.pop();
console.log(arr);


arr.unshift(200);// adds element in the start of the array
console.log(arr);

arr.shift();//removes elemnet from the start of the array
console.log(arr);

for(let i=0;i<arr.length;i++){
    console.log(arr[i]); 
}


let brr=[10,20,30,40];
brr[2]=70;

console.log(brr);
console.log(brr.slice(1,3));//slice->it gives the particular portion of an array without making any changes to the original array
console.log(brr.splice(1,3));//splice ->trims the actual arr
console.log(brr);


const arr1=[10,20,30,40,50];
const arr2=["samiksha",1,2,null,undefined];

console.log(arr1.concat(arr2));
// arr1.push(arr2);
// console.log(arr1);

const arr3=[...arr1,...arr2];//spread operator
console.log(arr3);

let names=["alice","Samiksha","Arun","Chavan","Samiksha"];
console.log(names.toString());
console.log(names.join(" "));

console.log(names.indexOf("Arun"));
console.log(names.indexOf("Ruchita"));
console.log(names.indexOf("Samiksha"));
console.log(names.lastIndexOf("Samiksha"));

console.log(names.includes("Ruchita"));

names.sort();//it works as per the ASCII value .an if there are numbers in an array then they are also treated as characters and sorted as per the ASCII value
// names.reverse();
console.log(names);


//arrays in js  support heterogenous datatype .there is only fixed rule that every element will be sorted based on its ASCII value irrespective of if it is a number ,null,undefined,string
const arr5=[10,"sam",null, undefined,"chavan"];
arr5.sort();
console.log(arr5);


//to properly osrt the array
const arr6=[31,20,46,17,8,90,56];
arr6.sort((a,b)=>a-b);
console.log(arr6);

 
const arr7=[10,20,330,[40,50,60],70,80];
console.log(arr7[3]);
console.log(arr7[3][2]);


