import './ChartPortfolio.css';
import { useState } from 'react';
import useAssets from '../../hooks/useAssets';
import useMediaQuery from '../../hooks/useMediaQuery';
import { PORTFOLIO_BALANCE } from '../../constants/portfolio-balance';
import { Text, LineChart, Dropdown } from '..';
import { calculateTotalBalance } from '../../utilities/calculate-total-balance';
import { convertToCurrency } from '../../utilities/convert-to-currency';
import classNames from 'classnames';
import { createChartTimes } from '../../utilities/create-chart-times';
import useGetCoinPriceHistory from '../../hooks/useGetCoinPriceHistory';

const TIMEFRAME_OPTIONS = ['1H', '1D', '1W', '1M', '1Y'];

const ChartPortfolio = () => {
  const isWidthMax600 = useMediaQuery('(max-width: 600px)');
  const { yourCoins } = useAssets();
  const [activeTimeFrame, setActiveTimeFrame] = useState('1M');
  const portfolioBalance = convertToCurrency(calculateTotalBalance(yourCoins));
  const chartTimes = createChartTimes();

  //useGetCoinPriceHistory();

  return (
    <div>
      <div className='chartPortfolio__header'>
        <div className='chartPortfolio__headerRow1'>
          <Text color='grey' weight='600'>
            Portfolio balance
          </Text>
          <div className='timeFrameBtn__wrapper'>
            {isWidthMax600 && (
              <Dropdown
                name='timeframes'
                options={TIMEFRAME_OPTIONS}
                value={activeTimeFrame}
                onChange={(e) => setActiveTimeFrame(e.target.value)}
              />
            )}
            {!isWidthMax600 &&
              TIMEFRAME_OPTIONS.map((time) => {
                const timeFrameBtnClasses = classNames({
                  timeFrameBtn: true,
                  timeFrameBtn__active: activeTimeFrame === time,
                });

                return (
                  <div
                    key={time}
                    className={timeFrameBtnClasses}
                    onClick={() => setActiveTimeFrame(time)}>
                    {time}
                  </div>
                );
              })}
          </div>
        </div>
        <Text h1 size='xxl'>
          {portfolioBalance}
        </Text>
      </div>
      <div className='chartPortfolio__chartWrapper'>
        <LineChart
          chartData={PORTFOLIO_BALANCE}
          labelsKey='timestamp'
          datasetsKey='price'
        />
      </div>
      <div className='chartPortfolio__footer'>
        {chartTimes[activeTimeFrame].map((date) => (
          <div key={date} className='chartPortfolio__footerDate'>
            {date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartPortfolio;
