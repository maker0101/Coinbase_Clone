import {
  Button,
  InputAmountContainer,
  TabContent,
  TabContentBuyEmpty,
  TabContentSelectAsset,
  TabFooter,
  TableInputBuy,
  TransactionForm,
} from '..';

import { AssetsContext } from '../../contexts/AssetsContext';
import { SelectAssetContext } from '../../contexts/SelectAssetContext';
import { calculateTotalBalance } from '../../utilities/calculate-total-balance';
import { convertToCurrency } from '../../utilities/convert-to-currency';
import { useContext } from 'react';

const TabContentBuy = () => {
  const { isSelectAssetOpen, selectedCoin, selectedFiat } =
    useContext(SelectAssetContext);
  const { allFiat } = useContext(AssetsContext);
  const hasNoFiat = Boolean(!calculateTotalBalance(allFiat));

  if (hasNoFiat) {
    return <TabContentBuyEmpty />;
  } else if (isSelectAssetOpen) {
    return <TabContentSelectAsset />;
  } else {
    return (
      <TabContent>
        <TransactionForm type='buyCoin'>
          <InputAmountContainer />
          <TableInputBuy />
          <Button size='xl'>{`Buy ${selectedCoin?.name}`}</Button>
        </TransactionForm>
        <TabFooter
          textLeft={`${selectedFiat?.symbol} balance`}
          textRight={convertToCurrency(selectedFiat?.balance_eur)}
        />
      </TabContent>
    );
  }
};

export default TabContentBuy;
