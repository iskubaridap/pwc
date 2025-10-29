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
                            id: 'transcript',
                            symbolName: 'transcript',
                            display: 'none',
                            type: 'rect',
                            rect: ['638px', '806px', '643', '213', 'auto', 'auto']
                        },
                        {
                            id: '_11_quality',
                            type: 'image',
                            rect: ['162px', '133px', '1596px', '814px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"11_quality.jpg",'0px','0px']
                        },
                        {
                            id: 'green1',
                            display: 'none',
                            type: 'rect',
                            rect: ['542px', '333px', '18px', '86px', 'auto', 'auto'],
                            overflow: 'visible',
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [2,"rgba(255,0,0,1.00)","solid"],
                            userClass: "noBG"
                        },
                        {
                            id: 'green2',
                            display: 'none',
                            type: 'rect',
                            rect: ['542px', '440px', '18px', '35px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [2,"rgba(255,0,0,1.00)","solid"],
                            userClass: "noBG"
                        },
                        {
                            id: 'testBtn',
                            type: 'rect',
                            rect: ['192px', '248px', '104px', '116px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(255,255,255,0.00)"],
                            stroke: [2,"rgb(255, 0, 0)","none"]
                        },
                        {
                            id: 'right_arrow',
                            type: 'image',
                            rect: ['1844px', '501px', '40px', '72px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"other_images/right_arrow_red.png",'0px','0px']
                        },
                        {
                            id: 'left_arrow',
                            type: 'image',
                            rect: ['34px', '501px', '39px', '72px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"other_images/left_arrow_red.png",'0px','0px']
                        },
                        {
                            id: 'red',
                            display: 'none',
                            type: 'rect',
                            rect: ['542px', '420px', '18px', '20px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [2,"rgba(255,0,0,1.00)","solid"],
                            userClass: "noBG"
                        },
                        {
                            id: 'hlTab',
                            display: 'none',
                            type: 'rect',
                            rect: ['545px', '246px', '881px', '27px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [2,"rgb(255, 0, 0)","solid"],
                            userClass: "noBG"
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
                            "eid10",
                            "display",
                            0,
                            0,
                            "linear",
                            "${red}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12",
                            "display",
                            0,
                            0,
                            "linear",
                            "${hlTab}",
                            'none',
                            'none'
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
                            "eid11",
                            "display",
                            0,
                            0,
                            "linear",
                            "${green2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid9",
                            "display",
                            0,
                            0,
                            "linear",
                            "${green1}",
                            'none',
                            'none'
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
                            rect: ['27px', '56px', '590px', '81px', 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">In this module, you will learn about Halo Performance Analyser and explore its functions and features.<br/><br/>Click the bubble to begin.</p><p style=\"margin: 0px;\"></p>',
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
                            id: 'close',
                            text: '<p style=\"margin: 0px;\">​X</p>',
                            cursor: 'pointer',
                            rect: ['617px', '4px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [23, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            textStyle: ['', '', '', '', 'none']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("page12_edgeActions.js");
})("EDGE-9339288");
