var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://",
    "method": "GET",
    "headers": {
      "cache-control": "no-cache",
      "Postman-Token": "90c07f66-8e1c-4db8-ba9a-2130aa2e45e4"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });