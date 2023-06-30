//Create objects for common properties across available frames
var bounds = {x:0.5673, y:0.8848, width:0.188, height:0.0733};
//defines available frames
availableFrames = [
	{name:'White Mutated P/T', src:'/img/frames/m15/nickname/m15NicknamePTW.png', bounds:bounds},
	{name:'Blue Mutated P/T', src:'/img/frames/m15/nickname/m15NicknamePTU.png', bounds:bounds},
	{name:'Black Mutated P/T', src:'/img/frames/m15/nickname/m15NicknamePTB.png', bounds:bounds},
	{name:'Red Mutated P/T', src:'/img/frames/m15/nickname/m15NicknamePTR.png', bounds:bounds},
	{name:'Green Mutated P/T', src:'/img/frames/m15/nickname/m15NicknamePTG.png', bounds:bounds},
	{name:'Multicolored Mutated P/T', src:'/img/frames/m15/nickname/m15NicknamePTM.png', bounds:bounds},
	{name:'Artifact Mutated P/T', src:'/img/frames/m15/nickname/m15NicknamePTA.png', bounds:bounds},
	{name:'Colorless Mutated P/T', src:'/img/frames/m15/nickname/m15NicknamePTC.png', bounds:bounds},
	{name:'Dark White Mutated P/T', src:'/img/frames/m15/ub/regular/ubDarkPTW.png', bounds:bounds},
	{name:'Dark Blue Mutated P/T', src:'/img/frames/m15/ub/regular/ubDarkPTU.png', bounds:bounds},
	{name:'Dark Black Mutated P/T', src:'/img/frames/m15/ub/regular/ubDarkPTB.png', bounds:bounds},
	{name:'Dark Red Mutated P/T', src:'/img/frames/m15/ub/regular/ubDarkPTR.png', bounds:bounds},
	{name:'Dark Green Mutated P/T', src:'/img/frames/m15/ub/regular/ubDarkPTG.png', bounds:bounds},
	{name:'Dark Multicolored Mutated P/T', src:'/img/frames/m15/ub/regular/ubDarkPTM.png', bounds:bounds},
	{name:'Dark Artifact Mutated P/T', src:'/img/frames/m15/ub/regular/ubDarkPTA.png', bounds:bounds},
	{name:'Dark Colorless Mutated P/T', src:'/img/frames/m15/ub/regular/ubDarkPTC.png', bounds:bounds}
];
//disables/enables the "Load Frame Version" button
document.querySelector('#loadFrameVersion').disabled = false;
//defines process for loading this version, if applicable
document.querySelector('#loadFrameVersion').onclick = async function() {
	//text
	loadTextOptions({
		mutated_pt: {name: 'Mutated P/T', text:'', x:0.6048, y:0.894, width:0.1367, height:0.0372, size:0.0302, font:'belerenbsc', oneLine:true, align:'center', color:'white', shadowX:-0.0007, shadowY:-0.001},
		mutated_stamp: {name: 'Mutated P/T Stamp', text:'MUTATED', x:0.6048, y:0.917, width:0.1367, height:0.0272, size:0.0152, font:'belerenbsc', oneLine:true, align:'center', color:'white', shadowX:-0.0007, shadowY:-0.001},
		preevo: {name: 'Evolves From', text:'', size:0.0001, height:0.0001, width:0.0001}
	}, false);
	if (card.text && card.text['mutate']) {
		loadTextOptions({
		mutate: {name:'Mutate Cost', text:"Mutate onto {pre} {20} {i}(If you cast this spell for its mutate cost, put it over target creature you own named {pre}. They mutate into {cardname} with base power and toughness {mutated_pt} plus {pre}'s abilities.){/i}", x:0.086, y:0.6303, width:0.828, height:0.1215, size:0.0291},
		}, false);
	}
}
//loads available frames
loadFramePack();
//Only for the main version as the webpage loads:
if (!card.text) {
	document.querySelector('#loadFrameVersion').click();
}