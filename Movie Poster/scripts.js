$(document).ready(function(){

   $('#term').focus(function(){
      var full = $("#poster").has("img").length ? true : false;
      if(full == false){
         $('#poster').empty();
      }
   });

   var getPoster = function(){

        var film = $('#term').val();

         if(film == ''){

            $('#poster').html("<h2 class='loading'>Ha! We haven't forgotten to validate the form! Please enter something.</h2>");

         } else {

            $('#poster').html("<h2 class='loading'>Your poster is on its way!</h2>");

            $.getJSON("https://api.themoviedb.org/3/search/movie?api_key=ef44c6a53e883f544d32381e66a13327&query=" + film, function(json) {

                console.log('json: ', json)

               if (json.results.length){
                     $('#poster').html('<h2 class="loading">Well, found this </h2>');

                     json.results.forEach(function (item){

                         $('#poster').append($('<img class="poster" src="https://image.tmdb.org/t/p/w300_and_h450_bestv2' + item.poster_path + '"/>'));
                     })

                  } else {
                     $.getJSON("https://api.themoviedb.org/3/movie/76341?api_key=ef44c6a53e883f544d32381e66a13327/goonies?callback=?", function(json) {
                        console.log(json);
                        $('#poster').html('<h2 class="loading">We\'re afraid nothing was found for that search. Perhaps you were looking for The Goonies?</h2><img id="thePoster" src=' + json[0].posters[0].image.url + ' />');
                     });
                  }
             });

          }

        return false;
   }

   $('#search').click(getPoster);
   $('#term').keyup(function(event){
       if(event.keyCode == 13){
           getPoster();
       }
   });

});