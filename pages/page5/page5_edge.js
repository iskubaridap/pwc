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
                            id: 'page3',
                            type: 'image',
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            opacity: '0.96',
                            fill: ["rgba(0,0,0,0)",im+"City-Images/PwC_Halo_page3.jpg",'0px','0px']
                        },
                        {
                            id: 'whtBG3',
                            symbolName: 'whtBG',
                            type: 'rect',
                            rect: ['90px', '189px', 'null', 'null', 'auto', 'auto'],
                            transform: [[],[],[],['1','1.00095']]
                        },
                        {
                            id: 'audio',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['379', '525', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"D1_04.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'Rectangle',
                            display: 'none',
                            type: 'rect',
                            rect: ['100px', '197px', '1698px', '755px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [10,"rgba(255, 255, 255, 0.498039)","solid"]
                        },
                        {
                            id: 'graph_text',
                            display: 'none',
                            type: 'image',
                            rect: ['328px', '855px', '950px', '51px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text-png/PwC_Halo_page3_Graph_text.png",'0px','0px']
                        },
                        {
                            id: 'page4-appear',
                            symbolName: 'page4-appear',
                            display: 'none',
                            type: 'rect',
                            rect: ['516', '725', '876', '186', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'left_arrow2',
                            symbolName: 'left_arrow',
                            type: 'rect',
                            rect: ['34px', '504px', 'null', 'null', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'right_arrow2',
                            symbolName: 'right_arrow',
                            type: 'rect',
                            rect: ['1844px', '504px', 'null', 'null', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'transcript',
                            symbolName: 'transcript',
                            display: 'none',
                            type: 'rect',
                            rect: ['638px', '806px', '643', '213', 'auto', 'auto']
                        },
                        {
                            id: 'Large_items',
                            type: 'image',
                            rect: ['305px', '250px', '1309px', '668px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Large%20items.jpg",'0px','0px']
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
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid15",
                            "top",
                            0,
                            0,
                            "linear",
                            "${page3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid10",
                            "opacity",
                            2000,
                            1000,
                            "linear",
                            "${page4-appear}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13",
                            "display",
                            0,
                            0,
                            "linear",
                            "${graph_text}",
                            'none',
                            'none'
                        ],
                        [
                            "eid19",
                            "display",
                            0,
                            0,
                            "linear",
                            "${transcript}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16",
                            "opacity",
                            0,
                            2000,
                            "linear",
                            "${page3}",
                            '0.96',
                            '1'
                        ],
                        [
                            "eid17",
                            "opacity",
                            2000,
                            1000,
                            "linear",
                            "${page3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid14",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8",
                            "display",
                            0,
                            0,
                            "linear",
                            "${page4-appear}",
                            'none',
                            'none'
                        ],
                        [
                            "eid9",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${page4-appear}",
                            'none',
                            'none'
                        ],
                            [ "eid18", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${audio}', [] ] ]
                    ]
                }
            },
            "right_arrow": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '40px', '72px', 'auto', 'auto'],
                            id: 'right_arrow_wht',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/other_images/right_arrow_wht.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '40px', '72px', 'auto', 'auto'],
                            id: 'right_arrow_red',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/other_images/right_arrow_red.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '40px', '72px']
                        }
                    }
                },
                timeline: {
                    duration: 1431,
                    autoPlay: true,
                    data: [
                        [
                            "eid30239",
                            "display",
                            0,
                            0,
                            "linear",
                            "${right_arrow_wht}",
                            'block',
                            'block'
                        ],
                        [
                            "eid32942",
                            "display",
                            1096,
                            0,
                            "linear",
                            "${right_arrow_wht}",
                            'block',
                            'block'
                        ],
                        [
                            "eid32959",
                            "display",
                            1431,
                            0,
                            "linear",
                            "${right_arrow_wht}",
                            'block',
                            'block'
                        ],
                        [
                            "eid30238",
                            "display",
                            0,
                            0,
                            "linear",
                            "${right_arrow_red}",
                            'none',
                            'none'
                        ],
                        [
                            "eid32941",
                            "display",
                            1096,
                            0,
                            "linear",
                            "${right_arrow_red}",
                            'none',
                            'none'
                        ],
                        [
                            "eid32958",
                            "display",
                            1431,
                            0,
                            "linear",
                            "${right_arrow_red}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "left_arrow": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '39px', '72px', 'auto', 'auto'],
                            id: 'left_arrow_wht',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/other_images/left_arrow_wht.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '39px', '72px', 'auto', 'auto'],
                            id: 'left_arrow_red',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/other_images/left_arrow_red.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '39px', '72px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid30241",
                            "display",
                            0,
                            0,
                            "linear",
                            "${left_arrow_wht}",
                            'block',
                            'block'
                        ],
                        [
                            "eid30240",
                            "display",
                            0,
                            0,
                            "linear",
                            "${left_arrow_red}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "page4-appear": {
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
                            id: 'Rectangle',
                            stroke: [2, 'rgb(255, 255, 255)', 'solid'],
                            rect: ['0px', '0px', '872px', '182px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['61px', '47px', '757px', '28px', 'auto', 'auto'],
                            id: 'Text2',
                            text: 'Halo for Journals is a powerful tool, enabling all transactions to be analysed at a click of a button. It focuses effort and assists in improving quality and efficiency. ',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [26, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '876px', '186px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
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
            },
            "transcript": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '643px', '213px', 'auto', 'auto'],
                            id: 'Rectangle3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.75)']
                        },
                        {
                            rect: ['27px', '56px', '590px', '121px', 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">We have built technology to analyse and test millions of journals at the click of a button. We’ve built into algorithms the tests we would previously have done manually, and it works on any system.​</p>',
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
                            rect: [null, null, '643px', '213px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("page5_edgeActions.js");
})("EDGE-9339288");
