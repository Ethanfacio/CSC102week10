
//adding the start and stop button making it pressable 
function addButtons() {
    console.log("Adding Buttons")
/*getting the start to have a button instead of an input 
getting refrence for the start*/
    let inputElementStart = document.createElement("input");
    inputElementStart.setAttribute("type","button");
    inputElementStart.setAttribute("Value", "Start");
    inputElementStart.setAttribute("id","startButton");
    inputElementStart.setAttribute("onclick","startButton()");
/*Getting the stop to have a button instead of an input
getting the refrence for the stop maiking it work */
    let inputElementStop = document.createElement("input");
    inputElementStop.setAttribute("type","button");
    inputElementStop.setAttribute("Value", "Stop");
    inputElementStop.setAttribute("id","stopButton");
    inputElementStop.setAttribute("onclick","stopButton()");
    inputElementStop.setAttribute("disabled","true");

    let parent = document.getElementById("memeParagraph");
    parent.appendChild(inputElementStart);
    parent.appendChild(inputElementStop);
}
/* a function that makes the start button when pressed move the image 
on the index page and disabled the start button and makng the stop button
work for press */
function startButton(){
    console.log("Pressed Start");
 let inputElementStart = document.getElementById("startButton");
 inputElementStart.setAttribute("disabled","true");

 let inputElementStop = document.getElementById("stopButton");
 inputElementStop.removeAttribute("disabled");

 let memeImage = document.getElementById("memeImage");
 memeImage.style.animationDuration = "3s";
}
/* a function that makes the stop button when pressed stop the image 
on the index page and disabled the stop button and making the start button
work for press */
function stopButton(){
    console.log("Pressed Stop")
 let inputElementStart = document.getElementById("startButton");
 inputElementStart.removeAttribute("disabled");

 let inputElementStop = document.getElementById("stopButton");
 inputElementStop.setAttribute("disabled","true");

 let memeImage = document.getElementById("memeImage");
 memeImage.style.animationDuration = "0s";
}


