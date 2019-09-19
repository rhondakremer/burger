// Code here handles what happens when a user submits a new character on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.
$(function() {

// when user clicks add-btn
$("#submit-btn").on("click", function(event) {
    event.preventDefault();
  console.log("yeah click me bitch")
    // make a newCharacter obj
    var newBurger = {
      // name from name input
      name: $("#name").val().trim(),
      // role from role input
      devoured: 0,
      
    };

    // send an AJAX POST-request with jQuery
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger})
      // on success, run this callback
      .then(function(data) {
        // log the data we found
        console.log(data);
        // tell the user we're adding a character with an alert window
        alert("Adding burger...");
      });
  
    // empty each input box by replacing the value with an empty string
    $("#name").val("");
  
  });
})