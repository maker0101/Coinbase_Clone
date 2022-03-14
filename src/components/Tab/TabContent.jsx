import './TabContent.css';

const TabContent = ({ children, maxHeight }) => {
  return (
    <div className='TabContent' style={{ maxHeight: maxHeight }}>
      {children}
    </div>
  );
};

export default TabContent;
