import './SectionTitle.css';
import { Text } from '..';
import classNames from 'classnames';

const SectionTitle = ({ text, noBorderBottom }) => {
	const sectionTitleClasses = classNames({
		SectionTitle: true,
		'sectionTitle-noBorderBottom': noBorderBottom,
	});

	return (
		<div className={sectionTitleClasses}>
			<Text h3>{text}</Text>
		</div>
	);
};

export default SectionTitle;
