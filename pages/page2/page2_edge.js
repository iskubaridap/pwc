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
                            rect: ['0', '0', '1920px', '100%', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"City-Images/PwC_Halo_CityScape.jpg",'0px','0px','100%','100%', 'no-repeat']
                        },
                        {
                            id: 'circle_btn',
                            symbolName: 'circle_btn',
                            type: 'rect',
                            rect: ['81px', 'auto', '400', '332', 'auto', '60px'],
                            opacity: '1'
                        },
                        {
                            id: 'lock1',
                            symbolName: 'lock1',
                            type: 'rect',
                            rect: ['863px', '358px', '641', '291', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'lock2',
                            symbolName: 'lock2',
                            type: 'rect',
                            rect: ['981px', '543px', '641', '265', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'i-icon',
                            type: 'image',
                            rect: ['694px', '1020px', '35px', '35px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"ver-002/i-icon.png",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['740px', '1024px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '1',
                            text: "Click on the bubble to begin your Halo Quest",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'audio',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['592', '844', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"clickBubble.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'transcript',
                            symbolName: 'transcript',
                            display: 'none',
                            type: 'rect',
                            rect: ['638px', '806px', '643', '130px', 'auto', 'auto']
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
                        "pop": 61,
                        "popR": 750,
                        "zoom_start": 998
                    },
                    data: [
                        [
                            "eid11",
                            "opacity",
                            1003,
                            400,
                            "linear",
                            "${lock2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid21",
                            "bottom",
                            0,
                            0,
                            "linear",
                            "${circle_btn}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid15",
                            "top",
                            0,
                            0,
                            "linear",
                            "${lock1}",
                            '358px',
                            '358px'
                        ],
                        [
                            "eid20",
                            "left",
                            0,
                            0,
                            "linear",
                            "${circle_btn}",
                            '81px',
                            '81px'
                        ],
                        [
                            "eid16",
                            "opacity",
                            1003,
                            400,
                            "linear",
                            "${lock1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17",
                            "left",
                            0,
                            0,
                            "linear",
                            "${lock1}",
                            '863px',
                            '863px'
                        ],
                        [
                            "eid10",
                            "top",
                            0,
                            0,
                            "linear",
                            "${lock2}",
                            '543px',
                            '543px'
                        ],
                        [
                            "eid155",
                            "display",
                            0,
                            0,
                            "linear",
                            "${transcript}",
                            'none',
                            'none'
                        ],
                        [
                            "eid156",
                            "display",
                            540,
                            0,
                            "linear",
                            "${transcript}",
                            'none',
                            'none'
                        ],
                        [
                            "eid23",
                            "background-position",
                            1000,
                            1000,
                            "linear",
                            "${city}",
                            [0,0],
                            [-418,-2539],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid9",
                            "opacity",
                            998,
                            408,
                            "linear",
                            "${i-icon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid22",
                            "background-size",
                            1000,
                            1000,
                            "linear",
                            "${city}",
                            [100,100],
                            [400,400],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12",
                            "left",
                            0,
                            0,
                            "linear",
                            "${lock2}",
                            '981px',
                            '981px'
                        ],
                        [
                            "eid24",
                            "opacity",
                            1613,
                            387,
                            "linear",
                            "${city}",
                            '1',
                            '0'
                        ],
                        [
                            "eid19",
                            "opacity",
                            1003,
                            397,
                            "linear",
                            "${circle_btn}",
                            '1',
                            '0'
                        ],
                        [
                            "eid8",
                            "opacity",
                            999,
                            407,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ],
                            [ "eid25", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${audio}', [] ] ]
                    ]
                }
            },
            "lock2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['2px', '163px', '97px', '90px', 'auto', 'auto'],
                            id: 'lock4',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/lock.png', '0px', '0px']
                        },
                        {
                            rect: ['6px', '-365px', '593px', '540px', 'auto', 'auto'],
                            id: 'pg1_hover22',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/pg1_hover2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '641px', '265px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    labels: {
                        "roll": 250,
                        "rollout": 1000
                    },
                    data: [
                        [
                            "eid26620",
                            "opacity",
                            250,
                            750,
                            "linear",
                            "${pg1_hover22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid28143",
                            "left",
                            874,
                            0,
                            "linear",
                            "${pg1_hover22}",
                            '6px',
                            '6px'
                        ],
                        [
                            "eid28138",
                            "height",
                            874,
                            0,
                            "linear",
                            "${pg1_hover22}",
                            '540px',
                            '540px'
                        ],
                        [
                            "eid28137",
                            "width",
                            874,
                            0,
                            "linear",
                            "${pg1_hover22}",
                            '593px',
                            '593px'
                        ],
                        [
                            "eid28141",
                            "top",
                            874,
                            0,
                            "linear",
                            "${pg1_hover22}",
                            '-365px',
                            '-365px'
                        ]
                    ]
                }
            },
            "lock3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['544px', '12px', '97px', '90px', 'auto', 'auto'],
                            id: 'lock',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/lock.png', '0px', '0px']
                        },
                        {
                            rect: ['40px', '-317px', '593px', '342px', 'auto', 'auto'],
                            id: 'pg1_hover42',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/pg1_hover4.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '637px', '396px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    labels: {
                        "roll": 250,
                        "rollout": 1000
                    },
                    data: [
                        [
                            "eid28149",
                            "width",
                            1500,
                            0,
                            "linear",
                            "${pg1_hover42}",
                            '593px',
                            '593px'
                        ],
                        [
                            "eid26623",
                            "opacity",
                            250,
                            750,
                            "linear",
                            "${pg1_hover42}",
                            '0',
                            '1'
                        ],
                        [
                            "eid28154",
                            "top",
                            1500,
                            0,
                            "linear",
                            "${pg1_hover42}",
                            '-317px',
                            '-317px'
                        ],
                        [
                            "eid28155",
                            "left",
                            1500,
                            0,
                            "linear",
                            "${pg1_hover42}",
                            '40px',
                            '40px'
                        ],
                        [
                            "eid28150",
                            "height",
                            1500,
                            0,
                            "linear",
                            "${pg1_hover42}",
                            '342px',
                            '342px'
                        ]
                    ]
                }
            },
            "lock1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['2px', '13px', '97px', '90px', 'auto', 'auto'],
                            id: 'lock4',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/lock.png', '0px', '0px']
                        },
                        {
                            rect: ['4px', '98px', '590px', '222px', 'auto', 'auto'],
                            id: 'pg1_hover32',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/pg1_hover3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '641px', '291px']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: true,
                    labels: {
                        "start": 0,
                        "roll": 250,
                        "rollout": 1000
                    },
                    data: [
                        [
                            "eid28126",
                            "left",
                            1250,
                            0,
                            "linear",
                            "${pg1_hover32}",
                            '4px',
                            '4px'
                        ],
                        [
                            "eid23047",
                            "opacity",
                            250,
                            750,
                            "linear",
                            "${pg1_hover32}",
                            '0',
                            '1'
                        ],
                        [
                            "eid27615",
                            "height",
                            1000,
                            0,
                            "linear",
                            "${pg1_hover32}",
                            '222px',
                            '222px'
                        ],
                        [
                            "eid27613",
                            "width",
                            1000,
                            0,
                            "linear",
                            "${pg1_hover32}",
                            '590px',
                            '590px'
                        ]
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
                            rect: [118, 0, '24px', '59px', 'auto', 'auto'],
                            id: 'Pasted72',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['-127.08%', '43.22%']],
                            type: 'image',
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
                            rect: [0, 0, '15px', '15px', 'auto', 'auto'],
                            id: 'Pasted8',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['-233.33%', '-40%']],
                            type: 'image',
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
            "circle_btn": {
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
                            id: 'holder',
                            symbolName: 'holder',
                            rect: ['0', '0', '400', '332', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            id: 'Pasted2',
                            rect: ['168', '122', '145px', '145px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Pasted2.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'pg_hover12',
                            opacity: 0,
                            rect: ['200px', '-418px', '627px', '540px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pg_hover1.png', '0px', '0px']
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
                    labels: {
                        "shrinkS": 1000,
                        "shrinkE": 1750,
                        "start": 3250,
                        "roll": 3500,
                        "rollout": 4250
                    },
                    data: [
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
                            "eid26617",
                            "opacity",
                            1000,
                            750,
                            "linear",
                            "${pg_hover12}",
                            '0',
                            '1'
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
                            "eid80",
                            "scaleY",
                            1000,
                            500,
                            "easeInOutBack",
                            "${holder}",
                            '1',
                            '0.51205'
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
                            rect: [0, 0, '168px', '332px', 'auto', 'auto'],
                            id: 'Pasted4',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['40.18%', '59.19%']],
                            type: 'image',
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
                            rect: [0, 0, '314px', '186px', 'auto', 'auto'],
                            id: 'Pasted52',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['52.65%', '98.39%']],
                            type: 'image',
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
                            type: 'image',
                            id: 'Pasted3',
                            rect: ['0', '0', '311px', '144px', 'auto', 'auto'],
                            transform: [[], [], [], [], ['49.09%', '26.62%']],
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
                            type: 'rect',
                            id: 'arm2',
                            symbolName: 'arm2',
                            opacity: 0.83739837398374,
                            rect: ['173', '0', '168', '332', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'arm4',
                            symbolName: 'arm4',
                            opacity: 0.76422764227642,
                            rect: ['75', '9', '314', '186', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'arm3',
                            symbolName: 'arm3',
                            opacity: 0.78048780487805,
                            rect: ['0', '35', '400', '245', 'auto', 'auto']
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
                            rect: [0, 0, 400, 245, 'auto', 'auto'],
                            id: 'arm1',
                            symbolName: 'arm1',
                            type: 'rect',
                            transform: [[0, 0, 0], ['0', 0, 0], [0, 0], [1, 1, 1], ['60.25%', '67.62%']]
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
                            "eid205",
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
                            "eid206",
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
                            "eid207",
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
                            "eid208",
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
                            "eid209",
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
                            rect: ['0px', '0px', '643px', '130px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,0.75)']
                        },
                        {
                            rect: ['27px', '56px', '590px', '51px', 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">Click on the bubble to begin​</p>',
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
                            rect: [null, null, '643px', '130px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("page2_edgeActions.js");
})("EDGE-9339288");
