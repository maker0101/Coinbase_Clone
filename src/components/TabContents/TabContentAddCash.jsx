import { useContext } from 'react';
import { SelectAssetContext } from '../../contexts/SelectAssetContext';
import {
  TabContent,
  Button,
  InputAmountContainer,
  TableInputAddCash,
  TabFooter,
  TabContentSelectAsset,
  TransactionForm,
} from '..';
import { convertToCurrency } from '../../utilities/convert-to-currency';

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
