import 'chart.js/auto';

import { useEffect, useState } from 'react';

import { CHART_OPTIONS } from '../../constants/chart-options';
import { Line } from 'react-chartjs-2';

const LineChart = ({ chartData, labelsKey, datasetsKey, hasTooltip }) => {
  const [lineChartData, setLineChartData] = useState({
    labels: chartData.map((data) => data[`${labelsKey}`]),
    datasets: [{ data: chartData.map((data) => data[`${datasetsKey}`]) }],
  });

  const chartOptionsDeepCopy = JSON.parse(JSON.stringify(CHART_OPTIONS));
  chartOptionsDeepCopy.plugins.tooltip.enabled = hasTooltip;

  useEffect(() => {
    setLineChartData({
      labels: chartData.map((data) => data[`${labelsKey}`]),
      datasets: [{ data: chartData.map((data) => data[`${datasetsKey}`]) }],
    });
  }, [chartData]);

  return <Line data={lineChartData} options={chartOptionsDeepCopy} />;
};

export default LineChart;
