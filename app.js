var state
var name
var zipCode

$("#submitBtn").on("click", function () {
  state = $("#state").val();
  name = $("#userName").val();
  zipCode = $("#zipCode").val();

  displayNPS();
  displayWeather();
  console.log(state);
  console.log(name);
  console.log(zipCode);
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
    var weatherIcon = response.weather[0].icon;
    
    var pOne = $("<p>").html("<strong>City Name: </strong>" + cityName);
    var pTwo = $("<p>").text("Temperature: " + mainTemp);
    var pThree = $("<p>").text("Min Temperature: " + minTemp);
    var pFour = $("<p>").text("Max Temperature: " + maxTemp);
    var pSeven = $("<p>").text("Humidity: "+ humidity);
    var pEight = $("<img>").attr("src", weatherIcon);

    $("#weatherContainer").append(pOne);
    $("#weatherContainer").append(pTwo);
    $("#weatherContainer").append(pThree)
    $("#weatherContainer").append(pFour);
    $("#weatherContainer").append(pFive);
    $("#weatherContainer").append(pSix);
    $("#weatherContainer").append(pSeven);
    $("#weatherContainer").append(pEight);
  });
}


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
        npsDiv.append(pOne);
        npsDiv.append(pFour);
        npsDiv.append(pTwo);
        npsDiv.append(pThree);
        npsDiv.append(space);
        

        $("#npsContainer").prepend(npsDiv);
      }
    });
  }