# fixMeetup
Fix Meetup's UI

Display 10x as many results at one time

copypaste this into the console

	function checkVisible( elm, evalType ) {
		evalType = evalType || "visible";

		var vpH = $(window).height(), // Viewport Height
			st = $(window).scrollTop(), // Scroll Top
			y = $(elm).offset().top,
			elementHeight = $(elm).height();

		if (evalType === "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
		if (evalType === "above") return ((y < (vpH + st)));
	}



	window.onscroll = function (e) {  
		if(checkVisible($(".simple-infinite-pager"))){
			$(".simple-infinite-pager").click();
			for(var i = 0;i<10;i++){
				setTimeout(()=>{
					fixMeetup();
				},i*100);
			}
		}
	} 
	function fixMeetup(){
		var day = "";
		$("li").each(function(iii,obbbj){
			if($(obbbj).is(".date-indicator")){
				day = $(obbbj).text().trim().substr(0,3)+"__ ";
			}
			if($(obbbj).is(".row.event-listing")){
				if(!$(obbbj).hasClass("appended")){
					$(obbbj).addClass("appended");
					$(obbbj).prepend(day);
				}
			}
		});
		$(".text--labelSecondary:first-child").toggle(false);
		$(".event-listing").css("padding","0px");
		$(".chunk").removeClass("chunk")
		$("span").css("white-space","nowrap");;
		$(".text--secondary").css("max-width","350px").css("min-width","80px").css("float","right").css("white-space","nowrap");;
		$("#C_pageBody").css("width","1600px");
		$(".mt-alert").toggle(false);
	}
	setInterval(() => {
		fixMeetup();
	},10000);

	fixMeetup();
