$(function () {
    $.getJSON('php/highstock_doble.php', function (data) {

        // split the data set into ohlc and volume
        var tiempo_respuesta = [],
            peticiones = [],
            dataLength = data.length,
            // set the allowed units for data grouping
            groupingUnits = [[
                'week',                         // unit name
                [1]                             // allowed multiples
            ], [
                'month',
                [1, 2, 3, 4, 6]
            ]],

            i = 0;

        for (i; i < dataLength; i += 1) {
            tiempo_respuesta.push([
                data[i][0], // the date
                data[i][2]  // time
            ]);

            peticiones.push([
                data[i][0], // the date
                data[i][1] // the volume
            ]);
        }


        // create the chart
        Highcharts.stockChart('container', {

            rangeSelector: {
                selected: 1
            },

            title: {
                text: 'Net Particulares'
            },

            yAxis: [{
                labels: {
                    align: 'right',
                    x: -3
                },
                title: {
                    text: 'OHLC'
                },
                height: '60%',
                lineWidth: 2
            }, {
                labels: {
                    align: 'right',
                    x: -3
                },
                title: {
                    text: 'Volume'
                },
                top: '65%',
                height: '35%',
                offset: 0,
                lineWidth: 2
            }],

            tooltip: {
                split: true
            },

            series: [{
                type: 'line',
                name: 'tiempo de respuesta',
                data: tiempo_respuesta,
                dataGrouping: {
                    units: groupingUnits
                }
            }, {
                type: 'column',
                name: 'Peticiones',
                data: peticiones,
                yAxis: 1,
                dataGrouping: {
                    units: groupingUnits
                }
            }]
        });
    });
});