$(function() {
    $(".devour").on("click", function(event) {
        var id = $(this).data("id");
        var consumed = $(this).data("devoured");

        var eaten = {
            devoured: consumed
        };

        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: eaten
        }).then(function() {
            console.log("Changed consumption to " + consumed);
            location.reload();
        });
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: 0
        };
        
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("New burger added.");
            location.reload();
        });
    });
});