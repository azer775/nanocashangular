(function($) {
"use strict";

/*************************
      Chart Column
*************************/

var chartcolumn = jQuery('#chart-column')
 if (chartcolumn.length > 0) {
   var options = {
    series: [{
    name: 'Income',
    type: 'column',
    data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
  }, {
    name: 'Cashflow',
    type: 'column',
    data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
  }, {
    name: 'Revenue',
    type: 'line',
    data: [20, 29, 37, 36, 44, 45, 50, 58]
  }],
    chart: {
    height: 520,
    type: 'line',
    stacked: false,

    toolbar: {
        show: false
    },
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#30b666', '#291843', '#e0e0e0'],
  stroke: {
    width: [1, 1, 4]
  },
  title: {
    align: 'left',
    offsetX: 110
  },
  xaxis: {
     show: false,
    categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  },
  yaxis: [
    {
      show: false,
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
        color: '#008FFB'
      },
      labels: {
        style: {
          colors: '#008FFB',
        }
      },
      title: {
        text: "Income (thousand crores)",
        style: {
          color: '#008FFB',
        }
      },
      tooltip: {
        enabled: true
      }
    },
    {
      seriesName: 'Income',
      opposite: true,
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
        color: '#00E396'
      },
      labels: {
        style: {
          colors: '#00E396',
        }
      },
      title: {
        text: "Operating Cashflow (thousand crores)",
        style: {
          color: '#00E396',
        }
      },
    },
    {
      seriesName: 'Revenue',
      opposite: false,
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
        color: '#483a5f'
      },
      labels: {
        style: {
          colors: '#483a5f',
        },
      },
      title: {
        text: "Revenue (thousand crores)",
        style: {
          color: '#483a5f',
        }
      }
    },
  ],
  tooltip: {
    fixed: {
      enabled: true,
      position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
      offsetY: 30,
      offsetX: 60
    },
  },
  legend: {
    horizontalAlign: 'left',
    offsetX: 40
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart-column"), options);
  chart.render();
}

/*************************
      Chart Wave
*************************/

var chartwave = jQuery('#chart-wave')
  if (chartwave.length > 0) {
    var options = {
      series: [{
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      name: 'series2',
      data: [11, 32, 45, 32, 34, 52, 41]
    }],
      chart: {
      height: 400,
      type: 'area',
        toolbar: {
          show: false
      },
    },
     fill: {
          opacity: 0.3,
          gradient: {
            enabled: true,
            shadeIntensity: 0.1,
            inverseColors: false,
            opacityFrom: 0.7,
            opacityTo: 0.5,
            stops: [20, 100, 100, 100]
          },
        },
    dataLabels: {
      enabled: false
    },
    colors: ['#30b666', '#291843'],
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
    };

  var chart = new ApexCharts(document.querySelector("#chart-wave"), options);
  chart.render();
}

/*************************
      Chart Round
*************************/
var chartround = jQuery('#chart-round')
   if (chartround.length > 0) {
      var options = {
        series: [44, 55, 13, 43],
        chart: {
        width: 500,
        type: 'pie',
      },
      labels: ['CSS3', 'PHP', 'JavaScript', 'WordPress'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };
    var chart = new ApexCharts(document.querySelector("#chart-round"), options);
    chart.render();
}


})(jQuery);
