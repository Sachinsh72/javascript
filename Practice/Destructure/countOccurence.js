/* Q1. Count the occurrences.
You are building a word count generator that will take a large string of text as input and output the words and
the number of times they are present in the string. Your task is to write a function that can count the
occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can
assume that the string only contains alphabetic characters and spaces. */

function wordOcurrence(str){

  const words = str.split(" ");
  // console.log(words);

  const map = new Map(); //empty object
  // console.log(map);

  words.forEach(el => {
    if(map.has(el)){
      map.set(el,map.get(el)+1)
    }else{
      map.set(el,1)
    }
  });

  return map;
}

  const str = "My name is sachin sharma. My friend name is sachin yadav";
  console.log(wordOcurrence(str));