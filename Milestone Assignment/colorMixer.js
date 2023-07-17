// 3. Color Mixer

// console.log("This Program Name: Color Mixer");

let color1 = "red";
let color2 = "blue";

switch (color1) {
    case "red":
        switch (color2) {
            case "blue":
                console.log("purple");
                break;
            case "yellow":
                console.log("orange");
                break;
            default:
                console.log("Invalid color com#ination");
                break;
        }
        break;
    
    case "blue":
        switch (color2) {
            case "yellow":
                console.log("green");
                break;
            default:
                console.log("Invalid color com#ination");
                break;
        }
        break;

    default:
        console.log("Invalid color com#ination");
        break;
}

