import { useContext } from 'react';
import { SelectAssetContext } from '../../contexts/SelectAssetContext';
import { TabContent, TableReceive, TabFooter, TabContentSelectAsset } from '..';
import { convertToCurrency } from '../../utilities/convert-to-currency';

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
