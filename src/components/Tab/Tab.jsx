import './Tab.css';
import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import classNames from 'classnames';

const Tab = ({ data }) => {
  const { activeTab, setActiveTab } = useContext(ModalContext);

  return (
    <div className='Tab'>
      <div className='tabBtn__wrapper'>
        {data.map((tab) => {
          const tabBtnClasses = classNames({
            tabBtn: true,
            tabBtn__active: activeTab === tab.index,
          });

          return (
            <div
              key={tab.index}
              className={tabBtnClasses}
              onClick={() => setActiveTab(tab.index)}>
              {tab.name}
            </div>
          );
        })}
      </div>
      {data.map((tab) => {
        const tabContent = classNames({
          tabContent: true,
          tabContent__active: activeTab === tab.index,
        });

        return (
          <div key={tab.index} className={tabContent}>
            <div>{tab.content}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Tab;
