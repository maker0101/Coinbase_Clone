import './Table.css';
import classNames from 'classnames';

const Table = ({ children, minRowHeight, hasBorder }) => {
	const tableClasses = classNames({
		'table-min-row-height-xl': minRowHeight === 'xl',
		'table-has-border': hasBorder,
	});

	return <table className={tableClasses}>{children}</table>;
};

export default Table;
