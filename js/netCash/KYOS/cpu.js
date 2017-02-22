$(document).ready(function() {
  var options = {
          chart: {
            renderTo: 'cpu',
            marginRight: 20,
            zoomType: 'xy',
            height: 250
          },
          title: {
            text: 'Consumo CPU %',
            x: -20 //center
          },
          subtitle: {
            text: [],
            x: -20
          },
          credits: {
            enabled: false
          },
          xAxis: {
            //type: 'datetime',
            tickPixelInterval: 150,
            crosshair: true,
            categories: []
          },
          yAxis: [{ //tiempo de respuesta
            labels: {
              format: '{value} %'
            },
            title: {
              text: 'CPU %'
            },
            max:100,
            lineWidth:1
          }],
          tooltip: {
              shared: true
          },
          legend: {
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
              }
          },

          /*series: []*/
          series: [{
            name: 'apbad022_KYOS (F)',
            color: 'rgba(4,38,253,1)',
            type: 'column',
            data:[]
          },{
            name: 'apbad023_KYOS (F)',
            color: 'rgba(4,129,255,1)',
            type: 'column',
            data:[]
          },{
            name: 'apbad024_KYOS (F)',
            color: 'rgba(49,4,247,1)',
            type: 'column',
            data:[]
          },{
            name: 'apbad026_KYOS (F)',
            color: 'rgba(95,173,251,1)',
            type: 'column',
            data:[]
          },{
            name: 'apbad022_KYOS (T)',
            color: 'rgba(4,38,253,1)',
            type: 'line',
            data:[]
          },{
            name: 'apbad023_KYOS (T)',
            color: 'rgba(4,129,255,1)',
            type: 'line',
            data:[]
          },{
            name: 'apbad024_KYOS (T)',
            color: 'rgba(49,4,247,1)',
            type: 'line',
            data:[]
          },{
            name: 'apbad026_KYOS (T)',
            color: 'rgba(95,173,251,1)',
            type: 'line',
            data:[]
          }]
      }

      $.getJSON("/E2E/php/netCash/KYOS/cpu.php", function(json) {
        options.xAxis.categories = json[0]['data'];
        options.series[0].data = json[1]['data'];
        options.series[1].data = json[2]['data'];
        options.series[2].data = json[3]['data'];
        options.series[3].data = json[4]['data'];
        options.series[4].data = json[5]['data'];
        options.series[5].data = json[6]['data'];
        options.series[6].data = json[7]['data'];
        options.series[7].data = json[8]['data'];
        options.subtitle.text = json[9]['text'];

        chart = new Highcharts.Chart(options);
      });
  });
