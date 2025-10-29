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
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'page3',
                            type: 'image',
                            rect: ['0%', '91px', '1920px', '988px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"City-Images/PwC_Halo_Buildings-02.jpg",'0px','0px']
                        },
                        {
                            id: 'border',
                            symbolName: 'border',
                            type: 'rect',
                            rect: ['90px', '189px', '1739', '790', 'auto', 'auto']
                        },
                        {
                            id: 'black_bg',
                            display: 'none',
                            type: 'rect',
                            rect: ['100px', '723px', '1719px', '246px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0.75)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'r_btn1',
                            symbolName: 'red_cir_btn',
                            display: 'none',
                            type: 'rect',
                            rect: ['492px', '525px', '83', '83', 'auto', 'auto'],
                            opacity: '1',
                            transform: [[],[],[],['1.28916','1.35']]
                        },
                        {
                            id: 'r_btn1_overlay',
                            display: 'block',
                            type: 'ellipse',
                            rect: ['476px', '509px', '115px', '114px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0.99000000953674',
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [10,"rgba(255, 255, 255, 0.498039)","none"],
                            transform: [[],[],[],['0.88869','0.88869']]
                        },
                        {
                            id: 'r_btn2',
                            symbolName: 'red_cir_btn_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['977px', '298px', '83', '83', 'auto', 'auto'],
                            opacity: '1',
                            transform: [[],[],[],['1.28916','1.34001']]
                        },
                        {
                            id: 'r_btn2_overlay',
                            type: 'ellipse',
                            rect: ['991px', '314px', '53px', '53px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '1',
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [10,"rgba(255, 255, 255, 0.498039)","none"]
                        },
                        {
                            id: 'r_btn3',
                            symbolName: 'red_cir_btn_2',
                            display: 'none',
                            type: 'rect',
                            rect: ['1117px', '511px', '83', '83', 'auto', 'auto'],
                            opacity: '1',
                            transform: [[],[],[],['1.28916','1.28']]
                        },
                        {
                            id: 'r_btn3_overlay',
                            type: 'ellipse',
                            rect: ['1110px', '505px', '96px', '96px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '1',
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [10,"rgba(255, 255, 255, 0.498039)","none"],
                            transform: [[],[],[],['0.64139','0.64139']]
                        },
                        {
                            id: 'r_btn4',
                            symbolName: 'red_cir_btn_3',
                            display: 'none',
                            type: 'rect',
                            rect: ['1621px', '322px', '83', '83', 'auto', 'auto'],
                            opacity: '1',
                            transform: [[],[],[],['1.28916','1.28916']]
                        },
                        {
                            id: 'r_btn4_overlay',
                            type: 'ellipse',
                            rect: ['1638px', '341px', '47px', '47px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '1',
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [10,"rgba(255, 255, 255, 0.498039)","none"],
                            transform: [[],[],[],['0.79864','0.79864']]
                        },
                        {
                            id: 'D1_03a-nda2',
                            symbolName: 'D1_03a-nda',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '0', '0', 'auto', 'auto']
                        },
                        {
                            id: 'pg_3_r12',
                            display: 'none',
                            type: 'image',
                            rect: ['129px', '828px', '382px', '106px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text-png/page_3_text_1.png",'0px','0px']
                        },
                        {
                            id: 'pg_3_r22',
                            display: 'none',
                            type: 'image',
                            rect: ['554px', '828px', '406px', '106px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text-png/page_3_text_2.png",'0px','0px']
                        },
                        {
                            id: 'pg_3_r32',
                            display: 'none',
                            type: 'image',
                            rect: ['994px', '828px', '373px', '106px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text-png/page_3_text_3.png",'0px','0px']
                        },
                        {
                            id: 'pg_3_r42',
                            display: 'none',
                            type: 'image',
                            rect: ['1410px', '828px', '401px', '99px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text-png/page_3_text_4.png",'0px','0px']
                        },
                        {
                            id: 'hint',
                            display: 'none',
                            type: 'image',
                            rect: ['1720px', '1013px', '107px', '57px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"hint.png",'0px','0px']
                        },
                        {
                            id: 'right_arrow3',
                            symbolName: 'right_arrow',
                            type: 'rect',
                            rect: ['1843px', '501px', 'null', 'null', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'audio',
                            display: 'none',
                            volume: '1',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['884', '527', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"D1_03.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: '_1',
                            display: 'none',
                            type: 'text',
                            rect: ['125px', '745px', '400px', '57px', 'auto', 'auto'],
                            opacity: '1',
                            text: "1<br>",
                            align: "left",
                            userClass: " border",
                            font: ['\'Times New Roman\', Times, serif', [30, "px"], "rgba(255,255,255,1.00)", "800", "none solid rgb(241, 9, 9)", "italic", "break-word", ""]
                        },
                        {
                            id: '_2',
                            display: 'none',
                            type: 'text',
                            rect: ['554px', '745px', '400px', '57px', 'auto', 'auto'],
                            opacity: '1',
                            text: "2",
                            align: "left",
                            userClass: " border",
                            font: ['\'Times New Roman\', Times, serif', [30, "px"], "rgba(255,255,255,1.00)", "800", "none solid rgb(241, 9, 9)", "italic", "break-word", ""]
                        },
                        {
                            id: 'discover_2',
                            display: 'none',
                            type: 'text',
                            rect: ['554px', '824px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Discover more...",
                            align: "left",
                            font: ['\'Times New Roman\', Times, serif', [25, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "italic", "break-word", "nowrap"]
                        },
                        {
                            id: '_3',
                            display: 'none',
                            type: 'text',
                            rect: ['994px', '745px', '400px', '57px', 'auto', 'auto'],
                            opacity: '1',
                            text: "3",
                            align: "left",
                            userClass: " border",
                            font: ['\'Times New Roman\', Times, serif', [30, "px"], "rgba(255,255,255,1.00)", "800", "none", "italic", "break-word", ""]
                        },
                        {
                            id: 'discover_3',
                            display: 'none',
                            type: 'text',
                            rect: ['994px', '824px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Discover more...",
                            align: "left",
                            font: ['\'Times New Roman\', Times, serif', [25, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "italic", "break-word", "nowrap"]
                        },
                        {
                            id: '_4',
                            display: 'none',
                            type: 'text',
                            rect: ['1410px', '745px', '400px', '57px', 'auto', 'auto'],
                            opacity: '1',
                            text: "4",
                            align: "left",
                            userClass: " border",
                            font: ['\'Times New Roman\', Times, serif', [30, "px"], "rgba(255,255,255,1.00)", "800", "none solid rgb(241, 9, 9)", "italic", "break-word", ""]
                        },
                        {
                            id: 'discover_4',
                            display: 'none',
                            type: 'text',
                            rect: ['1410px', '825px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Discover more...",
                            align: "left",
                            font: ['\'Times New Roman\', Times, serif', [25, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "italic", "break-word", "nowrap"]
                        },
                        {
                            id: 'i-con-hint',
                            symbolName: 'i-con-hint',
                            display: 'block',
                            type: 'rect',
                            rect: ['118px', '1007px', '35', '35', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'transcript',
                            symbolName: 'transcript',
                            display: 'none',
                            type: 'rect',
                            rect: ['638px', '725px', '643', '295px', 'auto', 'auto']
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
                    duration: 21626.275,
                    autoPlay: true,
                    data: [
                        [
                            "eid79",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${r_btn1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid80",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${r_btn1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid24",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid72",
                            "top",
                            0,
                            0,
                            "linear",
                            "${r_btn1_overlay}",
                            '509px',
                            '509px'
                        ],
                        [
                            "eid48",
                            "display",
                            0,
                            0,
                            "linear",
                            "${pg_3_r22}",
                            'none',
                            'none'
                        ],
                        [
                            "eid86",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${page3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid34",
                            "left",
                            0,
                            0,
                            "linear",
                            "${_2}",
                            '554px',
                            '554px'
                        ],
                        [
                            "eid66",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${r_btn2}",
                            '1.34001',
                            '1.34001'
                        ],
                        [
                            "eid15",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid73",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${r_btn1_overlay}",
                            '0.99000000953674',
                            '0.99000000953674'
                        ],
                        [
                            "eid8",
                            "top",
                            0,
                            0,
                            "linear",
                            "${i-con-hint}",
                            '1007px',
                            '1007px'
                        ],
                        [
                            "eid81",
                            "left",
                            0,
                            0,
                            "linear",
                            "${r_btn1}",
                            '492px',
                            '492px'
                        ],
                        [
                            "eid32",
                            "height",
                            0,
                            0,
                            "linear",
                            "${_2}",
                            '57px',
                            '57px'
                        ],
                        [
                            "eid56",
                            "left",
                            0,
                            0,
                            "linear",
                            "${r_btn4}",
                            '1621px',
                            '1621px'
                        ],
                        [
                            "eid77",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${r_btn1}",
                            '1.35',
                            '1.35'
                        ],
                        [
                            "eid21",
                            "top",
                            0,
                            0,
                            "linear",
                            "${_3}",
                            '745px',
                            '745px'
                        ],
                        [
                            "eid9",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${i-con-hint}",
                            '1',
                            '0'
                        ],
                        [
                            "eid37",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid18",
                            "left",
                            0,
                            0,
                            "linear",
                            "${_4}",
                            '1410px',
                            '1410px'
                        ],
                        [
                            "eid20",
                            "display",
                            0,
                            0,
                            "linear",
                            "${discover_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid45",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${hint}",
                            '1',
                            '0'
                        ],
                        [
                            "eid22",
                            "color",
                            0,
                            0,
                            "linear",
                            "${_3}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid25",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${_3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid19",
                            "width",
                            0,
                            0,
                            "linear",
                            "${_4}",
                            '400px',
                            '400px'
                        ],
                        [
                            "eid33",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${_2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid28",
                            "display",
                            0,
                            0,
                            "linear",
                            "${discover_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid75",
                            "display",
                            0,
                            0,
                            "linear",
                            "${r_btn1_overlay}",
                            'block',
                            'block'
                        ],
                        [
                            "eid16",
                            "color",
                            0,
                            0,
                            "linear",
                            "${_4}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid67",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${r_btn2}",
                            '1.28916',
                            '1.28916'
                        ],
                        [
                            "eid47",
                            "display",
                            0,
                            0,
                            "linear",
                            "${pg_3_r32}",
                            'none',
                            'none'
                        ],
                        [
                            "eid49",
                            "display",
                            0,
                            0,
                            "linear",
                            "${pg_3_r12}",
                            'none',
                            'none'
                        ],
                        [
                            "eid23",
                            "height",
                            0,
                            0,
                            "linear",
                            "${_3}",
                            '57px',
                            '57px'
                        ],
                        [
                            "eid76",
                            "top",
                            0,
                            0,
                            "linear",
                            "${r_btn1}",
                            '525px',
                            '525px'
                        ],
                        [
                            "eid70",
                            "left",
                            0,
                            0,
                            "linear",
                            "${r_btn2}",
                            '977px',
                            '977px'
                        ],
                        [
                            "eid85",
                            "height",
                            0,
                            0,
                            "linear",
                            "${page3}",
                            '988px',
                            '988px'
                        ],
                        [
                            "eid42",
                            "width",
                            0,
                            0,
                            "linear",
                            "${_1}",
                            '400px',
                            '400px'
                        ],
                        [
                            "eid82",
                            "display",
                            0,
                            0,
                            "linear",
                            "${r_btn1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid83",
                            "display",
                            2640,
                            0,
                            "linear",
                            "${r_btn1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid26",
                            "left",
                            0,
                            0,
                            "linear",
                            "${_3}",
                            '994px',
                            '994px'
                        ],
                        [
                            "eid36",
                            "top",
                            0,
                            0,
                            "linear",
                            "${_1}",
                            '745px',
                            '745px'
                        ],
                        [
                            "eid31",
                            "color",
                            0,
                            0,
                            "linear",
                            "${_2}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid53",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${r_btn4}",
                            '1.28916',
                            '1.28916'
                        ],
                        [
                            "eid54",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${r_btn4}",
                            '1',
                            '1'
                        ],
                        [
                            "eid55",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${r_btn4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid88",
                            "top",
                            0,
                            0,
                            "linear",
                            "${page3}",
                            '91px',
                            '91px'
                        ],
                        [
                            "eid41",
                            "left",
                            0,
                            0,
                            "linear",
                            "${_1}",
                            '125px',
                            '125px'
                        ],
                        [
                            "eid52",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${r_btn4}",
                            '1.28916',
                            '1.28916'
                        ],
                        [
                            "eid63",
                            "left",
                            0,
                            0,
                            "linear",
                            "${r_btn3}",
                            '1117px',
                            '1117px'
                        ],
                        [
                            "eid60",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${r_btn3}",
                            '1.28916',
                            '1.28916'
                        ],
                        [
                            "eid40",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${_1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid95",
                            "display",
                            0,
                            0,
                            "linear",
                            "${transcript}",
                            'none',
                            'none'
                        ],
                        [
                            "eid78",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${r_btn1}",
                            '1.28916',
                            '1.28916'
                        ],
                        [
                            "eid68",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${r_btn2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid69",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${r_btn2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12",
                            "display",
                            0,
                            0,
                            "linear",
                            "${discover_4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid65",
                            "top",
                            0,
                            0,
                            "linear",
                            "${r_btn2}",
                            '298px',
                            '298px'
                        ],
                        [
                            "eid17",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${_4}",
                            '1',
                            '1'
                        ],
                        [
                            "eid57",
                            "display",
                            0,
                            0,
                            "linear",
                            "${r_btn4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid74",
                            "left",
                            0,
                            0,
                            "linear",
                            "${r_btn1_overlay}",
                            '476px',
                            '476px'
                        ],
                        [
                            "eid13",
                            "top",
                            0,
                            0,
                            "linear",
                            "${_4}",
                            '745px',
                            '745px'
                        ],
                        [
                            "eid87",
                            "left",
                            0,
                            0,
                            "linear",
                            "${page3}",
                            '0%',
                            '0%'
                        ],
                        [
                            "eid59",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${r_btn3}",
                            '1.28',
                            '1.28'
                        ],
                        [
                            "eid46",
                            "display",
                            0,
                            0,
                            "linear",
                            "${pg_3_r42}",
                            'none',
                            'none'
                        ],
                        [
                            "eid50",
                            "display",
                            0,
                            0,
                            "linear",
                            "${D1_03a-nda2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid71",
                            "display",
                            0,
                            0,
                            "linear",
                            "${r_btn2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid30",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11",
                            "display",
                            0,
                            0,
                            "linear",
                            "${i-con-hint}",
                            'block',
                            'block'
                        ],
                        [
                            "eid84",
                            "display",
                            0,
                            0,
                            "linear",
                            "${black_bg}",
                            'none',
                            'none'
                        ],
                        [
                            "eid27",
                            "width",
                            0,
                            0,
                            "linear",
                            "${_3}",
                            '400px',
                            '400px'
                        ],
                        [
                            "eid10",
                            "left",
                            0,
                            0,
                            "linear",
                            "${i-con-hint}",
                            '118px',
                            '118px'
                        ],
                        [
                            "eid64",
                            "display",
                            0,
                            0,
                            "linear",
                            "${r_btn3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid35",
                            "width",
                            0,
                            0,
                            "linear",
                            "${_2}",
                            '400px',
                            '400px'
                        ],
                        [
                            "eid51",
                            "top",
                            0,
                            0,
                            "linear",
                            "${r_btn4}",
                            '322px',
                            '322px'
                        ],
                        [
                            "eid38",
                            "height",
                            0,
                            0,
                            "linear",
                            "${_1}",
                            '57px',
                            '57px'
                        ],
                        [
                            "eid29",
                            "top",
                            0,
                            0,
                            "linear",
                            "${_2}",
                            '745px',
                            '745px'
                        ],
                        [
                            "eid39",
                            "color",
                            0,
                            0,
                            "linear",
                            "${_1}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid14",
                            "height",
                            0,
                            0,
                            "linear",
                            "${_4}",
                            '57px',
                            '57px'
                        ],
                        [
                            "eid44",
                            "display",
                            0,
                            0,
                            "linear",
                            "${hint}",
                            'none',
                            'none'
                        ],
                        [
                            "eid61",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${r_btn3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid62",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${r_btn3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid58",
                            "top",
                            0,
                            0,
                            "linear",
                            "${r_btn3}",
                            '511px',
                            '511px'
                        ],
                        [
                            "eid43",
                            "display",
                            0,
                            0,
                            "linear",
                            "${audio}",
                            'none',
                            'none'
                        ],
                            [ "eid90", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${D1_03a-nda2}', [] ] ],
                            [ "eid89", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${audio}', [] ] ]
                    ]
                }
            },
            "i-con-hint": {
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
                            rect: ['-11px', '-13px', '628px', '61px', 'auto', 'auto'],
                            display: 'block',
                            id: 'bg-blk',
                            opacity: '0.55905510872368',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['0px', '0px', '35px', '35px', 'auto', 'auto'],
                            id: 'i-icon',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ver-002/i-icon.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            display: 'block',
                            id: 'Text-hint',
                            text: 'Find and click the dots that reveal more information',
                            align: 'left',
                            rect: ['48px', '4px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '35px', '35px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid52864",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bg-blk}",
                            'block',
                            'block'
                        ],
                        [
                            "eid52858",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text-hint}",
                            'block',
                            'block'
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
            "D1_03a-nda": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/D1_03a.mp3'],
                            id: 'D1_03a-nda',
                            rect: ['141px', '991px', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid37632",
                            "display",
                            0,
                            0,
                            "linear",
                            "${D1_03a-nda}",
                            'none',
                            'none'
                        ],
                            [ "eid37621", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${D1_03a-nda}', [] ] ]
                    ]
                }
            },
            "red_cir_btn_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-1px', '0px', '85px', '83px', 'auto', 'auto'],
                            type: 'image',
                            id: 'red_cir_BtnCopy2',
                            display: 'block',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/red_cir_Btn.png', '0px', '0px']
                        },
                        {
                            rect: ['-2px', '-2px', '83px', '85px', 'auto', 'auto'],
                            type: 'image',
                            id: 'white_cir_BtnCopy2',
                            display: 'block',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/white_cir_Btn.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '83', '83']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "on": 0,
                        "off": 500
                    },
                    data: [
                        [
                            "eid26727",
                            "display",
                            0,
                            0,
                            "linear",
                            "${white_cir_BtnCopy2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid26728",
                            "display",
                            500,
                            0,
                            "linear",
                            "${white_cir_BtnCopy2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid26726",
                            "display",
                            500,
                            0,
                            "linear",
                            "${red_cir_BtnCopy2}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "red_cir_btn_2": {
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
                            rect: ['-1px', '0px', '85px', '83px', 'auto', 'auto'],
                            display: 'block',
                            id: 'red_cir_BtnCopy',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/red_cir_Btn.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['-2px', '-2px', '83px', '85px', 'auto', 'auto'],
                            display: 'block',
                            id: 'white_cir_BtnCopy',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/white_cir_Btn.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '83', '83']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "on": 0,
                        "off": 500
                    },
                    data: [
                        [
                            "eid26719",
                            "display",
                            0,
                            0,
                            "linear",
                            "${white_cir_BtnCopy}",
                            'block',
                            'block'
                        ],
                        [
                            "eid26718",
                            "display",
                            500,
                            0,
                            "linear",
                            "${white_cir_BtnCopy}",
                            'block',
                            'block'
                        ],
                        [
                            "eid26720",
                            "display",
                            500,
                            0,
                            "linear",
                            "${red_cir_BtnCopy}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "red_cir_btn_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-1px', '0px', '85px', '83px', 'auto', 'auto'],
                            type: 'image',
                            id: 'red_cir_Btn',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/red_cir_Btn.png', '0px', '0px']
                        },
                        {
                            rect: ['-2px', '-2px', '83px', '85px', 'auto', 'auto'],
                            type: 'image',
                            id: 'white_cir_Btn',
                            display: 'block',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/white_cir_Btn.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '83', '83']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "on": 0,
                        "off": 500
                    },
                    data: [
                        [
                            "eid26716",
                            "display",
                            0,
                            0,
                            "linear",
                            "${white_cir_Btn}",
                            'block',
                            'block'
                        ],
                        [
                            "eid26715",
                            "display",
                            500,
                            0,
                            "linear",
                            "${white_cir_Btn}",
                            'block',
                            'block'
                        ],
                        [
                            "eid28650",
                            "display",
                            0,
                            0,
                            "linear",
                            "${red_cir_Btn}",
                            'none',
                            'none'
                        ],
                        [
                            "eid26717",
                            "display",
                            500,
                            0,
                            "linear",
                            "${red_cir_Btn}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "red_cir_btn": {
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
                            rect: ['-1px', '0px', '85px', '83px', 'auto', 'auto'],
                            display: 'none',
                            id: 'red_cir_Btn',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/red_cir_Btn.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['-2px', '-2px', '84px', '86px', 'auto', 'auto'],
                            display: 'block',
                            id: 'white_cir_Btn',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/white_cir_Btn.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '83', '83']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "on": 0,
                        "off": 500
                    },
                    data: [
                        [
                            "eid28562",
                            "display",
                            0,
                            0,
                            "linear",
                            "${red_cir_Btn}",
                            'none',
                            'none'
                        ],
                        [
                            "eid26714",
                            "display",
                            500,
                            0,
                            "linear",
                            "${red_cir_Btn}",
                            'none',
                            'none'
                        ],
                        [
                            "eid26712",
                            "display",
                            0,
                            0,
                            "linear",
                            "${white_cir_Btn}",
                            'block',
                            'block'
                        ],
                        [
                            "eid26713",
                            "display",
                            500,
                            0,
                            "linear",
                            "${white_cir_Btn}",
                            'block',
                            'block'
                        ]
                    ]
                }
            },
            "border": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['3px', '-1px', '1713px', '773px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.00327', '0.99683']],
                            id: 'imaginary_border',
                            stroke: [10, 'rgba(255,255,255,0.50)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
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
                            rect: ['0px', '0px', '643px', '295px', 'auto', 'auto'],
                            id: 'Rectangle3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.75)']
                        },
                        {
                            rect: ['27px', '56px', '590px', '270px', 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">Halo for Journals is one of many Halo applications.&nbsp;</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">​</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">Why journals? They may sound boring but they are a big issue for those who work in finance. They are the gap between the underlying financial systems and the results and are used either to correct errors or create frauds.&nbsp;</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">​</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">Find and click the dots that reveal more information.&nbsp;</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">​</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">​</p>',
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
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['617px', '4px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [23, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'close',
                            text: '<p style=\"margin: 0px;\">​X</p>',
                            cursor: 'pointer',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '643px', '295px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("page4_edgeActions.js");
})("EDGE-9339288");
