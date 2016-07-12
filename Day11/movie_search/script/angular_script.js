
var app = angular.module('movieSearchApp', ['ngRoute']); 

var movie_title="";

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'MainCtrl',
		templateUrl: 'templates/home.html',
	})
	$routeProvider.when('/movie/:movieId', {
		controller: 'MovieCtrl',
		templateUrl: 'templates/single_movie.html',
	})
});


app.controller('MainCtrl', function($scope, $http,$routeParams) {

	$scope.movie_search=function(movie_searched)
	{
		$http({
			url: "http://www.omdbapi.com/?",
			method: "GET",
			params: {
				s: movie_searched
			}
		}).then(function(response) 
		{
			//console.log(response);
			$scope.moviesArray = response.data.Search;
		})
	};
});

app.controller('MovieCtrl', function($scope, $http,$routeParams) 
{

		$http({
			url: "http://www.omdbapi.com/?",
			method: "GET",
			params: {
				i:$routeParams.movieId
			}
			
		}).then(function(response) 
			{
				console.log(response);
				$scope.movieArray = response.data;
				movie_title=response.data.Title;
				 
				$http({
					url: "http://api.giphy.com/v1/gifs/search?",
					method: "GET",
					params: {
						q:response.data.Title,
						api_key:"dc6zaTOxFJmzC"
					}
				}).then(function(response) 
					{
						//console.log("gif");
						console.log(response);
						$scope.movieGif = response.data.data;
						//console.log(movieGif);
					})
		})
});

