/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'Charter': '<link rel=\"stylesheet\" href=\"css/fonts.css\" type=\"text/css\" media=\"screen\" title=\"\" charset=\"utf-8\" />',
            'CharterITCCom-Black': '<link rel=\"stylesheet\" href=\"css/fonts.css\" type=\"text/css\" media=\"screen\" title=\"\" charset=\"utf-8\" />',
            'CharterITCCom-BlackItalic': '<link rel=\"stylesheet\" href=\"css/fonts.css\" type=\"text/css\" media=\"screen\" title=\"\" charset=\"utf-8\" />',
            'CharterITCCom-Bold': '<link rel=\"stylesheet\" href=\"css/fonts.css\" type=\"text/css\" media=\"screen\" title=\"\" charset=\"utf-8\" />',
            'CharterITCCom-BoldItalic': '<link rel=\"stylesheet\" href=\"css/fonts.css\" type=\"text/css\" media=\"screen\" title=\"\" charset=\"utf-8\" />',
            'CharterITCCom-Italic': '<link rel=\"stylesheet\" href=\"css/fonts.css\" type=\"text/css\" media=\"screen\" title=\"\" charset=\"utf-8\" />',
            'CharterITCCom-Regular': '<link rel=\"stylesheet\" href=\"css/fonts.css\" type=\"text/css\" media=\"screen\" title=\"\" charset=\"utf-8\" />'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.1.3.min.js",
            js+"EdgeCommons.js",
            js+"jquery-ui.min.js",
            js+"jquery.ui.touch-punch.min.js",
            js+"popcorn-complete.min.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_8bg',
                            type: 'image',
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"City-Images/PwC_Halo_StreetView.jpg",'0px','0px']
                        },
                        {
                            id: 'whtBG7',
                            symbolName: 'whtBG',
                            type: 'rect',
                            rect: ['91px', '190px', 'null', 'null', 'auto', 'auto']
                        },
                        {
                            id: 'blank-laptop',
                            type: 'image',
                            rect: ['106px', '204px', '1707px', '761px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"other_images/blank-laptop.png",'0px','0px']
                        },
                        {
                            id: 'left_arrow_Red2',
                            type: 'image',
                            rect: ['34px', '500px', '42px', '75px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"other_images/left_arrow_wht.png",'0px','0px']
                        },
                        {
                            id: 'bgm_1',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['1952', '1111', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"D1_11.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'audio',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['639', '921', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"PwC_HALO_D1_12.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'nobadge',
                            display: 'block',
                            type: 'image',
                            rect: ['105px', '204px', '1707px', '761px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"other_images/laptop-score-no-badge.jpg",'0px','0px']
                        },
                        {
                            id: 'bronze',
                            display: 'none',
                            type: 'image',
                            rect: ['105px', '204px', '1707px', '761px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"other_images/laptop-score-bronze.jpg",'0px','0px']
                        },
                        {
                            id: 'silver',
                            display: 'none',
                            type: 'image',
                            rect: ['105px', '204px', '1707px', '761px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"other_images/laptop-score-silver.jpg",'0px','0px']
                        },
                        {
                            id: 'gold',
                            display: 'none',
                            type: 'image',
                            rect: ['105px', '204px', '1707px', '761px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"other_images/laptop-score-gold.jpg",'0px','0px']
                        },
                        {
                            id: 'close_text',
                            type: 'text',
                            rect: ['711px', '893px', 'auto', 'auto', 'auto', 'auto'],
                            text: "To exit this course, close your browser window.",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(230,62,44,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Halo_Quest_Continues',
                            type: 'text',
                            rect: ['525px', '658px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Your Halo Quest continues:<br>Halo for Journals: Level 1 scenarios",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [22, "px"], "rgba(149,139,108,1.00)", "400", "none solid rgb(255, 0, 0)", "italic", "break-word", "nowrap"]
                        },
                        {
                            id: 'journal-score',
                            type: 'text',
                            rect: ['525px', '479px', '351px', '28px', 'auto', 'auto'],
                            text: "9999 points out of 9999 points",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [22, "px"], "rgba(173,43,46,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""]
                        },
                        {
                            id: 'Journals_in_Action',
                            type: 'text',
                            rect: ['525px', '449px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Halo for Journals in Action:",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [22, "px"], "rgba(149,139,108,1.00)", "400", "none solid rgb(255, 0, 0)", "italic", "break-word", "nowrap"]
                        },
                        {
                            id: 'halo-score',
                            type: 'text',
                            rect: ['525px', '402px', '351px', '28px', 'auto', 'auto'],
                            text: "9999 points out of 9999 points",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [22, "px"], "rgba(173,43,46,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""]
                        },
                        {
                            id: 'Hello_Halo',
                            type: 'text',
                            rect: ['525px', '371px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Introducing Halo for Journals:",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [22, "px"], "rgba(149,139,108,1.00)", "400", "none solid rgb(255, 0, 0)", "italic", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['91px', '137px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Halo for Journals: Introduction",
                            align: "left",
                            font: ['Georgia, \'Times New Roman\', Times, serif', [25, "px"], "rgba(255,255,255,1.00)", "400", "none solid rgb(255, 0, 0)", "italic", "break-word", "nowrap"]
                        },
                        {
                            id: 'closeWindowBG',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0.80)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'closeWindow',
                            display: 'none',
                            type: 'rect',
                            rect: ['557px', '316px', '804px', '382px', 'auto', 'auto'],
                            borderRadius: ["20px", "20px", "20px", "20px 20px"],
                            fill: ["rgba(255,0,0,0.80)",[270,[['rgba(255,219,127,1.00)',0],['rgba(189,152,69,1.00)',100]]]],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'closeCourse',
                            display: 'none',
                            type: 'text',
                            rect: ['589px', '450px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<b>Course complete.</b> <br>Please close your browser window. ",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [45, "px"], "rgba(103,42,0,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'transcript',
                            symbolName: 'transcript',
                            display: 'none',
                            type: 'rect',
                            rect: ['638px', '806px', '643', '135px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1920px', '1080px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid14",
                            "display",
                            0,
                            0,
                            "linear",
                            "${silver}",
                            'none',
                            'none'
                        ],
                        [
                            "eid15",
                            "display",
                            909,
                            0,
                            "linear",
                            "${silver}",
                            'none',
                            'none'
                        ],
                        [
                            "eid9",
                            "display",
                            0,
                            0,
                            "linear",
                            "${closeCourse}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11",
                            "display",
                            0,
                            0,
                            "linear",
                            "${closeWindowBG}",
                            'none',
                            'none'
                        ],
                        [
                            "eid18",
                            "display",
                            0,
                            0,
                            "linear",
                            "${nobadge}",
                            'block',
                            'block'
                        ],
                        [
                            "eid19",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${left_arrow_Red2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid8",
                            "display",
                            0,
                            0,
                            "linear",
                            "${transcript}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12",
                            "display",
                            0,
                            0,
                            "linear",
                            "${gold}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13",
                            "display",
                            909,
                            0,
                            "linear",
                            "${gold}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bronze}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17",
                            "display",
                            909,
                            0,
                            "linear",
                            "${bronze}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10",
                            "display",
                            0,
                            0,
                            "linear",
                            "${closeWindow}",
                            'none',
                            'none'
                        ],
                            [ "eid21", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${bgm_1}', [] ] ],
                            [ "eid20", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${audio}', [] ] ]
                    ]
                }
            },
            "transcript": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '643px', '135px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,0.75)']
                        },
                        {
                            rect: ['27px', '56px', '590px', '81px', 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">Congratulations on completing your Halo for Journals: Introduction Halo Quest!​</p>',
                            type: 'text',
                            font: ['Arial, Helvetica, sans-serif', [23, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', '']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle4',
                            stroke: [1, 'rgb(173, 43, 46)', 'none'],
                            rect: ['0px', '0px', '643px', '33px', 'auto', 'auto'],
                            fill: ['rgba(193,193,193,1.00)']
                        },
                        {
                            type: 'text',
                            align: 'left',
                            textStyle: ['', '', '', '', 'none'],
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [23, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            rect: ['617px', '4px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'close',
                            text: '<p style=\"margin: 0px;\">​X</p>'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '643px', '135px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "whtBG": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1739px', '790px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'borderRectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(255,255,255,0.50)'],
                            c: [
                            {
                                rect: ['10px', '10px', '1719px', '769px', 'auto', 'auto'],
                                id: 'rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(255,255,255,1)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1739px', '790px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid45132",
                            "border-color",
                            0,
                            0,
                            "linear",
                            "${borderRectangle}",
                            'rgb(0, 0, 0)',
                            'rgb(0, 0, 0)'
                        ],
                        [
                            "eid45131",
                            "border-color",
                            0,
                            0,
                            "linear",
                            "${rectangle}",
                            'rgb(0, 0, 0)',
                            'rgb(0, 0, 0)'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("page30_edgeActions.js");
})("EDGE-9339288");
