$(function(){
    $(".devouredBtn").on('click', function(event) {
        event.preventDefault();
        let id = $(this).attr("data-id");

        let newBurgerState ={
            devoured: true
        };

        //Send the PUT request.
        $.ajax("/burgers/update/" + id,{
            type: "PUT",
            data: newBurgerState
        }).then(
            function(data) {
                console.log(data);
                location.reload();
            }
        );
    });

  $(".create-update-form").on('submit', function(event){
    event.preventDefault();

    let newBurger = {
        burger_name: $("#bu").val().trim(),
        devoured: false
    };

    $.ajax("/burgers/create", {
        type: "POST",
        data: newBurger
    }).then(
        function(){
            console.log('created new burger');
            location.reload();
        }
    );
  });
    
  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burger/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});