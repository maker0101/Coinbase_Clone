import {
  Button,
  InputAmountContainer,
  TabContent,
  TabContentSelectAsset,
  TabFooter,
  TableInputSend,
  TransactionForm,
} from '..';

import { SelectAssetContext } from '../../contexts/SelectAssetContext';
import { convertToCurrency } from '../../utilities/convert-to-currency';
import { useContext } from 'react';

const TabContentSend = () => {
  const { isSelectAssetOpen, selectedCoin } = useContext(SelectAssetContext);
  return (
    <>
      {isSelectAssetOpen ? (
        <TabContentSelectAsset />
      ) : (
        <TabContent>
          <TransactionForm type='sendCoin'>
            <InputAmountContainer />
            <TableInputSend />
            <Button size='xl'>{`Send ${selectedCoin?.name}`}</Button>
          </TransactionForm>
          <TabFooter
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

export default TabContentSend;
