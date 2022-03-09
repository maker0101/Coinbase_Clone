import './ChartPortfolio.css';
import { useState } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import { PORTFOLIO_BALANCE } from '../../constants/portfolio-balance';
import { PORTFOLIO_FOOTER_DATES } from '../../constants/portfolio-footer-dates';
import { Text, LineChart, Dropdown } from '..';

const ChartPortfolio = () => {
	const TIMEFRAMES = ['1H', '1D', '1W', '1M', '1Y', 'ALL'];
	let isWidthMax600 = useMediaQuery('(max-width: 600px)');
	const [activeTimeFrame, setActiveTimeFrame] = useState('1W');

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
						{isWidthMax600 && (
							<Dropdown
								name="timeframes"
								options={TIMEFRAMES}
								initialValue={activeTimeFrame}
							/>
						)}
						{!isWidthMax600 &&
							TIMEFRAMES.map((time) => (
								<div
									key={time}
									className={`timeFrameBtn ${
										activeTimeFrame === time && 'timeFrameBtn__active'
									}`}
									onClick={() => selectTimeFrame(time)}>
									{time}
								</div>
							))}
					</div>
				</div>
				<Text h1 size="xxl">
					€25,324.90
				</Text>
			</div>
			<div className="chartPortfolio__chartWrapper">
				<LineChart
					chartData={PORTFOLIO_BALANCE}
					labelsKey="date"
					datasetsKey="balance"
				/>
			</div>
			<div className="chartPortfolio__footer">
				{PORTFOLIO_FOOTER_DATES.map((date) => (
					<div key={date} className="chartPortfolio__footerDate">
						{date}
					</div>
				))}
			</div>
		</div>
	);
};

export default ChartPortfolio;
