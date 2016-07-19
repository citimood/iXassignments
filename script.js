var INSTA_API_BASE_URL = "https://api.instagram.com/v1";
var app = angular.module('Instamood',[]);
var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];

app.controller('MainCtrl', function($scope, $http) 
{
  // get the access token if it exists
	$scope.hasToken = true;
	var token = window.location;
	var code = window.location.search;
	console.log(code);
  if (!token) {
    $scope.hasToken = false;
  }
 // token = token.split("=")[1];
  var code = (code).split("=")[1];
  console.log(code);

  /* $scope.getInstaPics = function() { */
	  var path = "/users/self/media/recent";
	  var mediaUrl = " https://api.instagram.com/oauth/access_token";//INSTA_API_BASE_URL + path;//
	  $http({
	    method: "JSONP",
	    url: mediaUrl,
	    params: 
		{
	    	callback: "JSON_CALLBACK",
			access_token:"3516238728.9163389.67234d5dad884bea8cd6eb7d46c8d6ce",	
			
			
			client_id:"91633892b9c746aca617c43c03686391",
			client_secret:"9de85d251521430fa510b5c2476e4c86",
			grant_type:"authorization_code",
			redirect_uri:"https://mkhskh003.github.io/iXassignments/",
			code:code, 
			
	    }
	  }).then(function(response) 
	  {
		 console.log(response);
		 $scope.picArray = response.data.data;
		 /* $scope.myArray = response.data.data; */
		 $scope.length= $scope.picArray.length;
		 
		 ///////////////////////////////////////////////////////////////////////
		 $scope.user_has_liked=0;
		 $scope.total_likes=0;
		 for(i in $scope.picArray)
		 {
			$scope.total_likes+=$scope.picArray[i].likes.count;
			if($scope.picArray[i].user_has_liked==true)
			{
				$scope.user_has_liked+=1;
			
			}
		 }
		 /////////////////////////////////////////////////////////////////////////
		 $scope.days_posted_by=[];
		 $scope.user_scores=[];
		 $scope.overal_score=0;
		 $scope.total_caption_length=0;
		 $scope.total_hash_tags=0;
		for(i in $scope.picArray)
		{
			var date = new Date(parseInt($scope.picArray[i].created_time) * 1000);
			$scope.days_posted_by[i]=date.getDay();
			
			//console.log(($scope.picArray[i].caption.text).length);
			$scope.total_caption_length+=($scope.picArray[i].caption.text).length;
			
			//Getting user score
			$scope.getScore($scope.picArray[i].caption.text,i);
			
			if($scope.picArray[i].tags.length >0)
			{
				$scope.total_hash_tags+=$scope.picArray[i].tags.length;
			}
		}
		$scope.most_freq_day=days[most_frequent($scope.days_posted_by)];
		////////////////////////////////////////////////////////////////////////////
		
		
		
		////////////////////////////////////////////////////////////////////////////
		//console.log($scope.most_freq_day); 
      // now analyze the sentiments and do some other analysis
      // on your images 
	  
	 
	  })
	/* }; */
	
	
	 /*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	  $scope.getScore = function(caption,i) 
	  { 
		   $http({
			method: "GET",
			type:"JSONP",
			url: "https://twinword-sentiment-analysis.p.mashape.com/analyze/",
			headers:{"X-Mashape-Key":"HvCMxRtFfImshunD5ZWVmel7Gmsep1lBcOFjsnQecuA8UFW4om"},
			params: 
			{
				text: caption
			}
			  }).then(function(response) 
			  {
					//console.log(response);
					$scope.user_scores[i]=response.data.score;
					 $scope.overal_score+=response.data.score;
			  
			  })
	    };
	  /*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

	var analyzeSentiments = function() 
	{
    // when you call this function, $scope.picArray should have an array of all 
    // your instas. Use the sentiment analysis API to get a score of how positive your 
    // captions are
	}
	
	var most_frequent=function(arr1)
	{
		var mf = 1; //default maximum frequency
		var m = 0;  //counter
		var item;  //to store item with maximum frequency
		for (var i=0; i<arr1.length; i++)    //select element (current element)
		{
				for (var j=i; j<arr1.length; j++)   //loop through next elements in array to compare calculate frequency of current element
				{
						if (arr1[i] == arr1[j])    //see if element occurs again in the array
						{
							m++;   //increment counter if it does
						}
						if (mf<m)   //compare current items frequency with maximum frequency
						{
						  mf=m;      //if m>mf store m in mf for upcoming elements
						  item = arr1[i];   // store the current element.
						}
				}
				m=0;   // make counter 0 for next element.
		}
		return item;
	}

});
