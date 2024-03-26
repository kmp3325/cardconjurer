//Create objects for common properties across available frames
var masks3 = [{src:'/img/frames/m15/nickname/m15MaskNicknameTitleStrokeless.png', name:'Pinline'}, {src:'/img/frames/m15/nickname/m15NicknameMaskTrueName.png', name:'True Title'}];
var bounds3 = {height: 0.1053, width: 0.43333333333333335, x: 0.5086666666666667, y: 0.0405};
//defines available frames
availableFrames = [
	{name:'White Top Evolve', src:'/img/frames/m15/nickname/addons/m15NicknameTitleW.png', masks:masks3, bounds:bounds3},
	{name:'Blue Top Evolve', src:'/img/frames/m15/nickname/addons/m15NicknameTitleU.png', masks:masks3, bounds:bounds3},
	{name:'Black Top Evolve', src:'/img/frames/m15/nickname/addons/m15NicknameTitleB.png', masks:masks3, bounds:bounds3},
	{name:'Red Top Evolve', src:'/img/frames/m15/nickname/addons/m15NicknameTitleR.png', masks:masks3, bounds:bounds3},
	{name:'Green Top Evolve', src:'/img/frames/m15/nickname/addons/m15NicknameTitleG.png', masks:masks3, bounds:bounds3},
	{name:'Multicolored Top Evolve', src:'/img/frames/m15/nickname/addons/m15NicknameTitleM.png', masks:masks3, bounds:bounds3},
	{name:'Artifact Top Evolve', src:'/img/frames/m15/nickname/addons/m15NicknameTitleA.png', masks:masks3, bounds:bounds3},
	{name:'Land Top Evolve', src:'/img/frames/m15/nickname/addons/m15NicknameTitleL.png', masks:masks3, bounds:bounds3}
	];
//disables/enables the "Load Frame Version" button
document.querySelector('#loadFrameVersion').disabled = true;
//defines process for loading this version, if applicable
document.querySelector('#loadFrameVersion').onclick = null;
//loads available frames
loadFramePack();
addTextbox("TopEvolve");