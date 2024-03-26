//Create objects for common properties across available frames
var bounds = {x:0.5673, y:0.8848, width:0.188, height:0.0733};
var ubBounds = {x:863/1500, y:1864/2100, width:268/1500, height:134/2100};
//defines available frames
availableFrames = [
	{name:'White Evolved P/T', src:'/img/frames/m15/nickname/m15NicknamePTW.png', bounds:bounds},
	{name:'Blue Evolved P/T', src:'/img/frames/m15/nickname/m15NicknamePTU.png', bounds:bounds},
	{name:'Black Evolved P/T', src:'/img/frames/m15/nickname/m15NicknamePTB.png', bounds:bounds},
	{name:'Red Evolved P/T', src:'/img/frames/m15/nickname/m15NicknamePTR.png', bounds:bounds},
	{name:'Green Evolved P/T', src:'/img/frames/m15/nickname/m15NicknamePTG.png', bounds:bounds},
	{name:'Multicolored Evolved P/T', src:'/img/frames/m15/nickname/m15NicknamePTM.png', bounds:bounds},
	{name:'Artifact Evolved P/T', src:'/img/frames/m15/nickname/m15NicknamePTA.png', bounds:bounds},
	{name:'Colorless Evolved P/T', src:'/img/frames/m15/nickname/m15NicknamePTC.png', bounds:bounds},
	{name:'UB White Evolved P/T', src:'/img/frames/lotr/pt/w.png', bounds:ubBounds},
	{name:'UB Blue Evolved P/T', src:'/img/frames/lotr/pt/u.png', bounds:ubBounds},
	{name:'UB Black Evolved P/T', src:'/img/frames/lotr/pt/b.png', bounds:ubBounds},
	{name:'UB Red Evolved P/T', src:'/img/frames/lotr/pt/r.png', bounds:ubBounds},
	{name:'UB Green Evolved P/T', src:'/img/frames/lotr/pt/g.png', bounds:ubBounds},
	{name:'UB Multicolored Evolved P/T', src:'/img/frames/lotr/pt/m.png', bounds:ubBounds},
	{name:'UB Artifact Evolved P/T', src:'/img/frames/lotr/pt/a.png', bounds:ubBounds},
	{name:'UB Colorless Evolved P/T', src:'/img/frames/lotr/pt/l.png', bounds:ubBounds}
];
//disables/enables the "Load Frame Version" button
document.querySelector('#loadFrameVersion').disabled = false;
//defines process for loading this version, if applicable
document.querySelector('#loadFrameVersion').onclick = async function() {
	//text
	loadTextOptions({
		evolved_pt: {name: 'Evolved P/T', text:'', x:0.6048, y:0.894, width:0.1367, height:0.0372, size:0.0302, font:'belerenbsc', oneLine:true, align:'center', color:'white', shadowX:-0.0007, shadowY:-0.001},
		evolved_stamp: {name: 'Evolved P/T Stamp', text:'EVOLVED', x:0.6048, y:0.917, width:0.1367, height:0.0272, size:0.0152, font:'belerenbsc', oneLine:true, align:'center', color:'white', shadowX:-0.0007, shadowY:-0.001},
		preevo: {name: 'Evolves From', text:'', size:0.0001, height:0.0001, width:0.0001}
	}, false);
	if (card.text && card.text['mutate']) {
		loadTextOptions({
		mutate: {name:'Evolve Cost', text:"Evolve from {pre} {20} {i}(If you cast this spell for its evolve cost, put it over target creature you own named {pre}. They evolve into {cardname} with base power and toughness {evolved_pt} plus {pre}'s abilities.){/i}", x:0.086, y:0.6303, width:0.828, height:0.1215, size:0.0291},
		}, false);
	}
}
//loads available frames
loadFramePack();
//Only for the main version as the webpage loads:
if (!card.text) {
	document.querySelector('#loadFrameVersion').click();
}