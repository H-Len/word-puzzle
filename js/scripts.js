$(document).ready(function() {
  $("#jumbler").submit(function(event) {
    var wordsInput = $("#words").val();
    console.log(wordsInput);
    event.preventDefault();
  });
});
