var app=angular.module('LightboxApp',[]);
var shadow = document.querySelectorAll(".lightbox")[0]; 

shadow.onclick = function()
{
	var div=document.getElementById("lightbox");
	div.classList.remove('isVisible');
}

app.controller("LightboxCtrl",function($scope)
{

	$scope.changeColor=function()
	{
		var div=document.getElementById("color-div");
		div.style.color='red';
	}
	
	$scope.toggleImage=function() 
	{
	
		var div=document.getElementById("lightbox");
		div.classList.add('isVisible');

	}

	
	
	$scope.getFormValues=function() 
	{
		/* var first_name=document.getElementById("first");
		var last_name=document.getElementById("last"); */
		
		console.log($scope.first_name+" "+$scope.last_name);
	}
});