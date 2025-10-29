/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
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
                            id: 'preloader2',
                            type: 'image',
                            rect: ['929px', '531px', '62px', '18px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"preloader2.gif",'0px','0px']
                        },
                        {
                            id: 'page31',
                            symbolName: 'page',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'page30',
                            symbolName: 'page',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'page29',
                            symbolName: 'page',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'page28',
                            symbolName: 'page',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'page27',
                            symbolName: 'page',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'page26',
                            symbolName: 'page',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'page25',
                            symbolName: 'page',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'page24',
                            symbolName: 'page',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'page23',
                            symbolName: 'page',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'page22',
                            symbolName: 'page',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'page21',
                            symbolName: 'page',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'page20',
                            symbolName: 'page',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'page19',
                            symbolName: 'page',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'page18',
                            symbolName: 'page',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'page17',
                            symbolName: 'page',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'page16',
                            symbolName: 'page',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'page15',
                            symbolName: 'page',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'page14',
                            symbolName: 'page',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'page13',
                            symbolName: 'page',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'page12',
                            symbolName: 'page',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'page11',
                            symbolName: 'page',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'page10',
                            symbolName: 'page',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'page9',
                            symbolName: 'page',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'page8',
                            symbolName: 'page',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'page7',
                            symbolName: 'page',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'page6',
                            symbolName: 'page',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'page5',
                            symbolName: 'page',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'page4',
                            symbolName: 'page',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'page3',
                            symbolName: 'page',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'page2',
                            symbolName: 'page',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'page1',
                            symbolName: 'page',
                            display: 'block',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'leaderboard-3',
                            symbolName: 'leaderboard-3',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'leaderboard-2',
                            symbolName: 'leaderboard-2',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'leaderboard-1',
                            symbolName: 'leaderboard-1',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'header',
                            symbolName: 'header',
                            type: 'rect',
                            rect: ['0', '0', '1920', '80', 'auto', 'auto']
                        },
                        {
                            id: 'linkBlocker',
                            display: 'block',
                            type: 'rect',
                            rect: ['1082px', '0px', '838px', '92px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'btn_next',
                            symbolName: 'btn_next',
                            display: 'none',
                            type: 'rect',
                            rect: ['1601', '937px', '207', '72', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'btn_prev',
                            symbolName: 'btn_prev',
                            display: 'none',
                            type: 'rect',
                            rect: ['1365', '937px', '207', '72', 'auto', 'auto'],
                            cursor: 'pointer'
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
                    duration: 3779,
                    autoPlay: true,
                    data: [
                        [
                            "eid41",
                            "display",
                            0,
                            0,
                            "linear",
                            "${page14}",
                            'none',
                            'none'
                        ],
                        [
                            "eid47",
                            "display",
                            0,
                            0,
                            "linear",
                            "${page30}",
                            'none',
                            'none'
                        ],
                        [
                            "eid26",
                            "display",
                            0,
                            0,
                            "linear",
                            "${leaderboard-1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid38",
                            "display",
                            0,
                            0,
                            "linear",
                            "${page11}",
                            'none',
                            'none'
                        ],
                        [
                            "eid2",
                            "display",
                            0,
                            0,
                            "linear",
                            "${page1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid28",
                            "display",
                            0,
                            0,
                            "linear",
                            "${leaderboard-3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid36",
                            "display",
                            0,
                            0,
                            "linear",
                            "${page9}",
                            'none',
                            'none'
                        ],
                        [
                            "eid48",
                            "display",
                            0,
                            0,
                            "linear",
                            "${page20}",
                            'none',
                            'none'
                        ],
                        [
                            "eid30",
                            "display",
                            0,
                            0,
                            "linear",
                            "${page3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid34",
                            "display",
                            0,
                            0,
                            "linear",
                            "${page7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid40",
                            "display",
                            0,
                            0,
                            "linear",
                            "${page13}",
                            'none',
                            'none'
                        ],
                        [
                            "eid46",
                            "display",
                            0,
                            0,
                            "linear",
                            "${page19}",
                            'none',
                            'none'
                        ],
                        [
                            "eid39",
                            "display",
                            0,
                            0,
                            "linear",
                            "${page12}",
                            'none',
                            'none'
                        ],
                        [
                            "eid24",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_next}",
                            'none',
                            'none'
                        ],
                        [
                            "eid33",
                            "display",
                            0,
                            0,
                            "linear",
                            "${page6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid49",
                            "display",
                            0,
                            0,
                            "linear",
                            "${page21}",
                            'none',
                            'none'
                        ],
                        [
                            "eid56",
                            "display",
                            0,
                            0,
                            "linear",
                            "${page28}",
                            'none',
                            'none'
                        ],
                        [
                            "eid29",
                            "display",
                            0,
                            0,
                            "linear",
                            "${page2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid51",
                            "display",
                            0,
                            0,
                            "linear",
                            "${page23}",
                            'none',
                            'none'
                        ],
                        [
                            "eid32",
                            "display",
                            0,
                            0,
                            "linear",
                            "${page5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid44",
                            "display",
                            0,
                            0,
                            "linear",
                            "${page17}",
                            'none',
                            'none'
                        ],
                        [
                            "eid43",
                            "display",
                            0,
                            0,
                            "linear",
                            "${page16}",
                            'none',
                            'none'
                        ],
                        [
                            "eid58",
                            "display",
                            0,
                            0,
                            "linear",
                            "${page31}",
                            'none',
                            'none'
                        ],
                        [
                            "eid27",
                            "display",
                            0,
                            0,
                            "linear",
                            "${leaderboard-2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid54",
                            "display",
                            0,
                            0,
                            "linear",
                            "${page26}",
                            'none',
                            'none'
                        ],
                        [
                            "eid55",
                            "display",
                            0,
                            0,
                            "linear",
                            "${page27}",
                            'none',
                            'none'
                        ],
                        [
                            "eid42",
                            "display",
                            0,
                            0,
                            "linear",
                            "${page15}",
                            'none',
                            'none'
                        ],
                        [
                            "eid52",
                            "display",
                            0,
                            0,
                            "linear",
                            "${page24}",
                            'none',
                            'none'
                        ],
                        [
                            "eid31",
                            "display",
                            0,
                            0,
                            "linear",
                            "${page4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid37",
                            "display",
                            0,
                            0,
                            "linear",
                            "${page10}",
                            'none',
                            'none'
                        ],
                        [
                            "eid25",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_prev}",
                            'none',
                            'none'
                        ],
                        [
                            "eid50",
                            "display",
                            0,
                            0,
                            "linear",
                            "${page22}",
                            'none',
                            'none'
                        ],
                        [
                            "eid35",
                            "display",
                            0,
                            0,
                            "linear",
                            "${page8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid57",
                            "display",
                            0,
                            0,
                            "linear",
                            "${page29}",
                            'none',
                            'none'
                        ],
                        [
                            "eid45",
                            "display",
                            0,
                            0,
                            "linear",
                            "${page18}",
                            'none',
                            'none'
                        ],
                        [
                            "eid53",
                            "display",
                            0,
                            0,
                            "linear",
                            "${page25}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "header": {
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
                            display: 'none',
                            symbolName: 'listsOfPagesDropdown',
                            rect: ['1542', '78px', '369', '413', 'auto', 'auto'],
                            id: 'listsOfPagesDropdown'
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'audioDropdown',
                            rect: ['1542', '77px', '369', '241', 'auto', 'auto'],
                            id: 'audioDropdown'
                        },
                        {
                            rect: ['0px', '0px', '1920px', '77px', 'auto', 'auto'],
                            id: 'bgWht',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['357px', '28px', '1px', '41px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(223,47,29,1.00)']
                        },
                        {
                            rect: ['0px', '77px', '1920px', '1px', 'auto', 'auto'],
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(223,47,29,1.00)']
                        },
                        {
                            rect: ['1228px', '47px', '410px', '1px', 'auto', 'auto'],
                            id: 'Rectangle4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(223,47,29,1.00)']
                        },
                        {
                            rect: ['1753px', '16px', '1px', '61px', 'auto', 'auto'],
                            id: 'Rectangle5Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(223,47,29,1.00)']
                        },
                        {
                            rect: ['1671px', '16px', '1px', '61px', 'auto', 'auto'],
                            id: 'Rectangle5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(223,47,29,1.00)']
                        },
                        {
                            rect: ['1834px', '16px', '1px', '61px', 'auto', 'auto'],
                            id: 'Rectangle5Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(223,47,29,1.00)']
                        },
                        {
                            rect: ['390px', '31px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Georgia, Times New Roman, Times, serif', [26, 'px'], 'rgba(223,47,29,1.00)', '400', 'none', 'italic', 'break-word', 'nowrap'],
                            id: 'screenTitle',
                            text: '<p style=\"margin: 0px; font-family: CharterITCCom-Italic; font-weight: 400; font-style: normal; text-decoration: none; font-size: 28px; color: rgb(223, 47, 29); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">&nbsp;</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['390px', '5px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Georgia, Times New Roman, Times, serif', [26, 'px'], 'rgba(223,47,29,1.00)', '400', 'none', 'italic', 'break-word', 'nowrap'],
                            id: 'screenTitle2',
                            text: '<p style=\"margin: 0px; font-family: CharterITCCom-Italic; font-weight: 400; font-style: normal; text-decoration: none; font-size: 28px; color: rgb(223, 47, 29); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">&nbsp;</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['392', '50px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['CharterITCCom-Italic', [28, 'px'], 'rgba(223,47,29,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['70px', '30px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​PwC’s Halo Quest</p>',
                            font: ['Georgia, Times New Roman, Times, serif', [28, 'px'], 'rgba(223,47,29,1.00)', '600', 'none', 'italic', 'break-word', 'nowrap'],
                            type: 'text'
                        },
                        {
                            rect: ['1115px', '30px', '104px', '35px', 'auto', 'auto'],
                            font: ['CharterITCCom-Italic', [28, 'px'], 'rgba(223,47,29,1.00)', '400', 'none', 'normal', 'break-word', ''],
                            id: 'score',
                            text: '<p style=\"margin: 0px;\">​0</p>',
                            align: 'right',
                            type: 'text'
                        },
                        {
                            id: 'person_icon',
                            type: 'image',
                            rect: ['1699px', '34px', '26px', '32px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/person_icon.svg', '0px', '0px']
                        },
                        {
                            id: 'audio_icon',
                            type: 'image',
                            rect: ['1777px', '34px', '32px', '30px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/audio_icon.svg', '0px', '0px']
                        },
                        {
                            id: 'menu_icon',
                            type: 'image',
                            rect: ['1861px', '41px', '30px', '17px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/menu_icon.svg', '0px', '0px']
                        },
                        {
                            rect: ['1672px', '14px', '80px', '61px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'personIcon',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(161,161,161,0)']
                        },
                        {
                            rect: ['1835px', '16px', '85px', '61px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'list',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(161,161,161,0.00)']
                        },
                        {
                            rect: ['1754px', '16px', '80px', '61px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'audio',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(161,161,161,0.00)']
                        },
                        {
                            rect: ['1228px', '45px', '0px', '5px', 'auto', 'auto'],
                            id: 'pointBar',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(241,9,9,1.00)']
                        },
                        {
                            id: 'gold',
                            type: 'image',
                            rect: ['1601px', '28px', '36px', '36px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/gold.svg', '0px', '0px']
                        },
                        {
                            id: 'silver',
                            type: 'image',
                            rect: ['1548px', '28px', '36px', '36px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/silver.svg', '0px', '0px']
                        },
                        {
                            id: 'bronze',
                            type: 'image',
                            rect: ['1487px', '28px', '36px', '36px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bronze.svg', '0px', '0px']
                        },
                        {
                            id: 'bright-bronze',
                            type: 'image',
                            rect: ['1487px', '28px', '36px', '36px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/other_images/bright-bronze.png', '0px', '0px']
                        },
                        {
                            id: 'bright-silver',
                            type: 'image',
                            rect: ['1548px', '28px', '36px', '36px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/other_images/bright-silver.png', '0px', '0px']
                        },
                        {
                            id: 'bright-gold',
                            type: 'image',
                            rect: ['1602px', '28px', '36px', '36px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/other_images/bright-gold.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1920px', '80px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid1",
                            "display",
                            0,
                            0,
                            "linear",
                            "${listsOfPagesDropdown}",
                            'none',
                            'none'
                        ],
                        [
                            "eid5",
                            "display",
                            0,
                            0,
                            "linear",
                            "${audioDropdown}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "listsOfPagesDropdown": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '369px', '460px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '10px', '10px 10px'],
                            id: 'bg',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(192,192,192,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'tips',
                            text: '<p style=\"margin: 0px;\">​How to use Halo Quest</p>',
                            cursor: 'pointer',
                            rect: ['31px', '45', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(192,192,192,1.00)', '400', 'none', 'normal', 'break-word', 'wrap'],
                            type: 'text',
                            align: 'left',
                            id: 'cityView',
                            text: '<p style=\"margin: 0px;\">City View</p>',
                            cursor: 'pointer',
                            rect: ['31px', '73px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(192,192,192,1.00)', '400', 'none', 'normal', 'break-word', 'wrap'],
                            type: 'text',
                            id: 'divider1',
                            text: '<p style=\"margin: 0px;\">---</p>',
                            align: 'left',
                            rect: ['31px', '97px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(192,192,192,1.00)', '400', 'none', 'normal', 'break-word', 'wrap'],
                            type: 'text',
                            align: 'left',
                            id: 'helloHalo',
                            text: '<p style=\"margin: 0px;\">Hello Halo</p>',
                            cursor: 'pointer',
                            rect: ['31px', '119px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(192,192,192,1)', '400', 'none solid rgb(192, 192, 192)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            align: 'left',
                            id: 'haloForJournals',
                            text: '<p style=\"margin:0px\">Halo for Journals</p>',
                            cursor: 'pointer',
                            rect: ['31px', '148px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(192,192,192,1)', '400', 'none solid rgb(192, 192, 192)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            align: 'left',
                            id: 'benefitsOfHalo',
                            text: '<p style=\"margin:0px\">Benefits of Halo for Journals</p>',
                            cursor: 'pointer',
                            rect: ['31px', '178px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(192,192,192,1.00)', '400', 'none', 'normal', 'break-word', 'wrap'],
                            type: 'text',
                            id: 'divider2',
                            text: '<p style=\"margin: 0px;\">---</p>',
                            align: 'left',
                            rect: ['31px', '204px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(192,192,192,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            align: 'left',
                            id: 'dashboard',
                            text: '<p style=\"margin: 0px;\">Halo for Journals: Dashboard</p>',
                            cursor: 'pointer',
                            rect: ['31px', '230px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(192,192,192,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            align: 'left',
                            id: 'tests',
                            text: '<p style=\"margin: 0px;\">Halo for Jornals: Tests</p>',
                            cursor: 'pointer',
                            rect: ['31px', '260px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(192,192,192,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            align: 'left',
                            id: 'action',
                            text: '<p style=\"margin: 0px;\">Halo for Journals in Action</p>',
                            cursor: 'pointer',
                            rect: ['31px', '292px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(192,192,192,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            align: 'left',
                            id: 'export',
                            text: '<p style=\"margin: 0px;\">Export &amp; Documentation</p>',
                            cursor: 'pointer',
                            rect: ['31px', '325px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(192,192,192,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            align: 'left',
                            id: 'summary',
                            text: '<p style=\"margin: 0px;\">Summary</p>',
                            cursor: 'pointer',
                            rect: ['31px', '358px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(192,192,192,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            align: 'left',
                            id: 'achievements',
                            text: '<p style=\"margin: 0px;\">Halo Quest Achievements</p>',
                            cursor: 'pointer',
                            rect: ['31px', '390px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            rect: ['27px', '46px', '305px', '23px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'blockTips',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(145,145,145,1.00)']
                        },
                        {
                            rect: ['27px', '73px', '305px', '23px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'blockCityView',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(145,145,145,1.00)']
                        },
                        {
                            rect: ['22px', '119px', '314px', '23px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'blockHelloHalo',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(145,145,145,1)']
                        },
                        {
                            rect: ['22px', '148px', '315px', '23px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'blockHaloForJournals',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(145,145,145,1)']
                        },
                        {
                            rect: ['22px', '178px', '319px', '23px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'blockBenefitsOfHalo',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(145,145,145,1)']
                        },
                        {
                            rect: ['22px', '230px', '305px', '23px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'blockDashboard',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(145,145,145,1.00)']
                        },
                        {
                            rect: ['22px', '260px', '305px', '23px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'blockTests',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(145,145,145,1.00)']
                        },
                        {
                            rect: ['22px', '292px', '305px', '23px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'blockAction',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(145,145,145,1.00)']
                        },
                        {
                            rect: ['22px', '325px', '305px', '23px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'blockExport',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(145,145,145,1.00)']
                        },
                        {
                            rect: ['22px', '358px', '305px', '23px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'blockSummary',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(145,145,145,1.00)']
                        },
                        {
                            rect: ['22px', '390px', '305px', '23px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'blockAchievements',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(145,145,145,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '369px', '460px']
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
            "page": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1920px', '1080px']
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
            "audioDropdown": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '369px', '241px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '10px', '10px'],
                            id: 'bg',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'text',
                            align: 'left',
                            textStyle: ['', '', '', '', 'none'],
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(196,196,196,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            rect: ['94px', '44px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'transcript',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 25px;\">Show Transcript</span></p>'
                        },
                        {
                            type: 'text',
                            align: 'left',
                            textStyle: ['', '', '', '', 'none'],
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [25, 'px'], 'rgba(196,196,196,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            rect: ['113px', '106px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'pausePlay',
                            text: '<p style=\"margin: 0px;\">​Pause / Play</p>'
                        },
                        {
                            type: 'text',
                            align: 'left',
                            textStyle: ['', '', '', '', 'none'],
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [25, 'px'], 'rgba(196,196,196,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            rect: ['145px', '170px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'replay',
                            text: '<p style=\"margin: 0px;\">​Replay</p>'
                        },
                        {
                            rect: ['94px', '44px', '182px', '29px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'blockTranscript',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(162,162,162,1.00)']
                        },
                        {
                            rect: ['113px', '106px', '143px', '29px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'blockPausePlay',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(162,162,162,1.00)']
                        },
                        {
                            rect: ['145px', '170px', '79px', '29px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'blockReplay',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(162,162,162,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '369px', '241px']
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
            "btn_next": {
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
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '207px', '72px', 'auto', 'auto'],
                            fill: ['rgba(236,63,63,1.00)']
                        },
                        {
                            rect: ['0px', '10px', '207px', '62px', 'auto', 'auto'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-weight: 900; color: rgb(255, 255, 255); font-size: 50px;\">NEXT</span></p>',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '207px', '72px']
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
            "btn_prev": {
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
                            id: 'RectangleCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '207px', '72px', 'auto', 'auto'],
                            fill: ['rgba(236,63,63,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px; text-align: center;\"><span style=\"font-weight: 900; color: rgb(255, 255, 255); font-size: 50px;\">PREV</span></p>',
                            type: 'text',
                            rect: ['0px', '10px', '207px', '62px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '207px', '72px']
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
            "leaderboard-1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '77px', '1922px', '1003px', 'auto', 'auto'],
                            id: 'bg',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/City-Images/PwC_Halo_StreetView.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['103px', '192px', '1716px', '784px', 'auto', 'auto'],
                            id: 'leaderboard_12',
                            fill: ['rgba(0,0,0,0)', 'images/other_images/leaderboard_1.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['90px', '186px', '1739px', '790px', 'auto', 'auto'],
                            id: 'border',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'block',
                            fill: ['rgba(255,255,255,0.50)']
                        },
                        {
                            type: 'rect',
                            rect: ['100px', '196px', '1719px', '769px', 'auto', 'auto'],
                            id: 'whtBG',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'block',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'closebutton',
                            rect: ['1800px', '1029px', '93px', '33px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/closebutton2.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['1564px', '230px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'per-module-view',
                            text: 'Per Module View',
                            cursor: 'pointer',
                            font: ['Times New Roman, Times, serif', [25, 'px'], 'rgba(216,85,62,1.00)', 'normal', 'none', 'italic', 'break-word', 'nowrap']
                        },
                        {
                            rect: ['1752px', '233px', '33px', '23px', 'auto', 'auto'],
                            id: 'dots_lines',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/other_images/dots_lines2.jpg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['868px', '224px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text3',
                            text: 'Leaderboard',
                            align: 'center',
                            font: ['Times New Roman, Times, serif', [35, 'px'], 'rgba(232,61,44,1.00)', '700', 'none', 'italic', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1920px', '1080px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid48362",
                            "display",
                            0,
                            0,
                            "linear",
                            "${whtBG}",
                            'block',
                            'block'
                        ],
                        [
                            "eid48216",
                            "display",
                            0,
                            0,
                            "linear",
                            "${leaderboard_12}",
                            'none',
                            'none'
                        ],
                        [
                            "eid48363",
                            "display",
                            0,
                            0,
                            "linear",
                            "${border}",
                            'block',
                            'block'
                        ]
                    ]
                }
            },
            "leaderboard-2": {
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
                            id: 'bg',
                            rect: ['0px', '77px', '1922px', '1003px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/City-Images/PwC_Halo_StreetView2.jpg', '0px', '0px']
                        },
                        {
                            rect: ['90px', '186px', '1739px', '790px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'border',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            display: 'block',
                            fill: ['rgba(255,255,255,0.50)']
                        },
                        {
                            rect: ['100px', '196px', '1719px', '769px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'whtBG-2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'block',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['1800px', '1029px', '93px', '33px', 'auto', 'auto'],
                            id: 'closebuttonCopy2',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/closebutton3.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['1603px', '230px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'per-list-view',
                            text: 'Per List View',
                            cursor: 'pointer',
                            font: ['Times New Roman, Times, serif', [25, 'px'], 'rgba(216,85,62,1.00)', 'normal', 'none', 'italic', 'break-word', 'nowrap']
                        },
                        {
                            type: 'image',
                            id: 'dots_linesCopy',
                            rect: ['1752px', '233px', '33px', '23px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/other_images/dots_lines3.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1920px', '1080px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid49541",
                            "display",
                            0,
                            0,
                            "linear",
                            "${whtBG-2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid49542",
                            "display",
                            0,
                            0,
                            "linear",
                            "${border}",
                            'block',
                            'block'
                        ]
                    ]
                }
            },
            "leaderboard-3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'bg',
                            type: 'image',
                            rect: ['0px', '77px', '1922px', '1003px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/City-Images/PwC_Halo_StreetView3.jpg', '0px', '0px']
                        },
                        {
                            rect: ['90px', '186px', '1739px', '790px', 'auto', 'auto'],
                            id: 'border',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.50)']
                        },
                        {
                            rect: ['100px', '196px', '1719px', '769px', 'auto', 'auto'],
                            id: 'whgBG',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            id: 'leaderboard_3',
                            type: 'image',
                            rect: ['147px', '236px', '1620px', '688px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/other_images/leaderboard_3.png', '0px', '0px']
                        },
                        {
                            rect: ['1800px', '1029px', '93px', '33px', 'auto', 'auto'],
                            id: 'closebuttonCopy3',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/closebutton4.png', '0px', '0px']
                        },
                        {
                            rect: ['193px', '429px', '53px', '72px', 'auto', 'auto'],
                            id: 'star_badge',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/other_images/star_badge.jpg', '0px', '0px']
                        },
                        {
                            id: 'scrollingContent',
                            symbolName: 'scrollingContent',
                            rect: ['191', '657px', '1551px', '248px', 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1920px', '1080px']
                        }
                    }
                },
                timeline: {
                    duration: 3779,
                    autoPlay: true,
                    data: [
                        [
                            "eid63727",
                            "display",
                            0,
                            0,
                            "linear",
                            "${star_badge}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "personalLeaderboardContent": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1494px', '305px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['792px', '180px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'md3Score',
                            text: '0000/2230',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(224,49,30,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            type: 'text'
                        },
                        {
                            rect: ['792px', '97px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'md2Score',
                            text: '0000/1750',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(224,49,30,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            type: 'text'
                        },
                        {
                            rect: ['792px', '21px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'md1Score',
                            text: '0000/1070',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(224,49,30,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            type: 'text'
                        },
                        {
                            rect: ['1173px', '180px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'md3Percentage',
                            text: '0th percentile',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(224,49,30,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            type: 'text'
                        },
                        {
                            rect: ['792px', '256px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'md4Score',
                            text: '0000/1860',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(224,49,30,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            type: 'text'
                        },
                        {
                            rect: ['1173px', '256px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'md4Percentage',
                            text: '0th percentile',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(224,49,30,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            type: 'text'
                        },
                        {
                            rect: ['1173px', '97px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'md2Percentage',
                            text: '0th percentile',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(224,49,30,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            type: 'text'
                        },
                        {
                            rect: ['1173px', '21px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'md1Percentage',
                            text: '0th percentile',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(224,49,30,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            type: 'text'
                        },
                        {
                            rect: ['4px', '13px', '225px', '54px', 'auto', 'auto'],
                            font: ['Georgia, Times New Roman, Times, serif', [22, 'px'], 'rgba(181,174,153,1.00)', '400', 'none solid rgb(224, 49, 30)', 'italic', 'break-word', ''],
                            id: 'Text',
                            text: 'Halo for Journals:<br>Introduction',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['4px', '90px', '225px', '54px', 'auto', 'auto'],
                            font: ['Georgia, Times New Roman, Times, serif', [22, 'px'], 'rgba(181,174,153,1.00)', '400', 'none solid rgb(224, 49, 30)', 'italic', 'break-word', ''],
                            id: 'TextCopy',
                            text: 'Halo for Journals:<br>Level 1 scenarios',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['4px', '166px', '225px', '54px', 'auto', 'auto'],
                            font: ['Georgia, Times New Roman, Times, serif', [22, 'px'], 'rgba(181,174,153,1.00)', '400', 'none solid rgb(224, 49, 30)', 'italic', 'break-word', ''],
                            id: 'TextCopy2',
                            text: 'Halo for Journals:<br>Level 2 scenarios',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['4px', '240px', '235px', '54px', 'auto', 'auto'],
                            font: ['Georgia, Times New Roman, Times, serif', [22, 'px'], 'rgba(181,174,153,1.00)', '400', 'none solid rgb(224, 49, 30)', 'italic', 'break-word', ''],
                            id: 'TextCopy3',
                            text: 'Halo for Journals:<br>Level 3 scenarios',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['4px', '1px', '1494px', '1px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(224,49,30,1.00)']
                        },
                        {
                            rect: ['4px', '77px', '1494px', '1px', 'auto', 'auto'],
                            id: 'RectangleCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(224,49,30,1.00)']
                        },
                        {
                            rect: ['4px', '153px', '1494px', '1px', 'auto', 'auto'],
                            id: 'RectangleCopy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(224,49,30,1.00)']
                        },
                        {
                            rect: ['4px', '230px', '1494px', '1px', 'auto', 'auto'],
                            id: 'RectangleCopy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(224,49,30,1.00)']
                        },
                        {
                            rect: ['444px', '242px', '47px', '47px', 'auto', 'auto'],
                            id: 'md4-bronze-halo',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/other_images/bronze-halo4.jpg', '0px', '0px']
                        },
                        {
                            rect: ['444px', '242px', '47px', '47px', 'auto', 'auto'],
                            id: 'md4-silver-halo',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/other_images/silver-halo4.jpg', '0px', '0px']
                        },
                        {
                            rect: ['444px', '243px', '47px', '47px', 'auto', 'auto'],
                            type: 'image',
                            id: 'md4-gold-halo',
                            opacity: '1',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/other_images/gold-halo4.jpg', '0px', '0px']
                        },
                        {
                            rect: ['444px', '168px', '47px', '47px', 'auto', 'auto'],
                            id: 'md3-bronze-halo',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/other_images/bronze-halo4.jpg', '0px', '0px']
                        },
                        {
                            rect: ['444px', '168px', '47px', '47px', 'auto', 'auto'],
                            id: 'md3-silver-halo',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/other_images/silver-halo4.jpg', '0px', '0px']
                        },
                        {
                            rect: ['444px', '168px', '47px', '47px', 'auto', 'auto'],
                            type: 'image',
                            id: 'md3-gold-halo',
                            opacity: '1',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/other_images/gold-halo4.jpg', '0px', '0px']
                        },
                        {
                            rect: ['444px', '91px', '47px', '47px', 'auto', 'auto'],
                            id: 'md2-bronze-halo',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/other_images/bronze-halo4.jpg', '0px', '0px']
                        },
                        {
                            rect: ['444px', '91px', '47px', '47px', 'auto', 'auto'],
                            id: 'md2-silver-halo',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/other_images/silver-halo4.jpg', '0px', '0px']
                        },
                        {
                            rect: ['444px', '91px', '47px', '47px', 'auto', 'auto'],
                            type: 'image',
                            id: 'md2-gold-halo',
                            opacity: '1',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/other_images/gold-halo4.jpg', '0px', '0px']
                        },
                        {
                            rect: ['445px', '16px', '47px', '47px', 'auto', 'auto'],
                            id: 'md1-bronze-halo',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/other_images/bronze-halo4.jpg', '0px', '0px']
                        },
                        {
                            rect: ['445px', '16px', '47px', '47px', 'auto', 'auto'],
                            id: 'md1-silver-halo',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/other_images/silver-halo4.jpg', '0px', '0px']
                        },
                        {
                            rect: ['445px', '16px', '47px', '47px', 'auto', 'auto'],
                            type: 'image',
                            id: 'md1-gold-halo',
                            opacity: '1',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/other_images/gold-halo4.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1498px', '305px']
                        }
                    }
                },
                timeline: {
                    duration: 3779,
                    autoPlay: true,
                    data: [
                        [
                            "eid75417",
                            "left",
                            0,
                            0,
                            "linear",
                            "${md3-silver-halo}",
                            '444px',
                            '444px'
                        ],
                        [
                            "eid75487",
                            "display",
                            0,
                            0,
                            "linear",
                            "${md4-silver-halo}",
                            'none',
                            'none'
                        ],
                        [
                            "eid77790",
                            "display",
                            3779,
                            0,
                            "linear",
                            "${md4-silver-halo}",
                            'none',
                            'none'
                        ],
                        [
                            "eid75388",
                            "display",
                            0,
                            0,
                            "linear",
                            "${md1-bronze-halo}",
                            'none',
                            'none'
                        ],
                        [
                            "eid75411",
                            "left",
                            0,
                            0,
                            "linear",
                            "${md2-bronze-halo}",
                            '444px',
                            '444px'
                        ],
                        [
                            "eid75401",
                            "left",
                            0,
                            0,
                            "linear",
                            "${md2-gold-halo}",
                            '444px',
                            '444px'
                        ],
                        [
                            "eid75485",
                            "top",
                            0,
                            0,
                            "linear",
                            "${md4-silver-halo}",
                            '242px',
                            '242px'
                        ],
                        [
                            "eid75395",
                            "top",
                            0,
                            0,
                            "linear",
                            "${md1-bronze-halo}",
                            '16px',
                            '16px'
                        ],
                        [
                            "eid75419",
                            "display",
                            0,
                            0,
                            "linear",
                            "${md3-bronze-halo}",
                            'none',
                            'none'
                        ],
                        [
                            "eid75383",
                            "left",
                            0,
                            0,
                            "linear",
                            "${md1-silver-halo}",
                            '445px',
                            '445px'
                        ],
                        [
                            "eid75414",
                            "left",
                            0,
                            0,
                            "linear",
                            "${md3-gold-halo}",
                            '444px',
                            '444px'
                        ],
                        [
                            "eid75418",
                            "display",
                            0,
                            0,
                            "linear",
                            "${md3-silver-halo}",
                            'none',
                            'none'
                        ],
                        [
                            "eid75486",
                            "left",
                            0,
                            0,
                            "linear",
                            "${md4-silver-halo}",
                            '444px',
                            '444px'
                        ],
                        [
                            "eid75398",
                            "display",
                            0,
                            0,
                            "linear",
                            "${md2-gold-halo}",
                            'none',
                            'none'
                        ],
                        [
                            "eid75374",
                            "left",
                            0,
                            0,
                            "linear",
                            "${md1-gold-halo}",
                            '445px',
                            '445px'
                        ],
                        [
                            "eid75413",
                            "display",
                            0,
                            0,
                            "linear",
                            "${md3-gold-halo}",
                            'none',
                            'none'
                        ],
                        [
                            "eid75482",
                            "top",
                            0,
                            0,
                            "linear",
                            "${md4-gold-halo}",
                            '243px',
                            '243px'
                        ],
                        [
                            "eid75380",
                            "top",
                            0,
                            0,
                            "linear",
                            "${md1-gold-halo}",
                            '16px',
                            '16px'
                        ],
                        [
                            "eid75407",
                            "left",
                            0,
                            0,
                            "linear",
                            "${md2-silver-halo}",
                            '444px',
                            '444px'
                        ],
                        [
                            "eid75420",
                            "left",
                            0,
                            0,
                            "linear",
                            "${md3-bronze-halo}",
                            '444px',
                            '444px'
                        ],
                        [
                            "eid75376",
                            "display",
                            0,
                            0,
                            "linear",
                            "${md1-silver-halo}",
                            'none',
                            'none'
                        ],
                        [
                            "eid75490",
                            "display",
                            0,
                            0,
                            "linear",
                            "${md4-bronze-halo}",
                            'none',
                            'none'
                        ],
                        [
                            "eid77791",
                            "display",
                            3779,
                            0,
                            "linear",
                            "${md4-bronze-halo}",
                            'none',
                            'none'
                        ],
                        [
                            "eid75371",
                            "display",
                            0,
                            0,
                            "linear",
                            "${md1-gold-halo}",
                            'none',
                            'none'
                        ],
                        [
                            "eid75404",
                            "display",
                            0,
                            0,
                            "linear",
                            "${md2-silver-halo}",
                            'none',
                            'none'
                        ],
                        [
                            "eid75415",
                            "top",
                            0,
                            0,
                            "linear",
                            "${md3-gold-halo}",
                            '168px',
                            '168px'
                        ],
                        [
                            "eid75409",
                            "top",
                            0,
                            0,
                            "linear",
                            "${md2-silver-halo}",
                            '91px',
                            '91px'
                        ],
                        [
                            "eid75488",
                            "top",
                            0,
                            0,
                            "linear",
                            "${md4-bronze-halo}",
                            '242px',
                            '242px'
                        ],
                        [
                            "eid75394",
                            "left",
                            0,
                            0,
                            "linear",
                            "${md1-bronze-halo}",
                            '445px',
                            '445px'
                        ],
                        [
                            "eid75484",
                            "display",
                            0,
                            0,
                            "linear",
                            "${md4-gold-halo}",
                            'none',
                            'none'
                        ],
                        [
                            "eid77789",
                            "display",
                            3779,
                            0,
                            "linear",
                            "${md4-gold-halo}",
                            'none',
                            'none'
                        ],
                        [
                            "eid75384",
                            "top",
                            0,
                            0,
                            "linear",
                            "${md1-silver-halo}",
                            '16px',
                            '16px'
                        ],
                        [
                            "eid75403",
                            "top",
                            0,
                            0,
                            "linear",
                            "${md2-gold-halo}",
                            '91px',
                            '91px'
                        ],
                        [
                            "eid75416",
                            "top",
                            0,
                            0,
                            "linear",
                            "${md3-silver-halo}",
                            '168px',
                            '168px'
                        ],
                        [
                            "eid75410",
                            "top",
                            0,
                            0,
                            "linear",
                            "${md2-bronze-halo}",
                            '91px',
                            '91px'
                        ],
                        [
                            "eid75489",
                            "left",
                            0,
                            0,
                            "linear",
                            "${md4-bronze-halo}",
                            '444px',
                            '444px'
                        ],
                        [
                            "eid75412",
                            "display",
                            0,
                            0,
                            "linear",
                            "${md2-bronze-halo}",
                            'none',
                            'none'
                        ],
                        [
                            "eid75483",
                            "left",
                            0,
                            0,
                            "linear",
                            "${md4-gold-halo}",
                            '444px',
                            '444px'
                        ],
                        [
                            "eid75421",
                            "top",
                            0,
                            0,
                            "linear",
                            "${md3-bronze-halo}",
                            '168px',
                            '168px'
                        ]
                    ]
                }
            },
            "scrollingContent": {
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
                            id: 'bgWhite',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['1px', '0px', '1551px', '234px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'down_arrow_red',
                            rect: ['1512px', '205px', '30px', '17px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/other_images/down_arrow_red.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'up_arrow_red',
                            rect: ['1512px', '7px', '30px', '17px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/other_images/up_arrow_red.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'personalLeaderboardContent',
                            symbolName: 'personalLeaderboardContent',
                            rect: ['0px', '7px', '1498', '305', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1551px', '248px']
                        }
                    }
                },
                timeline: {
                    duration: 3779,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("D1_edgeActions.js");
})("EDGE-6099545");
