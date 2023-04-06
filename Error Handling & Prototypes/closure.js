let score = 4;

function one() {
    let score = 0;
    console.log(score);
}

function two() {
    let score = 3;
    console.log(score);
}

function three() {
    console.log(score);
}

// one();
// two();
// three();
// console.log(score);

function outerFunc() {
    let outerVar = 'I am at scope level 1'
    function innerFunc() {
        innerVal = "I am at scope level 2"
        console.log(outerVar);
    }
    // console.log(innerVal);  
    innerFunc();
}

// outerFunc();        // inshot this is lexical scope


// another function

const globalVal = 0;

function func() {
    const val = 1;
    console.log(globalVal);

    function innerofFunc(){
        const val2 = 2;
        console.log(val2, val, globalVal);

        function innerofInnerfunc(){
            const val3 = 3;
            console.log(val, val2, val3, globalVal);
        }

        innerofInnerfunc();
    }
    innerofFunc();
}

func();

//closure

function superfunc(){
    let outerVal = "I am outer";
    function minor(){
        console.log(outerVal);
    }
    minor();
}
superfunc();


// real world example

const errorMessage = "File not found";

setTimeout(function callback(){
    console.log(errorMessage);
},1000);

//-----------

let pagecount = 0;

const items = [1,2,3,4,5]

items.forEach(function iterator(num){
    pagecount++;
    console.log(num);
});

console.log("Page count", pagecount);