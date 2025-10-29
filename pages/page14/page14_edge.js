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
                            rect: ['0px', '53px', '1920px', '1023px', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"City-Images/PwC_Halo_StreetView.jpg",'0px','0px'],
                            transform: [[],[],[],['1','1.12999']]
                        },
                        {
                            id: 'whtBG',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '88px', '1920px', '1064px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'bgm',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['2303', '717', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"D1_08.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'whtBG6',
                            symbolName: 'whtBG',
                            type: 'rect',
                            rect: ['91px', '189px', 'null', 'null', 'auto', 'auto']
                        },
                        {
                            id: 'laptop-blank2',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '94px', '1920px', '988px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"other_images/laptop-blank.jpg",'0px','0px']
                        },
                        {
                            id: 'blank-laptop2',
                            symbolName: 'blank-laptop',
                            display: 'none',
                            type: 'rect',
                            rect: ['-94px', '86px', '2140', '1072', 'auto', 'auto'],
                            transform: [[],[],[],['1.0984','1.01115']]
                        },
                        {
                            id: 'Chart_newD1_09',
                            display: 'none',
                            type: 'image',
                            rect: ['364px', '240px', '1244px', '607px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"Chart_newD1_09.png",'0px','0px']
                        },
                        {
                            id: 'halo-bonus2',
                            display: 'none',
                            type: 'image',
                            rect: ['211px', '827px', '50px', '50px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"other_images/halo-bonus.png",'0px','0px']
                        },
                        {
                            id: 'arrowmovedown',
                            symbolName: 'arrowmovedown',
                            display: 'none',
                            type: 'rect',
                            rect: ['394px', '355px', '357', '462', 'auto', 'auto'],
                            opacity: '1',
                            transform: [[],[],[],['0.85915','0.85915']]
                        },
                        {
                            id: 'arrowmoveright',
                            symbolName: 'arrowmoveright',
                            display: 'none',
                            type: 'rect',
                            rect: ['604px', '297px', '1003', '558', 'auto', 'auto'],
                            opacity: '1',
                            transform: [[],[],[],['0.8853','0.8853']]
                        },
                        {
                            id: 'audio',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['73', '868', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"D1_09_1.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'audio2',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['240', '671', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"D1_09_2.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'bgm3',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['285', '774', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"D1_09_3.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'page8first',
                            symbolName: 'page8first',
                            display: 'block',
                            type: 'rect',
                            rect: ['115px', '245px', '1566px', '763px', 'auto', 'auto'],
                            opacity: '1',
                            transform: [[],[],[],['1.36684','1.40626']]
                        },
                        {
                            id: 'right_arrow_wht',
                            display: 'block',
                            type: 'image',
                            rect: ['1844px', '499px', '40px', '72px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"other_images/right_arrow_wht.png",'0px','0px']
                        },
                        {
                            id: 'right_arrow_red',
                            display: 'none',
                            type: 'image',
                            rect: ['1844px', '499px', '40px', '72px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"other_images/right_arrow_red.png",'0px','0px']
                        },
                        {
                            id: 'right_arrow_red2',
                            display: 'none',
                            type: 'image',
                            rect: ['1844px', '499px', '40px', '72px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"other_images/right_arrow_red.png",'0px','0px']
                        },
                        {
                            id: 'left_arrow_wht',
                            display: 'block',
                            type: 'image',
                            rect: ['34px', '499px', '39px', '72px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"other_images/left_arrow_wht.png",'0px','0px']
                        },
                        {
                            id: 'left_arrow_redCopy',
                            display: 'none',
                            type: 'image',
                            rect: ['36px', '500px', '39px', '72px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"other_images/left_arrow_red.png",'0px','0px']
                        },
                        {
                            id: 'left_arrow_red',
                            display: 'none',
                            type: 'image',
                            rect: ['36px', '500px', '39px', '72px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"other_images/left_arrow_red.png",'0px','0px']
                        },
                        {
                            id: 'start_button',
                            type: 'rect',
                            rect: ['894px', '846px', '152px', '92px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(173,43,46,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'button-cover',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['920px', '1011px', '136px', '119px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'transcript',
                            symbolName: 'transcript',
                            display: 'none',
                            type: 'rect',
                            rect: ['638px', '750px', '643', '240px', 'auto', 'auto']
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
                    duration: 6000,
                    autoPlay: true,
                    labels: {
                        "start": 0,
                        "zoom": 1000,
                        "zoomed": 2000,
                        "charts": 3017,
                        "fade": 5000,
                        "fadeout": 6000
                    },
                    data: [
                        [
                            "eid49",
                            "display",
                            0,
                            0,
                            "linear",
                            "${whtBG}",
                            'none',
                            'none'
                        ],
                        [
                            "eid50",
                            "display",
                            1961,
                            0,
                            "linear",
                            "${whtBG}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13",
                            "display",
                            0,
                            0,
                            "linear",
                            "${right_arrow_red2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14",
                            "display",
                            2979,
                            0,
                            "linear",
                            "${right_arrow_red2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid21",
                            "scaleY",
                            1000,
                            1000,
                            "linear",
                            "${page8first}",
                            '1.0039',
                            '1.40626'
                        ],
                        [
                            "eid22",
                            "height",
                            0,
                            344,
                            "linear",
                            "${page8first}",
                            '763px',
                            '762px'
                        ],
                        [
                            "eid12",
                            "display",
                            1983,
                            0,
                            "linear",
                            "${left_arrow_wht}",
                            'block',
                            'none'
                        ],
                        [
                            "eid19",
                            "display",
                            0,
                            0,
                            "linear",
                            "${page8first}",
                            'block',
                            'block'
                        ],
                        [
                            "eid20",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${page8first}",
                            'block',
                            'none'
                        ],
                        [
                            "eid23",
                            "scaleX",
                            1000,
                            1000,
                            "linear",
                            "${page8first}",
                            '0.99919',
                            '1.36684'
                        ],
                        [
                            "eid38",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Chart_newD1_09}",
                            'none',
                            'none'
                        ],
                        [
                            "eid39",
                            "display",
                            2087,
                            0,
                            "linear",
                            "${Chart_newD1_09}",
                            'none',
                            'none'
                        ],
                        [
                            "eid40",
                            "display",
                            2979,
                            0,
                            "linear",
                            "${Chart_newD1_09}",
                            'none',
                            'block'
                        ],
                        [
                            "eid58",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${_8bg}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid59",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${_8bg}",
                            '0px',
                            '-1px'
                        ],
                        [
                            "eid8",
                            "display",
                            1894,
                            0,
                            "linear",
                            "${button-cover}",
                            'none',
                            'block'
                        ],
                        [
                            "eid15",
                            "display",
                            1963,
                            0,
                            "linear",
                            "${right_arrow_red}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16",
                            "display",
                            2997,
                            0,
                            "linear",
                            "${right_arrow_red}",
                            'block',
                            'none'
                        ],
                        [
                            "eid18",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${page8first}",
                            '245px',
                            '299px'
                        ],
                        [
                            "eid17",
                            "display",
                            1974,
                            0,
                            "linear",
                            "${right_arrow_wht}",
                            'block',
                            'none'
                        ],
                        [
                            "eid57",
                            "opacity",
                            5000,
                            1000,
                            "linear",
                            "${_8bg}",
                            '1',
                            '0'
                        ],
                        [
                            "eid9",
                            "display",
                            2972,
                            0,
                            "linear",
                            "${left_arrow_red}",
                            'none',
                            'block'
                        ],
                        [
                            "eid44",
                            "display",
                            0,
                            0,
                            "linear",
                            "${blank-laptop2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid45",
                            "display",
                            2997,
                            0,
                            "linear",
                            "${blank-laptop2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid62",
                            "display",
                            0,
                            0,
                            "linear",
                            "${transcript}",
                            'none',
                            'none'
                        ],
                        [
                            "eid46",
                            "display",
                            0,
                            0,
                            "linear",
                            "${laptop-blank2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid47",
                            "display",
                            3024,
                            0,
                            "linear",
                            "${laptop-blank2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid48",
                            "display",
                            3115,
                            0,
                            "linear",
                            "${laptop-blank2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid55",
                            "scaleX",
                            1000,
                            0,
                            "linear",
                            "${_8bg}",
                            '1',
                            '1'
                        ],
                        [
                            "eid56",
                            "scaleX",
                            2000,
                            0,
                            "linear",
                            "${_8bg}",
                            '1',
                            '1.12999'
                        ],
                        [
                            "eid24",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${page8first}",
                            '1',
                            '1'
                        ],
                        [
                            "eid25",
                            "left",
                            1000,
                            1000,
                            "linear",
                            "${page8first}",
                            '115px',
                            '110px'
                        ],
                        [
                            "eid31",
                            "opacity",
                            5000,
                            1000,
                            "linear",
                            "${arrowmoveright}",
                            '1',
                            '0'
                        ],
                        [
                            "eid28",
                            "display",
                            0,
                            0,
                            "linear",
                            "${arrowmoveright}",
                            'none',
                            'none'
                        ],
                        [
                            "eid29",
                            "display",
                            3042,
                            0,
                            "linear",
                            "${arrowmoveright}",
                            'none',
                            'none'
                        ],
                        [
                            "eid30",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${arrowmoveright}",
                            'none',
                            'block'
                        ],
                        [
                            "eid36",
                            "display",
                            0,
                            0,
                            "linear",
                            "${halo-bonus2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid37",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${halo-bonus2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10",
                            "display",
                            1961,
                            0,
                            "linear",
                            "${left_arrow_redCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11",
                            "display",
                            2993,
                            0,
                            "linear",
                            "${left_arrow_redCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid51",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${_8bg}",
                            '53px',
                            '53px'
                        ],
                        [
                            "eid52",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${_8bg}",
                            '53px',
                            '160px'
                        ],
                        [
                            "eid35",
                            "opacity",
                            5000,
                            1000,
                            "linear",
                            "${arrowmovedown}",
                            '1',
                            '0'
                        ],
                        [
                            "eid53",
                            "scaleY",
                            1000,
                            0,
                            "linear",
                            "${_8bg}",
                            '1',
                            '1'
                        ],
                        [
                            "eid54",
                            "scaleY",
                            2000,
                            0,
                            "linear",
                            "${_8bg}",
                            '1',
                            '1.12999'
                        ],
                        [
                            "eid26",
                            "width",
                            0,
                            0,
                            "linear",
                            "${page8first}",
                            '1566px',
                            '1566px'
                        ],
                        [
                            "eid27",
                            "width",
                            344,
                            0,
                            "linear",
                            "${page8first}",
                            '1566px',
                            '1566px'
                        ],
                        [
                            "eid41",
                            "opacity",
                            2965,
                            52,
                            "linear",
                            "${Chart_newD1_09}",
                            '1',
                            '0.02'
                        ],
                        [
                            "eid42",
                            "opacity",
                            3017,
                            971,
                            "linear",
                            "${Chart_newD1_09}",
                            '0.02',
                            '1'
                        ],
                        [
                            "eid43",
                            "opacity",
                            5000,
                            1000,
                            "linear",
                            "${Chart_newD1_09}",
                            '1',
                            '0'
                        ],
                        [
                            "eid32",
                            "display",
                            0,
                            0,
                            "linear",
                            "${arrowmovedown}",
                            'none',
                            'none'
                        ],
                        [
                            "eid33",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${arrowmovedown}",
                            'none',
                            'block'
                        ],
                        [
                            "eid34",
                            "display",
                            3042,
                            0,
                            "linear",
                            "${arrowmovedown}",
                            'block',
                            'block'
                        ],
                            [ "eid61", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${bgm}', [] ] ],
                            [ "eid60", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${audio}', [] ] ]
                    ]
                }
            },
            "white2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['1px', '3px', null, null, 'auto', 'auto'],
                            id: 'Red-Circle-Outline3',
                            symbolName: 'Red-Circle-Outline',
                            type: 'rect'
                        },
                        {
                            rect: ['17px', '15px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap'],
                            id: 'Text4Copy',
                            text: '2',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '48px', '48px']
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
            "Red-Circle-Outline": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['4px', '6px', '35px', '35px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse6',
                            stroke: [1, 'rgba(255,0,0,1)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(255,0,0,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '44px', '44px']
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
            "page8first": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-1px', '-74px', '1317px', '704px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['-1px', '583px', '1317px', '67px', 'auto', 'auto'],
                            id: 'Rectangle2Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'D1_082',
                            rect: ['-12px', '-40px', '1707px', '761px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/City-Images/PwC_Halo_page8-interface.jpg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['529px', '39px', '47', '47', 'auto', 'auto'],
                            id: 'black1',
                            display: 'none',
                            symbolName: 'black1',
                            cursor: 'pointer',
                            transform: [[], [], [], ['0.80851', '0.80851']]
                        },
                        {
                            type: 'rect',
                            rect: ['530px', '101px', '47', '47', 'auto', 'auto'],
                            id: 'black2',
                            display: 'none',
                            symbolName: 'black2',
                            cursor: 'pointer',
                            transform: [[], [], [], ['0.80851', '0.80851']]
                        },
                        {
                            type: 'rect',
                            rect: ['1233px', '49px', '47', '47', 'auto', 'auto'],
                            id: 'black3',
                            display: 'none',
                            symbolName: 'black3',
                            cursor: 'pointer',
                            transform: [[], [], [], ['0.80851', '0.80851']]
                        },
                        {
                            type: 'rect',
                            rect: ['426px', '395px', '47', '47', 'auto', 'auto'],
                            id: 'black4',
                            display: 'none',
                            symbolName: 'black4',
                            cursor: 'pointer',
                            transform: [[], [], [], ['0.80851', '0.80851']]
                        },
                        {
                            type: 'rect',
                            rect: ['526px', '32px', '48', '48', 'auto', 'auto'],
                            id: 'white1',
                            display: 'none',
                            symbolName: 'white1',
                            cursor: 'pointer',
                            transform: [[], [], [], ['0.91667', '0.91667']]
                        },
                        {
                            type: 'rect',
                            rect: ['530px', '96px', '48', '48', 'auto', 'auto'],
                            id: 'white2',
                            display: 'none',
                            symbolName: 'white2',
                            cursor: 'pointer',
                            transform: [[], [], [], ['0.91667', '0.91667']]
                        },
                        {
                            type: 'rect',
                            rect: ['1231px', '48px', '48', '48', 'auto', 'auto'],
                            id: 'white3',
                            display: 'none',
                            symbolName: 'white3',
                            cursor: 'pointer',
                            transform: [[], [], [], ['0.91667', '0.91667']]
                        },
                        {
                            type: 'rect',
                            rect: ['426px', '394px', '48', '48', 'auto', 'auto'],
                            id: 'white4',
                            display: 'none',
                            symbolName: 'white4',
                            cursor: 'pointer',
                            transform: [[], [], [], ['0.81', '0.81']]
                        },
                        {
                            rect: ['320px', '619px', '27px', '27px', 'auto', 'auto'],
                            type: 'image',
                            id: 'info-icon_2',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/other_images/info-icon_2.png', '0px', '0px']
                        },
                        {
                            rect: ['320px', '619px', '27px', '27px', 'auto', 'auto'],
                            id: 'info-icon2',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/other_images/info-icon2.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['368px', '621px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            id: 'click_the',
                            text: 'Click the sections on the dashboard to find out more',
                            display: 'none',
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(255,0,0,1)', '400', 'none solid rgb(255, 0, 0)', 'italic', 'break-word', 'nowrap']
                        },
                        {
                            rect: ['319px', '604px', '30px', '30px', 'auto', 'auto'],
                            id: 'info-icon',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/other_images/info-icon2.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['145px', '-33px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            id: 'text4',
                            text: 'Clicking on the highlighted button would take you to the testing page. ',
                            display: 'none',
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['145px', '-33px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            id: 'text1',
                            text: 'The dashboard is the first view you will see when you open Halo for Journals. ',
                            display: 'none',
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['145px', '-34px', '1101px', '21px', 'auto', 'auto'],
                            align: 'left',
                            id: 'text3',
                            text: 'The metrics provided include the percentage of automated journals compared to manual and the top 5 manual users.',
                            display: 'none',
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', '']
                        },
                        {
                            type: 'text',
                            rect: ['145px', '-33px', '1395px', '21px', 'auto', 'auto'],
                            align: 'left',
                            id: 'text2',
                            text: 'The dashboard provides an overview of the journal population allowing you to quickly understand key metrics and unusual patterns, as well as identifying points of insight.<br>',
                            display: 'none',
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', '']
                        },
                        {
                            rect: ['469px', '446px', '22px', '25px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'redrec',
                            stroke: [2, 'rgba(255,0,0,1.00)', 'solid'],
                            display: 'block',
                            fill: ['rgba(255,255,255,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1356px', '660px']
                        }
                    }
                },
                timeline: {
                    duration: 2516,
                    autoPlay: false,
                    data: [
                        [
                            "eid23344",
                            "display",
                            0,
                            0,
                            "linear",
                            "${text1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid32664",
                            "display",
                            1322,
                            0,
                            "linear",
                            "${text1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid40069",
                            "display",
                            1559,
                            0,
                            "linear",
                            "${text1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid23343",
                            "display",
                            0,
                            0,
                            "linear",
                            "${text3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid23354",
                            "display",
                            0,
                            0,
                            "linear",
                            "${white3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid26791",
                            "display",
                            1630,
                            0,
                            "linear",
                            "${white3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid23351",
                            "display",
                            0,
                            0,
                            "linear",
                            "${white1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid29596",
                            "display",
                            1252,
                            0,
                            "linear",
                            "${white1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid26789",
                            "display",
                            1630,
                            0,
                            "linear",
                            "${white1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid57354",
                            "display",
                            0,
                            0,
                            "linear",
                            "${info-icon2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid42220",
                            "display",
                            1994,
                            0,
                            "linear",
                            "${info-icon2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid40191",
                            "display",
                            0,
                            0,
                            "linear",
                            "${info-icon}",
                            'none',
                            'none'
                        ],
                        [
                            "eid18828",
                            "display",
                            0,
                            0,
                            "linear",
                            "${black1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid29599",
                            "display",
                            1252,
                            0,
                            "linear",
                            "${black1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid26785",
                            "display",
                            1630,
                            0,
                            "linear",
                            "${black1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid63",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${black1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid23353",
                            "display",
                            0,
                            0,
                            "linear",
                            "${white4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid26792",
                            "display",
                            1630,
                            0,
                            "linear",
                            "${white4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid24445",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${white4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid18825",
                            "display",
                            0,
                            0,
                            "linear",
                            "${black4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid29595",
                            "display",
                            1252,
                            0,
                            "linear",
                            "${black4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid26788",
                            "display",
                            1630,
                            0,
                            "linear",
                            "${black4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid24446",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${black4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid23345",
                            "display",
                            0,
                            0,
                            "linear",
                            "${text4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid40075",
                            "display",
                            1559,
                            0,
                            "linear",
                            "${text4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid24447",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${text4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid37886",
                            "display",
                            2516,
                            0,
                            "linear",
                            "${text4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid24448",
                            "display",
                            0,
                            0,
                            "linear",
                            "${redrec}",
                            'block',
                            'block'
                        ],
                        [
                            "eid23352",
                            "display",
                            0,
                            0,
                            "linear",
                            "${white2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid26790",
                            "display",
                            1630,
                            0,
                            "linear",
                            "${white2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid18826",
                            "display",
                            0,
                            0,
                            "linear",
                            "${black3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid29597",
                            "display",
                            1252,
                            0,
                            "linear",
                            "${black3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid26787",
                            "display",
                            1630,
                            0,
                            "linear",
                            "${black3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid29565",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid23342",
                            "display",
                            0,
                            0,
                            "linear",
                            "${text2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid18827",
                            "display",
                            0,
                            0,
                            "linear",
                            "${black2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid29598",
                            "display",
                            1252,
                            0,
                            "linear",
                            "${black2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid26786",
                            "display",
                            1630,
                            0,
                            "linear",
                            "${black2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid57356",
                            "display",
                            0,
                            0,
                            "linear",
                            "${info-icon_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid57355",
                            "display",
                            0,
                            0,
                            "linear",
                            "${click_the}",
                            'none',
                            'none'
                        ],
                        [
                            "eid42221",
                            "display",
                            1994,
                            0,
                            "linear",
                            "${click_the}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "white4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-6px', '-6px', '59px', '59px', 'auto', 'auto'],
                            id: 'whiteCircleCopy2',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/whiteCircle.png', '0px', '0px']
                        },
                        {
                            rect: ['2px', '1px', null, null, 'auto', 'auto'],
                            id: 'Red-Circle-Outline5',
                            symbolName: 'Red-Circle-Outline',
                            type: 'rect'
                        },
                        {
                            rect: ['17px', '12px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap'],
                            id: 'Text4Copy5',
                            text: '4',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '48px', '48px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid32687",
                            "display",
                            0,
                            0,
                            "linear",
                            "${whiteCircleCopy2}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "white1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-6px', '-5px', '59px', '59px', 'auto', 'auto'],
                            id: 'whiteCircle',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/whiteCircle.png', '0px', '0px']
                        },
                        {
                            rect: ['5px', '5px', null, null, 'auto', 'auto'],
                            id: 'Red-Circle-Outline2',
                            symbolName: 'Red-Circle-Outline',
                            type: 'rect'
                        },
                        {
                            rect: ['20px', '16px', '14px', '28px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(255, 0, 0)', 'normal', 'break-word', ''],
                            id: 'Text3',
                            text: '1',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '48px', '48px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid32675",
                            "display",
                            0,
                            0,
                            "linear",
                            "${whiteCircle}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "white3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['2px', '0px', null, null, 'auto', 'auto'],
                            id: 'Red-Circle-Outline4',
                            symbolName: 'Red-Circle-Outline',
                            type: 'rect'
                        },
                        {
                            rect: ['18px', '12px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap'],
                            id: 'Text4Copy2',
                            text: '3',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '48px', '48px']
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
            "black3": {
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
                            display: 'none',
                            rect: ['-4px', '-4px', '55px', '56px', 'auto', 'auto'],
                            id: 'blackCircle3',
                            fill: ['rgba(0,0,0,0)', 'images/blackCircle.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'RedCircle3',
                            symbolName: 'RedCircle',
                            rect: ['1px', '1px', null, null, 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text4Copy3',
                            text: '3',
                            align: 'left',
                            rect: ['16px', '10px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '47px', '47px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid32581",
                            "display",
                            0,
                            0,
                            "linear",
                            "${blackCircle3}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "black1": {
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
                            display: 'none',
                            rect: ['-4px', '-4px', '55px', '56px', 'auto', 'auto'],
                            id: 'blackCircle',
                            fill: ['rgba(0,0,0,0)', 'images/blackCircle.png', '0px', '0px']
                        },
                        {
                            rect: ['2px', '1px', '44', '44', 'auto', 'auto'],
                            display: 'block',
                            symbolName: 'RedCircle',
                            id: 'RedCircle',
                            type: 'rect'
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(255, 0, 0)', 'normal', 'break-word', ''],
                            type: 'text',
                            id: 'Text3Copy',
                            text: '1',
                            align: 'left',
                            rect: ['16px', '10px', '14px', '28px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '47px', '47px']
                        }
                    }
                },
                timeline: {
                    duration: 1494,
                    autoPlay: false,
                    data: [
                        [
                            "eid32574",
                            "display",
                            0,
                            0,
                            "linear",
                            "${blackCircle}",
                            'none',
                            'none'
                        ],
                        [
                            "eid32571",
                            "display",
                            1494,
                            0,
                            "linear",
                            "${blackCircle}",
                            'none',
                            'none'
                        ],
                        [
                            "eid32573",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RedCircle}",
                            'block',
                            'block'
                        ]
                    ]
                }
            },
            "RedCircle": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '42px', '42px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3',
                            stroke: [1, 'rgba(255,0,0,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(255,0,0,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '44px', '44px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid32570",
                            "border-color",
                            0,
                            0,
                            "linear",
                            "${Ellipse3}",
                            'rgba(255,0,0,1.00)',
                            'rgba(255,0,0,1.00)'
                        ]
                    ]
                }
            },
            "black4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-4px', '-4px', '55px', '56px', 'auto', 'auto'],
                            id: 'blackCircle3',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/blackCircle.png', '0px', '0px']
                        },
                        {
                            rect: ['2px', '3px', null, null, 'auto', 'auto'],
                            id: 'RedCircle4',
                            symbolName: 'RedCircle',
                            type: 'rect'
                        },
                        {
                            rect: ['16px', '12px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap'],
                            id: 'Text4Copy4',
                            text: '4',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '47px', '47px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid32582",
                            "display",
                            0,
                            0,
                            "linear",
                            "${blackCircle3}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "black2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-4px', '-4px', '55px', '56px', 'auto', 'auto'],
                            id: 'blackCircle2',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/blackCircle.png', '0px', '0px']
                        },
                        {
                            rect: ['2px', '0px', null, null, 'auto', 'auto'],
                            id: 'RedCircle2',
                            symbolName: 'RedCircle',
                            type: 'rect'
                        },
                        {
                            rect: ['17px', '9px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap'],
                            id: 'Text4',
                            text: '2',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '47px', '47px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid32580",
                            "display",
                            0,
                            0,
                            "linear",
                            "${blackCircle2}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "arrowmoveright": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.1', '0.1']],
                            id: 'redarrowup',
                            type: 'image',
                            rect: ['657px', '179px', '560px', '690px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/redarrowup32.png', '0px', '0px']
                        },
                        {
                            rect: ['-3px', '487px', '61px', '74px', 'auto', 'auto'],
                            id: 'redarrowup2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/redarrowup32.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1003px', '558px']
                        }
                    }
                },
                timeline: {
                    duration: 11000,
                    autoPlay: false,
                    data: [
                        [
                            "eid18376",
                            "left",
                            0,
                            11000,
                            "linear",
                            "${redarrowup}",
                            '-252px',
                            '657px'
                        ],
                        [
                            "eid26795",
                            "left",
                            0,
                            11000,
                            "linear",
                            "${redarrowup2}",
                            '-3px',
                            '906px'
                        ]
                    ]
                }
            },
            "arrowmovedown": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['278px', '0px', '69px', '56px', 'auto', 'auto'],
                            id: 'redArrowLeft2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/redArrowLeft3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '357px', '462px']
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: false,
                    data: [
                        [
                            "eid26798",
                            "top",
                            0,
                            8000,
                            "linear",
                            "${redArrowLeft2}",
                            '0px',
                            '397px'
                        ]
                    ]
                }
            },
            "blank-laptop": {
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
                            id: 'Rectangle5',
                            stroke: [2, 'rgba(255,0,0,0.00)', 'solid'],
                            rect: ['-37px', '-60px', '2264px', '1152px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['0px', '0px', '2140px', '1072px', 'auto', 'auto'],
                            id: 'blank-laptop',
                            fill: ['rgba(0,0,0,0)', 'images/other_images/blank-laptop.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '2140px', '1072px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid32704",
                            "display",
                            0,
                            0,
                            "linear",
                            "${blank-laptop}",
                            'none',
                            'block'
                        ]
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
                            rect: ['0px', '0px', '643px', '240px', 'auto', 'auto'],
                            id: 'Rectangle3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.75)']
                        },
                        {
                            rect: ['27px', '56px', '590px', '157px', 'auto', 'auto'],
                            overflow: 'auto',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">The globally agreed testing algorithms embedded within Halo for Journals have been developed from our years of experience as a leading assurance provider.</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">​</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">Halo for Journals presents financial information that looks different. With user focused interactive visualisation, extensive data and algorithms are simplified for immediate analysis.</p>',
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
                            rect: [null, null, '643px', '240px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("page14_edgeActions.js");
})("EDGE-9339288");
