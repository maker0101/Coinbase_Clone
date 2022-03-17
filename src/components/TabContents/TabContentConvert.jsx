import { useContext } from 'react';
import { SelectAssetContext } from '../../contexts/SelectAssetContext';
import {
  TabContent,
  Button,
  InputAmountContainer,
  TableInputConvert,
  TabFooter,
  TabContentSelectAsset,
} from '..';
import { convertToCurrency } from '../../utilities/convert-to-currency';

const TabContentConvert = () => {
  const { isSelectAssetOpen, selectedCoin } = useContext(SelectAssetContext);
  return (
    <>
      {isSelectAssetOpen ? (
        <TabContentSelectAsset />
      ) : (
        <TabContent>
          <InputAmountContainer />
          <TableInputConvert />
          <Button size='xl'>{`Convert ${selectedCoin?.name}`}</Button>
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

export default TabContentConvert;
