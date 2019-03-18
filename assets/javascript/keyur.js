//upon submit button hit we will have to run following function
// $("#submitBtn").on("click", function(event) {
//     event.preventDefault();


//     displayWeather();
//   });


// Weather api
//function displayWeather() {
  //getting location entered from user end and making variable
  //var location = $("#location-input").val().trim();

  var APIKey = "166a433c57516f51dfab1f7edaed8413";
  var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=cleveland,Burundi&units=imperial&appid="+APIKey;

console.log(weatherURL);

  $.ajax({
    url: weatherURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    var results = response.data;
  });
//};


// yelp api

// var yelpURL = "https://api.yelp.com/v3/businesses/search?location=706+Mission+St,+San+Francisco,+CA,+US&term=burrito&api_key=NySI3D4_gVwJy_xooOCbMQLl392e2KlZanz4-4ujdKt-FBmmtbef7aOtusg6MDpvO5foL4JtbLv9MmgGq6jYhJPSLmb4EUxQVHL6kyoULiR3PIE37lSGy-tkONCKXHYx"
// console.log(yelpURL);

// $.ajax({
//   url: yelpURL,
//   method: "GET",
//   dataType: "jsonp"
// }).then(function (yelpResponse) {
//   console.log(yelpResponse);

// });

// NPS api

var npsURL = "https://developer.nps.gov/api/v1/parks?stateCode=OH&limit=5&api_key=hqLbjkfHa8HRopPGMlaD3XhcYiXqcOTV0hIpgjsT"

console.log(npsURL);

$.ajax({
  url: npsURL,
  method: "GET"
}).then(function (npsResponse) {
  console.log(npsResponse);

});


var genresComedy = ['Superbad', 'Big Lebowski', 'This is Spinal Tap', 'Zoolander', 'Caddyshack'];
var genresDrama = ['Forrest Gump', 'A Beautiful Mind', 'Lady Bird', "What's Eating Gilbert Grape", 'Slumdog Millionaire'];
var genresRomCom = ['When Harry Met Sally', '10 Things I Hate About You', 'The Wedding Singer', 'Forgetting Sarah Marshall', 'Reality Bites'];
var genresSyFy = ['Donnie Darko', 'Dawn of the Planet of the Apes', 'Ex Machina', 'Edge of Tomorrow'];
var movies = [genresSyFy, genresRomCom, genresDrama, genresComedy];

var omdbURL = "https://www.omdbapi.com/?t=" + movies + "&y=&plot=short&apikey=a86b8a6d";


$(document).ready()
$.ajax({
    url: omdbURL,
    method: "get"
  }).then(function(omdbResponse){
    console.log(omdbResponse)
    
    for (var i=0; i<movies.length; i++) {
      var x = movies[i];
      var movieData = "<option value=" + x.movies + "</option>";
      $(movieData).appendTo('#movieChoices');
    }
  });
  console.log("should show list of movies: " + movieData); 


  