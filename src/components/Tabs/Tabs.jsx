import { useState } from 'react';
import './Tabs.css';

const Tabs = () => {
	const [activeTab, setActiveTab] = useState(1);

	const selectTab = (index) => {
		setActiveTab(index);
	};

	const tabsData = [
		{
			index: 1,
			name: 'Tab 1',
			content: 'AAA',
		},
		{
			index: 2,
			name: 'Tab 2',
			content: 'BBB',
		},
		{
			index: 3,
			name: 'Tab 3',
			content: 'CCC',
		},
	];

	return (
		<div className="Tabs">
			<div className="tabButton__wrapper">
				{tabsData.map((tab) => (
					<div
						className={
							activeTab === tab.index
								? 'tabButton tabButton__active'
								: 'tabButton'
						}
						onClick={() => selectTab(tab.index)}>
						{tab.name}
					</div>
				))}
			</div>
			{tabsData.map((tab) => (
				<div
					className={
						activeTab === tab.index
							? 'tabContent  tabContent__active'
							: 'tabContent'
					}>
					<p>{tab.content}</p>
				</div>
			))}
		</div>
	);
};

export default Tabs;
