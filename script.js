$(document).ready(function () {
    "use strict";
    var $programNo;
    var $timeval;
    var $secnum;
    var $killButton = $('#kill-button');
   
$waterSection($secnum, $timeval)(); {
    $secnum = ("input[name='$secnum']:checked").val();
    $timeval = ("input[name='$timeval']:checked").val();
   if ($secnum && $timeval)  { alert("Watering "+$secnum+" section for "+$timeval+" minutes")}}
  
});