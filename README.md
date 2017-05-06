# Enlightened Loading Message
Show intelegent (and amusing) messages while Jquery loads your Ajax. 

This is inteded to be a gloabal function for all ajax targets but I haven't gotten around to figguring out how to detect what element is being targeted yet. I'm sure it's possible but there is no mention of it here: https://api.jquery.com/ajaxStart/ 

In the mean-time element_id on line 14 has to be set to the id of the element that is being targeted by .load(). Of course it's kind of usless like this, so it needs work. :P
