// URL validation.
/* Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,
followed by one or more letters, digits, or special characters, followed by a dot.
Print a message indicating if the input matches the conditions or not. */

const URL = "https://learn.pwskills.com/lesson/Creating-server-using-in-node.js/64902d726977cc3882e0b603/course/Full-Stack-web-development/63a2ecf58899439c8d7ebdc6";

function isValidURL(str) {
    if(/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(str)) {
        console.log("The above URL is a valid URL.");
     } else {
        console.log("Please write the Valid URL");
     }
 }
   
 isValidURL(URL);