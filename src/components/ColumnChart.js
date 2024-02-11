import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export const ColumnChart = () => {
  const [chartState] = useState({
    series: [{
      name: 'Terrain Nu',
      data: [130.8,127.5,130.5,134.3,141.9,145.0,147.8,147.2]
    }, {
      name: 'Appartement',
      data: [140.2,141.4,140.7,148.0,146.1,156.4,148.5,149.8]
    }, {
      name: 'Maison',
      data: [120.5,122.4,133.9,133.9,126.3,142.3,129.4,136.7]
    }, {
        name: 'Indice Général',
        data: [133.1,131.6,134.6,138.9,142.2,148.8,146.7,147.6]
      }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      title: {
        text: "Prix de l'immobilier par type de bien"
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ["1-2020","2-2020","3-2020","4-2020","1-2021","2-2021","3-2021","4-2021"],
        title: {
            text: 'Trimestre'
        }
      },
      fill: {
        opacity: 1
      },
      
    }
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={chartState.options} series={chartState.series} type="bar" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

