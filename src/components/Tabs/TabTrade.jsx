import { Tab, TabContentBuy, TabContentConvert, TabContentSell } from '..';

import { SelectAssetProvider } from '../../contexts/SelectAssetContext';

const TabTrade = () => {
  const TAB_TRADE_CONTENT = [
    {
      index: 1,
      name: 'Buy',
      content: <TabContentBuy />,
    },
    {
      index: 2,
      name: 'Sell',
      content: <TabContentSell />,
    },
    {
      index: 3,
      name: 'Convert',
      content: <TabContentConvert />,
    },
  ];

  return (
    <SelectAssetProvider>
      <Tab data={TAB_TRADE_CONTENT} />
    </SelectAssetProvider>
  );
};

export default TabTrade;
