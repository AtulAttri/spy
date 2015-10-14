/**
 * Created by Atul on 12-08-2015.
 */
angular.module('spy.myservices',[])
    .service('callService', function CatDetails() {

 this.get_all_prod_callDetails = function ($http, $q, startDate,endDate,extention){
  //   startDate = '2015-08-10';
   //  endDate = '2015-08-11';
     if (extention < 0 )
     {
         extention =null;
     }


 var apiPath = 'http://192.168.0.110/spyapp' +  '/agent/calling_prod/byDateandExtension/' + startDate + '/' + endDate + '/' + extention  + '?json=true';

            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: apiPath,
                //data: data,
                type: JSON
            }).success(function (data) {
                deferred.resolve(data);
            }).error(function (data) {
                deferred.reject("An error occured while validating User");
            })

            return deferred.promise;
        };

        this.get_all_callDetails_data = function ($http, $q, startDate,endDate,extention){
            //   startDate = '2015-08-10';
            //  endDate = '2015-08-11';
            if ( (extention < 0) || (extention == undefined) )
            {
                extention =null;
            }


            var apiPath = 'http://192.168.0.110/spyapp' +  '/agent/calling_data/byDateandExtension/' + startDate + '/' + endDate + '/' + extention  + '?json=true';

            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: apiPath,
                //data: data,
                type: JSON
            }).success(function (data) {
                deferred.resolve(data);
            }).error(function (data) {
                deferred.reject("An error occured while validating User");
            })

            return deferred.promise;
        };

        this.get_missed_call_data = function ($http, $q, startDate,endDate){
            //   startDate = '2015-08-10';
            //  endDate = '2015-08-11';


            var apiPath = 'http://192.168.0.110/spyapp' +  '/missed_call_data/byDate/' + startDate + '/' + endDate + '?json=true';

            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: apiPath,
                //data: data,
                type: JSON
            }).success(function (data) {
                deferred.resolve(data);
            }).error(function (data) {
                deferred.reject("An error occured while validating User");
            })

            return deferred.promise;
        };



    });

