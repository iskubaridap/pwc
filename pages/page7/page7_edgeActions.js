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
         var audio1 = sym.$("audio")[0];
         var audio2 = sym.$("audio2")[0];
         var audio3 = sym.$("audio3")[0];
         
         sym.setVariable("audioPlaying",1);
         sym.setVariable("chartAswered",false);
         sym.setVariable("barAswered",false);
         
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
         sym.addJournal = function(){}
         sym.subtractScore = function(){}
         sym.disableAudio = function(){}
         sym.enableAudio = function(){}
         sym.addScoreHalo70 = function(){}
         
         sym.resetPage = function()
         {
         	sym.setVariable("audioPlaying",1);
         	sym.$("audio")[0].play();
         	sym.hideTranscript();
         	sym.play(1);
         
         	sym.setVariable("score",0);
         }
         /*
         $(audio1).bind("ended",function(){
         	var audio1 = sym.$("audio")[0];
         	audio1.pause();
         	audio1.currentTime = 0;
         	sym.setVariable("audioPlaying",2);
         
         	setTimeout(function(){
         		sym.$("audio2")[0].play();
         	}, 1000);
         });
         
         $(audio2).bind("ended",function(){
         	var audio2 = sym.$("audio2")[0];
         	audio2.pause();
         	audio2.currentTime = 0;
         	sym.setVariable("audioPlaying",3);
         
         	setTimeout(function(){
         		sym.$("audio3")[0].play();
         	}, 1000);
         });
         $(audio3).bind("ended",function(){
         	var audio3 = sym.$("audio3")[0];
         	audio3.pause();
         	audio3.currentTime = 0;
         
         	sym.$("arrow").fadeIn();
         });*/
         sym.stopAudio = function()
         {
         	if(sym.getVariable("audioPlaying") == 1)
         	{
         		var audio = sym.$("audio")[0];
         		audio.pause();
         		audio.currentTime = 0;
         	}
         	else if(sym.getVariable("audioPlaying") == 2)
         	{
         		var audio2 = sym.$("audio2")[0];
         		audio2.pause();
         		audio2.currentTime = 0;
         	}
         	else if(sym.getVariable("audioPlaying") == 3)
         	{
         		var audio3 = sym.$("audio3")[0];
         		audio3.pause();
         		audio3.currentTime = 0;
         	}
         }
         sym.showTranscript = function()
         {
         	if(sym.getVariable("audioPlaying") == 1)
         	{
         		sym.$("transcript").fadeIn();
         	}
         	else if(sym.getVariable("audioPlaying") == 2)
         	{
         		sym.$("transcript2").fadeIn();
         	}
         	else if(sym.getVariable("audioPlaying") == 3)
         	{
         		sym.$("transcript3").fadeIn();
         	}
         
         }
         sym.hideTranscript = function()
         {
         	sym.$("transcript").hide();
         	sym.$("transcript2").hide();
         	sym.$("transcript3").hide();
         }
         
         sym.getSymbol("transcript").$("close").click(function(){
         	sym.$("transcript").fadeOut();
         });
         sym.getSymbol("transcript2").$("close").click(function(){
         	sym.$("transcript2").fadeOut();
         });
         sym.getSymbol("transcript3").$("close").click(function(){
         	sym.$("transcript3").fadeOut();
         });
         
         sym.replayAudio = function()
         {
         	if(sym.getVariable("audioPlaying") == 1)
         	{
         		var audio = sym.$("audio")[0];
         		audio.pause();
         		audio.currentTime = 0;
         		audio.play();
         	}
         	else if(sym.getVariable("audioPlaying") == 2)
         	{
         		var audio2 = sym.$("audio2")[0];
         		audio2.pause();
         		audio2.currentTime = 0;
         		audio2.play();
         	}
         	else if(sym.getVariable("audioPlaying") == 3)
         	{
         		var audio3 = sym.$("audio3")[0];
         		audio3.pause();
         		audio3.currentTime = 0;
         		audio3.play();
         	}
         }
         sym.pauseAndPlay = function()
         {
         	if(sym.getVariable("audioPlaying") == 1)
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
         	else if(sym.getVariable("audioPlaying") == 2)
         	{
         		var audio2 = sym.$("audio2")[0];
         		if (audio2.paused)
         		{
         			audio2.play();
         		}
         		else
         		{
         			audio2.pause();
         		}
         	}
         	else if(sym.getVariable("audioPlaying") == 3)
         	{
         		var audio3 = sym.$("audio3")[0];
         		if (audio3.paused)
         		{
         			audio3.play();
         		}
         		else
         		{
         			audio3.pause();
         		}
         	}
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${left_arrow_wht}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.gotoPrevPage();
         sym.hideTranscript();
         sym.stopAudio();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${right_arrow}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.gotoNextPage();
         sym.hideTranscript();
         sym.stopAudio();
         sym.addScoreHalo70();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${continue-exit}", "click", function(sym, e) {
         sym.gotoNextPage();
         sym.hideTranscript();
         sym.stopAudio();
         sym.addScoreHalo70();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer-continue}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("bar");
         sym.hideTranscript();
         sym.stopAudio();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${see_the_difference-nda}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play('correct');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${correct-bar}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play('correct-bar');
         sym.disableAudio();
         
         if(!sym.getVariable("barAswered"))
         {
         	sym.addScore();
         	sym.addHalo();
         	sym.setVariable("barAswered",true);
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${correct_in_chart}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.stopAudio
         sym.play('correct1');
         sym.$("audio2")[0].play();
         sym.setVariable("audioPlaying",2);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${click_to_begin}", "click", function(sym, e) {
         //nda
         sym.stopAudio();
         sym.hideTranscript();
         sym.disableAudio();
         
         sym.$("laptop-close_2").fadeOut();
         sym.$("click_to_begin").fadeOut(function(){
         	sym.$("chart").fadeIn();
         	sym.$("laptop-close_2").fadeOut();
         	sym.play("zoom1");
         });
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         sym.$("audio")[0].play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.$("click_to_begin").show();
         sym.$("laptop-close_2").show();
         sym.resetPage();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 436, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 660000, function(sym, e) {
         // insert code here
         sym.stop();
         sym.$("audio2")[0].play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12324, function(sym, e) {
         // insert code here
         sym.stop();
         sym.enableAudio();
         sym.$('chart2').fadeOut(1000);
         sym.$('zero').fadeOut(1000);
         
         if(!sym.getVariable("chartAswered"))
         {
         	sym.addScore();
         	sym.addHalo();
         	sym.setVariable("chartAswered",true);
         }
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22300, function(sym, e) {
         // insert code here
         sym.play('correct');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23000, function(sym, e) {
         // insert code here
         sym.disableAudio();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23982, function(sym, e) {
         // insert code here
         sym.stop();
         sym.$("audio3")[0].play();
         sym.setVariable("audioPlaying",3);
         sym.enableAudio();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11006, function(sym, e) {
         // insert code here
         sym.stop();
         sym.enableAudio();
         sym.stopAudio();
         sym.$("audio2")[0].play();
         sym.setVariable("audioPlaying",2);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         // insert code here
         sym.disableAudio();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22916, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'click_messsage'
   (function(symbolName) {   
   
   })("click_messsage");
   //Edge symbol end:'click_messsage'

   //=========================================================
   
   //Edge symbol: 'right_arrow'
   (function(symbolName) {   
   
   })("right_arrow");
   //Edge symbol end:'right_arrow'

   //=========================================================
   
   //Edge symbol: 'whtBG'
   (function(symbolName) {   
   
   })("whtBG");
   //Edge symbol end:'whtBG'

   //=========================================================
   
   //Edge symbol: 'transcript'
   (function(symbolName) {   
   
   })("transcript");
   //Edge symbol end:'transcript'

   //=========================================================
   
   //Edge symbol: 'transcript_1'
   (function(symbolName) {   
   
   })("transcript_1");
   //Edge symbol end:'transcript_1'

   //=========================================================
   
   //Edge symbol: 'transcript_2'
   (function(symbolName) {   
   
   })("transcript_2");
   //Edge symbol end:'transcript_2'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-9339288");