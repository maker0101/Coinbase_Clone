interface IcreateCoin {
  (
    coin: { id: string; symbol: string },
    balance: number,
    onWatchlist: boolean
  ): {
    id: string;
    symbol: string;
    balance_coin: number;
    onWatchlist: boolean;
  };
}

export const createCoin: IcreateCoin = (
  coin,
  balance = 0,
  onWatchlist = false
) => ({
  id: coin.id,
  symbol: coin.symbol,
  balance_coin: balance,
  onWatchlist: onWatchlist,
});
