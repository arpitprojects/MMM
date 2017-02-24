data.controller('home'  ,['$scope' , '$log' , '$location' ,  function($scope , $log , $location){
    $scope.title = "Data Analysis";
    if($location.path() == '/mean'){
        $scope.active_nav = true;
    }else{
        $scope.active_nav = false;
    }
}]);

data.controller('kendo' , ['$scope' , function($scope){
    $scope.title = "Kendo ui"; 
}]);

data.controller('mean'  ,['$scope' , '$log' , '$location' , '$http' ,  function($scope , $log , $location , $http){
    $scope.title = "Mean Calculator";
    $scope.table_arr = [];
    t ={};
    $scope.calculate_dis_mean = function(val){
        console.log($scope.data);

        if($scope.data == ""){
            alert('Null values are not allowed');
        }else{
         var reg  = /^[0-9]( *, *[0-9])*$/;
         if(reg.test($scope.data)){
             /*API CALL*/
             $scope.send_data = {
                "data"  : $scope.data
            };
            $scope.send_data = ($scope.send_data);
            console.log($scope.send_data);
            $http.post('http://localhost/cgi-bin/projectmmm/mean/dis_mean.py' , $scope.send_data  , {
                headers  : {
                    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).then(function(data){
                console.log(JSON.stringify(data.data));
            } , function(data){
                console.log(JSON.stringify(data));
            })
            /* End of api call*/
        }else{
            alert('1.) Comma( , ) at front and back is not allowed\n 2.) Invalid Spaces are not allowed\n 3.) Float values are not allowed');
            return false;
        }
    }

}
$scope.editItem = function(item){
    item.editing = true;
    item.editing1 = true;
    item.editing3 = true;
}
$scope.doneEdit = function(item){
    item.editing = false;
    item.editing1 = false; 
    item.editing3 = false; 
}
$scope.del = function(x){
    console.log(x);
    var _index = $scope.table_arr.indexOf(x);
    $scope.table_arr.splice(_index , 1);
    console.log("Successfully Deleted");
}
$scope.add = function(){
    t.a = $scope.table.a;
    t.b = $scope.table.b;
    t.f = $scope.table.f
    t.id = $scope.table_arr.length+1;
    var pro = angular.copy(t);
        console.log(pro);//ok
        $scope.table_arr.push(pro);
        console.log($scope.table_arr);
        $scope.table.a = "";
        $scope.table.b = "";
        $scope.table.f = "";
    }

    /*This script for the panel*/
    $scope.tab = 1;

    $scope.setTab = function(newTab){
        $scope.tab = newTab;
    };

    $scope.isSet = function(tabNum){
        return $scope.tab === tabNum;
    };

}]);
data.controller('median'  ,['$scope' , '$log' , '$location' , '$http' ,  function($scope , $log , $location , $http){
    $scope.title = "Median Calculator";
    $scope.table_arr = [];
    t ={};
    $scope.calculate_dis_mean = function(val){
        console.log($scope.data);

        if($scope.data == ""){
            alert('Null values are not allowed');
        }else{
         var reg  = /^[0-9]( *, *[0-9])*$/;
         if(reg.test($scope.data)){
             /*API CALL*/
             $scope.send_data = {
                "data"  : $scope.data
            };
            $scope.send_data = ($scope.send_data);
            console.log($scope.send_data);
            $http.post('http://localhost/cgi-bin/projectmmm/mean/dis_mean.py' , $scope.send_data  , {
                headers  : {
                    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).then(function(data){
                console.log(JSON.stringify(data.data));
            } , function(data){
                console.log(JSON.stringify(data));
            })
            /* End of api call*/
        }else{
            alert('1.) Comma( , ) at front and back is not allowed\n 2.) Invalid Spaces are not allowed\n 3.) Float values are not allowed');
            return false;
        }
    }

}
$scope.editItem = function(item){
    item.editing = true;
    item.editing1 = true;
    item.editing3 = true;
}
$scope.doneEdit = function(item){
    item.editing = false;
    item.editing1 = false; 
    item.editing3 = false; 
}
$scope.del = function(x){
    console.log(x);
    var _index = $scope.table_arr.indexOf(x);
    $scope.table_arr.splice(_index , 1);
    console.log("Successfully Deleted");
}
$scope.add = function(){
    t.a = $scope.table.a;
    t.b = $scope.table.b;
    t.f = $scope.table.f
    t.id = $scope.table_arr.length+1;
    var pro = angular.copy(t);
        console.log(pro);//ok
        $scope.table_arr.push(pro);
        console.log($scope.table_arr);
        $scope.table.a = "";
        $scope.table.b = "";
        $scope.table.f = "";
    }

    /*This script for the panel*/
    $scope.tab = 1;

    $scope.setTab = function(newTab){
        $scope.tab = newTab;
    };

    $scope.isSet = function(tabNum){
        return $scope.tab === tabNum;
    };

}]);

data.controller('mode'  ,['$scope' , '$log' , '$location' , '$http' ,  function($scope , $log , $location , $http){
    $scope.title = "Mode Calculator";
    $scope.table_arr = [];
    t ={};
    $scope.calculate_dis_mean = function(val){
        console.log($scope.data);

        if($scope.data == ""){
            alert('Null values are not allowed');
        }else{
         var reg  = /^[0-9]( *, *[0-9])*$/;
         if(reg.test($scope.data)){
             /*API CALL*/
             $scope.send_data = {
                "data"  : $scope.data
            };
            $scope.send_data = ($scope.send_data);
            console.log($scope.send_data);
            $http.post('http://localhost/cgi-bin/projectmmm/mean/dis_mean.py' , $scope.send_data  , {
                headers  : {
                    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).then(function(data){
                console.log(JSON.stringify(data.data));
            } , function(data){
                console.log(JSON.stringify(data));
            })
            /* End of api call*/
        }else{
            alert('1.) Comma( , ) at front and back is not allowed\n 2.) Invalid Spaces are not allowed\n 3.) Float values are not allowed');
            return false;
        }
    }

}
$scope.editItem = function(item){
    item.editing = true;
    item.editing1 = true;
    item.editing3 = true;
}
$scope.doneEdit = function(item){
    item.editing = false;
    item.editing1 = false; 
    item.editing3 = false; 
}
$scope.del = function(x){
    console.log(x);
    var _index = $scope.table_arr.indexOf(x);
    $scope.table_arr.splice(_index , 1);
    console.log("Successfully Deleted");
}
$scope.add = function(){
    t.a = $scope.table.a;
    t.b = $scope.table.b;
    t.f = $scope.table.f
    t.id = $scope.table_arr.length+1;
    var pro = angular.copy(t);
        console.log(pro);//ok
        $scope.table_arr.push(pro);
        console.log($scope.table_arr);
        $scope.table.a = "";
        $scope.table.b = "";
        $scope.table.f = "";
    }

    /*This script for the panel*/
    $scope.tab = 1;

    $scope.setTab = function(newTab){
        $scope.tab = newTab;
    };

    $scope.isSet = function(tabNum){
        return $scope.tab === tabNum;
    };

}]);