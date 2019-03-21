var state
var name
var zipCode
var selectedGenre
var hiddenWindow = document.getElementById("resultWindow");

var showHidden = function () {
  $("#resultWindow").css('display', "block");
  console.log("show me!");
};

$("field").prop('required', true);

$("#submitBtn").on("click", function () {
  state = $("#state").val();
  name = $("#userName").val();
  zipCode = $("#zipCode").val();
  selectedGenre = $("#movieGenre").val();

  showHidden();

  displayNPS();
  displayWeather();
  displayMovies();
  console.log(state);
  console.log(name);
  console.log(zipCode);
  console.log(selectedGenre);

  $('#resultWindow').each(function () {
    this.reset();
  });

});

function displayWeather() {
  var weatherURL = "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&units=imperial&appid=6061eb64b523b35f60ac0a3b19c0ff2d"
  console.log(weatherURL);

  $.ajax({
    url: weatherURL,
    method: "GET"
  }).then(function (response) {

    var cityName = response.name;
    var mainTemp = response.main.temp;
    var minTemp = response.main.temp_min;
    var maxTemp = response.main.temp_max;
    var humidity = response.main.humidity;
    var iconCode = response.weather[0].icon;
    var iconUrl = "https://openweathermap.org/img/w/" + iconCode + ".png";


    var pOne = $("<p>").html("<strong>City Name: </strong>" + cityName);
    var pTwo = $("<p>").text("Temperature: " + mainTemp);
    var pThree = $("<p>").text("Min Temperature: " + minTemp);
    var pFour = $("<p>").text("Max Temperature: " + maxTemp);
    var pSeven = $("<p>").text("Humidity: " + humidity);
    var pEight = $("<img>").attr("src", iconUrl);
    console.log(iconUrl);

    $("#weatherContainer").append(pOne);
    $("#weatherContainer").append(pTwo);
    $("#weatherContainer").append(pThree)
    $("#weatherContainer").append(pFour);
    $("#weatherContainer").append(pSeven);
    $("#weatherContainer").append(pEight);
  });
};


function displayNPS() {
  var npsURL = "https://developer.nps.gov/api/v1/parks?stateCode=" + state + "&limit=5&fields=images&api_key=hqLbjkfHa8HRopPGMlaD3XhcYiXqcOTV0hIpgjsT"

  console.log(npsURL);

  $.ajax({
    url: npsURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    var results = response.data

    for (var i = 0; i < results.length; i++) {

      var npsDiv = $("<div>");
      var fullName = results[i].fullName;
      var state = results[i].states;
      var discription = results[i].description;
      var parkWeather = results[i].weatherInfo;
      console.log(results[i].images[0].url);
      var parkImages = results[i].images[0].url;

      console.log(fullName);
      console.log(state);
      console.log(discription);
      console.log(parkWeather);

      var pOne = $("<p>").html("<h4><strong>Park Name: </strong>" + fullName + ", " + state + "</h4>");
      var pTwo = $("<p>").html("<h4><strong>Park Discription: </strong></h4>" + discription);
      var pThree = $("<p>").html("<h4><strong>Weather Condition: </strong></h4>" + parkWeather);
      var pFour = $("<img>").attr("src", parkImages);
      var space = $("<br>")
      var space = $("<br>")
      npsDiv.append(pOne);
      npsDiv.append(pFour);
      npsDiv.append(pTwo);
      npsDiv.append(pThree);
      npsDiv.append(space);


      $("#npsContainer").prepend(npsDiv);
    }
  });
};

function displayMovies() {
  var genresComedy = ['Superbad', 'Big_Lebowski', 'This_is_Spinal_Tap', 'Zoolander', 'Caddyshack'];
  var genresDrama = ['Forrest_Gump', 'A_Beautiful_Mind', 'Lady_Bird', "What's_Eating_Gilbert_Grape", 'Slumdog_Millionaire'];
  var genresRomCom = ['When_Harry_Met Sally', '10_Things_I_Hate_About_You', 'The_Wedding_Singer', 'Forgetting_Sarah_Marshall', 'Reality_Bites'];
  var genresSyFy = ['Donnie_Darko', 'Dawn_of_the_Planet_of_the_Apes', 'Ex_Machina', 'Edge_of_Tomorrow'];

  console.log(selectedGenre);
  if (selectedGenre === "genresComedy") {
    var movie = genresComedy[Math.floor(Math.random() * genresComedy.length)];
    console.log(movie);
  } else if (selectedGenre === "genresDrama") {
    var movie = genresDrama[Math.floor(Math.random() * genresDrama.length)];
    console.log(movie);
  } else if (selectedGenre === "genresRomCom") {
    var movie = genresRomCom[Math.floor(Math.random() * genresRomCom.length)];
    console.log(movie);
  } else if (selectedGenre === "genresSyFy") {
    var movie = genresSyFy[Math.floor(Math.random() * genresSyFy.length)];
    console.log(movie);
  };

  var omdbURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=a86b8a6d";
  console.log(omdbURL);

  $.ajax({
    url: omdbURL,
    method: "GET"
  }).then(function (response) {

    var movieDiv = $("<div class='movie'>");
    var rating = response.Rated;
    var pOne = $("<p>").text("Rating: " + rating);
    movieDiv.append(pOne);

    var released = response.Released;

    var pTwo = $("<p>").text("Released: " + released);
    movieDiv.append(pTwo);
    var plot = response.Plot;
    var pThree = $("<p>").text("Plot: " + plot);
    movieDiv.append(pThree);
    var imgURL = response.Poster;
    var image = $("<img>").attr("src", imgURL);
    movieDiv.append(image);
    $("#movieContainer").prepend(movieDiv);
  });

  $("#resetBtn").on("click", function () {
    document.location.reload(true);
  });
};