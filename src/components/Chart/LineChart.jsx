import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const LineChart = ({
  chartData,
  labelsKey,
  datasetsKey,
  hasTooltip = true,
}) => {
  const [lineChartData, setLineChartData] = useState({
    labels: chartData.map((data) => data[`${labelsKey}`]),
    datasets: [{ data: chartData.map((data) => data[`${datasetsKey}`]) }],
  });

  const options = {
    borderColor: '#2151f5',
    borderWidth: 2,
    animation: {
      duration: 0,
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    responsive: true,
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: hasTooltip,
      },
    },
  };

  useEffect(() => {
    setLineChartData({
      labels: chartData.map((data) => data[`${labelsKey}`]),
      datasets: [{ data: chartData.map((data) => data[`${datasetsKey}`]) }],
    });
  }, [chartData]);

  return <Line data={lineChartData} options={options} />;
};

export default LineChart;
