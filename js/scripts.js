
//backend


//frontend

$(document).ready(function() {
  $("#jumbler").submit(function(event) {
    $("#magic").hide();
    var wordsInput = $("#words").val();


    //put wordsInput into an array
    var letters = wordsInput.split('');

    //This for loop iterates through the variable letters and uses logic to pick out the vowels and replace them with dashes
    for(var i = 0; i <= letters.length; i++) {
      if(letters[i] === 'a' || letters[i] === 'e' || letters[i] === 'i' || letters[i] === 'o' || letters[i] === 'u' ) {
         letters[i] = '-';
      }
    }

    //join char/letters from array back into string
    var backResult = letters.join('');
    //This will show the id jumble
    $("#jumble").show();
    //This will display what the user submitted
    $("#jumble").text(backResult);



    console.log(backResult);


    event.preventDefault();
  });
});
