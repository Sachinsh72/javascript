//LinkedIn Profile URL Validator.
/* As a developer, you want to create a program that validates LinkedIn profile URLs to ensure that they are
formatted correctly and contain only valid characters. Valid LinkedIn profile URLs should start with https://
www.linkedin.com/in/ followed by a combination of one or more letters, digits, underscores, or hyphens, and
end with a letter or digit. The length of the profile ID should be between 5 and 30 characters. */






const LinkedlnURL = "https://www.linkedin.com/in/sachin-sharma72";
function isValidURL(str) {
    if(/(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)/g.test(str)) {
        console.log("The above Linkedln URL is a valid URL.");
    } else {
        console.log("Please write Valid Linkedln URL");
    }
}
   
 isValidURL(LinkedlnURL);
