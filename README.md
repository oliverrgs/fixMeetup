# fixMeetup
Fix Meetup's UI

copypaste this into the console

setInterval(() => {
	$(".text--labelSecondary:first-child").toggle(false);
	$(".event-listing").css("padding","0px");
	$(".chunk").removeClass("chunk")
	$("span").css("white-space","nowrap");;
	$(".text--secondary").css("max-width","350px").css("min-width","80px").css("float","right");
	$("#C_pageBody").css("width","1600px");
},5000);
