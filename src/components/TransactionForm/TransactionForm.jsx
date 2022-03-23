import { useContext } from 'react';
import { SelectAssetContext } from '../../contexts/SelectAssetContext';
import useAssets from '../../hooks/useAssets';
import { db } from '../../firebase-config';
import { createTransaction } from '../../utilities/create-transaction';
import { validateTransaction } from '../../utilities/validate-transaction';
import { addTransaction } from '../../utilities/add-transaction';
import { updateFiatBalance } from '../../utilities/update-fiat-balance';
import { updateCoins } from '../../utilities/update-coins';

const TransactionForm = ({ children, type }) => {
  const { allCoins, yourCoins, allFiat } = useAssets();
  const { selectedCoin, selectedCoinConvertTo, selectedFiat } =
    useContext(SelectAssetContext);

  const selectedAssets = {
    fiat: selectedFiat,
    coin: selectedCoin,
    coinConvertTo: selectedCoinConvertTo,
  };

  const clearForm = () => {
    console.log('clear form');
  };
  const showError = (error) => {
    console.error(error);
  };

  const handleSubmit = (e, type, selectedAssets) => {
    e.preventDefault();
    const transaction = createTransaction(e, type, selectedAssets, allCoins);
    const result = validateTransaction(transaction, allFiat, yourCoins);

    if (result?.isValid) {
      addTransaction(db, transaction);
      updateFiatBalance(db, transaction, allFiat);
      updateCoins(db, transaction, yourCoins);
      clearForm();
    } else {
      showError(result.error);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, type, selectedAssets)}>
      {children}
    </form>
  );
};

export default TransactionForm;
