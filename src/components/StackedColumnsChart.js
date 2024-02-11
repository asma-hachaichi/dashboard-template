import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export const StackedColumnsChart = () => {

  const [chartData] = useState({
    series: [{
      name: 'Féminin',
      data: [482,487,494,505,513,520,529,539,552],
    }, {
      name: 'Masculin',
      data: [520,527,534,543,552,558,570,582,596],
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0
          }
        }
      }],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10,
          dataLabels: {
            total: {
              enabled: true,
              style: {
                fontSize: '13px',
                fontWeight: 900
              }
            }
          }
        },
      },
      xaxis: {
        categories: ['2010','2011','2012','2013','2014','2015','2016','2017','2018']
      },
      yaxis: {
        title: {
          text: 'Nombre (Milles)'
        }
      },
      title: {
        text: "Elèves inscrits au 1er Cycle de l'Enseignement"
      },
      legend: {
        position: 'right',
        offsetY: 40
      },
      fill: {
        opacity: 1
      }
    }
  });

  // Render component
  return (
    <div>
      <div id="chart">
        <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}
