//Create objects for common properties across available frames
var bounds = {x:0.5673, y:0.8848, width:0.188, height:0.0733};
var ubBounds = {x:863/1500, y:1864/2100, width:268/1500, height:134/2100};
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
	{name:'UB White Mutated P/T', src:'/img/frames/lotr/pt/w.png', bounds:ubBounds},
	{name:'UB Blue Mutated P/T', src:'/img/frames/lotr/pt/u.png', bounds:ubBounds},
	{name:'UB Black Mutated P/T', src:'/img/frames/lotr/pt/b.png', bounds:ubBounds},
	{name:'UB Red Mutated P/T', src:'/img/frames/lotr/pt/r.png', bounds:ubBounds},
	{name:'UB Green Mutated P/T', src:'/img/frames/lotr/pt/g.png', bounds:ubBounds},
	{name:'UB Multicolored Mutated P/T', src:'/img/frames/lotr/pt/m.png', bounds:ubBounds},
	{name:'UB Artifact Mutated P/T', src:'/img/frames/lotr/pt/a.png', bounds:ubBounds},
	{name:'UB Colorless Mutated P/T', src:'/img/frames/lotr/pt/l.png', bounds:ubBounds}
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