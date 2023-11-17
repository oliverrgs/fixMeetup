
var styles=`
.flex.flex-col picture {
display:none !important;
}


 .flex.flex-col .w-full.text-sm.mx-auto.mb-2  {
display:none;
}
.flex.flex-col .flex.flex-row-reverse > div {
	height:26px;
}

 .flex.flex-col .mb-16  {
margin-bottom:3px;
}

#main .flex > .w-full {
	width:60vw !important;
	max-width: 60vw !important;
 }
 .flex.flex-col .md:flex-row p, .flex.flex-col .md:flex-row div {
  display:inline-block;
}
 .flex.flex-col .text-base {
  line-height:.85rem;  max-width: 36vw;
  white-space: nowrap;
  overflow: hidden;
  margin-right: 10px;
}
.flex.flex-row-reverse.flex-1.overflow-hidden > .bg-transparent {
	display:none;
}

 .flex.flex-col div  {
padding:0px !important;
}
.flex.flex-col.text-base {
line-height:auto !important;
}

 .flex.flex-col .bg-white.ml-3:first-child {
	display:none;
}

.relative.overflow-hidden.bg-transparent.w-full {
	height:auto !important;
}

 .p-0.bg-clip-padding.bg-cover.relative.h-full {
 padding:0px;
}
 .overflow-hidden.w-full > * {
	padding:0px;
	display:inline-block;
	padding-left:10px;	
}
.w-full .overflow-hidden.w-full {
display:block;
float:left;
}


.w-full .relative .w-full > * {
	display:inline-block !important;
	height:20px;
	margin-righT:15px;
}

.w-full .relative .w-full .block.xmedia {
	display:none !important;
}
.max-w-narrow{
max-width:100% !important;
}
 .flex.flex-col .max-w-narrow{
padding-bottom:50vh !important;
}
 .text-sm.text-primary.font-medium {
display:none;
}
 .mb-10 {
margin-bottom: .2rem
}
`
setTimeout(()=>{
	var styleSheet = document.createElement("style")
	styleSheet.innerText = styles
	document.head.appendChild(styleSheet)
	let main = document.getElementById("main") 
	if(main){
	 document.getElementById("main").classList="" 
	}
},1000);
setTimeout(()=>{
	let expandyy = document.querySelector(".text-sm.text-viridian.font-medium.flex.items-center.gap-x-2");
	if(expandyy && expandyy.getAttribute("data-element-name") == "eventSearchMap-expandButton"){
		expandyy.click()
	}
},3000);