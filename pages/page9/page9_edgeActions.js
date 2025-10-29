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
         sym.addJournal = function(){}
         sym.subtractScore = function(){}
         sym.changeHeader = function(){}
         sym.changeHeaderBack = function(){}
         
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
         
         sym.setVariable('white1', false);
         sym.setVariable('white2', false);
         sym.setVariable('white3', false);
         sym.setVariable('white4', false);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${start_button}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.stop();
         sym.play('zoom');
         sym.stopAudio();
         sym.hideTranscript();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${left_arrow_red}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getComposition().getStage().getSymbol('header').$('header-title').text('Halo for Journals: Dashboard');
         sym.stop();
         //sym.playReverse();
         
         sym.getComposition().getStage().getSymbol("page8").$("arrowmovedown").fadeOut();
         sym.getComposition().getStage().getSymbol("page8").$("arrowmoveright").fadeOut();
         sym.getComposition().getStage().getSymbol("page8").$("Chart_newD1_09").fadeOut("slow",function()
         {
         	sym.getComposition().getStage().getSymbol("page8").$("page8first").show();
         	sym.stop('zoomed');
         })
         
         sym.getComposition().getStage().hideAllTranscript();
         sym.getComposition().getStage().pauseAllAudio();
         sym.getComposition().getStage().setVariable('multiAudioNum', 1);
         sym.getComposition().getStage().setVariable('multiAudio', false);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${left_arrow_redCopy}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.stop();
         sym.playReverse();
         sym.stopAudio();
         sym.hideTranscript();
         sym.changeHeaderBack();
         
         sym.getSymbol("page8first").$("info-icon2").hide();
         sym.getSymbol("page8first").$("info-icon_2").hide();
         sym.getSymbol("page8first").$("click_the").hide();
         ///
         sym.$("whtBG").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${left_arrow_wht}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.stop();
         sym.gotoPrevPage();
         sym.stopAudio();
         sym.hideTranscript();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${right_arrow_red2}", "click", function(sym, e) {
         // insert code for mouse click here
         
         
         sym.setVariable('goTo', 10);
         sym.play('fade');
         sym.getComposition().getStage().$("page10").show();
         sym.getComposition().getStage().getSymbol("page10").play(2);
         // Change the text in an element
         
         sym.getComposition().getStage().getSymbol("audio-controls").$("Text2").css('color','#AD2B2E');
         sym.getComposition().getStage().getSymbol("audio-controls").$("Text2").css('cursor','pointer');
         sym.getComposition().getStage().getSymbol("audio-controls").$("Text3").css('color','#AD2B2E');
         sym.getComposition().getStage().getSymbol("audio-controls").$("Text3").css('cursor','pointer');
         sym.getComposition().getStage().getSymbol("audio-controls").$("Text").css('color','#AD2B2E');
         sym.getComposition().getStage().getSymbol("audio-controls").$("Text").css('cursor','pointer');
         
         sym.getComposition().getStage().setVariable('multiAudioNum', 0);
         sym.getComposition().getStage().hideAllTranscript();
         sym.getComposition().getStage().pauseAllAudio();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${right_arrow_red}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.gotoNextPage();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${right_arrow_wht}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.stop();
         sym.play('zoom');
         sym.stopAudio();
         sym.hideTranscript();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${halo-bonus2}", "click", function(sym, e) {
         sym.setVariable('goTo', 9);
         sym.play('fade');
         sym.getComposition().getStage().$("page9").show();
         
         sym.getComposition().getStage().getSymbol("audio-controls").$("Text2").css('color','#ccc');
         sym.getComposition().getStage().getSymbol("audio-controls").$("Text2").css('cursor','default');
         sym.getComposition().getStage().getSymbol("audio-controls").$("Text3").css('color','#ccc');
         sym.getComposition().getStage().getSymbol("audio-controls").$("Text3").css('cursor','default');
         sym.getComposition().getStage().getSymbol("audio-controls").$("Text").css('color','#ccc');
         sym.getComposition().getStage().getSymbol("audio-controls").$("Text").css('cursor','default');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         sym.getSymbol('page8first').hideAllEl();
         
         sym.hideTranscript();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         sym.stop();
         sym.getSymbol('page8first').showWhite();
         sym.stopAudio();
         
         sym.$("whtBG").show();
         sym.changeHeader();

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
   
   //Edge symbol: 'page8first'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${white1}", "click", function(sym, e) {
         sym.hidePops();
         sym.$('text1').show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${white2}", "click", function(sym, e) {
         sym.hidePops();
         sym.$('text2').show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${white3}", "click", function(sym, e) {
         sym.hidePops();
         sym.$('text3').show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${white4}", "click", function(sym, e) {
         sym.hidePops();
         //sym.$('text4').show();
         
         sym.$('redrec').show();
         	sym.$('text4').show();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.hidePops = function(){
         	sym.$('text1').hide();
         	sym.$('text2').hide();
         	sym.$('text3').hide();
         	sym.$('text4').hide();
         	sym.$('redrec').hide();
         }
         
         sym.hideAllEl = function(){
         	sym.$('text1').hide();
         	sym.$('text2').hide();
         	sym.$('text3').hide();
         	sym.$('text4').hide();
         	sym.$('redrec').hide();
         
         	sym.$('black1').hide();
         	sym.$('black2').hide();
         	sym.$('black3').hide();
         	sym.$('black4').hide();
         
         	sym.$('white1').hide();
         	sym.$('white2').hide();
         	sym.$('white3').hide();
         	sym.$('white4').hide();
         	sym.$('instruction').hide();
         }
         
         sym.showWhite = function(){
         	//sym.$('info-icon_2').show();
         
         	sym.$("info-icon2").show();
         	sym.$("click_the").show();
         
         	if(!sym.getComposition().getStage().getVariable('white1'))
         		sym.$('black1').show();
         	else
         		sym.$('white1').show();
         
         	if(!sym.getComposition().getStage().getVariable('white2'))
         		sym.$('black2').show();
         	else
         		sym.$('white2').show();
         
         	if(!sym.getComposition().getStage().getVariable('white3'))
         		sym.$('black3').show();
         	else
         		sym.$('white3').show();
         
         	if(!sym.getComposition().getStage().getVariable('white4'))
         		sym.$('black4').show();
         	else
         		sym.$('white4').show();
         }
         
         sym.$('redrec').hide();
         sym.$("info-icon_2").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${black1}", "click", function(sym, e) {
         sym.$('white1').show();
         sym.$('black1').hide();
         sym.hidePops();
         sym.$('text1').show();
         
         sym.getComposition().getStage().setVariable('white1', true);
         
         sym.getComposition().getStage().addScore();
         sym.getComposition().getStage().addJournal();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${black2}", "click", function(sym, e) {
         
         if(sym.getComposition().getStage().getVariable('white1')){
         	sym.$('white2').show();
         	sym.$('black2').hide();
         	sym.hidePops();
         	sym.$('text2').show();
         
         	sym.getComposition().getStage().setVariable('white2', true);
         
         	sym.getComposition().getStage().addScore();
         	sym.getComposition().getStage().addJournal();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${black3}", "click", function(sym, e) {
         
         if(sym.getComposition().getStage().getVariable('white1') && sym.getComposition().getStage().getVariable('white2')){
         	sym.$('white3').show();
         	sym.$('black3').hide();
         	sym.hidePops();
         	sym.$('text3').show();
         
         	sym.getComposition().getStage().setVariable('white3', true);
         
         	sym.getComposition().getStage().addScore();
         	sym.getComposition().getStage().addJournal();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${black4}", "click", function(sym, e) {
         
         if(sym.getComposition().getStage().getVariable('white1') && sym.getComposition().getStage().getVariable('white2') && sym.getComposition().getStage().getVariable('white3')){
         	sym.$('white4').show();
         	sym.$('black4').hide();
         	sym.hidePops();
         	sym.$('text4').show();
         	sym.$('redrec').show();
         
         	sym.getComposition().getStage().setVariable('white4', true);
         
         	sym.getComposition().getStage().addScore();
         	sym.getComposition().getStage().addJournal();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("page8first");
   //Edge symbol end:'page8first'

   //=========================================================
   
   //Edge symbol: 'white1'
   (function(symbolName) {   
   
   })("white1");
   //Edge symbol end:'white1'

   //=========================================================
   
   //Edge symbol: 'Red-Circle-Outline'
   (function(symbolName) {   
   
   })("Red-Circle-Outline");
   //Edge symbol end:'Red-Circle-Outline'

   //=========================================================
   
   //Edge symbol: 'black3'
   (function(symbolName) {   
   
   })("black3");
   //Edge symbol end:'black3'

   //=========================================================
   
   //Edge symbol: 'white2'
   (function(symbolName) {   
   
   })("white2");
   //Edge symbol end:'white2'

   //=========================================================
   
   //Edge symbol: 'white3'
   (function(symbolName) {   
   
   })("white3");
   //Edge symbol end:'white3'

   //=========================================================
   
   //Edge symbol: 'black4'
   (function(symbolName) {   
   
   })("black4");
   //Edge symbol end:'black4'

   //=========================================================
   
   //Edge symbol: 'RedCircle'
   (function(symbolName) {   
   
   })("RedCircle");
   //Edge symbol end:'RedCircle'

   //=========================================================
   
   //Edge symbol: 'black1'
   (function(symbolName) {   
   
   })("black1");
   //Edge symbol end:'black1'

   //=========================================================
   
   //Edge symbol: 'black2'
   (function(symbolName) {   
   
   })("black2");
   //Edge symbol end:'black2'

   //=========================================================
   
   //Edge symbol: 'white4'
   (function(symbolName) {   
   
   })("white4");
   //Edge symbol end:'white4'

   //=========================================================
   
   //Edge symbol: 'arrowmoveright'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("arrowmoveright");
   //Edge symbol end:'arrowmoveright'

   //=========================================================
   
   //Edge symbol: 'arrowmovedown'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("arrowmovedown");
   //Edge symbol end:'arrowmovedown'

   //=========================================================
   
   //Edge symbol: 'blank-laptop'
   (function(symbolName) {   
   
   })("blank-laptop");
   //Edge symbol end:'blank-laptop'

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

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-9339288");