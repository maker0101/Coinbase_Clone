import { useContext } from 'react';
import { SelectAssetContext } from '../../contexts/SelectAssetContext';
import {
  TabContent,
  Button,
  InputAmountContainer,
  TableInputSend,
  TabFooter,
  TabContentSelectAsset,
} from '..';
import { convertToCurrency } from '../../utilities/convert-to-currency';

const TabContentSend = () => {
  const { isSelectAssetOpen, selectedCrypto } = useContext(SelectAssetContext);
  return (
    <>
      {isSelectAssetOpen ? (
        <TabContentSelectAsset />
      ) : (
        <TabContent>
          <InputAmountContainer />
          <TableInputSend />
          <Button size='xl'>{`Send ${selectedCrypto.name}`}</Button>
          <TabFooter
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

export default TabContentSend;
