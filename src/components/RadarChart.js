import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export const RadarChart = () => {

  const [chartData] = useState({
    series: [{
      name: 'Nb Total',
      data: [40209,46263,51198,54690,55687,53425,51562,49439,39534],
    }, {
      name: 'Affaires traitées',
      data: [39052,40395,45671,51789,50893,55355,46521,45230,45031],
    }, {
      name: 'Affaires restantes',
      data: [16133,22260,28790,32696,38429,37191,30440,46990,36752],
    }],
    options: {
      chart: {
        height: 350,
        type: 'radar',
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1
        }
      },
      title: {
        text: 'Activité des Tribunaux'
      },
      stroke: {
        width: 2
      },
      fill: {
        opacity: 0.1
      },
      markers: {
        size: 0
      },
      xaxis: {
        categories: ['2013', '2014', '2015', '2016','2017', '2018', '2019', '2020', '2021']
      }
    }
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={chartData.options} series={chartData.series} type="radar" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}
