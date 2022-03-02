import './ChartPortfolio.css';
import { useState } from 'react';
import { PORTFOLIO_BALANCE } from '../../constants/portfolio-balance';
import { TIMEFRAMES_PORTFOLIO } from '../../constants/timeframes-portfolio';
import { Text, LineChart } from '..';

const ChartPortfolio = () => {
	const [activeTimeFrame, setActiveTimeFrame] = useState(4);

	const selectTimeFrame = (index) => {
		setActiveTimeFrame(index);
	};

	return (
		<div>
			<div className="chartPortfolio__header">
				<div className="chartPortfolio__headerRow1">
					<Text color="grey" weight="600">
						Portfolio balance
					</Text>
					<div className="timeFrameBtn__wrapper">
						{TIMEFRAMES_PORTFOLIO.map((time) => (
							<div
								key={time.index}
								className={`timeFrameBtn ${
									activeTimeFrame === time.index && 'timeFrameBtn__active'
								}`}
								onClick={() => selectTimeFrame(time.index)}>
								{time.name}
							</div>
						))}
					</div>
				</div>
				<Text h1 size="xxl">
					€5,324.90
				</Text>
			</div>
			<div className="chartPortfolio__chartWrapper">
				<LineChart
					chartData={PORTFOLIO_BALANCE}
					labelsKey="date"
					datasetsKey="balance"
				/>
			</div>
			<div className="chartPortfolio__footer"></div>
		</div>
	);
};

export default ChartPortfolio;
