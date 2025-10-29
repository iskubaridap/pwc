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
         sym.gotoPage8 = function(){}
         /*
         	This resets the slide, but this function can also be
         	called by the parent.
         */
         sym.addScore = function(){}
         sym.addHalo = function(){}
         sym.subtractScore = function(){}
         sym.restoreScore = function(){}
         sym.restoreHalo = function(){}
         
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
         
         var pair = null;
         var userClicked = null;
         var correct = 0;
         var wrong = 0;
         var score = 50;
         
         sym.setVariable("totalPoints",0);
         sym.setVariable("haloPoints",0);
         
         sym.setVariable("earnPoints",0);
         sym.setVariable("earnHalo",0);
         
         sym.setVariable("draggedBoxesScoreTotal",0);
         
         sym.setVariable('draggedBox1', false);
         sym.setVariable('draggedBox2', false);
         sym.setVariable('draggedBox3', false);
         
         sym.setVariable('draggedBox1Score', 0);
         sym.setVariable('draggedBox2Score', 0);
         sym.setVariable('draggedBox3Score', 0);
         
         sym.$("drop13").hide();
         sym.$("drop22").hide();
         sym.$("drop32").hide();
         
         sym.$("correctTxt").hide();
         
         sym.setDefault = function()
         {
         	var draggedBox1Score = sym.getVariable('draggedBox1Score');
         	var draggedBox2Score = sym.getVariable('draggedBox2Score');
         	var draggedBox3Score = sym.getVariable('draggedBox3Score');
         	var draggedBoxesScoreTotal = draggedBox1Score + draggedBox2Score + draggedBox3Score;
         
         	correct = 0;
         	wrong = 0;
         	score = 50;
         
         	sym.$("drop13").hide();
         	sym.$("drop22").hide();
         	sym.$("drop32").hide();
         
         	sym.$("correctTxt").hide();
         
         	sym.$("drop1").show();
         	sym.$("drop2").show();
         	sym.$("drop3").show();
         
         	sym.$("drop1").css({opacity:0});
         	sym.$("drop2").css({opacity:0});
         	sym.$("drop3").css({opacity:0});
         
         	sym.$("drag2").css({left:0,top:0,position:"absolute",zIndex:2}).show();
         	sym.$("drag3").css({left:0,top:0,position:"absolute",zIndex:2}).show();
         	sym.$("drag1").css({left:0,top:0,position:"absolute",zIndex:2}).show();
         
         	sym.setVariable("draggedBoxesScoreTotal",draggedBoxesScoreTotal);
         	
         	sym.restoreScore();
         	sym.restoreHalo();
         
         	sym.setVariable("draggedBox1",false);
         	sym.setVariable("draggedBox2",false);
         	sym.setVariable("draggedBox3",false);
         
         	sym.setVariable('draggedBox1Score', 0);
         	sym.setVariable('draggedBox2Score', 0);
         	sym.setVariable('draggedBox3Score', 0);
         }
         var animatePair = function(objToAnimate,pairObj,extra,leftArea,topArea)
         {
         	sym.$(objToAnimate).animate({left:leftArea,top:topArea},"slow",function(){
         		sym.$(this).fadeOut();
         		sym.$(pairObj).delay(500).animate({opacity:1},"slow",function(){
         			sym.$(this).hide();
         			sym.$(extra).show();
         		});
         	});
         }
         
         var checkPair = function(p,u)
         {
         	if(userClicked == null && pair == null)
         	{
         		userClicked = u;
         		pair = p;
         		return false;
         	}
         
         	if(userClicked == u)
         	{
         		return false;
         	}
         	else
         	{
         		userClicked = null;
         
         		if(pair == p)
         		{
         			pair = null;
         			if(correct < 2)
         			{
         				correct += 1;
         			}
         			else
         			{
         				sym.$("correctTxt").delay(1500).fadeIn();
         				correct = 0;
         			}
         			return true;
         		}
         		else
         		{
         			sym.$("wrong").show();
         			sym.$("wrong").delay(2000).fadeOut();
         			pair = null;
         			wrong++;
         
         			return false;
         		}
         	}
         }
         
         var addScore = function(objectScore)
         {
         
         	if(wrong == 0)
         	{
         		score = 50;
         	}
         	else if(wrong == 1)
         	{
         		score = 25;
         	}
         	else
         	{
         		score = 0;
         	}
         
         	sym.setVariable(objectScore, score);
         
         	sym.setVariable("earnPoints",score);
         	sym.setVariable("earnHalo",score);
         
         	sym.addScore();
         	sym.addHalo();
         
         	score = 50;
         	wrong = 0;
         }
         
         sym.$("drop1").click(function(){
         
         	if(checkPair("pair1","drop1"))
         	{
         		animatePair("drag1","drop1","drop13","-1010px","-285px");
         
         		if(!sym.getVariable("draggedBox1"))
         		{
         			addScore("draggedBox1Score");
         		}
         
         		sym.setVariable("draggedBox1",true);
         	}
         });
         sym.$("drag1").click(function(){
         
         	if(checkPair("pair1","drag1"))
         	{
         		animatePair("drag1","drop1","drop13","-1010px","-285px");
         
         		if(!sym.getVariable("draggedBox1"))
         		{
         			addScore("draggedBox1Score");
         		}
         
         		sym.setVariable("draggedBox1",true);
         	}
         });
         
         sym.$("drop2").click(function(){
         
         	if(checkPair("pair2","drop2"))
         	{
         		animatePair("drag2","drop2","drop22","550px","-285px");
         
         		if(!sym.getVariable("draggedBox2"))
         		{
         			addScore("draggedBox2Score");
         		}
         
         		sym.setVariable("draggedBox2",true);
         	}
         });
         sym.$("drag2").click(function(){
         
         	if(checkPair("pair2","drag2"))
         	{
         		animatePair("drag2","drop2","drop22","550px","-285px");
         
         		if(!sym.getVariable("draggedBox2"))
         		{
         			addScore("draggedBox2Score");
         		}
         
         		sym.setVariable("draggedBox2",true);
         	}
         });
         
         sym.$("drop3").click(function(){
         
         	if(checkPair("pair3","drop3"))
         	{
         		animatePair("drag3","drop3","drop32","550px","-285px");
         
         		if(!sym.getVariable("draggedBox3"))
         		{
         			addScore("draggedBox3Score");
         		}
         
         		sym.setVariable("draggedBox3",true);
         	}
         });
         sym.$("drag3").click(function(){
         
         	if(checkPair("pair3","drag3"))
         	{
         		animatePair("drag3","drop3","drop32","550px","-285px");
         
         		if(!sym.getVariable("draggedBox3"))
         		{
         			addScore("draggedBox3Score");
         		}
         
         		sym.setVariable("draggedBox3",true);
         	}
         });
         sym.$("resetScoreBtn").click(function(){
         	sym.setDefault();
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${redarrowLeft3}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.gotoPrevPage();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${redarrowright3}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.gotoPage8();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${halo-bonus}", "click", function(sym, e) {
         sym.gotoNextPage();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

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
   
   //Edge symbol: 'left_arrow'
   (function(symbolName) {   
   
   })("left_arrow");
   //Edge symbol end:'left_arrow'

   //=========================================================
   
   //Edge symbol: 'right_arrow'
   (function(symbolName) {   
   
   })("right_arrow");
   //Edge symbol end:'right_arrow'

   //=========================================================
   
   //Edge symbol: 'drop3'
   (function(symbolName) {   
   
   })("drop3");
   //Edge symbol end:'drop3'

   //=========================================================
   
   //Edge symbol: 'drop2'
   (function(symbolName) {   
   
   })("drop2");
   //Edge symbol end:'drop2'

   //=========================================================
   
   //Edge symbol: 'drop1'
   (function(symbolName) {   
   
   })("drop1");
   //Edge symbol end:'drop1'

   //=========================================================
   
   //Edge symbol: 'drag3'
   (function(symbolName) {   
   
   })("drag3");
   //Edge symbol end:'drag3'

   //=========================================================
   
   //Edge symbol: 'drag2'
   (function(symbolName) {   
   
   })("drag2");
   //Edge symbol end:'drag2'

   //=========================================================
   
   //Edge symbol: 'resetScoreBtn'
   (function(symbolName) {   
   
   })("resetScoreBtn");
   //Edge symbol end:'resetScoreBtn'

   //=========================================================
   
   //Edge symbol: 'drag1'
   (function(symbolName) {   
   
   })("drag1");
   //Edge symbol end:'drag1'

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