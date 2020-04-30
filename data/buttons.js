function waterSection(radioValue, timeValue) {
    'use strict';
      var sturl="/section/"
      var sturl2="/time/"
      var url=sturl+radioValue+sturl2+timeValue;
       $.ajax(url, { cache: false });
    //here we start watering
}

function startProgram(programNo) {
    'use strict';
    alert("Chosen program " + programNo  + "starting");
    var sturl="/program/"
 
   var url=sturl+programNo;
       $.ajax(url, { cache: false });
    
 }

$(document).ready(function () {
    'use strict';
    
    //we add click listeners on buttons specified by id
    $('#startProgram').click(function () {
        var programNo = $("input[name='programNo']:checked").val();
        if (programNo) {startProgram(programNo); }
    });

    $('#waterSection').click(function () {
        var radioValue = $("input[name='secnum']:checked").val(),
            timeValue = $("input[name='timeval']:checked").val();

        if (radioValue && timeValue) {
            alert("Selected section number " + radioValue + "selected time:" + timeValue);
            waterSection(radioValue, timeValue);
        }
    });

    $('#kill-button').click(function () {
        alert("Stopping all");
          var sturl="/stopAll"
   var url=sturl;
       $.ajax(url, { cache: false });
    });
});