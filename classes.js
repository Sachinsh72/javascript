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

 const p =new Product();
 console.log(p);
 p.display();

 //**********************************************