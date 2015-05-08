var app = angular.module('quoteBook');
app.controller('mainCtrl',function($scope,maxService){
	$scope.filterFellow = "";
	$scope.killQuote = "";
	$scope.nText = "";
	$scope.nAuthor = "";
	$scope.sShow = false;
	$scope.aShow = false;
	$scope.rShow = false;

	$scope.getThoseData = function(){
		$scope.quotes = maxService.getDataTwo();
	}
	$scope.buttonAdd = function(){
		if($scope.aShow){
			if($scope.nText !== "" && $scope.nAuthor !== ""){
				//maxService.addData({text:$scope.nText,author:$scope.nAuthor});
				maxService.addDataTwo({text:$scope.nText,author:$scope.nAuthor});
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
			//maxService.removeData($scope.killQuote);
			maxService.removeDataTwo($scope.killQuote);
		}else{
			$scope.aShow = false;
			$scope.sShow = false;
			$scope.rShow = true;
		}
	}

	$scope.getThoseData();
});