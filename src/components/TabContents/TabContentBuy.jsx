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
import { calculateBalanceTotal } from '../../utilities/calculate-balance-total';
import { useContext } from 'react';
import { SelectAssetContext } from '../../contexts/SelectAssetContext';
import useAssets from '../../hooks/useAssets';

const TabContentBuy = () => {
  const { isSelectAssetOpen, selectedCrypto, selectedFiat } =
    useContext(SelectAssetContext);
  const { allFiat } = useAssets();
  const hasNoFiat = Boolean(!calculateBalanceTotal(allFiat));

  if (hasNoFiat) {
    return <TabContentBuyEmpty />;
  } else if (isSelectAssetOpen) {
    return <TabContentSelectAsset />;
  } else {
    return (
      <TabContent>
        <InputAmountContainer />
        <TableInputBuy />
        <Button size='xl'>{`Buy ${selectedCrypto.name}`}</Button>
        <TabFooter
          textLeft={`${selectedFiat.symbol} balance`}
          textRight={convertToCurrency(selectedFiat.balance_eur)}
        />
      </TabContent>
    );
  }
};

export default TabContentBuy;
