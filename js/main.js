

$(document).ready(function() {

  // stop submission from refreshing the page
  $('#submit-btn').click(function() {
    event.preventDefault();

    var city = $('#city-type').val().toLowerCase(); //allow submission using lower and upper cases
    $('#city-type').val('');
   

// when "New York" or "New York City" or "NYC" is  submitted change the background of the page to nyc.jpg

if (city == 'new york' || city == 'new york city' || city == 'nyc') {
	$('body').attr('class', 'nyc');
}

// when "San Francisco" or "SF" or "Bay Area"is submitted change the background of the page to sf.jpg

else if (city == 'san francisco' || city == 'bay area' || city == 'sf') {
	$('body').attr('class', 'sf');
}

// when "Los Angeles" or "LA" or "LAX"is submitted change the background of the page to la.jpg

else if (city == 'los angeles' || city == 'la' || city == 'lax') {
	$('body').attr('class', 'la');
}

// when "Austin" or "ATX" is submitted change the background of the page to austin.jpg

else if (city == 'austin' || city == 'atx') {
	$('body').attr('class', 'austin');
}

// when "Sydney" or "SYD"is submitted change the background of the page to sydney.jpg

else if (city == 'sydney' || city == 'syd') {
	$('body').attr('class', 'sydney');
}

// if undefined variable is submitted return to the default background 

else {

	$('body').attr('class', 'default')	
}
    
  });
});
