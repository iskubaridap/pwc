/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         sym.setVariable("score",0);
         
         
         sym.childToParent = function()
         {
         	// This is only a container
         
         	/*
         		This function is just like a door from the Child
         		to the Parent. Make sure that the function name
         		is the same what you'll put in the parent.
         	*/
         }
         sym.gotoNextPage = function()
         {
         	// This is only a container
         
         	/*
         		This function is just like a door from the Child
         		to the Parent. Make sure that the function name
         		is the same what you'll put in the parent.
         	*/
         }
         sym.gotoPrevPage = function()
         {
         
         }
         /*
         	This resets the slide, but this function can also be
         	called by the parent.
         */
         sym.addScore = function(){}
         sym.addHalo = function(){}
         sym.subtractScore = function(){}
         
         sym.resetPage = function()
         {
         	sym.setVariable("score",0);
         }
         sym.stopAudio = function()
         {
         	var audio = sym.$("audio")[0];
         	audio.pause();
         	audio.currentTime = 0;
         }
         sym.showTranscript = function()
         {
         	sym.$("transcript").fadeIn();
         }
         
         sym.getSymbol("transcript").$("close").click(function(){
         	sym.$("transcript").fadeOut();
         });
         
         sym.replayAudio = function()
         {
         	var audio = sym.$("audio")[0];
         	audio.pause();
         	audio.currentTime = 0;
         	audio.play();
         }
         sym.pauseAndPlay = function()
         {
         	var audio = sym.$("audio")[0];
         	if (audio.paused)
         	{
         		audio.play();
         	}
         	else
         	{
         		audio.pause();
         	}
         }
         
         sym.setVariable('box1Show', false);
         sym.setVariable('box2Show', false);
         sym.setVariable('box3Show', false);
         sym.setVariable('box4Show', false);
         
         sym.showBoxMain = function()
         {
         	if(!sym.getVariable('box4Show')  && sym.getVariable('box3Show')){
         		sym.$('pg_3_r42').fadeIn();
         		sym.$('discover_4').hide();
         		sym.setVariable('box4Show', true);
         	}
         
         	if(!sym.getVariable('box3Show')  && sym.getVariable('box2Show')){
         		sym.$('pg_3_r32').fadeIn();
         		sym.$('discover_3').hide();
         		sym.setVariable('box3Show', true);
         	}
         
         	if(!sym.getVariable('box2Show') && sym.getVariable('box1Show')){
         		sym.$('pg_3_r22').fadeIn();
         		sym.$('discover_2').hide();
         		sym.setVariable('box2Show', true);
         	}
         
         	if(!sym.getVariable('box1Show')){
         		sym.$('pg_3_r12').fadeIn();
         		sym.setVariable('box1Show', true);
         	}
         }
         
         sym.showBox = function(btn){
         	sym.showBoxMain();
         	if(!sym.getVariable(btn)){
         		sym.setVariable(btn, true);
         
         		sym.addScore();
         		sym.addHalo();
         
         		/*var z = sym.getVariable('totalPoints');
         		var x = sym.getVariable('haloPoints');
         
         		if(sym.getVariable('hintClicked')){
         			sym.setVariable('totalPoints', z + 25);
         			sym.setVariable('haloPoints', x + 25);
         		}else{
         			sym.setVariable('totalPoints', z + 50);
         			sym.setVariable('haloPoints', x + 50);
         		}
         
         		sym.addPoints();*/
         	}
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${right_arrow3}", "click", function(sym, e) {
         // insert code for mouse click here
         
         sym.setVariable('box1Show', false);
         sym.setVariable('box2Show', false);
         sym.setVariable('box3Show', false);
         sym.setVariable('box4Show', false);
         
         sym.gotoNextPage();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${hint}", "click", function(sym, e) {
         sym.setVariable('box1ClickedLight', true);
         sym.setVariable('box2ClickedLight', true);
         sym.setVariable('box3ClickedLight', true);
         sym.setVariable('box4ClickedLight', true);
         
         sym.getSymbol('r_btn1').play('off');
         sym.getSymbol('r_btn2').play('off');
         sym.getSymbol('r_btn3').play('off');
         sym.getSymbol('r_btn1Copy3').play('off');
         
         sym.setVariable('hintClicked', true);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${r_btn4_overlay}", "click", function(sym, e) {
         // insert code for mouse click here
         
         sym.showBox('box4Clicked');
         sym.setVariable('box4ClickedLight', true);
         
         sym.$("r_btn4").show();
         sym.$("r_btn4_overlay").hide();
         
         
         // This make sure that the black background will appear once
         if(sym.$("black_bg").css("display") == "none")
         {
         	sym.$("black_bg").fadeIn();
         	sym.$("_1").fadeIn();
         	sym.$("_2").fadeIn();
         	sym.$("_3").fadeIn();
         	sym.$("_4").fadeIn();
         
         	sym.$("discover_2").fadeIn();
         	sym.$("discover_3").fadeIn();
         	sym.$("discover_4").fadeIn();
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${r_btn3_overlay}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.showBox('box3Clicked');
         sym.setVariable('box3ClickedLight', true);
         
         
         sym.$("r_btn3").show();
         sym.$("r_btn3_overlay").hide();
         
         // This make sure that the black background will appear once
         if(sym.$("black_bg").css("display") == "none")
         {
         	sym.$("black_bg").fadeIn();
         	sym.$("_1").fadeIn();
         	sym.$("_2").fadeIn();
         	sym.$("_3").fadeIn();
         	sym.$("_4").fadeIn();
         
         	sym.$("discover_2").fadeIn();
         	sym.$("discover_3").fadeIn();
         	sym.$("discover_4").fadeIn();
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${r_btn2_overlay}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.showBox('box2Clicked');
         sym.setVariable('box2ClickedLight', true);
         
         sym.$("r_btn2").show();
         sym.$("r_btn2_overlay").hide();
         
         // This make sure that the black background will appear once
         if(sym.$("black_bg").css("display") == "none")
         {
         	sym.$("black_bg").fadeIn();
         	sym.$("_1").fadeIn();
         	sym.$("_2").fadeIn();
         	sym.$("_3").fadeIn();
         	sym.$("_4").fadeIn();
         
         	sym.$("discover_2").fadeIn();
         	sym.$("discover_3").fadeIn();
         	sym.$("discover_4").fadeIn();
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${r_btn1_overlay}", "click", function(sym, e) {
         // insert code for mouse click here
         
         sym.showBox('box1Clicked');
         sym.setVariable('box1ClickedLight', true);
         
         
         sym.$("r_btn1").show();
         sym.$("r_btn1_overlay").hide();
         
         // This make sure that the black background will appear once
         if(sym.$("black_bg").css("display") == "none")
         {
         	sym.$("black_bg").fadeIn();
         	sym.$("_1").fadeIn();
         	sym.$("_2").fadeIn();
         	sym.$("_3").fadeIn();
         	sym.$("_4").fadeIn();
         
         	sym.$("discover_2").fadeIn();
         	sym.$("discover_3").fadeIn();
         	sym.$("discover_4").fadeIn();
         }
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();
         //sym.$("audio")[0].play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         sym.$("audio")[0].play();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'i-con-hint'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${i-icon}", "click", function(sym, e) {
         // insert code for mouse click here
         // insert code to be run when the mouse is moved off the object
         //sym.$("Text-hint").show();
         //sym.$("bg-blk").show();

      });
      //Edge binding end

   })("i-con-hint");
   //Edge symbol end:'i-con-hint'

   //=========================================================
   
   //Edge symbol: 'right_arrow'
   (function(symbolName) {   
   
   })("right_arrow");
   //Edge symbol end:'right_arrow'

   //=========================================================
   
   //Edge symbol: 'D1_03a-nda'
   (function(symbolName) {   
   
   })("D1_03a-nda");
   //Edge symbol end:'D1_03a-nda'

   //=========================================================
   
   //Edge symbol: 'red_cir_btn_3'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${red_cir_BtnCopy2}", "click", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.play('off');
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${white_cir_BtnCopy2}", "click", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         sym.play('on');
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();
         if(sym.getComposition().getStage().getVariable('box4ClickedLight'))
         	sym.play('off');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("red_cir_btn_3");
   //Edge symbol end:'red_cir_btn_3'

   //=========================================================
   
   //Edge symbol: 'red_cir_btn_2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${red_cir_BtnCopy}", "click", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.play('off');
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${white_cir_BtnCopy}", "click", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         sym.play('on');
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();
         if(sym.getComposition().getStage().getVariable('box3ClickedLight'))
         	sym.play('off');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("red_cir_btn_2");
   //Edge symbol end:'red_cir_btn_2'

   //=========================================================
   
   //Edge symbol: 'red_cir_btn_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${red_cir_Btn}", "click", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.play('off');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${white_cir_Btn}", "click", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         sym.play('on');
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();
         if(sym.getComposition().getStage().getVariable('box2ClickedLight'))
         	sym.play('off');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("red_cir_btn_1");
   //Edge symbol end:'red_cir_btn_1'

   //=========================================================
   
   //Edge symbol: 'red_cir_btn'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${red_cir_Btn}", "click", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.play('off');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${white_cir_Btn}", "click", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         sym.play('on');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();
         if(sym.getComposition().getStage().getVariable('box1ClickedLight'))
         	sym.play('off');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("red_cir_btn");
   //Edge symbol end:'red_cir_btn'

   //=========================================================
   
   //Edge symbol: 'border'
   (function(symbolName) {   
   
   })("border");
   //Edge symbol end:'border'

   //=========================================================
   
   //Edge symbol: 'transcript'
   (function(symbolName) {   
   
   })("transcript");
   //Edge symbol end:'transcript'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-9339288");