$(function() {

$(".devour").on("click", function(event) {
    event.preventDefault();
    alert("eat my bitch")
    var id = $(this).data("id");
    var devouredState = {
        devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
    }).then(function() {
        alert("Burger devoured");
        location.reload();
    });
});
});