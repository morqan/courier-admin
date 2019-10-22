
// AREA & PIE CHART START

"use strict";
// Class definition
var KTMorrisChartsDemo = function() {

    // Private functions

    var demo2 = function() {
        // AREA CHART
        new Morris.Area({
            element: 'kt_morris_2',
            data: [{
                    y: '2006',
                    a: 100,
                    b: 90
                },
                {
                    y: '2007',
                    a: 75,
                    b: 65
                },
                {
                    y: '2008',
                    a: 50,
                    b: 40
                },
                {
                    y: '2009',
                    a: 75,
                    b: 65
                },
                {
                    y: '2010',
                    a: 50,
                    b: 40
                },
                {
                    y: '2011',
                    a: 75,
                    b: 65
                },
                {
                    y: '2012',
                    a: 100,
                    b: 90
                }
            ],
            xkey: 'y',
            ykeys: ['a', 'b'],
            labels: ['Series A', 'Series B'],
            lineColors: ['#de1f78', '#c7d2e7'],
            pointFillColors: ['#fe3995','#e6e9f0']
        });
    }

    var demo4 = function() {
        // PIE CHART
        new Morris.Donut({
            element: 'kt_morris_4',
            data: [{
                    label: "Qəbul olunan",
                    value: 12
                },
                {
                    label: "Gözləmədə olan",
                    value: 30
                },
                {
                    label: "Qeydiyyatda xəta olan",
                    value: 20

                }
            ],
            colors: ['#593ae1', '#6e4ff5', '#9077fb']
        });
    }

    return {
        // public functions
        init: function() {
            demo2();
            demo4();

        }
    };
}();

jQuery(document).ready(function() {
    KTMorrisChartsDemo.init();
});


// AREA & PIE CHART END




// LINE CHART START

"use strict";
// Class definition
var KTGoogleChartsDemo = function() {

    // Private functions

    var main = function() {
        // GOOGLE CHARTS INIT
        google.load('visualization', '1', {
            packages: ['corechart', 'bar', 'line']
        });

        google.setOnLoadCallback(function() {
            KTGoogleChartsDemo.runDemos();
        });
    }

    var demoColumnCharts = function() {
        // COLUMN CHART
        var data = new google.visualization.DataTable();
        data.addColumn('timeofday', 'Time of Day');
        data.addColumn('number', 'Motivation Level');
        data.addColumn('number', 'Energy Level');

        data.addRows([
            [{
                v: [8, 0, 0],
                f: '8 am'
            }, 1, .25],
            [{
                v: [9, 0, 0],
                f: '9 am'
            }, 2, .5],
            [{
                v: [10, 0, 0],
                f: '10 am'
            }, 3, 1],
            [{
                v: [11, 0, 0],
                f: '11 am'
            }, 4, 2.25],
            [{
                v: [12, 0, 0],
                f: '12 pm'
            }, 5, 2.25],
            [{
                v: [13, 0, 0],
                f: '1 pm'
            }, 6, 3],
            [{
                v: [14, 0, 0],
                f: '2 pm'
            }, 7, 4],
            [{
                v: [15, 0, 0],
                f: '3 pm'
            }, 8, 5.25],
            [{
                v: [16, 0, 0],
                f: '4 pm'
            }, 9, 7.5],
            [{
                v: [17, 0, 0],
                f: '5 pm'
            }, 10, 10],
        ]);

        var options = {
            title: 'Motivation and Energy Level Throughout the Day',
            focusTarget: 'category',
            hAxis: {
                title: 'Time of Day',
                format: 'h:mm a',
                viewWindow: {
                    min: [7, 30, 0],
                    max: [17, 30, 0]
                },
            },
            vAxis: {
                title: 'Rating (scale of 1-10)'
            },
            colors: ['#6e4ff5', '#fe3995']
        };

        var chart = new google.visualization.ColumnChart(document.getElementById('kt_gchart_1'));
        chart.draw(data, options);

        var chart = new google.visualization.ColumnChart(document.getElementById('kt_gchart_2'));
        chart.draw(data, options);
    }

    var demoPieCharts = function() {
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Work', 11],
            ['Eat', 2],
            ['Commute', 2],
            ['Watch TV', 2],
            ['Sleep', 7]
        ]);

        var options = {
            title: 'My Daily Activities',
            colors: ['#fe3995', '#f6aa33', '#6e4ff5', '#2abe81', '#c7d2e7', '#593ae1']
        };

        var chart = new google.visualization.PieChart(document.getElementById('kt_gchart_3'));
        chart.draw(data, options);

        var options = {
            pieHole: 0.4,
            colors: ['#fe3995', '#f6aa33', '#6e4ff5', '#2abe81', '#c7d2e7', '#593ae1']
        };

        var chart = new google.visualization.PieChart(document.getElementById('kt_gchart_4'));
        chart.draw(data, options);
    }    

    var demoLineCharts = function() {
        // LINE CHART
        var data = new google.visualization.DataTable();
        data.addColumn('number', 'Day');
        data.addColumn('number', 'Guardians of the Galaxy');
        data.addColumn('number', 'The Avengers');
        data.addColumn('number', 'Transformers: Age of Extinction');

        data.addRows([
            [1, 37.8, 80.8, 41.8],
            [2, 30.9, 69.5, 32.4],
            [3, 25.4, 57, 25.7],
            [4, 11.7, 18.8, 10.5],
            [5, 11.9, 17.6, 10.4],
            [6, 8.8, 13.6, 7.7],
            [7, 7.6, 12.3, 9.6],
            [8, 12.3, 29.2, 10.6],
            [9, 16.9, 42.9, 14.8],
            [10, 12.8, 30.9, 11.6],
            [11, 5.3, 7.9, 4.7],
            [12, 6.6, 8.4, 5.2],
            [13, 4.8, 6.3, 3.6],
            [14, 4.2, 6.2, 3.4]
        ]);

        var options = {
            chart: {
                title: 'Box Office Earnings in First Two Weeks of Opening',
                subtitle: 'in millions of dollars (USD)'
            },
            colors: ['#6e4ff5', '#f6aa33', '#fe3995']
        };

        var chart = new google.charts.Line(document.getElementById('kt_gchart_5'));
        chart.draw(data, options);
    }

    return {
        // public functions
        init: function() {
            main();
        },

        runDemos: function() {
            // demoColumnCharts();
            demoLineCharts();
            // demoPieCharts();
        }
    };
}();

KTGoogleChartsDemo.init();

// LINE CHART END



// 
"use strict";

// Class definition
var KTamChartsStockChartsDemo = function() {

    // Private functions
    var demo1 = function() {
        var chartData1 = [];
        var chartData2 = [];
        var chartData3 = [];
        var chartData4 = [];

        generateChartData();

        function generateChartData() {
            var firstDate = new Date();
            firstDate.setDate(firstDate.getDate() - 500);
            firstDate.setHours(0, 0, 0, 0);

            for (var i = 0; i < 500; i++) {
                var newDate = new Date(firstDate);
                newDate.setDate(newDate.getDate() + i);

                var a1 = Math.round(Math.random() * (40 + i)) + 100 + i;
                var b1 = Math.round(Math.random() * (1000 + i)) + 500 + i * 2;

                var a2 = Math.round(Math.random() * (100 + i)) + 200 + i;
                var b2 = Math.round(Math.random() * (1000 + i)) + 600 + i * 2;

                var a3 = Math.round(Math.random() * (100 + i)) + 200;
                var b3 = Math.round(Math.random() * (1000 + i)) + 600 + i * 2;

                var a4 = Math.round(Math.random() * (100 + i)) + 200 + i;
                var b4 = Math.round(Math.random() * (100 + i)) + 600 + i;

                chartData1.push({
                    "date": newDate,
                    "value": a1,
                    "volume": b1
                });
                chartData2.push({
                    "date": newDate,
                    "value": a2,
                    "volume": b2
                });
                chartData3.push({
                    "date": newDate,
                    "value": a3,
                    "volume": b3
                });
                chartData4.push({
                    "date": newDate,
                    "value": a4,
                    "volume": b4
                });
            }
        }

        var chart = AmCharts.makeChart("kt_amcharts_1", {
            "rtl": KTUtil.isRTL(),
            "type": "stock",
            "theme": "light",
            "dataSets": [{
                "title": "first data set",
                "fieldMappings": [{
                    "fromField": "value",
                    "toField": "value"
                }, {
                    "fromField": "volume",
                    "toField": "volume"
                }],
                "dataProvider": chartData1,
                "categoryField": "date"
            }, {
                "title": "second data set",
                "fieldMappings": [{
                    "fromField": "value",
                    "toField": "value"
                }, {
                    "fromField": "volume",
                    "toField": "volume"
                }],
                "dataProvider": chartData2,
                "categoryField": "date"
            }, {
                "title": "third data set",
                "fieldMappings": [{
                    "fromField": "value",
                    "toField": "value"
                }, {
                    "fromField": "volume",
                    "toField": "volume"
                }],
                "dataProvider": chartData3,
                "categoryField": "date"
            }, {
                "title": "fourth data set",
                "fieldMappings": [{
                    "fromField": "value",
                    "toField": "value"
                }, {
                    "fromField": "volume",
                    "toField": "volume"
                }],
                "dataProvider": chartData4,
                "categoryField": "date"
            }],

            "panels": [{
                "showCategoryAxis": false,
                "title": "Value",
                "percentHeight": 70,
                "stockGraphs": [{
                    "id": "g1",
                    "valueField": "value",
                    "comparable": true,
                    "compareField": "value",
                    "balloonText": "[[title]]:<b>[[value]]</b>",
                    "compareGraphBalloonText": "[[title]]:<b>[[value]]</b>"
                }],
                "stockLegend": {
                    "periodValueTextComparing": "[[percents.value.close]]%",
                    "periodValueTextRegular": "[[value.close]]"
                }
            }, {
                "title": "Volume",
                "percentHeight": 30,
                "stockGraphs": [{
                    "valueField": "volume",
                    "type": "column",
                    "showBalloon": false,
                    "fillAlphas": 1
                }],
                "stockLegend": {
                    "periodValueTextRegular": "[[value.close]]"
                }
            }],

            "chartScrollbarSettings": {
                "graph": "g1"
            },

            "chartCursorSettings": {
                "valueBalloonsEnabled": true,
                "fullWidth": true,
                "cursorAlpha": 0.1,
                "valueLineBalloonEnabled": true,
                "valueLineEnabled": true,
                "valueLineAlpha": 0.5
            },

            "periodSelector": {
                "position": "left",
                "periods": [{
                    "period": "MM",
                    "selected": true,
                    "count": 1,
                    "label": "1 month"
                }, {
                    "period": "YYYY",
                    "count": 1,
                    "label": "1 year"
                }, {
                    "period": "YTD",
                    "label": "YTD"
                }, {
                    "period": "MAX",
                    "label": "MAX"
                }]
            },

            "dataSetSelector": {
                "position": "left"
            },

            "export": {
                "enabled": true
            }
        });
    }

    // var demo2 = function() {
    //     var chartData = [];
    //     generateChartData();

    //     function generateChartData() {
    //         var firstDate = new Date(2012, 0, 1);
    //         firstDate.setDate(firstDate.getDate() - 500);
    //         firstDate.setHours(0, 0, 0, 0);

    //         for (var i = 0; i < 500; i++) {
    //             var newDate = new Date(firstDate);
    //             newDate.setDate(newDate.getDate() + i);

    //             var a = Math.round(Math.random() * (40 + i)) + 100 + i;
    //             var b = Math.round(Math.random() * 100000000);

    //             chartData.push({
    //                 "date": newDate,
    //                 "value": a,
    //                 "volume": b
    //             });
    //         }
    //     }

    //     var chart = AmCharts.makeChart("kt_amcharts_2", {
    //         "type": "stock",
    //         "theme": "light",
    //         "dataSets": [{
    //             "color": "#b0de09",
    //             "fieldMappings": [{
    //                 "fromField": "value",
    //                 "toField": "value"
    //             }, {
    //                 "fromField": "volume",
    //                 "toField": "volume"
    //             }],
    //             "dataProvider": chartData,
    //             "categoryField": "date",
    //             // EVENTS
    //             "stockEvents": [{
    //                 "date": new Date(2010, 8, 19),
    //                 "type": "sign",
    //                 "backgroundColor": "#85CDE6",
    //                 "graph": "g1",
    //                 "text": "S",
    //                 "description": "This is description of an event"
    //             }, {
    //                 "date": new Date(2010, 10, 19),
    //                 "type": "flag",
    //                 "backgroundColor": "#FFFFFF",
    //                 "backgroundAlpha": 0.5,
    //                 "graph": "g1",
    //                 "text": "F",
    //                 "description": "Some longer\ntext can also\n be added"
    //             }, {
    //                 "date": new Date(2010, 11, 10),
    //                 "showOnAxis": true,
    //                 "backgroundColor": "#85CDE6",
    //                 "type": "pin",
    //                 "text": "X",
    //                 "graph": "g1",
    //                 "description": "This is description of an event"
    //             }, {
    //                 "date": new Date(2010, 11, 26),
    //                 "showOnAxis": true,
    //                 "backgroundColor": "#85CDE6",
    //                 "type": "pin",
    //                 "text": "Z",
    //                 "graph": "g1",
    //                 "description": "This is description of an event"
    //             }, {
    //                 "date": new Date(2011, 0, 3),
    //                 "type": "sign",
    //                 "backgroundColor": "#85CDE6",
    //                 "graph": "g1",
    //                 "text": "U",
    //                 "description": "This is description of an event"
    //             }, {
    //                 "date": new Date(2011, 1, 6),
    //                 "type": "sign",
    //                 "graph": "g1",
    //                 "text": "D",
    //                 "description": "This is description of an event"
    //             }, {
    //                 "date": new Date(2011, 3, 5),
    //                 "type": "sign",
    //                 "graph": "g1",
    //                 "text": "L",
    //                 "description": "This is description of an event"
    //             }, {
    //                 "date": new Date(2011, 3, 5),
    //                 "type": "sign",
    //                 "graph": "g1",
    //                 "text": "R",
    //                 "description": "This is description of an event"
    //             }, {
    //                 "date": new Date(2011, 5, 15),
    //                 "type": "arrowUp",
    //                 "backgroundColor": "#00CC00",
    //                 "graph": "g1",
    //                 "description": "This is description of an event"
    //             }, {
    //                 "date": new Date(2011, 6, 25),
    //                 "type": "arrowDown",
    //                 "backgroundColor": "#CC0000",
    //                 "graph": "g1",
    //                 "description": "This is description of an event"
    //             }, {
    //                 "date": new Date(2011, 8, 1),
    //                 "type": "text",
    //                 "graph": "g1",
    //                 "text": "Longer text can\nalso be displayed",
    //                 "description": "This is description of an event"
    //             }]
    //         }],


    //         "panels": [{
    //             "title": "Value",
    //             "stockGraphs": [{
    //                 "id": "g1",
    //                 "valueField": "value"
    //             }],
    //             "stockLegend": {
    //                 "valueTextRegular": " ",
    //                 "markerType": "none"
    //             }
    //         }],

    //         "chartScrollbarSettings": {
    //             "graph": "g1"
    //         },

    //         "chartCursorSettings": {
    //             "valueBalloonsEnabled": true,
    //             "graphBulletSize": 1,
    //             "valueLineBalloonEnabled": true,
    //             "valueLineEnabled": true,
    //             "valueLineAlpha": 0.5
    //         },

    //         "periodSelector": {
    //             "periods": [{
    //                 "period": "DD",
    //                 "count": 10,
    //                 "label": "10 days"
    //             }, {
    //                 "period": "MM",
    //                 "count": 1,
    //                 "label": "1 month"
    //             }, {
    //                 "period": "YYYY",
    //                 "count": 1,
    //                 "label": "1 year"
    //             }, {
    //                 "period": "YTD",
    //                 "label": "YTD"
    //             }, {
    //                 "period": "MAX",
    //                 "label": "MAX"
    //             }]
    //         },

    //         "panelsSettings": {
    //             "usePrefixes": true
    //         },
    //         "export": {
    //             "enabled": true
    //         }
    //     });
    // }

    // var demo3 = function() {
    //     var chartData = generateChartData();

    //     function generateChartData() {
    //         var chartData = [];
    //         var firstDate = new Date(2012, 0, 1);
    //         firstDate.setDate(firstDate.getDate() - 500);
    //         firstDate.setHours(0, 0, 0, 0);

    //         for (var i = 0; i < 500; i++) {
    //             var newDate = new Date(firstDate);
    //             newDate.setDate(newDate.getDate() + i);

    //             var value = Math.round(Math.random() * (40 + i)) + 100 + i;

    //             chartData.push({
    //                 "date": newDate,
    //                 "value": value
    //             });
    //         }
    //         return chartData;
    //     }


    //     var chart = AmCharts.makeChart("kt_amcharts_3", {
    //         "type": "stock",
    //         "theme": "light",
    //         "dataSets": [{
    //             "color": "#b0de09",
    //             "fieldMappings": [{
    //                 "fromField": "value",
    //                 "toField": "value"
    //             }],
    //             "dataProvider": chartData,
    //             "categoryField": "date"
    //         }],

    //         "panels": [{
    //             "showCategoryAxis": true,
    //             "title": "Value",
    //             "eraseAll": false,
    //             "allLabels": [{
    //                 "x": 0,
    //                 "y": 115,
    //                 "text": "Click on the pencil icon on top-right to start drawing",
    //                 "align": "center",
    //                 "size": 16
    //             }],

    //             "stockGraphs": [{
    //                 "id": "g1",
    //                 "valueField": "value",
    //                 "useDataSetColors": false
    //             }],

    //             "stockLegend": {
    //                 "valueTextRegular": " ",
    //                 "markerType": "none"
    //             },

    //             "drawingIconsEnabled": true
    //         }],

    //         "chartScrollbarSettings": {
    //             "graph": "g1"
    //         },
    //         "chartCursorSettings": {
    //             "valueBalloonsEnabled": true
    //         },
    //         "periodSelector": {
    //             "position": "bottom",
    //             "periods": [{
    //                 "period": "DD",
    //                 "count": 10,
    //                 "label": "10 days"
    //             }, {
    //                 "period": "MM",
    //                 "count": 1,
    //                 "label": "1 month"
    //             }, {
    //                 "period": "YYYY",
    //                 "count": 1,
    //                 "label": "1 year"
    //             }, {
    //                 "period": "YTD",
    //                 "label": "YTD"
    //             }, {
    //                 "period": "MAX",
    //                 "label": "MAX"
    //             }]
    //         }
    //     });
    // }

    // var demo4 = function() {
    //     var chartData = generateChartData();

    //     function generateChartData() {
    //         var chartData = [];
    //         var firstDate = new Date(2012, 0, 1);
    //         firstDate.setDate(firstDate.getDate() - 1000);
    //         firstDate.setHours(0, 0, 0, 0);

    //         for (var i = 0; i < 1000; i++) {
    //             var newDate = new Date(firstDate);
    //             newDate.setHours(0, i, 0, 0);

    //             var a = Math.round(Math.random() * (40 + i)) + 100 + i;
    //             var b = Math.round(Math.random() * 100000000);

    //             chartData.push({
    //                 "date": newDate,
    //                 "value": a,
    //                 "volume": b
    //             });
    //         }
    //         return chartData;
    //     }

    //     var chart = AmCharts.makeChart("kt_amcharts_4", {
    //         "type": "stock",
    //         "theme": "light",
    //         "categoryAxesSettings": {
    //             "minPeriod": "mm"
    //         },

    //         "dataSets": [{
    //             "color": "#b0de09",
    //             "fieldMappings": [{
    //                 "fromField": "value",
    //                 "toField": "value"
    //             }, {
    //                 "fromField": "volume",
    //                 "toField": "volume"
    //             }],

    //             "dataProvider": chartData,
    //             "categoryField": "date"
    //         }],

    //         "panels": [{
    //             "showCategoryAxis": false,
    //             "title": "Value",
    //             "percentHeight": 70,

    //             "stockGraphs": [{
    //                 "id": "g1",
    //                 "valueField": "value",
    //                 "type": "smoothedLine",
    //                 "lineThickness": 2,
    //                 "bullet": "round"
    //             }],


    //             "stockLegend": {
    //                 "valueTextRegular": " ",
    //                 "markerType": "none"
    //             }
    //         }, {
    //             "title": "Volume",
    //             "percentHeight": 30,
    //             "stockGraphs": [{
    //                 "valueField": "volume",
    //                 "type": "column",
    //                 "cornerRadiusTop": 2,
    //                 "fillAlphas": 1
    //             }],

    //             "stockLegend": {
    //                 "valueTextRegular": " ",
    //                 "markerType": "none"
    //             }
    //         }],

    //         "chartScrollbarSettings": {
    //             "graph": "g1",
    //             "usePeriod": "10mm",
    //             "position": "top"
    //         },

    //         "chartCursorSettings": {
    //             "valueBalloonsEnabled": true
    //         },

    //         "periodSelector": {
    //             "position": "top",
    //             "dateFormat": "YYYY-MM-DD JJ:NN",
    //             "inputFieldWidth": 150,
    //             "periods": [{
    //                 "period": "hh",
    //                 "count": 1,
    //                 "label": "1 hour",
    //                 "selected": true
    //             }, {
    //                 "period": "hh",
    //                 "count": 2,
    //                 "label": "2 hours"
    //             }, {
    //                 "period": "hh",
    //                 "count": 5,
    //                 "label": "5 hour"
    //             }, {
    //                 "period": "hh",
    //                 "count": 12,
    //                 "label": "12 hours"
    //             }, {
    //                 "period": "MAX",
    //                 "label": "MAX"
    //             }]
    //         },

    //         "panelsSettings": {
    //             "usePrefixes": true
    //         },

    //         "export": {
    //             "enabled": true,
    //             "position": "bottom-right"
    //         }
    //     });
    // }

    // var demo5 = function() {
    //     var chartData = [];
    //     generateChartData();


    //     function generateChartData() {
    //         var firstDate = new Date();
    //         firstDate.setHours(0, 0, 0, 0);
    //         firstDate.setDate(firstDate.getDate() - 2000);

    //         for (var i = 0; i < 2000; i++) {
    //             var newDate = new Date(firstDate);

    //             newDate.setDate(newDate.getDate() + i);

    //             var open = Math.round(Math.random() * (30) + 100);
    //             var close = open + Math.round(Math.random() * (15) - Math.random() * 10);

    //             var low;
    //             if (open < close) {
    //                 low = open - Math.round(Math.random() * 5);
    //             } else {
    //                 low = close - Math.round(Math.random() * 5);
    //             }

    //             var high;
    //             if (open < close) {
    //                 high = close + Math.round(Math.random() * 5);
    //             } else {
    //                 high = open + Math.round(Math.random() * 5);
    //             }

    //             var volume = Math.round(Math.random() * (1000 + i)) + 100 + i;
    //             var value = Math.round(Math.random() * (30) + 100);

    //             chartData[i] = ({
    //                 "date": newDate,
    //                 "open": open,
    //                 "close": close,
    //                 "high": high,
    //                 "low": low,
    //                 "volume": volume,
    //                 "value": value
    //             });
    //         }
    //     }

    //     var chart = AmCharts.makeChart("kt_amcharts_5", {
    //         "type": "stock",
    //         "theme": "light",
    //         "dataSets": [{
    //             "fieldMappings": [{
    //                 "fromField": "open",
    //                 "toField": "open"
    //             }, {
    //                 "fromField": "close",
    //                 "toField": "close"
    //             }, {
    //                 "fromField": "high",
    //                 "toField": "high"
    //             }, {
    //                 "fromField": "low",
    //                 "toField": "low"
    //             }, {
    //                 "fromField": "volume",
    //                 "toField": "volume"
    //             }, {
    //                 "fromField": "value",
    //                 "toField": "value"
    //             }],
    //             "color": "#7f8da9",
    //             "dataProvider": chartData,
    //             "title": "West Stock",
    //             "categoryField": "date"
    //         }, {
    //             "fieldMappings": [{
    //                 "fromField": "value",
    //                 "toField": "value"
    //             }],
    //             "color": "#fac314",
    //             "dataProvider": chartData,
    //             "compared": true,
    //             "title": "East Stock",
    //             "categoryField": "date"
    //         }],


    //         "panels": [{
    //                 "title": "Value",
    //                 "showCategoryAxis": false,
    //                 "percentHeight": 70,
    //                 "valueAxes": [{
    //                     "id": "v1",
    //                     "dashLength": 5
    //                 }],

    //                 "categoryAxis": {
    //                     "dashLength": 5
    //                 },

    //                 "stockGraphs": [{
    //                     "type": "candlestick",
    //                     "id": "g1",
    //                     "openField": "open",
    //                     "closeField": "close",
    //                     "highField": "high",
    //                     "lowField": "low",
    //                     "valueField": "close",
    //                     "lineColor": "#7f8da9",
    //                     "fillColors": "#7f8da9",
    //                     "negativeLineColor": "#db4c3c",
    //                     "negativeFillColors": "#db4c3c",
    //                     "fillAlphas": 1,
    //                     "useDataSetColors": false,
    //                     "comparable": true,
    //                     "compareField": "value",
    //                     "showBalloon": false,
    //                     "proCandlesticks": true
    //                 }],

    //                 "stockLegend": {
    //                     "valueTextRegular": undefined,
    //                     "periodValueTextComparing": "[[percents.value.close]]%"
    //                 }
    //             },

    //             {
    //                 "title": "Volume",
    //                 "percentHeight": 30,
    //                 "marginTop": 1,
    //                 "showCategoryAxis": true,
    //                 "valueAxes": [{
    //                     "dashLength": 5
    //                 }],

    //                 "categoryAxis": {
    //                     "dashLength": 5
    //                 },

    //                 "stockGraphs": [{
    //                     "valueField": "volume",
    //                     "type": "column",
    //                     "showBalloon": false,
    //                     "fillAlphas": 1
    //                 }],

    //                 "stockLegend": {
    //                     "markerType": "none",
    //                     "markerSize": 0,
    //                     "labelText": "",
    //                     "periodValueTextRegular": "[[value.close]]"
    //                 }
    //             }
    //         ],

    //         "chartScrollbarSettings": {
    //             "graph": "g1",
    //             "graphType": "line",
    //             "usePeriod": "WW"
    //         },

    //         "chartCursorSettings": {
    //             "valueLineBalloonEnabled": true,
    //             "valueLineEnabled": true
    //         },

    //         "periodSelector": {
    //             "position": "bottom",
    //             "periods": [{
    //                 "period": "DD",
    //                 "count": 10,
    //                 "label": "10 days"
    //             }, {
    //                 "period": "MM",
    //                 "selected": true,
    //                 "count": 1,
    //                 "label": "1 month"
    //             }, {
    //                 "period": "YYYY",
    //                 "count": 1,
    //                 "label": "1 year"
    //             }, {
    //                 "period": "YTD",
    //                 "label": "YTD"
    //             }, {
    //                 "period": "MAX",
    //                 "label": "MAX"
    //             }]
    //         },
    //         "export": {
    //             "enabled": true
    //         }
    //     });
    // }
    return {
        // public functions
        init: function() {
          
            demo1();
        }
    };
}();

jQuery(document).ready(function() {
    KTamChartsStockChartsDemo.init();
});