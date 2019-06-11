
//backend


//frontend

$(document).ready(function() {
  $("#jumbler").submit(function(event) {
    var wordsInput = $("#words").val();

    //put wordsInput into an array
    var letters = wordsInput.split('');


    for(var i = 0; i <= letters.length; i++) {
      if(letters[i] === 'a' || letters[i] === 'e' ) {
         letters[i] = '-';
      }
    }

    //join char/letters from array back into string
    var backResult = letters.join('');




    console.log(backResult);


    event.preventDefault();
  });
});
