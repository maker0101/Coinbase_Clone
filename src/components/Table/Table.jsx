import './Table.css';

import classNames from 'classnames';

const Table = ({
  children,
  isInputTable = false,
  hasBorderBottom = true,
  hasSmallPadding = false,
}) => {
  const tableClasses = classNames({
    'table-is-input-table': isInputTable,
    'table-has-border-bottom': hasBorderBottom,
    'table-has-small-padding': hasSmallPadding,
  });

  return <table className={tableClasses}>{children}</table>;
};

export default Table;
