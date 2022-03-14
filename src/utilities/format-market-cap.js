import { convertToCurrency } from './convert-to-currency';

export const formatMarketCap = (number) => {
  if (number >= 100000000) return `${convertToCurrency(number / 1000000000)}B`;
  if (number >= 100000) return `${convertToCurrency(number / 1000000)}M`;
  if (number >= 1000) return `${convertToCurrency(number / 1000)}K`;
  if (number < 1000) return `${convertToCurrency(number)}`;
};
