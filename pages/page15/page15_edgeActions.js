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
         sym.addJournal = function(){}
         sym.addScore = function(){}
         sym.addHalo = function(){}
         sym.subtractScore = function(){}
         
         sym.resetPage = function()
         {
         	sym.setVariable("score",0);
         	sym.hideAllBox();
         }
         sym.stopAudio = function()
         {
         	/*var audio = sym.$("audio")[0];
         	audio.pause();
         	audio.currentTime = 0;*/
         }
         sym.showTranscript = function()
         {
         	//sym.$("transcript").fadeIn();
         }
         sym.hideTranscript = function()
         {
         	//sym.$("transcript").fadeOut();
         }
         /*
         sym.getSymbol("transcript").$("close").click(function(){
         	sym.$("transcript").fadeOut();
         });
         */
         sym.replayAudio = function()
         {
         	/*var audio = sym.$("audio")[0];
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
         
         var tapped = [false, false, false, false, false, false, false, false, false, false, false, false, false];
         var box = ["allDataBox","backdatedItemsBox","benfordsLawBox","createAndApproveBox","duplicatesAndReversalsBox","largeEntriesBox","largeItemsBox","postCloseEntriesBox","unexpectedAccountCombinationsBox","unexpectedUsersBox","unusualAmountsBox","unusualTimesBox","unusualWordsBox"];
         
         function checkScore(i){
         	if(!tapped[i]){
         		tapped[i] = true;
         
         		sym.addJournal();
         		sym.addScore();
         	}
         }
         
         sym.hideAllBox = function(){
         	sym.$('allDataBox').hide();
         	sym.$('backdatedItemsBox').hide();
         	sym.$('benfordsLawBox').hide();
         	sym.$('createAndApproveBox').hide();
         	sym.$('duplicatesAndReversalsBox').hide();
         	sym.$('largeEntriesBox').hide();
         	sym.$('largeItemsBox').hide();
         	sym.$('postCloseEntriesBox').hide();
         	sym.$('unexpectedAccountCombinationsBox').hide();
         	sym.$('unexpectedUsersBox').hide();
         	sym.$('unusualAmountsBox').hide();
         	sym.$('unusualTimesBox').hide();
         	sym.$('unusualWordsBox').hide();
         }
         
         sym.showTapped = function(i){
         	sym.hideAllBox();
         	checkScore(i);
         	sym.$(box[i]).show();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         //sym.$("audio")[0].play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${allData}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.showTapped(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${backdatedItems}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.showTapped(1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${benfordsLaw}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.showTapped(2);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${createAndApprove}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.showTapped(3);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${duplicatesAndReversals}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.showTapped(4);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${largeEntries}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.showTapped(5);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${largeItems}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.showTapped(6);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${postCloseEntries}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.showTapped(7);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${unexpectedAccountCombinations}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.showTapped(8);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${unexpectedUsers}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.showTapped(9);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${unusualAmounts}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.showTapped(10);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${unusualTimes}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.showTapped(11);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${unusualWords}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.showTapped(12);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${left_arrow}", "click", function(sym, e) {
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
   
   //Edge symbol: 'box'
   (function(symbolName) {   
   
   })("box");
   //Edge symbol end:'box'

   //=========================================================
   
   //Edge symbol: 'box_1'
   (function(symbolName) {   
   
   })("allDataBox");
   //Edge symbol end:'allDataBox'

   //=========================================================
   
   //Edge symbol: 'box_1'
   (function(symbolName) {   
   
   })("backdatedItemsBox");
   //Edge symbol end:'backdatedItemsBox'

   //=========================================================
   
   //Edge symbol: 'box_1'
   (function(symbolName) {   
   
   })("benfordsLawBox");
   //Edge symbol end:'benfordsLawBox'

   //=========================================================
   
   //Edge symbol: 'box_1'
   (function(symbolName) {   
   
   })("createAndApproveBox");
   //Edge symbol end:'createAndApproveBox'

   //=========================================================
   
   //Edge symbol: 'box_1'
   (function(symbolName) {   
   
      })("duplicatesAndReversalsBox");
   //Edge symbol end:'duplicatesAndReversalsBox'

   //=========================================================
   
   //Edge symbol: 'box_1'
   (function(symbolName) {   
   
      })("largeEntriesBox");
   //Edge symbol end:'largeEntriesBox'

   //=========================================================
   
   //Edge symbol: 'box_1'
   (function(symbolName) {   
   
      })("largeItemsBox");
   //Edge symbol end:'largeItemsBox'

   //=========================================================
   
   //Edge symbol: 'box_1'
   (function(symbolName) {   
   
      })("postCloseEntriesBox");
   //Edge symbol end:'postCloseEntriesBox'

   //=========================================================
   
   //Edge symbol: 'box_1'
   (function(symbolName) {   
   
      })("unexpectedAccountCombinationsBox");
   //Edge symbol end:'unexpectedAccountCombinationsBox'

   //=========================================================
   
   //Edge symbol: 'box_1'
   (function(symbolName) {   
   
      })("unexpectedUsersBox");
   //Edge symbol end:'unexpectedUsersBox'

   //=========================================================
   
   //Edge symbol: 'box_1'
   (function(symbolName) {   
   
      })("unusualAmountsBox");
   //Edge symbol end:'unusualAmountsBox'

   //=========================================================
   
   //Edge symbol: 'box_1'
   (function(symbolName) {   
   
      })("unusualWordsBox");
   //Edge symbol end:'unusualWordsBox'

   //=========================================================
   
   //Edge symbol: 'box_1'
   (function(symbolName) {   
   
      })("unusualTimesBox");
   //Edge symbol end:'unusualTimesBox'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-9339288");