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
         
         var badgeIndex = 0;
         
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
         sym.courseFinish = function(){}
         
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
         sym.hideTranscript = function()
         {
         	sym.$("transcript").fadeOut();
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
         
         sym.setVariable("userReachedLastSlide",false);
         sym.setVariable("haloPoints",0);
         sym.setVariable("journalPoints",0);
         sym.setVariable("totalPoints",0);
         
         
         
         function hideAllMedal(){
         	sym.$('bronze').hide();
         	sym.$('silver').hide();
         	sym.$('gold').hide();
         	sym.$('nobadge').hide();
         }
         
         sym.checkScore = function(){
         
         	var z = sym.getVariable('totalPoints');
         	var medal = "";
         	var failedOnce = true;
         	var badgeFailedOnce = true;
         
         	sym.$('halo-score').text(sym.getVariable('haloPoints') + ' points out of 620 points');
         	sym.$('journal-score').text(sym.getVariable('journalPoints') + ' points out of 450 points');
         
         	if(z >= 1070)
         	{
         		z = 1070;
         	}
         
         	hideAllMedal();
         
         	/*
         		Total Points Possible = 1070
         		Red range (no badge earned) 		= 0 to 685  / 63% max
         		Bronze Badge							= 685 to 855 / 64% to 80%
         		Silver Badge							= 856 to 1039 / 81% to 96%
         		Gold Badge								= 1040 to 1070 / 97%+
         	*/
         	if(z >= 1040 && z <= 1070)
         	{
         		medal = "Gold";
         		sym.$('gold').show();
         		sym.$("close_text").show();
         	}
         	else if(z >= 856 && z <= 1039)
         	{
         		medal = "Silver";
         		sym.$('silver').show();
         		sym.$("close_text").show();
         	}
         	else if(z >= 685 && z <= 855)
         	{
         		medal = "Bronze";
         		sym.$('bronze').show();
         		sym.$("close_text").show();
         	}
         	else if(z <= 684)
         	{
         		medal = "None";
         		sym.$('nobadge').show();
         		sym.$("close_text").hide();
         	}
         
         	if(medal != "None")
         	{
         		sym.courseFinish();
         		//Finish();
               //SetSCOComplete();
         	}
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         sym.$("audio")[0].play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${left_arrow_Red2}", "click", function(sym, e) {
         sym.gotoPrevPage();
         sym.hideTranscript();
         sym.stopAudio();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'transcript'
   (function(symbolName) {   
   
   })("transcript");
   //Edge symbol end:'transcript'

   //=========================================================
   
   //Edge symbol: 'whtBG'
   (function(symbolName) {   
   
   })("whtBG");
   //Edge symbol end:'whtBG'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-9339288");