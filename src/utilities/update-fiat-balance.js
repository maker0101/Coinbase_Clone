import { doc, updateDoc } from 'firebase/firestore';

export const updateFiatBalance = async (db, transaction, fiatAssets) => {
  try {
    let fiatBalanceChange;
    switch (transaction.type) {
      case 'depositFiat':
      case 'sellCoin':
        fiatBalanceChange = transaction.fiat.amount;
        break;
      case 'cashoutFiat':
      case 'buyCoin':
        fiatBalanceChange = -transaction.fiat.amount;
        break;
      case 'sendCoin':
      case 'convertCoin':
        return;
      default:
        console.error('Unknown transaction type');
        return;
    }

    const fiatId = fiatAssets[0].id;
    const prevFiatBalance = fiatAssets[0].balance_eur;
    const newFiatBalance = prevFiatBalance + fiatBalanceChange;

    const fiatDoc = doc(db, 'yourFiat', fiatId);

    await updateDoc(fiatDoc, {
      balance_eur: newFiatBalance,
    });
  } catch (err) {
    console.error(err);
  }
};
