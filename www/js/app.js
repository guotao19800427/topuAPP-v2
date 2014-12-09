// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var topu = angular.module('topuApp', ['ionic', 'ngRoute', 'ngResource', 'ngRetina', 'angularLocalStorage']);

/*topu.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})*/
topu
.run(['$rootScope', 'User', '$ionicLoading', '$location', '$ionicPopup', function($rootScope, User, $ionicLoading, $location, $ionicPopup){
  //pubilc function that controllers are using would be wrotten here

  //check user status
  $rootScope.checkUserStatus = function(){
    $ionicLoading.show();
    User.checkUserStatus({
      success: function (data){
        $ionicLoading.hide();
        if(data.user.uid>0){
          $location.path('/user-profile');
        }else{
          $location.path('/user-login');
        }     
      }
    })
  }

  //alert error meaasge
  $rootScope.showAlert = function(messages, title) {
     var errorMessagesHTML='';
     for(var i=0; i<messages.length; i++){
         errorMessagesHTML = errorMessagesHTML + '<li>' + messages[i] + '</li>';
     }
     errorMessagesHTML = '<ul>' + errorMessagesHTML + '</ul>'
     var alertPopup = $ionicPopup.alert({
       title: title || '错误提示',
       template: errorMessagesHTML
     });
     alertPopup.then(function(res) {
       //what are we prepare to do after we close the alert?
     });
   };
}])
//modal box
.run(['$rootScope', '$ionicModal', function ($rootScope, $ionicModal){
  $rootScope.modalBox = function(templateUrl, scope, modal){
    $ionicModal.fromTemplateUrl(templateUrl,{
      scope: scope,
      animation: 'slide-in-up'
    }).then(function(modal){
      console.log(modal);
      console.log(scope)
      scope.modal = modal
    });
    scope.openModal = function(){
      scope.modal.show();
    }
    scope.closeModal = function(){
      scope.modal.hide();
    }
    scope.$on('destory', function(){
      scope.modal.remove();
    })
  }
}])
//history logic
.run(['$rootScope', '$location', 'storage', function($rootScope, $location, storage){
  $rootScope.history = [];
  // when change route successfully
  $rootScope.$on('$routeChangeSuccess', function(){
    if($location.$$path == '/'){
      $rootScope.history = [];
      storage.set('topuHistory', []);
    }
    var tempArr = storage.get('topuHistory');
    if(tempArr[tempArr.length-1] !== $location.$$path){
      tempArr.push($location.$$path);
    }
    storage.set('topuHistory', tempArr);
  });

  //when click back button
  $rootScope.historyBack = function(){
    var tempArr = storage.get('topuHistory'),
        preUrl = tempArr[tempArr.length-2];
    $location.path(preUrl);
    tempArr.splice(tempArr.length-2, 2);
    $rootScope.history = tempArr;
    storage.set('topuHistory', tempArr);
  }
}])
//set sign of ichace
.run(['$rootScope', function ($rootScope){
  $rootScope.ichanceURL = undefined;
}])
