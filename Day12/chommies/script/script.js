var app = angular.module('iXChommiesApp', ['ngRoute']); 

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'FeedCtrl',
		templateUrl: 'template/Feed.html',
	})
	/* $routeProvider.when('/me/:meId', { */
	$routeProvider.when('/me/', {
		controller: 'MeCtrl',
		templateUrl: 'template/me.html',
	})
});


app.controller('FeedCtrl', function($scope, $http,$routeParams) 
{
	
		 $scope.nagative_message=true;
		 $scope.success_message=true; 
		$scope.validate=function(validate_message,selected_Bru)
		{
			
			$http({
				url: "http://ixchommies.herokuapp.com/props",
				method: "POST",
				params: {
					
					token:"4d4deb59e7e77d49524b003077087f7e"
				},
				data:
				{
					'for':selected_Bru.id,
					'props':validate_message
				},
				
			}).then(function(response) 
			{
				$scope.nagative_message=false;
				$scope.success_message=true;
				//console.log(response);
				console.log("sent");
				
			})
			.catch(function(response)
			{
				$scope.nagative_message=true;
				$scope.success_message=false;
				console.log(response);
				console.log(" not sent");
				
			})
		};
		
		

		$http({
			url: "http://ixchommies.herokuapp.com/props/",
			method: "GET",
			params: 
			{
				token:"4d4deb59e7e77d49524b003077087f7e"
			}
		}).then(function(response) 
		{
			//console.log("props");
			//console.log(response);
			$scope.props = response.data;
			
			
			$scope.time_set=[];
			for(i in $scope.props)
			{
				var date = new Date(parseInt($scope.props[i].created_at) );
				
				//console.log(date.toGMTString()+" "+date.toLocaleTimeString());
				//console.log(date.getHours()+1+":"+date.getMinutes());
				
				var time_array=(date.toUTCString()+" "+date.toLocaleTimeString()).split(" ");
				$scope.time_set[i]=(time_array[2]+""+(date.getHours()+1)+":"+date.getMinutes()+""+time_array[7]);
				
			}
			
			
			
		})

	
	
		$scope.refresh=function()
		{
			$http({
				url: "http://ixchommies.herokuapp.com/props/",
				method: "GET",
				params: {
					/* text:"good news everyday", */
					//token:"67d65fbe73ef5ad07cb0b388ea23bd7c",
					token:"4d4deb59e7e77d49524b003077087f7e"
				}
			}).then(function(response) 
			{
				//console.log("props");
				//console.log(response);
				$scope.props = response.data;
				
				$scope.time_set=[];
				for(i in $scope.props)
				{
					var date = new Date(parseInt($scope.props[i].created_at));
					
					var time_array=(date.toUTCString()+" "+date.toLocaleTimeString()).split(" ");
					$scope.time_set[i]=(time_array[2]+""+(date.getHours()+1)+":"+date.getMinutes()+""+time_array[7]);
					
				}	
					
			})
		};
	
	
		$http({
			url: "http://ixchommies.herokuapp.com/brus/",
			method: "GET",
			params: {
				/* text:"good news everyday", */
				token:"4d4deb59e7e77d49524b003077087f7e",
			}
		}).then(function(response) 
		{
			//console.log(response);
			$scope.brus = response.data;
		})
		
		
		
});


app.controller('MeCtrl', function($scope, $http,$routeParams) 
{
	$http({
			url: "http://ixchommies.herokuapp.com/props/me",
			method: "GET",
			params: {
				/* text:"good news everyday", */
				token:"4d4deb59e7e77d49524b003077087f7e",
			}
			
		}).then(function(response) 
		{
			//console.log("This should be about me");
			//console.log(response);
			$scope.me = response.data;
		})
});