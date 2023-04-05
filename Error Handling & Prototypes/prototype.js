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

console.log(myHeros.heySachin());
console.log(heropower.heySachin());

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
    fullTime : true
}