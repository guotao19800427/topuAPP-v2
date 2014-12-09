topu
.controller('homepageController',  [ '$scope', 'School', '$ionicLoading', '$ionicSlideBoxDelegate', function($scope, School, $ionicLoading, $ionicSlideBoxDelegate){
	$scope.showSlider = false;
	$ionicLoading.show({
		//template: '<div class="site-loader"></div>'
	})
	School.getSliderSchool({
		/*data :{
			limit :3
		},*/
		success : function(data){
			$scope.sliderSchool = data.schools;
			$scope.showSlider = true;
			$ionicSlideBoxDelegate.update();
			$ionicLoading.hide();
		},
		error: function (httpResponse){
			//console.log(httpResponse);
			$ionicLoading.hide();
		}
	})
}])
.controller('schoolListController', ['$scope' , 'School', 'RankTitle', '$routeParams', '$ionicLoading', function ( $scope, School, RankTitle, $routeParams, $ionicLoading ){
	$scope.limit = '0,50';
	var country = $routeParams.country,
		type =  $routeParams.type;
	$scope.titleh2 = RankTitle[country].h2;
	$scope.titleh3 = RankTitle[country].h3[type];
	$scope.isActive1 = true;
	$scope.refresh = function(limit){
		$scope.nodata = null;
		$scope.shownodata = null;
		$scope.isActive1 = null;
		$scope.isActive2 = null;
		$scope.isActive3 = null;
		$scope.isActive4 = null;
		switch (limit){
			case '0,50':
				$scope.isActive1 = true;
				break;
			case '50,50':
				$scope.isActive2 = true;
				break;
			case '100,50':
				$scope.isActive3 = true;
				break;
			case '150,50':
				$scope.isActive4 = true;
				break;
		}
		$scope.schools = null;
		$scope.limit = limit;
	}
	$scope.refreshLeft = function(){
		$scope.nodata = null;
		$scope.shownodata = null;
		$scope.isActive1 = null;
		$scope.isActive2 = null;
		$scope.isActive3 = null;
		$scope.isActive4 = null;
		$scope.schools = null;
		switch ($scope.limit){
			case '0,50':
				$scope.isActive2 = true;
				$scope.limit = '50,50';
				break;
			case '50,50':
				$scope.isActive3 = true;
				$scope.limit = '100,50';
				break;	
			case '100,50':
				$scope.isActive4 = true;
				$scope.limit = '150,50';
				break;
			case '150,50':
				$scope.isActive1 = true;
				$scope.limit = '0,50';
				break;
		}
	}
	$scope.refreshRight = function(){
		$scope.nodata = null;
		$scope.shownodata = null;
		$scope.isActive1 = null;
		$scope.isActive2 = null;
		$scope.isActive3 = null;
		$scope.isActive4 = null;
		$scope.schools = null;
		switch ($scope.limit){
			case '0,50':
				$scope.isActive4 = true;
				$scope.limit = '150,50';
				break;
			case '50,50':
				$scope.isActive1 = true;
				$scope.limit = '0,50';
				break;	
			case '100,50':
				$scope.isActive2 = true;
				$scope.limit = '50,50';
				break;
			case '150,50':
				$scope.isActive3 = true;
				$scope.limit = '100,50';
				break;
		}
	}
	$scope.$watch('limit',function (){
		$ionicLoading.show();
		School.getSchoolList({
			data: {
				country: country,
				type: type,
				limit: $scope.limit
			},
			success: function (data) {
				//angular.element('.to-top').hide();
				if(data.schools.length) {
					$ionicLoading.hide();
					$scope.schools = data.schools;		
				}else{
					$scope.schools = [];
					$scope.nodata = '对不起，未找到您所需要的数据！';
					$scope.shownodata = 1;
					$ionicLoading.hide();
				}
			}
		});
	})
}])
.controller('schoolProfileController', ['$scope', '$routeParams', '$ionicLoading', 'School', function($scope, $routeParams, $ionicLoading, School){
	var school_nid = $routeParams.nid;
	console.log(typeof(school_nid));
	$ionicLoading.show();
	School.getProfileSchool({
		data: {
			nid: '374'//school_nid
		},
		success: function (data) {
			console.log(data);
			$ionicLoading.hide();
			$scope.school = data;
		}
	});
	$scope.showOverview = true;
	$scope.showRequirements = false;
	$scope.showMajor = false;
	$scope.switchToOverview = function(){
		$scope.showOverview = true;
		$scope.showRequirements = false;
		$scope.showMajor = false;	
	}
	$scope.switchToRequirements = function(){
		$scope.showOverview = false;
		$scope.showRequirements = true;
		$scope.showMajor = false;	
	}
	$scope.switchToMajor = function(){
		$scope.showOverview = false;
		$scope.showRequirements = false;
		$scope.showMajor = true;	
	}
}])