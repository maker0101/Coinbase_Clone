import dayjs from 'dayjs';

export const createChartTimes = () => {
  const times = {
    '1H': [],
    '1D': [],
    '1W': [],
    '1M': [],
    '1Y': [],
  };

  let stepSize = 60 / 6;
  let offset;
  for (let i = 60; i > 0; i -= 60 / 6) {
    const time = dayjs().subtract(i, 'minute').format('H:mm A');
    times['1H'].push(time);
  }

  stepSize = 24 / 6;
  for (let i = 24 - stepSize; i >= 0; i -= stepSize) {
    const time = dayjs().subtract(i, 'hour').format('H:mm A');
    times['1D'].push(time);
  }

  stepSize = 1;
  for (let i = 6 - stepSize; i >= 0; i -= stepSize) {
    const time = dayjs().subtract(i, 'day').format('MMM DD');
    times['1W'].push(time);
  }

  stepSize = 30 / 6;
  offset = 2;
  for (let i = 30 - stepSize; i >= 0; i -= stepSize) {
    const time = dayjs()
      .subtract(i + offset, 'day')
      .format('MMM DD');
    times['1M'].push(time);
  }

  stepSize = 12 / 6;
  for (let i = 12 - stepSize; i >= 0; i -= stepSize) {
    const time = dayjs().subtract(i, 'month').format('MMM YYYY');
    times['1Y'].push(time);
  }

  return times;
};
