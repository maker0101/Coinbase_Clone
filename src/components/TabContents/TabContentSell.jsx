import {
  Button,
  InputAmountContainer,
  TabContent,
  TabContentSelectAsset,
  TabFooter,
  TableInputSell,
  TransactionForm,
} from '..';

import { SelectAssetContext } from '../../contexts/SelectAssetContext';
import { convertToCurrency } from '../../utilities/convert-to-currency';
import { useContext } from 'react';

const TabContentSell = () => {
  const { isSelectAssetOpen, selectedCoin } = useContext(SelectAssetContext);

  return (
    <>
      {isSelectAssetOpen ? (
        <TabContentSelectAsset />
      ) : (
        <TabContent>
          <TransactionForm type='sellCoin'>
            <InputAmountContainer />
            <TableInputSell />
            <Button size='xl'>{`Sell ${selectedCoin?.name}`}</Button>
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

export default TabContentSell;
