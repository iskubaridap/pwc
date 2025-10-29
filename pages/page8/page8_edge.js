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
                            id: 'city',
                            type: 'image',
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"City-Images/PwC_Halo_StreetView.jpg",'0px','0px','100%','100%', 'no-repeat']
                        },
                        {
                            id: 'audio',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['811', '707', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"D1_02.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'circle_btn_2',
                            symbolName: 'circle_btn_2',
                            type: 'rect',
                            rect: ['577px', '165px', 'null', 'null', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1'
                        },
                        {
                            id: 'i-icon',
                            type: 'image',
                            rect: ['785px', '1016px', '35px', '35px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"ver-002/i-icon.png",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['831px', '1020px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '1',
                            text: "Click on the bubble to begin",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'transcript',
                            symbolName: 'transcript',
                            display: 'none',
                            type: 'rect',
                            rect: ['638px', '806px', '643', '180px', 'auto', 'auto']
                        },
                        {
                            id: 'lockpg2Copy',
                            symbolName: 'lockpg2_1',
                            type: 'rect',
                            rect: ['1380px', '256px', '97', '97', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'lockpg2Copy2',
                            symbolName: 'lockpg2_2',
                            type: 'rect',
                            rect: ['1717px', '616px', '97', '97', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'pg7_btn1',
                            symbolName: 'pg7_btn1',
                            type: 'rect',
                            rect: ['92px', '418px', '97', '97', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1'
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
                    duration: 30000,
                    autoPlay: true,
                    labels: {
                        "pop": 91,
                        "popR": 750,
                        "zoom_start": 998
                    },
                    data: [
                        [
                            "eid10",
                            "top",
                            0,
                            0,
                            "linear",
                            "${circle_btn_2}",
                            '165px',
                            '165px'
                        ],
                        [
                            "eid12",
                            "left",
                            0,
                            0,
                            "linear",
                            "${circle_btn_2}",
                            '577px',
                            '577px'
                        ],
                        [
                            "eid11",
                            "opacity",
                            1005,
                            410,
                            "linear",
                            "${circle_btn_2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid22",
                            "opacity",
                            270,
                            0,
                            "linear",
                            "${city}",
                            '1',
                            '1'
                        ],
                        [
                            "eid23",
                            "opacity",
                            1522,
                            482,
                            "linear",
                            "${city}",
                            '1',
                            '0'
                        ],
                        [
                            "eid20",
                            "background-size",
                            1000,
                            1004,
                            "linear",
                            "${city}",
                            [100,100],
                            [400,400],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid9",
                            "opacity",
                            998,
                            416,
                            "linear",
                            "${i-icon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid21",
                            "background-position",
                            1002,
                            1004,
                            "linear",
                            "${city}",
                            [0,0],
                            [-8,-1260],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid19",
                            "height",
                            1333,
                            0,
                            "linear",
                            "${city}",
                            '1080px',
                            '1080px'
                        ],
                        [
                            "eid109",
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
                            "top",
                            1333,
                            0,
                            "linear",
                            "${city}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid8",
                            "opacity",
                            998,
                            416,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ],
                            [ "eid24", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${audio}', [] ] ]
                    ]
                }
            },
            "arm1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 6, '400px', '239px', 'auto', 'auto'],
                            id: 'Pasted6',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted6.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'Pasted72',
                            rect: [118, 0, '24px', '59px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['-127.08%', '43.22%']],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted7.svg', '0px', '0px']
                        },
                        {
                            rect: ['53', '225', 15, 15, 'auto', 'auto'],
                            id: 'arm1_2',
                            symbolName: 'arm1_2',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 400, 245]
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    labels: {
                        "start": 0
                    },
                    data: [
                        [
                            "eid1",
                            "rotateZ",
                            0,
                            2000,
                            "linear",
                            "${Pasted72}",
                            '0deg',
                            '360deg'
                        ]
                    ]
                }
            },
            "arm1_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Pasted8',
                            rect: [0, 0, '15px', '15px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['-233.33%', '-40%']],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted8.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 15, 15]
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    labels: {
                        "start": 0
                    },
                    data: [
                        [
                            "eid2",
                            "rotateZ",
                            0,
                            3000,
                            "linear",
                            "${Pasted8}",
                            '0deg',
                            '-360deg'
                        ]
                    ]
                }
            },
            "circle_btn_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'holder',
                            symbolName: 'holder',
                            rect: ['0', '0', '400', '332', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['193px', '122px', '584px', '555px', 'auto', 'auto'],
                            id: 'Pasted162',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted16_new.png', '0px', '0px']
                        },
                        {
                            rect: ['168px', '122px', '145px', '145px', 'auto', 'auto'],
                            id: 'Pasted2',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted2.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '400', '332']
                        }
                    }
                },
                timeline: {
                    duration: 30000,
                    autoPlay: true,
                    labels: {
                        "shrinkS": 1000,
                        "shrinkE": 1750,
                        "start": 3250,
                        "roll": 3500,
                        "rollout": 4250
                    },
                    data: [
                        [
                            "eid80",
                            "scaleY",
                            1000,
                            500,
                            "easeInOutBack",
                            "${holder}",
                            '1',
                            '0.51205'
                        ],
                        [
                            "eid28162",
                            "height",
                            1500,
                            0,
                            "linear",
                            "${Pasted162}",
                            '555px',
                            '555px'
                        ],
                        [
                            "eid79",
                            "scaleX",
                            1000,
                            500,
                            "easeInOutBack",
                            "${holder}",
                            '1',
                            '0.425'
                        ],
                        [
                            "eid28161",
                            "width",
                            1500,
                            0,
                            "linear",
                            "${Pasted162}",
                            '584px',
                            '584px'
                        ],
                        [
                            "eid81",
                            "left",
                            1000,
                            500,
                            "easeInOutBack",
                            "${holder}",
                            '0px',
                            '41px'
                        ],
                        [
                            "eid82",
                            "top",
                            1000,
                            500,
                            "easeInOutBack",
                            "${holder}",
                            '0px',
                            '29px'
                        ],
                        [
                            "eid26656",
                            "opacity",
                            1000,
                            750,
                            "linear",
                            "${Pasted162}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "arm2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Pasted4',
                            rect: [0, 0, '168px', '332px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['40.18%', '59.19%']],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted4.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 168, 332]
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: true,
                    labels: {
                        "start": 0
                    },
                    data: [
                        [
                            "eid3",
                            "rotateZ",
                            0,
                            8000,
                            "linear",
                            "${Pasted4}",
                            '0deg',
                            '360deg'
                        ]
                    ]
                }
            },
            "arm4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Pasted52',
                            rect: [0, 0, '314px', '186px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['52.65%', '98.39%']],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted5.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 314, 186]
                        }
                    }
                },
                timeline: {
                    duration: 15000,
                    autoPlay: true,
                    labels: {
                        "start": 0
                    },
                    data: [
                        [
                            "eid17",
                            "rotateZ",
                            0,
                            15000,
                            "linear",
                            "${Pasted52}",
                            '0deg',
                            '360deg'
                        ]
                    ]
                }
            },
            "arm5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], [], ['49.09%', '26.62%']],
                            id: 'Pasted3',
                            type: 'image',
                            rect: ['0', '0', '311px', '144px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted3.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '311', '144']
                        }
                    }
                },
                timeline: {
                    duration: 30000,
                    autoPlay: true,
                    labels: {
                        "start": 0
                    },
                    data: [
                        [
                            "eid18",
                            "rotateZ",
                            0,
                            30000,
                            "linear",
                            "${Pasted3}",
                            '0deg',
                            '360deg'
                        ]
                    ]
                }
            },
            "holder": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['173', '0', '168', '332', 'auto', 'auto'],
                            id: 'arm2',
                            symbolName: 'arm2',
                            opacity: 0.83739837398374,
                            type: 'rect'
                        },
                        {
                            rect: ['75', '9', '314', '186', 'auto', 'auto'],
                            id: 'arm4',
                            symbolName: 'arm4',
                            opacity: 0.76422764227642,
                            type: 'rect'
                        },
                        {
                            rect: ['0', '35', '400', '245', 'auto', 'auto'],
                            id: 'arm3',
                            symbolName: 'arm3',
                            opacity: 0.78048780487805,
                            type: 'rect'
                        },
                        {
                            rect: ['89px', '158px', '311', '144', 'auto', 'auto'],
                            id: 'arm5',
                            symbolName: 'arm5',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '400', '332']
                        }
                    }
                },
                timeline: {
                    duration: 30000,
                    autoPlay: true,
                    data: [
                        [
                            "eid164",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${arm3}",
                            '0.78048780487805',
                            '0.78048780487805'
                        ],
                        [
                            "eid175",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${arm2}",
                            '0.83739837398374',
                            '0.83739837398374'
                        ],
                        [
                            "eid163",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${arm4}",
                            '0.76422764227642',
                            '0.76422764227642'
                        ]
                    ]
                }
            },
            "arm3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['60.25%', '67.62%']],
                            id: 'arm1',
                            symbolName: 'arm1',
                            rect: [0, 0, 400, 245, 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 400, 245]
                        }
                    }
                },
                timeline: {
                    duration: 25000,
                    autoPlay: true,
                    labels: {
                        "start": 0
                    },
                    data: [
                        [
                            "eid5",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${arm1}",
                            [60.25,67.62],
                            [60.25,67.62],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid287",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${arm1}",
                            [60.25,67.62],
                            [60.25,67.62],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid288",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${arm1}",
                            [60.25,67.62],
                            [60.25,67.62],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid289",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${arm1}",
                            [60.25,67.62],
                            [60.25,67.62],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid290",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${arm1}",
                            [60.25,67.62],
                            [60.25,67.62],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid291",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${arm1}",
                            [60.25,67.62],
                            [60.25,67.62],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid6",
                            "rotateZ",
                            0,
                            25000,
                            "linear",
                            "${arm1}",
                            '0deg',
                            '-360deg'
                        ]
                    ]
                }
            },
            "lockpg2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['2px', '11px', '97px', '90px', 'auto', 'auto'],
                            id: 'lock5',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/lock.png', '0px', '0px']
                        },
                        {
                            rect: ['-466px', '86px', '565px', '323px', 'auto', 'auto'],
                            type: 'image',
                            id: 'Pasted172',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted17.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '97px', '97px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    labels: {
                        "roll": 145,
                        "rollout": 1000
                    },
                    data: [
                        [
                            "eid28169",
                            "height",
                            874,
                            0,
                            "linear",
                            "${Pasted172}",
                            '323px',
                            '323px'
                        ],
                        [
                            "eid26659",
                            "opacity",
                            145,
                            855,
                            "linear",
                            "${Pasted172}",
                            '0',
                            '1'
                        ],
                        [
                            "eid28172",
                            "left",
                            874,
                            0,
                            "linear",
                            "${Pasted172}",
                            '-466px',
                            '-466px'
                        ],
                        [
                            "eid28168",
                            "width",
                            874,
                            0,
                            "linear",
                            "${Pasted172}",
                            '565px',
                            '565px'
                        ],
                        [
                            "eid28173",
                            "top",
                            874,
                            0,
                            "linear",
                            "${Pasted172}",
                            '86px',
                            '86px'
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
                            rect: ['0px', '0px', '643px', '180px', 'auto', 'auto'],
                            id: 'Rectangle3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.75)']
                        },
                        {
                            rect: ['27px', '56px', '590px', '81px', 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\"></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">In this module we will introduce you to Halo for Journals.</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">​<br>Click the bubble to begin.</p><p style=\"margin: 0px;\"></p>',
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
                            rect: [null, null, '643px', '180px']
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
            "lockpg2_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['2px', '11px', '97px', '90px', 'auto', 'auto'],
                            id: 'lock5',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/lock2.png', '0px', '0px']
                        },
                        {
                            rect: ['-466px', '86px', '565px', '323px', 'auto', 'auto'],
                            type: 'image',
                            id: 'Pasted172',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted18.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '97px', '97px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    labels: {
                        "roll": 145,
                        "rollout": 1000
                    },
                    data: [
                        [
                            "eid28169",
                            "height",
                            874,
                            0,
                            "linear",
                            "${Pasted172}",
                            '323px',
                            '323px'
                        ],
                        [
                            "eid26659",
                            "opacity",
                            145,
                            855,
                            "linear",
                            "${Pasted172}",
                            '0',
                            '1'
                        ],
                        [
                            "eid28172",
                            "left",
                            874,
                            0,
                            "linear",
                            "${Pasted172}",
                            '-466px',
                            '-466px'
                        ],
                        [
                            "eid28168",
                            "width",
                            874,
                            0,
                            "linear",
                            "${Pasted172}",
                            '565px',
                            '565px'
                        ],
                        [
                            "eid28173",
                            "top",
                            874,
                            0,
                            "linear",
                            "${Pasted172}",
                            '86px',
                            '86px'
                        ]
                    ]
                }
            },
            "lockpg2_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['2px', '11px', '97px', '90px', 'auto', 'auto'],
                            id: 'lock5',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/lock3.png', '0px', '0px']
                        },
                        {
                            rect: ['-466px', '86px', '565px', '323px', 'auto', 'auto'],
                            type: 'image',
                            id: 'Pasted172',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted19.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '97px', '97px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    labels: {
                        "roll": 145,
                        "rollout": 1000
                    },
                    data: [
                        [
                            "eid28169",
                            "height",
                            874,
                            0,
                            "linear",
                            "${Pasted172}",
                            '323px',
                            '323px'
                        ],
                        [
                            "eid26659",
                            "opacity",
                            145,
                            855,
                            "linear",
                            "${Pasted172}",
                            '0',
                            '1'
                        ],
                        [
                            "eid28172",
                            "left",
                            874,
                            0,
                            "linear",
                            "${Pasted172}",
                            '-466px',
                            '-466px'
                        ],
                        [
                            "eid28168",
                            "width",
                            874,
                            0,
                            "linear",
                            "${Pasted172}",
                            '565px',
                            '565px'
                        ],
                        [
                            "eid28173",
                            "top",
                            874,
                            0,
                            "linear",
                            "${Pasted172}",
                            '86px',
                            '86px'
                        ]
                    ]
                }
            },
            "pg7_btn1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '97px', '97px', 'auto', 'auto'],
                            id: 'Pasted122',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted12.png', '0px', '0px']
                        },
                        {
                            rect: ['-9px', '-232px', '584px', '242px', 'auto', 'auto'],
                            id: 'Pasted134',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted13.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '97px', '97px']
                        }
                    }
                },
                timeline: {
                    duration: 1429,
                    autoPlay: true,
                    labels: {
                        "roll": 500,
                        "rollout": 1429
                    },
                    data: [
                        [
                            "eid25495",
                            "opacity",
                            500,
                            929,
                            "linear",
                            "${Pasted134}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("page8_edgeActions.js");
})("EDGE-9339288");
