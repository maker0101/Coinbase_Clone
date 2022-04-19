import { convertToCurrency } from './convert-to-currency';

interface FormatMarketCap {
  (marketCap: number): string | undefined; //FIXME: Why do I get an error when removing 'undefined' here
}

export const formatMarketCap: FormatMarketCap = (marketCap) => {
  if (marketCap >= 100000000)
    return `${convertToCurrency(marketCap / 1000000000)}B`;
  if (marketCap >= 100000) return `${convertToCurrency(marketCap / 1000000)}M`;
  if (marketCap >= 1000) return `${convertToCurrency(marketCap / 1000)}K`;
  if (marketCap < 1000) return `${convertToCurrency(marketCap)}`;
};
