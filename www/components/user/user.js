topu
//user login
.controller('userLoginController', ['$scope', '$location', 'User', '$ionicLoading', '$rootScope', function($scope, $location, User, $ionicLoading, $rootScope){
	$scope.submit = function(){
	    $ionicLoading.show();
		$scope.isError = false;
		console.log($rootScope.ichanceURL);
		User.login({
			username: this.email,
			password: this.password,
			success: function(data){
				if($rootScope.ichanceURL){
					$location.path($rootScope.ichanceURL);
					$rootScope.ichanceURL = undefined;
				}
				else{
					$location.path('/user-profile');
				}
				$ionicLoading.hide();
			},
			error: function(res){
				$scope.isError = true;
				$rootScope.showAlert(res.data);
        		$ionicLoading.hide();
			}
		})
	}
}])
//user profile 
.controller('userProfileController',['$scope', '$ionicLoading', 'ClassRank', 'Location', '$location', 'User', function ($scope, $ionicLoading, ClassRank, Location, $location, User){
	$ionicLoading.show();
	User.checkUserStatus({
		success: function(data){
			$ionicLoading.hide();
			if(data.user.uid > 0){
				$scope.user = data.user;
				$scope.Location = Location();
          		$scope.ClassRank = ClassRank();
			}
			else{
				$location.path('/');
			}
		}
	});

	$scope.logout = function(){
		$ionicLoading.show();
		User.logout({
			success: function(){
				$ionicLoading.hide();
				$location.path('/');
			}
		})
	}
}])

//edit user profile
.controller('userProfileEditController', ['$scope', '$ionicLoading', 'User', 'Location', 'ClassRank', 'CurrentStatus', '$location', '$rootScope', function ($scope, $ionicLoading, User, Location, ClassRank, CurrentStatus, $location, $rootScope){
	$ionicLoading.show();
	$scope.user = {};
	$scope.errorMessages = [];
	User.checkUserStatus({
      success: function(data) {
      	$ionicLoading.hide();
        if (parseInt(data.user.uid) > 0) {
          $scope.user = data.user;
        }
        else {
          $location.path('/');
        }
      }
    });
	$scope.provinceMapping = Location().provinceMapping;
	$scope.statusMapping = CurrentStatus().mapping;
	$scope.$watch('user.province', function(now, prev) {
      if (now != prev) {
        $scope.cityMapping = Location().cityMapping[now];
        if (typeof prev != 'undefined') {
          $scope.user.city = '';
        }
      }
    });
    $scope.$watch('user.currentStatus', function(now, prev) {
      switch (now) {
        case '初一':
        case '初二':
        case '初三':
          $scope.user.currentStatusValue = 1;
          break;
        case '高一':
        case '高二':
        case '高三':
          $scope.user.currentStatusValue = 2;
          break;

        case '大一':
        case '大二':
        case '大三':
        case '大四':
          $scope.user.currentStatusValue = 3;
          break;

        default:
          $scope.user.currentStatusValue = 5;
          break;
      }
    });
    $scope.rankMapping = ClassRank().mapping;

    $scope.submit = function(){
    	var regularExpression = /^\d{7,13}$/;
    	var phoneNumber = this.user.phone - 0;   	
    	//console.log(angular.element.type(this.user.phone - 0) === 'number')
    	//console.log(regularExpression.test(phoneNumber))
    	if ( angular.element.type(phoneNumber) !== 'number' || !regularExpression.test(phoneNumber)){
    		$rootScope.showAlert(['请输入正确的电话号码']);
    		return;
    	}
    	$ionicLoading.show();
    	User.editProfile({
    		data: this.user,
    		success : function(data){
	         	$ionicLoading.hide();
    			if (!data.success) {
		            $scope.isError = true;
		            $scope.errorMessages = [];
		            for (var errorIndex in data.errors) {
		              $scope.errorMessages.push(data.errors[errorIndex].error_text);
		              $rootScope.showAlert($scope.errorMessages);
		            }
		          }
		        else {
		        	$rootScope.showAlert(['您的个人资料编辑成功！'], '恭喜您！');
		            $location.path('/user-profile');
          		}
    		},
	        error: function(data) {
	          $scope.isError = true;
	          $rootScope.showAlert(data.errors);
	        }
    	})
    }
}])

// edit user password
.controller('userPasswordEditController', ['$scope', 'User', '$location', '$ionicLoading', '$rootScope',function ($scope, User, $location, $ionicLoading, $rootScope){
	$scope.editPwd = {};
	$scope.submit = function(){
		if (!$scope.editPwd.newPassword) {
        $scope.errorMessages = ['请输入新密码'];
        $rootScope.showAlert($scope.errorMessages);
        return;
      }
      else if ($scope.editPwd.newPassword !== $scope.editPwd.repeatPassword) {
        $scope.errorMessages = ['两次输入密码不相等'];
        $rootScope.showAlert($scope.errorMessages);
        return;
      }
      else{
      	$scope.errorMessages = [];
      }
      $ionicLoading.show();
      User.editPassword({
      	new_password : this.editPwd.newPassword,
      	success : function(data){
      		$ionicLoading.hide();
      		if(!data.success){
      			for(var i=0; i<data.errors.length; i++){
      				$scope.errorMessages.push(data.errors[i].error_text);
      			}
      			$rootScope.showAlert($scope.errorMessages);
      		}
      		else{
      			$scope.successMessages = ['您的密码修改成功！'];
      			$rootScope.showAlert($scope.successMessages, '恭喜您！');
      			$location.path('/user-profile');
      		}
      	},
      	error : function(error){
      		$ionicLoading.hide();
      		$rootScope.showAlert(error);
      	}
      })
	}
}])
//user regisiter
.controller('userRegisiterController', ['$scope', 'Location', 'User', '$ionicLoading', '$rootScope', '$location', function ($scope, Location, User, $ionicLoading, $rootScope, $location){
	//init an object for each scopr！this is very important!
	$scope.newUser ={};
	$scope.provinceMapping = Location().provinceMapping;
	$scope.$watch('newUser.province', function(now, prev) {
	    if (now != prev) {
	      $scope.cityMapping = Location().cityMapping[now];
	    }
  	});
  	$scope.submit = function(){
    	$ionicLoading.show();
    	$scope.errorMessages = [];
    	User.regisiter({
    	  email: this.newUser.email,
	      password: this.newUser.password,
	      firstName: this.newUser.firstname,
	      lastName: this.newUser.lastname,
	      phone: this.newUser.phone,
	      province: this.newUser.province,
	      city: this.newUser.city,
	      grade: this.newUser.grade,
	      success : function(data){
	      	$ionicLoading.hide();
	      	if(!data.success){
	      		for(var i=0; i<data.errors.length; i++){
	      			$scope.errorMessages.push(data.errors[i].error_text);
	      		}
	      		$ionicLoading.hide();
	      		$rootScope.showAlert($scope.errorMessages);
	      	}
	      	else{
	      		if($rootScope.ichanceURL){
	      			$location.path($rootScope.ichanceURL);
	      			$rootScope.ichanceURL = undefined;
	      			$rootScope.showAlert(['注册成功<br>请浏览您的个人资料是否准确，点击查看结果进行录取几率测试'],'恭喜您！');
	      		}
	      		else{
	      			$location.path('/user-profile');
	      			$rootScope.showAlert(['注册成功<br>请浏览您的个人资料是否完善'],'恭喜您！');
	      		}
	      	}
	      },
	      error: function(data){
	      	$scope.errorMessages = data.errors;
	      	$rootScope.showAlert($scope.errorMessages);
	      }
    	})
    }
    $rootScope.modalBox('components/user/user-term-of-use.html', $scope, $scope.modal);
}])

// forgot password
.controller('userForgotPasswordController', ['$scope', 'User', '$ionicLoading', '$rootScope', '$location', function ($scope, User, $ionicLoading, $rootScope, $location){
	$scope.items = {};
	$scope.submit = function (){
		$ionicLoading.show();
		User.passwordReset({
			email: this.items.email,
			success: function (data){
				$ionicLoading.hide();
				$location.path('/user-login');
				$rootScope.showAlert(['一封密码重置邮件已经发送到您的邮箱，请查收并重置密码,并重新登录'],'恭喜您！')
			},
			error: function (res){
				$ionicLoading.hide();
				$rootScope.showAlert(res.data);
			}
		})
	}
}])