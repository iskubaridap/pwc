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

/* ================ Note for Developers ================ */
/*
	Custom Styles:
	There is a CSS file that is already prepared for any
	style that you would like to add. Located in css/custom.css

	Fonts:
	For any additional fonts that will be use for this project.
	Please put them inside of the fonts folder.

	Video/Audio:
	If there will be any video and audio that will be use. Please
	put them inside of the media folder.

	Javascripts:
	There are javascript libraries that are already available here to
	be use for this template.

		EdgeCommons
		We often use this for inserting or adding any external page.

		Popcorn

		Jquery
		We use jquery-2.1.3.min version for almost all slides but jquery-1.11.2.min
		version is also available there if is needed to be use.

	Slides/Pages
	For all slides or pages that need that is needed for this project.
	Please place them inside of the pages folder.

	Naming Convention:
	Buttons
		When naming a button, I would like to suggest to name the
		symbol with a "btn" on its first letters like "btnMyButton".
		In that why, it is easy to locate and understand in the
		Symbols panel what are buttons from the ordinary symbols.
		btnNxt and btnPrev are good example and already present to be use.
*/

/* ================ Setting Variables Section ================ */

// This defines the slides/pages
sym.setVariable('pages', ["page1","page2","page3","page4","page5","page6","page7","page8","page9","page10","page11","page12","page13","page14","page15","page16","page17","page18","page19","page20","page21","page22","page23","page24","page25","page26","page27","page28","page29","page30"]);
sym.setVariable('currentPage', 1);
sym.setVariable("score",0);
sym.setVariable("journals",0);
sym.setVariable("haloPoints",0);

// This represents the slides/pages when it's already present to be use.
var pg1 = null;
var pg2 = null;
var pg3 = null;
var pg4 = null;
var pg5 = null;
var pg6 = null;
var pg7 = null;
var pg8 = null;
var pg9 = null;
var pg10 = null;
var pg11 = null;
var pg12 = null;
var pg13 = null;
var pg14 = null;
var pg15 = null;
var pg16 = null;
var pg17 = null;
var pg18 = null;
var pg19 = null;
var pg20 = null;
var pg21 = null;
var pg22 = null;
var pg23 = null;
var pg24 = null;
var pg25 = null;
var pg26 = null;
var pg27 = null;
var pg28 = null;
var pg29 = null;
var pg30 = null;


var headerChanged = false;
var reachedLastPage = false;

// This is only a presenting a score from each slide. 
sym.setVariable("totalScore", 0);

sym.setVariable("medal", "none");

/* ================ Setting Variables for SCORM and Gamification Section ================ */

// This for use for SCORM functionality
sym.setVariable("onSCORM", false);
sym.setVariable("userBookMark", false);
// Set here the suspend data object(s) needed for SCORM
var retrieveSuspendData = true;
var suspendData = new Object();

// Set here the Objects needed to store vaules
// For this example I store page value
suspendData["pages"] = new Object();

/* === This is for the Registration page using Gamification === */

// This variables are use for Gamification
sym.setVariable("username","");

/* ================ Page Navigation Section ================ */

// This loads each external files
function loadPage(pageNum)
{
	switch(pageNum)
	{
		case "page1":
			if(!pg1)
			{
				pg1 = EC.loadComposition("pages/page1/page1.html", sym.$("page1"));
				pg1.done(function(comp)
				{
					var stage = comp.getStage();

					stage.closePage = function()
					{
						sym.$("page1").fadeOut();
                  sym.allowLinks();
						if(!pg2)
						{
							nextPage();
						}
					}
					stage.gotoPrevPage = function()
					{
						prevPage();
					}
				});
			}
			sym.getSymbol("header").getSymbol("audioDropdown").deactiveAudio();
			sym.getSymbol("header").$("screenTitle").text("Halo for Journals: Introduction");
			sym.getSymbol("header").getSymbol("listsOfPagesDropdown").activeLink("tips","blockTips");
			break;

		case "page2":
			if(!pg2)
			{
				pg2 = EC.loadComposition("pages/page2/page2.html", sym.$("page2"));
				pg2.done(function(comp)
				{
					// This is only to demonstate the Parent and Child communication.
					var stage = comp.getStage();

					stage.gotoNextPage = function()
					{
						nextPage();
					}
					stage.gotoPrevPage = function()
					{
						prevPage();
					}
				});
			}
			sym.getSymbol("header").getSymbol("audioDropdown").activeAudio();
			sym.getSymbol("header").$("screenTitle").text("Halo for Journals: Introduction");
			sym.getSymbol("header").getSymbol("listsOfPagesDropdown").activeLink("cityView","blockCityView");
			break;

		case "page3":
			if(!pg3)
			{
				pg3 = EC.loadComposition("pages/page3/page3.html", sym.$("page3"));
				pg3.done(function(comp)
				{
					// This is only to demonstate the Parent and Child communication.
					var stage = comp.getStage();

					stage.gotoNextPage = function()
					{
						nextPage();
					}
					stage.gotoPrevPage = function()
					{
						prevPage();
					}
				});
			}
			sym.getSymbol("header").getSymbol("audioDropdown").activeAudio();
			break;

		case "page4":
			if(!pg4)
			{
				pg4 = EC.loadComposition("pages/page4/page4.html", sym.$("page4"));
				pg4.done(function(comp)
				{
					// This is only to demonstate the Parent and Child communication.
					var stage = comp.getStage();

					stage.gotoNextPage = function()
					{
						nextPage();
					}
					stage.gotoPrevPage = function()
					{
						prevPage();
					}

					stage.addScore = function()
					{
						sym.addScore(50);
					}
					stage.addHalo = function()
					{
						sym.addHalo(50);
					}
				});
			}
			sym.getSymbol("header").getSymbol("audioDropdown").activeAudio();
			sym.getSymbol("header").$("screenTitle").text("Hello Halo");
			sym.getSymbol("header").getSymbol("listsOfPagesDropdown").activeLink("divider1","");
			sym.getSymbol("header").getSymbol("listsOfPagesDropdown").activeLink("helloHalo","blockHelloHalo");
			break;

		case "page5":
			if(!pg5)
			{
				pg5 = EC.loadComposition("pages/page5/page5.html", sym.$("page5"));
				pg5.done(function(comp)
				{
					// This is only to demonstate the Parent and Child communication.
					var stage = comp.getStage();

					sym.addScore(70);
					sym.addHalo(70);

					stage.gotoNextPage = function()
					{
						nextPage();
					}
					stage.gotoPrevPage = function()
					{
						prevPage();
					}
				});
			}
			sym.getSymbol("header").getSymbol("audioDropdown").activeAudio();
			sym.getSymbol("header").$("screenTitle").text("Halo for Journals");
			sym.getSymbol("header").getSymbol("listsOfPagesDropdown").activeLink("haloForJournals","blockHaloForJournals");
			break;

		case "page6":
			if(!pg6)
			{
				pg6 = EC.loadComposition("pages/page6/page6.html", sym.$("page6"));
				pg6.done(function(comp)
				{
					// This is only to demonstate the Parent and Child communication.
					var stage = comp.getStage();

					sym.addScore(70);
					sym.addHalo(70);

					stage.gotoNextPage = function()
					{
						nextPage();
					}
					stage.gotoPrevPage = function()
					{
						prevPage();
					}
					stage.gotoPage8 = function()
					{
						stopAudio();
						sym.setVariable('currentPage', 8);
						sym.showPage()
					}
					stage.restoreScore = function()
					{
						sym.subtractScore(stage.getVariable("draggedBoxesScoreTotal"));
					}
					stage.restoreHalo = function()
					{
						sym.subtractHalo(stage.getVariable("draggedBoxesScoreTotal"));
					}
					stage.addScore = function()
					{
						sym.addScore(stage.getVariable("earnPoints"));
					}
					stage.addHalo = function()
					{
						sym.addHalo(stage.getVariable("earnHalo"));
					}
				});
			}
			sym.getSymbol("header").getSymbol("audioDropdown").activeAudio();
			sym.getSymbol("header").$("screenTitle").text("Benefits of Halo for Journals");
			sym.getSymbol("header").getSymbol("listsOfPagesDropdown").activeLink("benefitsOfHalo","blockBenefitsOfHalo");
			break;
		case "page7":
			if(!pg7)
			{
				pg7 = EC.loadComposition("pages/page7/page7.html", sym.$("page7"));
				pg7.done(function(comp)
				{
					// This is only to demonstate the Parent and Child communication.
					var stage = comp.getStage();

					stage.gotoNextPage = function()
					{
						nextPage();
					}
					stage.gotoPrevPage = function()
					{
						prevPage();
					}
					stage.addScore = function()
					{
						sym.addScore(30);
					}
					stage.addHalo = function()
					{
						sym.addHalo(30);
					}
					stage.enableAudio = function()
					{
						sym.getSymbol("header").getSymbol("audioDropdown").activeAudio();
					}
					stage.disableAudio = function()
					{
						sym.getSymbol("header").getSymbol("audioDropdown").deactiveAudio();
					}
					stage.addScoreHalo70 = function()
					{
						sym.addScore(70);
						sym.addHalo(70);
					}
				});
			}
			sym.getSymbol("header").getSymbol("audioDropdown").activeAudio();
			break;
		case "page8":
			if(!pg8)
			{
				pg8 = EC.loadComposition("pages/page8/page8.html", sym.$("page8"));
				pg8.done(function(comp)
				{
					// This is only to demonstate the Parent and Child communication.
					var stage = comp.getStage();

					stage.gotoNextPage = function()
					{
						nextPage();
					}
					stage.gotoPrevPage = function()
					{
						prevPage();
					}
				});
			}
			sym.getSymbol("header").getSymbol("audioDropdown").deactiveAudio();
			sym.getSymbol("header").$("screenTitle").text("Halo for Journals in Action");
			break;
		case "page9":
			if(!pg9)
			{
				pg9 = EC.loadComposition("pages/page9/page9.html", sym.$("page9"));
				pg9.done(function(comp)
				{
					// This is only to demonstate the Parent and Child communication.
					var stage = comp.getStage();

					stage.gotoNextPage = function()
					{
						nextPage();
					}
					stage.gotoPrevPage = function()
					{
						prevPage();
					}
					stage.addScore = function()
					{
						sym.addScore(20);
					}
					stage.addJournal = function()
					{
						sym.addJournal(20);
					}
					stage.changeHeader = function()
					{
						headerChanged = true;
						sym.getSymbol("header").$("screenTitle").text("Dashboard");
						sym.getSymbol("header").getSymbol("listsOfPagesDropdown").activeLink("divider2","");
						sym.getSymbol("header").getSymbol("listsOfPagesDropdown").activeLink("dashboard","blockDashboard");
					}
					stage.changeHeaderBack = function()
					{
						sym.getSymbol("header").$("screenTitle").text("Halo for Journals: Dashboard");
					}
				});
			}

			if(headerChanged)
			{
				sym.getSymbol("header").$("screenTitle").text("Halo for Journals: Dashboard");
				sym.getSymbol("header").getSymbol("listsOfPagesDropdown").activeLink("divider2","");
				sym.getSymbol("header").getSymbol("listsOfPagesDropdown").activeLink("dashboard","blockDashboard");
			}
			sym.getSymbol("header").getSymbol("audioDropdown").activeAudio();
			break;
		case "page10":
			if(!pg10)
			{
				pg10 = EC.loadComposition("pages/page10/page10.html", sym.$("page10"));
				pg10.done(function(comp)
				{
					// This is only to demonstate the Parent and Child communication.
					var stage = comp.getStage();

					stage.gotoNextPage = function()
					{
						nextPage();
					}
					stage.gotoPrevPage = function()
					{
						prevPage();
					}
					stage.addScore = function()
					{
						sym.addScore(20);
					}
				});
			}
			sym.getSymbol("header").getSymbol("audioDropdown").deactiveAudio();
			sym.getSymbol("header").$("screenTitle").text("Navigation");
			break;
		case "page11":
			if(!pg11)
			{
				pg11 = EC.loadComposition("pages/page11/page11.html", sym.$("page11"));
				pg11.done(function(comp)
				{
					// This is only to demonstate the Parent and Child communication.
					var stage = comp.getStage();

					stage.gotoNextPage = function()
					{
						nextPage();
					}
					stage.gotoPrevPage = function()
					{
						prevPage();
					}
					stage.addScore = function()
					{
						sym.addScore(20);
					}
				});
			}
			sym.getSymbol("header").getSymbol("audioDropdown").deactiveAudio();
			sym.getSymbol("header").$("screenTitle").text("Engagement setup");
			break;
		case "page12":
			if(!pg12)
			{
				pg12 = EC.loadComposition("pages/page12/page12.html", sym.$("page12"));
				pg12.done(function(comp)
				{
					// This is only to demonstate the Parent and Child communication.
					var stage = comp.getStage();

					stage.gotoNextPage = function()
					{
						nextPage();
					}
					stage.gotoPrevPage = function()
					{
						prevPage();
					}
					stage.addScore = function()
					{
						sym.addScore(20);
					}
				});
			}
			sym.getSymbol("header").getSymbol("audioDropdown").deactiveAudio();
			sym.getSymbol("header").$("screenTitle").text("Quality");
			break;
		case "page13":
			if(!pg13)
			{
				pg13 = EC.loadComposition("pages/page13/page13.html", sym.$("page13"));
				pg13.done(function(comp)
				{
					// This is only to demonstate the Parent and Child communication.
					var stage = comp.getStage();

					stage.gotoNextPage = function()
					{
						nextPage();
					}
					stage.gotoPrevPage = function()
					{
						prevPage();
					}
					stage.addScore = function()
					{
						sym.addScore(20);
					}
				});
			}
			sym.getSymbol("header").getSymbol("audioDropdown").deactiveAudio();
			sym.getSymbol("header").$("screenTitle").text("Viability");
			break;
		case "page14":
			if(!pg14)
			{
				pg14 = EC.loadComposition("pages/page14/page14.html", sym.$("page14"));
				pg14.done(function(comp)
				{
					// This is only to demonstate the Parent and Child communication.
					var stage = comp.getStage();

					sym.addScore(70);
					sym.addJournal(70);

					stage.gotoNextPage = function()
					{
						nextPage();
					}
					stage.gotoPrevPage = function()
					{
						prevPage();
					}
					stage.playOnCharts();

					stage.gotoPage16 = function()
					{
						stopAudio();
						sym.setVariable('currentPage', 16);
						sym.showPage()
					}
				});
			}
			sym.getSymbol("header").getSymbol("audioDropdown").activeAudio();
			sym.getSymbol("header").$("screenTitle").text("Halo for Journals: Test");
			sym.getSymbol("header").getSymbol("listsOfPagesDropdown").activeLink("tests","blockTests");
			break;
		case "page15":
			if(!pg15)
			{
				pg15 = EC.loadComposition("pages/page15/page15.html", sym.$("page15"));
				pg15.done(function(comp)
				{
					// This is only to demonstate the Parent and Child communication.
					var stage = comp.getStage();

					stage.gotoNextPage = function()
					{
						nextPage();
					}
					stage.gotoPrevPage = function()
					{
						prevPage();
					}
					stage.addScore = function()
					{
						sym.addScore(10);
					}
					stage.addJournal = function()
					{
						sym.addJournal(10);
					}
				});
			}
			sym.getSymbol("header").getSymbol("audioDropdown").deactiveAudio();
			sym.getSymbol("header").$("screenTitle").text("Bonus!");
			break;
		case "page16":
			if(!pg16)
			{
				pg16 = EC.loadComposition("pages/page16/page16.html", sym.$("page16"));
				pg16.done(function(comp)
				{
					// This is only to demonstate the Parent and Child communication.
					var stage = comp.getStage();

					sym.addScore(30);
					sym.addJournal(30);

					stage.gotoNextPage = function()
					{
						nextPage();
					}
					stage.gotoPrevPage = function()
					{
						prevPage();
					}
					stage.gotoPage10 = function()
					{
						stopAudio();
						sym.setVariable('currentPage', 10);
						sym.showPage()
					}

				});
			}
			sym.getSymbol("header").getSymbol("audioDropdown").activeAudio();
			sym.getSymbol("header").$("screenTitle").text("Halo for Journals in Action");
			sym.getSymbol("header").getSymbol("listsOfPagesDropdown").activeLink("action","blockAction");
			break;
		case "page17":
			if(!pg17)
			{
				pg17 = EC.loadComposition("pages/page17/page17.html", sym.$("page17"));
				pg17.done(function(comp)
				{
					// This is only to demonstate the Parent and Child communication.
					var stage = comp.getStage();

					stage.gotoNextPage = function()
					{
						nextPage();
					}
					stage.gotoPrevPage = function()
					{
						prevPage();
					}
					stage.addScore = function()
					{
						sym.addScore(20);
					}
				});
			}
			sym.getSymbol("header").getSymbol("audioDropdown").deactiveAudio();
			sym.getSymbol("header").$("screenTitle").text("Bonus!");
			break;
		case "page18":
			if(!pg18)
			{
				pg18 = EC.loadComposition("pages/page18/page18.html", sym.$("page18"));
				pg18.done(function(comp)
				{
					// This is only to demonstate the Parent and Child communication.
					var stage = comp.getStage();

					stage.gotoNextPage = function()
					{
						nextPage();
					}
					stage.gotoPrevPage = function()
					{
						prevPage();
					}
					stage.addScore = function()
					{
						sym.addScore(20);
					}
				});
			}
			sym.getSymbol("header").getSymbol("audioDropdown").deactiveAudio();
			sym.getSymbol("header").$("screenTitle").text("Bonus!");
			break;
		case "page19":
			if(!pg19)
			{
				pg19 = EC.loadComposition("pages/page19/page19.html", sym.$("page19"));
				pg19.done(function(comp)
				{
					// This is only to demonstate the Parent and Child communication.
					var stage = comp.getStage();

					stage.gotoNextPage = function()
					{
						nextPage();
					}
					stage.gotoPrevPage = function()
					{
						prevPage();
					}
				});
			}
			sym.getSymbol("header").getSymbol("audioDropdown").deactiveAudio();
			sym.getSymbol("header").$("screenTitle").text("Export & Documentation");
			break;
		case "page20":
			if(!pg20)
			{
				pg20 = EC.loadComposition("pages/page20/page20.html", sym.$("page20"));
				pg20.done(function(comp)
				{
					// This is only to demonstate the Parent and Child communication.
					var stage = comp.getStage();

					stage.gotoNextPage = function()
					{
						nextPage();
					}
					stage.gotoPrevPage = function()
					{
						prevPage();
					}
				});
			}
			sym.getSymbol("header").getSymbol("audioDropdown").deactiveAudio();
			sym.getSymbol("header").$("screenTitle").text("Export & Documentation");
			sym.getSymbol("header").getSymbol("listsOfPagesDropdown").activeLink("action","blockExport");
			break;
		case "page21":
			if(!pg21)
			{
				pg21 = EC.loadComposition("pages/page21/page21.html", sym.$("page21"));
				pg21.done(function(comp)
				{
					// This is only to demonstate the Parent and Child communication.
					var stage = comp.getStage();

					stage.gotoNextPage = function()
					{
						nextPage();
					}
					stage.gotoPrevPage = function()
					{
						prevPage();
					}
				});
			}
			sym.getSymbol("header").getSymbol("audioDropdown").deactiveAudio();
			sym.getSymbol("header").$("screenTitle").text("Export queue");
			break;
		case "page22":
			if(!pg22)
			{
				pg22 = EC.loadComposition("pages/page22/page22.html", sym.$("page22"));
				pg22.done(function(comp)
				{
					// This is only to demonstate the Parent and Child communication.
					var stage = comp.getStage();

					stage.gotoNextPage = function()
					{
						nextPage();
					}
					stage.gotoPrevPage = function()
					{
						prevPage();
					}
				});
			}
			sym.getSymbol("header").getSymbol("audioDropdown").deactiveAudio();
			sym.getSymbol("header").$("screenTitle").text("Export to Excel");
			break;
		case "page23":
			if(!pg23)
			{
				pg23 = EC.loadComposition("pages/page23/page23.html", sym.$("page23"));
				pg23.done(function(comp)
				{
					// This is only to demonstate the Parent and Child communication.
					var stage = comp.getStage();

					stage.gotoNextPage = function()
					{
						nextPage();
					}
					stage.gotoPrevPage = function()
					{
						prevPage();
					}
				});
			}
			sym.getSymbol("header").getSymbol("audioDropdown").deactiveAudio();
			sym.getSymbol("header").$("screenTitle").text("Test summary");
			break;
		case "page24":
			if(!pg24)
			{
				pg24 = EC.loadComposition("pages/page24/page24.html", sym.$("page24"));
				pg24.done(function(comp)
				{
					// This is only to demonstate the Parent and Child communication.
					var stage = comp.getStage();

					stage.gotoNextPage = function()
					{
						nextPage();
					}
					stage.gotoPrevPage = function()
					{
						prevPage();
					}
				});
			}
			sym.getSymbol("header").getSymbol("audioDropdown").deactiveAudio();
			sym.getSymbol("header").$("screenTitle").text("Results summary");
			break;
		case "page25":
			if(!pg25)
			{
				pg25 = EC.loadComposition("pages/page25/page25.html", sym.$("page25"));
				pg25.done(function(comp)
				{
					// This is only to demonstate the Parent and Child communication.
					var stage = comp.getStage();

					stage.gotoNextPage = function()
					{
						nextPage();
					}
					stage.gotoPrevPage = function()
					{
						prevPage();
					}
				});
			}
			sym.getSymbol("header").getSymbol("audioDropdown").deactiveAudio();
			sym.getSymbol("header").$("screenTitle").text("Results detail");
			break;
		case "page26":
			if(!pg26)
			{
				pg26 = EC.loadComposition("pages/page26/page26.html", sym.$("page26"));
				pg26.done(function(comp)
				{
					// This is only to demonstate the Parent and Child communication.
					var stage = comp.getStage();

					stage.gotoNextPage = function()
					{
						nextPage();
					}
					stage.gotoPrevPage = function()
					{
						prevPage();
					}
				});
			}
			sym.getSymbol("header").getSymbol("audioDropdown").deactiveAudio();
			sym.getSymbol("header").$("screenTitle").text("Bonus!");
			break;
		case "page27":
			if(!pg27)
			{
				pg27 = EC.loadComposition("pages/page27/page27.html", sym.$("page27"));
				pg27.done(function(comp)
				{
					// This is only to demonstate the Parent and Child communication.
					var stage = comp.getStage();

					stage.gotoNextPage = function()
					{
						nextPage();
					}
					stage.gotoPrevPage = function()
					{
						prevPage();
					}
				});
			}
			sym.getSymbol("header").getSymbol("audioDropdown").deactiveAudio();
			sym.getSymbol("header").$("screenTitle").text("Export & Documentation");
			break;
		case "page28":
			if(!pg28)
			{
				pg28 = EC.loadComposition("pages/page28/page28.html", sym.$("page28"));
				pg28.done(function(comp)
				{
					// This is only to demonstate the Parent and Child communication.
					var stage = comp.getStage();

					stage.gotoNextPage = function()
					{
						nextPage();
					}
					stage.gotoPrevPage = function()
					{
						prevPage();
					}
				});
			}
			sym.getSymbol("header").getSymbol("audioDropdown").deactiveAudio();
			sym.getSymbol("header").$("screenTitle").text("Halo for Journals – Resources");
			break;
		case "page29":
			if(!pg29)
			{
				pg29 = EC.loadComposition("pages/page29/page29.html", sym.$("page29"));
				pg29.done(function(comp)
				{
					// This is only to demonstate the Parent and Child communication.
					var stage = comp.getStage();

					stage.gotoNextPage = function()
					{
						nextPage();
					}
					stage.gotoPrevPage = function()
					{
						prevPage();
					}
				});
			}
			sym.getSymbol("header").getSymbol("audioDropdown").deactiveAudio();
			sym.getSymbol("header").$("screenTitle").text("Summary");
			break;
		case "page30":
			if(!pg30)
			{
				pg30 = EC.loadComposition("pages/page30/page30.html", sym.$("page30"));
				pg30.done(function(comp)
				{
					// This is only to demonstate the Parent and Child communication.
					var stage = comp.getStage();

					sym.addScore(70);
					sym.addJournal(70);

					stage.gotoNextPage = function()
					{
						nextPage();
					}
					stage.gotoPrevPage = function()
					{
						prevPage();
					}
					stage.setVariable("totalPoints",sym.getVariable("score"));
					stage.setVariable("haloPoints",sym.getVariable("haloPoints"));
					stage.setVariable("journalPoints",sym.getVariable("journals"));
					setTimeout(function(){stage.checkScore()},100);
					reachedLastPage = true;
				});
			}
			sym.getSymbol("header").getSymbol("audioDropdown").activeAudio();
			sym.getSymbol("header").$("screenTitle").text("Halo Quest Achievements");
			sym.getSymbol("header").getSymbol("listsOfPagesDropdown").activeLink("achievements","blockAchievements");
			break;
		case "page31":
			if(!pg31)
			{
				pg31 = EC.loadComposition("pages/page31/page31.html", sym.$("page31"));
				pg31.done(function(comp)
				{
					// This is only to demonstate the Parent and Child communication.
					var stage = comp.getStage();

					stage.gotoNextPage = function()
					{
						nextPage();
					}
					stage.gotoPrevPage = function()
					{
						prevPage();
					}
				});
			}
			sym.getSymbol("header").getSymbol("audioDropdown").deactiveAudio();
			break;
	}
}
function resetPage(page)
{
	switch(page)
	{
		case 1:
			if(pg1)
			{
				pg1.done(function(comp)
				{
					var stage = comp.getStage();
					stage.resetPage();
				});
			}
			break;
		case 2:
			if(pg2)
			{
				pg2.done(function(comp)
				{
					var stage = comp.getStage();
					stage.resetPage();
				});
			}
			break;
		case 3:
			if(pg3)
			{
				pg3.done(function(comp)
				{
					var stage = comp.getStage();
					stage.resetPage();
				});
			}
			break;
		case 4:
			if(pg4)
			{
				pg4.done(function(comp)
				{
					var stage = comp.getStage();
					//stage.resetPage();
				});
			}
			break;
		case 5:
			if(pg5)
			{
				pg5.done(function(comp)
				{
					var stage = comp.getStage();
					stage.resetPage();
				});
			}
			break;
		case 6:
			if(pg6)
			{
				pg6.done(function(comp)
				{
					var stage = comp.getStage();
					//stage.resetPage();
				});
			}
			break;
		case 7:
			if(pg7)
			{
				pg7.done(function(comp)
				{
					var stage = comp.getStage();
					stage.resetPage();
				});
			}
			break;
		case 8:
			if(pg8)
			{
				pg8.done(function(comp)
				{
					var stage = comp.getStage();
					stage.resetPage();
				});
			}
			break;
		case 9:
			if(pg9)
			{
				pg9.done(function(comp)
				{
					var stage = comp.getStage();
					//stage.resetPage();
				});
			}
			break;
		case 10:
			if(pg10)
			{
				pg10.done(function(comp)
				{
					var stage = comp.getStage();
					stage.resetPage();
				});
			}
			break;
		case 11:
			if(pg11)
			{
				pg11.done(function(comp)
				{
					var stage = comp.getStage();
					stage.resetPage();
				});
			}
			break;
		case 12:
			if(pg12)
			{
				pg12.done(function(comp)
				{
					var stage = comp.getStage();
					stage.resetPage();
				});
			}
			break;
		case 13:
			if(pg13)
			{
				pg13.done(function(comp)
				{
					var stage = comp.getStage();
					stage.resetPage();
				});
			}
			break;
		case 14:
			if(pg14)
			{
				pg14.done(function(comp)
				{
					var stage = comp.getStage();
					stage.resetPage();
				});
			}
			break;
		case 15:
			if(pg15)
			{
				pg15.done(function(comp)
				{
					var stage = comp.getStage();
					stage.resetPage();
				});
			}
			break;
		case 16:
			if(pg16)
			{
				pg16.done(function(comp)
				{
					var stage = comp.getStage();
					stage.resetPage();
				});
			}
			break;
		case 17:
			if(pg17)
			{
				pg17.done(function(comp)
				{
					var stage = comp.getStage();
					stage.resetPage();
				});
			}
			break;
		case 18:
			if(pg18)
			{
				pg18.done(function(comp)
				{
					var stage = comp.getStage();
					stage.resetPage();
				});
			}
			break;
		case 19:
			if(pg19)
			{
				pg19.done(function(comp)
				{
					var stage = comp.getStage();
					stage.resetPage();
				});
			}
			break;
		case 20:
			if(pg20)
			{
				pg20.done(function(comp)
				{
					var stage = comp.getStage();
					stage.resetPage();
				});
			}
			break;
		case 21:
			if(pg21)
			{
				pg21.done(function(comp)
				{
					var stage = comp.getStage();
					stage.resetPage();
				});
			}
			break;
		case 22:
			if(pg22)
			{
				pg22.done(function(comp)
				{
					var stage = comp.getStage();
					stage.resetPage();
				});
			}
			break;
		case 23:
			if(pg23)
			{
				pg23.done(function(comp)
				{
					var stage = comp.getStage();
					stage.resetPage();
				});
			}
			break;
		case 24:
			if(pg24)
			{
				pg24.done(function(comp)
				{
					var stage = comp.getStage();
					stage.resetPage();
				});
			}
			break;
		case 25:
			if(pg25)
			{
				pg25.done(function(comp)
				{
					var stage = comp.getStage();
					stage.resetPage();
				});
			}
			break;
		case 26:
			if(pg26)
			{
				pg26.done(function(comp)
				{
					var stage = comp.getStage();
					stage.resetPage();
				});
			}
			break;
		case 27:
			if(pg27)
			{
				pg27.done(function(comp)
				{
					var stage = comp.getStage();
					stage.resetPage();
				});
			}
			break;
		case 28:
			if(pg28)
			{
				pg28.done(function(comp)
				{
					var stage = comp.getStage();
					stage.resetPage();
				});
			}
			break;
		case 29:
			if(pg29)
			{
				pg29.done(function(comp)
				{
					var stage = comp.getStage();
					stage.resetPage();
				});
			}
			break;
		case 30:
			if(pg30)
			{
				pg30.done(function(comp)
				{
					var stage = comp.getStage();
					stage.resetPage();

					stage.setVariable("totalPoints",sym.getVariable("score"));
					stage.setVariable("haloPoints",sym.getVariable("haloPoints"));
					stage.setVariable("journalPoints",sym.getVariable("journals"));
					setTimeout(function(){stage.checkScore()},100);
				});
			}
			break;
		case 31:
			if(pg31)
			{
				pg31.done(function(comp)
				{
					var stage = comp.getStage();
					stage.resetPage();
				});
			}
			break;
	}
}
function stopAudio()
{
	var pageNum = sym.getVariable('currentPage');
	var page = eval("pg" + pageNum);

	if(page)
	{
		page.done(function(comp)
		{
			var stage = comp.getStage();
			stage.stopAudio();
		});
	}
}
sym.stopAudio = function()
{
	stopAudio();
}
sym.pauseAndPlay = function()
{
	var pageNum = sym.getVariable('currentPage');
	var page = eval("pg" + pageNum);

	if(page)
	{
		page.done(function(comp)
			{
				var stage = comp.getStage();
				stage.pauseAndPlay();
			});
	}
}
sym.replayAudio = function()
{
	var pageNum = sym.getVariable('currentPage');
	var page = eval("pg" + pageNum);

	if(page)
	{
		page.done(function(comp)
			{
				var stage = comp.getStage();
				stage.replayAudio();
			});
	}
}
sym.showTranscript = function()
{
	var pageNum = sym.getVariable('currentPage');
    var page = eval("pg" + pageNum);
	if(page)
	{
		page.done(function(comp)
			{
				var stage = comp.getStage();
				stage.showTranscript();
			});
	}
}

function hideAllPages(pc){

	for(var i = 1; i <= pc; i++){
		sym.$('page' + i).hide();
	}
}

sym.showPage = function(){	
	var cp = sym.getVariable('currentPage');
	var pc = (sym.getVariable('pages')).length;
	var pages = sym.getVariable('pages');

	hideAllPages(pc);
	loadPage(pages[cp-1]);
	sym.$(pages[cp-1]).show();
	resetPage(cp);

}

function initializePage()
{
	/* hard calls for init */
	sym.showPage();
}


// Events for navigation buttons
function nextPage()
{
	var p = sym.getVariable('currentPage');

	stopAudio();
	p = p + 1;
	sym.setVariable('currentPage', p);
	sym.showPage();
}
function prevPage()
{
	var p = sym.getVariable('currentPage');

	stopAudio();
	p = p - 1;
	sym.setVariable('currentPage', p);
	sym.showPage();
}

sym.$("btnPrev").click(function()
{
	prevPage();
});

sym.$("btnNxt").click(function()
{
	nextPage();
});

/* ================ SCORM and Gamification Section ================ */

// This method sets the suspend data for SCORM
sym.setSuspendData =  function(objName,property,value)
{
	suspendData[objName][property] = value;
	doLMSSetValue("cmi.suspend_data",JSON.stringify(suspendData));
	doLMSCommit();
}
sym.setCourseComplete = function()
{
	if(sym.getVariable("onSCORM"))
	{
		doLMSSetValue("cmi.core.lesson_status","completed");
		doLMSSetValue("cmi.core.exit", "");
		//doLMSFinish();
		doLMSCommit();
	}
	SetSCOComplete();
	//moduleComplete();
}
// This function stores user's score
function saveScore()
{
	//new Gamification().withPerson(sym.getVariable("userName")).withScore(sym.getVariable("totalScore")).userScore();
}

function scormLoadLastSession()
{
	var visitedPage = 1;
	var lessionStatus = doLMSGetValue("cmi.core.lesson_status");

	if(sym.getVariable("userBookMark"))
	{
		if(lessionStatus == "not attempted")
		{
			doLMSSetValue("cmi.core.lesson_status","incomplete");
			doLMSCommit();
		}
		else
		{
			if(lessionStatus == "completed")
			{
				doLMSSetValue("cmi.core.exit", "");
				doLMSCommit();
			}
			if(confirm("Would you like to return to where you left off?"))
			{
				// Retrieves all the values in the suspend data and store it in suspendData variable.
				var str = doLMSGetValue("cmi.suspend_data");
				suspendData = JSON.parse(str);

				visitedPage = parseInt(doLMSGetValue("cmi.core.lesson_location")) ? parseInt(doLMSGetValue("cmi.core.lesson_location")) : 1;
				sym.setVariable("currentPage",visitedPage);
			}
			else
			{
				sym.setVariable("currentPage",1);
				sym.setBookmarkPage(sym.getVariable("currentPage"));
			}
		}
	}
	else
	{
		doLMSSetValue("cmi.core.lesson_status","incomplete");		
		doLMSCommit();
	}
	//sym.$("userName").text("Hi! " + sym.getVariable("userName"));
	initializePage();
}

sym.loadPage = function()
{
	if(sym.getVariable("onSCORM"))
	{
		var isScormInitialized;
		var lessionStatus = doLMSGetValue("cmi.core.lesson_status");

		isScormInitialized = doLMSInitialize();
		sym.setVariable("isScormInitialized", isScormInitialized);

		if(isScormInitialized == "true")
		{
			sym.setVariable("userName",doLMSGetValue("cmi.core.student_name"));
			scormLoadLastSession();
		}
		else
		{
			alert("Fail to initialize LMS");
			initializePage();
		}
	}
	else
	{
		// Write here if you want to test it outside SCORM to avoid browser error most especially on IE
		initializePage();
	}
}
function showMedal()
{
	// Put code to show medal
}
function earnedMedal()
{
	var score = sym.getVariable("score");
	//console.log("score -> " + score);
	if(score <= 684)
	{
		sym.getSymbol("header").$("pointBar").css({backgroundColor: "#f10909"});
		sym.setVariable("medal","none");

		sym.getSymbol("header").$("bright-gold").hide();
		sym.getSymbol("header").$("bright-silver").hide();
		sym.getSymbol("header").$("bright-bronze").hide();
	}
	else if(score >= 685 && score <= 855)
	{
		sym.getSymbol("header").$("pointBar").css({backgroundColor: "#cc6633"});
		sym.setVariable("medal","bronze");

		sym.getSymbol("header").$("bright-gold").hide();
		sym.getSymbol("header").$("bright-silver").hide();
		sym.getSymbol("header").$("bright-bronze").hide();

		sym.getSymbol("header").$("bright-bronze").show();
	}
	else if(score >= 856 && score <= 1039)
	{
		sym.getSymbol("header").$("pointBar").css({backgroundColor: "#cccccc"});
		sym.setVariable("medal","silver");

		sym.getSymbol("header").$("bright-gold").hide();
		sym.getSymbol("header").$("bright-silver").hide();
		sym.getSymbol("header").$("bright-bronze").hide();

		sym.getSymbol("header").$("bright-bronze").show();
		sym.getSymbol("header").$("bright-silver").show();
	}
	else if(score >= 1040 && score <= 1070)
	{
		sym.getSymbol("header").$("pointBar").css({backgroundColor: "#ffd700"});
		sym.setVariable("medal","gold");

		sym.getSymbol("header").$("bright-gold").hide();
		sym.getSymbol("header").$("bright-silver").hide();
		sym.getSymbol("header").$("bright-bronze").hide();

		sym.getSymbol("header").$("bright-bronze").show();
		sym.getSymbol("header").$("bright-silver").show();
		sym.getSymbol("header").$("bright-gold").show();
	}
}
function scoreProgress()
{
	var score = ((sym.getVariable("score") / 1070) * 378) + 17;

	if(score < 395)
	{
		document.getElementById("Stage_header_pointBar").style.width = score + 'px';
	}
	else
	{
		sym.getSymbol('header').$('pointBar').css('width', '410px');
	}

	earnedMedal();
}
sym.addJournal = function(journalPts)
{
	var currentScore = sym.getVariable("journals");

	if(currentScore >= 450)
	{
		sym.setVariable("journals",450);
		currentScore = sym.getVariable("journals");
	}

	sym.setVariable("journals",currentScore + journalPts);
}
sym.addHalo = function(haloPts)
{
	var currentScore = sym.getVariable("haloPoints");

	if(currentScore >= 620)
	{
		sym.setVariable("haloPoints",620);
		currentScore = sym.getVariable("haloPoints");
	}

	sym.setVariable("haloPoints",currentScore + haloPts);
}
sym.addScore = function(score)
{
	var currentScore = sym.getVariable("score");

	if(currentScore >= 1070)
	{
		sym.setVariable("score",1070);
		currentScore = sym.getVariable("score");
	}

	sym.setVariable("score",currentScore + score);

	sym.getSymbol("header").$("score").text((currentScore + score));

	scoreProgress();
}
sym.subtractScore = function(score)
{
	var currentScore = sym.getVariable("score");

	if(currentScore >= 1070)
	{
		sym.setVariable("score",1070);
		currentScore = sym.getVariable("score");
	}

	sym.setVariable("score",currentScore - score);

	sym.getSymbol("header").$("score").text((currentScore - score));

	scoreProgress();
}
sym.subtractHalo = function(halo)
{
	var currentScore = sym.getVariable("haloPoints");

	if(currentScore >= 620)
	{
		sym.setVariable("haloPoints",620);
		currentScore = sym.getVariable("haloPoints");
	}

	sym.setVariable("haloPoints",currentScore - halo);
}

sym.loadPage();
/*
	This is only to demonstate the Parent and Child communication.
	You may remove this on actual project.
*/

sym.getSymbol("header").getSymbol("listsOfPagesDropdown").activeAllLinks();
sym.getSymbol("header").getSymbol("audioDropdown").activeAudio();

sym.getSymbol("header").$("screenTitle").text("Halo for Journals: Introduction");
sym.getSymbol("header").getSymbol("listsOfPagesDropdown").activeLink("tips","blockTips");

// I put here the navigational control to easily revise if necessary
sym.getSymbol("header").getSymbol("listsOfPagesDropdown").$("tips").click(function()
{
	sym.$("page1").fadeIn();
});

sym.getSymbol("header").getSymbol("listsOfPagesDropdown").$("cityView").click(function()
{

	stopAudio();

	sym.setVariable('currentPage', 2);
	sym.showPage();

	resetPage(sym.getVariable('currentPage'));
});

sym.getSymbol("header").getSymbol("listsOfPagesDropdown").$("helloHalo").click(function()
{

	stopAudio();

	sym.setVariable('currentPage', 4);
	sym.showPage();

	resetPage(sym.getVariable('currentPage'));
});

sym.getSymbol("header").getSymbol("listsOfPagesDropdown").$("haloForJournals").click(function()
{

	stopAudio();

	sym.setVariable('currentPage', 5);
	sym.showPage();

	resetPage(sym.getVariable('currentPage'));
});

sym.getSymbol("header").getSymbol("listsOfPagesDropdown").$("benefitsOfHalo").click(function()
{

	stopAudio();

	sym.setVariable('currentPage', 6);
	sym.showPage();

	resetPage(sym.getVariable('currentPage'));
});

sym.getSymbol("header").getSymbol("listsOfPagesDropdown").$("dashboard").click(function()
{

	stopAudio();

	sym.setVariable('currentPage', 9);
	sym.showPage();
	sym.getSymbol("header").$("screenTitle").text("Halo for Journals: Dashboard");
	resetPage(sym.getVariable('currentPage'));
});

sym.getSymbol("header").getSymbol("listsOfPagesDropdown").$("tests").click(function()
{

	stopAudio();

	sym.setVariable('currentPage', 14);
	sym.showPage();

	resetPage(sym.getVariable('currentPage'));
});

sym.getSymbol("header").getSymbol("listsOfPagesDropdown").$("action").click(function()
{

	stopAudio();

	sym.setVariable('currentPage', 16);
	sym.showPage();

	resetPage(sym.getVariable('currentPage'));
});
sym.getSymbol("header").getSymbol("listsOfPagesDropdown").$("export").click(function()
{

	stopAudio();

	sym.setVariable('currentPage', 20);
	sym.showPage();

	resetPage(sym.getVariable('currentPage'));
});
sym.getSymbol("header").getSymbol("listsOfPagesDropdown").$("summary").click(function()
{

	stopAudio();

	sym.setVariable('currentPage', 29);
	sym.showPage();

	resetPage(sym.getVariable('currentPage'));
});
sym.getSymbol("header").getSymbol("listsOfPagesDropdown").$("achievements").click(function()
{

	stopAudio();

	sym.setVariable('currentPage', 30);
	sym.showPage();

	resetPage(sym.getVariable('currentPage'));
});

sym.blockLinks = function(){
	sym.$("linkBlocker").show();
};
sym.allowLinks = function(){
	sym.$("linkBlocker").hide();
};

sym.getSymbol("header").$("bright-gold").hide();
sym.getSymbol("header").$("bright-silver").hide();
sym.getSymbol("header").$("bright-bronze").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_next}", "click", function(sym, e) {
         // insert code for mouse click here
         var page = sym.getComposition().getStage().getVariable('pages');
         var currentPage = sym.getComposition().getStage().getVariable('currentPage');
         
         if(currentPage < page.length)
         {
         	sym.getComposition().getStage().stopAudio();
         	sym.getComposition().getStage().setVariable('currentPage', (currentPage + 1));
         	sym.getComposition().getStage().showPage();
         
         	sym.getComposition().getStage().allowLinks();
         	
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_prev}", "click", function(sym, e) {
         // insert code for mouse click here
         var page = sym.getComposition().getStage().getVariable('pages');
         var currentPage = sym.getComposition().getStage().getVariable('currentPage');
         
         if(currentPage > 1)
         {
         	sym.getComposition().getStage().stopAudio();
         	sym.getComposition().getStage().setVariable('currentPage', (currentPage - 1));
         	sym.getComposition().getStage().showPage();
         }

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'header'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${list}", "click", function(sym, e) {
         // insert code for mouse click here
         if(sym.$("audioDropdown").css("display") != "none")
         {
         	sym.$("audioDropdown").slideToggle("fast",function(){
         		sym.$("listsOfPagesDropdown").slideToggle("fast");
         	});
         }
         else
         {
         	sym.$("listsOfPagesDropdown").slideToggle("fast");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${audio}", "click", function(sym, e) {
         // insert code for mouse click here
         if(sym.$("listsOfPagesDropdown").css("display") != "none")
         {
         	sym.$("listsOfPagesDropdown").slideToggle("fast",function(){
         		sym.$("audioDropdown").slideToggle("fast");
         	});
         }
         else
         {
         	sym.$("audioDropdown").slideToggle("fast");
         }

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${personIcon}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getComposition().getStage().$("leaderboard-3").fadeIn();

      });
      //Edge binding end

   })("header");
   //Edge symbol end:'header'

   //=========================================================
   
   //Edge symbol: 'listsOfPagesDropdown'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
// insert code to be run when the symbol is created here

// All of this arrays must be equal in numbers.
var blockAry = ["tips","cityView","divider1","helloHalo","haloForJournals","benefitsOfHalo","divider2","dashboard","tests","action","export","summary","achievements"];
var blockPages = ["blockTips","blockCityView","","blockHelloHalo","blockHaloForJournals","blockBenefitsOfHalo","","blockDashboard","blockTests","blockAction","blockExport","blockSummary","blockAchievements"];

// This method is handy in developement mode
sym.activeAllLinks = function()
{
	for(i = 0; i < blockAry.length; i++)
	{
		sym.$(blockAry[i]).css({color:"rgba(185,24,52,1.00)"});
		sym.$(blockPages[i]).hide();
	}
}
// This method is handy for reseting the entire module. If every there will be any
sym.deactiveAllLinks = function()
{
	for(i = 0; i < blockAry.length; i++)
	{
		sym.$(blockAry[i]).css({color:"rgba(196,196,196,1.00)"});
		sym.$(blockPages[i]).show();
	}
}

sym.activeLink = function (page,block)
{
	sym.$(page).css({color:"rgba(223,47,29,1.00)"});
	sym.$(block).hide();
}

sym.makeGreyDropdownText =function()
{
sym.getSymbol("header").getSymbol("listsOfPagesDropdown").$("summary").$("txt").css({color:"rgba(223,47,29,1.00)"});
}

      });
      //Edge binding end

   })("listsOfPagesDropdown");
   //Edge symbol end:'listsOfPagesDropdown'

   //=========================================================
   
   //Edge symbol: 'page'
   (function(symbolName) {   
   
   })("page");
   //Edge symbol end:'page'

   //=========================================================
   
   //Edge symbol: 'audioDropdown'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
          sym.activeAudio = function()
          {
         	sym.$("transcript").css({color:"rgba(185,24,52,1.00)"});
         	sym.$("blockTranscript").hide();
         
         	sym.$("pausePlay").css({color:"rgba(185,24,52,1.00)"});
         	sym.$("blockPausePlay").hide();
         
         	sym.$("replay").css({color:"rgba(185,24,52,1.00)"});
         	sym.$("blockReplay").hide();
          }
         
           sym.deactiveAudio = function()
          {
         	sym.$("transcript").css({color:"rgba(196,196,196,1.00)"});
         	sym.$("blockTranscript").show();
         
         	sym.$("pausePlay").css({color:"rgba(196,196,196,1.00)"});
         	sym.$("blockPausePlay").show();
         
         	sym.$("replay").css({color:"rgba(196,196,196,1.00)"});
         	sym.$("blockReplay").show();
          }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${transcript}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getComposition().getStage().showTranscript();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${pausePlay}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getComposition().getStage().pauseAndPlay();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${replay}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getComposition().getStage().replayAudio();

      });
      //Edge binding end

   })("audioDropdown");
   //Edge symbol end:'audioDropdown'

   //=========================================================
   
   //Edge symbol: 'btn_next'
   (function(symbolName) {   
   
   })("btn_next");
   //Edge symbol end:'btn_next'

   //=========================================================
   
   //Edge symbol: 'btn_prev'
   (function(symbolName) {   
   
   })("btn_prev");
   //Edge symbol end:'btn_prev'

   //=========================================================
   
   //Edge symbol: 'leaderboard-1'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         sym.$("per-module-view").click(function(){
         
         	if(!sym.getComposition().getStage().getVariable("leaderboard2"))
         	{
         		sym.getComposition().getStage().getSymbol("leaderboard-2").$("whtBG-2").append('<iframe width="100%" height="100%" src="leaderboard-02.html" frameborder="0" scrolling="no"></iframe>');
         		sym.getComposition().getStage().setVariable("leaderboard2",true);
         	}
         
         	sym.getComposition().getStage().$("leaderboard-1").hide();
         	sym.getComposition().getStage().$("leaderboard-2").show();
         });
         //sym.$("whtBG").html("<div id='overAllContainerOuter'><p class='overAllTitle'>Leaderboard</p><div id='overAllContainer'><table id='overAllHeader'><tr><td class='rank'>Rank</td><td class='businessUnit'>Business Unit</td><td class='overAllPoints'>Overall Pts Avg.</td><td class='gold'>Gold</td><td class='silver'>Silver</td><td class='bronze'>Bronze</td><td class='businessMedal'>Business Unit Medal</td></tr></table><div id='overAllContentWrapper'><table id='overAllContent'><tr><td class='rank'>1</td><td class='businessUnit'>LTT</td><td class='overAllPoints'>97%</td><td class='gold'>96%</td><td class='silver'>95%</td><td class='bronze'>90%</td><td class='businessMedal'><img src='images/other_images/gold-halo.jpg'/></td></tr><tr><td class='rank'>2</td><td class='businessUnit'>LMT</td><td class='overAllPoints'>96%</td><td class='gold'>96%</td><td class='silver'>94%</td><td class='bronze'>88%</td><td class='businessMedal'><img src='images/other_images/gold-halo.jpg'/></td></tr><tr><td class='rank'>3</td><td class='businessUnit'>B&CM</td><td class='overAllPoints'>95%</td><td class='gold'>95%</td><td class='silver'>94%</td><td class='bronze'>80%</td><td class='businessMedal'><img src='images/other_images/gold-halo.jpg'/></td></tr><tr><td class='rank'>4</td><td class='businessUnit'>I&IM</td><td class='overAllPoints'>94%</td><td class='gold'>95%</td><td class='silver'>94%</td><td class='bronze'>85%</td><td class='businessMedal'><img src='images/other_images/gold-halo.jpg'/></td></tr><tr><td class='rank'>5</td><td class='businessUnit'>CMAS</td><td class='overAllPoints'>93%</td><td class='gold'>95%</td><td class='silver'>80%</td><td class='bronze'>90%</td><td class='businessMedal'><img src='images/other_images/gold-halo.jpg'/></td></tr><tr><td class='rank'>6</td><td class='businessUnit'>AIMS</td><td class='overAllPoints'>90%</td><td class='gold'>92%</td><td class='silver'>94%</td><td class='bronze'>85%</td><td class='businessMedal'><img src='images/other_images/silver-halo.jpg'/></td></tr><tr><td class='rank'>7</td><td class='businessUnit'>Assurance National</td><td class='overAllPoints'>89%</td><td class='gold'>90%</td><td class='silver'>95%</td><td class='bronze'>90%</td><td class='businessMedal'><img src='images/other_images/silver-halo.jpg'/></td></tr><tr><td class='rank'>8</td><td class='businessUnit'>Assurance Global</td><td class='overAllPoints'>88%</td><td class='gold'>90%</td><td class='silver'>94%</td><td class='bronze'>90%</td><td class='businessMedal'><img src='images/other_images/silver-halo.jpg'/></td></tr><tr class='mainUnit southEast'><td class='rank'>10</td><td class='businessUnit'>South East</td><td class='overAllPoints'>87%</td><td class='gold'>89%</td><td class='silver'>93%</td><td class='bronze'>89%</td><td class='businessMedal'><img src='images/other_images/silver-halo.jpg'/></td></tr><tr class='southEast subUnits'><td class='rank'>1</td><td class='businessUnit'>Cambridge</td><td class='overAllPoints'>87%</td><td class='gold'>88%</td><td class='silver'>92%</td><td class='bronze'>90%</td><td class='businessMedal'><img src='images/other_images/silver-halo.jpg'/></td></tr><tr class='southEast subUnits'><td class='rank'>2</td><td class='businessUnit'>Gatwick</td><td class='overAllPoints'>86%</td><td class='gold'>87%</td><td class='silver'>90%</td><td class='bronze'>89%</td><td class='businessMedal'><img src='images/other_images/silver-halo.jpg'/></td></tr><tr class='southEast subUnits'><td class='rank'>3</td><td class='businessUnit'>Norwich</td><td class='overAllPoints'>84%</td><td class='gold'>80%</td><td class='silver'>90%</td><td class='bronze'>80%</td><td class='businessMedal'><img src='images/other_images/silver-halo.jpg'/></td></tr><tr class='southEast subUnits'><td class='rank'>4</td><td class='businessUnit'>St Albans</td><td class='overAllPoints'>83%</td><td class='gold'>75%</td><td class='silver'>89%</td><td class='bronze'>85%</td><td class='businessMedal'><img src='images/other_images/silver-halo.jpg'/></td></tr><tr class='southEast subUnits'><td class='rank'>5</td><td class='businessUnit'>Uxbridge</td><td class='overAllPoints'>83%</td><td class='gold'>70%</td><td class='silver'>89%</td><td class='bronze'>80%</td><td class='businessMedal'><img src='images/other_images/silver-halo.jpg'/></td></tr><tr class='southEast subUnits'><td class='rank'>6</td><td class='businessUnit'>Reading</td><td class='overAllPoints'>79%</td><td class='gold'>75%</td><td class='silver'>80%</td><td class='bronze'>90%</td><td class='businessMedal'><img src='images/other_images/bronze-halo.jpg'/></td></tr><tr class='southEast subUnits'><td class='rank'>7</td><td class='businessUnit'>Southampton</td><td class='overAllPoints'>70%</td><td class='gold'>50%</td><td class='silver'>77%</td><td class='bronze'>80%</td><td class='businessMedal'><img src='images/other_images/bronze-halo.jpg'/></td></tr><tr class='mainUnit midlands'><td class='rank'>11</td><td class='businessUnit'>Midlands</td><td class='overAllPoints'>85</td><td class='gold'>75%</td><td class='silver'>95%</td><td class='bronze'>80%</td><td class='businessMedal'><img src='images/other_images/silver-halo.jpg'/></td></tr><tr class='midlands subUnits'><td class='rank'>1</td><td class='businessUnit'>Birmingham</td><td class='overAllPoints'>85%</td><td class='gold'>83%</td><td class='silver'>92%</td><td class='bronze'>88%</td><td class='businessMedal'><img src='images/other_images/silver-halo.jpg'/></td></tr><tr class='midlands subUnits'><td class='rank'>2</td><td class='businessUnit'>East Midlands</td><td class='overAllPoints'>84%</td><td class='gold'>76%</td><td class='silver'>93%</td><td class='bronze'>74%</td><td class='businessMedal'><img src='images/other_images/silver-halo.jpg'/></td></tr><tr class='midlands subUnits'><td class='rank'>3</td><td class='businessUnit'>Milton Keynes</td><td class='overAllPoints'>75%</td><td class='gold'>50%</td><td class='silver'>45%</td><td class='bronze'>60%</td><td class='businessMedal'><img src='images/other_images/bronze-halo.jpg'/></td></tr><tr class='main north'><td class='rank'>12</td><td class='businessUnit'>North</td><td class='overAllPoints'>84%</td><td class='gold'>70%</td><td class='silver'>90%</td><td class='bronze'>80%</td><td class='businessMedal'><img src='images/other_images/silver-halo.jpg'/></td></tr><tr class='north subUnits'><td class='rank'>1</td><td class='businessUnit'>Manchester</td><td class='overAllPoints'>90%</td><td class='gold'>95%</td><td class='silver'>94%</td><td class='bronze'>75%</td><td class='businessMedal'><img src='images/other_images/gold-halo.jpg'/></td></tr><tr class='north subUnits'><td class='rank'>2</td><td class='businessUnit'>Leeds</td><td class='overAllPoints'>80%</td><td class='gold'>80%</td><td class='silver'>88%</td><td class='bronze'>50%</td><td class='businessMedal'><img src='images/other_images/silver-halo.jpg'/></td></tr><tr class='north subUnits'><td class='rank'>3</td><td class='businessUnit'>Newcastle</td><td class='overAllPoints'>74%</td><td class='gold'>30%</td><td class='silver'>90%</td><td class='bronze'>50%</td><td class='businessMedal'><img src='images/other_images/silver-halo.jpg'/></td></tr><tr class='north subUnits'><td class='rank'>4</td><td class='businessUnit'>Liverpool</td><td class='overAllPoints'>77%</td><td class='gold'>65%</td><td class='silver'>30%</td><td class='bronze'>50%</td><td class='businessMedal'><img src='images/other_images/bronze-halo.jpg'/></td></tr><tr class='north subUnits'><td class='rank'>5</td><td class='businessUnit'>Hull</td><td class='overAllPoints'>76%</td><td class='gold'>54%</td><td class='silver'>63%</td><td class='bronze'>90%</td><td class='businessMedal'><img src='images/other_images/bronze-halo.jpg'/></td></tr><tr class='north subUnits'><td class='rank'>6</td><td class='businessUnit'>Sheffield</td><td class='overAllPoints'>75%</td><td class='gold'>30%</td><td class='silver'>20%</td><td class='bronze'>70%</td><td class='businessMedal'><img src='images/other_images/bronze-halo.jpg'/></td></tr><tr class='main scotland'><td class='rank'>13</td><td class='businessUnit'>Scotland</td><td class='overAllPoints'>83%</td><td class='gold'>55%</td><td class='silver'>75%</td><td class='bronze'>95%</td><td class='businessMedal'><img src='images/other_images/bronze-halo.jpg'/></td></tr><tr class='scotland subUnits'><td class='rank'>1</td><td class='businessUnit'>Glasgow</td><td class='overAllPoints'>88%</td><td class='gold'>70%</td><td class='silver'>33%</td><td class='bronze'>90%</td><td class='businessMedal'><img src='images/other_images/bronze-halo.jpg'/></td></tr><tr class='scotland subUnits'><td class='rank'>2</td><td class='businessUnit'>Edinburgh</td><td class='overAllPoints'>84%</td><td class='gold'>53%</td><td class='silver'>77%</td><td class='bronze'>80%</td><td class='businessMedal'><img src='images/other_images/bronze-halo.jpg'/></td></tr><tr class='scotland subUnits'><td class='rank'>3</td><td class='businessUnit'>Aberdeen</td><td class='overAllPoints'>80%</td><td class='gold'>69%</td><td class='silver'>15%</td><td class='bronze'>97%</td><td class='businessMedal'><img src='images/other_images/bronze-halo.jpg'/></td></tr><tr class='main westWales'><td class='rank'>14</td><td class='businessUnit'>West & Wales</td><td class='overAllPoints'>80%</td><td class='gold'>60%</td><td class='silver'>54%</td><td class='bronze'>90%</td><td class='businessMedal'><img src='images/other_images/bronze-halo.jpg'/></td></tr><tr class='westWales subUnits'><td class='rank'>1</td><td class='businessUnit'>Bristol</td><td class='overAllPoints'>90%</td><td class='gold'>80%</td><td class='silver'>82%</td><td class='bronze'>53%</td><td class='businessMedal'><img src='images/other_images/silver-halo.jpg'/></td></tr><tr class='westWales subUnits'><td class='rank'>2</td><td class='businessUnit'>Cardiff</td><td class='overAllPoints'>88%</td><td class='gold'>60%</td><td class='silver'>97%</td><td class='bronze'>34%</td><td class='businessMedal'><img src='images/other_images/silver-halo.jpg'/></td></tr><tr class='westWales subUnits'><td class='rank'>3</td><td class='businessUnit'>Plymouth</td><td class='overAllPoints'>83%</td><td class='gold'>67%</td><td class='silver'>65%</td><td class='bronze'>80%</td><td class='businessMedal'><img src='images/other_images/bronze-halo.jpg'/></td></tr><tr class='westWales subUnits'><td class='rank'>4</td><td class='businessUnit'>Swansea</td><td class='overAllPoints'>80%</td><td class='gold'>60%</td><td class='silver'>75%</td><td class='bronze'>80%</td><td class='businessMedal'><img src='images/other_images/bronze-halo.jpg'/></td></tr><tr class='main northernIreland'><td class='rank'>15</td><td class='businessUnit'>Northern Ireland</td><td class='overAllPoints'>80%</td><td class='gold'>65%</td><td class='silver'>77%</td><td class='bronze'>84%</td><td class='businessMedal'><img src='images/other_images/bronze-halo.jpg'/></td></tr><tr class='northernIreland subUnits'><td class='rank'>1</td><td class='businessUnit'>Belfast</td><td class='overAllPoints'>79%</td><td class='gold'>58%</td><td class='silver'>67%</td><td class='bronze'>80%</td><td class='businessMedal'><img src='images/other_images/bronze-halo.jpg'/></td></tr><tr class='northernIreland subUnits'><td class='rank'>2</td><td class='businessUnit'>Linen Green</td><td class='overAllPoints'>70%</td><td class='gold'>50%</td><td class='silver'>53%</td><td class='bronze'>60%</td><td class='businessMedal'><img src='images/other_images/bronze-halo.jpg'/></td></tr></table></div></div></div>");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${closebutton}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getComposition().getStage().$("leaderboard-3").fadeOut();
         sym.getComposition().getStage().$("leaderboard-2").fadeOut();
         sym.getComposition().getStage().$("leaderboard-1").fadeOut();

      });
      //Edge binding end

   })("leaderboard-1");
   //Edge symbol end:'leaderboard-1'

   //=========================================================
   
   //Edge symbol: 'leaderboard-2'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         sym.$("per-list-view").click(function(){
         	sym.getComposition().getStage().$("leaderboard-1").show();
         	sym.getComposition().getStage().$("leaderboard-2").hide();
         });
         
         // nda
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${closebuttonCopy2}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getComposition().getStage().$("leaderboard-3").fadeOut();
         sym.getComposition().getStage().$("leaderboard-2").fadeOut();
         sym.getComposition().getStage().$("leaderboard-1").fadeOut();

      });
      //Edge binding end

   })("leaderboard-2");
   //Edge symbol end:'leaderboard-2'

   //=========================================================
   
   //Edge symbol: 'scrollingContent'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         var elemY = 7;
         sym.$("up_arrow_red").css({opacity:0.25});
         sym.$("down_arrow_red").css({opacity:1});
         
         sym.$("up_arrow_red").mousedown(function()
         {
         	if(elemY == -73)
         	{
         		elemY = 7;
         		sym.$("personalLeaderboardContent").animate({top:elemY},"fast");
         		sym.$("up_arrow_red").css({opacity:0.25});
         		sym.$("down_arrow_red").css({opacity:1});
         	}
         });
         sym.$("down_arrow_red").mousedown(function()
         {
         	if(elemY == 7)
         	{
         		elemY = -73;
         		sym.$("personalLeaderboardContent").animate({top:elemY},"fast");
         		sym.$("up_arrow_red").css({opacity:1});
         		sym.$("down_arrow_red").css({opacity:0.25});
         	}
         });
         

      });
      //Edge binding end

   })("scrollingContent");
   //Edge symbol end:'scrollingContent'

   //=========================================================
   
   //Edge symbol: 'leaderboard-3'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         sym.$("left_arrow_wht3").click(function(){
         	sym.getComposition().getStage().$("leaderboard-2").fadeIn();
         	sym.getComposition().getStage().$("leaderboard-3").fadeOut();
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${closebuttonCopy3}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getComposition().getStage().$("leaderboard-3").fadeOut();
         sym.getComposition().getStage().$("leaderboard-2").fadeOut();
         sym.getComposition().getStage().$("leaderboard-1").fadeOut();

      });
      //Edge binding end

   })("leaderboard-3");
   //Edge symbol end:'leaderboard-3'

   //=========================================================
   
   //Edge symbol: 'personalLeaderboardContent'
   (function(symbolName) {   
   
   })("personalLeaderboardContent");
   //Edge symbol end:'personalLeaderboardContent'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-6099545");