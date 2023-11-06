function validateInput(event){
  event.preventDefault();
  //this is used for identifying the inputs and value for the validation
  let FirstName = document.getElementById("FirstName").value;
  console.log(FirstName);
  let LastName = document.getElementById("LastName").value;
  console.log(LastName);
  let zip = document.getElementById("zip").value;
  console.log(zip);
  
  //adds the characters togerther for the length to work
  let firstlast = FirstName + "" + LastName;
  console.log(FirstName);
//looks for the length of the first and last name, alrets the code to invaild or vaild if meets requirments

  if(firstlast.length < 20){
    alert("Not Enough characters. First and last name needs to have at least 15 characters");
    return;
  }// says on console if vaild
  console.log("Valid first and last name");

let parsedZip = parseInt(zip);
console.log(parsedZip);
// no decimals only 5 digits of numbers 
  if(zip.length != 5 || !Number.isInteger(parsedZip) && 99999){
    alert("Invalid zip code. Zip must be a number of 5 digits.");
    return;
  }
 
//when its valid it continues on
  console.log("Zip valid");
  //if everything valid this comment pops up
  console.log("hello if you see this, you passed!")
}
// when the person resizes the window
window.addEventListener("DOMContentLoaded", (event) => {
    const form = document.getElementById("myform");
    if (form) {
        form.addEventListener("submit", validateInput)
    }
})