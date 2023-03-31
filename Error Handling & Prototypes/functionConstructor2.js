const Product = function(n, p, r){
    this.name = n;
        this.price = p;
        this.rating = r;
}

const p = new Product("iphone", 100000, 5);
console.log(p);

//Arrow function can't be used here but anomynous fuction can be used as above
// the theory of this keyword pointing to context is not applicable with arrow function

let obj = {
    x:10,
    // fun(){                      // this will run
    //  console.log(this.x);
    // }
    // fun() => {                 // this will not exceute as arrow function
    //     console.log(this.x);
    //    }

    fun2(){
        y ={
            gun: () => {
                console.log(this.x);
            }
        }
        y.gun();

    }

}
obj.fun2();
