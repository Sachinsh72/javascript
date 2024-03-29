//---------------------Object

const obj1 ={
    name : "sachin",
    role : "student",

    isloggedIn : true,

    registerUser : function(){
        console.log(`${this.name} is a registered username`);
    }
}

console.log(obj1.name);
console.log(obj1.role);

const obj2 = {
    10 :  "number10",
    20 : "number20"
}

//Object by Symbol - declare Symbol with an object as a key.

// const key1 = Symbol()
const key2 = Symbol("key2");
const key3 = Symbol("key3")

const obj3 = {
    [key2] : "sachin",
    [key3] : "sharma"
}

console.log(obj3[key2]);
console.log();

//declaration and methods
const obj4 = new Object();
obj4.email = "sachin@live.in"

const obj5 = {
    name : "aman",
    email : "aman@gmail.co",
    isloggedIn : true
}

// Object.freeze(obj5)

obj5.email = "amankumar@gmail.co"
obj5["isloggedIn"] = false;

console.log(obj5);
console.log(Object.keys(obj5));
console.log(Object.values(obj5));

//------------------------------

const username2 = {
    name2 : "Sachin sharma",
    email2 : "sachin@gmail.com"
}

console.log(username2.name2);


