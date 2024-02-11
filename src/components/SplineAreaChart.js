import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export const SplineAreaChart = () => {

    const [chartData] = useState({
    series: [{
      name: 'Total',
      data: [746.4,762.7,673.5,653.2,626.1,613.6,624.6,655.8,638.1]
    }, {
      name: 'Féminin',
      data: [305.9,310.0,283.5,257.3,255.1,239.9,256.6,258.6,260.6]
    }, {
        name: 'Masculin',
        data: [440.5,452.7,390.0,395.9,371.0,373.7,368.0,397.2,377.5]
      }],
    options: {
      chart: {
        height: 350,
        type: 'area'
      },      
      title: {
        text: "Taux de chômage"
      },
      xaxis: {
        categories: ["2-2021","3-2021","4-2021","1-2022","2-2022","3-2022","4-2022","1-2023","2-2023"],
        title: {
            text: 'Trimestre'
        }
      },
      yaxis: {
        title: {
          text: 'Nombre (Milles)'
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      
    }
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={chartData.options} series={chartData.series} type="area" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}
