import {
  Button,
  InputAmountContainer,
  TabContent,
  TabContentSelectAsset,
  TabFooter,
  TableInputAddCash,
  TransactionForm,
} from '..';

import { SelectAssetContext } from '../../contexts/SelectAssetContext';
import { convertToCurrency } from '../../utilities/convert-to-currency';
import { useContext } from 'react';

const TabContentAddCash = () => {
  const { isSelectAssetOpen, selectedFiat } = useContext(SelectAssetContext);

  return (
    <>
      {isSelectAssetOpen ? (
        <TabContentSelectAsset />
      ) : (
        <TabContent>
          <TransactionForm type='depositFiat'>
            <InputAmountContainer />
            <TableInputAddCash />
            <Button size='xl' type={'submit'}>
              Add cash
            </Button>
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

export default TabContentAddCash;
