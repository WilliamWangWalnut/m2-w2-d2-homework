/* Randome Codes */

//NOTE: submit button is initially disabled upon loading of this page - see <body> in html

var code = " "; //initialize to null value
var getCode = " "; //to store entered code
var btnvalue; //for button boolean value
var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";


//Function to generate combination of characters
function generateCode() {
    //Create variables to store genearted codes and the type of characters we want to show as codes
    
    //Generate character mutiple times using a loop
    for (var i=1; i<=8; i++) {
        var char = Math.random()* str.length; //random select a character from the variable and then store in a new variable
        code +=str.charAt(char) //accumulate the generated character into a string of 8 characters
    }
    return code; //return the final accumulated string when loop ends
}

//Get HTML element to display
document.getElementById("codes").innerHTML = generateCode();

//Disable Button
function disableButton(btnvalue) { //determine when to able or disable button
    document.getElementById("submit").disabled = btnvalue;  //able/disable button
    if (btnvalue == true) {
        document.getElementById("submit").style.backgroundColor = "rgba(73,119,209,0.2)";
        document.getElementById("submit").style.color = "rgba(255,255,255,.5)";
    } else {
        document.getElementById("submit").style.backgroundColor = "rgba(73,119,209,1)";
        document.getElementById("submit").style.color = "rgba(255,255,255,1)";
    }
}

//Listen to user input code
var codebox = document.getElementById("codeentered");
codebox.addEventListener("input", evaluateCode);

//run function if detected user had entered a character in textbox
function evaluateCode() {
    getCode = document.getElementById("codeentered").value; 
    var charset1 = getCode.trim();
    var charset2 = code.trim();
    //test if code entered matches the number of generated characters
    if (charset1.length == charset2.length && charset1 == charset2) {
        disableButton(false);
    }
}

//Activate function
disableButton();