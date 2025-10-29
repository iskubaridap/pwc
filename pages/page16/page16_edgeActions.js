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
         var video1 = sym.$("video")[0];
         var gainPoints = false;
         
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
         sym.gotoPage10 = function(){}
         
         sym.resetPage = function()
         {
         	sym.setVariable("score",0);
         	sym.replayAudio();
         }
         sym.stopAudio = function()
         {
         	var audio = sym.$("video")[0];
         	audio.pause();
         	audio.currentTime = 0;
         }
         sym.showTranscript = function()
         {
         	sym.$("transcript").fadeIn();
         }
         sym.hideTranscript = function()
         {
         	sym.$("transcript").fadeOut();
         }
         
         sym.getSymbol("transcript").$("close").click(function(){
         	sym.$("transcript").fadeOut();
         });
         
         sym.replayAudio = function()
         {
         	var audio = sym.$("video")[0];
         	audio.pause();
         	audio.currentTime = 0;
         	audio.play();
         }
         sym.pauseAndPlay = function()
         {
         	var audio = sym.$("video")[0];
         	if (audio.paused)
         	{
         		audio.play();
         	}
         	else
         	{
         		audio.pause();
         	}
         }
         
         sym.callVideo = function(){
         	sym.$('snapshot').hide();
         	if(!gainPoints)
         	{
         		//sym.addScore();
         		gainPoints = true;
         	}
         
         	video1.play();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         sym.$("video")[0].play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${whitearrowleft2}", "click", function(sym, e) {
         sym.stop(2000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${whitearrowleft2Copy}", "click", function(sym, e) {
         // insert code here
         sym.stop();
         sym.stopAudio();
         sym.gotoPage10();
         sym.hideTranscript();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${whitearrowleft2Copy2}", "click", function(sym, e) {
         // insert code here
         sym.stop();
         sym.stopAudio();
         sym.gotoPage10();
         sym.hideTranscript();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${whitearrowright3}", "click", function(sym, e) {
         sym.play('fade');
         sym.stopAudio();
         sym.gotoNextPage();
         sym.hideTranscript();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${whitearrowright3Copy}", "click", function(sym, e) {
         sym.play('fade');
         sym.stopAudio();
         sym.gotoNextPage();
         sym.hideTranscript();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${whitearrowright3Copy2}", "click", function(sym, e) {
         //sym.play('zoom');
         sym.stopAudio();
         sym.gotoNextPage();
         sym.hideTranscript();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();
         sym.$('snapshot').show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         sym.$('snapshot').show();
         sym.stopAudio();
         sym.gotoNextPage();
         sym.hideTranscript();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1999, function(sym, e) {
         // insert code here
         sym.stop();
         sym.callVideo();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // insert code here
         sym.stop(0);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'transcript'
   (function(symbolName) {   
   
   })("transcript");
   //Edge symbol end:'transcript'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-9339288");