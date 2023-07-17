// 3. Color Mixer

// console.log("This Program Name: Color Mixer");

let color1 = "red";
let color2 = "yellow";

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
            case "red":
                console.log("purple");
                break;
            default:
                console.log("Invalid color com#ination");
                break;
        }
        break;
    case "yellow":
        switch (color2) {
            case "red":
                console.log("orange");
                break;
            case "blue":
                console.log("green");
                break;
            default:
                break;
        }
        break;
    default:
        console.log("Invalid color com#ination");
        break;
}

