 //Class introducted in ES6 so before this blueprinting is using function consturctor
 
 /*
 * 1. this keyword in js is diff than other languages.
 * 2.  this keyword refers to the context from where we called
 * 
 * in the function constructor also
 * - if you return primitive it is ignored and we return the object referred bybthis
 * - if you return a custom obj, then ibj is returned
 * - if you don't return anything then obj referred by this is referred
  */

 function Product(n, p, r){
    this.name = n;
    this.price = p;
    this.rating = r;
 }

 const p = new Product( "macbook", 1500000, 5);
 console.log(p);

 let x = {
    p: Product
 };

 x.p("airpods", 2000,5);
 console.log(x);  // showing here calling context as x is calling here

