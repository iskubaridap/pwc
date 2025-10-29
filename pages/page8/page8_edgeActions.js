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
         sym.resetPage = function()
         {
         	sym.setVariable("score",0);
         }
         sym.stopAudio = function()
         {
         	/*var audio = sym.$("audio")[0];
         	audio.pause();
         	audio.currentTime = 0;*/
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
         	/*(var audio = sym.$("audio")[0];
         	audio.pause();
         	audio.currentTime = 0;
         	audio.play();*/
         }
         sym.pauseAndPlay = function()
         {
         	/*var audio = sym.$("audio")[0];
         	if (audio.paused)
         	{
         		audio.play();
         	}
         	else
         	{
         		audio.pause();
         	}*/
         }
         sym.setVariable('clickedHalo', false);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${circle_btn_2}", "click", function(sym, e) {
         
         sym.setVariable('clickedHalo', true);
         sym.play('zoom_start');
         
         sym.stopAudio();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2004, function(sym, e) {
         // insert code here
         sym.stop();
         sym.setVariable('clickedHalo', false);
         sym.gotoNextPage();
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here//
         //sym.$("audio")[0].play();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'arm1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         sym.play('start');

      });
      //Edge binding end

   })("arm1");
   //Edge symbol end:'arm1'

   //=========================================================
   
   //Edge symbol: 'arm3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25000, function(sym, e) {
         // insert code here
         sym.play('start');

      });
      //Edge binding end

   })("arm3");
   //Edge symbol end:'arm3'

   //=========================================================
   
   //Edge symbol: 'circle_btn_2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Pasted2}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.stop('shrinkS');
         sym.play('shrinkS');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Pasted2}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.stop('shrinkE');
         sym.playReverse('shrinkE');
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 915, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         
         sym.stop();

      });
      //Edge binding end

   })("circle_btn_2");
   //Edge symbol end:'circle_btn_2'

   //=========================================================
   
   //Edge symbol: 'arm2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         // insert code here
         sym.play('start');

      });
      //Edge binding end

   })("arm2");
   //Edge symbol end:'arm2'

   //=========================================================
   
   //Edge symbol: 'arm1_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.play('start');

      });
      //Edge binding end

   })("arm1_2");
   //Edge symbol end:'arm1_2'

   //=========================================================
   
   //Edge symbol: 'arm5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30000, function(sym, e) {
         // insert code here
         sym.play('start');

      });
      //Edge binding end

   })("arm5");
   //Edge symbol end:'arm5'

   //=========================================================
   
   //Edge symbol: 'arm4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         // insert code here
         sym.play('start');

      });
      //Edge binding end

   })("arm4");
   //Edge symbol end:'arm4'

   //=========================================================
   
   //Edge symbol: 'holder'
   (function(symbolName) {   
   
   })("holder");
   //Edge symbol end:'holder'

   //=========================================================
   
   //Edge symbol: 'lockpg2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${lock5}", "mouseover", function(sym, e) {
         sym.stop('roll');
         sym.play('roll');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lock5}", "mouseout", function(sym, e) {
         sym.stop('rollout');
         sym.playReverse('rollout');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop();

      });
      //Edge binding end

   })("lockpg2");
   //Edge symbol end:'lockpg2'

   //=========================================================
   
   //Edge symbol: 'transcript'
   (function(symbolName) {   
   
   })("transcript");
   //Edge symbol end:'transcript'

   //=========================================================
   
   //Edge symbol: 'lockpg2_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${lock5}", "mouseover", function(sym, e) {
         sym.stop('roll');
         sym.play('roll');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lock5}", "mouseout", function(sym, e) {
         sym.stop('rollout');
         sym.playReverse('rollout');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop();

      });
      //Edge binding end

   })("lockpg2_1");
   //Edge symbol end:'lockpg2_1'

   //=========================================================
   
   //Edge symbol: 'lockpg2_2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${lock5}", "mouseover", function(sym, e) {
         sym.stop('roll');
         sym.play('roll');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lock5}", "mouseout", function(sym, e) {
         sym.stop('rollout');
         sym.playReverse('rollout');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop();

      });
      //Edge binding end

   })("lockpg2_2");
   //Edge symbol end:'lockpg2_2'

   //=========================================================
   
   //Edge symbol: 'pg7_btn1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Pasted122}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.stop('roll');
         sym.play('roll');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Pasted122}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.stop('rollout');
         sym.playReverse('rollout');
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 398, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1429, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("pg7_btn1");
   //Edge symbol end:'pg7_btn1'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-9339288");