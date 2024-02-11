import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export const ColumnRotatedChart = () => {

  const [chartData] = useState({
    series: [{
      name: 'Population',
      data: [11476522,11587633,11688499,11763857,11803588,11850232]
    }],
    options: {
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          columnWidth: '50%',
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2
      },
      grid: {
        row: {
          colors: ['#fff', '#f2f2f2']
        }
      },
      title: {
        text: "Population"
      },
      xaxis: {
        labels: {
          rotate: -25
        },
        title: {
          text: 'Année'
        },
        categories: ['2018','2019','2020','2021','2022', '2023'],
        tickPlacement: 'on'
      },
      yaxis: {
        title: {
          text: 'Nombre',
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [50, 0, 100]
        },
      }
    }
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}
