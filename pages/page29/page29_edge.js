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
                            id: 'PwC_Halo_StreetView',
                            type: 'image',
                            rect: ['0px', '79px', '1922px', '992px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"PwC_Halo_StreetView.jpg",'0px','0px']
                        },
                        {
                            id: 'whtBG',
                            symbolName: 'whtBG',
                            display: 'block',
                            type: 'rect',
                            rect: ['90px', '190px', 'null', 'null', 'auto', 'auto']
                        },
                        {
                            id: 'laptop_large_items',
                            type: 'image',
                            rect: ['341px', '259px', '1238px', '642px', 'auto', 'auto'],
                            opacity: '0.2',
                            fill: ["rgba(0,0,0,0)",im+"laptop_large_items.jpg",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['167px', '301px', '1599px', '295px', 'auto', 'auto'],
                            text: "<b>Summary</b><ul id=\"addBulletSpace\"><li>Halo for Journals is new generation technology that helps identify journals for further testing.</li><li>The engagement team selects which of the 13 available tests they would like to run in Halo.</li><li>Once the Halo tests are selected and run, the engagement team can filter the results to align the journal population for testing with the fraud risks identified at planning.</li><li>The export spreadsheet must include the rationale for running each test and the engagement team’s explanation for applying the chosen parameters. It is important that the link to the specific fraud risks identified by the engagement team is clear.</li></ul>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [29, "px"], "rgba(224,49,30,1.00)", "400", "none solid rgb(196, 196, 196)", "normal", "break-word", ""]
                        },
                        {
                            id: 'audio',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['-430', '938', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"PwC_HALO_D2_18.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'left_arrow_wht2',
                            type: 'image',
                            rect: ['34px', '501px', '39px', '72px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"other_images/left_arrow_wht3.png",'0px','0px']
                        },
                        {
                            id: 'right_arrow_wht2',
                            type: 'image',
                            rect: ['1845px', '501px', '40px', '72px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"other_images/right_arrow_wht4.png",'0px','0px']
                        },
                        {
                            id: 'transcript',
                            symbolName: 'transcript',
                            display: 'none',
                            type: 'rect',
                            rect: ['638px', '806px', '643', '137px', 'auto', 'auto']
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
                    duration: 0,
                    autoPlay: true,
                    data: [
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
                            "eid9",
                            "display",
                            0,
                            0,
                            "linear",
                            "${whtBG}",
                            'block',
                            'block'
                        ],
                            [ "eid10", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${audio}', [] ] ]
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
                            rect: ['0px', '0px', '643px', '137px', 'auto', 'auto'],
                            id: 'Rectangle3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.75)']
                        },
                        {
                            rect: ['27px', '56px', '590px', '81px', 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">Now that you have determined and run a few tests in Halo for Journals, let’s reflect on what you have learnt.​</p>',
                            font: ['Arial, Helvetica, sans-serif', [23, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', ''],
                            type: 'text'
                        },
                        {
                            rect: ['0px', '0px', '643px', '33px', 'auto', 'auto'],
                            id: 'Rectangle4',
                            stroke: [1, 'rgb(173, 43, 46)', 'none'],
                            type: 'rect',
                            fill: ['rgba(193,193,193,1.00)']
                        },
                        {
                            type: 'text',
                            align: 'left',
                            textStyle: ['', '', '', '', 'none'],
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [23, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            text: '<p style=\"margin: 0px;\">​X</p>',
                            id: 'close',
                            rect: ['617px', '4px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '643px', '137px']
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
                            type: 'rect',
                            rect: ['0px', '0px', '1739px', '790px', 'auto', 'auto'],
                            id: 'borderRectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(255,255,255,0.50)'],
                            c: [
                            {
                                type: 'rect',
                                id: 'rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['10px', '10px', '1719px', '769px', 'auto', 'auto'],
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("page29_edgeActions.js");
})("EDGE-9339288");
