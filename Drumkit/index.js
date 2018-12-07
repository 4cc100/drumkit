var drumButtons = document.querySelectorAll(".drum");

// for(var i = 0; i < drumButtons.length; i++){
  document.addEventListener("keypress", function (element){

    var charCode = element.charCode;

    switch (charCode) {
      case 119:
          tom1.play();
        break;
      case 97:
          tom2.play();
        break;
      case 115:
          tom3.play();
        break;
      case 100:
          tom4.play();
        break;
      case 106:
          snare.play();
        break;
      case 107:
          crash.play();
        break;
      case 108:
          kick.play();
        break;
      default: console.log(`${element.code} was pressed`);
    }

  });
// }


var tom1 = new Audio ("sounds/tom-1.mp3");
var tom2 = new Audio ("sounds/tom-2.mp3");
var tom3 = new Audio ("sounds/tom-3.mp3");
var tom4 = new Audio ("sounds/tom-4.mp3");
var snare = new Audio ("sounds/snare.mp3");
var crash = new Audio ("sounds/crash.mp3");
var kick = new Audio ("sounds/kick-bass.mp3");
//
//

// document.addEventListener("keypress", function(event) {
//   console.log(event);
// });




      // Zsolti verziója
// for(var drumButton of drumButtons){
//   drumButton.addEventListener("click", handleClick);
// }
// function handleClick(){
//   alert("i got clicked");
// }

        // Angela verziója
// var numberOfDrumButtons = document.querySelectorAll(".drum").length;
//
// for(var i = 0; i < numberOfDrumButtons; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//     alert("i've got clicked!");
//   });
// }
