let user={
    name:"Samiksha",
    age:21,
    Profession:"Engineering",
    Qualification:"BTech",
    greeting:function(){
        // console.log(`Hello,I am ${user.name}`);
        console.log(`Hello,I am ${this.name}`);

        
    }

}
// console.log(user);
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));


// console.log(user.name);
// console.log(typeof user);

// //add details in object
// user.surname="Chavan";
// console.log(user);

// //updatee details
// user.age=25;
// console.log(user);

// for(let keys of Object.keys(user)){
//     console.log(keys);
// }

// for(let values of Object.values(user)){
//     console.log(values);
// }

// for(let entries of Object.entries(user)){
//     console.log(entries);
// }

user.greeting();