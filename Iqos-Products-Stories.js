(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.BG01 = function() {
	this.initialize(img.BG01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.black = function() {
	this.initialize(img.black);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,1000);


(lib.bondsblue = function() {
	this.initialize(img.bondsblue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,1000);


(lib.c01 = function() {
	this.initialize(img.c01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,19);


(lib.c02 = function() {
	this.initialize(img.c02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,19);


(lib.deviceveev = function() {
	this.initialize(img.deviceveev);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,1000);


(lib.Findmore = function() {
	this.initialize(img.Findmore);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,29);


(lib.ground4320 = function() {
	this.initialize(img.ground4320);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.line03 = function() {
	this.initialize(img.line03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.NEW = function() {
	this.initialize(img.NEW);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,49);


(lib.price = function() {
	this.initialize(img.price);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,98);


(lib.prime01 = function() {
	this.initialize(img.prime01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,179);


(lib.prime02 = function() {
	this.initialize(img.prime02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,178);


(lib.prime03 = function() {
	this.initialize(img.prime03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,177);


(lib.prime04 = function() {
	this.initialize(img.prime04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,180);


(lib.primeb1 = function() {
	this.initialize(img.primeb1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,23,23);


(lib.primeb2 = function() {
	this.initialize(img.primeb2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,23,23);


(lib.primeb3 = function() {
	this.initialize(img.primeb3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,23,23);


(lib.primeb4 = function() {
	this.initialize(img.primeb4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,23,23);


(lib.red = function() {
	this.initialize(img.red);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,1000);


(lib.text01 = function() {
	this.initialize(img.text01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,223,73);


(lib.txtbonds = function() {
	this.initialize(img.txtbonds);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,29);


(lib.txtilumai = function() {
	this.initialize(img.txtilumai);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,28);


(lib.txtveev = function() {
	this.initialize(img.txtveev);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,28);


(lib.VEEV_VEEVNOW_VNVNL23_VVVNRLDCE2DiscoverVeevNowTile1Grid1GD2x_Web_enoc = function() {
	this.initialize(img.VEEV_VEEVNOW_VNVNL23_VVVNRLDCE2DiscoverVeevNowTile1Grid1GD2x_Web_enoc);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3840,1080);


(lib.warning = function() {
	this.initialize(img.warning);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,53);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.warning_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.warning();
	this.instance.setTransform(-160,-26.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.warning_1, new cjs.Rectangle(-160,-26.7,160,26.5), null);


(lib.stageBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.149)").s().p("A6KNcIAA63MA0VAAAIAAa3g");
	this.shape.setTransform(-0.5,162.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stageBtn, new cjs.Rectangle(-168,76.1,335,171.9), null);


(lib.price_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.price();
	this.instance.setTransform(-48.5,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.price_1, new cjs.Rectangle(-48.5,-49,97,98), null);


(lib._new = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.NEW();
	this.instance.setTransform(-48,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._new, new cjs.Rectangle(-48,-24.5,96,49), null);


(lib.midb2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.c02();
	this.instance.setTransform(-12,-12,1.15,1.1526);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.midb2, new cjs.Rectangle(-12,-12,23,21.9), null);


(lib.midb1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.c01();
	this.instance.setTransform(-12,-12,1.15,1.1526);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.midb1, new cjs.Rectangle(-12,-12,23,21.9), null);


(lib.mc_time3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnVAjQgMAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKAMAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	mask.setTransform(0,-0.025);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnVAjQgMAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKAMAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape.setTransform(-103.95,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnVAjQgMAAgIgKQgJgKAAgPIAAAAQAAgOAJgKQAIgKAMAAIOqAAQANAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgNAAg");
	this.shape_1.setTransform(-102.9,-0.025);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AnUAjQgNAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKANAAIOpAAQANAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgNAAg");
	this.shape_2.setTransform(-101.85,-0.025);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AnUAjQgNAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKANAAIOqAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape_3.setTransform(-23.1,-0.025);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3,p:{x:-23.1}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3,p:{x:-10.5}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3,p:{x:-4.2}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2).to({_off:false,x:-100.8},0).to({_off:true},1).wait(2).to({_off:false,x:-97.65},0).to({_off:true},1).wait(2).to({_off:false,x:-94.5},0).to({_off:true},1).wait(2).to({_off:false,x:-91.35},0).to({_off:true},1).wait(2).to({_off:false,x:-88.2},0).to({_off:true},1).wait(2).to({_off:false,x:-85.05},0).to({_off:true},1).wait(2).to({_off:false,x:-81.9},0).to({_off:true},1).wait(2).to({_off:false,x:-78.75},0).to({_off:true},1).wait(2).to({_off:false,x:-75.6},0).to({_off:true},1).wait(2).to({_off:false,x:-72.45},0).to({_off:true},1).wait(2).to({_off:false,x:-69.3},0).to({_off:true},1).wait(2).to({_off:false,x:-66.15},0).to({_off:true},1).wait(2).to({_off:false,x:-63},0).to({_off:true},1).wait(2).to({_off:false,x:-59.85},0).to({_off:true},1).wait(2).to({_off:false,x:-56.7},0).to({_off:true},1).wait(2).to({_off:false,x:-53.55},0).to({_off:true},1).wait(2).to({_off:false,x:-50.4},0).to({_off:true},1).wait(2).to({_off:false,x:-47.25},0).to({_off:true},1).wait(2).to({_off:false,x:-44.1},0).to({_off:true},1).wait(2).to({_off:false,x:-40.95},0).to({_off:true},1).wait(2).to({_off:false,x:-37.8},0).to({_off:true},1).wait(2).to({_off:false,x:-34.65},0).to({_off:true},1).wait(2).to({_off:false,x:-31.5},0).to({_off:true},1).wait(2).to({_off:false,x:-28.35},0).to({_off:true},1).wait(2).to({_off:false,x:-25.2},0).to({_off:true},1).wait(2).to({_off:false,x:-22.05},0).to({_off:true},1).wait(2).to({_off:false,x:-18.9},0).to({_off:true},1).wait(2).to({_off:false,x:-15.75},0).to({_off:true},1).wait(2).to({_off:false,x:-12.6},0).to({_off:true},1).wait(2).to({_off:false,x:-9.45},0).to({_off:true},1).wait(2).to({_off:false,x:-6.3},0).to({_off:true},1).wait(2).to({_off:false,x:-3.15},0).to({_off:true},1).wait(2).to({_off:false,x:0},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,x:-99.75},0).to({_off:true},1).wait(2).to({_off:false,x:-96.6},0).to({_off:true},1).wait(2).to({_off:false,x:-93.45},0).to({_off:true},1).wait(2).to({_off:false,x:-90.3},0).to({_off:true},1).wait(2).to({_off:false,x:-87.15},0).to({_off:true},1).wait(2).to({_off:false,x:-84},0).to({_off:true},1).wait(2).to({_off:false,x:-80.85},0).to({_off:true},1).wait(2).to({_off:false,x:-77.7},0).to({_off:true},1).wait(2).to({_off:false,x:-74.55},0).to({_off:true},1).wait(2).to({_off:false,x:-71.4},0).to({_off:true},1).wait(2).to({_off:false,x:-68.25},0).to({_off:true},1).wait(2).to({_off:false,x:-65.1},0).to({_off:true},1).wait(2).to({_off:false,x:-61.95},0).to({_off:true},1).wait(2).to({_off:false,x:-58.8},0).to({_off:true},1).wait(2).to({_off:false,x:-55.65},0).to({_off:true},1).wait(2).to({_off:false,x:-52.5},0).to({_off:true},1).wait(2).to({_off:false,x:-49.35},0).to({_off:true},1).wait(2).to({_off:false,x:-46.2},0).to({_off:true},1).wait(2).to({_off:false,x:-43.05},0).to({_off:true},1).wait(2).to({_off:false,x:-39.9},0).to({_off:true},1).wait(2).to({_off:false,x:-36.75},0).to({_off:true},1).wait(2).to({_off:false,x:-33.6},0).to({_off:true},1).wait(2).to({_off:false,x:-30.45},0).to({_off:true},1).wait(2).to({_off:false,x:-27.3},0).to({_off:true},1).wait(2).to({_off:false,x:-24.15},0).to({_off:true},1).wait(2).to({_off:false,x:-21},0).to({_off:true},1).wait(2).to({_off:false,x:-17.85},0).to({_off:true},1).wait(2).to({_off:false,x:-14.7},0).to({_off:true},1).wait(2).to({_off:false,x:-11.55},0).to({_off:true},1).wait(2).to({_off:false,x:-8.4},0).to({_off:true},1).wait(2).to({_off:false,x:-5.25},0).to({_off:true},1).wait(2).to({_off:false,x:-2.1},0).to({_off:true},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,x:-98.7},0).to({_off:true},1).wait(2).to({_off:false,x:-95.55},0).to({_off:true},1).wait(2).to({_off:false,x:-92.4},0).to({_off:true},1).wait(2).to({_off:false,x:-89.25},0).to({_off:true},1).wait(2).to({_off:false,x:-86.1},0).to({_off:true},1).wait(2).to({_off:false,x:-82.95},0).to({_off:true},1).wait(2).to({_off:false,x:-79.8},0).to({_off:true},1).wait(2).to({_off:false,x:-76.65},0).to({_off:true},1).wait(2).to({_off:false,x:-73.5},0).to({_off:true},1).wait(2).to({_off:false,x:-70.35},0).to({_off:true},1).wait(2).to({_off:false,x:-67.2},0).to({_off:true},1).wait(2).to({_off:false,x:-64.05},0).to({_off:true},1).wait(2).to({_off:false,x:-60.9},0).to({_off:true},1).wait(2).to({_off:false,x:-57.75},0).to({_off:true},1).wait(2).to({_off:false,x:-54.6},0).to({_off:true},1).wait(2).to({_off:false,x:-51.45},0).to({_off:true},1).wait(2).to({_off:false,x:-48.3},0).to({_off:true},1).wait(2).to({_off:false,x:-45.15},0).to({_off:true},1).wait(2).to({_off:false,x:-42},0).to({_off:true},1).wait(2).to({_off:false,x:-38.85},0).to({_off:true},1).wait(2).to({_off:false,x:-35.7},0).to({_off:true},1).wait(2).to({_off:false,x:-32.55},0).to({_off:true},1).wait(2).to({_off:false,x:-29.4},0).to({_off:true},1).wait(2).to({_off:false,x:-26.25},0).to({_off:true},1).wait(5).to({_off:false,x:-19.95},0).to({_off:true},1).wait(2).to({_off:false,x:-16.8},0).to({_off:true},1).wait(2).to({_off:false,x:-13.65},0).to({_off:true},1).wait(5).to({_off:false,x:-7.35},0).to({_off:true},1).wait(5).to({_off:false,x:-1.05},0).to({_off:true},1).wait(1));

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.2)").s().p("AnVAjQgMAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKAMAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape_4.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(100));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.9,-3.5,99.8,7);


(lib.mc_time2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnVAjQgMAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKAMAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	mask.setTransform(0,-0.025);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnVAjQgMAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKAMAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape.setTransform(-103.95,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnVAjQgMAAgIgKQgJgKAAgPIAAAAQAAgOAJgKQAIgKAMAAIOqAAQANAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgNAAg");
	this.shape_1.setTransform(-102.9,-0.025);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AnUAjQgNAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKANAAIOpAAQANAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgNAAg");
	this.shape_2.setTransform(-101.85,-0.025);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AnUAjQgNAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKANAAIOqAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape_3.setTransform(-23.1,-0.025);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3,p:{x:-23.1}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3,p:{x:-10.5}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3,p:{x:-4.2}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2).to({_off:false,x:-100.8},0).to({_off:true},1).wait(2).to({_off:false,x:-97.65},0).to({_off:true},1).wait(2).to({_off:false,x:-94.5},0).to({_off:true},1).wait(2).to({_off:false,x:-91.35},0).to({_off:true},1).wait(2).to({_off:false,x:-88.2},0).to({_off:true},1).wait(2).to({_off:false,x:-85.05},0).to({_off:true},1).wait(2).to({_off:false,x:-81.9},0).to({_off:true},1).wait(2).to({_off:false,x:-78.75},0).to({_off:true},1).wait(2).to({_off:false,x:-75.6},0).to({_off:true},1).wait(2).to({_off:false,x:-72.45},0).to({_off:true},1).wait(2).to({_off:false,x:-69.3},0).to({_off:true},1).wait(2).to({_off:false,x:-66.15},0).to({_off:true},1).wait(2).to({_off:false,x:-63},0).to({_off:true},1).wait(2).to({_off:false,x:-59.85},0).to({_off:true},1).wait(2).to({_off:false,x:-56.7},0).to({_off:true},1).wait(2).to({_off:false,x:-53.55},0).to({_off:true},1).wait(2).to({_off:false,x:-50.4},0).to({_off:true},1).wait(2).to({_off:false,x:-47.25},0).to({_off:true},1).wait(2).to({_off:false,x:-44.1},0).to({_off:true},1).wait(2).to({_off:false,x:-40.95},0).to({_off:true},1).wait(2).to({_off:false,x:-37.8},0).to({_off:true},1).wait(2).to({_off:false,x:-34.65},0).to({_off:true},1).wait(2).to({_off:false,x:-31.5},0).to({_off:true},1).wait(2).to({_off:false,x:-28.35},0).to({_off:true},1).wait(2).to({_off:false,x:-25.2},0).to({_off:true},1).wait(2).to({_off:false,x:-22.05},0).to({_off:true},1).wait(2).to({_off:false,x:-18.9},0).to({_off:true},1).wait(2).to({_off:false,x:-15.75},0).to({_off:true},1).wait(2).to({_off:false,x:-12.6},0).to({_off:true},1).wait(2).to({_off:false,x:-9.45},0).to({_off:true},1).wait(2).to({_off:false,x:-6.3},0).to({_off:true},1).wait(2).to({_off:false,x:-3.15},0).to({_off:true},1).wait(2).to({_off:false,x:0},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,x:-99.75},0).to({_off:true},1).wait(2).to({_off:false,x:-96.6},0).to({_off:true},1).wait(2).to({_off:false,x:-93.45},0).to({_off:true},1).wait(2).to({_off:false,x:-90.3},0).to({_off:true},1).wait(2).to({_off:false,x:-87.15},0).to({_off:true},1).wait(2).to({_off:false,x:-84},0).to({_off:true},1).wait(2).to({_off:false,x:-80.85},0).to({_off:true},1).wait(2).to({_off:false,x:-77.7},0).to({_off:true},1).wait(2).to({_off:false,x:-74.55},0).to({_off:true},1).wait(2).to({_off:false,x:-71.4},0).to({_off:true},1).wait(2).to({_off:false,x:-68.25},0).to({_off:true},1).wait(2).to({_off:false,x:-65.1},0).to({_off:true},1).wait(2).to({_off:false,x:-61.95},0).to({_off:true},1).wait(2).to({_off:false,x:-58.8},0).to({_off:true},1).wait(2).to({_off:false,x:-55.65},0).to({_off:true},1).wait(2).to({_off:false,x:-52.5},0).to({_off:true},1).wait(2).to({_off:false,x:-49.35},0).to({_off:true},1).wait(2).to({_off:false,x:-46.2},0).to({_off:true},1).wait(2).to({_off:false,x:-43.05},0).to({_off:true},1).wait(2).to({_off:false,x:-39.9},0).to({_off:true},1).wait(2).to({_off:false,x:-36.75},0).to({_off:true},1).wait(2).to({_off:false,x:-33.6},0).to({_off:true},1).wait(2).to({_off:false,x:-30.45},0).to({_off:true},1).wait(2).to({_off:false,x:-27.3},0).to({_off:true},1).wait(2).to({_off:false,x:-24.15},0).to({_off:true},1).wait(2).to({_off:false,x:-21},0).to({_off:true},1).wait(2).to({_off:false,x:-17.85},0).to({_off:true},1).wait(2).to({_off:false,x:-14.7},0).to({_off:true},1).wait(2).to({_off:false,x:-11.55},0).to({_off:true},1).wait(2).to({_off:false,x:-8.4},0).to({_off:true},1).wait(2).to({_off:false,x:-5.25},0).to({_off:true},1).wait(2).to({_off:false,x:-2.1},0).to({_off:true},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,x:-98.7},0).to({_off:true},1).wait(2).to({_off:false,x:-95.55},0).to({_off:true},1).wait(2).to({_off:false,x:-92.4},0).to({_off:true},1).wait(2).to({_off:false,x:-89.25},0).to({_off:true},1).wait(2).to({_off:false,x:-86.1},0).to({_off:true},1).wait(2).to({_off:false,x:-82.95},0).to({_off:true},1).wait(2).to({_off:false,x:-79.8},0).to({_off:true},1).wait(2).to({_off:false,x:-76.65},0).to({_off:true},1).wait(2).to({_off:false,x:-73.5},0).to({_off:true},1).wait(2).to({_off:false,x:-70.35},0).to({_off:true},1).wait(2).to({_off:false,x:-67.2},0).to({_off:true},1).wait(2).to({_off:false,x:-64.05},0).to({_off:true},1).wait(2).to({_off:false,x:-60.9},0).to({_off:true},1).wait(2).to({_off:false,x:-57.75},0).to({_off:true},1).wait(2).to({_off:false,x:-54.6},0).to({_off:true},1).wait(2).to({_off:false,x:-51.45},0).to({_off:true},1).wait(2).to({_off:false,x:-48.3},0).to({_off:true},1).wait(2).to({_off:false,x:-45.15},0).to({_off:true},1).wait(2).to({_off:false,x:-42},0).to({_off:true},1).wait(2).to({_off:false,x:-38.85},0).to({_off:true},1).wait(2).to({_off:false,x:-35.7},0).to({_off:true},1).wait(2).to({_off:false,x:-32.55},0).to({_off:true},1).wait(2).to({_off:false,x:-29.4},0).to({_off:true},1).wait(2).to({_off:false,x:-26.25},0).to({_off:true},1).wait(5).to({_off:false,x:-19.95},0).to({_off:true},1).wait(2).to({_off:false,x:-16.8},0).to({_off:true},1).wait(2).to({_off:false,x:-13.65},0).to({_off:true},1).wait(5).to({_off:false,x:-7.35},0).to({_off:true},1).wait(5).to({_off:false,x:-1.05},0).to({_off:true},1).wait(1));

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.2)").s().p("AnVAjQgMAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKAMAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape_4.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(100));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.9,-3.5,99.8,7);


(lib.mc_time = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnVAjQgMAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKAMAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	mask.setTransform(0,-0.025);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnVAjQgMAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKAMAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape.setTransform(-103.95,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnVAjQgMAAgIgKQgJgKAAgPIAAAAQAAgOAJgKQAIgKAMAAIOqAAQANAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgNAAg");
	this.shape_1.setTransform(-102.9,-0.025);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AnUAjQgNAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKANAAIOpAAQANAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgNAAg");
	this.shape_2.setTransform(-101.85,-0.025);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AnUAjQgNAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKANAAIOqAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape_3.setTransform(-23.1,-0.025);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3,p:{x:-23.1}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3,p:{x:-10.5}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3,p:{x:-4.2}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2).to({_off:false,x:-100.8},0).to({_off:true},1).wait(2).to({_off:false,x:-97.65},0).to({_off:true},1).wait(2).to({_off:false,x:-94.5},0).to({_off:true},1).wait(2).to({_off:false,x:-91.35},0).to({_off:true},1).wait(2).to({_off:false,x:-88.2},0).to({_off:true},1).wait(2).to({_off:false,x:-85.05},0).to({_off:true},1).wait(2).to({_off:false,x:-81.9},0).to({_off:true},1).wait(2).to({_off:false,x:-78.75},0).to({_off:true},1).wait(2).to({_off:false,x:-75.6},0).to({_off:true},1).wait(2).to({_off:false,x:-72.45},0).to({_off:true},1).wait(2).to({_off:false,x:-69.3},0).to({_off:true},1).wait(2).to({_off:false,x:-66.15},0).to({_off:true},1).wait(2).to({_off:false,x:-63},0).to({_off:true},1).wait(2).to({_off:false,x:-59.85},0).to({_off:true},1).wait(2).to({_off:false,x:-56.7},0).to({_off:true},1).wait(2).to({_off:false,x:-53.55},0).to({_off:true},1).wait(2).to({_off:false,x:-50.4},0).to({_off:true},1).wait(2).to({_off:false,x:-47.25},0).to({_off:true},1).wait(2).to({_off:false,x:-44.1},0).to({_off:true},1).wait(2).to({_off:false,x:-40.95},0).to({_off:true},1).wait(2).to({_off:false,x:-37.8},0).to({_off:true},1).wait(2).to({_off:false,x:-34.65},0).to({_off:true},1).wait(2).to({_off:false,x:-31.5},0).to({_off:true},1).wait(2).to({_off:false,x:-28.35},0).to({_off:true},1).wait(2).to({_off:false,x:-25.2},0).to({_off:true},1).wait(2).to({_off:false,x:-22.05},0).to({_off:true},1).wait(2).to({_off:false,x:-18.9},0).to({_off:true},1).wait(2).to({_off:false,x:-15.75},0).to({_off:true},1).wait(2).to({_off:false,x:-12.6},0).to({_off:true},1).wait(2).to({_off:false,x:-9.45},0).to({_off:true},1).wait(2).to({_off:false,x:-6.3},0).to({_off:true},1).wait(2).to({_off:false,x:-3.15},0).to({_off:true},1).wait(2).to({_off:false,x:0},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,x:-99.75},0).to({_off:true},1).wait(2).to({_off:false,x:-96.6},0).to({_off:true},1).wait(2).to({_off:false,x:-93.45},0).to({_off:true},1).wait(2).to({_off:false,x:-90.3},0).to({_off:true},1).wait(2).to({_off:false,x:-87.15},0).to({_off:true},1).wait(2).to({_off:false,x:-84},0).to({_off:true},1).wait(2).to({_off:false,x:-80.85},0).to({_off:true},1).wait(2).to({_off:false,x:-77.7},0).to({_off:true},1).wait(2).to({_off:false,x:-74.55},0).to({_off:true},1).wait(2).to({_off:false,x:-71.4},0).to({_off:true},1).wait(2).to({_off:false,x:-68.25},0).to({_off:true},1).wait(2).to({_off:false,x:-65.1},0).to({_off:true},1).wait(2).to({_off:false,x:-61.95},0).to({_off:true},1).wait(2).to({_off:false,x:-58.8},0).to({_off:true},1).wait(2).to({_off:false,x:-55.65},0).to({_off:true},1).wait(2).to({_off:false,x:-52.5},0).to({_off:true},1).wait(2).to({_off:false,x:-49.35},0).to({_off:true},1).wait(2).to({_off:false,x:-46.2},0).to({_off:true},1).wait(2).to({_off:false,x:-43.05},0).to({_off:true},1).wait(2).to({_off:false,x:-39.9},0).to({_off:true},1).wait(2).to({_off:false,x:-36.75},0).to({_off:true},1).wait(2).to({_off:false,x:-33.6},0).to({_off:true},1).wait(2).to({_off:false,x:-30.45},0).to({_off:true},1).wait(2).to({_off:false,x:-27.3},0).to({_off:true},1).wait(2).to({_off:false,x:-24.15},0).to({_off:true},1).wait(2).to({_off:false,x:-21},0).to({_off:true},1).wait(2).to({_off:false,x:-17.85},0).to({_off:true},1).wait(2).to({_off:false,x:-14.7},0).to({_off:true},1).wait(2).to({_off:false,x:-11.55},0).to({_off:true},1).wait(2).to({_off:false,x:-8.4},0).to({_off:true},1).wait(2).to({_off:false,x:-5.25},0).to({_off:true},1).wait(2).to({_off:false,x:-2.1},0).to({_off:true},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,x:-98.7},0).to({_off:true},1).wait(2).to({_off:false,x:-95.55},0).to({_off:true},1).wait(2).to({_off:false,x:-92.4},0).to({_off:true},1).wait(2).to({_off:false,x:-89.25},0).to({_off:true},1).wait(2).to({_off:false,x:-86.1},0).to({_off:true},1).wait(2).to({_off:false,x:-82.95},0).to({_off:true},1).wait(2).to({_off:false,x:-79.8},0).to({_off:true},1).wait(2).to({_off:false,x:-76.65},0).to({_off:true},1).wait(2).to({_off:false,x:-73.5},0).to({_off:true},1).wait(2).to({_off:false,x:-70.35},0).to({_off:true},1).wait(2).to({_off:false,x:-67.2},0).to({_off:true},1).wait(2).to({_off:false,x:-64.05},0).to({_off:true},1).wait(2).to({_off:false,x:-60.9},0).to({_off:true},1).wait(2).to({_off:false,x:-57.75},0).to({_off:true},1).wait(2).to({_off:false,x:-54.6},0).to({_off:true},1).wait(2).to({_off:false,x:-51.45},0).to({_off:true},1).wait(2).to({_off:false,x:-48.3},0).to({_off:true},1).wait(2).to({_off:false,x:-45.15},0).to({_off:true},1).wait(2).to({_off:false,x:-42},0).to({_off:true},1).wait(2).to({_off:false,x:-38.85},0).to({_off:true},1).wait(2).to({_off:false,x:-35.7},0).to({_off:true},1).wait(2).to({_off:false,x:-32.55},0).to({_off:true},1).wait(2).to({_off:false,x:-29.4},0).to({_off:true},1).wait(2).to({_off:false,x:-26.25},0).to({_off:true},1).wait(5).to({_off:false,x:-19.95},0).to({_off:true},1).wait(2).to({_off:false,x:-16.8},0).to({_off:true},1).wait(2).to({_off:false,x:-13.65},0).to({_off:true},1).wait(5).to({_off:false,x:-7.35},0).to({_off:true},1).wait(5).to({_off:false,x:-1.05},0).to({_off:true},1).wait(1));

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.2)").s().p("AnVAjQgMAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKAMAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape_4.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(100));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.9,-3.5,99.8,7);


(lib.line03_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.line03();
	this.instance.setTransform(-150,-225);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.line03_1, new cjs.Rectangle(-150,-225,300,450), null);


(lib.find = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Findmore();
	this.instance.setTransform(-105,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.find, new cjs.Rectangle(-105,-14.5,210,29), null);


(lib.txt01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.text01();
	this.instance.setTransform(-111.5,-36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt01, new cjs.Rectangle(-111.5,-36.5,223,73), null);


(lib.dev_veev = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.deviceveev();
	this.instance.setTransform(-141,-105,0.2686,0.2686);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dev_veev, new cjs.Rectangle(-141,-105,268.6,268.6), null);


(lib.dev_prime = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.txtilumai();
	this.instance.setTransform(-45,101);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer_1
	this.instance_1 = new lib.prime01();
	this.instance_1.setTransform(-46.5,-89.5);

	this.instance_2 = new lib.prime02();
	this.instance_2.setTransform(-46.5,-89.5);

	this.instance_3 = new lib.prime03();
	this.instance_3.setTransform(-46.5,-89.5);

	this.instance_4 = new lib.prime04();
	this.instance_4.setTransform(-46.5,-89.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,-89.5,93,218.5);


(lib.dev_bonds = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.txtbonds();
	this.instance.setTransform(-67.55,83.65,1,1,18.3998);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	// Layer_1
	this.instance_1 = new lib.bondsblue();
	this.instance_1.setTransform(-142,-151,0.2897,0.2897);

	this.instance_2 = new lib.red();
	this.instance_2.setTransform(-157.2,-157.2,0.3145,0.3145);

	this.instance_3 = new lib.black();
	this.instance_3.setTransform(-157.2,-157.2,0.3145,0.3145);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.2,-157.2,314.5,314.5);


(lib.bluebg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ground4320();
	this.instance.setTransform(-219.4,-329.15,1.3715,1.3715);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bluebg, new cjs.Rectangle(-219.4,-329.1,438.9,658.3), null);


(lib.bg_veev = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.VEEV_VEEVNOW_VNVNL23_VVVNRLDCE2DiscoverVeevNowTile1Grid1GD2x_Web_enoc();
	this.instance.setTransform(-1451.35,-408.2,0.7559,0.7559);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_veev, new cjs.Rectangle(-1451.3,-408.2,2902.7,816.4), null);


(lib.b1d = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.primeb4();
	this.instance.setTransform(-11.5,-11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.b1d, new cjs.Rectangle(-11.5,-11.5,23,23), null);


(lib.b1c = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.primeb3();
	this.instance.setTransform(-11.5,-11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.b1c, new cjs.Rectangle(-11.5,-11.5,23,23), null);


(lib.b1b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.primeb2();
	this.instance.setTransform(-11.5,-11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.b1b, new cjs.Rectangle(-11.5,-11.5,23,23), null);


(lib.b1a = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.primeb1();
	this.instance.setTransform(-11.5,-11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.b1a, new cjs.Rectangle(-11.5,-11.5,23,23), null);


(lib.bginveev = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bg_veev();
	this.instance.setTransform(0,-72.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:0},14).wait(56));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1451.3,-480.8,2902.7,889);


(lib.bg_in02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bluebg();
	this.instance.setTransform(0,47.6,0.9506,0.9506);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,y:0,alpha:1},14).wait(86));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(225,81,80,0.8)").ss(1,1,1).p("EgU/gnCMAp/AAAQCVAABpBpQBqBqAACVMAAABC1QAACVhqBpQhpBqiVAAMgp/AAAQiVAAhphqQhqhpAAiVMAAAhC1QAAiVBqhqQBphpCVAAg");
	this.shape.setTransform(-1.225,-67);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1355A3").s().p("EgU/AnDQiVAAhphqQhqhpAAiVMAAAhC1QAAiVBqhqQBphpCVAAMAp/AAAQCVAABpBpQBqBqAACVMAAABC1QAACVhqBpQhpBqiVAAg");
	this.shape_1.setTransform(-1.225,-67);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(100));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-219.4,-329.1,438.9,689.6);


(lib.bg_in01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.line03_1();
	this.instance.setTransform(2.15,0.15,1.1228,1.1228,0,0,0,0.1,0.1);
	this.instance.alpha = 0.5117;
	this.instance.compositeOperation = "screen";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,scaleX:1.5529,scaleY:1.5529,x:0,alpha:1},8).wait(92));

	// Layer_2
	this.instance_1 = new lib.BG01();
	this.instance_1.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-232.9,-349.4,465.9,698.8);


(lib.devices = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.dev_prime.stop();
	}
	this.frame_1 = function() {
		this.dev_mid.stop();
	}
	this.frame_2 = function() {
		this.dev_one.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_2
	this.b1d = new lib.b1d();
	this.b1d.name = "b1d";
	this.b1d.setTransform(44,145.5);

	this.b1c = new lib.b1c();
	this.b1c.name = "b1c";
	this.b1c.setTransform(15,145.5);

	this.b1b = new lib.b1b();
	this.b1b.name = "b1b";
	this.b1b.setTransform(-15,145.5);

	this.b1a = new lib.b1a();
	this.b1a.name = "b1a";
	this.b1a.setTransform(-44,145.5);

	this.b2b = new lib.midb2();
	this.b2b.name = "b2b";
	this.b2b.setTransform(0,145.5);

	this.b2c = new lib.b1d();
	this.b2c.name = "b2c";
	this.b2c.setTransform(26.85,145.5);

	this.b2a = new lib.midb1();
	this.b2a.name = "b2a";
	this.b2a.setTransform(-26.85,145.5);

	this.instance = new lib.txtveev();
	this.instance.setTransform(-32,121);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b1a},{t:this.b1b},{t:this.b1c},{t:this.b1d}]}).to({state:[{t:this.b2a},{t:this.b2c},{t:this.b2b}]},1).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_3
	this.instance_1 = new lib.mc_time();
	this.instance_1.setTransform(-103.55,-209.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("AAwAjQgMAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKAMAAIOrAAQANAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgNAAgAvaAjQgNAAgIgKQgJgKAAgPIAAAAQAAgOAJgKQAIgKANAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape.setTransform(51.775,-209.525);

	this.instance_2 = new lib.mc_time2();
	this.instance_2.setTransform(0,-209.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnUAjQgNAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKANAAIOpAAQANAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgNAAg");
	this.shape_1.setTransform(-103.55,-209.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.2)").s().p("AnUAjQgNAAgIgKQgJgKAAgPIAAAAQAAgOAJgKQAIgKANAAIOpAAQANAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgNAAg");
	this.shape_2.setTransform(103.55,-209.525);

	this.instance_3 = new lib.mc_time3();
	this.instance_3.setTransform(103.55,-210.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAwAjQgMAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKAMAAIOrAAQANAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgNAAgAvaAjQgNAAgIgKQgJgKAAgPIAAAAQAAgOAJgKQAIgKANAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape_3.setTransform(-51.775,-210.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance_2}]},1).to({state:[{t:this.shape_3},{t:this.instance_3}]},1).wait(1));

	// Layer_1
	this.dev_prime = new lib.dev_prime();
	this.dev_prime.name = "dev_prime";

	this.dev_mid = new lib.dev_bonds();
	this.dev_mid.name = "dev_mid";
	this.dev_mid.setTransform(-0.45,16.5,0.8868,0.8868,-18.4533);

	this.dev_one = new lib.dev_veev();
	this.dev_one.name = "dev_one";
	this.dev_one.setTransform(-2.6,-7.1,0.8824,0.8824,-24.9449,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dev_prime}]}).to({state:[{t:this.dev_mid}]},1).to({state:[{t:this.dev_one}]},1).wait(1));

	// Layer_4
	this.instance_4 = new lib.bg_in01();
	this.instance_4.setTransform(-0.05,-39.65,1,1,0,0,0,2,-39.6);

	this.instance_5 = new lib.bg_in02();
	this.instance_5.setTransform(0.4,94.15,1.0478,1.0478);

	this.instance_6 = new lib.bginveev();
	this.instance_6.setTransform(0.55,87.55,0.7749,0.7749);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1124,-285,2249.2,756.9);


// stage content:
(lib.IqosProductsStories = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,54];
	// timeline functions:
	this.frame_0 = function() {
		// Frame list untuk gallery
		this.frameList = [0, 1, 2]; // contoh frame index
		this.currentIndex = 0; // Mulai dari frame pertama
		
		// Set frame awal
		this.devices.gotoAndStop(this.frameList[this.currentIndex]);
		
		// Tombol Next
		this.nxt.addEventListener("click", () => {
		    // Tambah index dan looping kembali ke awal jika lebih dari panjang array
		    this.currentIndex = (this.currentIndex + 1) % this.frameList.length;
		    this.devices.gotoAndStop(this.frameList[this.currentIndex]);
		});
		
		// Tombol Previous
		this.prv.addEventListener("click", () => {
		    // Kurangi index dan looping ke akhir jika kurang dari 0
		    this.currentIndex = (this.currentIndex - 1 + this.frameList.length) % this.frameList.length;
		    this.devices.gotoAndStop(this.frameList[this.currentIndex]);
		});
		
		this.nxt.alpha=0.05;
		this.prv.alpha=0.05;
		this.devices.stop();
		
		//Device 1
		this.devices.b1a.addEventListener("click", () => {
		    // Misalnya, pindah ke frame 2 pada MovieClip
		    this.devices.dev_prime.gotoAndStop(0);
		});
		this.devices.b1b.addEventListener("click", () => {
		    // Misalnya, pindah ke frame 2 pada MovieClip
		    this.devices.dev_prime.gotoAndStop(1);
		});
		this.devices.b1c.addEventListener("click", () => {
		    // Misalnya, pindah ke frame 2 pada MovieClip
		    this.devices.dev_prime.gotoAndStop(2);
		});
		this.devices.b1d.addEventListener("click", () => {
		    // Misalnya, pindah ke frame 2 pada MovieClip
		    this.devices.dev_prime.gotoAndStop(3);
		});
		
		//Device 2
		this.devices.b2a.addEventListener("click", () => {
		    // Misalnya, pindah ke frame 2 pada MovieClip
		    this.devices.dev_mid.gotoAndStop(0);
		});
		this.devices.b2b.addEventListener("click", () => {
		    // Misalnya, pindah ke frame 2 pada MovieClip
		    this.devices.dev_mid.gotoAndStop(1);
		});
		this.devices.b2c.addEventListener("click", () => {
		    // Misalnya, pindah ke frame 2 pada MovieClip
		    this.devices.dev_mid.gotoAndStop(2);
		});
		this.devices.b2d.addEventListener("click", () => {
		    // Misalnya, pindah ke frame 2 pada MovieClip
		    this.devices.dev_mid.gotoAndStop(3);
		});
		this.devices.b2e.addEventListener("click", () => {
		    // Misalnya, pindah ke frame 2 pada MovieClip
		    this.devices.dev_mid.gotoAndStop(4);
		});
		
		//Device 3
		this.devices.b3a.addEventListener("click", () => {
		    // Misalnya, pindah ke frame 2 pada MovieClip
		    this.devices.dev_one.gotoAndStop(0);
		});
		this.devices.b3b.addEventListener("click", () => {
		    // Misalnya, pindah ke frame 2 pada MovieClip
		    this.devices.dev_one.gotoAndStop(1);
		});
		this.devices.b3c.addEventListener("click", () => {
		    // Misalnya, pindah ke frame 2 pada MovieClip
		    this.devices.dev_one.gotoAndStop(2);
		});
		this.devices.b3d.addEventListener("click", () => {
		    // Misalnya, pindah ke frame 2 pada MovieClip
		    this.devices.dev_one.gotoAndStop(3);
		});
		this.devices.b3e.addEventListener("click", () => {
		    // Misalnya, pindah ke frame 2 pada MovieClip
		    this.devices.dev_one.gotoAndStop(4);
		});
		// Invisible stage button (opens URL)
		this.stageBtn.addEventListener("click", function() {
		    setTimeout(function() {  //Bypass popup blockers
		        window.open("https://www.iqos.com/id/id/iqos-tembakau-yang-dipanaskan/perangkat-iqos-iluma.html", "_blank");
		    }, 100);
		}.bind(this));
		
		this.stageBtn.alpha = 0.05;
	}
	this.frame_54 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(54).call(this.frame_54).wait(1));

	// Layer_5
	this.instance = new lib.warning_1();
	this.instance.setTransform(320,480.5,2,2);
	this.instance.compositeOperation = "hard-light";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(55));

	// Layer_11
	this.instance_1 = new lib.txt01();
	this.instance_1.setTransform(166.65,98.45,0.7794,0.7794);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(55));

	// Layer_10
	this.instance_2 = new lib._new();
	this.instance_2.setTransform(48,45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(55));

	// Layer_14
	this.instance_3 = new lib.find();
	this.instance_3.setTransform(160,409.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:405.9,alpha:1},9).wait(46));

	// Layer_16
	this.nxt = new lib.stageBtn();
	this.nxt.name = "nxt";
	this.nxt.setTransform(240.35,-142.65,0.4776,1.9137,0,0,0,0.2,0.4);

	this.prv = new lib.stageBtn();
	this.prv.name = "prv";
	this.prv.setTransform(80.35,-142.65,0.4777,1.9137,0,0,0,0.3,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prv},{t:this.nxt}]}).wait(55));

	// Layer_13
	this.devices = new lib.devices();
	this.devices.name = "devices";
	this.devices.setTransform(160.5,218.5);

	this.timeline.addTween(cjs.Tween.get(this.devices).wait(55));

	// Layer_17
	this.stageBtn = new lib.stageBtn();
	this.stageBtn.name = "stageBtn";
	this.stageBtn.setTransform(163.45,330.7,1,0.6375,0,0,0,0,0.3);

	this.timeline.addTween(cjs.Tween.get(this.stageBtn).wait(55));

	// Layer_15
	this.instance_4 = new lib.price_1();
	this.instance_4.setTransform(251.4,95.05,1.4144,1.4144);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,x:257.5,y:87,alpha:1},9).wait(46));

	// Layer_1
	this.instance_5 = new lib.BG01();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(55));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EgajgnDMA1HAAAMAAABOHMg1HAAAg");
	this.shape.setTransform(160,240);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgajAnEMAAAhOHMA1HAAAMAAABOHg");
	this.shape_1.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(55));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(63.1,205.9,267.4,282.70000000000005);
// library properties:
lib.properties = {
	id: '585192257CBE4345B3251F384DD6307E',
	width: 320,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/BG01.png", id:"BG01"},
		{src:"images/black.png", id:"black"},
		{src:"images/bondsblue.png", id:"bondsblue"},
		{src:"images/c01.png", id:"c01"},
		{src:"images/c02.png", id:"c02"},
		{src:"images/deviceveev.png", id:"deviceveev"},
		{src:"images/Findmore.png", id:"Findmore"},
		{src:"images/ground4320.jpg", id:"ground4320"},
		{src:"images/line03.png", id:"line03"},
		{src:"images/NEW.png", id:"NEW"},
		{src:"images/price.png", id:"price"},
		{src:"images/prime01.png", id:"prime01"},
		{src:"images/prime02.png", id:"prime02"},
		{src:"images/prime03.png", id:"prime03"},
		{src:"images/prime04.png", id:"prime04"},
		{src:"images/primeb1.png", id:"primeb1"},
		{src:"images/primeb2.png", id:"primeb2"},
		{src:"images/primeb3.png", id:"primeb3"},
		{src:"images/primeb4.png", id:"primeb4"},
		{src:"images/red.png", id:"red"},
		{src:"images/text01.png", id:"text01"},
		{src:"images/txtbonds.png", id:"txtbonds"},
		{src:"images/txtilumai.png", id:"txtilumai"},
		{src:"images/txtveev.png", id:"txtveev"},
		{src:"images/VEEV_VEEVNOW_VNVNL23_VVVNRLDCE2DiscoverVeevNowTile1Grid1GD2x_Web_enoc.jpg", id:"VEEV_VEEVNOW_VNVNL23_VVVNRLDCE2DiscoverVeevNowTile1Grid1GD2x_Web_enoc"},
		{src:"images/warning.png", id:"warning"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['585192257CBE4345B3251F384DD6307E'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;