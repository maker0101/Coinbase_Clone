import { useContext } from 'react';
import { SelectAssetContext } from '../../contexts/SelectAssetContext';
import { TabContent, TableReceive, TabFooter, TabContentSelectAsset } from '..';
import { convertToCurrency } from '../../utilities/convert-to-currency';

const TabContentReceive = (props) => {
  const { isSelectAssetOpen, selectedCrypto } = useContext(SelectAssetContext);
  return (
    <>
      {isSelectAssetOpen ? (
        <TabContentSelectAsset />
      ) : (
        <TabContent>
          <TableReceive {...props} />
          <TabFooter
            marginTopNone
            textLeft={`${selectedCrypto.symbol} balance`}
            textRight={`${selectedCrypto.balance_coin} ${
              selectedCrypto.symbol
            } = ${convertToCurrency(selectedCrypto.balance_eur)}`}
          />
        </TabContent>
      )}
    </>
  );
};

export default TabContentReceive;
