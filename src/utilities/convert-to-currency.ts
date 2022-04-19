interface ConvertToCurrency {
  (number: number): string;
}

export const convertToCurrency: ConvertToCurrency = (number) => {
  const result = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
  }).format(number);
  return result;
};
