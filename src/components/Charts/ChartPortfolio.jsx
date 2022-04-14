import './ChartPortfolio.css';

import { Dropdown, LineChart, Text } from '..';
import { useContext, useState } from 'react';

import { YourCoinsContext } from '../../contexts/YouCoinsContext';
import { calculateTotalBalance } from '../../utilities/calculate-total-balance';
import classNames from 'classnames';
import { convertToCurrency } from '../../utilities/convert-to-currency';
import { createChartTimes } from '../../utilities/create-chart-times';
import useBalanceHistory from '../../hooks/useBalanceHistory';
import useMediaQuery from '../../hooks/useMediaQuery';

const TIMEFRAME_OPTIONS = ['1D', '1W', '1M', '1Y'];

const ChartPortfolio = () => {
  const isWidthMax600 = useMediaQuery('(max-width: 600px)');
  const { yourCoins } = useContext(YourCoinsContext);
  const [activeTimeFrame, setActiveTimeFrame] = useState('1M');
  const portfolioBalance = convertToCurrency(calculateTotalBalance(yourCoins));
  const chartTimes = createChartTimes();
  const balanceHistory = useBalanceHistory(activeTimeFrame);

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
          chartData={balanceHistory}
          labelsKey='timestamp'
          datasetsKey='balance'
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
