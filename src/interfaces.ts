export interface Coin {
  id: string;
  symbol: string;
  balance: number;
  onWatchlist: boolean;
}

export interface Fiat {
  id: string;
  symbol: string;
  balance_eur: number;
  onWatchlist: boolean;
}
