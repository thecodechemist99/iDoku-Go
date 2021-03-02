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
// helper functions:

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


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#393D45").s().p("AAkL1Qg+gEgvgxQgwgygDhHQgzmtgfljQgRjEAJhuQARi9BagtQAqgVA3AJQAwAIApAbQBaA7AXCfQAMBVgDD9QgBCZAGDPQADB5AIDxQAGBTg5A8Qg0A2hEAAIgKAAg");
	this.shape.setTransform(-33.0461,-155.8221);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#393D45").s().p("Ai0nPQgIhJAug6QAug5BGgHQBJgHA4AzQA6A0ABBMIAURHIjYAyQhZqCg5ngg");
	this.shape_1.setTransform(-27.4663,-51.1922);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8816C").s().p("AgFF3QhEgogohIQgrhNAPhJQARhUALhFQgLhqAAg8QAAimBagFQAIAAAIADQAIAEACAHQAUBHgHA+IAFAVIANA0QAIAdAKAVQAUAsAzBhQAoBYgHBAQgBAJgJABQgIABgEgHQgMgWgZg4QgXgygPgcQgBAogDAeQgHBDAGBBQAFA8ARBGQACAGgGADQgGADgFgDQgVgMgPgVQgFgCgJgGIANAVQAHAKgIAJQgEAEgFAAQgDAAgFgDgAhHDQQgGgoACg8IABgFQgGAfAAAUQgBAcAJAZIABABIAAAAg");
	this.shape_2.setTransform(-16.7913,19.8421);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_3.setTransform(-63.275,-327.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D4523A").s().p("AiIgKQBCgRA9gFQBcgIA2AZQg3Arg9AGIgVABQhDAAhFgtg");
	this.shape_4.setTransform(-6.525,-292.4546);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#712311").s().p("AiLAbQgogaglgmIBeAGQDIAKBlgkIAAAAQAJgBALgFIASgJQgfA1g0AoQg3Asg9AHIgWABQhDAAhEgug");
	this.shape_5.setTransform(-6.225,-296.3352);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#993715").s().p("ABGAHQh6gfh1ApIAdgWQAkgYAngKQB9ghBtB3QgmgYg9gQg");
	this.shape_6.setTransform(24.25,-362.5797);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#993715").s().p("AiXAUQAggdAngRQB6g3CHBkQgrgShCgEQiEgKhwA8g");
	this.shape_7.setTransform(-33.6,-363.4581);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F08571").s().p("AhOBTQgwgcAIg3QAHgwAxgdQAwgcAzAJQAmAHAXAYQAXAYAAAeQAAAggZAdQgbAfgpALQgYAHgVAAQghAAgcgQg");
	this.shape_8.setTransform(25.9493,-323.7669);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F08571").s().p("AhlBNQgrggAAgtQAAgsArggQAqgfA7AAQA8AAArAfQAqAgAAAsQAAAtgqAgQgrAfg8AAQg7AAgqgfg");
	this.shape_9.setTransform(-31.45,-321.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#380F10").s().p("ACcBfQgDg7gfgqQglg0g9AFQgzAFglAnQgpA1geAgQgGAHgLgCQgLgBAAgJQAAhXBFgzQBFgyBOAdQA7AWAdA1QAbAvgEA9QgBAEgDABIgBAAQgDAAAAgFg");
	this.shape_10.setTransform(-32.4738,-350.0767);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AACAVQgLgBgJgIQgIgHAAgIQAAgJAIgFQAJgEALACQAKACAIAHQAHAGAAAIQAAAIgHAFQgGAEgJAAIgDAAg");
	this.shape_11.setTransform(-24.15,-351.4224);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3C1011").s().p("AgmA8QgUgXAAglQAAgjAUgYQATgYAZAEQAXAEAPAXQAPAXAAAdQAAAegPAXQgPAXgXADIgGABQgWAAgQgUg");
	this.shape_12.setTransform(-27.675,-344.2995);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#805343").s().p("Ag1BXQgeghAAg2QAAg1AeghQAdghAlAIQAfAGAUAhQAUAgAAAoQAAAogUAgQgUAhgfAHQgIABgGAAQgdAAgXgag");
	this.shape_13.setTransform(-28.325,-344.2913);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhTByQg4gnAAhIQAAhHA4gqQA1goBAAPQAvALAeAnQAdAlAAAuQAAAugdAmQgeAogvANQgVAFgSAAQgqAAgkgag");
	this.shape_14.setTransform(-30.4,-343.3786);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D8816C").s().p("AgNAmQgUgDgVgOIgRgNICPgvQgUBPg0AAIgNgCg");
	this.shape_15.setTransform(-0.875,-313.4794);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#380F10").s().p("Ah7BiQgGhFAgg3QAig8A+gNQA5gNAmAwQAlAtgGA/QgBAGgFACQgFACgDgFQgWgvgMgSQgUgigkgJQg5gOgoA5QgiAvgEBCQAAAGgFAAQgEAAAAgFg");
	this.shape_16.setTransform(24.245,-349.7052);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgUARQgIgFABgJQAAgIAJgHQAIgIALgBQALgBAIAGQAJAGgBAJQgBAIgIAHQgJAHgKABIgDAAQgKAAgHgFg");
	this.shape_17.setTransform(25.9538,-352.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3C1011").s().p("AgmA5QgOgUAAgfQABgeAQgYQARgYAVgCQAXgCAOAVQAPAWgCAgQgCAegQAWQgRAXgUABIgDAAQgTAAgOgSg");
	this.shape_18.setTransform(22.692,-345.2283);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#805343").s().p("Ag1BQQgVgbABgrQABgsAWgiQAXgiAfgDQAggDAVAfQAUAfgDAtQgDAqgXAgQgXAfgdACIgEAAQgbAAgSgag");
	this.shape_19.setTransform(22.7436,-345.4316);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhRBiQgfggAAgzQABg1AigqQAigqAvgFQAxgEAgAlQAgAlgFA3QgEAzgjAnQgjAlgsADIgGAAQgoAAgdgeg");
	this.shape_20.setTransform(23.8281,-344.9155);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D8816C").s().p("AgNBGQgCgSAGgZIAFgWQgrgYgXAgIgOAnQgEgTgBgbQgBg1ASgpQASgoA+A0QAgAaAcAjQAfAmgMAnQgGAUgMAMQgcAMgTAAQgfAAgEgkg");
	this.shape_21.setTransform(-68.8332,-347.1286);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EFA88F").s().p("AAICoQgogPghgkQhQhWAah0QAdiCBaA4QAuAdAoA2IAMAjQAPApAHAkQAWB1g6ATQgOAFgQAAQgWAAgYgJg");
	this.shape_22.setTransform(-70.741,-344.9086);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EFA88F").s().p("AjMK1QixhThOj0QgqiCgKixQgHhuAShtQCmhECCiBQCgifBDjWQBOCeB5B7QBzB1CSBNIAXEWQAFBCACApQAHCThRCeQhhC+iuBFQg8AZhJAIQgfAEgdAAQhgAAhTgmg");
	this.shape_23.setTransform(-12.0352,-336.5416);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D8816C").s().p("AhlFFQhCgaAAgyIAjnMQAAg3AngnQAognA2AAQA3AAAnAnQAnAoAAA2IAgGlQAOBOhPAkQgYAMgfAGIgaADQhEAAg1gUg");
	this.shape_24.setTransform(-19.876,-250.775);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E9E9E9").s().p("Agzg1IBjgWIAEB8IhTAbQgShugCgTgAgegYIAKBFIA5gPIgEhIg");
	this.shape_25.setTransform(22.825,-32.175);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D4D3D3").s().p("AgTB6IgJgNIgRjYIBGgQIARBjQAMBmgZAWQgaAYgPAAQgEAAgDgCg");
	this.shape_26.setTransform(6.2087,-27.424);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D4D3D3").s().p("AAeB5QgagBgegPQgfgQAKhpIAQhoIBIAQIAKDfQgGACgKAAIgFAAg");
	this.shape_27.setTransform(-19.822,-29.8208);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8F99B6").s().p("AhqBZQhDgFg/gPIgygNIACiSIBlAOQB2APBOAGQBPAGBogVQA0gKAkgMIADB7QiQA+ioAAQgoAAgpgEg");
	this.shape_28.setTransform(-0.875,-30.5286);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D4D3D3").s().p("AiJRQIhrgYQgXpfgMnLQgGjZgDjaQgFm1ATAAIABAAIABABQASgjAXgpQAvhTAdggQArgvBJgPQBFgPA/ASQBZAaA3BYQA5BZgFBxQhLKbhnKUQgwEygvEOQgPAGgaAAQgqAAhGgOg");
	this.shape_29.setTransform(-22.0866,267.0614);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D4D3D3").s().p("AjlRmQhehnAMiMIgCAAQgCvuBtqIQAhjLApiPIAihmIFsAuQA4FvgJJWQgIHzg1KCQgHB1hRBUQhOBRhmAEIgOABQhxAAhWheg");
	this.shape_30.setTransform(-18.9579,87.8671);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#022733").s().p("AggAhQgGgDgBgDQgJgbATgMQAOgJAIgEQAOgIAPABQAGAAAHAEQAHAEABAEQAAAJgNAGIgXAGQgQAGgIAFQgKAIAAAMQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgEAAg");
	this.shape_31.setTransform(3.4588,419.9385);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#022733").s().p("AgwAeQgFgDAAgDQgBgbAVgRQAcgWAxAWQAHADACAEQACAEgEAAIghAFQgSACgHAFIgQAPQgJAKgIAEIgBAAQgDAAgEgCg");
	this.shape_32.setTransform(-4.7852,416.7187);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#022733").s().p("ABCBwQgFgCgBgDQgNgkALgUIgaAFIgtAFQgXABgRgGQgUgHgYgVQgegagDgTQgEgVAhACQAdACAfAPQAVALAjAYQgVgdgJgRQgOgZgBgTQgBgVAHgJQAKgQAdAQQAZAPAQAeQAGAMAKAgQAMArgPAMQARgJAjANQAGACADAEQADAEgDABIgbAHQgPAFgDAJIgFATQgDAMgFAFIgCABIgEgBgAhxgOQgCALARASQARASAWALQAHAEAKAAIAOgBIAWgEQAUgDAPgBQgugkgQgHQgZgNgZgFIgMgBQgQAAgCAJgAgDhMQgCAQACANQADAPANAWIAcAmQAPgOgLglQgHgagDgGQgKgWgPgNQgDgCgCAAQgGAAgCAQg");
	this.shape_33.setTransform(-21.9228,405.4187);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#393D45").s().p("AnrCrQgchuAghtQAXhMAzhAQBQAgBDghQCQBxCmA2QBjAgDSAaQBIAJAeAKQApAOAHAaQALAmg5A5g");
	this.shape_34.setTransform(-0.8907,418.875);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EFA88F").s().p("Ah4GIQgVgEgRgKIAthXIATgjIAUgjQghhxgJh0QgLiEASiBQAFgxAigjQAhgjAtgGQA1gGAsAjQAtAjAJA5Qg6ERhQDnQANAZgBAYQAAAjgZAfQgWAdgiAMQgVAJgWAAQgOAAgPgEg");
	this.shape_35.setTransform(-30.925,370.8515);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#022733").s().p("ABtNdQgehOg8i6QgriIggiSQg4j3gtldQg0mJAIiZQAFh6A0gdQAngXA3AJQAwAHApAbQA9AnAcBQQAYBGAEB5QACBRgHC3QgJDggBBvQgDFZAsGfQASCsACAjQAEBKgRADIgCABQgagBg0iGg");
	this.shape_36.setTransform(-23.7428,-131.2329);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#022733").s().p("AASBAQg6gUgqg2QgVgdgMghQBIArBTAFQAmACAigFIAEBgQgUAEgTAAQgfAAgcgJg");
	this.shape_37.setTransform(13.2,-148.7158);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#393D45").s().p("AkFEaQgThNglhyIhAjGQhPj+gaj0QgNh9AIhCQALhQAtguQBIhHCPAIQBtAGBsAtQA0AXBZBaQA7A7CuDFQBOBYAXAmQAcAvgGAqQgLBChSAzQgtAcg4ASQARG7gHGzQgBBbgFCwIoMAdQAql3hTlKg");
	this.shape_38.setTransform(-5.517,-132.7902);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D4D3D3").s().p("AClRWIhugFQh/pRhdnCQgtjVgojWQhSmtASgDIABgBIABAAQAMglAQgtQAfhaAYgkQAig1BFgdQBBgbBBAIQBcAKBGBMQBIBOAPBwQAqKXAPKjQAHEZABEvQghAThoAAIgQAAg");
	this.shape_39.setTransform(36.9872,262.3736);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D4D3D3").s().p("AhBR5QhvhVgMiMIgCAAQizvdgHqSQgCjNAPiUIAPhqIFvgTQB3FfBgJPQBQHsA9KBQAOB1hBBgQg/BehlAXQgdAGgdAAQhXAAhQg9g");
	this.shape_40.setTransform(22.9793,85.6344);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#022733").s().p("AgZAlQgGgBgCgCQgNgaARgOQALgMAIgFQAMgLAPgCQAGgBAIACQAIADABAFQACAJgMAHQgHAEgPAHQgPAIgGAHQgJAKADALQAAAAAAABQgBAAAAAAQAAAAgBAAQAAABgBAAIgDgBg");
	this.shape_41.setTransform(99.5905,408.225);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#022733").s().p("AgpAjQgGgCgBgDQgGgbASgUQAYgbAzANQAHACADADQADADgEACIgfAKQgRAGgHAGIgMASQgIAKgHAGIgDABIgEgBg");
	this.shape_42.setTransform(91.0298,406.8138);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#022733").s().p("ABSBoQgFgBgCgDQgSgiAHgVIgZAKIgrANQgXAFgRgDQgVgDgcgRQgigUgHgTQgHgTAggEQAegDAgAKQAXAFAnASQgZgXgNgQQgRgWgFgTQgEgUAEgLQAIgRAgALQAbAJAUAcQAIAKAPAeQAUAogMAOQAQgMAkAHQAFABAEADQAEAEgDABQgIAFgRAIQgOAHgCAJIgBAUQgBAMgEAGQAAABAAAAQgBAAAAAAQAAAAgBAAQAAABgBAAIgDgBgAhYgBQgbAAgBAMQAAALAUAPQAUAPAYAHQAHACAKgBIANgDIAVgIQATgHAPgDIghgSQgVgKgPgFQgZgHgYAAIgDAAgAgShFQAAATAFAKQAFAOARATQAJAJAZAXQANgPgSgjIgQgeQgNgUgQgJIgGgCQgHAAACARg");
	this.shape_43.setTransform(72.394,397.8294);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#393D45").s().p("An0gTQAJhQAmhHQBUASA9gsQCiBVCsAYQBoAPDTgLQBJgDAfAEQArAHAMAXQARAlguBAIupCVQgvhqANhvg");
	this.shape_44.setTransform(96.4904,413.65);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EFA88F").s().p("AgZGSQgXgBgRgGQAPgvANgwQATgyAHgZQgzhogfhyQghh/gFiDQgDgxAagpQAbgoAsgOQAygPAyAaQAzAbASA3QgJEXgmDxQARAVADAZQAGAjgTAiQgRAggfATQgdASgkAAIgEAAg");
	this.shape_45.setTransform(54.8546,366.5415);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#393D45").s().p("ABGLAQg5gngShEQiSmqhllCQg7i7gOhvQgYi9BPg/QAkgdA4gDQAxgCAvARQBjAnA4CWQAeBPAzD5QAfCVAyDLIBZFeQAXBQgrBHQgqBEhJAMQgNACgNAAQgwAAgtgeg");
	this.shape_46.setTransform(-5.2552,-152.9115);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#393D45").s().p("AlolpQgkhAAVhHQAVhHA+ghQBBgiBIAaQBJAZAeBHIBPC0IFkM4Ii2CBQk0oQj9nGg");
	this.shape_47.setTransform(34.0132,-47.6587);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D8816C").s().p("ACbFJQgdhCghgyQgjg2gvgxQgdgggQgVQAFAfAMA1QAPA8ADAZQACAIgHAFQgHAEgGgGQgtgugXheQgUhsgLgwQgFgWgMgcIgWgwIgJgUQgsgtgbhEQgDgHAEgJQAEgHAHgFQBKg0BmCEQAkAuA5BbQA9A5A4AuQA5AwANBYQANBQgdBKQgEAMgLgCQgLgCgBgMIgDgZIgGAQQABAbgJAVQgDAFgGACIgBAAQgFAAgDgFgABrAnQAoAwATAhIAAgBQgIgZgSgWQgMgQgYgVg");
	this.shape_48.setTransform(67.7055,20.7474);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#C04517").s().p("AkbZvQjUgri1hZQi+hch9iAQiOiRgSiwQgOiRBHi6QArhxB4jcQB2jaAnhnQA4iTAijVIAwl2QAejgAoiOQA2jABhiNQBSh2CPg+QCBg4CbAAQBNAAA2ARQCJgPBmAyQB9A+BBCgQArBmA6EgQA5EVAgBDQCeFNBBDUQBaEkgDEkQgDFzimE0Qi1FPk1CCQigBDjQALQgpACgpAAQihAAingig");
	this.shape_49.setTransform(-31.4688,-269.688);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D4D3D3").s().p("AidHOQg4gRg1giQhkhBgjhjQgmhpAjiKQAgiABTh2QBUh3Bog/QBvhEBlAVQCLAdBfCkQBlCsggC7QgkDVi5BxQhSAyhdAOQgiAGgiAAQg3AAg0gPg");
	this.shape_50.setTransform(-9.2401,16.5621);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-146.9,-437.8,293.8,875.7), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#393D45").s().p("AAkL1Qg+gEgvgxQgwgygDhHQgzmtgfljQgRjEAJhuQARi9BagtQAqgVA3AJQAwAIApAbQBaA7AXCfQAMBVgDD9QgBCZAGDPQADB5AIDxQAGBTg5A8Qg0A2hEAAIgKAAg");
	this.shape.setTransform(-33.0461,-155.8221);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#393D45").s().p("Ai0nPQgIhJAug6QAug5BGgHQBJgHA4AzQA6A0ABBMIAURHIjYAyQhZqCg5ngg");
	this.shape_1.setTransform(-27.4663,-51.1922);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8816C").s().p("AgFF3QhEgogohIQgrhNAPhJQARhUALhFQgLhqAAg8QAAimBagFQAIAAAIADQAIAEACAHQAUBHgHA+IAFAVIANA0QAIAdAKAVQAUAsAzBhQAoBYgHBAQgBAJgJABQgIABgEgHQgMgWgZg4QgXgygPgcQgBAogDAeQgHBDAGBBQAFA8ARBGQACAGgGADQgGADgFgDQgVgMgPgVQgFgCgJgGIANAVQAHAKgIAJQgEAEgFAAQgDAAgFgDgAhHDQQgGgoACg8IABgFQgGAfAAAUQgBAcAJAZIABABIAAAAg");
	this.shape_2.setTransform(-16.7913,19.8421);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_3.setTransform(-63.275,-327.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D4523A").s().p("AiIgKQBCgRA9gFQBcgIA2AZQg3Arg9AGIgVABQhDAAhFgtg");
	this.shape_4.setTransform(-6.525,-292.4546);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#712311").s().p("AiLAbQgogaglgmIBeAGQDIAKBlgkIAAAAQAJgBALgFIASgJQgfA1g0AoQg3Asg9AHIgWABQhDAAhEgug");
	this.shape_5.setTransform(-6.225,-296.3352);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#993715").s().p("ABGAHQh6gfh1ApIAdgWQAkgYAngKQB9ghBtB3QgmgYg9gQg");
	this.shape_6.setTransform(24.25,-362.5797);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#993715").s().p("AiXAUQAggdAngRQB6g3CHBkQgrgShCgEQiEgKhwA8g");
	this.shape_7.setTransform(-33.6,-363.4581);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F08571").s().p("AhOBTQgwgcAIg3QAHgwAxgdQAwgcAzAJQAmAHAXAYQAXAYAAAeQAAAggZAdQgbAfgpALQgYAHgVAAQghAAgcgQg");
	this.shape_8.setTransform(25.9493,-323.7669);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F08571").s().p("AhlBNQgrggAAgtQAAgsArggQAqgfA7AAQA8AAArAfQAqAgAAAsQAAAtgqAgQgrAfg8AAQg7AAgqgfg");
	this.shape_9.setTransform(-31.45,-321.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#380F10").s().p("ACcBfQgDg7gfgqQglg0g9AFQgzAFglAnQgpA1geAgQgGAHgLgCQgLgBAAgJQAAhXBFgzQBFgyBOAdQA7AWAdA1QAbAvgEA9QgBAEgDABIgBAAQgDAAAAgFg");
	this.shape_10.setTransform(-32.4738,-350.0767);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AACAVQgLgBgJgIQgIgHAAgIQAAgJAIgFQAJgEALACQAKACAIAHQAHAGAAAIQAAAIgHAFQgGAEgJAAIgDAAg");
	this.shape_11.setTransform(-24.15,-351.4224);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3C1011").s().p("AgmA8QgUgXAAglQAAgjAUgYQATgYAZAEQAXAEAPAXQAPAXAAAdQAAAegPAXQgPAXgXADIgGABQgWAAgQgUg");
	this.shape_12.setTransform(-27.675,-344.2995);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#805343").s().p("Ag1BXQgeghAAg2QAAg1AeghQAdghAlAIQAfAGAUAhQAUAgAAAoQAAAogUAgQgUAhgfAHQgIABgGAAQgdAAgXgag");
	this.shape_13.setTransform(-28.325,-344.2913);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhTByQg4gnAAhIQAAhHA4gqQA1goBAAPQAvALAeAnQAdAlAAAuQAAAugdAmQgeAogvANQgVAFgSAAQgqAAgkgag");
	this.shape_14.setTransform(-30.4,-343.3786);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D8816C").s().p("AgNAmQgUgDgVgOIgRgNICPgvQgUBPg0AAIgNgCg");
	this.shape_15.setTransform(-0.875,-313.4794);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#380F10").s().p("Ah7BiQgGhFAgg3QAig8A+gNQA5gNAmAwQAlAtgGA/QgBAGgFACQgFACgDgFQgWgvgMgSQgUgigkgJQg5gOgoA5QgiAvgEBCQAAAGgFAAQgEAAAAgFg");
	this.shape_16.setTransform(24.245,-349.7052);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgUARQgIgFABgJQAAgIAJgHQAIgIALgBQALgBAIAGQAJAGgBAJQgBAIgIAHQgJAHgKABIgDAAQgKAAgHgFg");
	this.shape_17.setTransform(25.9538,-352.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3C1011").s().p("AgmA5QgOgUAAgfQABgeAQgYQARgYAVgCQAXgCAOAVQAPAWgCAgQgCAegQAWQgRAXgUABIgDAAQgTAAgOgSg");
	this.shape_18.setTransform(22.692,-345.2283);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#805343").s().p("Ag1BQQgVgbABgrQABgsAWgiQAXgiAfgDQAggDAVAfQAUAfgDAtQgDAqgXAgQgXAfgdACIgEAAQgbAAgSgag");
	this.shape_19.setTransform(22.7436,-345.4316);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhRBiQgfggAAgzQABg1AigqQAigqAvgFQAxgEAgAlQAgAlgFA3QgEAzgjAnQgjAlgsADIgGAAQgoAAgdgeg");
	this.shape_20.setTransform(23.8281,-344.9155);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D8816C").s().p("AgNBGQgCgSAGgZIAFgWQgrgYgXAgIgOAnQgEgTgBgbQgBg1ASgpQASgoA+A0QAgAaAcAjQAfAmgMAnQgGAUgMAMQgcAMgTAAQgfAAgEgkg");
	this.shape_21.setTransform(-68.8332,-347.1286);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EFA88F").s().p("AAICoQgogPghgkQhQhWAah0QAdiCBaA4QAuAdAoA2IAMAjQAPApAHAkQAWB1g6ATQgOAFgQAAQgWAAgYgJg");
	this.shape_22.setTransform(-70.741,-344.9086);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EFA88F").s().p("AjMK1QixhThOj0QgqiCgKixQgHhuAShtQCmhECCiBQCgifBDjWQBOCeB5B7QBzB1CSBNIAXEWQAFBCACApQAHCThRCeQhhC+iuBFQg8AZhJAIQgfAEgdAAQhgAAhTgmg");
	this.shape_23.setTransform(-12.0352,-336.5416);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D8816C").s().p("AhlFFQhCgaAAgyIAjnMQAAg3AngnQAognA2AAQA3AAAnAnQAnAoAAA2IAgGlQAOBOhPAkQgYAMgfAGIgaADQhEAAg1gUg");
	this.shape_24.setTransform(-19.876,-250.775);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E9E9E9").s().p("Agzg1IBjgWIAEB8IhTAbQgShugCgTgAgegYIAKBFIA5gPIgEhIg");
	this.shape_25.setTransform(22.825,-32.175);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D4D3D3").s().p("AgTB6IgJgNIgRjYIBGgQIARBjQAMBmgZAWQgaAYgPAAQgEAAgDgCg");
	this.shape_26.setTransform(6.2087,-27.424);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D4D3D3").s().p("AAeB5QgagBgegPQgfgQAKhpIAQhoIBIAQIAKDfQgGACgKAAIgFAAg");
	this.shape_27.setTransform(-19.822,-29.8208);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8F99B6").s().p("AhqBZQhDgFg/gPIgygNIACiSIBlAOQB2APBOAGQBPAGBogVQA0gKAkgMIADB7QiQA+ioAAQgoAAgpgEg");
	this.shape_28.setTransform(-0.875,-30.5286);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D4D3D3").s().p("AiJRQIhrgYQgXpfgMnLQgGjZgDjaQgFm1ATAAIABAAIABABQASgjAXgpQAvhTAdggQArgvBJgPQBFgPA/ASQBZAaA3BYQA5BZgFBxQhLKbhnKUQgwEygvEOQgPAGgaAAQgqAAhGgOg");
	this.shape_29.setTransform(-22.0866,267.0614);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D4D3D3").s().p("AjlRmQhehnAMiMIgCAAQgCvuBtqIQAhjLApiPIAihmIFsAuQA4FvgJJWQgIHzg1KCQgHB1hRBUQhOBRhmAEIgOABQhxAAhWheg");
	this.shape_30.setTransform(-18.9579,87.8671);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#022733").s().p("AggAhQgGgDgBgDQgJgbATgMQAOgJAIgEQAOgIAPABQAGAAAHAEQAHAEABAEQAAAJgNAGIgXAGQgQAGgIAFQgKAIAAAMQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgEAAg");
	this.shape_31.setTransform(3.4588,419.9385);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#022733").s().p("AgwAeQgFgDAAgDQgBgbAVgRQAcgWAxAWQAHADACAEQACAEgEAAIghAFQgSACgHAFIgQAPQgJAKgIAEIgBAAQgDAAgEgCg");
	this.shape_32.setTransform(-4.7852,416.7187);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#022733").s().p("ABCBwQgFgCgBgDQgNgkALgUIgaAFIgtAFQgXABgRgGQgUgHgYgVQgegagDgTQgEgVAhACQAdACAfAPQAVALAjAYQgVgdgJgRQgOgZgBgTQgBgVAHgJQAKgQAdAQQAZAPAQAeQAGAMAKAgQAMArgPAMQARgJAjANQAGACADAEQADAEgDABIgbAHQgPAFgDAJIgFATQgDAMgFAFIgCABIgEgBgAhxgOQgCALARASQARASAWALQAHAEAKAAIAOgBIAWgEQAUgDAPgBQgugkgQgHQgZgNgZgFIgMgBQgQAAgCAJgAgDhMQgCAQACANQADAPANAWIAcAmQAPgOgLglQgHgagDgGQgKgWgPgNQgDgCgCAAQgGAAgCAQg");
	this.shape_33.setTransform(-21.9228,405.4187);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#393D45").s().p("AnrCrQgchuAghtQAXhMAzhAQBQAgBDghQCQBxCmA2QBjAgDSAaQBIAJAeAKQApAOAHAaQALAmg5A5g");
	this.shape_34.setTransform(-0.8907,418.875);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EFA88F").s().p("Ah4GIQgVgEgRgKIAthXIATgjIAUgjQghhxgJh0QgLiEASiBQAFgxAigjQAhgjAtgGQA1gGAsAjQAtAjAJA5Qg6ERhQDnQANAZgBAYQAAAjgZAfQgWAdgiAMQgVAJgWAAQgOAAgPgEg");
	this.shape_35.setTransform(-30.925,370.8515);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#022733").s().p("ABtNdQgehOg8i6QgriIggiSQg4j3gtldQg0mJAIiZQAFh6A0gdQAngXA3AJQAwAHApAbQA9AnAcBQQAYBGAEB5QACBRgHC3QgJDggBBvQgDFZAsGfQASCsACAjQAEBKgRADIgCABQgagBg0iGg");
	this.shape_36.setTransform(-23.7428,-131.2329);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#022733").s().p("AASBAQg6gUgqg2QgVgdgMghQBIArBTAFQAmACAigFIAEBgQgUAEgTAAQgfAAgcgJg");
	this.shape_37.setTransform(13.2,-148.7158);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#393D45").s().p("AkFEaQgThNglhyIhAjGQhPj+gaj0QgNh9AIhCQALhQAtguQBIhHCPAIQBtAGBsAtQA0AXBZBaQA7A7CuDFQBOBYAXAmQAcAvgGAqQgLBChSAzQgtAcg4ASQARG7gHGzQgBBbgFCwIoMAdQAql3hTlKg");
	this.shape_38.setTransform(-5.517,-132.7902);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D4D3D3").s().p("AClRWIhugFQh/pRhdnCQgtjVgojWQhSmtASgDIABgBIABAAQAMglAQgtQAfhaAYgkQAig1BFgdQBBgbBBAIQBcAKBGBMQBIBOAPBwQAqKXAPKjQAHEZABEvQghAThoAAIgQAAg");
	this.shape_39.setTransform(36.9872,262.3736);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D4D3D3").s().p("AhBR5QhvhVgMiMIgCAAQizvdgHqSQgCjNAPiUIAPhqIFvgTQB3FfBgJPQBQHsA9KBQAOB1hBBgQg/BehlAXQgdAGgdAAQhXAAhQg9g");
	this.shape_40.setTransform(22.9793,85.6344);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#022733").s().p("AgZAlQgGgBgCgCQgNgaARgOQALgMAIgFQAMgLAPgCQAGgBAIACQAIADABAFQACAJgMAHQgHAEgPAHQgPAIgGAHQgJAKADALQAAAAAAABQgBAAAAAAQAAAAgBAAQAAABgBAAIgDgBg");
	this.shape_41.setTransform(99.5905,408.225);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#022733").s().p("AgpAjQgGgCgBgDQgGgbASgUQAYgbAzANQAHACADADQADADgEACIgfAKQgRAGgHAGIgMASQgIAKgHAGIgDABIgEgBg");
	this.shape_42.setTransform(91.0298,406.8138);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#022733").s().p("ABSBoQgFgBgCgDQgSgiAHgVIgZAKIgrANQgXAFgRgDQgVgDgcgRQgigUgHgTQgHgTAggEQAegDAgAKQAXAFAnASQgZgXgNgQQgRgWgFgTQgEgUAEgLQAIgRAgALQAbAJAUAcQAIAKAPAeQAUAogMAOQAQgMAkAHQAFABAEADQAEAEgDABQgIAFgRAIQgOAHgCAJIgBAUQgBAMgEAGQAAABAAAAQgBAAAAAAQAAAAgBAAQAAABgBAAIgDgBgAhYgBQgbAAgBAMQAAALAUAPQAUAPAYAHQAHACAKgBIANgDIAVgIQATgHAPgDIghgSQgVgKgPgFQgZgHgYAAIgDAAgAgShFQAAATAFAKQAFAOARATQAJAJAZAXQANgPgSgjIgQgeQgNgUgQgJIgGgCQgHAAACARg");
	this.shape_43.setTransform(72.394,397.8294);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#393D45").s().p("An0gTQAJhQAmhHQBUASA9gsQCiBVCsAYQBoAPDTgLQBJgDAfAEQArAHAMAXQARAlguBAIupCVQgvhqANhvg");
	this.shape_44.setTransform(96.4904,413.65);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EFA88F").s().p("AgZGSQgXgBgRgGQAPgvANgwQATgyAHgZQgzhogfhyQghh/gFiDQgDgxAagpQAbgoAsgOQAygPAyAaQAzAbASA3QgJEXgmDxQARAVADAZQAGAjgTAiQgRAggfATQgdASgkAAIgEAAg");
	this.shape_45.setTransform(54.8546,366.5415);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#393D45").s().p("ABGLAQg5gngShEQiSmqhllCQg7i7gOhvQgYi9BPg/QAkgdA4gDQAxgCAvARQBjAnA4CWQAeBPAzD5QAfCVAyDLIBZFeQAXBQgrBHQgqBEhJAMQgNACgNAAQgwAAgtgeg");
	this.shape_46.setTransform(-5.2552,-152.9115);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#393D45").s().p("AlolpQgkhAAVhHQAVhHA+ghQBBgiBIAaQBJAZAeBHIBPC0IFkM4Ii2CBQk0oQj9nGg");
	this.shape_47.setTransform(34.0132,-47.6587);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D8816C").s().p("ACbFJQgdhCghgyQgjg2gvgxQgdgggQgVQAFAfAMA1QAPA8ADAZQACAIgHAFQgHAEgGgGQgtgugXheQgUhsgLgwQgFgWgMgcIgWgwIgJgUQgsgtgbhEQgDgHAEgJQAEgHAHgFQBKg0BmCEQAkAuA5BbQA9A5A4AuQA5AwANBYQANBQgdBKQgEAMgLgCQgLgCgBgMIgDgZIgGAQQABAbgJAVQgDAFgGACIgBAAQgFAAgDgFgABrAnQAoAwATAhIAAgBQgIgZgSgWQgMgQgYgVg");
	this.shape_48.setTransform(67.7055,20.7474);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#C04517").s().p("AkbZvQjUgri1hZQi+hch9iAQiOiRgSiwQgOiRBHi6QArhxB4jcQB2jaAnhnQA4iTAijVIAwl2QAejgAoiOQA2jABhiNQBSh2CPg+QCBg4CbAAQBNAAA2ARQCJgPBmAyQB9A+BBCgQArBmA6EgQA5EVAgBDQCeFNBBDUQBaEkgDEkQgDFzimE0Qi1FPk1CCQigBDjQALQgpACgpAAQihAAingig");
	this.shape_49.setTransform(-31.4688,-269.688);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D4D3D3").s().p("AidHOQg4gRg1giQhkhBgjhjQgmhpAjiKQAgiABTh2QBUh3Bog/QBvhEBlAVQCLAdBfCkQBlCsggC7QgkDVi5BxQhSAyhdAOQgiAGgiAAQg3AAg0gPg");
	this.shape_50.setTransform(-9.2401,16.5621);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-146.9,-437.8,293.8,875.7), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#393D45").s().p("AAkL1Qg+gEgvgxQgwgygDhHQgzmtgfljQgRjEAJhuQARi9BagtQAqgVA3AJQAwAIApAbQBaA7AXCfQAMBVgDD9QgBCZAGDPQADB5AIDxQAGBTg5A8Qg0A2hEAAIgKAAg");
	this.shape.setTransform(35.3339,-152.2024,0.9998,0.9998,7.4055);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#393D45").s().p("Ai0nPQgIhJAug6QAug5BGgHQBJgHA4AzQA6A0ABBMIAURHIjYAyQhZqCg5ngg");
	this.shape_1.setTransform(40.2447,-48.2012,0.9996,0.9996,-8.2293);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8816C").s().p("AgFF3QhEgogohIQgrhNAPhJQARhUALhFQgLhqAAg8QAAimBagFQAIAAAIADQAIAEACAHQAUBHgHA+IAFAVIANA0QAIAdAKAVQAUAsAzBhQAoBYgHBAQgBAJgJABQgIABgEgHQgMgWgZg4QgXgygPgcQgBAogDAeQgHBDAGBBQAFA8ARBGQACAGgGADQgGADgFgDQgVgMgPgVQgFgCgJgGIANAVQAHAKgIAJQgEAEgFAAQgDAAgFgDgAhHDQQgGgoACg8IABgFQgGAfAAAUQgBAcAJAZIABABIAAAAg");
	this.shape_2.setTransform(60.9695,20.5481,0.9996,0.9996,-8.2293);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_3.setTransform(14.575,-325.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D4523A").s().p("AiIgKQBCgRA9gFQBcgIA2AZQg3Arg9AGIgVABQhDAAhFgtg");
	this.shape_4.setTransform(71.325,-290.8046);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#712311").s().p("AiLAbQgogaglgmIBeAGQDIAKBlgkIAAAAQAJgBALgFIASgJQgfA1g0AoQg3Asg9AHIgWABQhDAAhEgug");
	this.shape_5.setTransform(71.625,-294.6852);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#993715").s().p("ABGAHQh6gfh1ApIAdgWQAkgYAngKQB9ghBtB3QgmgYg9gQg");
	this.shape_6.setTransform(102.1,-360.9297);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#993715").s().p("AiXAUQAggdAngRQB6g3CHBkQgrgShCgEQiEgKhwA8g");
	this.shape_7.setTransform(44.25,-361.8081);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F08571").s().p("AhOBTQgwgcAIg3QAHgwAxgdQAwgcAzAJQAmAHAXAYQAXAYAAAeQAAAggZAdQgbAfgpALQgYAHgVAAQghAAgcgQg");
	this.shape_8.setTransform(103.7993,-322.1169);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F08571").s().p("AhlBNQgrggAAgtQAAgsArggQAqgfA7AAQA8AAArAfQAqAgAAAsQAAAtgqAgQgrAfg8AAQg7AAgqgfg");
	this.shape_9.setTransform(46.4,-320.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#380F10").s().p("ACcBfQgDg7gfgqQglg0g9AFQgzAFglAnQgpA1geAgQgGAHgLgCQgLgBAAgJQAAhXBFgzQBFgyBOAdQA7AWAdA1QAbAvgEA9QgBAEgDABIgBAAQgDAAAAgFg");
	this.shape_10.setTransform(45.3762,-348.4267);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AACAVQgLgBgJgIQgIgHAAgIQAAgJAIgFQAJgEALACQAKACAIAHQAHAGAAAIQAAAIgHAFQgGAEgJAAIgDAAg");
	this.shape_11.setTransform(53.7,-349.7724);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3C1011").s().p("AgmA8QgUgXAAglQAAgjAUgYQATgYAZAEQAXAEAPAXQAPAXAAAdQAAAegPAXQgPAXgXADIgGABQgWAAgQgUg");
	this.shape_12.setTransform(50.175,-342.6495);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#805343").s().p("Ag1BXQgeghAAg2QAAg1AeghQAdghAlAIQAfAGAUAhQAUAgAAAoQAAAogUAgQgUAhgfAHQgIABgGAAQgdAAgXgag");
	this.shape_13.setTransform(49.525,-342.6413);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhTByQg4gnAAhIQAAhHA4gqQA1goBAAPQAvALAeAnQAdAlAAAuQAAAugdAmQgeAogvANQgVAFgSAAQgqAAgkgag");
	this.shape_14.setTransform(47.45,-341.7286);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D8816C").s().p("AgNAmQgUgDgVgOIgRgNICPgvQgUBPg0AAIgNgCg");
	this.shape_15.setTransform(76.975,-311.8294);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#380F10").s().p("Ah7BiQgGhFAgg3QAig8A+gNQA5gNAmAwQAlAtgGA/QgBAGgFACQgFACgDgFQgWgvgMgSQgUgigkgJQg5gOgoA5QgiAvgEBCQAAAGgFAAQgEAAAAgFg");
	this.shape_16.setTransform(102.095,-348.0552);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgUARQgIgFABgJQAAgIAJgHQAIgIALgBQALgBAIAGQAJAGgBAJQgBAIgIAHQgJAHgKABIgDAAQgKAAgHgFg");
	this.shape_17.setTransform(103.8038,-350.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3C1011").s().p("AgmA5QgOgUAAgfQABgeAQgYQARgYAVgCQAXgCAOAVQAPAWgCAgQgCAegQAWQgRAXgUABIgDAAQgTAAgOgSg");
	this.shape_18.setTransform(100.542,-343.5783);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#805343").s().p("Ag1BQQgVgbABgrQABgsAWgiQAXgiAfgDQAggDAVAfQAUAfgDAtQgDAqgXAgQgXAfgdACIgEAAQgbAAgSgag");
	this.shape_19.setTransform(100.5936,-343.7816);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhRBiQgfggAAgzQABg1AigqQAigqAvgFQAxgEAgAlQAgAlgFA3QgEAzgjAnQgjAlgsADIgGAAQgoAAgdgeg");
	this.shape_20.setTransform(101.6781,-343.2655);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D8816C").s().p("AgNBGQgCgSAGgZIAFgWQgrgYgXAgIgOAnQgEgTgBgbQgBg1ASgpQASgoA+A0QAgAaAcAjQAfAmgMAnQgGAUgMAMQgcAMgTAAQgfAAgEgkg");
	this.shape_21.setTransform(9.0168,-345.4786);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EFA88F").s().p("AAICoQgogPghgkQhQhWAah0QAdiCBaA4QAuAdAoA2IAMAjQAPApAHAkQAWB1g6ATQgOAFgQAAQgWAAgYgJg");
	this.shape_22.setTransform(7.109,-343.2586);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EFA88F").s().p("AjMK1QixhThOj0QgqiCgKixQgHhuAShtQCmhECCiBQCgifBDjWQBOCeB5B7QBzB1CSBNIAXEWQAFBCACApQAHCThRCeQhhC+iuBFQg8AZhJAIQgfAEgdAAQhgAAhTgmg");
	this.shape_23.setTransform(65.8148,-334.8916);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D8816C").s().p("AhlFFQhCgaAAgyIAjnMQAAg3AngnQAognA2AAQA3AAAnAnQAnAoAAA2IAgGlQAOBOhPAkQgYAMgfAGIgaADQhEAAg1gUg");
	this.shape_24.setTransform(57.974,-249.125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E9E9E9").s().p("Agzg1IBjgWIAEB8IhTAbQgShugCgTgAgegYIAKBFIA5gPIgEhIg");
	this.shape_25.setTransform(100.675,-30.525);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D4D3D3").s().p("AgTB6IgJgNIgRjYIBGgQIARBjQAMBmgZAWQgaAYgPAAQgEAAgDgCg");
	this.shape_26.setTransform(84.0587,-25.774);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D4D3D3").s().p("AAeB5QgagBgegPQgfgQAKhpIAQhoIBIAQIAKDfQgGACgKAAIgFAAg");
	this.shape_27.setTransform(58.028,-28.1708);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8F99B6").s().p("AhqBZQhDgFg/gPIgygNIACiSIBlAOQB2APBOAGQBPAGBogVQA0gKAkgMIADB7QiQA+ioAAQgoAAgpgEg");
	this.shape_28.setTransform(76.975,-28.8786);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D4D3D3").s().p("AiJRQIhrgYQgXpfgMnLQgGjZgDjaQgFm1ATAAIABAAIABABQASgjAXgpQAvhTAdggQArgvBJgPQBFgPA/ASQBZAaA3BYQA5BZgFBxQhLKbhnKUQgwEygvEOQgPAGgaAAQgqAAhGgOg");
	this.shape_29.setTransform(-27.5022,233.1181,0.9998,0.9998,52.635);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#022733").s().p("AggAhQgGgDgBgDQgJgbATgMQAOgJAIgEQAOgIAPABQAGAAAHAEQAHAEABAEQAAAJgNAGIgXAGQgQAGgIAFQgKAIAAAMQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgEAAg");
	this.shape_30.setTransform(-133.767,346.0551,0.9996,0.9996,52.6349);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#022733").s().p("AgwAeQgFgDAAgDQgBgbAVgRQAcgWAxAWQAHADACAEQACAEgEAAIghAFQgSACgHAFIgQAPQgJAKgIAEIgBAAQgDAAgEgCg");
	this.shape_31.setTransform(-136.2102,337.552,0.9996,0.9996,52.6349);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#022733").s().p("ABCBwQgFgCgBgDQgNgkALgUIgaAFIgtAFQgXABgRgGQgUgHgYgVQgegagDgTQgEgVAhACQAdACAfAPQAVALAjAYQgVgdgJgRQgOgZgBgTQgBgVAHgJQAKgQAdAQQAZAPAQAeQAGAMAKAgQAMArgPAMQARgJAjANQAGACADAEQADAEgDABIgbAHQgPAFgDAJIgFATQgDAMgFAFIgCABIgEgBgAhxgOQgCALARASQARASAWALQAHAEAKAAIAOgBIAWgEQAUgDAPgBQgugkgQgHQgZgNgZgFIgMgBQgQAAgCAJgAgDhMQgCAQACANQADAPANAWIAcAmQAPgOgLglQgHgagDgGQgKgWgPgNQgDgCgCAAQgGAAgCAQg");
	this.shape_32.setTransform(-137.6292,317.0814,0.9996,0.9996,52.6349);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#393D45").s().p("AnrCrQgchuAghtQAXhMAzhAQBQAgBDghQCQBxCmA2QBjAgDSAaQBIAJAeAKQApAOAHAaQALAmg5A5g");
	this.shape_33.setTransform(-135.5607,341.9544,0.9996,0.9996,52.6349);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EFA88F").s().p("Ah4GIQgVgEgRgKIAthXIATgjIAUgjQghhxgJh0QgLiEASiBQAFgxAigjQAhgjAtgGQA1gGAsAjQAtAjAJA5Qg6ERhQDnQANAZgBAYQAAAjgZAfQgWAdgiAMQgVAJgWAAQgOAAgPgEg");
	this.shape_34.setTransform(-115.6276,288.9588,0.9996,0.9996,52.6349);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D4D3D3").s().p("AjlRmQhehnAMiMIgCAAQgCvuBtqIQAhjLApiPIAihmIFsAuQA4FvgJJWQgIHzg1KCQgHB1hRBUQhOBRhmAEIgOABQhxAAhWheg");
	this.shape_35.setTransform(61,-10.25,1,1,4.9713,0,0,0.1,-96.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#022733").s().p("ABtNdQgehOg8i6QgriIggiSQg4j3gtldQg0mJAIiZQAFh6A0gdQAngXA3AJQAwAHApAbQA9AnAcBQQAYBGAEB5QACBRgHC3QgJDggBBvQgDFZAsGfQASCsACAjQAEBKgRADIgCABQgagBg0iGg");
	this.shape_36.setTransform(51.3572,-129.0328);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#022733").s().p("AASBAQg6gUgqg2QgVgdgMghQBIArBTAFQAmACAigFIAEBgQgUAEgTAAQgfAAgcgJg");
	this.shape_37.setTransform(88.3,-146.5158);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#393D45").s().p("AkFEaQgThNglhyIhAjGQhPj+gaj0QgNh9AIhCQALhQAtguQBIhHCPAIQBtAGBsAtQA0AXBZBaQA7A7CuDFQBOBYAXAmQAcAvgGAqQgLBChSAzQgtAcg4ASQARG7gHGzQgBBbgFCwIoMAdQAql3hTlKg");
	this.shape_38.setTransform(69.583,-130.5902);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D4D3D3").s().p("AClRWIhugFQh/pRhdnCQgtjVgojWQhSmtASgDIABgBIABAAQAMglAQgtQAfhaAYgkQAig1BFgdQBBgbBBAIQBcAKBGBMQBIBOAPBwQAqKXAPKjQAHEZABEvQghAThoAAIgQAAg");
	this.shape_39.setTransform(100.2582,261.8704,0.9997,0.9997,11.5194);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#022733").s().p("AgZAlQgGgBgCgCQgNgaARgOQALgMAIgFQAMgLAPgCQAGgBAIACQAIADABAFQACAJgMAHQgHAEgPAHQgPAIgGAHQgJAKADALQAAAAAAABQgBAAAAAAQAAAAgBAAQAAABgBAAIgDgBg");
	this.shape_40.setTransform(132.3911,417.0755,0.9995,0.9995,11.5192);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#022733").s().p("AgpAjQgGgCgBgDQgGgbASgUQAYgbAzANQAHACADADQADADgEACIgfAKQgRAGgHAGIgMASQgIAKgHAGIgDABIgEgBg");
	this.shape_41.setTransform(124.2885,413.9846,0.9995,0.9995,11.5192);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#022733").s().p("ABSBoQgFgBgCgDQgSgiAHgVIgZAKIgrANQgXAFgRgDQgVgDgcgRQgigUgHgTQgHgTAggEQAegDAgAKQAXAFAnASQgZgXgNgQQgRgWgFgTQgEgUAEgLQAIgRAgALQAbAJAUAcQAIAKAPAeQAUAogMAOQAQgMAkAHQAFABAEADQAEAEgDABQgIAFgRAIQgOAHgCAJIgBAUQgBAMgEAGQAAABAAAAQgBAAAAAAQAAAAgBAAQAAABgBAAIgDgBgAhYgBQgbAAgBAMQAAALAUAPQAUAPAYAHQAHACAKgBIANgDIAVgIQATgHAPgDIghgSQgVgKgPgFQgZgHgYAAIgDAAgAgShFQAAATAFAKQAFAOARATQAJAJAZAXQANgPgSgjIgQgeQgNgUgQgJIgGgCQgHAAACARg");
	this.shape_42.setTransform(107.8302,401.4657,0.9995,0.9995,11.5192);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#393D45").s().p("An0gTQAJhQAmhHQBUASA9gsQCiBVCsAYQBoAPDTgLQBJgDAfAEQArAHAMAXQARAlguBAIupCVQgvhqANhvg");
	this.shape_43.setTransform(128.272,421.7699,0.9995,0.9995,11.5192);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EFA88F").s().p("AgZGSQgXgBgRgGQAPgvANgwQATgyAHgZQgzhogfhyQghh/gFiDQgDgxAagpQAbgoAsgOQAygPAyAaQAzAbASA3QgJEXgmDxQARAVADAZQAGAjgTAiQgRAggfATQgdASgkAAIgEAAg");
	this.shape_44.setTransform(96.8974,367.322,0.9995,0.9995,11.5192);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D4D3D3").s().p("AhBR5QhvhVgMiMIgCAAQizvdgHqSQgCjNAPiUIAPhqIFvgTQB3FfBgJPQBQHsA9KBQAOB1hBBgQg/BehlAXQgdAGgdAAQhXAAhQg9g");
	this.shape_45.setTransform(101.8015,87.1073,0.9999,0.9999,-0.6907);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#393D45").s().p("ABGLAQg5gngShEQiSmqhllCQg7i7gOhvQgYi9BPg/QAkgdA4gDQAxgCAvARQBjAnA4CWQAeBPAzD5QAfCVAyDLIBZFeQAXBQgrBHQgqBEhJAMQgNACgNAAQgwAAgtgeg");
	this.shape_46.setTransform(59.9134,-148.1623,0.9998,0.9998,15.2402);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#393D45").s().p("AlolpQgkhAAVhHQAVhHA+ghQBBgiBIAaQBJAZAeBHIBPC0IFkM4Ii2CBQk0oQj9nGg");
	this.shape_47.setTransform(89.7433,-47.1682,0.9997,0.9997,-9.4701);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D8816C").s().p("ACbFJQgdhCghgyQgjg2gvgxQgdgggQgVQAFAfAMA1QAPA8ADAZQACAIgHAFQgHAEgGgGQgtgugXheQgUhsgLgwQgFgWgMgcIgWgwIgJgUQgsgtgbhEQgDgHAEgJQAEgHAHgFQBKg0BmCEQAkAuA5BbQA9A5A4AuQA5AwANBYQANBQgdBKQgEAMgLgCQgLgCgBgMIgDgZIgGAQQABAbgJAVQgDAFgGACIgBAAQgFAAgDgFgABrAnQAoAwATAhIAAgBQgIgZgSgWQgMgQgYgVg");
	this.shape_48.setTransform(134.2159,14.7402,0.9997,0.9997,-9.4701);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#C04517").s().p("AkbZvQjUgri1hZQi+hch9iAQiOiRgSiwQgOiRBHi6QArhxB4jcQB2jaAnhnQA4iTAijVIAwl2QAejgAoiOQA2jABhiNQBSh2CPg+QCBg4CbAAQBNAAA2ARQCJgPBmAyQB9A+BBCgQArBmA6EgQA5EVAgBDQCeFNBBDUQBaEkgDEkQgDFzimE0Qi1FPk1CCQigBDjQALQgpACgpAAQihAAingig");
	this.shape_49.setTransform(46.3812,-268.038);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D4D3D3").s().p("AidHOQg4gRg1giQhkhBgjhjQgmhpAjiKQAgiABTh2QBUh3Bog/QBvhEBlAVQCLAdBfCkQBlCsggC7QgkDVi5BxQhSAyhdAOQgiAGgiAAQg3AAg0gPg");
	this.shape_50.setTransform(68.6099,18.2121);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-178.8,-436.1,357.3,872.2), null);


// stage content:
(lib.Test_FrauLaufen_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,38];
	// timeline functions:
	this.frame_0 = function() {
		//
		///* Mouse-Click-Ereignis
		//Durch Klicken auf die angegebene Symbolinstanz wird eine Funktion ausgeführt, in der Sie Ihren eigenen benutzerdefinierten Code hinzufügen können.
		//
		//Anweisungen:
		//1. Fügen Sie Ihren benutzerdefinierten Code in einer neuen Zeile nach der Zeile "// Beginn des benutzerdefinierten Codes" ein.
		//Der Code wird ausgeführt, wenn auf die Symbolinstanz geklickt wird.
		//*/
		//
		//movieClip_2.addEventListener(MouseEvent.CLICK, fl_MouseClickHandler_2);
		//
		//function fl_MouseClickHandler_2(event:MouseEvent):void
		//{
		//	// Beginn des benutzerdefinierten Codes
		//	// Dieser Beispielcode zeigt die Wörter "Mausklick erfolgt" im Bedienfeld "Ausgabe" an.
		//	trace("Mausklick erfolgt");
		//	// Ende des benutzerdefinierten Codes
		//}
		//
	}
	this.frame_38 = function() {
		//
		///* Mouse-Click-Ereignis
		//Durch Klicken auf die angegebene Symbolinstanz wird eine Funktion ausgeführt, in der Sie Ihren eigenen benutzerdefinierten Code hinzufügen können.
		//
		//Anweisungen:
		//1. Fügen Sie Ihren benutzerdefinierten Code in einer neuen Zeile nach der Zeile "// Beginn des benutzerdefinierten Codes" ein.
		//Der Code wird ausgeführt, wenn auf die Symbolinstanz geklickt wird.
		//*/
		//
		//movieClip_3.addEventListener(MouseEvent.CLICK, fl_MouseClickHandler_3);
		//
		//function fl_MouseClickHandler_3(event:MouseEvent):void
		//{
		//	// Beginn des benutzerdefinierten Codes
		//	// Dieser Beispielcode zeigt die Wörter "Mausklick erfolgt" im Bedienfeld "Ausgabe" an.
		//	trace("Mausklick erfolgt");
		//	// Ende des benutzerdefinierten Codes
		//}
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(38).call(this.frame_38).wait(1));

	// Actions
	this.movieClip_2 = new lib.Symbol2();
	this.movieClip_2.name = "movieClip_2";
	this.movieClip_2.setTransform(993.7,541.85);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#393D45").s().p("AAkL1Qg+gEgvgxQgwgygDhHQgzmtgfljQgRjEAJhuQARi9BagtQAqgVA3AJQAwAIApAbQBaA7AXCfQAMBVgDD9QgBCZAGDPQADB5AIDxQAGBTg5A8Qg0A2hEAAIgKAAg");
	this.shape.setTransform(973.0991,385.5842,1,1,-14.9983);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#393D45").s().p("Ai0nPQgIhJAug6QAug5BGgHQBJgHA4AzQA6A0ABBMIAURHIjYAyQhZqCg5ngg");
	this.shape_1.setTransform(1010.9856,483.2275,1,1,-21.188);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8816C").s().p("AgFF3QhEgogohIQgrhNAPhJQARhUALhFQgLhqAAg8QAAimBagFQAIAAAIADQAIAEACAHQAUBHgHA+IAFAVIANA0QAIAdAKAVQAUAsAzBhQAoBYgHBAQgBAJgJABQgIABgEgHQgMgWgZg4QgXgygPgcQgBAogDAeQgHBDAGBBQAFA8ARBGQACAGgGADQgGADgFgDQgVgMgPgVQgFgCgJgGIANAVQAHAKgIAJQgEAEgFAAQgDAAgFgDgAhHDQQgGgoACg8IABgFQgGAfAAAUQgBAcAJAZIABABIAAAAg");
	this.shape_2.setTransform(1046.6119,545.5999,1,1,-21.188);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_3.setTransform(930.425,214.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D4523A").s().p("AiIgKQBCgRA9gFQBcgIA2AZQg3Arg9AGIgVABQhDAAhFgtg");
	this.shape_4.setTransform(987.175,249.3954);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#712311").s().p("AiLAbQgogaglgmIBeAGQDIAKBlgkIAAAAQAJgBALgFIASgJQgfA1g0AoQg3Asg9AHIgWABQhDAAhEgug");
	this.shape_5.setTransform(987.475,245.5148);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#993715").s().p("ABGAHQh6gfh1ApIAdgWQAkgYAngKQB9ghBtB3QgmgYg9gQg");
	this.shape_6.setTransform(1017.95,179.2703);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#993715").s().p("AiXAUQAggdAngRQB6g3CHBkQgrgShCgEQiEgKhwA8g");
	this.shape_7.setTransform(960.1,178.3919);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F08571").s().p("AhOBTQgwgcAIg3QAHgwAxgdQAwgcAzAJQAmAHAXAYQAXAYAAAeQAAAggZAdQgbAfgpALQgYAHgVAAQghAAgcgQg");
	this.shape_8.setTransform(1019.6493,218.0831);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F08571").s().p("AhlBNQgrggAAgtQAAgsArggQAqgfA7AAQA8AAArAfQAqAgAAAsQAAAtgqAgQgrAfg8AAQg7AAgqgfg");
	this.shape_9.setTransform(962.25,220.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#380F10").s().p("ACcBfQgDg7gfgqQglg0g9AFQgzAFglAnQgpA1geAgQgGAHgLgCQgLgBAAgJQAAhXBFgzQBFgyBOAdQA7AWAdA1QAbAvgEA9QgBAEgDABIgBAAQgDAAAAgFg");
	this.shape_10.setTransform(961.2262,191.7733);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AACAVQgLgBgJgIQgIgHAAgIQAAgJAIgFQAJgEALACQAKACAIAHQAHAGAAAIQAAAIgHAFQgGAEgJAAIgDAAg");
	this.shape_11.setTransform(969.55,190.4276);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3C1011").s().p("AgmA8QgUgXAAglQAAgjAUgYQATgYAZAEQAXAEAPAXQAPAXAAAdQAAAegPAXQgPAXgXADIgGABQgWAAgQgUg");
	this.shape_12.setTransform(966.025,197.5505);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#805343").s().p("Ag1BXQgeghAAg2QAAg1AeghQAdghAlAIQAfAGAUAhQAUAgAAAoQAAAogUAgQgUAhgfAHQgIABgGAAQgdAAgXgag");
	this.shape_13.setTransform(965.375,197.5587);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhTByQg4gnAAhIQAAhHA4gqQA1goBAAPQAvALAeAnQAdAlAAAuQAAAugdAmQgeAogvANQgVAFgSAAQgqAAgkgag");
	this.shape_14.setTransform(963.3,198.4714);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D8816C").s().p("AgNAmQgUgDgVgOIgRgNICPgvQgUBPg0AAIgNgCg");
	this.shape_15.setTransform(992.825,228.3706);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#380F10").s().p("Ah7BiQgGhFAgg3QAig8A+gNQA5gNAmAwQAlAtgGA/QgBAGgFACQgFACgDgFQgWgvgMgSQgUgigkgJQg5gOgoA5QgiAvgEBCQAAAGgFAAQgEAAAAgFg");
	this.shape_16.setTransform(1017.945,192.1448);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgUARQgIgFABgJQAAgIAJgHQAIgIALgBQALgBAIAGQAJAGgBAJQgBAIgIAHQgJAHgKABIgDAAQgKAAgHgFg");
	this.shape_17.setTransform(1019.6538,189.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3C1011").s().p("AgmA5QgOgUAAgfQABgeAQgYQARgYAVgCQAXgCAOAVQAPAWgCAgQgCAegQAWQgRAXgUABIgDAAQgTAAgOgSg");
	this.shape_18.setTransform(1016.392,196.6217);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#805343").s().p("Ag1BQQgVgbABgrQABgsAWgiQAXgiAfgDQAggDAVAfQAUAfgDAtQgDAqgXAgQgXAfgdACIgEAAQgbAAgSgag");
	this.shape_19.setTransform(1016.4436,196.4184);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhRBiQgfggAAgzQABg1AigqQAigqAvgFQAxgEAgAlQAgAlgFA3QgEAzgjAnQgjAlgsADIgGAAQgoAAgdgeg");
	this.shape_20.setTransform(1017.5281,196.9345);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D8816C").s().p("AgNBGQgCgSAGgZIAFgWQgrgYgXAgIgOAnQgEgTgBgbQgBg1ASgpQASgoA+A0QAgAaAcAjQAfAmgMAnQgGAUgMAMQgcAMgTAAQgfAAgEgkg");
	this.shape_21.setTransform(924.8668,194.7214);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EFA88F").s().p("AAICoQgogPghgkQhQhWAah0QAdiCBaA4QAuAdAoA2IAMAjQAPApAHAkQAWB1g6ATQgOAFgQAAQgWAAgYgJg");
	this.shape_22.setTransform(922.959,196.9414);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EFA88F").s().p("AjMK1QixhThOj0QgqiCgKixQgHhuAShtQCmhECCiBQCgifBDjWQBOCeB5B7QBzB1CSBNIAXEWQAFBCACApQAHCThRCeQhhC+iuBFQg8AZhJAIQgfAEgdAAQhgAAhTgmg");
	this.shape_23.setTransform(981.6648,205.3084);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D8816C").s().p("AhlFFQhCgaAAgyIAjnMQAAg3AngnQAognA2AAQA3AAAnAnQAnAoAAA2IAgGlQAOBOhPAkQgYAMgfAGIgaADQhEAAg1gUg");
	this.shape_24.setTransform(973.824,291.075);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E9E9E9").s().p("Agzg1IBjgWIAEB8IhTAbQgShugCgTgAgegYIAKBFIA5gPIgEhIg");
	this.shape_25.setTransform(1016.525,509.675);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D4D3D3").s().p("AgTB6IgJgNIgRjYIBGgQIARBjQAMBmgZAWQgaAYgPAAQgEAAgDgCg");
	this.shape_26.setTransform(999.9087,514.426);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D4D3D3").s().p("AAeB5QgagBgegPQgfgQAKhpIAQhoIBIAQIAKDfQgGACgKAAIgFAAg");
	this.shape_27.setTransform(973.878,512.0292);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8F99B6").s().p("AhqBZQhDgFg/gPIgygNIACiSIBlAOQB2APBOAGQBPAGBogVQA0gKAkgMIADB7QiQA+ioAAQgoAAgpgEg");
	this.shape_28.setTransform(992.825,511.3214);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D4D3D3").s().p("AiJRQIhrgYQgXpfgMnLQgGjZgDjaQgFm1ATAAIABAAIABABQASgjAXgpQAvhTAdggQArgvBJgPQBFgPA/ASQBZAaA3BYQA5BZgFBxQhLKbhnKUQgwEygvEOQgPAGgaAAQgqAAhGgOg");
	this.shape_29.setTransform(971.6134,808.9114);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D4D3D3").s().p("AjlRmQhehnAMiMIgCAAQgCvuBtqIQAhjLApiPIAihmIFsAuQA4FvgJJWQgIHzg1KCQgHB1hRBUQhOBRhmAEIgOABQhxAAhWheg");
	this.shape_30.setTransform(974.7421,629.7171);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#022733").s().p("AggAhQgGgDgBgDQgJgbATgMQAOgJAIgEQAOgIAPABQAGAAAHAEQAHAEABAEQAAAJgNAGIgXAGQgQAGgIAFQgKAIAAAMQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgEAAg");
	this.shape_31.setTransform(997.1588,961.7885);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#022733").s().p("AgwAeQgFgDAAgDQgBgbAVgRQAcgWAxAWQAHADACAEQACAEgEAAIghAFQgSACgHAFIgQAPQgJAKgIAEIgBAAQgDAAgEgCg");
	this.shape_32.setTransform(988.9148,958.5687);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#022733").s().p("ABCBwQgFgCgBgDQgNgkALgUIgaAFIgtAFQgXABgRgGQgUgHgYgVQgegagDgTQgEgVAhACQAdACAfAPQAVALAjAYQgVgdgJgRQgOgZgBgTQgBgVAHgJQAKgQAdAQQAZAPAQAeQAGAMAKAgQAMArgPAMQARgJAjANQAGACADAEQADAEgDABIgbAHQgPAFgDAJIgFATQgDAMgFAFIgCABIgEgBgAhxgOQgCALARASQARASAWALQAHAEAKAAIAOgBIAWgEQAUgDAPgBQgugkgQgHQgZgNgZgFIgMgBQgQAAgCAJgAgDhMQgCAQACANQADAPANAWIAcAmQAPgOgLglQgHgagDgGQgKgWgPgNQgDgCgCAAQgGAAgCAQg");
	this.shape_33.setTransform(971.7772,947.2687);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#393D45").s().p("AnrCrQgchuAghtQAXhMAzhAQBQAgBDghQCQBxCmA2QBjAgDSAaQBIAJAeAKQApAOAHAaQALAmg5A5g");
	this.shape_34.setTransform(992.8093,960.725);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EFA88F").s().p("Ah4GIQgVgEgRgKIAthXIATgjIAUgjQghhxgJh0QgLiEASiBQAFgxAigjQAhgjAtgGQA1gGAsAjQAtAjAJA5Qg6ERhQDnQANAZgBAYQAAAjgZAfQgWAdgiAMQgVAJgWAAQgOAAgPgEg");
	this.shape_35.setTransform(962.775,912.7015);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#022733").s().p("ABtNdQgehOg8i6QgriIggiSQg4j3gtldQg0mJAIiZQAFh6A0gdQAngXA3AJQAwAHApAbQA9AnAcBQQAYBGAEB5QACBRgHC3QgJDggBBvQgDFZAsGfQASCsACAjQAEBKgRADIgCABQgagBg0iGg");
	this.shape_36.setTransform(969.9572,410.6171);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#022733").s().p("AASBAQg6gUgqg2QgVgdgMghQBIArBTAFQAmACAigFIAEBgQgUAEgTAAQgfAAgcgJg");
	this.shape_37.setTransform(1006.9,393.1342);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#393D45").s().p("AkFEaQgThNglhyIhAjGQhPj+gaj0QgNh9AIhCQALhQAtguQBIhHCPAIQBtAGBsAtQA0AXBZBaQA7A7CuDFQBOBYAXAmQAcAvgGAqQgLBChSAzQgtAcg4ASQARG7gHGzQgBBbgFCwIoMAdQAql3hTlKg");
	this.shape_38.setTransform(988.183,409.0597);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D4D3D3").s().p("AClRWIhugFQh/pRhdnCQgtjVgojWQhSmtASgDIABgBIABAAQAMglAQgtQAfhaAYgkQAig1BFgdQBBgbBBAIQBcAKBGBMQBIBOAPBwQAqKXAPKjQAHEZABEvQghAThoAAIgQAAg");
	this.shape_39.setTransform(1031.8249,803.0184,1,1,5.0231);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D4D3D3").s().p("AhBR5QhvhVgMiMIgCAAQizvdgHqSQgCjNAPiUIAPhqIFvgTQB3FfBgJPQBQHsA9KBQAOB1hBBgQg/BehlAXQgdAGgdAAQhXAAhQg9g");
	this.shape_40.setTransform(1020.6298,626.911,1,1,-2.6763);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#022733").s().p("AgZAlQgGgBgCgCQgNgaARgOQALgMAIgFQAMgLAPgCQAGgBAIACQAIADABAFQACAJgMAHQgHAEgPAHQgPAIgGAHQgJAKADALQAAAAAAABQgBAAAAAAQAAAAgBAAQAAABgBAAIgDgBg");
	this.shape_41.setTransform(1081.3512,953.6698,0.9999,0.9999,5.0228);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#022733").s().p("AgpAjQgGgCgBgDQgGgbASgUQAYgbAzANQAHACADADQADADgEACIgfAKQgRAGgHAGIgMASQgIAKgHAGIgDABIgEgBg");
	this.shape_42.setTransform(1072.9481,951.5147,0.9999,0.9999,5.0228);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#022733").s().p("ABSBoQgFgBgCgDQgSgiAHgVIgZAKIgrANQgXAFgRgDQgVgDgcgRQgigUgHgTQgHgTAggEQAegDAgAKQAXAFAnASQgZgXgNgQQgRgWgFgTQgEgUAEgLQAIgRAgALQAbAJAUAcQAIAKAPAeQAUAogMAOQAQgMAkAHQAFABAEADQAEAEgDABQgIAFgRAIQgOAHgCAJIgBAUQgBAMgEAGQAAABAAAAQgBAAAAAAQAAAAgBAAQAAABgBAAIgDgBgAhYgBQgbAAgBAMQAAALAUAPQAUAPAYAHQAHACAKgBIANgDIAVgIQATgHAPgDIghgSQgVgKgPgFQgZgHgYAAIgDAAgAgShFQAAATAFAKQAFAOARATQAJAJAZAXQANgPgSgjIgQgeQgNgUgQgJIgGgCQgHAAACARg");
	this.shape_43.setTransform(1055.173,940.9348,0.9999,0.9999,5.0228);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#393D45").s().p("An0gTQAJhQAmhHQBUASA9gsQCiBVCsAYQBoAPDTgLQBJgDAfAEQArAHAMAXQARAlguBAIupCVQgvhqANhvg");
	this.shape_44.setTransform(1077.7885,958.8018,0.9999,0.9999,5.0228);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EFA88F").s().p("AgZGSQgXgBgRgGQAPgvANgwQATgyAHgZQgzhogfhyQghh/gFiDQgDgxAagpQAbgoAsgOQAygPAyAaQAzAbASA3QgJEXgmDxQARAVADAZQAGAjgTAiQgRAggfATQgdASgkAAIgEAAg");
	this.shape_45.setTransform(1040.4424,908.2361,0.9999,0.9999,5.0228);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#393D45").s().p("ABGLAQg5gngShEQiSmqhllCQg7i7gOhvQgYi9BPg/QAkgdA4gDQAxgCAvARQBjAnA4CWQAeBPAzD5QAfCVAyDLIBZFeQAXBQgrBHQgqBEhJAMQgNACgNAAQgwAAgtgeg");
	this.shape_46.setTransform(979.1011,391.134,0.9998,0.9998,11.4615);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#393D45").s().p("AlolpQgkhAAVhHQAVhHA+ghQBBgiBIAaQBJAZAeBHIBPC0IFkM4Ii2CBQk0oQj9nGg");
	this.shape_47.setTransform(996.6117,501.9916,0.9997,0.9997,11.461);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D8816C").s().p("ACbFJQgdhCghgyQgjg2gvgxQgdgggQgVQAFAfAMA1QAPA8ADAZQACAIgHAFQgHAEgGgGQgtgugXheQgUhsgLgwQgFgWgMgcIgWgwIgJgUQgsgtgbhEQgDgHAEgJQAEgHAHgFQBKg0BmCEQAkAuA5BbQA9A5A4AuQA5AwANBYQANBQgdBKQgEAMgLgCQgLgCgBgMIgDgZIgGAQQABAbgJAVQgDAFgGACIgBAAQgFAAgDgFgABrAnQAoAwATAhIAAgBQgIgZgSgWQgMgQgYgVg");
	this.shape_48.setTransform(1016.0338,575.7052,0.9997,0.9997,11.461);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#C04517").s().p("AkbZvQjUgri1hZQi+hch9iAQiOiRgSiwQgOiRBHi6QArhxB4jcQB2jaAnhnQA4iTAijVIAwl2QAejgAoiOQA2jABhiNQBSh2CPg+QCBg4CbAAQBNAAA2ARQCJgPBmAyQB9A+BBCgQArBmA6EgQA5EVAgBDQCeFNBBDUQBaEkgDEkQgDFzimE0Qi1FPk1CCQigBDjQALQgpACgpAAQihAAingig");
	this.shape_49.setTransform(983.4,129.85,1,1,-5.2118,0,0,21.2,-142.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D4D3D3").s().p("AidHOQg4gRg1giQhkhBgjhjQgmhpAjiKQAgiABTh2QBUh3Bog/QBvhEBlAVQCLAdBfCkQBlCsggC7QgkDVi5BxQhSAyhdAOQgiAGgiAAQg3AAg0gPg");
	this.shape_50.setTransform(984.4599,558.4121);

	this.movieClip_1 = new lib.Symbol1();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.setTransform(915.75,540.1,1,1,0,0,0,-0.1,-0.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D4D3D3").s().p("AJNP7QiLgNhVhxIgBABQqkroliopQhvithCiGIgrhiIEtjTQEgDrGJHCQFKF3GHH/QBJBcgDB0QgEBwhJBJQhMBLhxAAIgggBg");
	this.shape_51.setTransform(973.85,545.35,1,1,0,0,0,-63.9,-68.4);

	this.movieClip_3 = new lib.Symbol3();
	this.movieClip_3.name = "movieClip_3";
	this.movieClip_3.setTransform(993.7,541.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.movieClip_2}]}).to({state:[{t:this.shape_50},{t:this.shape_49,p:{regX:21.2,regY:-142.3,rotation:-5.2118,x:983.4,y:129.85}},{t:this.shape_48,p:{scaleX:0.9997,scaleY:0.9997,rotation:11.461,x:1016.0338,y:575.7052}},{t:this.shape_47,p:{scaleX:0.9997,scaleY:0.9997,rotation:11.461,x:996.6117,y:501.9916}},{t:this.shape_46,p:{scaleX:0.9998,scaleY:0.9998,rotation:11.4615,x:979.1011,y:391.134}},{t:this.shape_45,p:{rotation:5.0228,x:1040.4424,y:908.2361,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_44,p:{rotation:5.0228,x:1077.7885,y:958.8018,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_43,p:{rotation:5.0228,x:1055.173,y:940.9348,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_42,p:{rotation:5.0228,x:1072.9481,y:951.5147,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_41,p:{rotation:5.0228,x:1081.3512,y:953.6698,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_40,p:{rotation:-2.6763,x:1020.6298,y:626.911,scaleX:1,scaleY:1}},{t:this.shape_39,p:{rotation:5.0231,x:1031.8249,y:803.0184,scaleX:1,scaleY:1}},{t:this.shape_38,p:{x:988.183,y:409.0597}},{t:this.shape_37,p:{x:1006.9,y:393.1342}},{t:this.shape_36,p:{x:969.9572,y:410.6171}},{t:this.shape_35,p:{scaleX:1,scaleY:1,rotation:0,x:962.775,y:912.7015}},{t:this.shape_34,p:{scaleX:1,scaleY:1,rotation:0,x:992.8093,y:960.725}},{t:this.shape_33,p:{scaleX:1,scaleY:1,rotation:0,x:971.7772,y:947.2687}},{t:this.shape_32,p:{scaleX:1,scaleY:1,rotation:0,x:988.9148,y:958.5687}},{t:this.shape_31,p:{scaleX:1,scaleY:1,rotation:0,x:997.1588,y:961.7885}},{t:this.shape_30,p:{regY:0,rotation:0,x:974.7421,y:629.7171,regX:0,scaleX:1,scaleY:1}},{t:this.shape_29,p:{scaleX:1,scaleY:1,rotation:0,x:971.6134,y:808.9114}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{scaleX:1,scaleY:1,rotation:-21.188,x:1046.6119,y:545.5999}},{t:this.shape_1,p:{scaleX:1,scaleY:1,rotation:-21.188,x:1010.9856,y:483.2275}},{t:this.shape,p:{rotation:-14.9983,x:973.0991,y:385.5842,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.shape_50},{t:this.shape_49,p:{regX:19.3,regY:-138.5,rotation:-1.9614,x:981.45,y:133.75}},{t:this.shape_48,p:{scaleX:0.9998,scaleY:0.9998,rotation:16.9282,x:965.794,y:574.1595}},{t:this.shape_47,p:{scaleX:0.9998,scaleY:0.9998,rotation:16.9282,x:953.4824,y:498.9243}},{t:this.shape_46,p:{scaleX:1,scaleY:1,rotation:31.9279,x:962.3434,y:390.5848}},{t:this.shape_45,p:{rotation:5.562,x:1066.7452,y:900.7573,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_44,p:{rotation:5.562,x:1103.6138,y:951.6721,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_43,p:{rotation:5.562,x:1081.1675,y:933.5931,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_42,p:{rotation:5.562,x:1098.8422,y:944.3398,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_41,p:{rotation:5.562,x:1107.2246,y:946.5738,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_40,p:{rotation:-12.1232,x:1034.149,y:623.4112,scaleX:1,scaleY:1}},{t:this.shape_39,p:{rotation:5.5623,x:1059.1088,y:795.4501,scaleX:1,scaleY:1}},{t:this.shape_38,p:{x:985.433,y:409.6097}},{t:this.shape_37,p:{x:1004.15,y:393.6842}},{t:this.shape_36,p:{x:967.2072,y:411.1671}},{t:this.shape_35,p:{scaleX:1,scaleY:1,rotation:0,x:962.775,y:912.7015}},{t:this.shape_34,p:{scaleX:1,scaleY:1,rotation:0,x:992.8093,y:960.725}},{t:this.shape_33,p:{scaleX:1,scaleY:1,rotation:0,x:971.7772,y:947.2687}},{t:this.shape_32,p:{scaleX:1,scaleY:1,rotation:0,x:988.9148,y:958.5687}},{t:this.shape_31,p:{scaleX:1,scaleY:1,rotation:0,x:997.1588,y:961.7885}},{t:this.shape_30,p:{regY:0,rotation:0,x:974.7421,y:629.7171,regX:0,scaleX:1,scaleY:1}},{t:this.shape_29,p:{scaleX:1,scaleY:1,rotation:0,x:971.6134,y:808.9114}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-38.6229,x:1089.9061,y:518.6264}},{t:this.shape_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-38.6229,x:1037.2386,y:469.8034}},{t:this.shape,p:{rotation:-22.9805,x:980.4095,y:382.5232,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.shape_50},{t:this.shape_49,p:{regX:0,regY:0,rotation:0,x:962.2312,y:272.162}},{t:this.shape_48,p:{scaleX:0.9998,scaleY:0.9998,rotation:16.9282,x:965.794,y:574.1595}},{t:this.shape_47,p:{scaleX:0.9998,scaleY:0.9998,rotation:16.9282,x:953.4824,y:498.9243}},{t:this.shape_46,p:{scaleX:1,scaleY:1,rotation:31.9279,x:962.3434,y:390.5848}},{t:this.shape_45,p:{rotation:-6.3773,x:1138.789,y:880.651,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_44,p:{rotation:-6.3773,x:1185.3844,y:922.8294,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_43,p:{rotation:-6.3773,x:1159.6883,y:909.7875,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_42,p:{rotation:-6.3773,x:1179.2003,y:916.644,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_41,p:{rotation:-6.3773,x:1187.8619,y:917.0955,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_40,p:{rotation:-24.0603,x:1049.7084,y:615.9346,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_39,p:{rotation:-6.3772,x:1109.5879,y:779.2626,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_38,p:{x:985.433,y:409.6097}},{t:this.shape_37,p:{x:1004.15,y:393.6842}},{t:this.shape_36,p:{x:967.2072,y:411.1671}},{t:this.shape_30,p:{regY:-96.1,rotation:-7.2292,x:974.75,y:533.6,regX:0,scaleX:1,scaleY:1}},{t:this.shape_35,p:{scaleX:0.9998,scaleY:0.9998,rotation:1.4797,x:981.5635,y:912.148}},{t:this.shape_34,p:{scaleX:0.9998,scaleY:0.9998,rotation:1.4797,x:1010.3419,y:960.9213}},{t:this.shape_33,p:{scaleX:0.9998,scaleY:0.9998,rotation:1.4797,x:989.6685,y:946.9291}},{t:this.shape_32,p:{scaleX:0.9998,scaleY:0.9998,rotation:1.4797,x:1006.5051,y:958.6656}},{t:this.shape_31,p:{scaleX:0.9998,scaleY:0.9998,rotation:1.4797,x:1014.6616,y:962.0965}},{t:this.shape_29,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.4805,x:993.2114,y:808.465}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-38.6229,x:1089.9061,y:518.6264}},{t:this.shape_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-38.6229,x:1037.2386,y:469.8034}},{t:this.shape,p:{rotation:-22.9805,x:980.4095,y:382.5232,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.shape_50},{t:this.shape_49,p:{regX:25,regY:-142.3,rotation:-5.9409,x:987.15,y:129.85}},{t:this.shape_48,p:{scaleX:0.9998,scaleY:0.9998,rotation:14.6873,x:957.5178,y:568.1096}},{t:this.shape_47,p:{scaleX:0.9998,scaleY:0.9998,rotation:14.6873,x:942.2733,y:493.411}},{t:this.shape_46,p:{scaleX:1,scaleY:1,rotation:39.403,x:956.4157,y:388.8825}},{t:this.shape_40,p:{rotation:-24.0626,x:1050.0897,y:615.8939,scaleX:1,scaleY:1}},{t:this.shape_45,p:{rotation:8.619,x:1089.4223,y:886.7492,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_44,p:{rotation:8.619,x:1123.516,y:939.5468,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_43,p:{rotation:8.619,x:1102.0702,y:920.3004,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_42,p:{rotation:8.619,x:1119.1431,y:931.972,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_41,p:{rotation:8.619,x:1127.3928,y:934.6494,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_39,p:{rotation:8.6206,x:1087.4132,y:781.2503,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_38,p:{x:985.433,y:409.6097}},{t:this.shape_37,p:{x:1004.15,y:393.6842}},{t:this.shape_36,p:{x:967.2072,y:411.1671}},{t:this.shape_30,p:{regY:-96.1,rotation:-7.2292,x:974.75,y:533.6,regX:0,scaleX:1,scaleY:1}},{t:this.shape_35,p:{scaleX:0.9998,scaleY:0.9998,rotation:1.4797,x:981.5635,y:912.148}},{t:this.shape_34,p:{scaleX:0.9998,scaleY:0.9998,rotation:1.4797,x:1010.3419,y:960.9213}},{t:this.shape_33,p:{scaleX:0.9998,scaleY:0.9998,rotation:1.4797,x:989.6685,y:946.9291}},{t:this.shape_32,p:{scaleX:0.9998,scaleY:0.9998,rotation:1.4797,x:1006.5051,y:958.6656}},{t:this.shape_31,p:{scaleX:0.9998,scaleY:0.9998,rotation:1.4797,x:1014.6616,y:962.0965}},{t:this.shape_29,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.4805,x:993.2114,y:808.465}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{scaleX:0.9997,scaleY:0.9997,rotation:-32.1235,x:1067.6998,y:532.2982}},{t:this.shape_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:-32.1235,x:1020.9009,y:477.8317}},{t:this.shape,p:{rotation:-16.4805,x:974.322,y:384.7992,scaleX:0.9999,scaleY:0.9999}}]},2).to({state:[{t:this.shape_50},{t:this.shape_49,p:{regX:30.7,regY:-146.1,rotation:-9.1877,x:992.9,y:126}},{t:this.shape_48,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.9519,x:1002.9551,y:566.8733}},{t:this.shape_47,p:{scaleX:0.9997,scaleY:0.9997,rotation:2.9519,x:972.839,y:496.8433}},{t:this.shape_46,p:{scaleX:0.9998,scaleY:0.9998,rotation:27.6695,x:965.3659,y:391.5963}},{t:this.shape_40,p:{rotation:-17.8496,x:1041.9676,y:620.2151,scaleX:1,scaleY:1}},{t:this.shape_45,p:{rotation:4.0808,x:1087.4278,y:894.6929,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_44,p:{rotation:4.0808,x:1125.5911,y:944.6259,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_43,p:{rotation:4.0808,x:1102.6904,y:927.1373,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_42,p:{rotation:4.0808,x:1120.6328,y:937.4211,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_41,p:{rotation:4.0808,x:1129.0682,y:939.4372,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_39,p:{rotation:4.0812,x:1077.0929,y:789.6697,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_38,p:{x:985.433,y:409.6097}},{t:this.shape_37,p:{x:1004.15,y:393.6842}},{t:this.shape_36,p:{x:967.2072,y:411.1671}},{t:this.shape_30,p:{regY:-96.1,rotation:-7.2292,x:974.75,y:533.6,regX:0,scaleX:1,scaleY:1}},{t:this.shape_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:10.4357,x:952.2924,y:907.8376}},{t:this.shape_34,p:{scaleX:0.9997,scaleY:0.9997,rotation:10.4357,x:973.1248,y:960.4906}},{t:this.shape_33,p:{scaleX:0.9997,scaleY:0.9997,rotation:10.4357,x:954.8836,y:943.4525}},{t:this.shape_32,p:{scaleX:0.9997,scaleY:0.9997,rotation:10.4357,x:969.6863,y:957.6654}},{t:this.shape_31,p:{scaleX:0.9997,scaleY:0.9997,rotation:10.4357,x:977.2085,y:962.3238}},{t:this.shape_29,p:{scaleX:0.9999,scaleY:0.9999,rotation:10.4357,x:980.0544,y:807.456}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{scaleX:0.9996,scaleY:0.9996,rotation:-23.6891,x:1037.0723,y:546.4389}},{t:this.shape_1,p:{scaleX:0.9996,scaleY:0.9996,rotation:-23.6891,x:998.771,y:485.701}},{t:this.shape,p:{rotation:-8.0442,x:966.2654,y:386.779,scaleX:0.9998,scaleY:0.9998}}]},2).to({state:[{t:this.shape_50},{t:this.shape_49,p:{regX:23,regY:-130.7,rotation:-6.9676,x:985.25,y:141.45}},{t:this.shape_48,p:{scaleX:0.9998,scaleY:0.9998,rotation:-3.239,x:1026.6706,y:562.0718}},{t:this.shape_47,p:{scaleX:0.9998,scaleY:0.9998,rotation:-3.239,x:989.1758,y:495.6943}},{t:this.shape_46,p:{scaleX:0.9998,scaleY:0.9998,rotation:21.4723,x:970.5083,y:392.1158}},{t:this.shape_40,p:{rotation:-9.1493,x:1029.8787,y:624.7066,scaleX:1,scaleY:1}},{t:this.shape_45,p:{rotation:9.0327,x:1045.9376,y:903.6441,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_44,p:{rotation:9.0327,x:1079.651,y:956.6894,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_43,p:{rotation:9.0327,x:1058.3436,y:937.2877,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_42,p:{rotation:9.0327,x:1075.3327,y:949.0829,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_41,p:{rotation:9.0327,x:1083.5633,y:951.8198,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_39,p:{rotation:9.0332,x:1044.6648,y:798.0429,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_38,p:{x:985.433,y:409.6097}},{t:this.shape_37,p:{x:1004.15,y:393.6842}},{t:this.shape_36,p:{x:967.2072,y:411.1671}},{t:this.shape_30,p:{regY:-96.2,rotation:-2.0174,x:975.6,y:531.95,regX:0.1,scaleX:1,scaleY:1}},{t:this.shape_35,p:{scaleX:0.9996,scaleY:0.9996,rotation:30.6453,x:874.7486,y:881.9593}},{t:this.shape_34,p:{scaleX:0.9996,scaleY:0.9996,rotation:30.6453,x:876.1092,y:938.5627}},{t:this.shape_33,p:{scaleX:0.9996,scaleY:0.9996,rotation:30.6453,x:864.8778,y:916.2739}},{t:this.shape_32,p:{scaleX:0.9996,scaleY:0.9996,rotation:30.6453,x:873.8585,y:934.7238}},{t:this.shape_31,p:{scaleX:0.9996,scaleY:0.9996,rotation:30.6453,x:879.3078,y:941.6934}},{t:this.shape_29,p:{scaleX:0.9998,scaleY:0.9998,rotation:30.6458,x:935.5914,y:797.1751}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{scaleX:0.9996,scaleY:0.9996,rotation:-14.959,x:1003.3845,y:556.2668}},{t:this.shape_1,p:{scaleX:0.9996,scaleY:0.9996,rotation:-14.959,x:974.7466,y:490.4213}},{t:this.shape,p:{rotation:0.6716,x:957.7128,y:388.0104,scaleX:0.9998,scaleY:0.9998}}]},2).to({state:[{t:this.movieClip_1}]},2).to({state:[{t:this.shape_50},{t:this.shape_49,p:{regX:19.2,regY:-144.3,rotation:6.9817,x:981.4,y:127.9}},{t:this.shape_48,p:{scaleX:0.9998,scaleY:0.9998,rotation:-0.4897,x:1033.6662,y:565.8487}},{t:this.shape_47,p:{scaleX:0.9998,scaleY:0.9998,rotation:-0.4897,x:999.3964,y:497.7452}},{t:this.shape_46,p:{scaleX:1,scaleY:1,rotation:15.2455,x:976.1032,y:391.8391}},{t:this.shape_40,p:{rotation:1.31,x:1014.4994,y:627.8539,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_45,p:{rotation:10.2879,x:1010.4361,y:908.3948,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_44,p:{rotation:10.2879,x:1042.9744,y:962.1573,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_43,p:{rotation:10.2879,x:1022.1004,y:942.2966,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_42,p:{rotation:10.2879,x:1038.8244,y:954.4592,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_41,p:{rotation:10.2879,x:1046.9917,y:957.3754,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_39,p:{rotation:10.2885,x:1011.5064,y:802.8686,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_38,p:{x:985.433,y:409.6097}},{t:this.shape_37,p:{x:1004.15,y:393.6842}},{t:this.shape_36,p:{x:967.2072,y:411.1671}},{t:this.shape_30,p:{regY:-96.1,rotation:-12.724,x:974.25,y:535.45,regX:0.1,scaleX:1,scaleY:1}},{t:this.shape_35,p:{scaleX:0.9995,scaleY:0.9995,rotation:55.6862,x:851.1256,y:824.2236}},{t:this.shape_34,p:{scaleX:0.9995,scaleY:0.9995,rotation:55.6862,x:828.4017,y:876.0787}},{t:this.shape_33,p:{scaleX:0.9995,scaleY:0.9995,rotation:55.6862,x:827.6602,y:851.1329}},{t:this.shape_32,p:{scaleX:0.9995,scaleY:0.9995,rotation:55.6862,x:827.9875,y:871.6484}},{t:this.shape_31,p:{scaleX:0.9995,scaleY:0.9995,rotation:55.6862,x:829.9744,y:880.2688}},{t:this.shape_29,p:{scaleX:0.9997,scaleY:0.9997,rotation:55.6863,x:941.884,y:773.0508}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{scaleX:0.9996,scaleY:0.9996,rotation:-1.0137,x:947.8357,y:561.8535}},{t:this.shape_1,p:{scaleX:0.9996,scaleY:0.9996,rotation:-1.0137,x:935.9102,y:491.0459}},{t:this.shape,p:{rotation:14.6178,x:943.9308,y:387.0792,scaleX:0.9997,scaleY:0.9997}}]},2).to({state:[{t:this.shape_50},{t:this.shape_49,p:{regX:26.9,regY:-130.8,rotation:4.7273,x:989.15,y:141.4}},{t:this.shape_48,p:{scaleX:0.9997,scaleY:0.9997,rotation:-4.4776,x:1048.5815,y:561.3648}},{t:this.shape_47,p:{scaleX:0.9997,scaleY:0.9997,rotation:-4.4776,x:1009.6622,y:495.8159}},{t:this.shape_46,p:{scaleX:0.9998,scaleY:0.9998,rotation:11.248,x:978.9649,y:391.9281}},{t:this.shape_40,p:{rotation:1.31,x:1014.4994,y:627.8539,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_45,p:{rotation:10.2879,x:1010.4361,y:908.3948,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_44,p:{rotation:10.2879,x:1042.9744,y:962.1573,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_43,p:{rotation:10.2879,x:1022.1004,y:942.2966,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_42,p:{rotation:10.2879,x:1038.8244,y:954.4592,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_41,p:{rotation:10.2879,x:1046.9917,y:957.3754,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_39,p:{rotation:10.2885,x:1011.5064,y:802.8686,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_38,p:{x:985.433,y:409.6097}},{t:this.shape_37,p:{x:1004.15,y:393.6842}},{t:this.shape_36,p:{x:967.2072,y:411.1671}},{t:this.shape_30,p:{regY:-95.8,rotation:-38.1841,x:973.5,y:544.05,regX:0.5,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_35,p:{scaleX:0.9994,scaleY:0.9994,rotation:30.2223,x:986.0224,y:858.201}},{t:this.shape_34,p:{scaleX:0.9994,scaleY:0.9994,rotation:30.2223,x:987.8005,y:914.7808}},{t:this.shape_33,p:{scaleX:0.9994,scaleY:0.9994,rotation:30.2223,x:976.4073,y:892.5803}},{t:this.shape_32,p:{scaleX:0.9994,scaleY:0.9994,rotation:30.2223,x:985.522,y:910.9595}},{t:this.shape_31,p:{scaleX:0.9994,scaleY:0.9994,rotation:30.2223,x:991.0215,y:917.8873}},{t:this.shape_29,p:{scaleX:0.9995,scaleY:0.9995,rotation:30.2218,x:1046.1913,y:773.0589}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{scaleX:0.9996,scaleY:0.9996,rotation:-5.7093,x:966.7792,y:561.3127}},{t:this.shape_1,p:{scaleX:0.9996,scaleY:0.9996,rotation:-5.7093,x:949.0976,y:491.7203}},{t:this.shape,p:{rotation:9.9201,x:948.5419,y:387.9275,scaleX:0.9997,scaleY:0.9997}}]},2).to({state:[{t:this.shape_50},{t:this.shape_49,p:{regX:0,regY:0,rotation:0,x:962.2312,y:272.162}},{t:this.shape_48,p:{scaleX:0.9997,scaleY:0.9997,rotation:-11.2189,x:1073.205,y:550.8167}},{t:this.shape_47,p:{scaleX:0.9997,scaleY:0.9997,rotation:-11.2189,x:1026.8639,y:490.2943}},{t:this.shape_46,p:{scaleX:0.9998,scaleY:0.9998,rotation:4.5055,x:984.343,y:390.7806}},{t:this.shape_40,p:{rotation:1.31,x:1014.4994,y:627.8539,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_45,p:{rotation:10.2879,x:1010.4361,y:908.3948,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_44,p:{rotation:10.2879,x:1042.9744,y:962.1573,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_43,p:{rotation:10.2879,x:1022.1004,y:942.2966,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_42,p:{rotation:10.2879,x:1038.8244,y:954.4592,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_41,p:{rotation:10.2879,x:1046.9917,y:957.3754,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_39,p:{rotation:10.2885,x:1011.5064,y:802.8686,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_38,p:{x:985.433,y:409.6097}},{t:this.shape_37,p:{x:1004.15,y:393.6842}},{t:this.shape_36,p:{x:967.2072,y:411.1671}},{t:this.shape_51,p:{rotation:0,x:973.85,y:545.35,regX:-63.9,regY:-68.4,scaleX:1,scaleY:1}},{t:this.shape_35,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.2822,x:1086.8359,y:879.7945}},{t:this.shape_34,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.2822,x:1115.7785,y:928.462}},{t:this.shape_33,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.2822,x:1095.0596,y:914.543}},{t:this.shape_32,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.2822,x:1111.9344,y:926.2198}},{t:this.shape_31,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.2822,x:1120.1017,y:929.6222}},{t:this.shape_29,p:{scaleX:0.9998,scaleY:0.9998,rotation:1.2829,x:1098.1944,y:776.1613}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{scaleX:0.9996,scaleY:0.9996,rotation:-5.7093,x:966.7792,y:561.3127}},{t:this.shape_1,p:{scaleX:0.9996,scaleY:0.9996,rotation:-5.7093,x:949.0976,y:491.7203}},{t:this.shape,p:{rotation:9.9201,x:948.5419,y:387.9275,scaleX:0.9997,scaleY:0.9997}}]},2).to({state:[{t:this.shape_50},{t:this.shape_49,p:{regX:19.2,regY:-134.6,rotation:-5.2407,x:981.4,y:137.55}},{t:this.shape_48,p:{scaleX:0.9997,scaleY:0.9997,rotation:-11.2189,x:1073.205,y:550.8167}},{t:this.shape_47,p:{scaleX:0.9997,scaleY:0.9997,rotation:-11.2189,x:1026.8639,y:490.2943}},{t:this.shape_46,p:{scaleX:0.9998,scaleY:0.9998,rotation:4.5055,x:984.343,y:390.7806}},{t:this.shape_40,p:{rotation:1.31,x:1014.4994,y:627.8539,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_45,p:{rotation:10.2879,x:1010.4361,y:908.3948,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_44,p:{rotation:10.2879,x:1042.9744,y:962.1573,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_43,p:{rotation:10.2879,x:1022.1004,y:942.2966,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_42,p:{rotation:10.2879,x:1038.8244,y:954.4592,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_41,p:{rotation:10.2879,x:1046.9917,y:957.3754,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_39,p:{rotation:10.2885,x:1011.5064,y:802.8686,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_38,p:{x:985.433,y:409.6097}},{t:this.shape_37,p:{x:1004.15,y:393.6842}},{t:this.shape_36,p:{x:967.2072,y:411.1671}},{t:this.shape_51,p:{rotation:0,x:973.85,y:545.35,regX:-63.9,regY:-68.4,scaleX:1,scaleY:1}},{t:this.shape_35,p:{scaleX:0.9996,scaleY:0.9996,rotation:-13.7147,x:1135.39,y:875.8544}},{t:this.shape_34,p:{scaleX:0.9996,scaleY:0.9996,rotation:-13.7147,x:1175.9363,y:915.3709}},{t:this.shape_33,p:{scaleX:0.9996,scaleY:0.9996,rotation:-13.7147,x:1152.3237,y:907.2881}},{t:this.shape_32,p:{scaleX:0.9996,scaleY:0.9996,rotation:-13.7147,x:1171.6433,y:914.1999}},{t:this.shape_31,p:{scaleX:0.9996,scaleY:0.9996,rotation:-13.7147,x:1180.4119,y:915.3729}},{t:this.shape_29,p:{scaleX:0.9997,scaleY:0.9997,rotation:-13.7151,x:1119.8092,y:772.872}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{scaleX:0.9996,scaleY:0.9996,rotation:-5.7093,x:966.7792,y:561.3127}},{t:this.shape_1,p:{scaleX:0.9996,scaleY:0.9996,rotation:-5.7093,x:949.0976,y:491.7203}},{t:this.shape,p:{rotation:9.9201,x:948.5419,y:387.9275,scaleX:0.9997,scaleY:0.9997}}]},2).to({state:[{t:this.shape_50},{t:this.shape_49,p:{regX:0,regY:0,rotation:0,x:962.2312,y:272.162}},{t:this.shape_48,p:{scaleX:0.9996,scaleY:0.9996,rotation:-18.162,x:1097.732,y:537.2173}},{t:this.shape_47,p:{scaleX:0.9996,scaleY:0.9996,rotation:-18.162,x:1044.4136,y:482.7397}},{t:this.shape_46,p:{scaleX:0.9998,scaleY:0.9998,rotation:-2.4327,x:990.0265,y:389.0946}},{t:this.shape_40,p:{rotation:-1.1605,x:1017.8251,y:627.6406,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_45,p:{rotation:12.0517,x:1011.7946,y:907.8923,scaleX:0.9995,scaleY:0.9995}},{t:this.shape_44,p:{rotation:12.0517,x:1042.662,y:962.6297,scaleX:0.9995,scaleY:0.9995}},{t:this.shape_43,p:{rotation:12.0517,x:1022.4096,y:942.1364,scaleX:0.9995,scaleY:0.9995}},{t:this.shape_42,p:{rotation:12.0517,x:1038.751,y:954.8077,scaleX:0.9995,scaleY:0.9995}},{t:this.shape_41,p:{rotation:12.0517,x:1046.8246,y:957.9738,scaleX:0.9995,scaleY:0.9995}},{t:this.shape_39,p:{rotation:12.052,x:1016.087,y:802.3886,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_38,p:{x:985.433,y:409.6097}},{t:this.shape_37,p:{x:1004.15,y:393.6842}},{t:this.shape_36,p:{x:967.2072,y:411.1671}},{t:this.shape_51,p:{rotation:3.7323,x:973.65,y:544.15,regX:-63.9,regY:-68.4,scaleX:1,scaleY:1}},{t:this.shape_35,p:{scaleX:0.9996,scaleY:0.9996,rotation:-15.9222,x:1132.8096,y:880.7932}},{t:this.shape_34,p:{scaleX:0.9996,scaleY:0.9996,rotation:-15.9222,x:1174.8482,y:918.7188}},{t:this.shape_33,p:{scaleX:0.9996,scaleY:0.9996,rotation:-15.9222,x:1150.9416,y:911.5515}},{t:this.shape_32,p:{scaleX:0.9996,scaleY:0.9996,rotation:-15.9222,x:1170.5133,y:917.7141}},{t:this.shape_31,p:{scaleX:0.9996,scaleY:0.9996,rotation:-15.9222,x:1179.3207,y:918.5484}},{t:this.shape_29,p:{scaleX:0.9997,scaleY:0.9997,rotation:-15.9223,x:1113.1775,y:778.6532}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{scaleX:0.9998,scaleY:0.9998,rotation:-2.2017,x:959.8472,y:563.1498}},{t:this.shape_1,p:{scaleX:0.9998,scaleY:0.9998,rotation:-2.2017,x:946.4547,y:492.597}},{t:this.shape,p:{rotation:9.9226,x:948.6219,y:388.1002,scaleX:0.9999,scaleY:0.9999}}]},2).to({state:[{t:this.shape_50},{t:this.shape_49,p:{regX:0,regY:0,rotation:0,x:962.2312,y:272.162}},{t:this.shape_48,p:{scaleX:0.9996,scaleY:0.9996,rotation:-9.7082,x:1067.7681,y:553.3504}},{t:this.shape_47,p:{scaleX:0.9996,scaleY:0.9996,rotation:-9.7082,x:1023.0405,y:491.6299}},{t:this.shape_46,p:{scaleX:0.9997,scaleY:0.9997,rotation:6.0172,x:983.1096,y:391.1338}},{t:this.shape_40,p:{rotation:-1.1605,x:1017.8251,y:627.6406,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_45,p:{rotation:12.0517,x:1011.7946,y:907.8923,scaleX:0.9995,scaleY:0.9995}},{t:this.shape_44,p:{rotation:12.0517,x:1042.662,y:962.6297,scaleX:0.9995,scaleY:0.9995}},{t:this.shape_43,p:{rotation:12.0517,x:1022.4096,y:942.1364,scaleX:0.9995,scaleY:0.9995}},{t:this.shape_42,p:{rotation:12.0517,x:1038.751,y:954.8077,scaleX:0.9995,scaleY:0.9995}},{t:this.shape_41,p:{rotation:12.0517,x:1046.8246,y:957.9738,scaleX:0.9995,scaleY:0.9995}},{t:this.shape_39,p:{rotation:12.052,x:1016.087,y:802.3886,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_38,p:{x:985.433,y:409.6097}},{t:this.shape_37,p:{x:1004.15,y:393.6842}},{t:this.shape_36,p:{x:967.2072,y:411.1671}},{t:this.shape_51,p:{rotation:10.9459,x:973.45,y:541.85,regX:-63.8,regY:-68.3,scaleX:1,scaleY:1}},{t:this.shape_35,p:{scaleX:0.9995,scaleY:0.9995,rotation:-14.9035,x:1108.9421,y:892.0756}},{t:this.shape_34,p:{scaleX:0.9995,scaleY:0.9995,rotation:-14.9035,x:1150.2968,y:930.7399}},{t:this.shape_33,p:{scaleX:0.9995,scaleY:0.9995,rotation:-14.9035,x:1126.5231,y:923.1493}},{t:this.shape_32,p:{scaleX:0.9995,scaleY:0.9995,rotation:-14.9035,x:1145.9808,y:929.6583}},{t:this.shape_31,p:{scaleX:0.9995,scaleY:0.9995,rotation:-14.9035,x:1154.7713,y:930.649}},{t:this.shape_29,p:{scaleX:0.9997,scaleY:0.9997,rotation:-14.903,x:1091.2185,y:789.5637}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{scaleX:0.9996,scaleY:0.9996,rotation:-6.6654,x:977.5325,y:561.8308}},{t:this.shape_1,p:{scaleX:0.9996,scaleY:0.9996,rotation:-6.6654,x:958.6916,y:492.5413}},{t:this.shape,p:{rotation:5.4535,x:952.7946,y:388.9005,scaleX:0.9998,scaleY:0.9998}}]},2).to({state:[{t:this.shape_50},{t:this.shape_49,p:{regX:0,regY:0,rotation:0,x:962.2312,y:272.162}},{t:this.shape_48,p:{scaleX:0.9998,scaleY:0.9998,rotation:-0.4714,x:1033.2613,y:566.2222}},{t:this.shape_47,p:{scaleX:0.9998,scaleY:0.9998,rotation:-0.4714,x:999.0166,y:498.1141}},{t:this.shape_46,p:{scaleX:0.9998,scaleY:0.9998,rotation:15.2527,x:975.7947,y:392.1047}},{t:this.shape_40,p:{rotation:4.0509,x:1010.6523,y:628.0422,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_45,p:{rotation:27.7379,x:944.9921,y:897.7617,scaleX:0.9995,scaleY:0.9995}},{t:this.shape_44,p:{rotation:27.7379,x:959.9098,y:958.8027,scaleX:0.9995,scaleY:0.9995}},{t:this.shape_43,p:{rotation:27.7379,x:945.9532,y:933.5984,scaleX:0.9995,scaleY:0.9995}},{t:this.shape_42,p:{rotation:27.7379,x:958.2594,y:950.2151,scaleX:0.9995,scaleY:0.9995}},{t:this.shape_41,p:{rotation:27.7379,x:965.1758,y:955.4458,scaleX:0.9995,scaleY:0.9995}},{t:this.shape_39,p:{rotation:27.7362,x:977.7007,y:797.4245,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_38,p:{x:985.433,y:409.6097}},{t:this.shape_37,p:{x:1004.15,y:393.6842}},{t:this.shape_36,p:{x:967.2072,y:411.1671}},{t:this.shape_51,p:{rotation:20.8823,x:974,y:538.25,regX:-63.5,regY:-68.7,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_35,p:{scaleX:0.9994,scaleY:0.9994,rotation:-4.96,x:1046.7787,y:906.6002}},{t:this.shape_34,p:{scaleX:0.9994,scaleY:0.9994,rotation:-4.96,x:1080.8331,y:951.8211}},{t:this.shape_33,p:{scaleX:0.9994,scaleY:0.9994,rotation:-4.96,x:1058.729,y:940.2403}},{t:this.shape_32,p:{scaleX:0.9994,scaleY:0.9994,rotation:-4.96,x:1076.769,y:950.0106}},{t:this.shape_31,p:{scaleX:0.9994,scaleY:0.9994,rotation:-4.96,x:1085.2557,y:952.5042}},{t:this.shape_29,p:{scaleX:0.9996,scaleY:0.9996,rotation:-4.9603,x:1046.9395,y:802.5247}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{scaleX:0.9996,scaleY:0.9996,rotation:-13.9077,x:1006.0441,y:556.7952}},{t:this.shape_1,p:{scaleX:0.9996,scaleY:0.9996,rotation:-13.9077,x:978.619,y:490.4349}},{t:this.shape,p:{rotation:-1.7859,x:959.684,y:388.6839,scaleX:0.9998,scaleY:0.9998}}]},2).to({state:[{t:this.shape_50},{t:this.shape_49,p:{regX:25,regY:-138.4,rotation:-5.4383,x:987.2,y:133.8}},{t:this.shape_48,p:{scaleX:0.9997,scaleY:0.9997,rotation:8.4744,x:998.1045,y:572.6919}},{t:this.shape_47,p:{scaleX:0.9997,scaleY:0.9997,rotation:8.4744,x:974.8678,y:500.0894}},{t:this.shape_46,p:{scaleX:0.9997,scaleY:0.9997,rotation:24.2042,x:968.5827,y:391.7812}},{t:this.shape_40,p:{rotation:8.3204,x:1003.99,y:628.4649,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_45,p:{rotation:47.0116,x:875.3014,y:866.7001,scaleX:0.9993,scaleY:0.9993}},{t:this.shape_44,p:{rotation:47.0116,x:869.2356,y:929.2315,scaleX:0.9993,scaleY:0.9993}},{t:this.shape_43,p:{rotation:47.0116,x:864.3817,y:900.8387,scaleX:0.9993,scaleY:0.9993}},{t:this.shape_42,p:{rotation:47.0116,x:870.5121,y:920.5822,scaleX:0.9993,scaleY:0.9993}},{t:this.shape_41,p:{rotation:47.0116,x:875.3134,y:927.8013,scaleX:0.9993,scaleY:0.9993}},{t:this.shape_39,p:{rotation:47.0124,x:939.223,y:782.8936,scaleX:0.9995,scaleY:0.9995}},{t:this.shape_38,p:{x:985.433,y:409.6097}},{t:this.shape_37,p:{x:1004.15,y:393.6842}},{t:this.shape_36,p:{x:967.2072,y:411.1671}},{t:this.shape_51,p:{rotation:20.8823,x:974,y:538.25,regX:-63.5,regY:-68.7,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_35,p:{scaleX:0.9994,scaleY:0.9994,rotation:-4.96,x:1046.7787,y:906.6002}},{t:this.shape_34,p:{scaleX:0.9994,scaleY:0.9994,rotation:-4.96,x:1080.8331,y:951.8211}},{t:this.shape_33,p:{scaleX:0.9994,scaleY:0.9994,rotation:-4.96,x:1058.729,y:940.2403}},{t:this.shape_32,p:{scaleX:0.9994,scaleY:0.9994,rotation:-4.96,x:1076.769,y:950.0106}},{t:this.shape_31,p:{scaleX:0.9994,scaleY:0.9994,rotation:-4.96,x:1085.2557,y:952.5042}},{t:this.shape_29,p:{scaleX:0.9996,scaleY:0.9996,rotation:-4.9603,x:1046.9395,y:802.5247}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{scaleX:0.9995,scaleY:0.9995,rotation:-19.3959,x:1027.4579,y:550.7815}},{t:this.shape_1,p:{scaleX:0.9995,scaleY:0.9995,rotation:-19.3959,x:993.8143,y:487.3531}},{t:this.shape,p:{rotation:-7.2717,x:965.3673,y:387.7542,scaleX:0.9997,scaleY:0.9997}}]},2).to({state:[{t:this.shape_50},{t:this.shape_49,p:{regX:26.9,regY:-146.1,rotation:-8.4648,x:989.1,y:126}},{t:this.shape_48,p:{scaleX:0.9997,scaleY:0.9997,rotation:8.4744,x:998.1045,y:572.6919}},{t:this.shape_47,p:{scaleX:0.9997,scaleY:0.9997,rotation:8.4744,x:974.8678,y:500.0894}},{t:this.shape_46,p:{scaleX:0.9997,scaleY:0.9997,rotation:24.2042,x:968.5827,y:391.7812}},{t:this.shape_40,p:{rotation:-11.4243,x:1033.1204,y:623.9917,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_45,p:{rotation:42.2613,x:947.6799,y:869.2487,scaleX:0.9995,scaleY:0.9995}},{t:this.shape_44,p:{rotation:42.2613,x:946.8133,y:932.0797,scaleX:0.9995,scaleY:0.9995}},{t:this.shape_43,p:{rotation:42.2613,x:939.6234,y:904.181,scaleX:0.9995,scaleY:0.9995}},{t:this.shape_42,p:{rotation:42.2613,x:947.3692,y:923.3527,scaleX:0.9995,scaleY:0.9995}},{t:this.shape_41,p:{rotation:42.2613,x:952.7529,y:930.1506,scaleX:0.9995,scaleY:0.9995}},{t:this.shape_39,p:{rotation:42.2624,x:1004.4509,y:780.3598,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_38,p:{x:985.433,y:409.6097}},{t:this.shape_37,p:{x:1004.15,y:393.6842}},{t:this.shape_36,p:{x:967.2072,y:411.1671}},{t:this.shape_51,p:{rotation:26.8532,x:974.15,y:536.55,regX:-63.7,regY:-68.4,scaleX:1,scaleY:1}},{t:this.shape_35,p:{scaleX:0.9996,scaleY:0.9996,rotation:-3.9817,x:1024.8407,y:911.041}},{t:this.shape_34,p:{scaleX:0.9996,scaleY:0.9996,rotation:-3.9817,x:1058.1246,y:956.8457}},{t:this.shape_33,p:{scaleX:0.9996,scaleY:0.9996,rotation:-3.9817,x:1036.2172,y:944.8868}},{t:this.shape_32,p:{scaleX:0.9996,scaleY:0.9996,rotation:-3.9817,x:1054.0913,y:954.9657}},{t:this.shape_31,p:{scaleX:0.9996,scaleY:0.9996,rotation:-3.9817,x:1062.5358,y:957.6043}},{t:this.shape_29,p:{scaleX:0.9997,scaleY:0.9997,rotation:-3.9824,x:1026.8509,y:806.769}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{scaleX:0.9997,scaleY:0.9997,rotation:-12.3399,x:1030.0171,y:551.4526}},{t:this.shape_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:-12.3399,x:1004.4148,y:484.3585}},{t:this.shape,p:{rotation:-15.2129,x:973.2797,y:385.7468,scaleX:0.9999,scaleY:0.9999}}]},2).to({state:[{t:this.shape_50},{t:this.shape_49,p:{regX:28.8,regY:-142.3,rotation:-4.9756,x:991,y:129.8}},{t:this.shape_48,p:{scaleX:0.9998,scaleY:0.9998,rotation:-4.8135,x:1009.4294,y:555.7498}},{t:this.shape_47,p:{scaleX:0.9998,scaleY:0.9998,rotation:-4.8135,x:970.1252,y:490.4281}},{t:this.shape_46,p:{scaleX:0.9998,scaleY:0.9998,rotation:32.6584,x:961.7,y:390.7702}},{t:this.shape_40,p:{rotation:-23.6528,x:1049.5559,y:616.5087,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_45,p:{rotation:9.7889,x:1084.2253,y:888.3642,scaleX:0.9995,scaleY:0.9995}},{t:this.shape_44,p:{rotation:9.7889,x:1117.2298,y:941.8402,scaleX:0.9995,scaleY:0.9995}},{t:this.shape_43,p:{rotation:9.7889,x:1096.1841,y:922.1625,scaleX:0.9995,scaleY:0.9995}},{t:this.shape_42,p:{rotation:9.7889,x:1113.0131,y:934.1787,scaleX:0.9995,scaleY:0.9995}},{t:this.shape_41,p:{rotation:9.7889,x:1121.2053,y:937.0235,scaleX:0.9995,scaleY:0.9995}},{t:this.shape_39,p:{rotation:9.7883,x:1084.37,y:782.7765,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_38,p:{x:985.433,y:409.6097}},{t:this.shape_37,p:{x:1004.15,y:393.6842}},{t:this.shape_36,p:{x:967.2072,y:411.1671}},{t:this.shape_51,p:{rotation:26.8532,x:974.15,y:536.55,regX:-63.7,regY:-68.4,scaleX:1,scaleY:1}},{t:this.shape_35,p:{scaleX:0.9996,scaleY:0.9996,rotation:-3.9817,x:1024.8407,y:911.041}},{t:this.shape_34,p:{scaleX:0.9996,scaleY:0.9996,rotation:-3.9817,x:1058.1246,y:956.8457}},{t:this.shape_33,p:{scaleX:0.9996,scaleY:0.9996,rotation:-3.9817,x:1036.2172,y:944.8868}},{t:this.shape_32,p:{scaleX:0.9996,scaleY:0.9996,rotation:-3.9817,x:1054.0913,y:954.9657}},{t:this.shape_31,p:{scaleX:0.9996,scaleY:0.9996,rotation:-3.9817,x:1062.5358,y:957.6043}},{t:this.shape_29,p:{scaleX:0.9997,scaleY:0.9997,rotation:-3.9824,x:1026.8509,y:806.769}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{scaleX:0.9997,scaleY:0.9997,rotation:-34.5832,x:1082.7542,y:524.5436}},{t:this.shape_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:-34.5832,x:1033.6626,y:472.1375}},{t:this.shape,p:{rotation:-22.4541,x:979.9716,y:383.0999,scaleX:0.9999,scaleY:0.9999}}]},2).to({state:[{t:this.shape_50},{t:this.shape_49,p:{regX:0,regY:0,rotation:0,x:962.2312,y:272.162}},{t:this.shape_48,p:{scaleX:0.9997,scaleY:0.9997,rotation:16.9279,x:965.7814,y:574.1306}},{t:this.shape_47,p:{scaleX:0.9997,scaleY:0.9997,rotation:16.9279,x:953.4697,y:498.898}},{t:this.shape_46,p:{scaleX:1,scaleY:1,rotation:31.9279,x:962.3434,y:390.5848}},{t:this.shape_45,p:{rotation:5.5621,x:1066.7346,y:900.7429,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_44,p:{rotation:5.5621,x:1103.6025,y:951.657,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_43,p:{rotation:5.5621,x:1081.1565,y:933.5783,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_42,p:{rotation:5.5621,x:1098.831,y:944.3249,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_41,p:{rotation:5.5621,x:1107.2133,y:946.5589,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_40,p:{rotation:-12.1232,x:1034.149,y:623.4112,scaleX:1,scaleY:1}},{t:this.shape_39,p:{rotation:5.5623,x:1059.1088,y:795.4501,scaleX:1,scaleY:1}},{t:this.shape_38,p:{x:985.433,y:409.6097}},{t:this.shape_37,p:{x:1004.15,y:393.6842}},{t:this.shape_36,p:{x:967.2072,y:411.1671}},{t:this.shape_35,p:{scaleX:1,scaleY:1,rotation:0,x:962.775,y:912.7015}},{t:this.shape_34,p:{scaleX:1,scaleY:1,rotation:0,x:992.8093,y:960.725}},{t:this.shape_33,p:{scaleX:1,scaleY:1,rotation:0,x:971.7772,y:947.2687}},{t:this.shape_32,p:{scaleX:1,scaleY:1,rotation:0,x:988.9148,y:958.5687}},{t:this.shape_31,p:{scaleX:1,scaleY:1,rotation:0,x:997.1588,y:961.7885}},{t:this.shape_30,p:{regY:0,rotation:0,x:974.7421,y:629.7171,regX:0,scaleX:1,scaleY:1}},{t:this.shape_29,p:{scaleX:1,scaleY:1,rotation:0,x:971.6134,y:808.9114}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{scaleX:0.9997,scaleY:0.9997,rotation:-38.6233,x:1089.778,y:518.6179}},{t:this.shape_1,p:{scaleX:0.9997,scaleY:0.9997,rotation:-38.6233,x:1037.1119,y:469.7969}},{t:this.shape,p:{rotation:-22.9805,x:980.4095,y:382.5232,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.movieClip_3}]},2).wait(1));

	// Ebene_1
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#393D45").s().p("AAkL1Qg+gEgvgxQgwgygDhHQgzmtgfljQgRjEAJhuQARi9BagtQAqgVA3AJQAwAIApAbQBaA7AXCfQAMBVgDD9QgBCZAGDPQADB5AIDxQAGBTg5A8Qg0A2hEAAIgKAAg");
	this.shape_52.setTransform(960.6539,386.0279);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#393D45").s().p("Ai0nPQgIhJAug6QAug5BGgHQBJgHA4AzQA6A0ABBMIAURHIjYAyQhZqCg5ngg");
	this.shape_53.setTransform(966.2337,490.6578);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D8816C").s().p("AgFF3QhEgogohIQgrhNAPhJQARhUALhFQgLhqAAg8QAAimBagFQAIAAAIADQAIAEACAHQAUBHgHA+IAFAVIANA0QAIAdAKAVQAUAsAzBhQAoBYgHBAQgBAJgJABQgIABgEgHQgMgWgZg4QgXgygPgcQgBAogDAeQgHBDAGBBQAFA8ARBGQACAGgGADQgGADgFgDQgVgMgPgVQgFgCgJgGIANAVQAHAKgIAJQgEAEgFAAQgDAAgFgDgAhHDQQgGgoACg8IABgFQgGAfAAAUQgBAcAJAZIABABIAAAAg");
	this.shape_54.setTransform(976.9087,561.6921);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_55.setTransform(930.425,214.625);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#D4523A").s().p("AiIgKQBCgRA9gFQBcgIA2AZQg3Arg9AGIgVABQhDAAhFgtg");
	this.shape_56.setTransform(987.175,249.3954);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#712311").s().p("AiLAbQgogaglgmIBeAGQDIAKBlgkIAAAAQAJgBALgFIASgJQgfA1g0AoQg3Asg9AHIgWABQhDAAhEgug");
	this.shape_57.setTransform(987.475,245.5148);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#993715").s().p("ABGAHQh6gfh1ApIAdgWQAkgYAngKQB9ghBtB3QgmgYg9gQg");
	this.shape_58.setTransform(1017.95,179.2703);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#993715").s().p("AiXAUQAggdAngRQB6g3CHBkQgrgShCgEQiEgKhwA8g");
	this.shape_59.setTransform(960.1,178.3919);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F08571").s().p("AhOBTQgwgcAIg3QAHgwAxgdQAwgcAzAJQAmAHAXAYQAXAYAAAeQAAAggZAdQgbAfgpALQgYAHgVAAQghAAgcgQg");
	this.shape_60.setTransform(1019.6493,218.0831);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F08571").s().p("AhlBNQgrggAAgtQAAgsArggQAqgfA7AAQA8AAArAfQAqAgAAAsQAAAtgqAgQgrAfg8AAQg7AAgqgfg");
	this.shape_61.setTransform(962.25,220.025);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#380F10").s().p("ACcBfQgDg7gfgqQglg0g9AFQgzAFglAnQgpA1geAgQgGAHgLgCQgLgBAAgJQAAhXBFgzQBFgyBOAdQA7AWAdA1QAbAvgEA9QgBAEgDABIgBAAQgDAAAAgFg");
	this.shape_62.setTransform(961.2262,191.7733);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AACAVQgLgBgJgIQgIgHAAgIQAAgJAIgFQAJgEALACQAKACAIAHQAHAGAAAIQAAAIgHAFQgGAEgJAAIgDAAg");
	this.shape_63.setTransform(969.55,190.4276);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#3C1011").s().p("AgmA8QgUgXAAglQAAgjAUgYQATgYAZAEQAXAEAPAXQAPAXAAAdQAAAegPAXQgPAXgXADIgGABQgWAAgQgUg");
	this.shape_64.setTransform(966.025,197.5505);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#805343").s().p("Ag1BXQgeghAAg2QAAg1AeghQAdghAlAIQAfAGAUAhQAUAgAAAoQAAAogUAgQgUAhgfAHQgIABgGAAQgdAAgXgag");
	this.shape_65.setTransform(965.375,197.5587);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AhTByQg4gnAAhIQAAhHA4gqQA1goBAAPQAvALAeAnQAdAlAAAuQAAAugdAmQgeAogvANQgVAFgSAAQgqAAgkgag");
	this.shape_66.setTransform(963.3,198.4714);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#D8816C").s().p("AgNAmQgUgDgVgOIgRgNICPgvQgUBPg0AAIgNgCg");
	this.shape_67.setTransform(992.825,228.3706);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#380F10").s().p("Ah7BiQgGhFAgg3QAig8A+gNQA5gNAmAwQAlAtgGA/QgBAGgFACQgFACgDgFQgWgvgMgSQgUgigkgJQg5gOgoA5QgiAvgEBCQAAAGgFAAQgEAAAAgFg");
	this.shape_68.setTransform(1017.945,192.1448);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgUARQgIgFABgJQAAgIAJgHQAIgIALgBQALgBAIAGQAJAGgBAJQgBAIgIAHQgJAHgKABIgDAAQgKAAgHgFg");
	this.shape_69.setTransform(1019.6538,189.225);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#3C1011").s().p("AgmA5QgOgUAAgfQABgeAQgYQARgYAVgCQAXgCAOAVQAPAWgCAgQgCAegQAWQgRAXgUABIgDAAQgTAAgOgSg");
	this.shape_70.setTransform(1016.392,196.6217);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#805343").s().p("Ag1BQQgVgbABgrQABgsAWgiQAXgiAfgDQAggDAVAfQAUAfgDAtQgDAqgXAgQgXAfgdACIgEAAQgbAAgSgag");
	this.shape_71.setTransform(1016.4436,196.4184);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AhRBiQgfggAAgzQABg1AigqQAigqAvgFQAxgEAgAlQAgAlgFA3QgEAzgjAnQgjAlgsADIgGAAQgoAAgdgeg");
	this.shape_72.setTransform(1017.5281,196.9345);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#D8816C").s().p("AgNBGQgCgSAGgZIAFgWQgrgYgXAgIgOAnQgEgTgBgbQgBg1ASgpQASgoA+A0QAgAaAcAjQAfAmgMAnQgGAUgMAMQgcAMgTAAQgfAAgEgkg");
	this.shape_73.setTransform(924.8668,194.7214);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EFA88F").s().p("AAICoQgogPghgkQhQhWAah0QAdiCBaA4QAuAdAoA2IAMAjQAPApAHAkQAWB1g6ATQgOAFgQAAQgWAAgYgJg");
	this.shape_74.setTransform(922.959,196.9414);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EFA88F").s().p("AjMK1QixhThOj0QgqiCgKixQgHhuAShtQCmhECCiBQCgifBDjWQBOCeB5B7QBzB1CSBNIAXEWQAFBCACApQAHCThRCeQhhC+iuBFQg8AZhJAIQgfAEgdAAQhgAAhTgmg");
	this.shape_75.setTransform(981.6648,205.3084);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#D8816C").s().p("AhlFFQhCgaAAgyIAjnMQAAg3AngnQAognA2AAQA3AAAnAnQAnAoAAA2IAgGlQAOBOhPAkQgYAMgfAGIgaADQhEAAg1gUg");
	this.shape_76.setTransform(973.824,291.075);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#E9E9E9").s().p("Agzg1IBjgWIAEB8IhTAbQgShugCgTgAgegYIAKBFIA5gPIgEhIg");
	this.shape_77.setTransform(1016.525,509.675);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#D4D3D3").s().p("AgTB6IgJgNIgRjYIBGgQIARBjQAMBmgZAWQgaAYgPAAQgEAAgDgCg");
	this.shape_78.setTransform(999.9087,514.426);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#D4D3D3").s().p("AAeB5QgagBgegPQgfgQAKhpIAQhoIBIAQIAKDfQgGACgKAAIgFAAg");
	this.shape_79.setTransform(973.878,512.0292);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#8F99B6").s().p("AhqBZQhDgFg/gPIgygNIACiSIBlAOQB2APBOAGQBPAGBogVQA0gKAkgMIADB7QiQA+ioAAQgoAAgpgEg");
	this.shape_80.setTransform(992.825,511.3214);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#D4D3D3").s().p("AiJRQIhrgYQgXpfgMnLQgGjZgDjaQgFm1ATAAIABAAIABABQASgjAXgpQAvhTAdggQArgvBJgPQBFgPA/ASQBZAaA3BYQA5BZgFBxQhLKbhnKUQgwEygvEOQgPAGgaAAQgqAAhGgOg");
	this.shape_81.setTransform(971.6134,808.9114);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#D4D3D3").s().p("AjlRmQhehnAMiMIgCAAQgCvuBtqIQAhjLApiPIAihmIFsAuQA4FvgJJWQgIHzg1KCQgHB1hRBUQhOBRhmAEIgOABQhxAAhWheg");
	this.shape_82.setTransform(974.7421,629.7171);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#022733").s().p("AggAhQgGgDgBgDQgJgbATgMQAOgJAIgEQAOgIAPABQAGAAAHAEQAHAEABAEQAAAJgNAGIgXAGQgQAGgIAFQgKAIAAAMQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgEAAg");
	this.shape_83.setTransform(997.1588,961.7885);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#022733").s().p("AgwAeQgFgDAAgDQgBgbAVgRQAcgWAxAWQAHADACAEQACAEgEAAIghAFQgSACgHAFIgQAPQgJAKgIAEIgBAAQgDAAgEgCg");
	this.shape_84.setTransform(988.9148,958.5687);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#022733").s().p("ABCBwQgFgCgBgDQgNgkALgUIgaAFIgtAFQgXABgRgGQgUgHgYgVQgegagDgTQgEgVAhACQAdACAfAPQAVALAjAYQgVgdgJgRQgOgZgBgTQgBgVAHgJQAKgQAdAQQAZAPAQAeQAGAMAKAgQAMArgPAMQARgJAjANQAGACADAEQADAEgDABIgbAHQgPAFgDAJIgFATQgDAMgFAFIgCABIgEgBgAhxgOQgCALARASQARASAWALQAHAEAKAAIAOgBIAWgEQAUgDAPgBQgugkgQgHQgZgNgZgFIgMgBQgQAAgCAJgAgDhMQgCAQACANQADAPANAWIAcAmQAPgOgLglQgHgagDgGQgKgWgPgNQgDgCgCAAQgGAAgCAQg");
	this.shape_85.setTransform(971.7772,947.2687);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#393D45").s().p("AnrCrQgchuAghtQAXhMAzhAQBQAgBDghQCQBxCmA2QBjAgDSAaQBIAJAeAKQApAOAHAaQALAmg5A5g");
	this.shape_86.setTransform(992.8093,960.725);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#EFA88F").s().p("Ah4GIQgVgEgRgKIAthXIATgjIAUgjQghhxgJh0QgLiEASiBQAFgxAigjQAhgjAtgGQA1gGAsAjQAtAjAJA5Qg6ERhQDnQANAZgBAYQAAAjgZAfQgWAdgiAMQgVAJgWAAQgOAAgPgEg");
	this.shape_87.setTransform(962.775,912.7015);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#022733").s().p("ABtNdQgehOg8i6QgriIggiSQg4j3gtldQg0mJAIiZQAFh6A0gdQAngXA3AJQAwAHApAbQA9AnAcBQQAYBGAEB5QACBRgHC3QgJDggBBvQgDFZAsGfQASCsACAjQAEBKgRADIgCABQgagBg0iGg");
	this.shape_88.setTransform(969.9572,410.6171);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#022733").s().p("AASBAQg6gUgqg2QgVgdgMghQBIArBTAFQAmACAigFIAEBgQgUAEgTAAQgfAAgcgJg");
	this.shape_89.setTransform(1006.9,393.1342);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#393D45").s().p("AkFEaQgThNglhyIhAjGQhPj+gaj0QgNh9AIhCQALhQAtguQBIhHCPAIQBtAGBsAtQA0AXBZBaQA7A7CuDFQBOBYAXAmQAcAvgGAqQgLBChSAzQgtAcg4ASQARG7gHGzQgBBbgFCwIoMAdQAql3hTlKg");
	this.shape_90.setTransform(988.183,409.0597);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#D4D3D3").s().p("AClRWIhugFQh/pRhdnCQgtjVgojWQhSmtASgDIABgBIABAAQAMglAQgtQAfhaAYgkQAig1BFgdQBBgbBBAIQBcAKBGBMQBIBOAPBwQAqKXAPKjQAHEZABEvQghAThoAAIgQAAg");
	this.shape_91.setTransform(1030.6872,804.2236);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#D4D3D3").s().p("AhBR5QhvhVgMiMIgCAAQizvdgHqSQgCjNAPiUIAPhqIFvgTQB3FfBgJPQBQHsA9KBQAOB1hBBgQg/BehlAXQgdAGgdAAQhXAAhQg9g");
	this.shape_92.setTransform(1016.6793,627.4844);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#022733").s().p("AgZAlQgGgBgCgCQgNgaARgOQALgMAIgFQAMgLAPgCQAGgBAIACQAIADABAFQACAJgMAHQgHAEgPAHQgPAIgGAHQgJAKADALQAAAAAAABQgBAAAAAAQAAAAgBAAQAAABgBAAIgDgBg");
	this.shape_93.setTransform(1093.2905,950.075);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#022733").s().p("AgpAjQgGgCgBgDQgGgbASgUQAYgbAzANQAHACADADQADADgEACIgfAKQgRAGgHAGIgMASQgIAKgHAGIgDABIgEgBg");
	this.shape_94.setTransform(1084.7298,948.6638);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#022733").s().p("ABSBoQgFgBgCgDQgSgiAHgVIgZAKIgrANQgXAFgRgDQgVgDgcgRQgigUgHgTQgHgTAggEQAegDAgAKQAXAFAnASQgZgXgNgQQgRgWgFgTQgEgUAEgLQAIgRAgALQAbAJAUAcQAIAKAPAeQAUAogMAOQAQgMAkAHQAFABAEADQAEAEgDABQgIAFgRAIQgOAHgCAJIgBAUQgBAMgEAGQAAABAAAAQgBAAAAAAQAAAAgBAAQAAABgBAAIgDgBgAhYgBQgbAAgBAMQAAALAUAPQAUAPAYAHQAHACAKgBIANgDIAVgIQATgHAPgDIghgSQgVgKgPgFQgZgHgYAAIgDAAgAgShFQAAATAFAKQAFAOARATQAJAJAZAXQANgPgSgjIgQgeQgNgUgQgJIgGgCQgHAAACARg");
	this.shape_95.setTransform(1066.094,939.6794);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#393D45").s().p("An0gTQAJhQAmhHQBUASA9gsQCiBVCsAYQBoAPDTgLQBJgDAfAEQArAHAMAXQARAlguBAIupCVQgvhqANhvg");
	this.shape_96.setTransform(1090.1904,955.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#EFA88F").s().p("AgZGSQgXgBgRgGQAPgvANgwQATgyAHgZQgzhogfhyQghh/gFiDQgDgxAagpQAbgoAsgOQAygPAyAaQAzAbASA3QgJEXgmDxQARAVADAZQAGAjgTAiQgRAggfATQgdASgkAAIgEAAg");
	this.shape_97.setTransform(1048.5546,908.3915);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#393D45").s().p("ABGLAQg5gngShEQiSmqhllCQg7i7gOhvQgYi9BPg/QAkgdA4gDQAxgCAvARQBjAnA4CWQAeBPAzD5QAfCVAyDLIBZFeQAXBQgrBHQgqBEhJAMQgNACgNAAQgwAAgtgeg");
	this.shape_98.setTransform(988.4448,388.9385);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#393D45").s().p("AlolpQgkhAAVhHQAVhHA+ghQBBgiBIAaQBJAZAeBHIBPC0IFkM4Ii2CBQk0oQj9nGg");
	this.shape_99.setTransform(1027.7132,494.1913);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#D8816C").s().p("ACbFJQgdhCghgyQgjg2gvgxQgdgggQgVQAFAfAMA1QAPA8ADAZQACAIgHAFQgHAEgGgGQgtgugXheQgUhsgLgwQgFgWgMgcIgWgwIgJgUQgsgtgbhEQgDgHAEgJQAEgHAHgFQBKg0BmCEQAkAuA5BbQA9A5A4AuQA5AwANBYQANBQgdBKQgEAMgLgCQgLgCgBgMIgDgZIgGAQQABAbgJAVQgDAFgGACIgBAAQgFAAgDgFgABrAnQAoAwATAhIAAgBQgIgZgSgWQgMgQgYgVg");
	this.shape_100.setTransform(1061.4055,562.5974);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#C04517").s().p("AkbZvQjUgri1hZQi+hch9iAQiOiRgSiwQgOiRBHi6QArhxB4jcQB2jaAnhnQA4iTAijVIAwl2QAejgAoiOQA2jABhiNQBSh2CPg+QCBg4CbAAQBNAAA2ARQCJgPBmAyQB9A+BBCgQArBmA6EgQA5EVAgBDQCeFNBBDUQBaEkgDEkQgDFzimE0Qi1FPk1CCQigBDjQALQgpACgpAAQihAAingig");
	this.shape_101.setTransform(962.2312,272.162);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#D4D3D3").s().p("AidHOQg4gRg1giQhkhBgjhjQgmhpAjiKQAgiABTh2QBUh3Bog/QBvhEBlAVQCLAdBfCkQBlCsggC7QgkDVi5BxQhSAyhdAOQgiAGgiAAQg3AAg0gPg");
	this.shape_102.setTransform(984.4599,558.4121);

	this.movieClip_1_1 = new lib.Symbol1();
	this.movieClip_1_1.name = "movieClip_1_1";
	this.movieClip_1_1.setTransform(915.75,540.1,1,1,0,0,0,-0.1,-0.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#D4D3D3").s().p("AJNP7QiLgNhVhxIgBABQqkroliopQhvithCiGIgrhiIEtjTQEgDrGJHCQFKF3GHH/QBJBcgDB0QgEBwhJBJQhMBLhxAAIgggBg");
	this.shape_103.setTransform(973.85,545.35,1,1,0,0,0,-63.9,-68.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_102},{t:this.shape_101,p:{regX:0,regY:0,rotation:0,x:962.2312,y:272.162}},{t:this.shape_100,p:{scaleX:1,scaleY:1,rotation:0,x:1061.4055,y:562.5974}},{t:this.shape_99,p:{scaleX:1,scaleY:1,rotation:0,x:1027.7132,y:494.1913}},{t:this.shape_98,p:{scaleX:1,scaleY:1,rotation:0,x:988.4448,y:388.9385}},{t:this.shape_97,p:{scaleX:1,scaleY:1,rotation:0,x:1048.5546,y:908.3915}},{t:this.shape_96,p:{scaleX:1,scaleY:1,rotation:0,x:1090.1904,y:955.5}},{t:this.shape_95,p:{scaleX:1,scaleY:1,rotation:0,x:1066.094,y:939.6794}},{t:this.shape_94,p:{scaleX:1,scaleY:1,rotation:0,x:1084.7298,y:948.6638}},{t:this.shape_93,p:{scaleX:1,scaleY:1,rotation:0,x:1093.2905,y:950.075}},{t:this.shape_92,p:{rotation:0,x:1016.6793,y:627.4844,scaleX:1,scaleY:1}},{t:this.shape_91,p:{rotation:0,x:1030.6872,y:804.2236,scaleX:1,scaleY:1}},{t:this.shape_90,p:{x:988.183,y:409.0597}},{t:this.shape_89,p:{x:1006.9,y:393.1342}},{t:this.shape_88,p:{x:969.9572,y:410.6171}},{t:this.shape_87,p:{scaleX:1,scaleY:1,rotation:0,x:962.775,y:912.7015}},{t:this.shape_86,p:{scaleX:1,scaleY:1,rotation:0,x:992.8093,y:960.725}},{t:this.shape_85,p:{scaleX:1,scaleY:1,rotation:0,x:971.7772,y:947.2687}},{t:this.shape_84,p:{scaleX:1,scaleY:1,rotation:0,x:988.9148,y:958.5687}},{t:this.shape_83,p:{scaleX:1,scaleY:1,rotation:0,x:997.1588,y:961.7885}},{t:this.shape_82,p:{regY:0,rotation:0,x:974.7421,y:629.7171,regX:0,scaleX:1,scaleY:1}},{t:this.shape_81,p:{scaleX:1,scaleY:1,rotation:0,x:971.6134,y:808.9114}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54,p:{rotation:0,x:976.9087,y:561.6921,scaleX:1,scaleY:1}},{t:this.shape_53,p:{rotation:0,x:966.2337,y:490.6578,scaleX:1,scaleY:1}},{t:this.shape_52,p:{rotation:0,x:960.6539,y:386.0279,scaleX:1,scaleY:1}}]}).to({state:[{t:this.shape_102},{t:this.shape_101,p:{regX:21.2,regY:-142.3,rotation:-5.2118,x:983.4,y:129.85}},{t:this.shape_100,p:{scaleX:0.9997,scaleY:0.9997,rotation:11.4614,x:1016.0573,y:575.7431}},{t:this.shape_99,p:{scaleX:0.9997,scaleY:0.9997,rotation:11.4614,x:996.6347,y:502.0259}},{t:this.shape_98,p:{scaleX:0.9998,scaleY:0.9998,rotation:11.4612,x:979.1206,y:391.1468}},{t:this.shape_97,p:{scaleX:0.9999,scaleY:0.9999,rotation:5.0226,x:1040.4637,y:908.2647}},{t:this.shape_96,p:{scaleX:0.9999,scaleY:0.9999,rotation:5.0226,x:1077.8111,y:958.8319}},{t:this.shape_95,p:{scaleX:0.9999,scaleY:0.9999,rotation:5.0226,x:1055.1948,y:940.9644}},{t:this.shape_94,p:{scaleX:0.9999,scaleY:0.9999,rotation:5.0226,x:1072.9705,y:951.5446}},{t:this.shape_93,p:{scaleX:0.9999,scaleY:0.9999,rotation:5.0226,x:1081.3739,y:953.6997}},{t:this.shape_92,p:{rotation:-2.6763,x:1020.6298,y:626.911,scaleX:1,scaleY:1}},{t:this.shape_91,p:{rotation:5.0231,x:1031.8249,y:803.0184,scaleX:1,scaleY:1}},{t:this.shape_90,p:{x:988.183,y:409.0597}},{t:this.shape_89,p:{x:1006.9,y:393.1342}},{t:this.shape_88,p:{x:969.9572,y:410.6171}},{t:this.shape_87,p:{scaleX:1,scaleY:1,rotation:0,x:962.775,y:912.7015}},{t:this.shape_86,p:{scaleX:1,scaleY:1,rotation:0,x:992.8093,y:960.725}},{t:this.shape_85,p:{scaleX:1,scaleY:1,rotation:0,x:971.7772,y:947.2687}},{t:this.shape_84,p:{scaleX:1,scaleY:1,rotation:0,x:988.9148,y:958.5687}},{t:this.shape_83,p:{scaleX:1,scaleY:1,rotation:0,x:997.1588,y:961.7885}},{t:this.shape_82,p:{regY:0,rotation:0,x:974.7421,y:629.7171,regX:0,scaleX:1,scaleY:1}},{t:this.shape_81,p:{scaleX:1,scaleY:1,rotation:0,x:971.6134,y:808.9114}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54,p:{rotation:-21.188,x:1046.6119,y:545.5999,scaleX:1,scaleY:1}},{t:this.shape_53,p:{rotation:-21.188,x:1010.9856,y:483.2275,scaleX:1,scaleY:1}},{t:this.shape_52,p:{rotation:-14.9983,x:973.0991,y:385.5842,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.shape_102},{t:this.shape_101,p:{regX:19.3,regY:-138.5,rotation:-1.9614,x:981.45,y:133.75}},{t:this.shape_100,p:{scaleX:0.9998,scaleY:0.9998,rotation:16.9283,x:965.8175,y:574.1975}},{t:this.shape_99,p:{scaleX:0.9998,scaleY:0.9998,rotation:16.9283,x:953.5053,y:498.9587}},{t:this.shape_98,p:{scaleX:1,scaleY:1,rotation:31.9279,x:962.3434,y:390.5848}},{t:this.shape_97,p:{scaleX:0.9999,scaleY:0.9999,rotation:5.5619,x:1066.7559,y:900.7716}},{t:this.shape_96,p:{scaleX:0.9999,scaleY:0.9999,rotation:5.5619,x:1103.625,y:951.6871}},{t:this.shape_95,p:{scaleX:0.9999,scaleY:0.9999,rotation:5.5619,x:1081.1784,y:933.6079}},{t:this.shape_94,p:{scaleX:0.9999,scaleY:0.9999,rotation:5.5619,x:1098.8534,y:944.3547}},{t:this.shape_93,p:{scaleX:0.9999,scaleY:0.9999,rotation:5.5619,x:1107.2359,y:946.5888}},{t:this.shape_92,p:{rotation:-12.1232,x:1034.149,y:623.4112,scaleX:1,scaleY:1}},{t:this.shape_91,p:{rotation:5.5623,x:1059.1088,y:795.4501,scaleX:1,scaleY:1}},{t:this.shape_90,p:{x:985.433,y:409.6097}},{t:this.shape_89,p:{x:1004.15,y:393.6842}},{t:this.shape_88,p:{x:967.2072,y:411.1671}},{t:this.shape_87,p:{scaleX:1,scaleY:1,rotation:0,x:962.775,y:912.7015}},{t:this.shape_86,p:{scaleX:1,scaleY:1,rotation:0,x:992.8093,y:960.725}},{t:this.shape_85,p:{scaleX:1,scaleY:1,rotation:0,x:971.7772,y:947.2687}},{t:this.shape_84,p:{scaleX:1,scaleY:1,rotation:0,x:988.9148,y:958.5687}},{t:this.shape_83,p:{scaleX:1,scaleY:1,rotation:0,x:997.1588,y:961.7885}},{t:this.shape_82,p:{regY:0,rotation:0,x:974.7421,y:629.7171,regX:0,scaleX:1,scaleY:1}},{t:this.shape_81,p:{scaleX:1,scaleY:1,rotation:0,x:971.6134,y:808.9114}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54,p:{rotation:-38.622,x:1090.0438,y:518.6439,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_53,p:{rotation:-38.622,x:1037.3747,y:469.8179,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_52,p:{rotation:-22.9805,x:980.4095,y:382.5232,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.shape_102},{t:this.shape_101,p:{regX:0,regY:0,rotation:0,x:962.2312,y:272.162}},{t:this.shape_100,p:{scaleX:0.9998,scaleY:0.9998,rotation:16.9283,x:965.8175,y:574.1975}},{t:this.shape_99,p:{scaleX:0.9998,scaleY:0.9998,rotation:16.9283,x:953.5053,y:498.9587}},{t:this.shape_98,p:{scaleX:1,scaleY:1,rotation:31.9279,x:962.3434,y:390.5848}},{t:this.shape_97,p:{scaleX:0.9997,scaleY:0.9997,rotation:-6.3769,x:1138.9316,y:880.6582}},{t:this.shape_96,p:{scaleX:0.9997,scaleY:0.9997,rotation:-6.3769,x:1185.5295,y:922.8395}},{t:this.shape_95,p:{scaleX:0.9997,scaleY:0.9997,rotation:-6.3769,x:1159.8319,y:909.7966}},{t:this.shape_94,p:{scaleX:0.9997,scaleY:0.9997,rotation:-6.3769,x:1179.3451,y:916.6537}},{t:this.shape_93,p:{scaleX:0.9997,scaleY:0.9997,rotation:-6.3769,x:1188.0073,y:917.1053}},{t:this.shape_92,p:{rotation:-24.0604,x:1049.7888,y:615.9445,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_91,p:{rotation:-6.377,x:1109.7086,y:779.2381,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_90,p:{x:985.433,y:409.6097}},{t:this.shape_89,p:{x:1004.15,y:393.6842}},{t:this.shape_88,p:{x:967.2072,y:411.1671}},{t:this.shape_82,p:{regY:-96.1,rotation:-7.2292,x:974.75,y:533.6,regX:0,scaleX:1,scaleY:1}},{t:this.shape_87,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.4796,x:981.6508,y:912.1055}},{t:this.shape_86,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.4796,x:1010.4311,y:960.8818}},{t:this.shape_85,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.4796,x:989.7564,y:946.8888}},{t:this.shape_84,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.4796,x:1006.594,y:958.6259}},{t:this.shape_83,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.4796,x:1014.7511,y:962.0571}},{t:this.shape_81,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.4805,x:993.2709,y:808.4278}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54,p:{rotation:-38.622,x:1090.0438,y:518.6439,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_53,p:{rotation:-38.622,x:1037.3747,y:469.8179,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_52,p:{rotation:-22.9805,x:980.4095,y:382.5232,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.shape_102},{t:this.shape_101,p:{regX:25,regY:-142.3,rotation:-5.9409,x:987.15,y:129.85}},{t:this.shape_100,p:{scaleX:0.9999,scaleY:0.9999,rotation:14.6878,x:957.5304,y:568.1385}},{t:this.shape_99,p:{scaleX:0.9999,scaleY:0.9999,rotation:14.6878,x:942.286,y:493.4374}},{t:this.shape_98,p:{scaleX:1,scaleY:1,rotation:39.403,x:956.4157,y:388.8825}},{t:this.shape_92,p:{rotation:-24.0626,x:1050.0897,y:615.8939,scaleX:1,scaleY:1}},{t:this.shape_97,p:{scaleX:0.9997,scaleY:0.9997,rotation:8.6212,x:1089.4113,y:886.8241}},{t:this.shape_96,p:{scaleX:0.9997,scaleY:0.9997,rotation:8.6212,x:1123.5047,y:939.6257}},{t:this.shape_95,p:{scaleX:0.9997,scaleY:0.9997,rotation:8.6212,x:1102.0586,y:920.3776}},{t:this.shape_94,p:{scaleX:0.9997,scaleY:0.9997,rotation:8.6212,x:1119.1319,y:932.0504}},{t:this.shape_93,p:{scaleX:0.9997,scaleY:0.9997,rotation:8.6212,x:1127.3819,y:934.7282}},{t:this.shape_91,p:{rotation:8.6204,x:1087.4236,y:781.263,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_90,p:{x:985.433,y:409.6097}},{t:this.shape_89,p:{x:1004.15,y:393.6842}},{t:this.shape_88,p:{x:967.2072,y:411.1671}},{t:this.shape_82,p:{regY:-96.1,rotation:-7.2292,x:974.75,y:533.6,regX:0,scaleX:1,scaleY:1}},{t:this.shape_87,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.4796,x:981.6508,y:912.1055}},{t:this.shape_86,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.4796,x:1010.4311,y:960.8818}},{t:this.shape_85,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.4796,x:989.7564,y:946.8888}},{t:this.shape_84,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.4796,x:1006.594,y:958.6259}},{t:this.shape_83,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.4796,x:1014.7511,y:962.0571}},{t:this.shape_81,p:{scaleX:0.9999,scaleY:0.9999,rotation:1.4805,x:993.2709,y:808.4278}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54,p:{rotation:-32.124,x:1067.8369,y:532.3971,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_53,p:{rotation:-32.124,x:1021.0356,y:477.9288,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_52,p:{rotation:-16.4811,x:974.3377,y:384.8462,scaleX:0.9999,scaleY:0.9999}}]},2).to({state:[{t:this.shape_102},{t:this.shape_101,p:{regX:30.7,regY:-146.1,rotation:-9.1877,x:992.9,y:126}},{t:this.shape_100,p:{scaleX:0.9998,scaleY:0.9998,rotation:2.9527,x:1003.0678,y:566.8023}},{t:this.shape_99,p:{scaleX:0.9998,scaleY:0.9998,rotation:2.9527,x:972.9517,y:496.7697}},{t:this.shape_98,p:{scaleX:0.9998,scaleY:0.9998,rotation:27.6695,x:965.479,y:391.5188}},{t:this.shape_92,p:{rotation:-17.8496,x:1041.9676,y:620.2151,scaleX:1,scaleY:1}},{t:this.shape_97,p:{scaleX:0.9997,scaleY:0.9997,rotation:4.0814,x:1087.5061,y:894.7108}},{t:this.shape_96,p:{scaleX:0.9997,scaleY:0.9997,rotation:4.0814,x:1125.6712,y:944.6473}},{t:this.shape_95,p:{scaleX:0.9997,scaleY:0.9997,rotation:4.0814,x:1102.7693,y:927.1573}},{t:this.shape_94,p:{scaleX:0.9997,scaleY:0.9997,rotation:4.0814,x:1120.7126,y:937.442}},{t:this.shape_93,p:{scaleX:0.9997,scaleY:0.9997,rotation:4.0814,x:1129.1485,y:939.4584}},{t:this.shape_91,p:{rotation:4.082,x:1077.1406,y:789.6428,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_90,p:{x:985.433,y:409.6097}},{t:this.shape_89,p:{x:1004.15,y:393.6842}},{t:this.shape_88,p:{x:967.2072,y:411.1671}},{t:this.shape_82,p:{regY:-96.1,rotation:-7.2292,x:974.75,y:533.6,regX:0,scaleX:1,scaleY:1}},{t:this.shape_87,p:{scaleX:0.9998,scaleY:0.9998,rotation:10.4358,x:952.4247,y:907.8688}},{t:this.shape_86,p:{scaleX:0.9998,scaleY:0.9998,rotation:10.4358,x:973.2587,y:960.526}},{t:this.shape_85,p:{scaleX:0.9998,scaleY:0.9998,rotation:10.4358,x:955.0161,y:943.4865}},{t:this.shape_84,p:{scaleX:0.9998,scaleY:0.9998,rotation:10.4358,x:969.8199,y:957.7005}},{t:this.shape_83,p:{scaleX:0.9998,scaleY:0.9998,rotation:10.4358,x:977.3426,y:962.3593}},{t:this.shape_81,p:{scaleX:0.9999,scaleY:0.9999,rotation:10.4362,x:980.1105,y:807.4911}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54,p:{rotation:-23.6881,x:1037.1791,y:546.6244,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_53,p:{rotation:-23.6881,x:998.8759,y:485.8813,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_52,p:{rotation:-8.0448,x:966.2403,y:386.8824,scaleX:0.9998,scaleY:0.9998}}]},2).to({state:[{t:this.shape_102},{t:this.shape_101,p:{regX:23,regY:-130.7,rotation:-6.9676,x:985.25,y:141.45}},{t:this.shape_100,p:{scaleX:0.9998,scaleY:0.9998,rotation:-3.2389,x:1026.7923,y:562.0899}},{t:this.shape_99,p:{scaleX:0.9998,scaleY:0.9998,rotation:-3.2389,x:989.2964,y:495.7103}},{t:this.shape_98,p:{scaleX:0.9998,scaleY:0.9998,rotation:21.4724,x:970.6214,y:392.0883}},{t:this.shape_92,p:{rotation:-9.1493,x:1029.8787,y:624.7066,scaleX:1,scaleY:1}},{t:this.shape_97,p:{scaleX:0.9997,scaleY:0.9997,rotation:9.0333,x:1046.0446,y:903.6334}},{t:this.shape_96,p:{scaleX:0.9997,scaleY:0.9997,rotation:9.0333,x:1079.7585,y:956.6808}},{t:this.shape_95,p:{scaleX:0.9997,scaleY:0.9997,rotation:9.0333,x:1058.4506,y:937.2782}},{t:this.shape_94,p:{scaleX:0.9997,scaleY:0.9997,rotation:9.0333,x:1075.4402,y:949.074}},{t:this.shape_93,p:{scaleX:0.9997,scaleY:0.9997,rotation:9.0333,x:1083.671,y:951.8111}},{t:this.shape_91,p:{rotation:9.0346,x:1044.7601,y:798.0391,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_90,p:{x:985.433,y:409.6097}},{t:this.shape_89,p:{x:1004.15,y:393.6842}},{t:this.shape_88,p:{x:967.2072,y:411.1671}},{t:this.shape_82,p:{regY:-96.2,rotation:-2.0174,x:975.6,y:531.95,regX:0.1,scaleX:1,scaleY:1}},{t:this.shape_87,p:{scaleX:0.9997,scaleY:0.9997,rotation:30.645,x:874.8572,y:881.9855}},{t:this.shape_86,p:{scaleX:0.9997,scaleY:0.9997,rotation:30.645,x:876.2181,y:938.5927}},{t:this.shape_85,p:{scaleX:0.9997,scaleY:0.9997,rotation:30.645,x:864.9859,y:916.3025}},{t:this.shape_84,p:{scaleX:0.9997,scaleY:0.9997,rotation:30.645,x:873.9673,y:934.7536}},{t:this.shape_83,p:{scaleX:0.9997,scaleY:0.9997,rotation:30.645,x:879.417,y:941.7237}},{t:this.shape_81,p:{scaleX:0.9998,scaleY:0.9998,rotation:30.6457,x:935.5976,y:797.2102}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54,p:{rotation:-14.9607,x:1003.4998,y:556.4743,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_53,p:{rotation:-14.9607,x:974.858,y:490.6249,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_52,p:{rotation:0.6724,x:957.7251,y:388.0824,scaleX:0.9998,scaleY:0.9998}}]},2).to({state:[{t:this.movieClip_1_1}]},2).to({state:[{t:this.shape_102},{t:this.shape_101,p:{regX:19.2,regY:-144.3,rotation:6.9817,x:981.4,y:127.9}},{t:this.shape_100,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.4897,x:1033.677,y:565.8578}},{t:this.shape_99,p:{scaleX:0.9999,scaleY:0.9999,rotation:-0.4897,x:999.4068,y:497.7532}},{t:this.shape_98,p:{scaleX:1,scaleY:1,rotation:15.2455,x:976.1032,y:391.8391}},{t:this.shape_92,p:{rotation:1.31,x:1014.5595,y:627.814,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_97,p:{scaleX:0.9996,scaleY:0.9996,rotation:10.2891,x:1010.5394,y:908.409}},{t:this.shape_96,p:{scaleX:0.9996,scaleY:0.9996,rotation:10.2891,x:1043.0782,y:962.175}},{t:this.shape_95,p:{scaleX:0.9996,scaleY:0.9996,rotation:10.2891,x:1022.2035,y:942.3128}},{t:this.shape_94,p:{scaleX:0.9996,scaleY:0.9996,rotation:10.2891,x:1038.9281,y:954.4764}},{t:this.shape_93,p:{scaleX:0.9996,scaleY:0.9996,rotation:10.2891,x:1047.0958,y:957.3929}},{t:this.shape_91,p:{rotation:10.289,x:1011.6144,y:802.8544,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_90,p:{x:985.433,y:409.6097}},{t:this.shape_89,p:{x:1004.15,y:393.6842}},{t:this.shape_88,p:{x:967.2072,y:411.1671}},{t:this.shape_82,p:{regY:-96.1,rotation:-12.724,x:974.25,y:535.45,regX:0.1,scaleX:1,scaleY:1}},{t:this.shape_87,p:{scaleX:0.9996,scaleY:0.9996,rotation:55.686,x:851.1961,y:824.2541}},{t:this.shape_86,p:{scaleX:0.9996,scaleY:0.9996,rotation:55.686,x:828.4706,y:876.1132}},{t:this.shape_85,p:{scaleX:0.9996,scaleY:0.9996,rotation:55.686,x:827.7289,y:851.1656}},{t:this.shape_84,p:{scaleX:0.9996,scaleY:0.9996,rotation:55.686,x:828.0563,y:871.6826}},{t:this.shape_83,p:{scaleX:0.9996,scaleY:0.9996,rotation:55.686,x:830.0435,y:880.3036}},{t:this.shape_81,p:{scaleX:0.9998,scaleY:0.9998,rotation:55.6864,x:941.8646,y:773.1048}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54,p:{rotation:-1.0145,x:947.883,y:561.9301,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_53,p:{rotation:-1.0145,x:935.9557,y:491.1182,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_52,p:{rotation:14.6191,x:943.9367,y:387.1105,scaleX:0.9998,scaleY:0.9998}}]},2).to({state:[{t:this.shape_102},{t:this.shape_101,p:{regX:26.9,regY:-130.8,rotation:4.7273,x:989.15,y:141.4}},{t:this.shape_100,p:{scaleX:0.9997,scaleY:0.9997,rotation:-4.4784,x:1048.6623,y:561.322}},{t:this.shape_99,p:{scaleX:0.9997,scaleY:0.9997,rotation:-4.4784,x:1009.7409,y:495.7716}},{t:this.shape_98,p:{scaleX:0.9999,scaleY:0.9999,rotation:11.2496,x:978.9618,y:391.854}},{t:this.shape_92,p:{rotation:1.31,x:1014.5595,y:627.814,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_97,p:{scaleX:0.9996,scaleY:0.9996,rotation:10.2891,x:1010.5394,y:908.409}},{t:this.shape_96,p:{scaleX:0.9996,scaleY:0.9996,rotation:10.2891,x:1043.0782,y:962.175}},{t:this.shape_95,p:{scaleX:0.9996,scaleY:0.9996,rotation:10.2891,x:1022.2035,y:942.3128}},{t:this.shape_94,p:{scaleX:0.9996,scaleY:0.9996,rotation:10.2891,x:1038.9281,y:954.4764}},{t:this.shape_93,p:{scaleX:0.9996,scaleY:0.9996,rotation:10.2891,x:1047.0958,y:957.3929}},{t:this.shape_91,p:{rotation:10.289,x:1011.6144,y:802.8544,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_90,p:{x:985.433,y:409.6097}},{t:this.shape_89,p:{x:1004.15,y:393.6842}},{t:this.shape_88,p:{x:967.2072,y:411.1671}},{t:this.shape_82,p:{regY:-95.8,rotation:-38.1843,x:973.5,y:544.05,regX:0.4,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_87,p:{scaleX:0.9995,scaleY:0.9995,rotation:30.2224,x:986.126,y:858.2009}},{t:this.shape_86,p:{scaleX:0.9995,scaleY:0.9995,rotation:30.2224,x:987.9041,y:914.7858}},{t:this.shape_85,p:{scaleX:0.9995,scaleY:0.9995,rotation:30.2224,x:976.5099,y:892.5832}},{t:this.shape_84,p:{scaleX:0.9995,scaleY:0.9995,rotation:30.2224,x:985.6254,y:910.9642}},{t:this.shape_83,p:{scaleX:0.9995,scaleY:0.9995,rotation:30.2224,x:991.1254,y:917.8925}},{t:this.shape_81,p:{scaleX:0.9996,scaleY:0.9996,rotation:30.222,x:1046.2941,y:773.0163}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54,p:{rotation:-5.7107,x:966.8355,y:561.4797,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_53,p:{rotation:-5.7107,x:949.1511,y:491.8833,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_52,p:{rotation:9.9214,x:948.5572,y:387.9651,scaleX:0.9998,scaleY:0.9998}}]},2).to({state:[{t:this.shape_102},{t:this.shape_101,p:{regX:0,regY:0,rotation:0,x:962.2312,y:272.162}},{t:this.shape_100,p:{scaleX:0.9997,scaleY:0.9997,rotation:-11.2192,x:1073.3465,y:550.783}},{t:this.shape_99,p:{scaleX:0.9997,scaleY:0.9997,rotation:-11.2192,x:1027.0028,y:490.2579}},{t:this.shape_98,p:{scaleX:0.9998,scaleY:0.9998,rotation:4.5072,x:984.44,y:390.7064}},{t:this.shape_92,p:{rotation:1.31,x:1014.5595,y:627.814,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_97,p:{scaleX:0.9996,scaleY:0.9996,rotation:10.2891,x:1010.5394,y:908.409}},{t:this.shape_96,p:{scaleX:0.9996,scaleY:0.9996,rotation:10.2891,x:1043.0782,y:962.175}},{t:this.shape_95,p:{scaleX:0.9996,scaleY:0.9996,rotation:10.2891,x:1022.2035,y:942.3128}},{t:this.shape_94,p:{scaleX:0.9996,scaleY:0.9996,rotation:10.2891,x:1038.9281,y:954.4764}},{t:this.shape_93,p:{scaleX:0.9996,scaleY:0.9996,rotation:10.2891,x:1047.0958,y:957.3929}},{t:this.shape_91,p:{rotation:10.289,x:1011.6144,y:802.8544,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_90,p:{x:985.433,y:409.6097}},{t:this.shape_89,p:{x:1004.15,y:393.6842}},{t:this.shape_88,p:{x:967.2072,y:411.1671}},{t:this.shape_103,p:{rotation:0,x:973.85,y:545.35,regX:-63.9,regY:-68.4,scaleX:1,scaleY:1}},{t:this.shape_87,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.2821,x:1086.9639,y:879.7376}},{t:this.shape_86,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.2821,x:1115.9079,y:928.4073}},{t:this.shape_85,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.2821,x:1095.188,y:914.4877}},{t:this.shape_84,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.2821,x:1112.0636,y:926.165}},{t:this.shape_83,p:{scaleX:0.9997,scaleY:0.9997,rotation:1.2821,x:1120.2313,y:929.5676}},{t:this.shape_81,p:{scaleX:0.9998,scaleY:0.9998,rotation:1.2829,x:1098.2538,y:776.1241}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54,p:{rotation:-5.7107,x:966.8355,y:561.4797,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_53,p:{rotation:-5.7107,x:949.1511,y:491.8833,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_52,p:{rotation:9.9214,x:948.5572,y:387.9651,scaleX:0.9998,scaleY:0.9998}}]},2).to({state:[{t:this.shape_102},{t:this.shape_101,p:{regX:19.2,regY:-134.6,rotation:-5.2407,x:981.4,y:137.55}},{t:this.shape_100,p:{scaleX:0.9997,scaleY:0.9997,rotation:-11.2192,x:1073.3465,y:550.783}},{t:this.shape_99,p:{scaleX:0.9997,scaleY:0.9997,rotation:-11.2192,x:1027.0028,y:490.2579}},{t:this.shape_98,p:{scaleX:0.9998,scaleY:0.9998,rotation:4.5072,x:984.44,y:390.7064}},{t:this.shape_92,p:{rotation:1.31,x:1014.5595,y:627.814,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_97,p:{scaleX:0.9996,scaleY:0.9996,rotation:10.2891,x:1010.5394,y:908.409}},{t:this.shape_96,p:{scaleX:0.9996,scaleY:0.9996,rotation:10.2891,x:1043.0782,y:962.175}},{t:this.shape_95,p:{scaleX:0.9996,scaleY:0.9996,rotation:10.2891,x:1022.2035,y:942.3128}},{t:this.shape_94,p:{scaleX:0.9996,scaleY:0.9996,rotation:10.2891,x:1038.9281,y:954.4764}},{t:this.shape_93,p:{scaleX:0.9996,scaleY:0.9996,rotation:10.2891,x:1047.0958,y:957.3929}},{t:this.shape_91,p:{rotation:10.289,x:1011.6144,y:802.8544,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_90,p:{x:985.433,y:409.6097}},{t:this.shape_89,p:{x:1004.15,y:393.6842}},{t:this.shape_88,p:{x:967.2072,y:411.1671}},{t:this.shape_103,p:{rotation:0,x:973.85,y:545.35,regX:-63.9,regY:-68.4,scaleX:1,scaleY:1}},{t:this.shape_87,p:{scaleX:0.9996,scaleY:0.9996,rotation:-13.7147,x:1135.5917,y:875.8026}},{t:this.shape_86,p:{scaleX:0.9996,scaleY:0.9996,rotation:-13.7147,x:1176.1406,y:915.3216}},{t:this.shape_85,p:{scaleX:0.9996,scaleY:0.9996,rotation:-13.7147,x:1152.5265,y:907.2383}},{t:this.shape_84,p:{scaleX:0.9996,scaleY:0.9996,rotation:-13.7147,x:1171.8474,y:914.1505}},{t:this.shape_83,p:{scaleX:0.9996,scaleY:0.9996,rotation:-13.7147,x:1180.6165,y:915.3236}},{t:this.shape_81,p:{scaleX:0.9998,scaleY:0.9998,rotation:-13.7145,x:1119.9376,y:772.8604}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54,p:{rotation:-5.7107,x:966.8355,y:561.4797,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_53,p:{rotation:-5.7107,x:949.1511,y:491.8833,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_52,p:{rotation:9.9214,x:948.5572,y:387.9651,scaleX:0.9998,scaleY:0.9998}}]},2).to({state:[{t:this.shape_102},{t:this.shape_101,p:{regX:0,regY:0,rotation:0,x:962.2312,y:272.162}},{t:this.shape_100,p:{scaleX:0.9997,scaleY:0.9997,rotation:-18.1623,x:1097.8127,y:537.2246}},{t:this.shape_99,p:{scaleX:0.9997,scaleY:0.9997,rotation:-18.1623,x:1044.4923,y:482.7454}},{t:this.shape_98,p:{scaleX:0.9998,scaleY:0.9998,rotation:-2.4326,x:990.0959,y:389.0574}},{t:this.shape_92,p:{rotation:-1.1604,x:1017.8853,y:627.5507,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_97,p:{scaleX:0.9996,scaleY:0.9996,rotation:12.052,x:1011.9622,y:907.7959}},{t:this.shape_96,p:{scaleX:0.9996,scaleY:0.9996,rotation:12.052,x:1042.8308,y:962.5361}},{t:this.shape_95,p:{scaleX:0.9996,scaleY:0.9996,rotation:12.052,x:1022.5776,y:942.0416}},{t:this.shape_94,p:{scaleX:0.9996,scaleY:0.9996,rotation:12.052,x:1038.9197,y:954.7137}},{t:this.shape_93,p:{scaleX:0.9996,scaleY:0.9996,rotation:12.052,x:1046.9936,y:957.88}},{t:this.shape_91,p:{rotation:12.0542,x:1016.2196,y:802.2952,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_90,p:{x:985.433,y:409.6097}},{t:this.shape_89,p:{x:1004.15,y:393.6842}},{t:this.shape_88,p:{x:967.2072,y:411.1671}},{t:this.shape_103,p:{rotation:3.7323,x:973.65,y:544.15,regX:-63.9,regY:-68.4,scaleX:1,scaleY:1}},{t:this.shape_87,p:{scaleX:0.9996,scaleY:0.9996,rotation:-15.9221,x:1132.9113,y:880.7914}},{t:this.shape_86,p:{scaleX:0.9996,scaleY:0.9996,rotation:-15.9221,x:1174.9525,y:918.7195}},{t:this.shape_85,p:{scaleX:0.9996,scaleY:0.9996,rotation:-15.9221,x:1151.0444,y:911.5517}},{t:this.shape_84,p:{scaleX:0.9996,scaleY:0.9996,rotation:-15.9221,x:1170.6173,y:917.7146}},{t:this.shape_83,p:{scaleX:0.9996,scaleY:0.9996,rotation:-15.9221,x:1179.4253,y:918.5491}},{t:this.shape_81,p:{scaleX:0.9998,scaleY:0.9998,rotation:-15.9221,x:1113.237,y:778.616}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54,p:{rotation:-2.2024,x:959.8849,y:563.1673,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_53,p:{rotation:-2.2024,x:946.4909,y:492.6114,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_52,p:{rotation:9.9226,x:948.6219,y:388.1002,scaleX:0.9999,scaleY:0.9999}}]},2).to({state:[{t:this.shape_102},{t:this.shape_101,p:{regX:0,regY:0,rotation:0,x:962.2312,y:272.162}},{t:this.shape_100,p:{scaleX:0.9996,scaleY:0.9996,rotation:-9.7086,x:1067.9097,y:553.3666}},{t:this.shape_99,p:{scaleX:0.9996,scaleY:0.9996,rotation:-9.7086,x:1023.1795,y:491.6435}},{t:this.shape_98,p:{scaleX:0.9998,scaleY:0.9998,rotation:6.0188,x:983.2162,y:391.066}},{t:this.shape_92,p:{rotation:-1.1604,x:1017.8853,y:627.5507,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_97,p:{scaleX:0.9996,scaleY:0.9996,rotation:12.052,x:1011.9622,y:907.7959}},{t:this.shape_96,p:{scaleX:0.9996,scaleY:0.9996,rotation:12.052,x:1042.8308,y:962.5361}},{t:this.shape_95,p:{scaleX:0.9996,scaleY:0.9996,rotation:12.052,x:1022.5776,y:942.0416}},{t:this.shape_94,p:{scaleX:0.9996,scaleY:0.9996,rotation:12.052,x:1038.9197,y:954.7137}},{t:this.shape_93,p:{scaleX:0.9996,scaleY:0.9996,rotation:12.052,x:1046.9936,y:957.88}},{t:this.shape_91,p:{rotation:12.0542,x:1016.2196,y:802.2952,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_90,p:{x:985.433,y:409.6097}},{t:this.shape_89,p:{x:1004.15,y:393.6842}},{t:this.shape_88,p:{x:967.2072,y:411.1671}},{t:this.shape_103,p:{rotation:10.9459,x:973.45,y:541.85,regX:-63.8,regY:-68.3,scaleX:1,scaleY:1}},{t:this.shape_87,p:{scaleX:0.9996,scaleY:0.9996,rotation:-14.9032,x:1109.1531,y:892.1382}},{t:this.shape_86,p:{scaleX:0.9996,scaleY:0.9996,rotation:-14.9032,x:1150.5109,y:930.8057}},{t:this.shape_85,p:{scaleX:0.9996,scaleY:0.9996,rotation:-14.9032,x:1126.7354,y:923.2144}},{t:this.shape_84,p:{scaleX:0.9996,scaleY:0.9996,rotation:-14.9032,x:1146.1946,y:929.724}},{t:this.shape_83,p:{scaleX:0.9996,scaleY:0.9996,rotation:-14.9032,x:1154.9858,y:930.7148}},{t:this.shape_81,p:{scaleX:0.9997,scaleY:0.9997,rotation:-14.9034,x:1091.3002,y:789.5299}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54,p:{rotation:-6.6667,x:977.6388,y:561.8978,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_53,p:{rotation:-6.6667,x:958.7951,y:492.6042,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_52,p:{rotation:5.4542,x:952.8069,y:388.8225,scaleX:0.9998,scaleY:0.9998}}]},2).to({state:[{t:this.shape_102},{t:this.shape_101,p:{regX:0,regY:0,rotation:0,x:962.2312,y:272.162}},{t:this.shape_100,p:{scaleX:0.9998,scaleY:0.9998,rotation:-0.4722,x:1033.342,y:566.1794}},{t:this.shape_99,p:{scaleX:0.9998,scaleY:0.9998,rotation:-0.4722,x:999.0952,y:498.0698}},{t:this.shape_98,p:{scaleX:0.9998,scaleY:0.9998,rotation:15.2533,x:975.8481,y:392.0708}},{t:this.shape_92,p:{rotation:4.0509,x:1010.6523,y:628.0422,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_97,p:{scaleX:0.9995,scaleY:0.9995,rotation:27.7383,x:944.9955,y:897.826}},{t:this.shape_96,p:{scaleX:0.9995,scaleY:0.9995,rotation:27.7383,x:959.9136,y:958.8703}},{t:this.shape_95,p:{scaleX:0.9995,scaleY:0.9995,rotation:27.7383,x:945.9564,y:933.6646}},{t:this.shape_94,p:{scaleX:0.9995,scaleY:0.9995,rotation:27.7383,x:958.2631,y:950.2823}},{t:this.shape_93,p:{scaleX:0.9995,scaleY:0.9995,rotation:27.7383,x:965.1799,y:955.5133}},{t:this.shape_91,p:{rotation:27.7365,x:977.7064,y:797.4834,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_90,p:{x:985.433,y:409.6097}},{t:this.shape_89,p:{x:1004.15,y:393.6842}},{t:this.shape_88,p:{x:967.2072,y:411.1671}},{t:this.shape_103,p:{rotation:20.8833,x:974.05,y:538.25,regX:-63.5,regY:-68.7,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_87,p:{scaleX:0.9995,scaleY:0.9995,rotation:-4.9604,x:1046.8991,y:906.6772}},{t:this.shape_86,p:{scaleX:0.9995,scaleY:0.9995,rotation:-4.9604,x:1080.957,y:951.902}},{t:this.shape_85,p:{scaleX:0.9995,scaleY:0.9995,rotation:-4.9604,x:1058.8508,y:940.3202}},{t:this.shape_84,p:{scaleX:0.9995,scaleY:0.9995,rotation:-4.9604,x:1076.8925,y:950.0914}},{t:this.shape_83,p:{scaleX:0.9995,scaleY:0.9995,rotation:-4.9604,x:1085.38,y:952.5851}},{t:this.shape_81,p:{scaleX:0.9996,scaleY:0.9996,rotation:-4.96,x:1047.0274,y:802.6259}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54,p:{rotation:-13.9096,x:1006.2498,y:556.8936,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_53,p:{rotation:-13.9096,x:978.821,y:490.5305,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_52,p:{rotation:-1.7859,x:959.8026,y:388.6466,scaleX:0.9998,scaleY:0.9998}}]},2).to({state:[{t:this.shape_102},{t:this.shape_101,p:{regX:25,regY:-138.4,rotation:-5.4383,x:987.2,y:133.8}},{t:this.shape_100,p:{scaleX:0.9998,scaleY:0.9998,rotation:8.4742,x:998.1762,y:572.71}},{t:this.shape_99,p:{scaleX:0.9998,scaleY:0.9998,rotation:8.4742,x:974.9384,y:500.1054}},{t:this.shape_98,p:{scaleX:0.9998,scaleY:0.9998,rotation:24.2043,x:968.5957,y:391.8037}},{t:this.shape_92,p:{rotation:8.321,x:1004.1003,y:628.4451,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_97,p:{scaleX:0.9994,scaleY:0.9994,rotation:47.0108,x:875.4937,y:866.7393}},{t:this.shape_96,p:{scaleX:0.9994,scaleY:0.9994,rotation:47.0108,x:869.4282,y:929.2781}},{t:this.shape_95,p:{scaleX:0.9994,scaleY:0.9994,rotation:47.0108,x:864.5733,y:900.882}},{t:this.shape_94,p:{scaleX:0.9994,scaleY:0.9994,rotation:47.0108,x:870.7046,y:920.6278}},{t:this.shape_93,p:{scaleX:0.9994,scaleY:0.9994,rotation:47.0108,x:875.5066,y:927.8476}},{t:this.shape_91,p:{rotation:47.0117,x:939.4263,y:782.8756,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_90,p:{x:985.433,y:409.6097}},{t:this.shape_89,p:{x:1004.15,y:393.6842}},{t:this.shape_88,p:{x:967.2072,y:411.1671}},{t:this.shape_103,p:{rotation:20.8833,x:974.05,y:538.25,regX:-63.5,regY:-68.7,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_87,p:{scaleX:0.9995,scaleY:0.9995,rotation:-4.9604,x:1046.8991,y:906.6772}},{t:this.shape_86,p:{scaleX:0.9995,scaleY:0.9995,rotation:-4.9604,x:1080.957,y:951.902}},{t:this.shape_85,p:{scaleX:0.9995,scaleY:0.9995,rotation:-4.9604,x:1058.8508,y:940.3202}},{t:this.shape_84,p:{scaleX:0.9995,scaleY:0.9995,rotation:-4.9604,x:1076.8925,y:950.0914}},{t:this.shape_83,p:{scaleX:0.9995,scaleY:0.9995,rotation:-4.9604,x:1085.38,y:952.5851}},{t:this.shape_81,p:{scaleX:0.9996,scaleY:0.9996,rotation:-4.96,x:1047.0274,y:802.6259}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54,p:{rotation:-19.3961,x:1027.6237,y:550.9075,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_53,p:{rotation:-19.3961,x:993.9771,y:487.474,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_52,p:{rotation:-7.2714,x:965.4359,y:387.7169,scaleX:0.9998,scaleY:0.9998}}]},2).to({state:[{t:this.shape_102},{t:this.shape_101,p:{regX:26.9,regY:-146.1,rotation:-8.4648,x:989.1,y:126}},{t:this.shape_100,p:{scaleX:0.9998,scaleY:0.9998,rotation:8.4742,x:998.1762,y:572.71}},{t:this.shape_99,p:{scaleX:0.9998,scaleY:0.9998,rotation:8.4742,x:974.9384,y:500.1054}},{t:this.shape_98,p:{scaleX:0.9998,scaleY:0.9998,rotation:24.2043,x:968.5957,y:391.8037}},{t:this.shape_92,p:{rotation:-11.4243,x:1033.1204,y:623.9917,scaleX:0.9999,scaleY:0.9999}},{t:this.shape_97,p:{scaleX:0.9995,scaleY:0.9995,rotation:42.2627,x:947.644,y:869.3199}},{t:this.shape_96,p:{scaleX:0.9995,scaleY:0.9995,rotation:42.2627,x:946.7758,y:932.1549}},{t:this.shape_95,p:{scaleX:0.9995,scaleY:0.9995,rotation:42.2627,x:939.5861,y:904.2542}},{t:this.shape_94,p:{scaleX:0.9995,scaleY:0.9995,rotation:42.2627,x:947.3319,y:923.4273}},{t:this.shape_93,p:{scaleX:0.9995,scaleY:0.9995,rotation:42.2627,x:952.7157,y:930.2259}},{t:this.shape_91,p:{rotation:42.2619,x:1004.4589,y:780.3956,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_90,p:{x:985.433,y:409.6097}},{t:this.shape_89,p:{x:1004.15,y:393.6842}},{t:this.shape_88,p:{x:967.2072,y:411.1671}},{t:this.shape_103,p:{rotation:26.8532,x:974.15,y:536.55,regX:-63.7,regY:-68.4,scaleX:1,scaleY:1}},{t:this.shape_87,p:{scaleX:0.9997,scaleY:0.9997,rotation:-3.9817,x:1025.0001,y:911.0054}},{t:this.shape_86,p:{scaleX:0.9997,scaleY:0.9997,rotation:-3.9817,x:1058.2844,y:956.8108}},{t:this.shape_85,p:{scaleX:0.9997,scaleY:0.9997,rotation:-3.9817,x:1036.3767,y:944.8517}},{t:this.shape_84,p:{scaleX:0.9997,scaleY:0.9997,rotation:-3.9817,x:1054.251,y:954.9308}},{t:this.shape_83,p:{scaleX:0.9997,scaleY:0.9997,rotation:-3.9817,x:1062.6957,y:957.5694}},{t:this.shape_81,p:{scaleX:0.9997,scaleY:0.9997,rotation:-3.9823,x:1026.9103,y:806.7318}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54,p:{rotation:-12.3405,x:1030.0857,y:551.5521,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_53,p:{rotation:-12.3405,x:1004.4821,y:484.457,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_52,p:{rotation:-15.2129,x:973.2797,y:385.7468,scaleX:0.9999,scaleY:0.9999}}]},2).to({state:[{t:this.shape_102},{t:this.shape_101,p:{regX:28.8,regY:-142.3,rotation:-4.9756,x:991,y:129.8}},{t:this.shape_100,p:{scaleX:0.9998,scaleY:0.9998,rotation:-4.8135,x:1009.4403,y:555.7588}},{t:this.shape_99,p:{scaleX:0.9998,scaleY:0.9998,rotation:-4.8135,x:970.1356,y:490.4361}},{t:this.shape_98,p:{scaleX:0.9998,scaleY:0.9998,rotation:32.6584,x:961.7,y:390.7702}},{t:this.shape_92,p:{rotation:-23.6528,x:1049.5559,y:616.5087,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_97,p:{scaleX:0.9996,scaleY:0.9996,rotation:9.7884,x:1084.3073,y:888.3572}},{t:this.shape_96,p:{scaleX:0.9996,scaleY:0.9996,rotation:9.7884,x:1117.3137,y:941.8353}},{t:this.shape_95,p:{scaleX:0.9996,scaleY:0.9996,rotation:9.7884,x:1096.2669,y:922.1568}},{t:this.shape_94,p:{scaleX:0.9996,scaleY:0.9996,rotation:9.7884,x:1113.0967,y:934.1735}},{t:this.shape_93,p:{scaleX:0.9996,scaleY:0.9996,rotation:9.7884,x:1121.2893,y:937.0184}},{t:this.shape_91,p:{rotation:9.7889,x:1084.428,y:782.7624,scaleX:0.9996,scaleY:0.9996}},{t:this.shape_90,p:{x:985.433,y:409.6097}},{t:this.shape_89,p:{x:1004.15,y:393.6842}},{t:this.shape_88,p:{x:967.2072,y:411.1671}},{t:this.shape_103,p:{rotation:26.8532,x:974.15,y:536.55,regX:-63.7,regY:-68.4,scaleX:1,scaleY:1}},{t:this.shape_87,p:{scaleX:0.9997,scaleY:0.9997,rotation:-3.9817,x:1025.0001,y:911.0054}},{t:this.shape_86,p:{scaleX:0.9997,scaleY:0.9997,rotation:-3.9817,x:1058.2844,y:956.8108}},{t:this.shape_85,p:{scaleX:0.9997,scaleY:0.9997,rotation:-3.9817,x:1036.3767,y:944.8517}},{t:this.shape_84,p:{scaleX:0.9997,scaleY:0.9997,rotation:-3.9817,x:1054.251,y:954.9308}},{t:this.shape_83,p:{scaleX:0.9997,scaleY:0.9997,rotation:-3.9817,x:1062.6957,y:957.5694}},{t:this.shape_81,p:{scaleX:0.9997,scaleY:0.9997,rotation:-3.9823,x:1026.9103,y:806.7318}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54,p:{rotation:-34.5834,x:1082.8228,y:524.5431,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_53,p:{rotation:-34.5834,x:1033.7299,y:472.136,scaleX:0.9997,scaleY:0.9997}},{t:this.shape_52,p:{rotation:-22.4541,x:979.9716,y:383.0999,scaleX:0.9999,scaleY:0.9999}}]},2).to({state:[{t:this.shape_102},{t:this.shape_101,p:{regX:0,regY:0,rotation:0,x:962.2312,y:272.162}},{t:this.shape_100,p:{scaleX:0.9998,scaleY:0.9998,rotation:16.9282,x:965.794,y:574.1595}},{t:this.shape_99,p:{scaleX:0.9998,scaleY:0.9998,rotation:16.9282,x:953.4824,y:498.9243}},{t:this.shape_98,p:{scaleX:1,scaleY:1,rotation:31.9279,x:962.3434,y:390.5848}},{t:this.shape_97,p:{scaleX:0.9999,scaleY:0.9999,rotation:5.562,x:1066.7452,y:900.7573}},{t:this.shape_96,p:{scaleX:0.9999,scaleY:0.9999,rotation:5.562,x:1103.6138,y:951.6721}},{t:this.shape_95,p:{scaleX:0.9999,scaleY:0.9999,rotation:5.562,x:1081.1675,y:933.5931}},{t:this.shape_94,p:{scaleX:0.9999,scaleY:0.9999,rotation:5.562,x:1098.8422,y:944.3398}},{t:this.shape_93,p:{scaleX:0.9999,scaleY:0.9999,rotation:5.562,x:1107.2246,y:946.5738}},{t:this.shape_92,p:{rotation:-12.1232,x:1034.149,y:623.4112,scaleX:1,scaleY:1}},{t:this.shape_91,p:{rotation:5.5623,x:1059.1088,y:795.4501,scaleX:1,scaleY:1}},{t:this.shape_90,p:{x:985.433,y:409.6097}},{t:this.shape_89,p:{x:1004.15,y:393.6842}},{t:this.shape_88,p:{x:967.2072,y:411.1671}},{t:this.shape_87,p:{scaleX:1,scaleY:1,rotation:0,x:962.775,y:912.7015}},{t:this.shape_86,p:{scaleX:1,scaleY:1,rotation:0,x:992.8093,y:960.725}},{t:this.shape_85,p:{scaleX:1,scaleY:1,rotation:0,x:971.7772,y:947.2687}},{t:this.shape_84,p:{scaleX:1,scaleY:1,rotation:0,x:988.9148,y:958.5687}},{t:this.shape_83,p:{scaleX:1,scaleY:1,rotation:0,x:997.1588,y:961.7885}},{t:this.shape_82,p:{regY:0,rotation:0,x:974.7421,y:629.7171,regX:0,scaleX:1,scaleY:1}},{t:this.shape_81,p:{scaleX:1,scaleY:1,rotation:0,x:971.6134,y:808.9114}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54,p:{rotation:-38.6229,x:1089.9061,y:518.6264,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_53,p:{rotation:-38.6229,x:1037.2386,y:469.8034,scaleX:0.9998,scaleY:0.9998}},{t:this.shape_52,p:{rotation:-22.9805,x:980.4095,y:382.5232,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.shape_102},{t:this.shape_101,p:{regX:0,regY:0,rotation:0,x:962.2312,y:272.162}},{t:this.shape_100,p:{scaleX:1,scaleY:1,rotation:0,x:1061.4055,y:562.5974}},{t:this.shape_99,p:{scaleX:1,scaleY:1,rotation:0,x:1027.7132,y:494.1913}},{t:this.shape_98,p:{scaleX:1,scaleY:1,rotation:0,x:988.4448,y:388.9385}},{t:this.shape_97,p:{scaleX:1,scaleY:1,rotation:0,x:1048.5546,y:908.3915}},{t:this.shape_96,p:{scaleX:1,scaleY:1,rotation:0,x:1090.1904,y:955.5}},{t:this.shape_95,p:{scaleX:1,scaleY:1,rotation:0,x:1066.094,y:939.6794}},{t:this.shape_94,p:{scaleX:1,scaleY:1,rotation:0,x:1084.7298,y:948.6638}},{t:this.shape_93,p:{scaleX:1,scaleY:1,rotation:0,x:1093.2905,y:950.075}},{t:this.shape_92,p:{rotation:0,x:1016.6793,y:627.4844,scaleX:1,scaleY:1}},{t:this.shape_91,p:{rotation:0,x:1030.6872,y:804.2236,scaleX:1,scaleY:1}},{t:this.shape_90,p:{x:988.183,y:409.0597}},{t:this.shape_89,p:{x:1006.9,y:393.1342}},{t:this.shape_88,p:{x:969.9572,y:410.6171}},{t:this.shape_87,p:{scaleX:1,scaleY:1,rotation:0,x:962.775,y:912.7015}},{t:this.shape_86,p:{scaleX:1,scaleY:1,rotation:0,x:992.8093,y:960.725}},{t:this.shape_85,p:{scaleX:1,scaleY:1,rotation:0,x:971.7772,y:947.2687}},{t:this.shape_84,p:{scaleX:1,scaleY:1,rotation:0,x:988.9148,y:958.5687}},{t:this.shape_83,p:{scaleX:1,scaleY:1,rotation:0,x:997.1588,y:961.7885}},{t:this.shape_82,p:{regY:0,rotation:0,x:974.7421,y:629.7171,regX:0,scaleX:1,scaleY:1}},{t:this.shape_81,p:{scaleX:1,scaleY:1,rotation:0,x:971.6134,y:808.9114}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54,p:{rotation:0,x:976.9087,y:561.6921,scaleX:1,scaleY:1}},{t:this.shape_53,p:{rotation:0,x:966.2337,y:490.6578,scaleX:1,scaleY:1}},{t:this.shape_52,p:{rotation:0,x:960.6539,y:386.0279,scaleX:1,scaleY:1}}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1697,642.5,-461.5,345);
// library properties:
lib.properties = {
	id: '664C27E62A4D5444945C4A48013F3A6B',
	width: 1920,
	height: 1080,
	fps: 21,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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
an.compositions['664C27E62A4D5444945C4A48013F3A6B'] = {
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;