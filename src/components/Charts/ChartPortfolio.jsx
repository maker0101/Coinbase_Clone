import './ChartPortfolio.css';
import { useState } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import { PORTFOLIO_BALANCE } from '../../constants/portfolio-balance';
import { PORTFOLIO_CHART_TIMEFRAMES } from '../../constants/portfolio-chart-timeframes';
import { PORTFOLIO_FOOTER_DATES } from '../../constants/portfolio-footer-dates';
import { Text, LineChart, Dropdown } from '..';

const ChartPortfolio = () => {
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
								options={PORTFOLIO_CHART_TIMEFRAMES}
								initialValue={activeTimeFrame}
							/>
						)}
						{!isWidthMax600 &&
							PORTFOLIO_CHART_TIMEFRAMES.map((time) => (
								<div
									key={time.value}
									className={`timeFrameBtn ${
										activeTimeFrame === time.value && 'timeFrameBtn__active'
									}`}
									onClick={() => selectTimeFrame(time.value)}>
									{time.text}
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
