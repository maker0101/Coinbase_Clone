export const translateSelectedTimeframe = (timeFrame) => {
  switch (timeFrame) {
    case '1D':
      return '24h';
    case '1W':
      return '7d';
    case '1M':
      return '30d';
    case '1Y':
      return '1y';
    default:
      break;
  }
};
