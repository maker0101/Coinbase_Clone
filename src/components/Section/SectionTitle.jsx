import './SectionTitle.css';
import { Text } from '..';

const SectionTitle = ({ text }) => {
	return (
		<div className="SectionTitle">
			<Text h3>{text}</Text>
		</div>
	);
};

export default SectionTitle;
