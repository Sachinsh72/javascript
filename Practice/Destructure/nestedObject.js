/* Q6. Nested Objects.
Write a function that takes an object representing a person as input, and extracts the name and street
properties from a nested object using object destructuring. The function should return an object with these two
properties. A sample object person is given below */

//given sample
const person = {
    name: "Mithun",
    age: 21,
    address: {
      street: "B8, Block B, Industrial Area.",
      city: "Sector 62, Noida",
      state: "Uttar Pradesh",
    },
};
  
//function to extract properties name and street from the sample
function extractProperties(obj) {
    const { name, address: { street } } = obj;
    return { name, street };
}

//function call
console.log(extractProperties(person));