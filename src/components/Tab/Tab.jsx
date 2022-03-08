import './Tab.css';
import { useState } from 'react';

const Tab = ({ data, initialTab = 1 }) => {
	const [activeTab, setActiveTab] = useState(initialTab);

	const selectTab = (index) => {
		setActiveTab(index);
	};

	return (
		<div className="Tab">
			<div className="tabBtn__wrapper">
				{data.map((tab) => (
					<div
						key={tab.index}
						className={`tabBtn ${activeTab === tab.index && 'tabBtn__active'}`}
						onClick={() => selectTab(tab.index)}>
						{tab.name}
					</div>
				))}
			</div>
			{data.map((tab) => (
				<div
					key={tab.index}
					className={`tabContent ${
						activeTab === tab.index && 'tabContent__active'
					}`}>
					<div>{tab.content}</div>
				</div>
			))}
		</div>
	);
};

export default Tab;
