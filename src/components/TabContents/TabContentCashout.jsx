import {
  Button,
  InputAmountContainer,
  TabContent,
  TabContentSelectAsset,
  TabFooter,
  TableInputCashout,
  TransactionForm,
} from '..';

import { SelectAssetContext } from '../../contexts/SelectAssetContext';
import { convertToCurrency } from '../../utilities/convert-to-currency';
import { useContext } from 'react';

const TabContentCashout = () => {
  const { isSelectAssetOpen, selectedFiat } = useContext(SelectAssetContext);

  return (
    <>
      {isSelectAssetOpen ? (
        <TabContentSelectAsset />
      ) : (
        <TabContent>
          <TransactionForm type='cashoutFiat'>
            <InputAmountContainer />
            <TableInputCashout />
            <Button size='xl'>Cashout</Button>
          </TransactionForm>
          <TabFooter
            textLeft={`${selectedFiat?.symbol} balance`}
            textRight={convertToCurrency(selectedFiat?.balance_eur)}
          />
        </TabContent>
      )}
    </>
  );
};

export default TabContentCashout;
