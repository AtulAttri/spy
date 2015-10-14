angular.module('spy.controllers',['chart.js'])

.controller('DashCtrl', function($scope,$http, $q,$filter,
                                 callService,$ionicPopup,$state) {

        init();

        $scope.doRefresh = function() {
            get_productive_call_data();
            get_all_call_data();
        // Stop the ion-refresher from spinning
              $scope.$broadcast('scroll.refreshComplete');

        };
          function init() {
            get_productive_call_data();
            get_all_call_data();
          }


        $scope.get_prod_by_date =    function get_productive_call_by_date(startDate,endDate) {
            var total_call_duration;
            total_call_duration = 0;


            var showAlert = function () {
                var alertPopup = $ionicPopup.alert({
                    title: 'Please Check',
                    template: 'Please Enter Start Date & End Date!'
                });
                alertPopup.then(function (res) {
                    console.log('Thank you for not eating my delicious ice cream cone');
                });
            };


            var sDate;
            var eDate;
            var title_Date;
            var extention;
            sDate = $scope.start_date;
            startDate = $filter("date")(sDate, 'yyyy-MM-dd');
            title_Date = $filter("date")(sDate, 'dd-MM-yyyy');
            eDate = $scope.end_date;
            endDate = $filter("date")(eDate, 'yyyy-MM-dd');

            $scope.titleDate = title_Date;

            if (sDate == undefined || eDate == undefined) {
                showAlert();
            }


            else
            {

                callService.get_all_prod_callDetails($http, $q, startDate, endDate, extention).then(function (data) {
                        $scope.productive_calls_data = data;
                        var call_dur_count = [];
                        call_dur_count = data;
                        var less_sec30 = [];
                        var sec30_60 = [];
                        var sec61_120 = [];
                        var above_min2 = [];
                        var shashidhar_count=0;
                        var pornima_count =0;
                        var kapla_count =0;
                        var kiran_count=0;
                        var chethan_count=0;
                        var ziaba_count =0;
                        var inderjit_count=0;
                        var saraswati_count=0;
                        var adi_count =0;
                        var divya_count=0;
                        var vidya_count=0;



                        for (var i = 0; i < data.length; i++)
                        {
                            if( data[i].extension == 707 && data[i].Duration != "")
                            {
                                shashidhar_count = shashidhar_count + 1;
                            }

                            if( data[i].extension == 708 && data[i].Duration != "")
                            {
                                pornima_count = pornima_count + 1;
                            }

                            if( data[i].extension == 718 && data[i].Duration != "")
                            {
                                kapla_count = kapla_count + 1;
                            }
                            if( data[i].extension == 713 && data[i].Duration != "")
                            {
                                chethan_count = chethan_count + 1;
                            }
                            if( data[i].extension == 803 && data[i].Duration != "")
                            {
                                kiran_count = kiran_count + 1;
                            }

                            if( data[i].extension == 711 && data[i].Duration != "")
                            {
                                ziaba_count = ziaba_count + 1;
                            }

                            if( data[i].extension == 717 && data[i].Duration != "")
                            {
                                inderjit_count = inderjit_count + 1;
                            }
                            if( data[i].extension == 514 && data[i].Duration != "")
                            {
                                saraswati_count = saraswati_count + 1;
                            }
                            if( data[i].extension == 901 && data[i].Duration != "")
                            {
                                adi_count = adi_count + 1;
                            }
                            if( data[i].extension == 802 && data[i].Duration != "")
                            {
                                divya_count = divya_count + 1;
                            }
                            if( data[i].extension == 710 && data[i].Duration != "")
                            {
                                vidya_count = vidya_count + 1;
                            }

                            $scope.shashidhar_count= shashidhar_count;
                            $scope.pornima_count= pornima_count;
                            $scope.kapla_count= kapla_count;
                            $scope.chethan_count= chethan_count;
                            $scope.kiran_count= kiran_count;
                            $scope.ziaba_count= ziaba_count;
                            $scope.inderjit_count= inderjit_count;
                            $scope.saraswati_count= saraswati_count;
                            $scope.vidya_count= vidya_count;
                            $scope.adi_count= adi_count;
                            $scope.divya_count= divya_count;
                            var relaxo_count=shashidhar_count+pornima_count+chethan_count+ziaba_count+inderjit_count+vidya_count+kapla_count;
                            $scope.total_relaxo_count=relaxo_count;
                            $scope.seee_blau=  adi_count + divya_count +kiran_count;
                            $scope.grass_puma = saraswati_count;
                            $scope.engagement= kapla_count;
                            $scope.labels = ['Shashidhar', 'Poornima', 'Aditya', 'Chethan', 'Kiran', 'Ziaba', 'Inderjit', 'Saraswati', 'Vidya', 'Kalpa', 'Divya'];
                            $scope.series = ['Series A'];
                            $scope.datas=[];
                            $scope.datas=[shashidhar_count,pornima_count,kapla_count,chethan_count,kiran_count,ziaba_count,inderjit_count,saraswati_count,vidya_count,adi_count,divya_count];


                        }

                        for (var i = 0; i < call_dur_count.length; i++) {
                            if ((parseInt(call_dur_count[i].Duration) <= 30)) {
                                less_sec30.push(call_dur_count[i]);

                            }
                            else if ((parseInt(call_dur_count[i].Duration) > 30) && (parseInt(call_dur_count[i].Duration) <= 60)) {
                                sec30_60.push(call_dur_count[i]);

                            }
                            else if ((parseInt(call_dur_count[i].Duration) > 60) && (parseInt(call_dur_count[i].Duration) <= 120)) {
                                sec61_120.push(call_dur_count[i]);

                            }
                            else if ((parseInt(call_dur_count[i].Duration) > 120)) {
                                above_min2.push(call_dur_count[i]);

                            }

                        }

                        $scope.lss_sec30 = less_sec30.length;
                        $scope.sc30_60 = sec30_60.length;
                        $scope.mn1_min2 = sec61_120.length;
                        $scope.abv_min2 = above_min2.length;
                        $scope.time = ['Less 30sec', '30sec-60sec', '61sec-120sec', 'Above 2min'];
                        $scope.series = ['Series A'];
                        $scope.time_data=[];
                        $scope.time_data=[less_sec30.length,sec30_60.length,sec61_120.length,above_min2.length];

                        for (var i = 0; i < data.length; i++) {
                            if (data[i].Duration > 0 && data[i].Duration != "") {
                                var callTime = parseInt(data[i].Duration);
                                total_call_duration = total_call_duration + callTime;
                            }
                        }
                        console.log(total_call_duration + ' Production call time in sec ');
                        var total_time_in_min = (total_call_duration / 60);
                        var total_time_in_hrs = (total_time_in_min / 60);
                        var total_time_in_mins = Math.round(total_time_in_min % 60)

                        $scope.total_productive_calls = data.length;
                        $scope.total_productive_time_hr = Math.round(total_time_in_hrs);
                        $scope.total_productive_time_min = total_time_in_mins;
                    },


                    function () {

                        $scope.error = error;
                        $scope.loading = false;
                    });

                var total_call_duration;
                total_call_duration = 0;
                var CallList = [];
                var extension;
                callService.get_all_callDetails_data($http, $q, startDate, endDate, extension).then(function (data) {
                        $scope.all_calls_data = data;

                        for (var i = 0; i < data.length; i++) {
                            if (data[i].Duration > 0 && data[i].Duration != "") {
                                var callTime = parseInt(data[i].Duration);
                                total_call_duration = total_call_duration + callTime;
                            }
                        }
                        console.log(total_call_duration + ' Total call time in sec ');
                        var total_time_in_min = (total_call_duration / 60);
                        var total_time_in_hrs = (total_time_in_min / 60);
                        var total_time_in_mins = Math.round(total_time_in_min % 60)

                        $scope.total_calls = data.length;
                        $scope.total_time_hr = Math.round(total_time_in_hrs);
                        $scope.total_min = total_time_in_mins;

                    },


                    function () {

                        $scope.error = error;
                        $scope.loading = false;
                    });
                }
            }


            function get_productive_call_data() {
                var currentdate = new Date();
                var total_call_duration;
                total_call_duration = 0;

                var date = currentdate.getUTCDate().toString();
                var month = (currentdate.getUTCMonth() + 1).toString()
                var year = currentdate.getUTCFullYear().toString();

                var startDate = ( year + '-' + month + '-' + date );
                var titleDate = ( date + '-' + month + '-' + year );
                $scope.titleDate = titleDate;

                var next_date = ( currentdate.getDate() + 1 );


                var endDate = ( year + '-' + month + '-' + next_date );

                var extention;
                callService.get_all_prod_callDetails($http, $q, startDate, endDate, extention).then(function (data) {
                        $scope.productive_calls_data = data;
                        var call_dur_count = [];
                        call_dur_count = data;
                        var less_sec30 = [];
                        var sec30_60 = [];
                        var sec61_120 = [];
                        var above_min2 = [];
                        var agents_call_count=[];
                        var shashidhar_count=0;
                        var pornima_count =0;
                        var kapla_count =0;
                        var kiran_count=0;
                        var chethan_count=0;
                        var ziaba_count =0;
                        var inderjit_count=0;
                        var saraswati_count=0;
                        var adi_count =0;
                        var divya_count=0;
                        var vidya_count=0;


                        for (var i = 0; i < data.length; i++)
                        {
                            if( data[i].extension == 707 && data[i].Duration != "")
                            {
                                shashidhar_count = shashidhar_count + 1;

                            }

                            if( data[i].extension == 708 && data[i].Duration != "")
                            {
                                pornima_count = pornima_count + 1;

                            }

                            if( data[i].extension == 718 && data[i].Duration != "")
                            {
                                kapla_count = kapla_count + 1;

                            }
                            if( data[i].extension == 713 && data[i].Duration != "")
                            {
                                chethan_count = chethan_count + 1;

                            }
                            if( data[i].extension == 803 && data[i].Duration != "")
                            {
                                kiran_count = kiran_count + 1;

                            }

                            if( data[i].extension == 711 && data[i].Duration != "")
                            {
                                ziaba_count = ziaba_count + 1;

                            }

                            if( data[i].extension == 717 && data[i].Duration != "")
                            {
                                inderjit_count = inderjit_count + 1;

                            }
                            if( data[i].extension == 514 && data[i].Duration != "")
                            {
                                saraswati_count = saraswati_count + 1;

                            }
                            if( data[i].extension == 901 && data[i].Duration != "")
                            {
                                adi_count = adi_count + 1;

                            }
                            if( data[i].extension == 802 && data[i].Duration != "")
                            {
                                divya_count = divya_count + 1;

                            }
                            if( data[i].extension == 710 && data[i].Duration != "")
                            {
                                vidya_count = vidya_count + 1;

                            }



                            $scope.shashidhar_count= shashidhar_count;
                            $scope.pornima_count= pornima_count;
                            $scope.kapla_count= kapla_count;
                            $scope.chethan_count= chethan_count;
                            $scope.kiran_count= kiran_count;
                            $scope.ziaba_count= ziaba_count;
                            $scope.inderjit_count= inderjit_count;
                            $scope.saraswati_count= saraswati_count;
                            $scope.vidya_count= vidya_count;
                            $scope.adi_count= adi_count;
                            $scope.divya_count= divya_count;

                            var relaxo_count=shashidhar_count+pornima_count+chethan_count+ziaba_count+inderjit_count+vidya_count+kapla_count;

                            $scope.total_relaxo_count=relaxo_count;
                            $scope.seee_blau=  adi_count + divya_count +kiran_count;
                            $scope.grass_puma = saraswati_count;
                            $scope.engagement= kapla_count;




                        }

                        $scope.labels = ['Shashidhar', 'Poornima', 'Aditya', 'Chethan', 'Kiran', 'Ziaba', 'Inderjit', 'Saraswati', 'Vidya', 'Kalpa', 'Divya'];
                        $scope.series = ['Series A'];
                        $scope.datas=[];
                        $scope.datas=[shashidhar_count,pornima_count,kapla_count,chethan_count,kiran_count,ziaba_count,inderjit_count,saraswati_count,vidya_count,adi_count,divya_count];

                        for (var i = 0; i < call_dur_count.length; i++) {
                            if ((parseInt(call_dur_count[i].Duration) <= 30)) {
                                less_sec30.push(call_dur_count[i]);

                            }
                            else if ((parseInt(call_dur_count[i].Duration) > 30) && (parseInt(call_dur_count[i].Duration) <= 60)) {
                                sec30_60.push(call_dur_count[i]);

                            }
                            else if ((parseInt(call_dur_count[i].Duration) > 60) && (parseInt(call_dur_count[i].Duration) <= 120)) {
                                sec61_120.push(call_dur_count[i]);

                            }
                            else if ((parseInt(call_dur_count[i].Duration) > 120)) {
                                above_min2.push(call_dur_count[i]);

                            }

                        }

                        $scope.lss_sec30 = less_sec30.length;
                        $scope.sc30_60 = sec30_60.length;
                        $scope.mn1_min2 = sec61_120.length;
                        $scope.abv_min2 = above_min2.length;
                        $scope.time = ['Less 30sec', '30sec-60sec', '61sec-120sec', 'Above 2min'];
                        $scope.series = ['Series A'];
                        $scope.time_data=[];
                        $scope.time_data=[less_sec30.length,sec30_60.length,sec61_120.length,above_min2.length];

                        for (var i = 0; i < data.length; i++) {
                            if (data[i].Duration > 0 && data[i].Duration != "") {
                                var callTime = parseInt(data[i].Duration);
                                total_call_duration = total_call_duration + callTime;
                            }
                        }
                        console.log(total_call_duration + ' Production call time in sec ');
                        var total_time_in_min = (total_call_duration / 60);
                        var total_time_in_hrs = (total_time_in_min / 60);
                        var total_time_in_mins = Math.round(total_time_in_min % 60)

                        $scope.total_productive_calls = data.length;
                        $scope.total_productive_time_hr = Math.round(total_time_in_hrs);
                        $scope.total_productive_time_min = total_time_in_mins;

                    },
                    function () {

                        $scope.error = error;
                        $scope.loading = false;
                    });
            }


            function get_all_call_data() {
                var currentdate = new Date();
                var total_call_duration;
                total_call_duration = 0;

                var date = currentdate.getUTCDate().toString();
                var month = (currentdate.getUTCMonth() + 1).toString()
                var year = currentdate.getUTCFullYear().toString();

                var startDate = ( year + '-' + month + '-' + date );

                var next_date = ( currentdate.getDate() + 1 );


                var endDate = ( year + '-' + month + '-' + next_date );

                var CallList = [];
                var extension;
                callService.get_all_callDetails_data($http, $q, startDate, endDate, extension).then(function (data) {
                        $scope.all_calls_data = data;

                        for (var i = 0; i < data.length; i++) {
                            if (data[i].Duration > 0 && data[i].Duration != "") {
                                var callTime = parseInt(data[i].Duration);
                                total_call_duration = total_call_duration + callTime;
                            }
                        }
                        console.log(total_call_duration + ' Total call time in sec ');
                        var total_time_in_min = (total_call_duration / 60);
                        var total_time_in_hrs = (total_time_in_min / 60);
                        var total_time_in_mins = Math.round(total_time_in_min % 60)

                        $scope.total_calls = data.length;
                        $scope.total_time_hr = Math.round(total_time_in_hrs);
                        $scope.total_min = total_time_in_mins;

                    },
                    function () {

                        $scope.error = error;
                        $scope.loading = false;
                    });
            }





    })


.controller('ChatsCtrl', function($scope, Chats,$state,callService) {

  $scope.chats = Chats.all();
       $scope.getdata =  function getdata(chatId)
        {
            var chatid= chatId;
            var sdata =  $scope.start_date ;
            var edata = $scope.end_date ;
            if (sdata !== undefined || edata !== undefined )
            {
                var dd=  sdata.getDate();
                var mm = (sdata.getUTCMonth()).toString();
                var yy = sdata.getUTCFullYear().toString();
                var startDt = ( yy + '-'+ mm +'-' + dd ) ;

                var d=  edata.getDate();
                var m = (edata.getUTCMonth()).toString();;
                var y = edata.getUTCFullYear().toString();
                var endDt = ( y + '-'+ m +'-' + d ) ;


                $state.go('tab.chat-details',{'chatId':chatid,'startDate':startDt,'endDate':endDt});
            }

             else{
                $state.go('tab.chat-detail',{'chatId':chatid});

            }


        }


  $scope.remove = function(chat) {
      // Chats.remove(chat);
      $state.go('tab.agent-performance', {'chatId': chat.id});
  }
      })

.controller('AgentPerfCtrl', function($scope, Chats,$state,callService,$http,$q,$stateParams,$filter) {
        $scope.extention = Chats.get($stateParams.chatId);
       var extention = $stateParams.chatId;

        init()

        $scope.doRefreshAgentCall = function() {
            last_days_agent_calls();

            // Stop the ion-refresher from spinning
            $scope.$broadcast('scroll.refreshComplete');

        };

        function init(){
            last_days_agent_calls()
        }
      function last_days_agent_calls ()
      {
          var today_count=0;
          var ystr_count=0;
          var b_ystr_count=0;
          var currentdate = new Date();
          var yesterdate= new Date();
          var dbyesterdate = new Date();
          yesterdate = yesterdate.setDate(currentdate.getDate()-1) ;
          var dbyesterdate = dbyesterdate.setDate(currentdate.getDate()-2);
          $scope.Tmonth = $filter('date')(currentdate, 'MM');//December-November like
          $scope.Tday = $filter('date')(currentdate, 'dd'); //01-31 like
          $scope.Tyear = $filter('date')(currentdate,'yyyy');//2014 like
          $scope.Ymonth = $filter('date')(yesterdate, 'MM');//December-November like
          $scope.Yday = $filter('date')(yesterdate, 'dd'); //01-31 like
          $scope.Yyear = $filter('date')(yesterdate,'yyyy');//2014 like
          $scope.DBYmonth = $filter('date')(dbyesterdate, 'MM');//December-November like
          $scope.DBYday = $filter('date')(dbyesterdate, 'dd'); //01-31 like
          $scope.DBYyear = $filter('date')(dbyesterdate,'yyyy');//2014 like

          var today_startDate = ( $scope.Tyear + '-'+  $scope.Tmonth +'-' + $scope.Tday ) ;
          var yest_startDate = (  $scope.Yyear + '-'+ $scope.Ymonth +'-' +  $scope.Yday ) ;
          var day_b_yest_startDate = ( $scope.DBYyear + '-'+ $scope.DBYmonth +'-' + $scope.DBYday ) ;


          function getdata(){

              callService.get_all_prod_callDetails($http, $q ,today_startDate,today_startDate,extention).then(function (data) {
                  $scope.productive_calls_data = data;
                  today_count= data.length;
                  $scope.agent_today_count=data.length;
              });

              callService.get_all_prod_callDetails($http, $q ,yest_startDate,yest_startDate,extention).then(function (data) {
                  $scope.productive_calls_data = data;
                  ystr_count = data.length;
                  $scope.agent_yetr_count=data.length;
              });

              callService.get_all_prod_callDetails($http, $q ,day_b_yest_startDate,day_b_yest_startDate,extention).then(function (data) {
                  $scope.productive_calls_data = data;
                  b_ystr_count= data.length;
                  $scope.agent_byetr_count=data.length;

                  $scope.labell = ['Today','Yesterday','DB-Yesterday'];
                  $scope.series = ['Series D'];

                  $scope.dataa = [

                      [today_count,ystr_count,b_ystr_count]
                  ];
              });



          }

          getdata();


      }

})

.controller('ChatDetailCtrl', function($scope,$http, $q,
                                       callService, $stateParams, Chats,$filter) {
        var extention = Chats.get($stateParams.chatId);
     $scope.extention = Chats.get($stateParams.chatId);
        var sDate = $stateParams.startDate ;
        var eDate = $stateParams.endDate ;
       // sDate = $scope.start_date;
      //  var dt = new date(sDate);
        $scope.HeadDate =  $filter("date")(sDate, "dd/MM/yyyy");



        init();

        function init() {

            get_productive_call_data();
          //  get_all_call_data();
        }

        function get_productive_call_data() {

            if (sDate == undefined  || eDate == undefined )
            {

            var currentdate = new Date();

            var date =  currentdate.getUTCDate().toString();
            var month = (currentdate.getUTCMonth()+1).toString()
            var year = currentdate.getUTCFullYear().toString();

            var startDate = ( year + '-'+ month +'-' + date ) ;

            var next_date = ( currentdate.getDate() +1 );


            var endDate =  ( year + '-'+  month +'-' + next_date );

            var CallList= [];
            }
            else
            {
                var startDate = sDate ;
                var endDate = eDate;
                var CallList= [];
            }

            callService.get_all_prod_callDetails($http, $q ,startDate,endDate,extention.id).then(function (data) {
                    $scope.productive_calls_data = data;
                    var call_dur_count =[];
                    call_dur_count= data;
                    var prod_call_agent=[];
                    var less_sec30 =[];
                    var sec30_60 =[];
                    var sec61_120 =[];
                    var above_min2=[];
                    prod_call_agent = data;
                for (var i = 0; i < call_dur_count.length; i++) {
                    if( (parseInt(call_dur_count[i].Duration) <=30))
                    {
                        less_sec30.push(call_dur_count[i]);
                       // CallList.push(call_dur_count[i])
                    }
                    else  if( (parseInt(call_dur_count[i].Duration) >30) && (parseInt(call_dur_count[i].Duration) <=60))
                    {
                        sec30_60.push(call_dur_count[i]);
                       // CallList.push(call_dur_count[i])
                    }
                    else  if( (parseInt(call_dur_count[i].Duration) >60) && (parseInt(call_dur_count[i].Duration) <=120))
                    {
                        sec61_120.push(call_dur_count[i]);
                       // CallList.push(call_dur_count[i])
                    }
                    else  if   ( (parseInt(call_dur_count[i].Duration) >120))
                    {
                        above_min2.push(call_dur_count[i]);
                       // CallList.push(call_dur_count[i])
                    }

                }

                    for (var i = 0; i < prod_call_agent.length; i++) {
                        if ( ( prod_call_agent[i].Duration != "" )  )
                        {


                            if(  (parseInt(prod_call_agent[i].Duration) >=60))

                            {

                            var  call_dur_in_min = ( parseInt(prod_call_agent[i].Duration) / 60 )
                            var callmin =  parseInt(call_dur_in_min,10);
                            var sec=   (parseInt(prod_call_agent[i].Duration) % 60 );
                            prod_call_agent[i].call_dur_in_min= callmin +  ' minutes ' + sec + ' sec';

                            CallList.push(prod_call_agent[i]);

                            }
                           else

                            {

                            var  call_dur_in_sec = prod_call_agent[i].Duration ;
                            prod_call_agent[i].call_dur_in_min = call_dur_in_sec + ' seconds';
                            CallList.push(prod_call_agent[i]);
                             }
                        }

                    }
                    $scope.less_sec30 = less_sec30.length;
                    $scope.sec30_60 = sec30_60.length;
                    $scope.min1_min2 = sec61_120.length;
                    $scope.above_min2 = above_min2.length;
                    $scope.call_lists = CallList;
                    for (var i = 0; i < CallList.length; i++)
                    {
                        $scope.calltime_in_min = (CallList[i].Duration/60);
                    }


                    var total_call_duration = 0 ;
                    for ( var i = 0; i < data.length; i++)
                    {
                        if( (data[i].Duration !="") )
                        {
                            var callTime = parseInt(data[i].Duration);
                            total_call_duration = total_call_duration + callTime ;
                        }


                    }
                    var total_time_in_min = (total_call_duration / 60);
                    var totl_min= parseInt(total_time_in_min,10);
                    var total_time_in_hrs;
                    var total_time_in_mins
                    if(totl_min >=60 )
                    {
                      //  var total_time_in_hrs = ( total_time_in_min / 60);
                         total_time_in_hrs = ( totl_min / 60);
                         total_time_in_mins = Math.round(totl_min % 60)
                    }
                    else{
                        total_time_in_hrs = 0;
                        total_time_in_mins = Math.round(totl_min % 60)
                    }


//                   function convertToHHMM(total_time_in_min) {
//                        var hrs = parseInt( total_time_in_min / 60);
//                        var min = Math.round((Number(total_time_in_min)-hrs) * 60);
//                        return hrs+':'+min;

//                    }

                  var productive_calls_data_agent=[];
                productive_calls_data_agent= data;
                   // var total_ord_qty = 0;
                    angular.forEach(productive_calls_data_agent, function(item) {
                        $scope.mobile_number=  item.Destination;

                        });

                    $scope.total_productive_calls = data.length ;
                    $scope.total_productive_time_hr = Math.round(total_time_in_hrs) ;
                    $scope.total_productive_time_min = total_time_in_mins ;
                    $scope.labels = ['Performance'];
                    $scope.series = ['Series A','Series B'];

                    $scope.callcount = [
                        [100],
                        [data.length]
                    ];
                    $scope.label = ['Less-30sec','31sec-60sec','61sec-120sec','Above-2min'];
                    $scope.series = ['Series C'];

                    $scope.calltime = [

                         [less_sec30.length,sec30_60.length,sec61_120.length,above_min2.length]
                    ];
                    $scope.chartParams = {

                        colours: [{fillColor:["#FF0000", "#00FF00", "#0000FF", "#00FFFF", "#FFFF00"]}]


                    };

                },
                function () {
                    //Display an error message
                    $scope.error = error;
                    $scope.loading = false;
                });
        }





        function get_all_call_data() {
            var currentdate = new Date();

            var date =  currentdate.getUTCDate().toString();
            var month = (currentdate.getUTCMonth()+1).toString()
            var year = currentdate.getUTCFullYear().toString();

            var startDate = ( year + '-'+ month +'-' + date ) ;

            var next_date = ( currentdate.getDate() +1 );


            var endDate =  ( year + '-'+  month +'-' + next_date );

            var CallList= [];

            callService.get_all_callDetails_data($http, $q ,startDate,endDate,extention.id).then(function (data) {
                    $scope.all_calls_data = data;
                    var all_call_agent=[];
                    all_call_agent = data;
                    for (var i = 0; i < all_call_agent.length; i++) {
                        if ( all_call_agent[i].Duration !== "" )
                        {
                            if( (all_call_agent[i].Duration !=="") && (parseInt(all_call_agent[i].Duration) >=60))

                            {
                                var  call_dur_in_min = ( parseInt(all_call_agent[i].Duration) / 60 )
                                var callmin =  parseInt(call_dur_in_min,10);
                                var sec=   (parseInt(prod_call_agent[i].Duration) % 60 );
                                prod_call_agent[i].call_dur_in_min= callmin +  ' minutes ' + sec + ' sec';
                                //   prod_call_agent[i].call_dur_in_min= call_dur_in_min +  ' minutes ' + sec + ' sec';

                                // prod_call_agent[i].push( 'call_in_min',call_in_min);
                                //  prod_call_agent[i].push()
                                CallList.push(prod_call_agent[i]);
                                //  CallList.push("Call_in_min",call_in_min);
                                // CallList.push( )

                            }
                            else

                            {
                                var  call_dur_in_sec = prod_call_agent[i].Duration ;
                                prod_call_agent[i].call_dur_in_min = call_dur_in_sec + ' seconds';
                                CallList.push(prod_call_agent[i]);
                            }
                        }

                    }
                    $scope.call_lists=CallList;
                    for (var i = 0; i < CallList.length; i++)
                    {
                        $scope.calltime_in_min = (CallList[i].Duration/60);
                    }


                    var total_call_duration = 0 ;
                    for ( var i = 0; i < data.length; i++)
                    {
                        if(data[i].Duration !=="")
                        {
                            var callTime = parseInt(data[i].Duration);
                            total_call_duration = total_call_duration + callTime ;
                        }


                    }
                    var total_time_in_min = (total_call_duration / 60);
                    var totl_min= parseInt(total_time_in_min,10);
                    if(totl_min >=60 )
                    {
                        var total_time_in_hrs = ( total_time_in_min / 60);
                        var total_time_in_mins = Math.round(total_time_in_min % 60)
                    }


//                   function convertToHHMM(total_time_in_min) {
//                        var hrs = parseInt( total_time_in_min / 60);
//                        var min = Math.round((Number(total_time_in_min)-hrs) * 60);
//                        return hrs+':'+min;

//                    }

                    var productive_calls_data_agent=[];
                    productive_calls_data_agent= data;
                    // var total_ord_qty = 0;
                    angular.forEach(productive_calls_data_agent, function(item) {
                        $scope.mobile_number=  item.Destination;

                    });

                    $scope.total_calls = data.length ;
                    $scope.total_productive_time_hr = Math.round(total_time_in_hrs) ;
                    $scope.total_productive_time_min = total_time_in_mins ;

                },
                function () {
                    //Display an error message
                    $scope.error = error;
                    $scope.loading = false;
                });
        }



    })

    .controller('ChatsCtrl', function($scope, Chats,$state,$filter) {


        $scope.chats = Chats.all();
        $scope.getdata =  function getdata(chatId)
        {
            var chatid= chatId;
            var sdata =  $scope.start_date ;
            var edata = $scope.end_date ;

            if (sdata !== undefined || edata !== undefined )
            {

                $scope.Smonth = $filter('date')(sdata, 'MM');//December-November like
                $scope.Sday = $filter('date')(sdata, 'dd'); //01-31 like
                $scope.Syear = $filter('date')(sdata,'yyyy');//2014 like

                $scope.Emonth = $filter('date')(edata, 'MM');//December-November like
                $scope.Eday = $filter('date')(edata, 'dd'); //01-31 like
                $scope.Eyear = $filter('date')(edata,'yyyy');//2014 like

                var startDt = ( $scope.Syear + '-' + $scope.Smonth + '-' +  $scope.Sday );


                var endDt = ($scope.Eyear + '-' +  $scope.Emonth + '-' + $scope.Eday );


                $state.go('tab.chat-details',{'chatId':chatid,'startDate':startDt,'endDate':endDt});
            }

            else{
                $state.go('tab.chat-detail',{'chatId':chatid});

            }


        }


        $scope.remove = function(chat) {
            $state.go('tab.agent-performance', {'chatId': chat.id});


        };
    })


    .controller('MissedCallCtrl', function($scope,callService,$state,$http,$q,$filter) {


        init();

        $scope.doRefreshMissCall = function() {
            last_days_missedcall();

            // Stop the ion-refresher from spinning
            $scope.$broadcast('scroll.refreshComplete');

        };


        function init() {

            last_days_missedcall();

        }

        $scope.get_missed_call_data=  function ()
        {
            var startDate = $scope.s_date;
            var endDate = $scope.e_date;
            $scope.Smonth = $filter('date')(startDate, 'MM');//December-November like
            $scope.Sday = $filter('date')(startDate, 'dd'); //01-31 like
            $scope.Syear = $filter('date')(startDate,'yyyy');//2014 like

            $scope.Emonth = $filter('date')(endDate, 'MM');//December-November like
            $scope.Eday = $filter('date')(endDate, 'dd'); //01-31 like
            $scope.Eyear = $filter('date')(endDate,'yyyy');//2014 like

            var startDt = ( $scope.Syear + '-' + $scope.Smonth + '-' +  $scope.Sday );


            var endDt = ($scope.Eyear + '-' +  $scope.Emonth + '-' + $scope.Eday );
            $state.go('tab.missedCallDetail', {'startDate': startDt, 'endDate': endDt});
        }


   function last_days_missedcall ()
        {
            var today_count=0;
            var ystr_count=0;
            var b_ystr_count=0;
            var currentdate = new Date();
            var yesterdate= new Date();
            var dbyesterdate = new Date();
            yesterdate = yesterdate.setDate(currentdate.getDate()-1) ;
            var dbyesterdate = dbyesterdate.setDate(currentdate.getDate()-2);
            $scope.Tmonth = $filter('date')(currentdate, 'MM');//December-November like
            $scope.Tday = $filter('date')(currentdate, 'dd'); //01-31 like
            $scope.Tyear = $filter('date')(currentdate,'yyyy');//2014 like
            $scope.Ymonth = $filter('date')(yesterdate, 'MM');//December-November like
            $scope.Yday = $filter('date')(yesterdate, 'dd'); //01-31 like
            $scope.Yyear = $filter('date')(yesterdate,'yyyy');//2014 like
            $scope.DBYmonth = $filter('date')(dbyesterdate, 'MM');//December-November like
            $scope.DBYday = $filter('date')(dbyesterdate, 'dd'); //01-31 like
            $scope.DBYyear = $filter('date')(dbyesterdate,'yyyy');//2014 like

            var today_startDate = ( $scope.Tyear + '-'+  $scope.Tmonth +'-' + $scope.Tday ) ;
            var yest_startDate = (  $scope.Yyear + '-'+ $scope.Ymonth +'-' +  $scope.Yday ) ;
            var day_b_yest_startDate = ( $scope.DBYyear + '-'+ $scope.DBYmonth +'-' + $scope.DBYday ) ;

            function getdata(){

                callService.get_missed_call_data($http, $q, today_startDate, today_startDate).then(function (data) {
                    $scope.today_misscall_count = data.length;
                    today_count= data.length;
                });

                callService.get_missed_call_data($http, $q, yest_startDate, yest_startDate).then(function (data) {
                    $scope.yest_misscall_count = data.length;
                    ystr_count = data.length;
                });

                callService.get_missed_call_data($http, $q, day_b_yest_startDate, day_b_yest_startDate).then(function (data) {
                    $scope.yes_b_misscall_count = data.length;
                    b_ystr_count= data.length;

                    $scope.labell = ['Today','Yesterday','DB-Yesterday'];
                    $scope.series = ['Series D'];

                    $scope.dataa = [

                        [today_count,ystr_count,b_ystr_count]
                    ];
                });



            }

         getdata();


        }



    })
.controller('MissedCallDetailCtrl', function($scope,callService,$state,$stateParams,$http,$q) {

                init();

                function init() {

                    get_missed_call_details()

                }

                function get_missed_call_details() {
                    var sDate = $stateParams.startDate;
                    var eDate = $stateParams.endDate;



                    var CallList = [];
                    callService.get_missed_call_data($http, $q, sDate, eDate).then(function (data) {
                            $scope.missed_calls_data = data;
                            $scope.missed_call_count = data.length;
                            var missed_call_agent = [];
                            missed_call_agent = data;
                            for (var i = 0; i < missed_call_agent.length; i++) {


                                var callTime = missed_call_agent[i].Calling_time;
                                var callFrom = missed_call_agent[i].Destination;


                                CallList.push(missed_call_agent[i]);

                            }
                        },
                        function () {
                            //Display an error message
                            $scope.error = error;
                            $scope.loading = false;
                        });

                    $scope.missed_call_lists = CallList;

//  }
                }



})
