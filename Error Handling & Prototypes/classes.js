// class - classes serve as a blueprint for creating objects, providing a way to organize and structure code.
// introduced in ES6

 class Product{
    // properties behaviour
    // behaviours -> functions -> member functions 

    // properties -> variables -> data member
    name;
    price;
    rating;
    


    display(){
        console.log("displaying the current product");
    }
 }

 const p = new Product(); // new creates an empty plain object
 // in the above we are calling the constructor method
 console.log(p);
 p.display();


 //*************** Constructor *******************************

 class Prodt{
    // name;
    // price;
    // rating;
    #rating;

    constructor(n, p, r){
        console.log("calling the constructor");
        this.name = n;
        this.price = p;
        this.#rating = r;
        // return 10; if you returning primitive it will be avoided in constructor
        // return {x:0, y:20};
        // return this;
    }

    static custom(){
        console.log("calling static method");
    }

    // getRating(){
    //     console.log(this.#rating);
    // }

    // setratting(r){
    //     if(r < 0 )return;
    //     this.#rating = r;
    // }

    get getRating(){   // now use this getter & setter as a property
        console.log(this.#rating);
    }
    

    set setRatting(r){
        if(r < 0 )return;
        this.#rating = r;
    }


    dis(){
        console.log("displaying the current product");
        console.log(" this refers to ", this);
        console.log("displaying the current product", this.name
        , this.price, this.#rating);
    }
 }

 const c = new Prodt("iphone", 100000, 5); // new creates an empty plain object
 // in the above we are calling the constructor method

 console.log(c);  // to exceute object
 c.dis();  // to execute member function or behaviour

 // Class introducted in ES6 so before this blueprinting is using function consturctor for more got to -> functionConstructor.js file


 //Class methods and properties

//static method - always called by class name not by object name 

Prodt.custom();   // always called by class name not by object name 

c.name = " samsung";
console.log(c.name);

//  Abstract - as above name is public now we will do private as a for security for private use  ex - #rating you will use rating by display() method.

console.log(c.rating);  //not showing or will not be update
c.dis();  // shows only with in function or class

// Getter -  value fetch & Setter - value set  (use for accessible the private value)

// c.setRatting(10); // here using as a function
// c.getRating();

c.setRatting = 15;  // here you are using as a property
c.getRating;



