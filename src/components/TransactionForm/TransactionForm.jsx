import { useContext } from 'react';
import { SelectAssetContext } from '../../contexts/SelectAssetContext';
import useAssets from '../../hooks/useAssets';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase-config';
import { createTransaction } from '../../utilities/create-transaction';
import { validateTransaction } from '../../utilities/validate-transaction';

const TransactionForm = ({ children, type }) => {
  const { allCoins, yourCoins, allFiat } = useAssets();
  const { selectedCoin, selectedCoinConvertTo, selectedFiat } =
    useContext(SelectAssetContext);

  const selectedAssets = {
    coin: selectedCoin,
    coinConvertTo: selectedCoinConvertTo,
    fiat: selectedFiat,
  };

  const addTransaction = async (transaction) => {
    try {
      await addDoc(collection(db, 'transactions'), { ...transaction });
    } catch (err) {
      console.error(err);
    }
  };

  const updateFiat = () => console.log('update fiat');
  const updateCoins = () => console.log('update coins');
  const clearForm = () => console.log('clear form');
  const showError = (error) => console.error(error);

  const handleSubmit = (e, type, selectedAssets) => {
    e.preventDefault();
    const transaction = createTransaction(e, type, selectedAssets, allCoins);
    const result = validateTransaction(transaction, allFiat, yourCoins);

    if (result?.isValid) {
      addTransaction(transaction);
      updateFiat(transaction);
      updateCoins(transaction);
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
