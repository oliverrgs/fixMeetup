
var styles=`
.flex.flex-col picture {
display:none !important;
}


 .flex.flex-col .w-full.text-sm.mx-auto.mb-2  {
display:none;
}
.flex.flex-col .flex.flex-row-reverse > div {
	height:19px;
}

 .flex.flex-col .mb-16  {
margin-bottom:3px;
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

 .flex.flex-col div  {
padding:0px !important;
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
},1000);