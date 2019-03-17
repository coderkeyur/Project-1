
var genresComedy = ['Superbad', 'Big Lebowski', 'This is Spinal Tap', 'Zoolander', 'Caddyshack'];
var genresDrama = ['Forrest Gump', 'A Beautiful Mind', 'Lady Bird', "What's Eating Gilbert Grape", 'Slumdog Millionaire'];
var genresRomCom = ['When Harry Met Sally', '10 Things I Hate About You', 'The Wedding Singer', 'Forgetting Sarah Marshall', 'Reality Bites'];
var genresSyFy = ['Donnie Darko', 'Dawn of the Planet of the Apes', 'Ex Machina', 'Edge of Tomorrow'];
var movie = [];

var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=a86b8a6d";

for (var i = 0; i < movie.lenghth; i++){
    var movie = genres.categories[i];
}

$.ajax({
    url: queryURL,
    method: "get"
}).then(function(response){
console.log(response)
});


  