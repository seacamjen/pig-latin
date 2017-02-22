//var letters = new RegExp ()
var pigLatin = function (inputText) {
//var vowels=["a","A", "e", "i", "o", "u", "E", "I", "O", "U"];
//for (var i=0; i<vowels.length; i++)
    //check if userInput begins with vowel, adds "ay"
  if(inputText[0] == "a" || inputText[0] == "e" || inputText[0] == "i" || inputText[0] == "o" || inputText[0] == "u"){
    console.log(true);
    inputText = inputText + "ay";
    return inputText;
  }
    else {
      //split until first vowel , attach to end, add "ay"
      var arr = inputText.split("");
      // inputText = inputText.split("");
      var removed = arr.splice(0,1);
      inputText = arr.push(removed);
      inputText = arr.join('');
      inputText = inputText + "ay";

      return inputText;
    }
  }
 // var pigLatin = function (inputText) {
 //   vowels.forEach(function(vowel){
 //     if(vowel == inputText){
 //      //  $("inputText").append("ay");
 //      return true;
 //     }
 //     else {
 //       }
 //   });
 // };



 //(inputText===(1||2||3||4||5||6||7||8||9||0))


$(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var inputText = $("#userInput").val().toLowerCase();
    //define result from pigLatin function that uses inputText
    var result = pigLatin(inputText);
    $("#output").text(result);
  });
});
