import './Tab.css';
import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';

const Tab = ({ data }) => {
  const { activeTab, setActiveTab } = useContext(ModalContext);

  return (
    <div className='Tab'>
      <div className='tabBtn__wrapper'>
        {data.map((tab) => (
          <div
            key={tab.index}
            className={`tabBtn ${activeTab === tab.index && 'tabBtn__active'}`}
            onClick={() => setActiveTab(tab.index)}>
            {tab.name}
          </div>
        ))}
      </div>
      {data.map((tab) => (
        <div
          key={tab.index}
          className={`tabContent ${
            activeTab === tab.index && 'tabContent__active'
          }`}>
          <div>{tab.content}</div>
        </div>
      ))}
    </div>
  );
};

export default Tab;
