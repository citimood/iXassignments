var app=angular.module('groceryListApp',[]);

app.controller("GroceryListCtrl",function($scope)
{
	$scope.grocery_List = [];
	$scope.add_item=function()
	{
		/* if($scope.grocery_List.indexOf($scope.item_name)!==-1)
		{
			console.log("duplicate");
		}
		 */
		 $scope.duplicate=0;
		for(var i in $scope.grocery_List)
		{
			if($scope.grocery_List[i].item_Name==$scope.item_name)
			{
				$scope.grocery_List[i].item_Quantity+=parseInt($scope.item_quantity);
				$scope.duplicate++;
				/* console.log("yes"); */
			}
		}
		
		if($scope.duplicate==0)
		{
			var newItem=
			{
				item_Name:$scope.item_name,
				item_Quantity:parseInt($scope.item_quantity)
			};
		
			$scope.grocery_List.push(newItem);
		}
		$scope.item_name="";
		$scope.item_quantity="";
		
	};
	
	$scope.decreaseItemCount=function(item)
	{
		if (item.item_Quantity > 0) 
		{
		 item.item_Quantity--;
		}
		 /* console.log(item.item_Quantity); */
	}
	
	$scope.increaseItemCount=function(item)
	{
		 item.item_Quantity++;
		 /* console.log(item.item_Quantity); */
	}
	
	
	
});