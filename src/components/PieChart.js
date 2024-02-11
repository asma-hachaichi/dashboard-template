import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export const PieChart = () => {

  const [chartData] = useState({
    series: [926069+1070239+944533+805973, 769307+845867+862847+900584, 665392+680158+780961+858461, 199161+181675+286317+461708+544471],
    options: {
      chart: {
        type: 'pie',
      },
      labels: ['0-19 ans', '20-39 ans', '40-59 ans', '60+ ans'],
      title: {
        text: "Population par tranche d'âge 2021"
      },
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
    }
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={chartData.options} series={chartData.series} type="pie" />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}
