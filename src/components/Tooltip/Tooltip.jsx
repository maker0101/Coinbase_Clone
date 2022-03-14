import './Tooltip.css';

/**
 * Requires parent element with class 'hasTooltip' in order to display
 */
const Tooltip = ({ children }) => {
  return <div className='Tooltip'>{children}</div>;
};

export default Tooltip;
