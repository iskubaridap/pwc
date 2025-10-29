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
                            rect: ['1px', '-3px', '1920px', '1080px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"City-Images/PwC_Halo_page3.jpg",'0px','0px']
                        },
                        {
                            id: 'whtBG',
                            symbolName: 'whtBG',
                            display: 'block',
                            type: 'rect',
                            rect: ['91', '189', '1739', '790', 'auto', 'auto']
                        },
                        {
                            id: 'dropgraphic2',
                            type: 'image',
                            rect: ['170px', '247px', '1581px', '673px', 'auto', 'auto'],
                            opacity: '0.99000000953674',
                            fill: ["rgba(0,0,0,0)",im+"City-Images/PwC_Halo_page5_content.jpg",'0px','0px']
                        },
                        {
                            id: 'info-icon_2',
                            type: 'image',
                            rect: ['173px', '863px', '42px', '42px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"other_images/info-icon_2.png",'0px','0px'],
                            transform: [[],[],[],['0.78633','0.78633']]
                        },
                        {
                            id: 'info-icon',
                            display: 'block',
                            type: 'image',
                            rect: ['178px', '867px', '33px', '33px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"other_images/info-icon.png",'0px','0px']
                        },
                        {
                            id: 'click_on_the',
                            display: 'block',
                            type: 'text',
                            rect: ['225px', '872px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Click on the benefit then click on the corresponding reason why",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [22, "px"], "rgba(255,0,0,1)", "400", "none solid rgb(255, 0, 0)", "italic", "break-word", "nowrap"]
                        },
                        {
                            id: 'drag1',
                            symbolName: 'drag1',
                            type: 'rect',
                            rect: ['1218px', '584px', '518px', '238px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1'
                        },
                        {
                            id: 'resetScoreBtn',
                            symbolName: 'resetScoreBtn',
                            type: 'rect',
                            rect: ['178px', '912px', '197px', '46', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'drag2',
                            symbolName: 'drag2',
                            type: 'rect',
                            rect: ['176px', '584px', '518px', '238px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1'
                        },
                        {
                            id: 'drag3',
                            symbolName: 'drag3',
                            type: 'rect',
                            rect: ['697px', '584px', '518px', '238px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1'
                        },
                        {
                            id: 'drop1',
                            symbolName: 'drop1',
                            type: 'rect',
                            rect: ['205px', '287px', '460px', '273px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0'
                        },
                        {
                            id: 'drop2',
                            symbolName: 'drop2',
                            type: 'rect',
                            rect: ['722px', '287px', '460px', '273px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1'
                        },
                        {
                            id: 'drop3',
                            symbolName: 'drop3',
                            type: 'rect',
                            rect: ['1255px', '287px', '460px', '273px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0'
                        },
                        {
                            id: 'drop13',
                            symbolName: 'drop1',
                            type: 'rect',
                            rect: ['205px', '287px', 'null', 'null', 'auto', 'auto']
                        },
                        {
                            id: 'drop22',
                            symbolName: 'drop2',
                            type: 'rect',
                            rect: ['722', '287', 'null', 'null', 'auto', 'auto']
                        },
                        {
                            id: 'drop32',
                            symbolName: 'drop3',
                            type: 'rect',
                            rect: ['1255', '287', 'null', 'null', 'auto', 'auto']
                        },
                        {
                            id: 'halo-bonus',
                            type: 'image',
                            rect: ['1670px', '834px', '51px', '51px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"other_images/halo-bonus.png",'0px','0px'],
                            transform: [[],[],[],['0.98','0.98']]
                        },
                        {
                            id: 'audio',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['1137', '584', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"D1_05.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'redarrowright3',
                            symbolName: 'right_arrow',
                            type: 'rect',
                            rect: ['1844px', '501px', 'null', 'null', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1'
                        },
                        {
                            id: 'redarrowLeft3',
                            symbolName: 'left_arrow',
                            type: 'rect',
                            rect: ['33px', '501px', 'null', 'null', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'correctTxt',
                            type: 'text',
                            rect: ['543px', '705px', '890px', '54px', 'auto', 'auto'],
                            text: "Congratulations!  You are correct!",
                            align: "center",
                            font: ['Times New Roman, Times, serif', [38, "px"], "rgba(226,63,30,1.00)", "400", "none solid rgb(173, 43, 46)", "italic", "break-word", "normal"]
                        },
                        {
                            id: 'wrong',
                            display: 'none',
                            type: 'text',
                            rect: ['878px', '595px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Try Again",
                            align: "center",
                            font: ['\'Times New Roman\', Times, serif', [33, "px"], "rgba(226,63,30,1)", "400", "none solid rgb(226, 63, 30)", "italic", "break-word", "nowrap"]
                        },
                        {
                            id: 'Rectangle',
                            display: 'none',
                            type: 'rect',
                            rect: ['106px', '209px', '1707px', '752px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'transcript',
                            symbolName: 'transcript',
                            display: 'none',
                            type: 'rect',
                            rect: ['638px', '806px', '643', '145px', 'auto', 'auto']
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
                            "eid46",
                            "display",
                            0,
                            0,
                            "linear",
                            "${whtBG}",
                            'block',
                            'block'
                        ],
                        [
                            "eid40",
                            "opacity",
                            1006,
                            572,
                            "linear",
                            "${info-icon_2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid44",
                            "left",
                            0,
                            0,
                            "linear",
                            "${dropgraphic2}",
                            '170px',
                            '170px'
                        ],
                        [
                            "eid27",
                            "opacity",
                            1000,
                            416,
                            "linear",
                            "${drag3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid37",
                            "display",
                            0,
                            0,
                            "linear",
                            "${info-icon}",
                            'block',
                            'block'
                        ],
                        [
                            "eid38",
                            "display",
                            1996,
                            0,
                            "linear",
                            "${info-icon}",
                            'block',
                            'none'
                        ],
                        [
                            "eid8",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'none'
                        ],
                        [
                            "eid9",
                            "display",
                            999,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid19",
                            "top",
                            0,
                            0,
                            "linear",
                            "${drop2}",
                            '287px',
                            '287px'
                        ],
                        [
                            "eid23",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${drop1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid24",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${drop1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid25",
                            "opacity",
                            1416,
                            0,
                            "linear",
                            "${drop1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12",
                            "display",
                            0,
                            0,
                            "linear",
                            "${wrong}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${redarrowright3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid14",
                            "top",
                            0,
                            0,
                            "linear",
                            "${halo-bonus}",
                            '834px',
                            '834px'
                        ],
                        [
                            "eid32",
                            "top",
                            0,
                            0,
                            "linear",
                            "${drag1}",
                            '584px',
                            '584px'
                        ],
                        [
                            "eid30",
                            "opacity",
                            1000,
                            416,
                            "linear",
                            "${drag2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid39",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${info-icon}",
                            '1',
                            '1'
                        ],
                        [
                            "eid42",
                            "height",
                            0,
                            0,
                            "linear",
                            "${dropgraphic2}",
                            '673px',
                            '673px'
                        ],
                        [
                            "eid47",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${page3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid15",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${halo-bonus}",
                            '1',
                            '1'
                        ],
                        [
                            "eid16",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${halo-bonus}",
                            '0.94',
                            '0'
                        ],
                        [
                            "eid10",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11",
                            "opacity",
                            1001,
                            999,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20",
                            "opacity",
                            0,
                            894,
                            "linear",
                            "${drop2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21",
                            "opacity",
                            906,
                            0,
                            "linear",
                            "${drop2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid43",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${dropgraphic2}",
                            '0.99',
                            '0'
                        ],
                        [
                            "eid45",
                            "width",
                            0,
                            0,
                            "linear",
                            "${dropgraphic2}",
                            '1581px',
                            '1581px'
                        ],
                        [
                            "eid22",
                            "left",
                            0,
                            0,
                            "linear",
                            "${drop2}",
                            '722px',
                            '722px'
                        ],
                        [
                            "eid36",
                            "display",
                            0,
                            0,
                            "linear",
                            "${click_on_the}",
                            'block',
                            'block'
                        ],
                        [
                            "eid33",
                            "opacity",
                            1000,
                            416,
                            "linear",
                            "${drag1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid34",
                            "left",
                            0,
                            0,
                            "linear",
                            "${drag1}",
                            '1218px',
                            '1218px'
                        ],
                        [
                            "eid35",
                            "left",
                            994,
                            0,
                            "linear",
                            "${drag1}",
                            '1218px',
                            '1215px'
                        ],
                        [
                            "eid31",
                            "left",
                            0,
                            0,
                            "linear",
                            "${drag2}",
                            '176px',
                            '176px'
                        ],
                        [
                            "eid28",
                            "left",
                            0,
                            0,
                            "linear",
                            "${drag3}",
                            '697px',
                            '697px'
                        ],
                        [
                            "eid26",
                            "top",
                            0,
                            0,
                            "linear",
                            "${drag3}",
                            '584px',
                            '584px'
                        ],
                        [
                            "eid49",
                            "display",
                            0,
                            0,
                            "linear",
                            "${transcript}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17",
                            "opacity",
                            0,
                            946,
                            "linear",
                            "${drop3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid18",
                            "opacity",
                            968,
                            0,
                            "linear",
                            "${drop3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid41",
                            "top",
                            0,
                            0,
                            "linear",
                            "${dropgraphic2}",
                            '247px',
                            '247px'
                        ],
                        [
                            "eid29",
                            "top",
                            0,
                            0,
                            "linear",
                            "${drag2}",
                            '584px',
                            '584px'
                        ],
                            [ "eid48", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${audio}', [] ] ]
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
            "drop3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0', '95px', '460px', '180px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RoundRect3Copy',
                            opacity: 1,
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['0px', '95px', '460px', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(232,61,44,1.00)', 'normal', 'none', '', 'break-word', ''],
                            id: 'Text',
                            text: '...as the tool is simple and intuitive to use, greatly reducing manual effort and allowing time to be spent on more valuable activities.',
                            display: 'block',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '460px', '273px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid3192",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            'block',
                            'block'
                        ],
                        [
                            "eid53739",
                            "color",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            'rgba(232,61,44,1.00)',
                            'rgba(232,61,44,1.00)'
                        ]
                    ]
                }
            },
            "drop2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0', '95px', '460px', '180px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: 1,
                            id: 'RoundRect3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['0px', '95px', '460px', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(232,61,44,1.00)', 'normal', 'none', '', 'break-word', ''],
                            id: 'Text',
                            text: '...as visibility is provided over business activities so that patterns and trends can easily be identified.',
                            display: 'block',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '460px', '273px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid3191",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            'block',
                            'block'
                        ],
                        [
                            "eid53738",
                            "color",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            'rgba(232,61,44,1.00)',
                            'rgba(232,61,44,1.00)'
                        ]
                    ]
                }
            },
            "drop1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '94px', '460px', '180px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: 1,
                            id: 'RoundRect3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['0px', '94px', '460px', '180px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(232,61,44,1.00)', 'normal', 'none', '', 'break-word', ''],
                            id: 'Text',
                            text: '...as the whole population can be analysed quickly to identify the high risk, unusual items, by those who have the best understanding of the business.',
                            display: 'block',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '460px', '273px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid3190",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            'block',
                            'block'
                        ],
                        [
                            "eid53737",
                            "color",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            'rgba(232,61,44,1.00)',
                            'rgba(232,61,44,1.00)'
                        ]
                    ]
                }
            },
            "drag3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'q3',
                            rect: ['0px', '69px', '518px', '169px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ver-002/bonus-q3.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '518px', '238px']
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
            "drag2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '69px', '518px', '169px', 'auto', 'auto'],
                            id: 'q2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ver-002/bonus-q2.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '518px', '238px']
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
            "resetScoreBtn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '196px', '46px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            stroke: [2, 'rgb(255, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(230,64,44,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(230, 62, 44)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text5',
                            text: 'Reset Answers',
                            align: 'left',
                            rect: ['18px', '9px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '391px', '46px']
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
            "drag1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '69px', '518px', '169px', 'auto', 'auto'],
                            id: 'q1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ver-002/bonus-q1.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '518px', '238px']
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
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '643px', '145px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,0.75)']
                        },
                        {
                            rect: ['27px', '56px', '590px', '81px', 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">Click on the benefit then click on the corresponding reason why.​</p>',
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
                            rect: [null, null, '643px', '145px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("page6_edgeActions.js");
})("EDGE-9339288");
