/* Q07. Create a class called User with properties username and password. Implement a getter method for password
that returns the password with all characters replaced by asterisks. Implement a setter method for password
that checks if the new password is at least 8 characters long and contains at least one number and one
uppercase letter. If the password is valid, set the new password. If not, log an error message.*/

class User{
    username
    #password

    constructor(username,password){
        this.username = username
        this.#password = password
    }

    getPassword(){
        return this.#password.replace(/./g, "*");
        }

    setPassword(newPassword){

        let number = false;
        let uppercase = false;

        for(let i = 0; i < newPassword.length; i++){
            const ch = newPassword.charAt(i);

            if(!isNaN(ch)){
                number = true;
            }else if(ch === ch.toUpperCase()){
                uppercase = true;
            }
        }

        if(newPassword.length >= 8 && number && uppercase){
            this.#password = newPassword;
        }else{
            const message = "Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.";
            console.log(message);
        }
    }
}

const user = new User("sachin","myPassword123");

// console.log(user.password);

console.log(user.getPassword());

// user.setPassword("myPassword");

user.setPassword("myPassword12345");

console.log(user.getPassword());