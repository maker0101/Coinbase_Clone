import './TabFooter.css';
import { Text } from '..';

const TabFooter = ({ textLeft, textRight, marginTop = 24 }) => {
	return (
		<div className="TabFooter" style={{ marginTop: marginTop }}>
			<Text color="grey">{textLeft}</Text>
			<Text color="grey">{textRight}</Text>
		</div>
	);
};

export default TabFooter;
