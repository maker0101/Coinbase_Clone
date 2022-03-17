import { useContext } from 'react';
import { SelectAssetContext } from '../../contexts/SelectAssetContext';
import {
  TabContent,
  Button,
  InputAmountContainer,
  TableInputCashout,
  TabFooter,
  TabContentSelectAsset,
} from '..';
import { convertToCurrency } from '../../utilities/convert-to-currency';

const TabContentCashout = () => {
  const { isSelectAssetOpen, selectedFiat } = useContext(SelectAssetContext);

  return (
    <>
      {isSelectAssetOpen ? (
        <TabContentSelectAsset />
      ) : (
        <TabContent>
          <InputAmountContainer />
          <TableInputCashout />
          <Button size='xl'>Cashout</Button>
          <TabFooter
            textLeft={`${selectedFiat.symbol} balance`}
            textRight={convertToCurrency(selectedFiat.balance_eur)}
          />
        </TabContent>
      )}
    </>
  );
};

export default TabContentCashout;
