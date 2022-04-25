export const CHART_OPTIONS = {
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
      beginAtZero: false,
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
      enabled: false,
    },
  },
};
