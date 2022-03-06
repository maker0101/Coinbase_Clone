import './Table.css';
import classNames from 'classnames';

const Table = ({ children, minRowHeight, hasBorder, marginBottom = 0 }) => {
	const tableClasses = classNames({
		'table-min-row-height-xl': minRowHeight === 'xl',
		'table-has-border': hasBorder,
	});

	return (
		<table className={tableClasses} style={{ marginBottom: marginBottom }}>
			{children}
		</table>
	);
};

export default Table;
