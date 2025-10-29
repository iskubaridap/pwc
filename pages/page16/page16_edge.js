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
                            display: 'none',
                            type: 'image',
                            rect: ['0', '70px', '1920px', '1080px', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"8bg.png",'0px','0px'],
                            transform: [[],[],[],['1.12999','1.12999']]
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['0px', '94px', '1920px', '992px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'laptop-blank',
                            type: 'image',
                            rect: ['-201px', '82px', '2352px', '1086px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"other_images/blank-laptop.png",'0px','0px']
                        },
                        {
                            id: 'whitearrowright3Copy2',
                            display: 'block',
                            type: 'image',
                            rect: ['1844px', '501px', '40px', '76px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"other_images/right_arrow_red.png",'0px','0px']
                        },
                        {
                            id: 'whitearrowright3Copy',
                            display: 'none',
                            type: 'image',
                            rect: ['1844px', '501px', '40px', '72px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"other_images/right_arrow_red.png",'0px','0px']
                        },
                        {
                            id: 'whitearrowright3',
                            display: 'none',
                            type: 'image',
                            rect: ['1844px', '501px', '40px', '72px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"other_images/right_arrow_red.png",'0px','0px']
                        },
                        {
                            id: 'Pasted24',
                            display: 'none',
                            type: 'image',
                            rect: ['262px', '166px', '1395px', '854px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"Pasted24.svg",'0px','0px']
                        },
                        {
                            id: 'Rectangle3',
                            display: 'none',
                            type: 'rect',
                            rect: ['342px', '247px', '1233px', '598px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],['1.21','1.21']]
                        },
                        {
                            id: 'video',
                            display: 'block',
                            type: 'video',
                            tag: 'video',
                            rect: ['363px', '202px', '1245px', '627px', 'auto', 'auto'],
                            opacity: '1',
                            source: [vid+"D1_HaloAction.mp4"],
                            preload: 'auto'
                        },
                        {
                            id: 'snapshot',
                            display: 'block',
                            type: 'image',
                            rect: ['5479px', '3049px', '1245px', '627px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"snapshot.png",'0px','0px']
                        },
                        {
                            id: 'whitearrowleft2Copy2',
                            display: 'block',
                            type: 'image',
                            rect: ['34px', '501px', '39px', '72px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"other_images/left_arrow_red.png",'0px','0px']
                        },
                        {
                            id: 'whitearrowleft2Copy',
                            display: 'none',
                            type: 'image',
                            rect: ['35px', '501px', '39px', '72px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"other_images/left_arrow_red.png",'0px','0px']
                        },
                        {
                            id: 'whitearrowleft2',
                            display: 'none',
                            type: 'image',
                            rect: ['35px', '501px', '39px', '72px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"other_images/left_arrow_red.png",'0px','0px']
                        },
                        {
                            id: 'RectangleCopy',
                            type: 'rect',
                            rect: ['363px', '199px', '1245px', '16px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(211, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['363px', '814px', '1245px', '35px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(211, 0, 0)","none"]
                        },
                        {
                            id: 'transcript',
                            symbolName: 'transcript',
                            display: 'none',
                            type: 'rect',
                            rect: ['638px', '761px', '643', '265px', 'auto', 'auto']
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
                    duration: 5000,
                    autoPlay: true,
                    labels: {
                        "start": 0,
                        "zoom": 1000,
                        "play_video": 1999,
                        "charts": 3000,
                        "fade": 4000,
                        "fadeout": 5000
                    },
                    data: [
                        [
                            "eid21",
                            "left",
                            1917,
                            0,
                            "linear",
                            "${whitearrowleft2Copy}",
                            '35px',
                            '35px'
                        ],
                        [
                            "eid48",
                            "opacity",
                            4000,
                            1000,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid35",
                            "opacity",
                            4000,
                            1000,
                            "linear",
                            "${snapshot}",
                            '1',
                            '0'
                        ],
                        [
                            "eid33",
                            "display",
                            0,
                            0,
                            "linear",
                            "${snapshot}",
                            'block',
                            'block'
                        ],
                        [
                            "eid34",
                            "display",
                            1999,
                            0,
                            "linear",
                            "${snapshot}",
                            'block',
                            'none'
                        ],
                        [
                            "eid23",
                            "top",
                            0,
                            0,
                            "linear",
                            "${whitearrowleft2Copy2}",
                            '501px',
                            '501px'
                        ],
                        [
                            "eid27",
                            "left",
                            0,
                            0,
                            "linear",
                            "${whitearrowleft2Copy2}",
                            '34px',
                            '34px'
                        ],
                        [
                            "eid86",
                            "left",
                            1000,
                            1000,
                            "linear",
                            "${_8bg}",
                            '0px',
                            '-1px'
                        ],
                        [
                            "eid57",
                            "height",
                            2020,
                            0,
                            "linear",
                            "${Pasted24}",
                            '854px',
                            '854px'
                        ],
                        [
                            "eid87",
                            "scaleX",
                            1000,
                            1000,
                            "linear",
                            "${_8bg}",
                            '1',
                            '1.12999'
                        ],
                        [
                            "eid13",
                            "opacity",
                            4000,
                            1000,
                            "linear",
                            "${whitearrowleft2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid26",
                            "height",
                            0,
                            0,
                            "linear",
                            "${whitearrowleft2Copy2}",
                            '72px',
                            '72px'
                        ],
                        [
                            "eid45",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid46",
                            "scaleY",
                            1000,
                            1000,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '1.21'
                        ],
                        [
                            "eid40",
                            "display",
                            9,
                            0,
                            "linear",
                            "${video}",
                            'block',
                            'block'
                        ],
                        [
                            "eid41",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${video}",
                            'block',
                            'block'
                        ],
                        [
                            "eid63",
                            "height",
                            2786,
                            0,
                            "linear",
                            "${whitearrowright3}",
                            '72px',
                            '72px'
                        ],
                        [
                            "eid64",
                            "display",
                            0,
                            0,
                            "linear",
                            "${whitearrowright3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid65",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${whitearrowright3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid80",
                            "left",
                            0,
                            0,
                            "linear",
                            "${whitearrowright3Copy2}",
                            '1844px',
                            '1844px'
                        ],
                        [
                            "eid77",
                            "height",
                            0,
                            0,
                            "linear",
                            "${whitearrowright3Copy2}",
                            '76px',
                            '76px'
                        ],
                        [
                            "eid16",
                            "top",
                            1942,
                            0,
                            "linear",
                            "${whitearrowleft2Copy}",
                            '501px',
                            '501px'
                        ],
                        [
                            "eid81",
                            "width",
                            0,
                            0,
                            "linear",
                            "${whitearrowright3Copy2}",
                            '40px',
                            '40px'
                        ],
                        [
                            "eid17",
                            "height",
                            1917,
                            0,
                            "linear",
                            "${whitearrowleft2Copy}",
                            '72px',
                            '72px'
                        ],
                        [
                            "eid28",
                            "width",
                            0,
                            0,
                            "linear",
                            "${whitearrowleft2Copy2}",
                            '39px',
                            '39px'
                        ],
                        [
                            "eid36",
                            "left",
                            0,
                            0,
                            "linear",
                            "${snapshot}",
                            '5479px',
                            '5479px'
                        ],
                        [
                            "eid53",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${Pasted24}",
                            '75px',
                            '166px'
                        ],
                        [
                            "eid54",
                            "scaleX",
                            1000,
                            1000,
                            "linear",
                            "${Pasted24}",
                            '1',
                            '1.22'
                        ],
                        [
                            "eid29",
                            "top",
                            0,
                            0,
                            "linear",
                            "${snapshot}",
                            '3049px',
                            '3049px'
                        ],
                        [
                            "eid83",
                            "scaleY",
                            1000,
                            1000,
                            "linear",
                            "${_8bg}",
                            '1',
                            '1.12999'
                        ],
                        [
                            "eid49",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '342px',
                            '342px'
                        ],
                        [
                            "eid50",
                            "left",
                            1000,
                            1000,
                            "linear",
                            "${Rectangle3}",
                            '342px',
                            '317px'
                        ],
                        [
                            "eid14",
                            "left",
                            2904,
                            0,
                            "linear",
                            "${whitearrowleft2}",
                            '35px',
                            '35px'
                        ],
                        [
                            "eid74",
                            "left",
                            1954,
                            0,
                            "linear",
                            "${whitearrowright3Copy}",
                            '1844px',
                            '1844px'
                        ],
                        [
                            "eid51",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid52",
                            "scaleX",
                            1000,
                            1000,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '1.21'
                        ],
                        [
                            "eid69",
                            "top",
                            1954,
                            0,
                            "linear",
                            "${whitearrowright3Copy}",
                            '501px',
                            '501px'
                        ],
                        [
                            "eid55",
                            "scaleY",
                            1000,
                            1000,
                            "linear",
                            "${Pasted24}",
                            '1',
                            '1.22'
                        ],
                        [
                            "eid24",
                            "display",
                            0,
                            0,
                            "linear",
                            "${whitearrowleft2Copy2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid25",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${whitearrowleft2Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid30",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${snapshot}",
                            '1',
                            '1'
                        ],
                        [
                            "eid31",
                            "scaleY",
                            1000,
                            0,
                            "linear",
                            "${snapshot}",
                            '1',
                            '1'
                        ],
                        [
                            "eid32",
                            "scaleY",
                            2000,
                            0,
                            "linear",
                            "${snapshot}",
                            '1',
                            '1'
                        ],
                        [
                            "eid84",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_8bg}",
                            'none',
                            'none'
                        ],
                        [
                            "eid9",
                            "top",
                            2904,
                            0,
                            "linear",
                            "${whitearrowleft2}",
                            '501px',
                            '501px'
                        ],
                        [
                            "eid12",
                            "height",
                            2904,
                            0,
                            "linear",
                            "${whitearrowleft2}",
                            '72px',
                            '72px'
                        ],
                        [
                            "eid66",
                            "opacity",
                            4000,
                            1000,
                            "linear",
                            "${whitearrowright3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid67",
                            "left",
                            2786,
                            0,
                            "linear",
                            "${whitearrowright3}",
                            '1844px',
                            '1844px'
                        ],
                        [
                            "eid18",
                            "display",
                            0,
                            0,
                            "linear",
                            "${whitearrowleft2Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid19",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${whitearrowleft2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid20",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${whitearrowleft2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid15",
                            "width",
                            2904,
                            0,
                            "linear",
                            "${whitearrowleft2}",
                            '39px',
                            '39px'
                        ],
                        [
                            "eid10",
                            "display",
                            0,
                            0,
                            "linear",
                            "${whitearrowleft2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${whitearrowleft2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid78",
                            "display",
                            0,
                            0,
                            "linear",
                            "${whitearrowright3Copy2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid79",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${whitearrowright3Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid85",
                            "opacity",
                            4000,
                            1000,
                            "linear",
                            "${_8bg}",
                            '1',
                            '0'
                        ],
                        [
                            "eid58",
                            "opacity",
                            4000,
                            1000,
                            "linear",
                            "${Pasted24}",
                            '1',
                            '0'
                        ],
                        [
                            "eid56",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Pasted24}",
                            'none',
                            'none'
                        ],
                        [
                            "eid76",
                            "top",
                            0,
                            0,
                            "linear",
                            "${whitearrowright3Copy2}",
                            '501px',
                            '501px'
                        ],
                        [
                            "eid62",
                            "top",
                            2786,
                            0,
                            "linear",
                            "${whitearrowright3}",
                            '501px',
                            '501px'
                        ],
                        [
                            "eid59",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${Pasted24}",
                            '262px',
                            '262px'
                        ],
                        [
                            "eid60",
                            "left",
                            2020,
                            0,
                            "linear",
                            "${Pasted24}",
                            '262px',
                            '262px'
                        ],
                        [
                            "eid70",
                            "display",
                            0,
                            0,
                            "linear",
                            "${whitearrowright3Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid71",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${whitearrowright3Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid72",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${whitearrowright3Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid47",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid42",
                            "opacity",
                            4000,
                            1000,
                            "linear",
                            "${video}",
                            '1',
                            '0'
                        ],
                        [
                            "eid73",
                            "height",
                            1954,
                            0,
                            "linear",
                            "${whitearrowright3Copy}",
                            '72px',
                            '72px'
                        ],
                        [
                            "eid37",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${snapshot}",
                            '1',
                            '1'
                        ],
                        [
                            "eid38",
                            "scaleX",
                            1000,
                            0,
                            "linear",
                            "${snapshot}",
                            '1',
                            '1'
                        ],
                        [
                            "eid39",
                            "scaleX",
                            2000,
                            0,
                            "linear",
                            "${snapshot}",
                            '1',
                            '1'
                        ],
                        [
                            "eid43",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '247px',
                            '247px'
                        ],
                        [
                            "eid44",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${Rectangle3}",
                            '247px',
                            '236px'
                        ],
                        [
                            "eid82",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${_8bg}",
                            '0px',
                            '70px'
                        ],
                        [
                            "eid75",
                            "width",
                            1954,
                            0,
                            "linear",
                            "${whitearrowright3Copy}",
                            '40px',
                            '40px'
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
                            "eid88",
                            "display",
                            1999,
                            0,
                            "linear",
                            "${transcript}",
                            'none',
                            'none'
                        ],
                        [
                            "eid22",
                            "width",
                            1948,
                            0,
                            "linear",
                            "${whitearrowleft2Copy}",
                            '39px',
                            '39px'
                        ],
                        [
                            "eid68",
                            "width",
                            2786,
                            0,
                            "linear",
                            "${whitearrowright3}",
                            '40px',
                            '40px'
                        ],
                        [
                            "eid61",
                            "width",
                            2020,
                            0,
                            "linear",
                            "${Pasted24}",
                            '1395px',
                            '1395px'
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
                            rect: ['0px', '0px', '643px', '265px', 'auto', 'auto'],
                            id: 'Rectangle3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.75)']
                        },
                        {
                            rect: ['27px', '56px', '590px', '180px', 'auto', 'auto'],
                            overflow: 'auto',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">This is the Halo for Journals tests page…</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">​</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">The tests page bubble chart shows you a summary of the complete journal population, displaying the net postings by Financial Statement Line Item. For instance Gross Sales.&nbsp;</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">​</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">The size of each bubble represents relative value.</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">​</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">The summary table below the bubble chart provides relevant information about the population being displayed. We can see that this data set includes 30,000 journals.&nbsp;</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">​</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">Let’s pick the Create and Approve test… to assess the risk of journals being created and approved by the same person.&nbsp;</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">​</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">In one click you can see all the journals created and approved by the same person by Financial Statement Line Item.&nbsp;</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">​</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">We can see that the 30,000 journals have now been reduced to 60 journals.</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">​</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">At the click of a button simple toggles present your data against a range of dimensions. Let’s take a look at the same data by month…</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">​</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">…Whist there are some fluctuations in the months, there is nothing significant that stands out.&nbsp;</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">​</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">Let’s look at the data by person…&nbsp;</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">​</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">…We can see that five people have created and approved journals, with one person in particular standing out.&nbsp;</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">​</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">Immediately, we can see the number of journals to test. We can quickly understand where the issues lie and where to focus our attention.</p>',
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
                            rect: [null, null, '643px', '265px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("page16_edgeActions.js");
})("EDGE-9339288");
