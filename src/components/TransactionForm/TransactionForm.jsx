import { useContext } from 'react';
import { SelectAssetContext } from '../../contexts/SelectAssetContext';
import { createTransaction } from '../../utilities/create-transaction';
import useAssets from '../../hooks/useAssets';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase-config';

const TransactionForm = ({ children, type }) => {
  const { allCoins } = useAssets();
  const { selectedCoin, selectedCoinConvertTo, selectedFiat } =
    useContext(SelectAssetContext);

  const selectedAssets = {
    coin: selectedCoin,
    coinConvertTo: selectedCoinConvertTo,
    fiat: selectedFiat,
  };

  const validateTransaction = () => {
    console.log('validate');

    const result = {
      status: 'valid',
      error: '',
    };

    return result;
  };

  const addTransaction = async (transaction) => {
    try {
      await addDoc(collection(db, 'transactions'), {
        ...transaction,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const updateFiat = () => console.log('update fiat');
  const updateCoins = () => console.log('update coins');
  const clearForm = () => console.log('clear form');
  const showError = (error) => console.log(error);

  const handleSubmit = (e, type, selectedAssets) => {
    e.preventDefault();
    const transaction = createTransaction(e, type, selectedAssets, allCoins);
    const result = validateTransaction(transaction);

    if (result?.status === 'valid') {
      addTransaction(transaction);
      updateFiat(transaction);
      updateCoins(transaction);
      clearForm();
      console.log(transaction);
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
