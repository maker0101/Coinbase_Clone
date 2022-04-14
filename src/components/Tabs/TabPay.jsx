import { Tab, TabContentReceive, TabContentSend } from '..';

import { SelectAssetProvider } from '../../contexts/SelectAssetContext';

const TabPay = () => {
  const TAB_PAY_CONTENT = [
    {
      index: 1,
      name: 'Send',
      content: <TabContentSend />,
    },
    {
      index: 2,
      name: 'Receive',
      content: <TabContentReceive />,
    },
  ];

  return (
    <SelectAssetProvider>
      <Tab data={TAB_PAY_CONTENT} />
    </SelectAssetProvider>
  );
};

export default TabPay;
