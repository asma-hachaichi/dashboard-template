import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export const LineChart = () => {

  const [chartData] = useState({
    series: [{
      name: "SMIG",
      data: [1.375,1.451,1.451,1.538,1.625,1.625,1.717,1.820,1.938]
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Evolution annuelle du SMIG',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
      }
    }
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}