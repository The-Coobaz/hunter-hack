function waterSection(sectionValue, timeValue) {
    'use strict';
    var b = sectionValue * timeValue;
    return b;
    //here we start watering
}

function startProgram(programNo) {
    'use strict';
    alert("Chosen program " + programNo  + "starting");
}

$(document).ready(function () {
    'use strict';
    
    //we add click listeners on buttons specified by id
    $('#startProgram').click(function(){
        var programNo = $("input[name='programNo']:checked").val();
        if (programNo) {startProgram(programNo); }
    });

    $('#waterSection').click(function(){
        var sectionValue = $("input[name='secnum']:checked").val(),
            timeValue = $("input[name='timeval']:checked").val();

        if (sectionValue && timeValue) {
            alert("Selected section number " + sectionValue + "selected time:" + timeValue);
            waterSection(sectionValue, timeValue);
        }
    });

    $('#kill-button').click(function(){
        alert("Stopping all");
    });
});