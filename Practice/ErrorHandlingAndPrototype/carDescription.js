/* Q03. Create a class called Car with three properties: company, model, and year. The class should have a method
called getDescription that returns a string in the format "This is a <year> <company> <model>". Instantiate an
instance of the Car class and call the getDescription method.*/

class Car{
    company
    model
    year

    getDescription(year,company,model){
        this.year = year
        this.company = company
        this.model = model
        return console.log(`This is ${year} ${company} ${model}`);
    }
}

const c = new Car();
c.getDescription(2022,"Skoda","Rapid");