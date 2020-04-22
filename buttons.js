/*global alert, console, $ */
/* eslint-env browser */
function waterSection(radioValue, timeValue) {
    'use strict';
    var b = radioValue * timeValue;
    return b;
		//here we start watering
}
function startProgram(programNo) {
    'use strict';
    alert("Chosen program " + programNo  + "starting");
}

$(document).ready(function () {
    'use strict';
    //start program
    ("input[type='button']").click(function () {
        var programNo = ("input[name='program']:checked").val();
        if (programNo) {startProgram(programNo); }
    }("input[type='button']").click(function () {
        var radioValue = ("input[name='secnum']:checked").val(),
            timeValue = ("input[name='time']:checked").val();
					
        if (radioValue && timeValue) {
            alert("Selected section number " + radioValue + "selected time:" + timeValue);
            waterSection(radioValue, timeValue);
        }
        ("input[type='button']").click(function () {
            var stopAll = ("input[name='stopAll']:checked").val();
            if (stopAll) { alert("Stopping all");
                stopAll(); }
        });
    }
        ));
});