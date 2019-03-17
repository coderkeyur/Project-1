
var genresComedy = ['Superbad', 'Big Lebowski', 'This is Spinal Tap', 'Zoolander', 'Caddyshack'];
var genresDrama = ['Forrest Gump', 'A Beautiful Mind', 'Lady Bird', "What's Eating Gilbert Grape", 'Slumdog Millionaire'];
var genresRomCom = ['When Harry Met Sally', '10 Things I Hate About You', 'The Wedding Singer', 'Forgetting Sarah Marshall', 'Reality Bites'];
var genresSyFy = ['Donnie Darko', 'Dawn of the Planet of the Apes', 'Ex Machina', 'Edge of Tomorrow'];
var movies = [genresSyFy, genresRomCom, genresDrama, genresComedy];

var queryURL = "https://www.omdbapi.com/?t=" + movies + "&y=&plot=short&apikey=a86b8a6d";



$(document).ready()
$.ajax({
    url: queryURL,
    method: "get"
}).then(function(response){
    console.log(response)
debugger;

    for (var x=0; x<movies.length; x++) {
        var i = movies[x];
        var movieData = "<option value=" + i.movies + "</option>";
        $(movieData).appendTo('#movieChoices');
    }
    console.log("should show list of movies: " + movieData); 
});


  