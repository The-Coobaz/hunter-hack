$(document).ready(function () {
    'use strict';

    function waterSection(sectionValue, timeValue) {
        var b = sectionValue * timeValue;
        return b;
        //here we start watering
    }

    function startProgram(programNo) {
        alert("Chosen program " + programNo  + "starting");
    }

    //we add click listeners on buttons specified by id
    $('#waterSection').click(function(){
        var sectionValue = $("input[name='secnum']:checked").val(),
            timeValue = $("input[name='timeval']:checked").val();

        if (sectionValue && timeValue) {
            alert("Selected section number " + sectionValue + "selected time:" + timeValue);
            waterSection(sectionValue, timeValue);
        }
    });

    $('#startProgram').click(function(){
        var programNo = $("input[name='programNo']:checked").val();
        if (programNo) {startProgram(programNo); }
    });

    $('#kill-button').click(function(){
        alert("Stopping all");
    });
});