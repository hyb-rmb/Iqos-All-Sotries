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


(lib.BG01pngcopy = function() {
	this.initialize(img.BG01pngcopy);
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

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer_1
	this.instance = new lib.prime01();
	this.instance.setTransform(-46.5,-89.5);

	this.instance_1 = new lib.prime02();
	this.instance_1.setTransform(-46.5,-89.5);

	this.instance_2 = new lib.prime03();
	this.instance_2.setTransform(-46.5,-89.5);

	this.instance_3 = new lib.prime04();
	this.instance_3.setTransform(-46.5,-89.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,-89.5,93,180);


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

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.instance = new lib.bondsblue();
	this.instance.setTransform(-142,-151,0.2897,0.2897);

	this.instance_1 = new lib.red();
	this.instance_1.setTransform(-157.2,-157.2,0.3145,0.3145);

	this.instance_2 = new lib.black();
	this.instance_2.setTransform(-157.2,-157.2,0.3145,0.3145);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.2,-157.2,314.5,314.5);


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


(lib.lp_ilumai = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.stageBtn();
	this.instance.setTransform(0,0.05,0.9561,0.3859,0,0,0,-0.5,162.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lp_ilumai, new cjs.Rectangle(-160.1,-33.1,320.29999999999995,66.30000000000001), null);


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
		this.lp_ilumai.addEventListener("click", function() {
		    setTimeout(function() {  //Bypass popup blockers
		        window.open("https://www.iqos.com/id/id/iqos-tembakau-yang-dipanaskan/perangkat-iqos-iluma.html", "_blank");
		    }, 100);
		}.bind(this));
		
		this.lp_ilumai.alpha = 0.05;
		
		this.lp_veev.addEventListener("click", function() {
		    setTimeout(function() {  //Bypass popup blockers
		        window.open("https://www.veev.id/id/id/temukan-vape/beli-perangkat-vape-veev-one.html#prova", "_blank");
		    }, 100);
		}.bind(this));
		
		this.lp_veev.alpha = 0.05;
		
		this.lp_bonds.addEventListener("click", function() {
		    setTimeout(function() {  //Bypass popup blockers
		        window.open("https://www.veev.id/id/id/temukan-vape/beli-perangkat-vape-veev-one.html#prova", "_blank");
		    }, 100);
		}.bind(this));
		
		this.lp_bonds.alpha = 0.05;
		this.dev_one.stop();
		this.dev_mid.stop();
		this.dev_prime.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(20).call(this.frame_39).wait(20).call(this.frame_59).wait(1));

	// Layer_2
	this.lp_ilumai = new lib.lp_ilumai();
	this.lp_ilumai.name = "lp_ilumai";
	this.lp_ilumai.setTransform(0,213.85,1,1.4554,0,0,0,0,0.4);

	this.instance = new lib.txtilumai();
	this.instance.setTransform(-35,107,0.7859,0.7857);

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

	this.lp_veev = new lib.lp_ilumai();
	this.lp_veev.name = "lp_veev";
	this.lp_veev.setTransform(0,213.85,1,1.4554,0,0,0,0,0.4);

	this.instance_1 = new lib.txtveev();
	this.instance_1.setTransform(-25,107,0.7859,0.7857);

	this.lp_bonds = new lib.lp_ilumai();
	this.lp_bonds.name = "lp_bonds";
	this.lp_bonds.setTransform(0,213.85,1,1.4554,0,0,0,0,0.4);

	this.instance_2 = new lib.txtbonds();
	this.instance_2.setTransform(-27.85,104.3,0.7404,0.7395,-0.5888);

	this.b2b = new lib.midb2();
	this.b2b.name = "b2b";
	this.b2b.setTransform(0,145.5);

	this.b2c = new lib.b1d();
	this.b2c.name = "b2c";
	this.b2c.setTransform(26.85,145.5);

	this.b2a = new lib.midb1();
	this.b2a.name = "b2a";
	this.b2a.setTransform(-26.85,145.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.b1a},{t:this.b1b},{t:this.b1c},{t:this.b1d},{t:this.instance},{t:this.lp_ilumai}]},19).to({state:[]},1).to({state:[{t:this.instance_1},{t:this.lp_veev}]},19).to({state:[]},1).to({state:[{t:this.b2a},{t:this.b2c},{t:this.b2b},{t:this.instance_2},{t:this.lp_bonds}]},19).wait(1));

	// Layer_3
	this.instance_3 = new lib.mc_time();
	this.instance_3.setTransform(-103.55,-209.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("AAwAjQgMAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKAMAAIOrAAQANAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgNAAgAvaAjQgNAAgIgKQgJgKAAgPIAAAAQAAgOAJgKQAIgKANAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape.setTransform(51.775,-209.525);

	this.instance_4 = new lib.mc_time2();
	this.instance_4.setTransform(0,-209.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnUAjQgNAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKANAAIOpAAQANAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgNAAg");
	this.shape_1.setTransform(-103.55,-209.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.2)").s().p("AnUAjQgNAAgIgKQgJgKAAgPIAAAAQAAgOAJgKQAIgKANAAIOpAAQANAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgNAAg");
	this.shape_2.setTransform(103.55,-209.525);

	this.instance_5 = new lib.mc_time3();
	this.instance_5.setTransform(103.55,-210.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAwAjQgMAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKAMAAIOrAAQANAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgNAAgAvaAjQgNAAgIgKQgJgKAAgPIAAAAQAAgOAJgKQAIgKANAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape_3.setTransform(-51.775,-210.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_3}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance_4}]},20).to({state:[{t:this.shape_3},{t:this.instance_5}]},20).wait(20));

	// Layer_1
	this.dev_prime = new lib.dev_prime();
	this.dev_prime.name = "dev_prime";
	this.dev_prime.setTransform(94.15,27,0.7791,0.7791,17.7117,0,0,0.2,-0.1);

	this.dev_one = new lib.dev_veev();
	this.dev_one.name = "dev_one";
	this.dev_one.setTransform(106.4,1.55,0.5916,0.5916,-28.8218,0,0,-0.1,-0.3);
	this.dev_one._off = true;

	this.dev_mid = new lib.dev_bonds();
	this.dev_mid.name = "dev_mid";
	this.dev_mid.setTransform(112.05,16.15,0.5726,0.5726,-19.4316,0,0,0.1,-0.1);
	this.dev_mid._off = true;

	this.timeline.addTween(cjs.Tween.get(this.dev_prime).to({regY:0,scaleX:1.0212,scaleY:1.0212,rotation:-0.4974,x:7.4,y:2.6},19).to({_off:true},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.dev_one).wait(20).to({_off:false},0).to({regX:0.1,scaleX:0.8746,scaleY:0.8746,rotation:-35.0093,x:-6.85,y:-10.55},19).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.dev_mid).wait(40).to({_off:false},0).to({regX:0,regY:0,scaleX:0.8868,scaleY:0.8868,rotation:-18.4533,x:-0.45,y:16.5},19).wait(1));

	// Layer_7
	this.dev_mid_1 = new lib.dev_bonds();
	this.dev_mid_1.name = "dev_mid_1";
	this.dev_mid_1.setTransform(-0.45,16.5,0.8868,0.8868,-18.4533);

	this.dev_prime_1 = new lib.dev_prime();
	this.dev_prime_1.name = "dev_prime_1";
	this.dev_prime_1.setTransform(7.4,2.6,1.0212,1.0212,-0.4974,0,0,0.2,0);
	this.dev_prime_1._off = true;

	this.dev_one_1 = new lib.dev_veev();
	this.dev_one_1.name = "dev_one_1";
	this.dev_one_1.setTransform(-6.85,-10.55,0.8746,0.8746,-35.0093,0,0,0.1,-0.3);
	this.dev_one_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.dev_mid_1).to({regY:-0.1,scaleX:0.5726,scaleY:0.5726,rotation:-52.4247,x:-88,y:16.1},19).to({_off:true},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.dev_prime_1).wait(20).to({_off:false},0).to({regX:0,scaleX:0.7198,scaleY:0.7198,rotation:-11.6956,x:-103.65,y:15.65},19).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.dev_one_1).wait(40).to({_off:false},0).to({regX:-0.1,regY:-0.4,scaleX:0.5492,scaleY:0.5492,rotation:-61.8771,x:-115.95,y:10.75},19).wait(1));

	// Layer_8
	this.dev_one_2 = new lib.dev_veev();
	this.dev_one_2.name = "dev_one_2";
	this.dev_one_2.setTransform(-115.95,10.75,0.5492,0.5492,-61.8771,0,0,-0.1,-0.4);

	this.dev_mid_2 = new lib.dev_bonds();
	this.dev_mid_2.name = "dev_mid_2";
	this.dev_mid_2.setTransform(-88,16.1,0.5726,0.5726,-52.4247,0,0,0,-0.1);
	this.dev_mid_2._off = true;

	this.dev_prime_2 = new lib.dev_prime();
	this.dev_prime_2.name = "dev_prime_2";
	this.dev_prime_2.setTransform(-103.65,15.65,0.7198,0.7198,-11.6956);
	this.dev_prime_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.dev_one_2).to({regY:-0.3,scaleX:0.5916,scaleY:0.5916,rotation:-28.8218,x:106.4,y:1.55},19).to({_off:true},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.dev_mid_2).wait(20).to({_off:false},0).to({regX:0.1,rotation:-19.4316,x:112.05,y:16.15},19).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.dev_prime_2).wait(40).to({_off:false},0).to({regX:0.2,regY:-0.1,scaleX:0.7791,scaleY:0.7791,rotation:17.7117,x:94.15,y:27},19).wait(1));

	// Layer_4
	this.instance_6 = new lib.BG01pngcopy();
	this.instance_6.setTransform(-193,-289,1.2042,1.2042);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-257.4,-289,476.7,578);


// stage content:
(lib.IqosProductsStories2 = function(mode,startPosition,loop,reversed) {
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
		this.nxt.alpha = 0.05;
		this.prv.alpha = 0.05;
		
		// Frame list untuk gallery
		this.frameList = [0, 20, 40];
		this.currentIndex = 0;
		
		// Set frame awal
		this.devices.gotoAndPlay(this.frameList[this.currentIndex]);
		
		// Flag & ticker reference
		let reverseTicker = null;
		
		// Fungsi play backward
		const playBackwardTo = (targetFrame) => {
		    if (reverseTicker) createjs.Ticker.removeEventListener("tick", reverseTicker);
		    reverseTicker = () => {
		        if (this.devices.currentFrame > targetFrame) {
		            this.devices.gotoAndStop(this.devices.currentFrame - 1);
		        } else {
		            createjs.Ticker.removeEventListener("tick", reverseTicker);
		        }
		    };
		    createjs.Ticker.addEventListener("tick", reverseTicker);
		};
		
		// Tombol Next (normal)
		this.nxt.addEventListener("click", () => {
		    this.currentIndex = (this.currentIndex + 1) % this.frameList.length;
		    this.devices.gotoAndPlay(this.frameList[this.currentIndex]);
		});
		
		// Tombol Previous (play backward)
		this.prv.addEventListener("click", () => {
		    let prevIndex = (this.currentIndex - 1 + this.frameList.length) % this.frameList.length;
		    let targetFrame = this.frameList[prevIndex];
		    playBackwardTo(targetFrame);
		    this.currentIndex = prevIndex;
		});
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
p.nominalBounds = new cjs.Rectangle(63.1,169.5,289.79999999999995,338);
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
		{src:"images/BG01pngcopy.png", id:"BG01pngcopy"},
		{src:"images/black.png", id:"black"},
		{src:"images/bondsblue.png", id:"bondsblue"},
		{src:"images/c01.png", id:"c01"},
		{src:"images/c02.png", id:"c02"},
		{src:"images/deviceveev.png", id:"deviceveev"},
		{src:"images/Findmore.png", id:"Findmore"},
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