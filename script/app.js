'use strict';

angular.module('myApp',['slider'])
.controller('appctrl', ['$scope', function ($scope) {
	$scope.zoomValue = 0.7;
	$scope.zoomPercentage = 70;
	$scope.zoomDemoClass = "zoom-demo-wrapper-expanded";
	$scope.dataSliderDemoClass = "data-slider-wrapper-collapsed";
	$scope.footerLink = "More Demos";
	$scope.dataSliderReturn = {};
	$scope.dataSliderConf = {
		type: "data", // options: data, range
		min: 0,
		max: 100,
		step: 10,
		start: 20,
		model: [1,20,90,800, 400],
		spacing: "auto", //options: equated, auto
		displayticks: true,
		displayguide: true,
		changeable: true,
		callback: function(data){
			$scope.dataSliderReturn = data;
		}
	};
	$scope.zoomSliderConf = {
		type: "range", // options: data, range
		min: 0.1,
		max: 1.5,
		start: 0.7,
		step: 0.05,
		spacing: "auto", //options: equated, auto
		displayticks: false,
		displayguide: true,
		changeable: true,
		callback: function(data){
			$scope.zoomValue = data.val;
			$scope.zoomPercentage = Math.floor($scope.zoomValue * 100);
			// console.log($scope.zoomValue * 100);
		}
	};	
	$scope.creditSliderConf = {
		type: "range", // options: data, range
		min: 300,
		max: 850,
		start: 500,
		step: 50,
		spacing: "auto", //options: equated, auto
		displayticks: true,
		displayguide: true,
		changeable: false,
		callback: function(data){
			$scope.zoomValue = data.val;
			$scope.zoomPercentage = Math.floor($scope.zoomValue * 100);
			// console.log($scope.zoomValue * 100);
		},
		rangeData: function(data) {
			$scope.creditRangeData = data;
		}
	};	
	$scope.toggleDemo = function() {
		if($scope.zoomDemoClass === "zoom-demo-wrapper-collapsed") {
			$scope.zoomDemoClass = "zoom-demo-wrapper-expanded";
			$scope.dataSliderDemoClass = "data-slider-wrapper-collapsed";
			$scope.footerLink = "More Demos";
		}
		else {
			$scope.zoomDemoClass = "zoom-demo-wrapper-collapsed";
			$scope.dataSliderDemoClass = "data-slider-wrapper-expanded";
			$scope.footerLink = "Back to Wall-E Zoom Demo";

		}

		// return false;
	};
	
}]);