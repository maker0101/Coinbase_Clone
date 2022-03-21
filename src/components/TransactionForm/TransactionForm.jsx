import { useContext } from 'react';
import { SelectAssetContext } from '../../contexts/SelectAssetContext';
import { createTransaction } from '../../utilities/create-transaction';
import useAssets from '../../hooks/useAssets';

const TransactionForm = ({ children, type }) => {
  const { allCoins } = useAssets();
  const { selectedCoin, selectedCoinConvertTo, selectedFiat } =
    useContext(SelectAssetContext);

  const selectedAssets = {
    coin: selectedCoin,
    coinConvertTo: selectedCoinConvertTo,
    fiat: selectedFiat,
  };

  const handleSubmit = (e, type, selectedAssets) => {
    e.preventDefault();
    const transaction = createTransaction(e, type, selectedAssets, allCoins);
    console.log(transaction);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, type, selectedAssets)}>
      {children}
    </form>
  );
};

export default TransactionForm;
