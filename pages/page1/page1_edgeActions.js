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
         
         }
         sym.closePage = function()
         {
         
         }
         sym.closePageHelp = function()
         {
         
         }
         sym.showTranscript = function()
         {
         
         }
         /*
         sym.getSymbol("transcript").$("close").click(function(){
         	sym.$("transcript").fadeOut();
         });
         */
         sym.replayAudio = function()
         {
         
         }
         sym.pauseAndPlay = function()
         {
         
         }
         
         sym.dimIcons = function()
         {
         	sym.$('arrowup2-pngCopy4').css("opacity","0.5");
         	sym.$('arrowup2-png').css("opacity","0.5");
         	sym.$('arrowup2-pngCopy2').css("opacity","0.5");
         	sym.$('arrowup2-pngCopy').css("opacity","0.5");
         	sym.$('arrowup2-pngCopy3').css("opacity","0.5");
         
         	sym.$('navicon').css("opacity","0.5");
         	sym.$('navarrows').css("opacity","0.5");
         	sym.$('bonusicon').css("opacity","0.5");
         	sym.$('linkicons').css("opacity","0.5");
         	sym.$('medalsicon').css("opacity","0.5");
         	sym.$('badgeicons').css("opacity","0.5");
         }
         sym.lightIcons = function()
         {
         	sym.$('arrowup2-pngCopy4').css("opacity","1");
         	sym.$('arrowup2-png').css("opacity","1");
         	sym.$('arrowup2-pngCopy2').css("opacity","1");
         	sym.$('arrowup2-pngCopy').css("opacity","1");
         	sym.$('arrowup2-pngCopy3').css("opacity","1");
         
         	sym.$('navicon').css("opacity","1");
         	sym.$('navarrows').css("opacity","1");
         	sym.$('bonusicon').css("opacity","1");
         	sym.$('linkicons').css("opacity","1");
         	sym.$('medalsicon').css("opacity","1");
         	sym.$('badgeicons').css("opacity","1");
         }
         
         sym.hideAllInfo = function(){
         	sym.$('volume-info').hide();
         	sym.$('points-info').hide();
         	sym.$('leader-info').hide();
         	sym.$('personal-info').hide();
         	sym.$('course-info').hide();
         	sym.$('badges-info').hide();
         	sym.$('medals-info').hide();
         	sym.$('links-info').hide();
         	sym.$('bonus-info').hide();
         	sym.$('arrow-info').hide();
         	sym.$('nav-info').hide();
         
         	sym.$('red1').hide();
         	sym.$('red2').hide();
         	sym.$('red3').hide();
         	sym.$('red4').hide();
         	sym.$('red5').hide();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${medalsicon}", "click", function(sym, e) {
         sym.hideAllInfo();
         sym.$('medals-info').show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${medalsicon}", "mouseover", function(sym, e) {
         sym.$('medals-info').show();
         sym.$("border-line-2").show();
         sym.getComposition().getStage().dimIcons();
         sym.$("medalsicon").css("opacity","1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${medalsicon}", "mouseout", function(sym, e) {
         sym.hideAllInfo();
         sym.$("border-line-2").hide();
         sym.getComposition().getStage().lightIcons();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${volume-info}", "mouseover", function(sym, e) {
         
         sym.$('volume-info').show();
         sym.$('red4').show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${volume-info}", "mouseout", function(sym, e) {
         sym.hideAllInfo();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${points-info}", "mouseover", function(sym, e) {
         
         sym.$('points-info').show();
         sym.$('red1').show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${points-info}", "mouseout", function(sym, e) {
         sym.hideAllInfo();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${personal-info}", "mouseover", function(sym, e) {
         
         sym.$('personal-info').show();
         sym.$('red3').show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${personal-info}", "mouseout", function(sym, e) {
         sym.hideAllInfo();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${course-info}", "mouseover", function(sym, e) {
         sym.$('course-info').show();
         sym.$('red5').show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${course-info}", "mouseout", function(sym, e) {
         sym.hideAllInfo();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${closebutton2}", "click", function(sym, e) {
         // insert code for mouse click here
         
         sym.closePage();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${i-icon}", "click", function(sym, e) {
         // insert code for mouse click here
         //sym.hideAllInfo();
         //sym.$('i-icon-text').show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${i-icon}", "mouseover", function(sym, e) {
         // insert code for mouse click here
         sym.hideAllInfo();
         sym.$('i-icon-text').show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${i-icon}", "mouseout", function(sym, e) {
         // insert code for mouse click here
         sym.hideAllInfo();
         sym.$('i-icon-text').hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bonusicon}", "click", function(sym, e) {
         sym.hideAllInfo();
         sym.$('bonus-info').show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bonusicon}", "mouseover", function(sym, e) {
         sym.$('bonus-info').show();
         sym.$("border-line").show();
         sym.getComposition().getStage().dimIcons();
         sym.$("bonusicon").css("opacity","1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bonusicon}", "mouseout", function(sym, e) {
         sym.hideAllInfo();
         sym.$("border-line").fadeOut();
         sym.getComposition().getStage().lightIcons();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${linkicons}", "click", function(sym, e) {
         sym.hideAllInfo();
         sym.$('links-info').show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${linkicons}", "mouseover", function(sym, e) {
         sym.$('links-info').show();
         sym.$("border-line-2").show();
         sym.getComposition().getStage().dimIcons();
         sym.$("linkicons").css("opacity","1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${linkicons}", "mouseout", function(sym, e) {
         sym.hideAllInfo();
         sym.$("border-line-2").hide();
         sym.getComposition().getStage().lightIcons();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${navarrows}", "click", function(sym, e) {
         sym.hideAllInfo();
         sym.$('arrow-info').show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${navarrows}", "mouseover", function(sym, e) {
         sym.$('arrow-info').show();
         sym.$("border-line").show();
         sym.getComposition().getStage().dimIcons();
         sym.$("navarrows").css("opacity","1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${navarrows}", "mouseout", function(sym, e) {
         sym.hideAllInfo();
         sym.$("border-line").hide();
         sym.getComposition().getStage().lightIcons();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${navicon}", "click", function(sym, e) {
         sym.hideAllInfo();
         sym.$('nav-info').show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${navicon}", "mouseover", function(sym, e) {
         sym.$('nav-info').show();
         sym.$("border-line").show();
         sym.dimIcons();
         sym.$("navicon").css("opacity","1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${navicon}", "mouseout", function(sym, e) {
         sym.hideAllInfo();
         sym.$("border-line").hide();
         sym.lightIcons();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${red5}", "mouseover", function(sym, e) {
         sym.$('course-info').show();
         sym.$('red5').show();
         
         sym.getComposition().getStage().dimIcons();
         sym.$("arrowup2-pngCopy3").css("opacity","1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${red5}", "mouseout", function(sym, e) {
         sym.hideAllInfo();
         
         sym.getComposition().getStage().lightIcons();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${red4}", "mouseover", function(sym, e) {
         sym.$('volume-info').show();
         sym.$('red4').show();
         
         sym.getComposition().getStage().dimIcons();
         sym.$("arrowup2-pngCopy").css("opacity","1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${red4}", "mouseout", function(sym, e) {
         sym.hideAllInfo();
         sym.getComposition().getStage().lightIcons();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${red1}", "mouseover", function(sym, e) {
         sym.$('points-info').show();
         sym.$('red1').show();
         
         sym.getComposition().getStage().dimIcons();
         sym.$("arrowup2-pngCopy4").css("opacity","1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${red1}", "mouseout", function(sym, e) {
         sym.hideAllInfo();
         sym.getComposition().getStage().lightIcons();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${arrowup2-png}", "click", function(sym, e) {
         sym.hideAllInfo();
         sym.$('points-info').show();
         sym.$('red1').show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${arrowup2-png}", "mouseover", function(sym, e) {
         sym.$('points-info').show();
         sym.$('red1').show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${arrowup2-png}", "mouseout", function(sym, e) {
         sym.hideAllInfo();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${arrowup2-pngCopy}", "click", function(sym, e) {
         sym.hideAllInfo();
         sym.$('course-info').show();
         
         sym.$('red5').show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${arrowup2-pngCopy}", "mouseover", function(sym, e) {
         sym.$('course-info').show();
         sym.$('red5').show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${arrowup2-pngCopy}", "mouseout", function(sym, e) {
         sym.hideAllInfo();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${arrowup2-pngCopy2}", "click", function(sym, e) {
         sym.hideAllInfo();
         sym.$('volume-info').show();
         sym.$('red4').show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${arrowup2-pngCopy2}", "mouseover", function(sym, e) {
         sym.$('volume-info').show();
         sym.$('red4').show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${arrowup2-pngCopy2}", "mouseout", function(sym, e) {
         sym.hideAllInfo();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'medalsicon'
   (function(symbolName) {   
   
   })("medalsicon");
   //Edge symbol end:'medalsicon'

   //=========================================================
   
   //Edge symbol: 'volume-info'
   (function(symbolName) {   
   
   })("volume-info");
   //Edge symbol end:'volume-info'

   //=========================================================
   
   //Edge symbol: 'points-info'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${title}", "focus", function(sym, e) {
         

      });
      //Edge binding end

   })("points-info");
   //Edge symbol end:'points-info'

   //=========================================================
   
   //Edge symbol: 'personal-info'
   (function(symbolName) {   
   
   })("personal-info");
   //Edge symbol end:'personal-info'

   //=========================================================
   
   //Edge symbol: 'course-info'
   (function(symbolName) {   
   
   })("course-info");
   //Edge symbol end:'course-info'

   //=========================================================
   
   //Edge symbol: 'badges-info'
   (function(symbolName) {   
   
   })("badges-info");
   //Edge symbol end:'badges-info'

   //=========================================================
   
   //Edge symbol: 'medals-info'
   (function(symbolName) {   
   
   })("medals-info");
   //Edge symbol end:'medals-info'

   //=========================================================
   
   //Edge symbol: 'links-info'
   (function(symbolName) {   
   
   })("links-info");
   //Edge symbol end:'links-info'

   //=========================================================
   
   //Edge symbol: 'bonus-info'
   (function(symbolName) {   
   
   })("bonus-info");
   //Edge symbol end:'bonus-info'

   //=========================================================
   
   //Edge symbol: 'arrow-info'
   (function(symbolName) {   
   
   })("arrow-info");
   //Edge symbol end:'arrow-info'

   //=========================================================
   
   //Edge symbol: 'nav-info'
   (function(symbolName) {   
   
   })("nav-info");
   //Edge symbol end:'nav-info'

   //=========================================================
   
   //Edge symbol: 'bonusicon'
   (function(symbolName) {   
   
   })("bonusicon");
   //Edge symbol end:'bonusicon'

   //=========================================================
   
   //Edge symbol: 'linkicons'
   (function(symbolName) {   
   
   })("linkicons");
   //Edge symbol end:'linkicons'

   //=========================================================
   
   //Edge symbol: 'navarrows'
   (function(symbolName) {   
   
   })("navarrows");
   //Edge symbol end:'navarrows'

   //=========================================================
   
   //Edge symbol: 'navicon'
   (function(symbolName) {   
   
   })("navicon");
   //Edge symbol end:'navicon'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-9339288");