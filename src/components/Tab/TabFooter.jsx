import './TabFooter.css';
import { Text } from '..';

const TabFooter = ({ textLeft, textRight }) => {
	return (
		<div className="TabFooter">
			<Text color="grey">{textLeft}</Text>
			<Text color="grey">{textRight}</Text>
		</div>
	);
};

export default TabFooter;
