interface CreateCoin {
  (
    coin: { id: string; symbol: string },
    balance: number,
    onWatchlist: boolean
  ): object;
}

export const createCoin: CreateCoin = (
  coin,
  balance = 0,
  onWatchlist = false
) => ({
  id: coin?.id,
  symbol: coin?.symbol,
  balance_coin: balance,
  onWatchlist: onWatchlist,
});
