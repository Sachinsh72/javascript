// 6. Vowel counter

function getCount(name) {
    const vowels = ["a","e","i","o","u"];
    let count = 0;
    for (const i of name) {
        if(vowels.includes(i)){
            count++
        }
    }
    return count;
}

const name = "sachin";
console.log(getCount(name));


// 7. Remove duplicates

console.log("Program of removing duplicate form the cart");
var itemCart = ["bag","scale","compass", "pencil","scale","pen","pencil"];

   function removeDuplicates(arr) {
      let uniqueArr = [...new Set(arr)];
      return uniqueArr;
   }
   console.log(removeDuplicates(itemCart));
