// 5. Vowel counter

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

