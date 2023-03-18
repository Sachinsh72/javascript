// Destcruting, Spread and Rest 

const oneArray = [1,2,3,4];
const twoArray = [5,6,7,8];

// make one array by combining 1 & 2 
const threeArray = oneArray.concat(twoArray);  //one way
console.log(threeArray);

const thirdArray =[oneArray, twoArray]; //second way
console.log(thirdArray);

const spreadOperator =[...oneArray, ...twoArray]; //by spread operator
console.log(spreadOperator);



