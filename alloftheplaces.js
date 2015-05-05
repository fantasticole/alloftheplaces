// Build tool to take a list of events and calculate the best route to get among them.

// Then add the factor of start and end times.

var places = {
	"locations": [
	{
		"name": "Hacker School",
		"address": "455 Broadway",
		"city": "New York",
		"state": "NY"
	},
	{
		"name": "Home",
		"address": "150 Ocean Avenue",
		"city": "Brooklyn",
		"state": "NY"
	}]
};

var list = document.getElementById('list');
var loc = document.getElementById('places');
// var googleMap = document.getElementById('map');

// console.log(document.getElementById('list'));

list.addEventListener('click', function(){
	loc.innerText = JSON.stringify(places);
});

