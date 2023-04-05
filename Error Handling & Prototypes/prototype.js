let myHeros = ["thor", "spiderman"];
letdcHeros = ["batman", "superman"];

let heropower = {
    thor : "hammer",
    spiderman: "sling",

    getSpidermanPower: function(){
        console.log('spider power is ', this.spiderman);
    }
}

Object.prototype.sachin = function(){
    console.log('sachin is present in all object');
}

console.log(myHeros.sachin());
console.log(heropower.sachin());

Array.prototype.heySachin = function() {
    console.log("sachij says hi");
    
}

// console.log(myHeros.heySachin());
// console.log(heropower.heySachin());

//inheritance

const User = {
    name : "Sachin",
    email : "sachin@gmail.com"
}

const Teacher = {
    makeVideos : true
}

const TeachingSupport = {
    isAvailable : false
}

const TAAssistant = {
    makeAssignment : "js Assignment",
    fullTime : true,
    __proto__: TeachingSupport  //old way
}

Teacher.__proto__ = User    // outside overright

Object.setPrototypeOf(TeachingSupport, Teacher) // new way

console.log(TAAssistant.isAvailable);

String.prototype.truelenght = function() {
    console.log("ture length is", this.trim().length);
}

"sachin.     ".truelenght();
"sach.         ".truelenght();

"sachin.     ".truelenght();
console.log();