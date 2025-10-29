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
                            id: 'bg',
                            type: 'image',
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"City-Images/PwC_Halo_page3.jpg",'0px','0px']
                        },
                        {
                            id: 'whtBG4',
                            symbolName: 'whtBG',
                            display: 'block',
                            type: 'rect',
                            rect: ['91px', '189px', 'null', 'null', 'auto', 'auto']
                        },
                        {
                            id: 'laptop-close_2',
                            type: 'image',
                            rect: ['359px', '769px', '1206px', '104px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"other_images/laptop-close_2.jpg",'0px','0px']
                        },
                        {
                            id: 'click_to_begin',
                            display: 'block',
                            type: 'text',
                            rect: ['875px', '568px', 'auto', 'auto', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            text: "Click to begin",
                            font: ['Georgia, Times New Roman, Times, serif', [28, "px"], "rgba(255,0,0,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'chart-image',
                            display: 'none',
                            type: 'image',
                            rect: ['523px', '199px', '1724px', '771px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"other_images/laptop-chart.jpg",'0px','0px']
                        },
                        {
                            id: 'correct_in_chart',
                            display: 'none',
                            type: 'rect',
                            rect: ['514px', '421px', '894px', '38px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'bar',
                            display: 'none',
                            type: 'image',
                            rect: ['103px', '199px', '1717px', '769px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"other_images/laptop-bar-chart.jpg",'0px','0px']
                        },
                        {
                            id: '_10',
                            display: 'none',
                            type: 'image',
                            rect: ['1639px', '298px', '84px', '75px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"10.png",'0px','0px']
                        },
                        {
                            id: '_9',
                            display: 'none',
                            type: 'image',
                            rect: ['1639px', '298px', '84px', '75px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"9.png",'0px','0px']
                        },
                        {
                            id: '_8',
                            display: 'none',
                            type: 'image',
                            rect: ['1639px', '298px', '84px', '75px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"8.png",'0px','0px']
                        },
                        {
                            id: '_7',
                            display: 'none',
                            type: 'image',
                            rect: ['1639px', '298px', '84px', '75px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"7.png",'0px','0px']
                        },
                        {
                            id: '_6',
                            display: 'none',
                            type: 'image',
                            rect: ['1639px', '839px', '84px', '75px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"6.png",'0px','0px']
                        },
                        {
                            id: '_5',
                            display: 'none',
                            type: 'image',
                            rect: ['1639px', '298px', '84px', '75px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"5.png",'0px','0px']
                        },
                        {
                            id: '_4',
                            display: 'none',
                            type: 'image',
                            rect: ['1639px', '298px', '84px', '75px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"4.png",'0px','0px']
                        },
                        {
                            id: '_3',
                            display: 'none',
                            type: 'image',
                            rect: ['1639px', '298px', '84px', '75px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"3.png",'0px','0px']
                        },
                        {
                            id: '_2',
                            display: 'none',
                            type: 'image',
                            rect: ['1639px', '298px', '84px', '75px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"2.png",'0px','0px']
                        },
                        {
                            id: '_1',
                            display: 'none',
                            type: 'image',
                            rect: ['1639px', '298px', '84px', '75px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1.png",'0px','0px']
                        },
                        {
                            id: 'zero',
                            display: 'none',
                            type: 'image',
                            rect: ['816', '892', '280px', '114px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"zero.png",'0px','0px']
                        },
                        {
                            id: 'time-out',
                            display: 'none',
                            type: 'image',
                            rect: ['100px', '199px', '1719px', '772px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"other_images/laptop-wrong.jpg",'0px','0px']
                        },
                        {
                            id: 'graph-bar-images',
                            display: 'none',
                            type: 'image',
                            rect: ['100px', '199px', '1719px', '770px', 'auto', 'auto'],
                            opacity: '0.5',
                            fill: ["rgba(0,0,0,0)",im+"other_images/laptop-continue.jpg",'0px','0px']
                        },
                        {
                            id: 'correct-bar',
                            display: 'none',
                            type: 'rect',
                            rect: ['852px', '410px', '58px', '276px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'corrent-answer-image',
                            display: 'none',
                            type: 'image',
                            rect: ['101px', '199px', '1719px', '772px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"other_images/laptop-correct-02.jpg",'0px','0px']
                        },
                        {
                            id: 'correct-answer-for-graph-nda',
                            display: 'none',
                            type: 'image',
                            rect: ['101px', '199px', '1719px', '772px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"other_images/laptop-correct.jpg",'0px','0px']
                        },
                        {
                            id: 'see_the_difference-nda',
                            display: 'none',
                            type: 'rect',
                            rect: ['822px', '883px', '273px', '52px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'answer-continue',
                            display: 'none',
                            type: 'rect',
                            rect: ['891px', '880px', '136px', '50px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(173,43,46,0.00)"],
                            stroke: [1,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],['1.99997']]
                        },
                        {
                            id: 'continue-exit',
                            display: 'none',
                            type: 'rect',
                            rect: ['838px', '872px', '248px', '59px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'bgm_1',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['528', '748', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"D1_06.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'audio',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['524', '626', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"PwC_HALO_D1_06a.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'audio2',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['1085', '628', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"PwC_HALO_D1_06b.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'audio3',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['841', '531', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"PwC_HALO_D1_06c.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'right_arrow',
                            symbolName: 'right_arrow',
                            type: 'rect',
                            rect: ['1843px', '506px', 'null', 'null', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'left_arrow_wht',
                            display: 'none',
                            type: 'image',
                            rect: ['33px', '506px', '39px', '72px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"other_images/left_arrow_wht.png",'0px','0px']
                        },
                        {
                            id: 'click_messsage',
                            symbolName: 'click_messsage',
                            display: 'none',
                            type: 'rect',
                            rect: ['627px', '559px', '724', '217', 'auto', 'auto'],
                            transform: [[],[],[],['1.04604']]
                        },
                        {
                            id: 'cover-01',
                            display: 'none',
                            type: 'rect',
                            rect: ['338px', '740px', '1274px', '172px', 'auto', 'auto'],
                            fill: ["rgba(114,114,114,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'transcript',
                            symbolName: 'transcript',
                            display: 'none',
                            type: 'rect',
                            rect: ['638px', '806px', '643', '213', 'auto', 'auto']
                        },
                        {
                            id: 'transcript2',
                            symbolName: 'transcript_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['638px', '806px', '643', '213', 'auto', 'auto']
                        },
                        {
                            id: 'transcript3',
                            symbolName: 'transcript_2',
                            display: 'none',
                            type: 'rect',
                            rect: ['638px', '806px', '643', '213', 'auto', 'auto']
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
                    duration: 660000,
                    autoPlay: true,
                    labels: {
                        "start": 0,
                        "zoom1": 500,
                        "correct1": 12256,
                        "bar": 13000,
                        "correct-bar": 22300,
                        "correct": 23000,
                        "fade2-1": 24078
                    },
                    data: [
                        [
                            "eid93",
                            "opacity",
                            1000,
                            110,
                            "linear",
                            "${_5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid24",
                            "display",
                            22217,
                            0,
                            "linear",
                            "${see_the_difference-nda}",
                            'none',
                            'block'
                        ],
                        [
                            "eid25",
                            "display",
                            22996,
                            0,
                            "linear",
                            "${see_the_difference-nda}",
                            'block',
                            'none'
                        ],
                        [
                            "eid60",
                            "opacity",
                            11000,
                            1000,
                            "linear",
                            "${zero}",
                            '1',
                            '0'
                        ],
                        [
                            "eid61",
                            "opacity",
                            12250,
                            0,
                            "linear",
                            "${zero}",
                            '0',
                            '1'
                        ],
                        [
                            "eid62",
                            "opacity",
                            13000,
                            0,
                            "linear",
                            "${zero}",
                            '1',
                            '1'
                        ],
                        [
                            "eid63",
                            "opacity",
                            23000,
                            499,
                            "linear",
                            "${zero}",
                            '1',
                            '0'
                        ],
                        [
                            "eid51",
                            "width",
                            24000,
                            0,
                            "linear",
                            "${graph-bar-images}",
                            '1719px',
                            '1719px'
                        ],
                        [
                            "eid88",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid89",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid90",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${_5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid91",
                            "display",
                            18000,
                            0,
                            "linear",
                            "${_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid92",
                            "display",
                            19000,
                            0,
                            "linear",
                            "${_5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid123",
                            "display",
                            497,
                            0,
                            "linear",
                            "${correct_in_chart}",
                            'none',
                            'block'
                        ],
                        [
                            "eid124",
                            "display",
                            1017,
                            0,
                            "linear",
                            "${correct_in_chart}",
                            'block',
                            'block'
                        ],
                        [
                            "eid125",
                            "display",
                            11001,
                            0,
                            "linear",
                            "${correct_in_chart}",
                            'block',
                            'none'
                        ],
                        [
                            "eid126",
                            "display",
                            24107,
                            0,
                            "linear",
                            "${correct_in_chart}",
                            'none',
                            'block'
                        ],
                        [
                            "eid127",
                            "display",
                            24227,
                            0,
                            "linear",
                            "${correct_in_chart}",
                            'block',
                            'none'
                        ],
                        [
                            "eid76",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid77",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid78",
                            "display",
                            8000,
                            0,
                            "linear",
                            "${_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid79",
                            "display",
                            9000,
                            0,
                            "linear",
                            "${_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid80",
                            "display",
                            20000,
                            0,
                            "linear",
                            "${_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid81",
                            "display",
                            21000,
                            0,
                            "linear",
                            "${_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid9",
                            "display",
                            0,
                            0,
                            "linear",
                            "${click_messsage}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10",
                            "display",
                            23966,
                            0,
                            "linear",
                            "${click_messsage}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11",
                            "display",
                            24002,
                            0,
                            "linear",
                            "${click_messsage}",
                            'none',
                            'none'
                        ],
                        [
                            "eid101",
                            "left",
                            4000,
                            0,
                            "linear",
                            "${_7}",
                            '1639px',
                            '1639px'
                        ],
                        [
                            "eid22",
                            "width",
                            11006,
                            0,
                            "linear",
                            "${answer-continue}",
                            '136px',
                            '136px'
                        ],
                        [
                            "eid23",
                            "width",
                            12978,
                            0,
                            "linear",
                            "${answer-continue}",
                            '136px',
                            '136px'
                        ],
                        [
                            "eid46",
                            "opacity",
                            23000,
                            504,
                            "linear",
                            "${graph-bar-images}",
                            '0',
                            '1'
                        ],
                        [
                            "eid47",
                            "opacity",
                            24000,
                            15,
                            "linear",
                            "${graph-bar-images}",
                            '1',
                            '0'
                        ],
                        [
                            "eid48",
                            "opacity",
                            24015,
                            13,
                            "linear",
                            "${graph-bar-images}",
                            '0',
                            '1'
                        ],
                        [
                            "eid49",
                            "opacity",
                            25000,
                            0,
                            "linear",
                            "${graph-bar-images}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid82",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid83",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${_4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid84",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid85",
                            "display",
                            8000,
                            0,
                            "linear",
                            "${_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid86",
                            "display",
                            19000,
                            0,
                            "linear",
                            "${_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid87",
                            "display",
                            20000,
                            0,
                            "linear",
                            "${_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid110",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${_9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid111",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${_9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid112",
                            "display",
                            14000,
                            0,
                            "linear",
                            "${_9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid113",
                            "display",
                            15000,
                            0,
                            "linear",
                            "${_9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid135",
                            "opacity",
                            11000,
                            0,
                            "linear",
                            "${chart-image}",
                            '1',
                            '1'
                        ],
                        [
                            "eid136",
                            "opacity",
                            12000,
                            0,
                            "linear",
                            "${chart-image}",
                            '1',
                            '0'
                        ],
                        [
                            "eid137",
                            "opacity",
                            12250,
                            0,
                            "linear",
                            "${chart-image}",
                            '0',
                            '1'
                        ],
                        [
                            "eid153",
                            "display",
                            0,
                            0,
                            "linear",
                            "${transcript3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid41",
                            "display",
                            0,
                            0,
                            "linear",
                            "${graph-bar-images}",
                            'none',
                            'none'
                        ],
                        [
                            "eid42",
                            "display",
                            12261,
                            0,
                            "linear",
                            "${graph-bar-images}",
                            'none',
                            'none'
                        ],
                        [
                            "eid43",
                            "display",
                            13011,
                            0,
                            "linear",
                            "${graph-bar-images}",
                            'none',
                            'none'
                        ],
                        [
                            "eid44",
                            "display",
                            23000,
                            0,
                            "linear",
                            "${graph-bar-images}",
                            'none',
                            'block'
                        ],
                        [
                            "eid45",
                            "display",
                            24082,
                            0,
                            "linear",
                            "${graph-bar-images}",
                            'block',
                            'none'
                        ],
                        [
                            "eid114",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${_10}",
                            '298px',
                            '298px'
                        ],
                        [
                            "eid142",
                            "opacity",
                            121,
                            350,
                            "linear",
                            "${click_to_begin}",
                            '0',
                            '1'
                        ],
                        [
                            "eid97",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${_6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid98",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${_6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid99",
                            "display",
                            17000,
                            0,
                            "linear",
                            "${_6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid100",
                            "display",
                            18000,
                            0,
                            "linear",
                            "${_6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid145",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${laptop-close_2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid146",
                            "opacity",
                            507,
                            0,
                            "linear",
                            "${laptop-close_2}",
                            '1',
                            '0.39'
                        ],
                        [
                            "eid18",
                            "display",
                            0,
                            0,
                            "linear",
                            "${answer-continue}",
                            'none',
                            'none'
                        ],
                        [
                            "eid19",
                            "display",
                            10941,
                            0,
                            "linear",
                            "${answer-continue}",
                            'none',
                            'block'
                        ],
                        [
                            "eid20",
                            "display",
                            12525,
                            0,
                            "linear",
                            "${answer-continue}",
                            'block',
                            'none'
                        ],
                        [
                            "eid21",
                            "display",
                            12995,
                            0,
                            "linear",
                            "${answer-continue}",
                            'none',
                            'none'
                        ],
                        [
                            "eid121",
                            "top",
                            1017,
                            0,
                            "linear",
                            "${correct_in_chart}",
                            '421px',
                            '421px'
                        ],
                        [
                            "eid152",
                            "display",
                            0,
                            0,
                            "linear",
                            "${transcript2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid150",
                            "display",
                            0,
                            0,
                            "linear",
                            "${transcript}",
                            'none',
                            'none'
                        ],
                        [
                            "eid52",
                            "display",
                            0,
                            0,
                            "linear",
                            "${time-out}",
                            'none',
                            'none'
                        ],
                        [
                            "eid53",
                            "display",
                            11000,
                            0,
                            "linear",
                            "${time-out}",
                            'none',
                            'block'
                        ],
                        [
                            "eid54",
                            "display",
                            12027,
                            0,
                            "linear",
                            "${time-out}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12",
                            "display",
                            0,
                            0,
                            "linear",
                            "${left_arrow_wht}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13",
                            "display",
                            23609,
                            0,
                            "linear",
                            "${left_arrow_wht}",
                            'none',
                            'block'
                        ],
                        [
                            "eid26",
                            "display",
                            22215,
                            0,
                            "linear",
                            "${correct-answer-for-graph-nda}",
                            'none',
                            'block'
                        ],
                        [
                            "eid27",
                            "display",
                            22993,
                            0,
                            "linear",
                            "${correct-answer-for-graph-nda}",
                            'block',
                            'none'
                        ],
                        [
                            "eid28",
                            "display",
                            34131,
                            0,
                            "linear",
                            "${correct-answer-for-graph-nda}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14",
                            "display",
                            0,
                            0,
                            "linear",
                            "${continue-exit}",
                            'none',
                            'none'
                        ],
                        [
                            "eid15",
                            "display",
                            2037,
                            0,
                            "linear",
                            "${continue-exit}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16",
                            "display",
                            23970,
                            0,
                            "linear",
                            "${continue-exit}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17",
                            "display",
                            24081,
                            0,
                            "linear",
                            "${continue-exit}",
                            'block',
                            'none'
                        ],
                        [
                            "eid55",
                            "display",
                            0,
                            0,
                            "linear",
                            "${zero}",
                            'none',
                            'none'
                        ],
                        [
                            "eid56",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${zero}",
                            'none',
                            'none'
                        ],
                        [
                            "eid57",
                            "display",
                            11000,
                            0,
                            "linear",
                            "${zero}",
                            'none',
                            'none'
                        ],
                        [
                            "eid58",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${zero}",
                            'none',
                            'none'
                        ],
                        [
                            "eid59",
                            "display",
                            23000,
                            0,
                            "linear",
                            "${zero}",
                            'none',
                            'none'
                        ],
                        [
                            "eid147",
                            "display",
                            0,
                            0,
                            "linear",
                            "${whtBG4}",
                            'block',
                            'block'
                        ],
                        [
                            "eid148",
                            "display",
                            497,
                            0,
                            "linear",
                            "${whtBG4}",
                            'block',
                            'block'
                        ],
                        [
                            "eid29",
                            "display",
                            12240,
                            0,
                            "linear",
                            "${corrent-answer-image}",
                            'none',
                            'block'
                        ],
                        [
                            "eid30",
                            "display",
                            12909,
                            0,
                            "linear",
                            "${corrent-answer-image}",
                            'block',
                            'none'
                        ],
                        [
                            "eid31",
                            "display",
                            24093,
                            0,
                            "linear",
                            "${corrent-answer-image}",
                            'none',
                            'none'
                        ],
                        [
                            "eid132",
                            "display",
                            0,
                            0,
                            "linear",
                            "${chart-image}",
                            'none',
                            'none'
                        ],
                        [
                            "eid133",
                            "display",
                            514,
                            0,
                            "linear",
                            "${chart-image}",
                            'none',
                            'block'
                        ],
                        [
                            "eid134",
                            "display",
                            10986,
                            0,
                            "linear",
                            "${chart-image}",
                            'block',
                            'none'
                        ],
                        [
                            "eid70",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid71",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid72",
                            "display",
                            9000,
                            0,
                            "linear",
                            "${_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid73",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid74",
                            "display",
                            21000,
                            0,
                            "linear",
                            "${_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid75",
                            "display",
                            22000,
                            0,
                            "linear",
                            "${_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid32",
                            "display",
                            0,
                            0,
                            "linear",
                            "${correct-bar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid33",
                            "display",
                            11762,
                            0,
                            "linear",
                            "${correct-bar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid34",
                            "display",
                            12261,
                            0,
                            "linear",
                            "${correct-bar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid35",
                            "display",
                            12671,
                            0,
                            "linear",
                            "${correct-bar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid36",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${correct-bar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid37",
                            "display",
                            22312,
                            0,
                            "linear",
                            "${correct-bar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid38",
                            "display",
                            22841,
                            0,
                            "linear",
                            "${correct-bar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid39",
                            "display",
                            24090,
                            0,
                            "linear",
                            "${correct-bar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid40",
                            "display",
                            24210,
                            0,
                            "linear",
                            "${correct-bar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid139",
                            "width",
                            500,
                            500,
                            "linear",
                            "${chart-image}",
                            '845px',
                            '1719px'
                        ],
                        [
                            "eid64",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid65",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid66",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid67",
                            "display",
                            11000,
                            0,
                            "linear",
                            "${_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid68",
                            "display",
                            22000,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid69",
                            "display",
                            23000,
                            0,
                            "linear",
                            "${_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid138",
                            "left",
                            500,
                            500,
                            "linear",
                            "${chart-image}",
                            '523px',
                            '100px'
                        ],
                        [
                            "eid106",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${_8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid107",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${_8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid108",
                            "display",
                            15000,
                            0,
                            "linear",
                            "${_8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid109",
                            "display",
                            16000,
                            0,
                            "linear",
                            "${_8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid115",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${_10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid116",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${_10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid117",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${_10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid118",
                            "display",
                            14000,
                            0,
                            "linear",
                            "${_10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid8",
                            "display",
                            23995,
                            0,
                            "linear",
                            "${cover-01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid120",
                            "opacity",
                            23000,
                            1000,
                            "linear",
                            "${bar}",
                            '1',
                            '0'
                        ],
                        [
                            "eid102",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${_7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid103",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${_7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid104",
                            "display",
                            16000,
                            0,
                            "linear",
                            "${_7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid105",
                            "display",
                            17000,
                            0,
                            "linear",
                            "${_7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid122",
                            "height",
                            1017,
                            0,
                            "linear",
                            "${correct_in_chart}",
                            '38px',
                            '38px'
                        ],
                        [
                            "eid94",
                            "top",
                            5250,
                            0,
                            "linear",
                            "${_6}",
                            '298px',
                            '298px'
                        ],
                        [
                            "eid95",
                            "top",
                            6000,
                            0,
                            "linear",
                            "${_6}",
                            '298px',
                            '298px'
                        ],
                        [
                            "eid130",
                            "top",
                            500,
                            500,
                            "linear",
                            "${chart-image}",
                            '388px',
                            '199px'
                        ],
                        [
                            "eid129",
                            "width",
                            1017,
                            0,
                            "linear",
                            "${correct_in_chart}",
                            '894px',
                            '894px'
                        ],
                        [
                            "eid131",
                            "height",
                            500,
                            500,
                            "linear",
                            "${chart-image}",
                            '492px',
                            '771px'
                        ],
                        [
                            "eid143",
                            "display",
                            0,
                            0,
                            "linear",
                            "${laptop-close_2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid144",
                            "display",
                            504,
                            0,
                            "linear",
                            "${laptop-close_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid140",
                            "display",
                            0,
                            0,
                            "linear",
                            "${click_to_begin}",
                            'block',
                            'block'
                        ],
                        [
                            "eid141",
                            "display",
                            566,
                            0,
                            "linear",
                            "${click_to_begin}",
                            'block',
                            'none'
                        ],
                        [
                            "eid119",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${bar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid50",
                            "left",
                            24000,
                            0,
                            "linear",
                            "${graph-bar-images}",
                            '100px',
                            '100px'
                        ],
                        [
                            "eid128",
                            "left",
                            1017,
                            0,
                            "linear",
                            "${correct_in_chart}",
                            '514px',
                            '514px'
                        ],
                        [
                            "eid96",
                            "left",
                            6000,
                            0,
                            "linear",
                            "${_6}",
                            '1639px',
                            '1639px'
                        ],
                            [ "eid149", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${bgm_1}', [] ] ]
                    ]
                }
            },
            "click_messsage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '720px', '229px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px 10px'],
                            id: 'Rectangle5',
                            stroke: [2, 'rgba(173,43,46,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '724px', '217px']
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
                            type: 'image',
                            display: 'block',
                            rect: ['0px', '0px', '40px', '72px', 'auto', 'auto'],
                            id: 'right_arrow_wht',
                            fill: ['rgba(0,0,0,0)', 'images/other_images/right_arrow_wht.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['0px', '0px', '40px', '72px', 'auto', 'auto'],
                            id: 'right_arrow_red',
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
                            rect: ['27px', '56px', '590px', '137px', 'auto', 'auto'],
                            overflow: 'scroll',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">But it’s not just automating the testing of all transactions – there is another benefit – and that’s visualisation.</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">​</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">Visualisation is a great way of helping you see things you couldn’t see before.</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">​</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">To prove this point, let’s take a quick test.</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">​</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">When you click begin, you will have 10 seconds to find the risky entry.</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">​</p>',
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
            "transcript_1": {
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
                            rect: ['27px', '56px', '590px', '137px', 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">Now let’s take the same test again using visualisation…​</p>',
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
            "transcript_2": {
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
                            rect: ['27px', '56px', '590px', '137px', 'auto', 'auto'],
                            overflow: 'scroll',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">It wasn’t a trick. There was a double posting in April. This test only had 12 entries. Imagine trying to find errors in millions of entries!</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">​</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">Recent studies have proven that we can take in more information and see the outliers and relationships within the results of our testing more quickly using visualisation.</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 23px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">​</p>',
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("page7_edgeActions.js");
})("EDGE-9339288");
