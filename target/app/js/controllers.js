var controllers=angular.module("controllers",[]);
controllers.controller("HomeController",["$scope","$http",function(a,b){a.debug=false;
a.title="Hello ";
b.get("service/home").success(function(c){a.data=c;
a.title+=a.data.message
});
a.toggleDebug=function(){a.debug=!a.debug
}
}]);