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
                            id: 'dark',
                            type: 'rect',
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            opacity: '0.74996824186992',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'arrowup2-pngCopy2',
                            type: 'image',
                            rect: ['1793px', '93px', '18px', '16px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"ver-002/Help-NavIcons-arrow-up.png",'0px','0px']
                        },
                        {
                            id: 'arrowup2-pngCopy',
                            type: 'image',
                            rect: ['1864px', '93px', '18px', '16px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"ver-002/Help-NavIcons-arrow-up.png",'0px','0px']
                        },
                        {
                            id: 'arrowup2-png',
                            type: 'image',
                            rect: ['1533px', '93px', '18px', '16px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"ver-002/Help-NavIcons-arrow-up.png",'0px','0px']
                        },
                        {
                            id: 'red1',
                            display: 'none',
                            type: 'image',
                            rect: ['1534px', '92px', '22px', '20px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"ver-002/Help-NavIcons-arrow-up-BIG.png",'0px','0px'],
                            transform: [[],[],[],['1.53928','1.53928']]
                        },
                        {
                            id: 'red4',
                            display: 'none',
                            type: 'image',
                            rect: ['1791px', '93px', '22px', '20px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"ver-002/Help-NavIcons-arrow-up-BIG.png",'0px','0px'],
                            transform: [[],[],[],['1.57032','1.57032']]
                        },
                        {
                            id: 'red5',
                            display: 'none',
                            type: 'image',
                            rect: ['1862px', '92px', '22px', '20px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"ver-002/Help-NavIcons-arrow-up-BIG.png",'0px','0px'],
                            transform: [[],[],[],['1.52882','1.52882']]
                        },
                        {
                            id: 'navicon',
                            symbolName: 'navicon',
                            type: 'rect',
                            rect: ['64px', '304px', '541', '189', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'navarrows',
                            symbolName: 'navarrows',
                            type: 'rect',
                            rect: ['719px', '305px', '541', '187', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['1.07024']]
                        },
                        {
                            id: 'linkicons',
                            symbolName: 'linkicons',
                            type: 'rect',
                            rect: ['414px', '667px', '541', '189', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'bonusicon',
                            symbolName: 'bonusicon',
                            type: 'rect',
                            rect: ['1341px', '304px', '541', '187', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'nav-info',
                            symbolName: 'nav-info',
                            display: 'none',
                            type: 'rect',
                            rect: ['69px', '487px', '1821', '165', 'auto', 'auto']
                        },
                        {
                            id: 'arrow-info',
                            symbolName: 'arrow-info',
                            display: 'none',
                            type: 'rect',
                            rect: ['66', '488px', '1821', '165', 'auto', 'auto']
                        },
                        {
                            id: 'bonus-info',
                            symbolName: 'bonus-info',
                            display: 'none',
                            type: 'rect',
                            rect: ['66', '489px', '1821', '164', 'auto', 'auto']
                        },
                        {
                            id: 'border-line',
                            display: 'none',
                            type: 'image',
                            rect: ['83px', '488px', '1790px', '3px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ver-002/border-line.jpg",'0px','0px']
                        },
                        {
                            id: 'links-info',
                            symbolName: 'links-info',
                            display: 'none',
                            type: 'rect',
                            rect: ['66', '854px', '1717', '163', 'auto', 'auto']
                        },
                        {
                            id: 'medals-info',
                            symbolName: 'medals-info',
                            display: 'none',
                            type: 'rect',
                            rect: ['66', '855px', '1717', '163', 'auto', 'auto']
                        },
                        {
                            id: 'badges-info',
                            symbolName: 'badges-info',
                            display: 'none',
                            type: 'rect',
                            rect: ['66', '856px', '1717', '162', 'auto', 'auto']
                        },
                        {
                            id: 'border-line-2',
                            display: 'none',
                            type: 'image',
                            rect: ['83px', '849px', '1790px', '3px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ver-002/border-line.jpg",'0px','0px']
                        },
                        {
                            id: 'i-icon',
                            display: 'none',
                            type: 'image',
                            rect: ['136px', '974px', '35px', '35px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"ver-002/i-icon.png",'0px','0px']
                        },
                        {
                            id: 'closebutton2',
                            type: 'image',
                            rect: ['1802px', '995px', '93px', '33px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"closebutton.png",'0px','0px']
                        },
                        {
                            id: 'course-info',
                            symbolName: 'course-info',
                            display: 'none',
                            type: 'rect',
                            rect: ['988', '110px', '894', '163', 'auto', 'auto']
                        },
                        {
                            id: 'personal-info',
                            symbolName: 'personal-info',
                            display: 'none',
                            type: 'rect',
                            rect: ['988', '112px', '894', '163', 'auto', 'auto']
                        },
                        {
                            id: 'points-info',
                            symbolName: 'points-info',
                            display: 'none',
                            type: 'rect',
                            rect: ['974px', '162px', '894', '163', 'auto', 'auto']
                        },
                        {
                            id: 'volume-info',
                            symbolName: 'volume-info',
                            display: 'none',
                            type: 'rect',
                            rect: ['988', '110px', '894', '163', 'auto', 'auto']
                        },
                        {
                            id: 'haloheader',
                            type: 'image',
                            rect: ['99px', '128px', '301px', '34px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ver-002/Help-NavIcons-title.png",'0px','0px']
                        },
                        {
                            id: 'i-icon-text',
                            display: 'none',
                            type: 'text',
                            rect: ['185px', '979px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Find and click the dots that reveal more information",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(255,255,255,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'medalsicon',
                            symbolName: 'medalsicon',
                            type: 'rect',
                            rect: ['1066px', '665px', '546', '208', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['1.10447','1.14644']]
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
                            "${points-info}",
                            'none',
                            'none'
                        ],
                        [
                            "eid19",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bonus-info}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11",
                            "display",
                            0,
                            0,
                            "linear",
                            "${personal-info}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14",
                            "display",
                            0,
                            0,
                            "linear",
                            "${border-line-2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid18",
                            "display",
                            0,
                            0,
                            "linear",
                            "${border-line}",
                            'none',
                            'none'
                        ],
                        [
                            "eid15",
                            "display",
                            0,
                            0,
                            "linear",
                            "${badges-info}",
                            'none',
                            'none'
                        ],
                        [
                            "eid24",
                            "display",
                            0,
                            0,
                            "linear",
                            "${red1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16",
                            "display",
                            0,
                            0,
                            "linear",
                            "${medals-info}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13",
                            "display",
                            0,
                            0,
                            "linear",
                            "${i-icon}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12",
                            "display",
                            0,
                            0,
                            "linear",
                            "${course-info}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8",
                            "display",
                            0,
                            0,
                            "linear",
                            "${i-icon-text}",
                            'none',
                            'none'
                        ],
                        [
                            "eid9",
                            "display",
                            0,
                            0,
                            "linear",
                            "${volume-info}",
                            'none',
                            'none'
                        ],
                        [
                            "eid22",
                            "display",
                            0,
                            0,
                            "linear",
                            "${red5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid20",
                            "display",
                            0,
                            0,
                            "linear",
                            "${arrow-info}",
                            'none',
                            'none'
                        ],
                        [
                            "eid21",
                            "display",
                            0,
                            0,
                            "linear",
                            "${nav-info}",
                            'none',
                            'none'
                        ],
                        [
                            "eid23",
                            "display",
                            0,
                            0,
                            "linear",
                            "${red4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17",
                            "display",
                            0,
                            0,
                            "linear",
                            "${links-info}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "medalsicon": {
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
                            id: 'MedalsIcons3',
                            rect: ['-3px', '-8px', '541px', '188px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ver-002/Help-NavIcons-Medals.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '546px', '208px']
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
            "volume-info": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['31px', '84px', '619px', '28px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', ''],
                            id: 'TextCopy8',
                            text: 'Halo Quest includes narration. Use this drop-down menu to access the audio controls and view the narration transcript for each page. ',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            type: 'text',
                            userClass: '',
                            rect: ['34px', '19px', '271px', '49px', 'auto', 'auto'],
                            id: 'Text5',
                            text: 'Audio Controls',
                            align: 'left',
                            font: ['Times New Roman, Times, serif', [40, 'px'], 'rgba(255,255,255,1)', '400', 'none solid rgb(255, 255, 255)', 'italic', 'break-word', '']
                        },
                        {
                            rect: ['696px', '67px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            id: 'Text2',
                            text: 'Show Transcript',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['709px', '92px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            id: 'Text3',
                            text: 'Pause / Play',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['734px', '116px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            id: 'Text4',
                            text: 'Replay',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['31px', '74px', '640px', '1px', 'auto', 'auto'],
                            id: 'border-line6',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ver-002/border-line.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '894px', '163px']
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
            "points-info": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-148px', '35px', '1053px', '28px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', ''],
                            id: 'Text',
                            text: '<p style=\"margin:0px\">​Keeps track of your points earned as you complete activities, and a bronze, silver, or gold medal is awarded based on your final score. If you do not earn enough points for a bronze medal you should re-take the e-learn.</p><p style=\"margin: 0px;\"></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            type: 'text',
                            id: 'title',
                            text: 'Points Bar',
                            userClass: '',
                            rect: ['-146px', '-32px', '277px', '49px', 'auto', 'auto'],
                            font: ['Times New Roman, Times, serif', [40, 'px'], 'rgba(255,255,255,1)', '400', 'none solid rgb(255, 255, 255)', 'italic', 'break-word', ''],
                            align: 'left',
                            tag: 'h4'
                        },
                        {
                            type: 'image',
                            id: 'border-line6',
                            rect: ['-147px', '20', '1044px', '1px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ver-002/border-line.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '894px', '163px']
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
            "personal-info": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['26px', '79px', '845px', '28px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', ''],
                            id: 'TextCopy7',
                            text: '  Takes you to the medals and badges you have earned through your quest.  ',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            type: 'text',
                            userClass: '',
                            rect: ['24px', '15px', '463px', '49px', 'auto', 'auto'],
                            id: 'Text2',
                            text: 'Halo Quest Personal Stats',
                            align: 'left',
                            font: ['Times New Roman, Times, serif', [40, 'px'], 'rgba(255,255,255,1)', '400', 'none solid rgb(255, 255, 255)', 'italic', 'break-word', '']
                        },
                        {
                            rect: ['25px', '70px', '799px', '1px', 'auto', 'auto'],
                            id: 'border-line3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ver-002/border-line.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '894px', '163px']
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
            "course-info": {
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
                            rect: ['-4023px', '-733px', '8940px', '1630px', 'auto', 'auto'],
                            display: 'none',
                            id: 'CourseMenu',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/CourseMenu.svg', '0px', '0px']
                        },
                        {
                            rect: ['692px', '30px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(196, 196, 196)', 'normal', 'break-word', 'nowrap'],
                            display: 'none',
                            id: 'Text7',
                            text: 'Halo Quest Tips',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['692px', '53px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,0,0,1.00)', '400', 'none solid rgb(196, 196, 196)', 'normal', 'break-word', 'nowrap'],
                            display: 'none',
                            id: 'Text8',
                            text: 'City View',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['692px', '76px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(196,196,196,1)', '400', 'none solid rgb(196, 196, 196)', 'normal', 'break-word', 'nowrap'],
                            display: 'none',
                            id: 'Text8Copy',
                            text: '-----',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['692px', '99px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(196,196,196,1)', '400', 'none solid rgb(196, 196, 196)', 'normal', 'break-word', 'nowrap'],
                            display: 'none',
                            id: 'Text8Copy2',
                            text: 'Hello Halo',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['692px', '122px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(196,196,196,1)', '400', 'none solid rgb(196, 196, 196)', 'normal', 'break-word', 'nowrap'],
                            display: 'none',
                            id: 'Text8Copy3',
                            text: 'Halo For Journals',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['18px', '61px', '824px', '56px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(255, 0, 0)', 'normal', 'break-word', ''],
                            id: 'Text2',
                            text: '<p style=\"margin: 0px;\">As you complete each section of the course, the links in the drop-down menu become active to allow you to revisit sections to review content.​</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            type: 'image',
                            id: 'border-line',
                            rect: ['26px', '50px', '827px', '1px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ver-002/border-line.jpg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['22px', '1px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text4',
                            text: 'Course Menu',
                            font: ['Times New Roman, Times, serif', [40, 'px'], 'rgba(255,255,255,1)', '400', 'none solid rgb(255, 255, 255)', 'italic', 'break-word', 'nowrap'],
                            transform: [[], [], ['-2'], [1, 1, 1]]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '894px', '163px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid29958",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text8Copy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid29959",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid29956",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text8Copy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid29960",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text8Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid18670",
                            "display",
                            0,
                            0,
                            "linear",
                            "${CourseMenu}",
                            'none',
                            'none'
                        ],
                        [
                            "eid29957",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text7}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "badges-info": {
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
                            transform: [[], [], [], ['0.1', '0.1']],
                            display: 'none',
                            rect: ['1266px', '-310px', '560px', '690px', 'auto', 'auto'],
                            id: 'redarrowupCopy6',
                            fill: ['rgba(0,0,0,0)', 'images/redarrowup.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '53px', '1713px', '105px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle2Copy5',
                            stroke: [2, 'rgba(255,0,0,1.00)', 'solid'],
                            display: 'none',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['17px', '17px', '1683px', '28px', 'auto', 'auto'],
                            id: 'TextCopy5',
                            text: 'While you are exploring Halo Quest, as well as earning points towards completion medals you can earn badges for specific achievements. Are you an \"eagle eyed\" learner, or maybe you want to be a \"super star\" pupil? Keep checking your Personal Stats page to see how many badges you have earned after you have completed all the sections in a module.',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', ''],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1717px', '162px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid29803",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid29802",
                            "display",
                            0,
                            0,
                            "linear",
                            "${redarrowupCopy6}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "medals-info": {
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
                            rect: ['0px', '54px', '1713px', '105px', 'auto', 'auto'],
                            id: 'Rectangle2Copy4',
                            stroke: [2, 'rgba(255,0,0,1.00)', 'solid'],
                            display: 'none',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['21px', '12px', '1683px', '28px', 'auto', 'auto'],
                            id: 'TextCopy4',
                            text: '<p style=\"margin: 0px;\">For each Halo Quest module, you could be awarded a bronze, silver, or gold medal based on the points earned in that module. The level you achieve will count towards the overall ranking of your business unit on the Halo Quest Leaderboard.​</p>',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', ''],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1717px', '163px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid29796",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy4}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "links-info": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', ''],
                            id: 'TextCopy3',
                            text: 'Click these icons as well as underlined text links to reveal additional information such as further instructions for interactions.',
                            type: 'text',
                            rect: ['21px', '17px', '1683px', '28px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1717px', '163px']
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
            "bonus-info": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['23px', '15px', '1800px', '28px', 'auto', 'auto'],
                            id: 'TextCopy2',
                            text: '<p style=\"margin: 0px;\">Be on the lookout for Bonus icons throughout the course. Click the icon to access bonus activities for the opportunity to earn more points towards medals!​</p>',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', ''],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1821px', '164px']
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
            "arrow-info": {
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
                            rect: ['624px', '-310px', '560px', '690px', 'auto', 'auto'],
                            display: 'none',
                            id: 'redarrowupCopy2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/redarrowup.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '56px', '1811px', '105px', 'auto', 'auto'],
                            id: 'Rectangle2Copy',
                            stroke: [2, 'rgba(255,0,0,1.00)', 'solid'],
                            display: 'none',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', ''],
                            id: 'TextCopy',
                            text: 'Look for these arrows centered on the left and right sides of the screen.  Click the left / right arrows to navigate to the previous / next screens respectively.',
                            type: 'text',
                            rect: ['17px', '20px', '1800px', '28px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1821px', '165px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid29780",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid29779",
                            "display",
                            0,
                            0,
                            "linear",
                            "${redarrowupCopy2}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "nav-info": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '56px', '1811px', '105px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [2, 'rgba(255,0,0,1.00)', 'solid'],
                            display: 'none',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['9px', '13px', '1771px', '28px', 'auto', 'auto'],
                            id: 'Text',
                            text: 'Roll over the icons to discover the topics you will explore during your Halo Quest.  Course sections shown by moving bubbles are available to start now.  A padlock icon indicates there are prerequisites to complete before gaining access to that section.  The Halo icon indicates you have completed that section.',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', ''],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1821px', '165px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid29768",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "bonusicon": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['1px', '1px', '544px', '188px', 'auto', 'auto'],
                            id: 'BonusIcon2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ver-002/Help-NavIcons-Bonus.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '541px', '187px']
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
            "linkicons": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['1px', '0px', '541px', '188px', 'auto', 'auto'],
                            id: 'InfoLinkIcon2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ver-002/Help-NavIcons-Info.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '541px', '189px']
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
            "navarrows": {
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
                            id: 'NavArrowsIcons',
                            rect: ['0', '0', '541px', '188px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ver-002/NavArrowsIcons.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '541px', '187px']
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
            "navicon": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-3px', '2px', '541px', '188px', 'auto', 'auto'],
                            id: 'NavIcons',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ver-002/NavIcons.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '541px', '189px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("page1_edgeActions.js");
})("EDGE-9339288");
