//url for the weather API call
var weatherBaseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
var weatherQueryParams = '&units=imperial&APPID=9af9987d0f66079a5baa5b00f7f58162';

//function that will generate an HTML string 
//And then add that string to the page
function createHTML(cityName, tempValue){
	var bgClass;
	
	var htmlString =	'<div class="setBorder ' + bgClass + '">' +
											'<div class="weatherCity">' + cityName + '</div>' +
											'<div class="weatherData">' + tempValue + '</div>' +
										'</div>';
	$('#weatherResults').prepend(htmlString);
}

//function that will execute the Weather AJAX call
var searchWeather = function(city){

	var searchURL = weatherBaseURL + city + weatherQueryParams;
	$.ajax({
		url: searchURL,
		type: 'GET',
		dataType: 'json',
		error: function(data){
			console.log("We got problems");
			console.log(data.status);
			alert("Oh no. Something went wrong...");
		},
		success: function(data){
			console.log("WooHoo!");
			//console to see the returned data
			console.log(data);
			//make sure the success response is ok
			if (data.cod === '404'){
				alert("Oh no. Something went wrong. Try another city");
				//adding a return will end the success function
				return;
			}

			$("#query").val('');

			var theCity = data.name || '????';
			var theTemp = Math.round(data.main.temp) || 70;

			//function that will create an HTML string & add it to the page
			createHTML(theCity, theTemp);
		}
	});
};

//Code to be executed once the page has fully loaded
$(document).ready(function(){
	console.log("LOADED!!!!");

	//jQuery to assign a (callback) function to occur when the 'search' button is clicked
	$("#search").on('click', function(){
		console.log("Clicked search");
		//jQuery to get the value of the 'query' input box
		var newSearchTerm = $("#query").val();
		console.log(newSearchTerm);
		//Execute the Weather API call with the 'newSearchTerm' string as its argument 
		searchWeather(newSearchTerm);
		$("#search").blur();
	});

	//What if someone just wants to click "ENTER"???
	//Use jQuery to assign a (callback) function to occur when enter is pressed 
	//This will ONLY work when the '#query' input box is active
	$('#query').on('keypress', function(e){
		//If enter key is pressed
		if (e.which == 13){
			//Use jQuery's trigger() function to execute a click event on the '#search' element
			$("#search").trigger('click');
		}
	});
});