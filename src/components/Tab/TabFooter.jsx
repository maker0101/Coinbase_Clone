import './TabFooter.css';

import { Text } from '..';
import classNames from 'classnames';

const TabFooter = ({ textLeft, textRight, marginTopNone = false }) => {
  const tabFooterClasses = classNames({
    TabFooter: true,
    'tab-footer-margin-top-none': marginTopNone,
  });

  return (
    <div className={tabFooterClasses}>
      <Text color='grey'>{textLeft}</Text>
      <Text color='grey'>{textRight}</Text>
    </div>
  );
};

export default TabFooter;
