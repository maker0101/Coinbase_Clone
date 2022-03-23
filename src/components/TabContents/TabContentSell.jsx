import { useContext } from 'react';
import { SelectAssetContext } from '../../contexts/SelectAssetContext';
import {
  TabContent,
  Button,
  InputAmountContainer,
  TableInputSell,
  TabFooter,
  TabContentSelectAsset,
  TransactionForm,
} from '..';
import { convertToCurrency } from '../../utilities/convert-to-currency';

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
