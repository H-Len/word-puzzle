
//backend


//frontend

$(document).ready(function() {
  $("#jumbler").submit(function(event) {
    var wordsInput = $("#words").val();
    var letters = wordsInput.split('');

    //put wordsInput into an array

    for(var i = 0; i <= letters.length; i++) {
      if(letters[i] === 'a' || letters[i] === 'e' ) {
         letters[i] = '-';
      }
    }

    var backResult = letters.join('');




    console.log(backResult);

    // console.log(wordsInput);

    event.preventDefault();
  });
});
