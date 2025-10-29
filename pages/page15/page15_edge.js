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
                            id: 'laptop',
                            type: 'image',
                            rect: ['0px', '43px', '1920px', '988px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"laptop.jpg",'0px','0px']
                        },
                        {
                            id: 'transcript',
                            symbolName: 'transcript',
                            display: 'none',
                            type: 'rect',
                            rect: ['638px', '806px', '643', '213', 'auto', 'auto']
                        },
                        {
                            id: 'right_arrow',
                            type: 'image',
                            rect: ['1844px', '501px', '40px', '72px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"other_images/right_arrow_red2.png",'0px','0px']
                        },
                        {
                            id: 'left_arrow',
                            type: 'image',
                            rect: ['34px', '501px', '39px', '72px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"other_images/left_arrow_red2.png",'0px','0px']
                        },
                        {
                            id: 'info-icon',
                            display: 'block',
                            type: 'image',
                            rect: ['50px', '1011px', '30px', '30px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"other_images/info-icon.png",'0px','0px']
                        },
                        {
                            id: 'instruction',
                            display: 'block',
                            type: 'text',
                            rect: ['91px', '1011px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '1',
                            text: "Click each Halo for Journals test name to reveal the description",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [25, "px"], "rgba(255,0,46,1.00)", "400", "none solid rgb(255, 0, 0)", "italic", "break-word", "nowrap"]
                        },
                        {
                            id: 'allData',
                            type: 'rect',
                            rect: ['375px', '446px', '249px', '11px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(255,255,255,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'backdatedItems',
                            type: 'rect',
                            rect: ['375px', '461px', '249px', '11px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(255,255,255,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'benfordsLaw',
                            type: 'rect',
                            rect: ['375px', '474px', '249px', '11px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(255,255,255,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'createAndApprove',
                            type: 'rect',
                            rect: ['375px', '487px', '249px', '11px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(255,255,255,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'duplicatesAndReversals',
                            type: 'rect',
                            rect: ['376px', '501px', '249px', '11px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(255,255,255,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'largeEntries',
                            type: 'rect',
                            rect: ['376px', '513px', '249px', '11px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(255,255,255,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'largeItems',
                            type: 'rect',
                            rect: ['376px', '527px', '249px', '11px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(255,255,255,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'postCloseEntries',
                            type: 'rect',
                            rect: ['376px', '540px', '249px', '11px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(255,255,255,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'unexpectedAccountCombinations',
                            type: 'rect',
                            rect: ['376px', '553px', '249px', '11px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(255,255,255,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'unexpectedUsers',
                            type: 'rect',
                            rect: ['376px', '567px', '249px', '11px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(255,255,255,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'unusualAmounts',
                            type: 'rect',
                            rect: ['376px', '580px', '249px', '11px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(255,255,255,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'unusualTimes',
                            type: 'rect',
                            rect: ['376px', '593px', '249px', '11px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(255,255,255,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'unusualWords',
                            type: 'rect',
                            rect: ['377px', '606px', '249px', '11px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(255,255,255,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'allDataBox',
                            symbolName: 'allDataBox',
                            display: 'none',
                            type: 'rect',
                            rect: ['626px', '416px', '500px', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'backdatedItemsBox',
                            symbolName: 'backdatedItemsBox',
                            display: 'none',
                            type: 'rect',
                            rect: ['624px', '431px', '600px', '90px', 'auto', 'auto']
                        },
                        {
                            id: 'benfordsLawBox',
                            symbolName: 'benfordsLawBox',
                            display: 'none',
                            type: 'rect',
                            rect: ['624px', '350px', '600px', '260px', 'auto', 'auto']
                        },
                        {
                            id: 'createAndApproveBox',
                            symbolName: 'createAndApproveBox',
                            display: 'none',
                            type: 'rect',
                            rect: ['624px', '448px', '600px', '90px', 'auto', 'auto']
                        },
                        {
                            id: 'duplicatesAndReversalsBox',
                            symbolName: 'duplicatesAndReversalsBox',
                            display: 'none',
                            type: 'rect',
                            rect: ['624px', '454px', '600px', '105px', 'auto', 'auto']
                        },
                        {
                            id: 'largeEntriesBox',
                            symbolName: 'largeEntriesBox',
                            display: 'none',
                            type: 'rect',
                            rect: ['624px', '456px', '600px', '125px', 'auto', 'auto']
                        },
                        {
                            id: 'largeItemsBox',
                            symbolName: 'largeItemsBox',
                            display: 'none',
                            type: 'rect',
                            rect: ['624px', '480px', '600px', '105px', 'auto', 'auto']
                        },
                        {
                            id: 'postCloseEntriesBox',
                            symbolName: 'postCloseEntriesBox',
                            display: 'none',
                            type: 'rect',
                            rect: ['624px', '493px', '600px', '105px', 'auto', 'auto']
                        },
                        {
                            id: 'unexpectedAccountCombinationsBox',
                            symbolName: 'unexpectedAccountCombinationsBox',
                            display: 'none',
                            type: 'rect',
                            rect: ['624px', '474px', '610px', '170px', 'auto', 'auto']
                        },
                        {
                            id: 'unexpectedUsersBox',
                            symbolName: 'unexpectedUsersBox',
                            display: 'none',
                            type: 'rect',
                            rect: ['624px', '512px', '600px', '120px', 'auto', 'auto']
                        },
                        {
                            id: 'unusualAmountsBox',
                            symbolName: 'unusualAmountsBox',
                            display: 'none',
                            type: 'rect',
                            rect: ['624px', '541px', '600px', '90px', 'auto', 'auto']
                        },
                        {
                            id: 'unusualTimesBox',
                            symbolName: 'unusualTimesBox',
                            display: 'none',
                            type: 'rect',
                            rect: ['624px', '539px', '600px', '120px', 'auto', 'auto']
                        },
                        {
                            id: 'unusualWordsBox',
                            symbolName: 'unusualWordsBox',
                            display: 'none',
                            type: 'rect',
                            rect: ['624px', '567px', 'undefined', 'undefined', 'auto', 'auto']
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
                            "eid21",
                            "display",
                            0,
                            0,
                            "linear",
                            "${unusualTimesBox}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17",
                            "display",
                            0,
                            0,
                            "linear",
                            "${unexpectedAccountCombinationsBox}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16",
                            "display",
                            0,
                            0,
                            "linear",
                            "${postCloseEntriesBox}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14",
                            "display",
                            0,
                            0,
                            "linear",
                            "${largeEntriesBox}",
                            'none',
                            'none'
                        ],
                        [
                            "eid15",
                            "display",
                            0,
                            0,
                            "linear",
                            "${largeItemsBox}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11",
                            "display",
                            0,
                            0,
                            "linear",
                            "${benfordsLawBox}",
                            'none',
                            'none'
                        ],
                        [
                            "eid20",
                            "display",
                            0,
                            0,
                            "linear",
                            "${unusualWordsBox}",
                            'none',
                            'none'
                        ],
                        [
                            "eid9",
                            "display",
                            0,
                            0,
                            "linear",
                            "${allDataBox}",
                            'none',
                            'none'
                        ],
                        [
                            "eid18",
                            "display",
                            0,
                            0,
                            "linear",
                            "${unexpectedUsersBox}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13",
                            "display",
                            0,
                            0,
                            "linear",
                            "${duplicatesAndReversalsBox}",
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
                            "eid10",
                            "display",
                            0,
                            0,
                            "linear",
                            "${backdatedItemsBox}",
                            'none',
                            'none'
                        ],
                        [
                            "eid19",
                            "display",
                            0,
                            0,
                            "linear",
                            "${unusualAmountsBox}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12",
                            "display",
                            0,
                            0,
                            "linear",
                            "${createAndApproveBox}",
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
            },
            "box": {
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
                            id: 'Rectangle14',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '35px', '100px', '2px', 'auto', 'auto'],
                            fill: ['rgba(255,0,0,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle15',
                            stroke: [2, 'rgba(255,0,0,1.00)', 'solid'],
                            rect: ['100px', '0px', '496px', '68px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,0,0,1.00)', '700', 'none', '', 'break-word', 'nowrap'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Text</p>',
                            type: 'text',
                            rect: ['108px', '8px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            align: 'left',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​Text</p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['108px', '41px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '500px', '72px']
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
            "allDataBox": {
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
                            id: 'Rectangle14',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '35px', '100px', '2px', 'auto', 'auto'],
                            fill: ['rgba(255,0,0,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle15',
                            stroke: [2, 'rgba(255,0,0,1.00)', 'solid'],
                            rect: ['100px', '0px', '396px', '68px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,0,0,1.00)', '700', 'none', '', 'break-word', 'nowrap'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​All data</p>',
                            type: 'text',
                            rect: ['108px', '8px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            align: 'left',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​Returns journal entries based on user specified criteria.&nbsp;</p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['108px', '41px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '501px', '72px']
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
            "backdatedItemsBox": {
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
                            id: 'Rectangle14',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '35px', '100px', '2px', 'auto', 'auto'],
                            fill: ['rgba(255,0,0,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle15',
                            stroke: [2, 'rgba(255,0,0,1.00)', 'solid'],
                            rect: ['100px', '0px', '496px', '86px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,0,0,1.00)', '700', 'none', '', 'break-word', 'nowrap'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Backdated items</p>',
                            type: 'text',
                            rect: ['108px', '8px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            align: 'left',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​Identifies entries with an effective date backdated from the entry date.</p><p style=\"margin: 0px;\">The user selects the minimum number of days to show as ‘backdated’.</p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['108px', '41px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '600px', '90px']
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
            "benfordsLawBox": {
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
                            id: 'Rectangle14',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '128px', '100px', '2px', 'auto', 'auto'],
                            fill: ['rgba(255,0,0,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle15',
                            stroke: [2, 'rgba(255,0,0,1.00)', 'solid'],
                            rect: ['100px', '0px', '496px', '256px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,0,0,1.00)', '700', 'none', '', 'break-word', 'nowrap'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Benford’s Law</p>',
                            type: 'text',
                            rect: ['108px', '8px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            align: 'left',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​Benford\'s Law is a mathematical theory which states that in lists of</p><p style=\"margin: 0px;\">numbers from many (but not all) real-life sources of data, the leading</p><p style=\"margin: 0px;\">digit is distributed in a specific, non-uniform way. This Halo test compares</p><p style=\"margin: 0px;\">the distribution of the journals against the theoretical one from Benford’s</p><p style=\"margin: 0px;\">Law. According to Benford’s Law, the first digit is 1 almost one third of the</p><p style=\"margin: 0px;\">time, and larger digits occur as the leading digit with lower and lower</p><p style=\"margin: 0px;\">frequency, to the point where 9 as a first digit occurs less than one time</p><p style=\"margin: 0px;\">in twenty.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​This can be applied as simple and effective tool for the detection of</p><p style=\"margin: 0px;\">irregularities indicating possible error, fraud, manipulative bias or</p><p style=\"margin: 0px;\">processing inefficiency.</p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['108px', '41px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '600px', '260px']
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
            "createAndApproveBox": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '44px', '100px', '2px', 'auto', 'auto'],
                            id: 'Rectangle14',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,1.00)']
                        },
                        {
                            rect: ['100px', '0px', '496px', '86px', 'auto', 'auto'],
                            id: 'Rectangle15',
                            stroke: [2, 'rgba(255,0,0,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['108px', '8px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Create and approve</p>',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,0,0,1.00)', '700', 'none', '', 'break-word', 'nowrap'],
                            type: 'text'
                        },
                        {
                            rect: ['108px', '41px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            text: '<p style=\"margin: 0px;\">​Identifies journals that are created and approved by the same person or</p><p style=\"margin: 0px;\">where there is no creator and/or approver.</p>',
                            id: 'Text3',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '600px', '90px']
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
            "duplicatesAndReversalsBox": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '51px', '100px', '2px', 'auto', 'auto'],
                            id: 'Rectangle14',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,1.00)']
                        },
                        {
                            rect: ['100px', '0px', '496px', '101px', 'auto', 'auto'],
                            id: 'Rectangle15',
                            stroke: [2, 'rgba(255,0,0,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['108px', '8px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Duplicates and reversals</p>',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,0,0,1.00)', '700', 'none', '', 'break-word', 'nowrap'],
                            type: 'text'
                        },
                        {
                            rect: ['108px', '41px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            text: '<p style=\"margin: 0px;\">​Identifies journals which are apparent duplicates or reversals of each</p><p style=\"margin: 0px;\">other, based on having the same or opposite net debit and credit</p><p style=\"margin: 0px;\">amounts to the same accounts.</p>',
                            id: 'Text3',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '600px', '105px']
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
            "largeEntriesBox": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '62px', '100px', '2px', 'auto', 'auto'],
                            id: 'Rectangle14',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,1.00)']
                        },
                        {
                            rect: ['100px', '0px', '496px', '121px', 'auto', 'auto'],
                            id: 'Rectangle15',
                            stroke: [2, 'rgba(255,0,0,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['108px', '8px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Large entries</p>',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,0,0,1.00)', '700', 'none', '', 'break-word', 'nowrap'],
                            type: 'text'
                        },
                        {
                            rect: ['108px', '41px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            text: '<p style=\"margin: 0px;\">​Identifies large journal entries based upon the journal entry total. The</p><p style=\"margin: 0px;\">user can select entries which are either greater than an absolute amount,</p><p style=\"margin: 0px;\">or are in the top X entries in terms of value, and can choose to see all</p><p style=\"margin: 0px;\">entries, limit to P&amp;L impact, or specify FSLI category or GL&nbsp;account.</p>',
                            id: 'Text3',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '600px', '125px']
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
            "largeItemsBox": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '52px', '100px', '2px', 'auto', 'auto'],
                            id: 'Rectangle14',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,1.00)']
                        },
                        {
                            rect: ['100px', '0px', '496px', '101px', 'auto', 'auto'],
                            id: 'Rectangle15',
                            stroke: [2, 'rgba(255,0,0,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['108px', '8px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Large items</p>',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,0,0,1.00)', '700', 'none', '', 'break-word', 'nowrap'],
                            type: 'text'
                        },
                        {
                            rect: ['108px', '41px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            text: '<p style=\"margin: 0px;\">​Identifies large line items within journal entries. The user can select lines</p><p style=\"margin: 0px;\">which are either greater than an absolute amount, or are in the top X</p><p style=\"margin: 0px;\">lines in terms of value.</p>',
                            id: 'Text3',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '600px', '105px']
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
            "postCloseEntriesBox": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '52px', '100px', '2px', 'auto', 'auto'],
                            id: 'Rectangle14',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,1.00)']
                        },
                        {
                            rect: ['100px', '0px', '496px', '101px', 'auto', 'auto'],
                            id: 'Rectangle15',
                            stroke: [2, 'rgba(255,0,0,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['108px', '8px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Post close entries</p>',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,0,0,1.00)', '700', 'none', '', 'break-word', 'nowrap'],
                            type: 'text'
                        },
                        {
                            rect: ['108px', '41px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            text: '<p style=\"margin: 0px;\">​Identifies entries with an effective date backdated from the entry date,</p><p style=\"margin: 0px;\">where the entry date is after the general ledger close date and the</p><p style=\"margin: 0px;\">effective date is before the period end.</p>',
                            id: 'Text3',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '600px', '105px']
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
            "unexpectedAccountCombinationsBox": {
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
                            id: 'Rectangle14',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '85px', '100px', '2px', 'auto', 'auto'],
                            fill: ['rgba(255,0,0,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle15',
                            stroke: [2, 'rgba(255,0,0,1.00)', 'solid'],
                            rect: ['100px', '0px', '506px', '166px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Unexpected account combinations</p>',
                            rect: ['108px', '8px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,0,0,1.00)', '700', 'none', '', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['108px', '41px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text3',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​Identifies journals where the credit and debit combination does not match</p><p style=\"margin: 0px;\">expectations in that there is either:</p><ul><li>a net debit or credit to one or more specified accounts without<br> a matching offset to expected account(s) (exclusive) or;</li><li>a net debit or credit to one or more specified accounts<br> with an offsetting entry to a specified unexpected account (inclusive).</li></ul>',
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '610px', '170px']
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
            "unexpectedUsersBox": {
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
                            id: 'Rectangle14',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '60px', '100px', '2px', 'auto', 'auto'],
                            fill: ['rgba(255,0,0,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle15',
                            stroke: [2, 'rgba(255,0,0,1.00)', 'solid'],
                            rect: ['100px', '0px', '496px', '116px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Unexpected users</p>',
                            rect: ['108px', '8px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,0,0,1.00)', '700', 'none', '', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['108px', '41px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text3',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​Identifies entries posted by unexpected users. User will have the option</p><p style=\"margin: 0px;\">to display journals posted by one or more selected User IDs (selected)</p><p style=\"margin: 0px;\">or show entries NOT posted by one or more selected User IDs, but</p><p style=\"margin: 0px;\">were made by someone else (unselected).</p>',
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '600px', '120px']
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
            "unusualAmountsBox": {
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
                            id: 'Rectangle14',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '45px', '100px', '2px', 'auto', 'auto'],
                            fill: ['rgba(255,0,0,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle15',
                            stroke: [2, 'rgba(255,0,0,1.00)', 'solid'],
                            rect: ['100px', '0px', '496px', '86px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Unusual amounts</p>',
                            rect: ['108px', '8px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,0,0,1.00)', '700', 'none', '', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['108px', '41px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text3',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​Allows the user to search for line Reporting Amounts matching specific</p><p style=\"margin: 0px;\">patterns (e.g., 999.99)</p>',
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '600px', '90px']
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
            "unusualWordsBox": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '44px', '100px', '2px', 'auto', 'auto'],
                            id: 'Rectangle14',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,1.00)']
                        },
                        {
                            rect: ['100px', '0px', '496px', '86px', 'auto', 'auto'],
                            id: 'Rectangle15',
                            stroke: [2, 'rgba(255,0,0,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,0,0,1.00)', '700', 'none', '', 'break-word', 'nowrap'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Unusual words</p>',
                            type: 'text',
                            rect: ['108px', '8px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​Identifies journal entries where the journal or line description contains a</p><p style=\"margin: 0px;\">specified string of text.</p>',
                            align: 'left',
                            rect: ['108px', '41px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '600px', '90px']
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
            "unusualTimesBox": {
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
                            id: 'Rectangle14',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '60px', '100px', '2px', 'auto', 'auto'],
                            fill: ['rgba(255,0,0,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle15',
                            stroke: [2, 'rgba(255,0,0,1.00)', 'solid'],
                            rect: ['100px', '0px', '496px', '116px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['108px', '8px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Unusual times</p>',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,0,0,1.00)', '700', 'none', '', 'break-word', 'nowrap'],
                            type: 'text'
                        },
                        {
                            rect: ['108px', '41px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​Allows the user to search for journals having lines with an entry time</p><p style=\"margin: 0px;\">between two selected times, including periods going over midnight.</p><p style=\"margin: 0px;\">It also identifies entries posted on specific dates or specific days of the</p><p style=\"margin: 0px;\">week, including weekends, as selected by the user.</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '600px', '120px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("page15_edgeActions.js");
})("EDGE-9339288");
