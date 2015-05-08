var app = angular.module('quoteBook');
app.controller('mainCtrl',['$cookies',function($scope,maxService,$cookies){
	$scope.filterFellow = "";
	$scope.killQuote = "";
	//$scope.newq = {text:"",author:""};
	$scope.nText = "";
	$scope.nAuthor = "";
	$scope.sShow = false;
	$scope.aShow = false;
	$scope.rShow = false;

	$scope.getThoseData = function(){
		$scope.quotes = maxService.getData();
	}
	$scope.buttonAdd = function(){
		if($scope.aShow){
			if($scope.nText !== "" && $scope.nAuthor !== ""){
				maxService.addData({text:$scope.nText,author:$scope.nAuthor});
			}
		}else{
			$scope.aShow = true;
			$scope.sShow = false;
			$scope.rShow = false;
		}
	}
	$scope.buttonFilter = function(){
		if($scope.sShow){

		}else{
			$scope.aShow = false;
			$scope.sShow = true;
			$scope.rShow = false;
		}
	}
	$scope.buttonRemove = function(){
		if($scope.rShow){
			maxService.removeData($scope.killQuote);
		}else{
			$scope.aShow = false;
			$scope.sShow = false;
			$scope.rShow = true;
		}
	}

	$scope.getThoseData();
	$cookies.put('myFavorite','oatmeal');
}]);