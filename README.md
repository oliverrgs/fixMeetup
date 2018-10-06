# fixMeetup
Fix Meetup's UI

Display 10x as many results at one time

copypaste this into the console

	setInterval(() => {

	$(".text--labelSecondary:first-child").toggle(false);
	
	$(".event-listing").css("padding","0px");
	
	$(".chunk").removeClass("chunk");
	
	$("span").css("white-space","nowrap");;
	
	$(".text--secondary").css("max-width","350px").css("min-width","80px").css("float","right").css("white-space","nowrap");;

	$("#C_pageBody").css("width","1600px");
	
	$(".mt-alert").toggle(false);

	},1000);
