import {
  TabContent,
  Button,
  InputAmountContainer,
  TableInputBuy,
  TabFooter,
  TabContentSelectAsset,
  TabContentBuyEmpty,
} from '..';
import { convertToCurrency } from '../../utilities/convert-to-currency';
import { calculateTotalBalance } from '../../utilities/calculate-total-balance';
import { useContext } from 'react';
import { SelectAssetContext } from '../../contexts/SelectAssetContext';
import useAssets from '../../hooks/useAssets';

const TabContentBuy = () => {
  const { isSelectAssetOpen, selectedCoin, selectedFiat } =
    useContext(SelectAssetContext);
  const { allFiat } = useAssets();
  const hasNoFiat = Boolean(!calculateTotalBalance(allFiat));

  if (hasNoFiat) {
    return <TabContentBuyEmpty />;
  } else if (isSelectAssetOpen) {
    return <TabContentSelectAsset />;
  } else {
    return (
      <TabContent>
        <InputAmountContainer />
        <TableInputBuy />
        <Button size='xl'>{`Buy ${selectedCoin?.name}`}</Button>
        <TabFooter
          textLeft={`${selectedFiat?.symbol} balance`}
          textRight={convertToCurrency(selectedFiat?.balance_eur)}
        />
      </TabContent>
    );
  }
};

export default TabContentBuy;
