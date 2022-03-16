import { useContext } from 'react';
import { SelectAssetContext } from '../../contexts/SelectAssetContext';
import {
  TabContent,
  Button,
  InputAmountContainer,
  TableInputSell,
  TabFooter,
  TabContentSelectAsset,
} from '..';
import { convertToCurrency } from '../../utilities/convert-to-currency';

const TabContentSell = (props) => {
  const { isSelectAssetOpen, selectedCrypto } = useContext(SelectAssetContext);
  return (
    <>
      {isSelectAssetOpen ? (
        <TabContentSelectAsset />
      ) : (
        <TabContent>
          <InputAmountContainer />
          <TableInputSell />
          <Button size='xl'>{`Sell ${selectedCrypto?.name}`}</Button>
          <TabFooter
            textLeft={`${selectedCrypto?.symbol} balance`}
            textRight={`${selectedCrypto?.balance_coin} ${
              selectedCrypto?.symbol
            } = ${convertToCurrency(selectedCrypto?.balance_eur)}`}
          />
        </TabContent>
      )}
    </>
  );
};

export default TabContentSell;
