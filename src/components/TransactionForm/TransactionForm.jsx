import { useContext } from 'react';
import { SelectAssetContext } from '../../contexts/SelectAssetContext';
import useAssets from '../../hooks/useAssets';
import { addDoc, updateDoc, collection, doc } from 'firebase/firestore';
import { db } from '../../firebase-config';
import { createTransaction } from '../../utilities/create-transaction';
import { validateTransaction } from '../../utilities/validate-transaction';
import { findAsset } from '../../utilities/find-asset';

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

  const updateYourFiat = async (transaction, fiatAssets) => {
    try {
      const fiatId = 'alClp2ZFuQBTf5Ljo3MA';
      const fiatDoc = doc(db, 'yourFiat', fiatId);

      const yourFiatBalance = fiatAssets[0].balance_eur;
      let fiatBalanceChange;

      switch (transaction.type) {
        case 'buyCoin':
        case 'cashoutFiat':
          fiatBalanceChange = -transaction.amount_fiat;
          break;
        case 'sellCoin':
        case 'convertCoin':
        case 'sendCoin':
        case 'depositFiat':
          fiatBalanceChange = transaction.amount_fiat;
          break;
        default:
          console.error('Unknown transaction type');
          break;
      }
      const newFiatBalance = yourFiatBalance + fiatBalanceChange;

      await updateDoc(fiatDoc, {
        balance_eur: newFiatBalance,
      });
    } catch (err) {
      console.error(err);
    }
  };
  const updateCoins = () => console.log('update coins');
  const clearForm = () => console.log('clear form');
  const showError = (error) => console.error(error);

  const handleSubmit = (e, type, selectedAssets) => {
    e.preventDefault();
    const transaction = createTransaction(e, type, selectedAssets, allCoins);
    const result = validateTransaction(transaction, allFiat, yourCoins);

    if (result?.isValid) {
      addTransaction(transaction);
      updateYourFiat(transaction, allFiat);
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
