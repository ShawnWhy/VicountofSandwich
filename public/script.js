

$(".topBunInput").on("change", function(event){
    event.preventDefault;
    event.stopPropagation;

    var topBun = $('.topBunInput').val()
    switch(topBun){
        case "white":
            $(".topbun").attr( "class","topbun topbun_form_container_white ");break;
        case "wheat":
            $(".topbun").attr("class","topbun topbun_form_container_wheat");break;
        case "oats":
            $(".topbun").attr("class","topbun topbun_form_container_oats");break }
})
$(".cheeseInput").on("change", function(event){
    event.preventDefault;
    event.stopPropagation;

    var cheese = $('.cheeseInput').val()
    switch(cheese){
        case "blue":
            $(".cheese").attr( "class","cheese cheese_form_container_blue ");break;
        case "cheddar":
            $(".cheese").attr("class","cheese cheese_form_container_cheddar");break;
        case "provolone":
            $(".cheese").attr("class","cheese cheese_form_container_prov");break;
        case "none":
            $(".cheese").attr("class","cheese cheese_form_container_none");break;

             }
})
$(".veggiesInput").on("change", function(event){
    event.preventDefault;
    event.stopPropagation;

    var veggies = $('.veggiesInput').val()
    switch(veggies){
        case "true":
            $(".veggies").attr( "class","veggies veggies_form_container_on");break;
        case "false":
            $(".veggies").attr("class","veggies veggies_form_container_off");break;}
        
})
$(".meatInput").on("change", function(event){
    event.preventDefault;
    event.stopPropagation;

    var cheese = $('.meatInput').val()
    switch(cheese){
        case "chicken":
            $(".meat").attr( "class","meat meat_form_container_chicken ");break;
        case "beef":
            $(".meat").attr("class","meat meat_form_container_beef");break;
        case "turkey":
            $(".meat").attr("class","meat meat_form_container_turkey");break;
        case "tofu":
            $(".meat").attr("class","meat meat_form_container_tofu");break;

             }})

$(".bottomBunInput").on("change", function(event){
    event.preventDefault;
    event.stopPropagation;

    var bottomBun = $('.bottomBunInput').val()
    switch(bottomBun){
        case "white":
            $(".bottombun").attr( "class","bottombun bottombun_form_container_white ");break;
        case "wheat":
            $(".bottombun").attr("class","bottombun bottombun_form_container_wheat");break;
        case "oats":
            $(".bottombun").attr("class","bottombun bottombun_form_container_oats");break }
})
$("#submit_burger").on("click",function(event){
    event.stopPropagation;
    event.preventDefault;
    var burger = {
              Top_bun: $(".topBunInput").val().trim(),
              cheese:$("cheeseInput").val().trim(),
              lettice:$("veggiesInput").val().trim(),
              bottom_bun:$("bottomBunInput").val().trim(),
              name: $("customer").val().trim(),
              eaten:0
            };
        
            $.ajax("/api/burgers", {
              type: "POST",
              data: burger
            }).then(
              function() {
                console.log("created new burger");
                location.reload();
              }
            );
          });
        

        //   var deployBurgers =function(){
             
        //   }


        //   $.ajax("/api/burgers/" + id, {
        //     type: "PUT",
        //     data: updatedMovie
        //   }).then(
        //     function() {
        //       console.log("updated id ", id);
        //       // Reload the page to get the updated list
        //       location.reload();


// <h2>Add a Movie to Watch</h2>
// <form id="addmovie" class="button-size">
// 	<textarea type="text" name="movie"></textarea>
// 	<button type="submit">Save Movie!</button>
// </form>

// <h2>Update a Movie</h2>
// <form id="updatemovie" class="button-size">
//   <input type="text" name="id" placeholder="id">
// 	<textarea type="text" name="movie" placeholder="what do you want to update this movie title to?"></textarea>
// 	<button type="submit">Update Movie!</button>
// </form>

//   $(".delmovie").on("click", function(event) {
//     var id = $(this).data("movieid");

//     // Send the DELETE request.
//     $.ajax("/api/movies/" + id, {
//       type: "DELETE"
//     }).then(
//       function() {
//         console.log("deleted id ", id);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });

//   $("#addBurger").on("click", function(event) {
//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();

//     var burger = {
//       Top_bun: $(".topBun").val().trim()
//     };

//     // Send the POST request.
//     $.ajax("/api/movies", {
//       type: "POST",
//       data: newMovie
//     }).then(
//       function() {
//         console.log("added new movie");
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });

//   $("#updatemovie").on("submit", function(event) {
//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();

//     var id = $("[name=id]").val().trim();

//     var updatedMovie = {
//       movie: $("#updatemovie [name=movie]").val().trim()
//     };

//     // Send the PUT request.

//       }
//     );
//   });
// </script>