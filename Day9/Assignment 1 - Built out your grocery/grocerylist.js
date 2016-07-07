var app=angular.module('groceryListApp',[]);

app.controller("GroceryListCtrl",function($scope)
{
	$scope.grocery_List = [];
	$scope.add_item=function()
	{
	
		 $scope.duplicate=0;
		for(var i in $scope.grocery_List)
		{
			if($scope.grocery_List[i].item_Name.toUpperCase()==$scope.item_name.toUpperCase())
			{
				$scope.grocery_List[i].item_Quantity+=parseInt($scope.item_quantity);
				$scope.duplicate++;
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
	
	
	$scope.is_numeric=function(mixed_var) 
	{
		return (typeof(mixed_var) === 'number' || typeof(mixed_var) === 'string') && mixed_var !== '' && !isNaN(mixed_var);
	}
		
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
	
	$scope.delete_item=function(index)
	{
		/* var remove= $scope.grocery_List(index); */
		 $scope.grocery_List.splice(index, 1);
		 /* console.log(item.item_Quantity); */
	}
	
	$scope.empty_cart=function()
	{
		$scope.grocery_List = [];
	}
	
	
	
});