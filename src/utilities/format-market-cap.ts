import { convertToCurrency } from './convert-to-currency';

interface IformatMarketCap {
  (marketCap: number): string;
}

export const formatMarketCap: IformatMarketCap = (marketCap) => {
  if (marketCap >= 100000000)
    return `${convertToCurrency(marketCap / 1000000000)}B`;
  if (marketCap >= 100000) return `${convertToCurrency(marketCap / 1000000)}M`;
  if (marketCap >= 1000) return `${convertToCurrency(marketCap / 1000)}K`;
  return `${convertToCurrency(marketCap)}`;
};
