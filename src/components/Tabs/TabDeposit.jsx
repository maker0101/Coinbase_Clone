import { Tab, TabContentAddCash, TabContentCashout } from '..';

import { SelectAssetProvider } from '../../contexts/SelectAssetContext';

const TabDeposit = () => {
  const TAB_DEPOSIT_CONTENT = [
    {
      index: 1,
      name: 'Add cash',
      content: <TabContentAddCash />,
    },
    {
      index: 2,
      name: 'Cashout',
      content: <TabContentCashout />,
    },
  ];

  return (
    <SelectAssetProvider>
      <Tab data={TAB_DEPOSIT_CONTENT} />
    </SelectAssetProvider>
  );
};

export default TabDeposit;
