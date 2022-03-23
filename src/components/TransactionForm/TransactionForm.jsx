import { useState, useContext } from 'react';
import { SelectAssetContext } from '../../contexts/SelectAssetContext';
import useAssets from '../../hooks/useAssets';
import { db } from '../../firebase-config';
import { createTransaction } from '../../utilities/create-transaction';
import { validateTransaction } from '../../utilities/validate-transaction';
import { addTransaction } from '../../utilities/add-transaction';
import { updateFiatBalance } from '../../utilities/update-fiat-balance';
import { updateCoins } from '../../utilities/update-coins';
import { TransactionFormContext } from '../../contexts/TransactionFormContext';

const TransactionForm = ({ children, type }) => {
  const { allCoins, yourCoins, allFiat } = useAssets();
  const { selectedCoin, selectedCoinConvertTo, selectedFiat } =
    useContext(SelectAssetContext);
  const [amount, setAmount] = useState(0);
  const [amountError, setAmountError] = useState('');

  const selectedAssets = {
    fiat: selectedFiat,
    coin: selectedCoin,
    coinConvertTo: selectedCoinConvertTo,
  };

  const handleSubmit = (e, type, selectedAssets) => {
    e.preventDefault();
    const transaction = createTransaction(e, type, selectedAssets, allCoins);
    const result = validateTransaction(transaction, allFiat, yourCoins);

    if (result?.isValid) {
      addTransaction(db, transaction);
      updateFiatBalance(db, transaction, allFiat);
      updateCoins(db, transaction, yourCoins);
      setAmount(0);
    } else {
      setAmountError(result.error);
    }
  };

  return (
    <TransactionFormContext.Provider value={{ amount, setAmount, amountError }}>
      <form
        onSubmit={(e) => handleSubmit(e, type, selectedAssets)}
        onChange={() => setAmountError('')}>
        {children}
      </form>
    </TransactionFormContext.Provider>
  );
};

export default TransactionForm;
