var app=angular.module("nytimesApp",[]);
var NY_TIMES_KEY="7aefa7ae126b4492b554e69c38b86b64";

app.controller('MainCtrl',function($scope,$http)
{
	
	$scope.filter_reponse=function(term)
	{
		$http
		({
			url:'https://api.nytimes.com/svc/search/v2/articlesearch.json',
			method:'GET',
			params:
			{
				'api-key':NY_TIMES_KEY,
				'q':term
			}
		}).then(function(output)
			{
				console.log(output);
				$scope.articles=output.data.response.docs;
			});

	};
	
});