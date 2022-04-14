import { doc, updateDoc } from 'firebase/firestore';

export const updateCoinBalance = async (db, coinId, newCoinBalance) => {
  try {
    const coinDoc = doc(db, 'yourCoins', coinId);

    await updateDoc(coinDoc, {
      balance_coin: newCoinBalance,
    });
  } catch (error) {
    console.error(error);
  }
};
