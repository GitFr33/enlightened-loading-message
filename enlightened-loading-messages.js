
<script>

// This was suposed tp be a gloabal function for all ajax targets but I haven't gotten around to figguring out how to detect what element is being targeted yet. I'm sure it's possible but there is no mention of it here: https://api.jquery.com/ajaxStart/ 
// In the mean-time element_id on line 14 has to be set to the right id. Of course it's kind of usless like this so it needs work.

// Smart things to say while loading
var wizbits = ["Patience. Good things are loading.","Good things come to those that wait.","Ask and yea shall recieve. (eventually.)","Another perfect opportunity to be in the present moment!","Time to do some breathing.","We are developing patience...","Take a deep breath.", "All in good time...",""];
// Smat things to say when loading is taking a long time
var apologies = ["A humbfelt appologies from the developers for the delay", "We're working on it :|","Sorry it's taking so long.","Wow this is SLOW TO LOAD!","Any minute now..."];

function showLoading(){
  wizbit = wizbits[Math.floor(Math.random()*wizbits.length)];
  $("#element_id").prepend("<div id=\"loading_message\" align=\"center\"><br /><br /><br />\
  <img src='images/loading.gif'> <br /><br /> "+wizbit+"<br /><br /><span id=\"apology\"></span></div>");

  setTimeout(function(){
    apology = apologies[Math.floor(Math.random()*apologies.length)];
    $('#apology').text(apology);
  },4000)
}

function removeLoading(){
  $('#loading_message').fadeOut();
}

// Maybe thease should be in an onload??

$(document).ajaxStart(function() {
  showLoading();
});

$(document).ajaxComplete(function() {
  removeLoading();
});

</script>
