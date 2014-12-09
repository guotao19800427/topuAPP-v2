topu

// ---------------------------------all service of school
.factory( 'School', [ '$resource', 'API_HOST',  'APIPostFn', function ($resource, API_HOST, APIPostFn){
	
	var School = {};
	// homepage slider
	School.getSliderSchool = function(options){
		options = options || {};
		var SchoolAPI = $resource(API_HOST + '/school/promote.json', {}, {
			post: {
				method: "POST",
				withCredentials: true,
				isArray: false,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}
		});
		SchoolAPI.post(
	      'limit=3',
	      function (data) {
	        options.success && options.success(data);
	      }, 
	      function (httpResponse) {
	        options.error && options.error(httpResponse);
	      }
	    )
		//APIPostFn(SchoolAPI, options);
	}

	// school list 
	School.getSchoolList = function (options) {
		options = options || {};
		var SchoolAPI = $resource(API_HOST + '/school/rank.json', {}, {
			post: {
				method: "POST",
				withCredentials: true,
				isArray: false,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'

				}
			}
		});
		APIPostFn(SchoolAPI, options);
	}

	//school profile
	School.getProfileSchool = function(options) {
		options = options || {};
		//API_HOST + '/school/profile.json'
		var SchoolAPI = $resource('http://beta1.zinchchina.com/api/school/profile_static.json', {}, {
			post: {
				method: "POST",
				withCredentials: true,
				isArray: false,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}
		});
		APIPostFn(SchoolAPI, options);
	}

	return School;
}])

//-------------------------------- all service of user
.factory('User', ['$resource', 'API_HOST',  'APIPostFn', function($resource, API_HOST, APIPostFn){
	var User = {};

	// check user status
	User.checkUserStatus = function(options){
		options = options || {};
		var UserConnectAPI = $resource(API_HOST + '/zinch_system/connect.json', {}, {
			post: {
				method : 'POST',
				withCredentials : true,
				isArray : false,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}
		});
		APIPostFn(UserConnectAPI, options);
	}

	// user login
	User.login = function(options){
		options = options || {};
		var UserLoginAPI = $resource(API_HOST + '/user/login.json', {}, {
	        post: {
	          method: "POST",
	          withCredentials: true,
	          isArray: false,
	          headers: {
	            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
	          }
	        }
	    });
	    
	    UserLoginAPI.post(angular.element.param({
		      username: options.username,
		      password: options.password
		    }), function (data, responseHeaders) {
		      loginLoading = false;
		      options.success && options.success(data, responseHeaders);
		  }, function (httpResponse) {
		    loginLoading = false;
		    options.error && options.error(httpResponse);
		})
	}

	//user logout
	User.logout = function (options) {
      options = options || {};
      var UserLogoutAPI = $resource(API_HOST + '/user/logout.json', {}, {
        post: {
          method: "POST",
          withCredentials: true,
          isArray: false,
          responseType: 'arraybuffer',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          }
        }
      })
      APIPostFn(UserLogoutAPI, options);
    }

    //edit profile
    User.editProfile = function(options){
    	options = options || {};
    	var UserEditProfileAPI = $resource(API_HOST + '/zinch_user/edit.json', {}, {
	        post: {
	          method: "POST",
	          withCredentials: true,
	          isArray: false,
	          headers: {
	            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
	          }
	        }
	    });
	    APIPostFn(UserEditProfileAPI, options);
    }

    //edit password
    User.editPassword = function(options){
    	options = options || {};
    	var UserEditPasswordAPI = $resource(API_HOST + '/zinch_user/password_edit.json', {}, {
	        post: {
	          method: "POST",
	          withCredentials: true,
	          isArray: false,
	          headers: {
	            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
	          }
	        }
	    });
	    UserEditPasswordAPI.post(angular.element.param({
		      new_password: options.new_password
		    }), function (data, responseHeaders) {	     
		      options.success && options.success(data, responseHeaders);
		    }, function (httpResponse) {	      
		      options.error && options.error(httpResponse);
		});
    }

    //new user regisiter
    User.regisiter = function(options){
    	options = options || {};

      var UserRegisterAPI = $resource(API_HOST + '/zinch_user/register.json', {}, {
        post: {
          method: "POST",
          withCredentials: true,
          isArray: false,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          }
        }
      });
      UserRegisterAPI.post(angular.element.param({
	      email: options.email,
	      password: options.password,
	      firstName: options.firstName,
	      lastName: options.lastName,
	      phone: options.phone,
	      province: options.province,
	      city: options.city,
	      current_grad: options.grade,
	      source: 'TopU'
	     
	    }), function (data, responseHeaders) {
	      
	      options.success && options.success(data, responseHeaders);
	    }, function (httpResponse) {
	      
	      options.error && options.error(httpResponse);
	  });
    }

    // forgot password
    User.passwordReset = function (options){
    	options = options || {};
    	var passwordResetAPI = $resource(API_HOST + '/zinch_user/password_reset.json', {}, {
    		post: {
    			method: "POST",
		        withCredentials: true,
		        isArray: false,
		        //responseType: 'arraybuffer',
		        headers: {
		          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
		        }
    		}
    	});
    	passwordResetAPI.post(angular.element.param({
    		email: options.email
    	}), function (data, responseHeaders){
    		options.success && options.success(data, responseHeaders);
    	}, function (httpResponse){
    		options.error && options.error(httpResponse);
    	})
    }

    //----------------------------- all service of ichance
    // user update ichance achievement
    User.updateAchievement = function (options){
    	options = options || {};
    	var UserAchievementAPI = $resource(API_HOST + '/ichance/info.json', {}, {
    		post : {
    			method: "POST",
		        withCredentials: true,
		        isArray: false,
		        headers: {
		          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
		        }
    		}
    	});
    	APIPostFn(UserAchievementAPI, options);
    }

    //user ichance result
    User.getIchanceResult = function (options){
    	options = options || {};
    	var getIchanceResultAPI = $resource(API_HOST + '/ichance/result.json', {}, {
    		post : {
    			method: "POST",
		        withCredentials: true,
		        isArray: false,
		        headers: {
		            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
		        }
		    }
    	});
    	APIPostFn(getIchanceResultAPI, options);
    }

	return User;
}])