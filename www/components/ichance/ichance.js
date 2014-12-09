topu
//achievement 
.controller('ichanceAchievementController',['$scope', '$location', '$rootScope', '$ionicLoading', 'User', 'ClassRank', 'FormError', '$routeParams', function ($scope, $location, $rootScope, $ionicLoading, User, ClassRank, FormError, $routeParams){
	$rootScope.ichanceURL = $location.$$path;
	$scope.schoolId = $routeParams.schoolId;
	$scope.rankMapping = ClassRank().mapping;
	$scope.errorMessages = [];
	//$scope.ichancefinal = {};
	$ionicLoading.show();
	User.checkUserStatus({
		success: function(data){
			$ionicLoading.hide();
			if(data.user.uid <= 0){
				$location.path('/user-login');
			}
			else{
				$scope.user = data.user;
			}
		}
	});

	var ichanceIsint = function (name) {
      // eval the expression
      return (parseInt(eval("$scope.ichancefinal." + name + ".$modelValue"), 10) === parseFloat(eval("$scope.ichancefinal." + name + '.$modelValue')));
    }

    var ichanceRange = function (name, min, max) {
      // eval the expression
      return ((eval("$scope.ichancefinal." + name + ".$modelValue") !== '') && (eval("$scope.ichancefinal." + name + ".$modelValue") !== null) && (eval("$scope.ichancefinal." + name + ".$modelValue") !== undefined) && eval("$scope.ichancefinal." + name + ".$modelValue") >= min && eval("$scope.ichancefinal." + name + ".$modelValue") <= max);
    }

    var ichanceNotEmpty = function (name) {
      return ((eval("$scope.ichancefinal." + name + ".$modelValue") !== '') && (eval("$scope.ichancefinal." + name + ".$modelValue") !== null) && (eval("$scope.ichancefinal." + name + ".$modelValue") !== undefined));
    }

    var ichanceFinalizeCheck = function () {

      // Validate GPA
      if (!ichanceRange('gpa', 0, 4)) {
        $scope.ichancefinal.$valid = false;
        $scope.errorMessages.push(FormError.ichance.gpa);
      }
      // Validate TOEFL
      if (ichanceNotEmpty('toefl')) {
        if (!ichanceIsint('toefl') || !ichanceRange('toefl', 0, 120)) {
          $scope.ichancefinal.$valid = false;
          $scope.errorMessages.push(FormError.ichance.toefl);
        }
      }
      // Validate IELTS
      if (ichanceNotEmpty('ielts')) {
        if (!ichanceRange('ielts', 0, 9)) {
          $scope.ichancefinal.$valid = false;
          $scope.errorMessages.push(FormError.ichance.ielts);
        }
      }
      // Validate TOEFL && IELTS NOT EMPTY
      if (!ichanceNotEmpty('toefl') && !ichanceNotEmpty('ielts')) {
        $scope.ichancefinal.$valid = false;
        $scope.errorMessages.push("托福或雅思至少一项为必填项");
      }

      // Validate By currentStatusValue
      if ($scope.user.currentStatusValue <= 2) {// sat , act
        // Validate SAT
        if (!ichanceIsint('sat') || !ichanceRange('sat', 600, 2400)) {
          $scope.ichancefinal.$valid = false;
          $scope.errorMessages.push(FormError.ichance.sat);
        }
        // Validate ACT
        if (ichanceNotEmpty('act')) {
          if (!ichanceIsint('act') || !ichanceRange('act', 0, 36)) {
            $scope.ichancefinal.$valid = false;
            $scope.errorMessages.push(FormError.ichance.act);
          }
        }
      }

      /*if ($scope.user.currentStatusValue > 2) {// gmat, gre_quantitive, gre_verbal, gre_analytical_writing
        // Validate GMAT
        if (ichanceNotEmpty('gmat')) {
          if (!ichanceIsint('gmat') || !ichanceRange('gmat', 200, 800)) {
            $scope.ichancefinal.$valid = false;
            $scope.errorMessages.push(FormError.ichance.gmat);
          }
        }
        // Validate gre_quantitive
        if (ichanceNotEmpty('gre_quantitive')) {
          if (!ichanceIsint('gre_quantitive') || !ichanceRange('gre_quantitive', 130, 170)) {
            $scope.ichancefinal.$valid = false;
            $scope.errorMessages.push(FormError.ichance.gre_quantitive);
          }
        }
        // Validate gre_verbal
        if (ichanceNotEmpty('gre_verbal')) {
          if (!ichanceIsint('gre_verbal') || !ichanceRange('gre_verbal', 130, 170)) {
            $scope.ichancefinal.$valid = false;
            $scope.errorMessages.push(FormError.ichance.gre_verbal);
          }
        }
        // Validate gre_analytical_writing
        if (ichanceNotEmpty('gre_analytical_writing')) {
          if (!ichanceRange('gre_analytical_writing', 0, 6)) {
            $scope.ichancefinal.$valid = false;
            $scope.errorMessages.push(FormError.ichance.gre_analytical_writing);
          }
        }
      }*/

      if (!$scope.ichancefinal.$valid) {
        $scope.isError = true;
        return false;
      }

      return true;
    }

    $scope.submit = function(){
    	$ionicLoading.show();
    	console.log($scope.ichancefinal.act);
    	$scope.ichancefinal.$valid = true;
      	$scope.errorMessages = [];

      	if (!ichanceFinalizeCheck()) {
      		$ionicLoading.hide();
	        $rootScope.showAlert($scope.errorMessages);
	        return false;
	    }

	    User.updateAchievement({
	        data: {
	          user: this.user,
	          schoolId: $scope.schoolId
	        },
	        success: function (data) {
	          $ionicLoading.hide();
	          if (!data.success) {
	            $scope.errorMessages = [];
	            for (var errorIndex in data.errors) {
	              $scope.errorMessages.push(data.errors[errorIndex].error_text);
	              $rootScope.showAlert($scope.errorMessages);
	            }
	          }
	          else {
	            $location.path('/ichance/result/' + $scope.schoolId);
	          }
	        },
	        error: function (res) {
	          $ionicLoading.hide();
	          $rootScope.showAlert(data.errors);
	        }
	    })

    }
}])
// ichance result
.controller('ichanceResultController', [ '$scope', '$routeParams', 'School', 'User', '$ionicLoading', '$rootScope', function ($scope, $routeParams, School, User, $ionicLoading, $rootScope){
	$scope.results = {};
	$scope.schoolId = $routeParams.schoolId;
	$scope.errorMessages = [];
	$scope.school_match_mapping = {
      safety_most: '保底学校',
      safety_more: '保底学校',
      safety: '保底学校',
      core: '核心学校',
      stretch: '梦想学校',
      stretch_more: '梦想学校',
      stretch_most: '超乎梦想的学校'
    };
    /*$scope.match_list = {
      1: '保底学校',
      2: '核心学校',
      3: '梦想学校',
      4: '超乎梦想的学校'
    };*/
    $ionicLoading.show();
    School.getProfileSchool({
      data: {
        nid: $scope.schoolId
      },
      success: function (data) {
      	$ionicLoading.hide();
        $scope.school = data;
      }
    });

    User.getIchanceResult({
	    data: {
	      schoolId: $scope.schoolId
	    },
	    success: function (data) {
	      
	      if (!data.success) {
	        $scope.errorMessages = [];
	        for (var errorIndex in data.errors) {
	          $scope.errorMessages.push(data.errors[errorIndex].error_text);
	          $rootScope.showAlert($scope.errorMessages);
	        }
	      }
	      else {
	        $scope.results = data.results;
	        $scope.results.matchType = $scope.school_match_mapping[$scope.results.school_match];
	        console.log($scope.school_match_mapping[$scope.results.school_match]);
	      }
	    },
	    error: function (res) {
	      $scope.isError = true;
	      $rootScope.showAlert(data.errors);
	    }
	});

	/*$scope.$watch('results.school_match', function (now, prev) {
      if (now != prev) {
        switch ($scope.results.school_match) {
          case 'safety_most':
          case 'safety_more':
          case 'safety':
            $scope.matchActiveId = 1;
            break;

          case 'core':
            $scope.matchActiveId = 2;
            break;

          case 'stretch':
          case 'stretch_more':
            $scope.matchActiveId = 3;
            break;

          case 'stretch_most':
            $scope.matchActiveId = 4;
            break;
        }
      }
    });*/


}])