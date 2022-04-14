import { TabContent, TabContentSelectAsset, TabFooter, TableReceive } from '..';

import { SelectAssetContext } from '../../contexts/SelectAssetContext';
import { convertToCurrency } from '../../utilities/convert-to-currency';
import { useContext } from 'react';

const TabContentReceive = (props) => {
  const { isSelectAssetOpen, selectedCoin } = useContext(SelectAssetContext);
  return (
    <>
      {isSelectAssetOpen ? (
        <TabContentSelectAsset />
      ) : (
        <TabContent>
          <TableReceive {...props} />
          <TabFooter
            marginTopNone
            textLeft={`${selectedCoin?.symbol} balance`}
            textRight={`${selectedCoin?.balance_coin?.toFixed(6)} ${
              selectedCoin?.symbol
            } = ${convertToCurrency(selectedCoin?.balance_eur)}`}
          />
        </TabContent>
      )}
    </>
  );
};

export default TabContentReceive;
