//----------Functions

// function declaration
function hello(a,b){       
    console.log("Hello World");
    // console.log(a+b);
    return a+b;         // for this holder will required so the variable sum is assign for that return in below.
}

// hello(25,30);               // function call 
let sum = hello(25,30);

console.log(sum);
console.log(hello(65,25));

//-----------------------------------------------

function register(user) {
    return user + ' is registered'
};

//register('sachin');              //return value not printed
// console.log(register());            //undefined
console.log(register("Sachin"));

//-------------------------------------------------

function register(user) {
    if(!user){                  // user == undefined : also this can be retrun                    
        return " Please pass the user"
    }

    return user + ' is registered'
};

console.log(register());

//-------------------------------------------------

function register(user="Ankur") {       //Ankur is default user if the user is not passed then ankur will print else it print passed value
    if(!user){
        return " Please pass the user"
    }

    return user + ' is registered'
};

console.log(register());
console.log(register("Sachin sharma"));

//-------------------------------------------------

//shopping cart

function cartBillTotal(...numbers){
    //take a variable total
    let total = 0;
    //looop all values and keep adding to total
    for(const num of number){
        total +=num;
        // total = total + num ;
    };
    //return total
    return total;
};

//--------------------------------------------------

const userAmazon = {
    id : "123",
    name : "Sachin",
    email : "sachin@gmail.com"
}

function addUser(obj){
    // console.log('A user name ' + obj.name + ' got an email' + obj.email);
    console.log(`A user name ${obj.name} got an email ${obj.email}`);
}

addUser(userAmazon);

//--------------------------------------------------

//Arrow function

function addtionTwoNum(a,b){            //regular function
    return a+b;
};

const additionTwoNumV2 = (a,b) => {         //arrow function
    return a+b;
}

const additionTwoNumV3 = (a,b) => a+b;    // if one line code then this syntax can be used and it default return value .


const additionTwoNumV4 = a => 5;  //implicit return

const additionTwoNumV5 = a => ({email : "sachin@gmail.com"});    // for objec return

const additionTwoNumV6 = (a,b) => ({email : "sachin@gmail.com"}); 


function learning(){
    console.log(this);      // this : global value - hard core value depends upon environment
}

const learningTwo = () => {
    console.log(this);      // this : empty
}

// learning();
learningTwo();


