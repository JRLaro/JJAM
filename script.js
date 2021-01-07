// drink API
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://the-cocktail-db.p.rapidapi.com/filter.php?i=Gin",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "6eeca3cb10mshb5576aa4173f1ccp188733jsn2d1f211f3f82",
		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com"
	}
};
$.ajax(settings).done(function (response) {
	console.log(response);
});