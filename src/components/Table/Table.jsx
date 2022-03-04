import './Table.css';
import classNames from 'classnames';

const Table = ({ children, minRowHeight }) => {
	const tableClasses = classNames({
		'table-min-row-height-xl': minRowHeight === 'xl',
	});

	return <table className={tableClasses}>{children}</table>;
};

export default Table;
