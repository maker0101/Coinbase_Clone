import { useContext } from 'react';
import { SelectAssetContext } from '../../contexts/SelectAssetContext';
import {
  TabContent,
  Button,
  InputAmountContainer,
  TableInputSend,
  TabFooter,
  TabContentSelectAsset,
  TransactionForm,
} from '..';
import { convertToCurrency } from '../../utilities/convert-to-currency';

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
            textRight={`${selectedCoin?.balance_coin} ${
              selectedCoin?.symbol
            } = ${convertToCurrency(selectedCoin?.balance_eur)}`}
          />
        </TabContent>
      )}
    </>
  );
};

export default TabContentSend;
