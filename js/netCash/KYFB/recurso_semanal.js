$(document).ready(function() {
  var options = {
          chart: {
            marginRight: 100,
            zoomType: 'xy',
            height: 250
          },
          title: {
            text: 'KYFB - RECURSOS (max.)',
            x: -20 //center
          },
          subtitle: {
            text: 'Visión últimos 10 días',
            x: -20
          },
          credits: {
            enabled: false
          },
          xAxis: {
            type: 'datetime',
          },
          yAxis: [{ //tiempo de respuesta
            labels: {
              format: '{value} %'
            },
            title: {
              text: 'CPU %'
            },
            max:100
          },{ //Peticiones
            labels: {
              format: '{value} %'
            },
            title: {
              text: 'Memoria %'
            },
            opposite: true,
            max:100
          }],
          tooltip: {
              shared: true,
              style: {
                fontSize: '10px'
              },
              valueDecimals: 2
          },
          legend: {
              enabled:false,
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
              borderWidth: 1,
              itemStyle:{
                  fontSize: "10px"
                }

          },
          plotOptions: {
              line: {
                marker: {
                  enabled: false,
                  symbol: 'circle',
                  radius: 1,
                  states : {
                    hover: {enabled: true}
                  }
                }
              },
              column:{
                stacking: 'normal'
              },
              series: {
                marker: {
                  enabled: false,
                  symbol: 'circle',
                  radius: 2
                },
                fillOpacity: 0.5
              },
              flags: {
                tooltip: {
                  xDateFormat: '%B %e, %Y'
                }
              }
          },
          /*series: []*/
          series: [{
            name: 'CPU-apbad022_kyfb_s01_10',
            color: '#00BFFF',
            type: 'column',
            index: 0,
            legendIndex: 0,
            data:[]
          },{
            name: 'Memoria-apbad022_kyfb_s01_10',
            color: '#2EFEF7',
            type: 'line',
            yAxis: 1,
            index: 13,
            legendIndex: 8,
            data:[]
          },{
            name: 'CPU-apbad022_kyfb_s01_11',
            color: '#0080FF',
            type: 'column',
            index: 0,
            legendIndex: 0,
            data:[]
          },{
            name: 'Memoria-apbad022_kyfb_s01_11',
            color: '#00FFFF',
            type: 'line',
            yAxis: 1,
            index: 13,
            legendIndex: 8,
            data:[]
          },{
            name: 'CPU-apbad022_kyfb_s01_12',
            color: '#0087FF',
            type: 'column',
            index: 0,
            legendIndex: 0,
            data:[]
          },{
            name: 'Memoria-apbad022_kyfb_s01_12',
            color: '#04F1F1',
            type: 'line',
            yAxis: 1,
            index: 13,
            legendIndex: 8,
            data:[]
          },{
            name: 'CPU-apbad023_kyfb_s01_20',
            color: '#0040FF',
            type: 'column',
            index: 0,
            legendIndex: 0,
            data:[]
          },{
            name: 'Memoria-apbad023_kyfb_s01_20',
            color: '#01DFD7',
            type: 'line',
            yAxis: 1,
            index: 13,
            legendIndex: 8,
            data:[]
          },{
            name: 'CPU-apbad023_kyfb_s01_21',
            color: '#0000FF',
            type: 'column',
            index: 0,
            legendIndex: 0,
            data:[]
          },{
            name: 'Memoria-apbad023_kyfb_s01_21',
            color: '#01DFD7',
            type: 'line',
            yAxis: 1,
            index: 13,
            legendIndex: 8,
            data:[]
          },{
            name: 'CPU-apbad022_kyfb_s01_22',
            color: '#0087FF',
            type: 'column',
            index: 0,
            legendIndex: 0,
            data:[]
          },{
            name: 'Memoria-apbad022_kyfb_s01_22',
            color: '#04F1F1',
            type: 'line',
            yAxis: 1,
            index: 13,
            legendIndex: 8,
            data:[]
          },{
            name: 'CPU-apbad024_kyfb_s01_30',
            color: '#00BFFF',
            type: 'column',
            index: 0,
            legendIndex: 0,
            data:[]
          },{
            name: 'Memoria-apbad024_kyfb_s01_30',
            color: '#2EFEF7',
            type: 'line',
            yAxis: 1,
            index: 13,
            legendIndex: 8,
            data:[]
          },{
            name: 'CPU-apbad024_kyfb_s01_31',
            color: '#0080FF',
            type: 'column',
            index: 0,
            legendIndex: 0,
            data:[]
          },{
            name: 'Memoria-apbad024_kyfb_s01_31',
            color: '#00FFFF',
            type: 'line',
            yAxis: 1,
            index: 13,
            legendIndex: 8,
            data:[]
          },{
            name: 'CPU-apbad022_kyfb_s01_32',
            color: '#0087FF',
            type: 'column',
            index: 0,
            legendIndex: 0,
            data:[]
          },{
            name: 'Memoria-apbad022_kyfb_s01_32',
            color: '#04F1F1',
            type: 'line',
            yAxis: 1,
            index: 13,
            legendIndex: 8,
            data:[]
          },{
            name: 'CPU-apbad026_kyfb_s01_40',
            color: '#0040FF',
            type: 'column',
            index: 0,
            legendIndex: 0,
            data:[]
          },{
            name: 'Memoria-apbad026_kyfb_s01_40',
            color: '#01DFD7',
            type: 'line',
            yAxis: 1,
            index: 13,
            legendIndex: 8,
            data:[]
          },{
            name: 'CPU-apbad026_kyfb_s01_41',
            color: '#0000FF',
            type: 'column',
            index: 0,
            legendIndex: 0,
            data:[]
          },{
            name: 'Memoria-apbad026_kyfb_s01_41',
            color: '#01DFD7',
            type: 'line',
            yAxis: 1,
            index: 13,
            legendIndex: 8,
            data:[]
          },{
            name: 'CPU-apbad022_kyfb_s01_42',
            color: '#0087FF',
            type: 'column',
            index: 0,
            legendIndex: 0,
            data:[]
          },{
            name: 'Memoria-apbad022_kyfb_s01_42',
            color: '#04F1F1',
            type: 'line',
            yAxis: 1,
            index: 13,
            legendIndex: 8,
            data:[]
          }]
      }

      $.getJSON("/E2E/php/netCash/KYFB/recurso_semanal.php", function(json) {
        options.series[0].data = json[0];
        options.series[1].data = json[1];
        options.series[2].data = json[2];
        options.series[3].data = json[3];
        options.series[4].data = json[4];
        options.series[5].data = json[5];
        options.series[6].data = json[6];
        options.series[7].data = json[7];
        options.series[8].data = json[8];
        options.series[9].data = json[9];
        options.series[10].data = json[10];
        options.series[11].data = json[11];
        options.series[12].data = json[12];
        options.series[13].data = json[13];
        options.series[14].data = json[14];
        options.series[15].data = json[15];
        options.series[16].data = json[16];
        options.series[17].data = json[17];
        options.series[18].data = json[18];
        options.series[19].data = json[19];
        options.series[20].data = json[20];
        options.series[21].data = json[21];
        options.series[22].data = json[22];
        options.series[23].data = json[23];

        $('#recurso_semanalKYFB').highcharts(options);
      });
  });
