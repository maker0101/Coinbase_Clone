interface IconvertToCurrency {
  (number: number): string;
}

export const convertToCurrency: IconvertToCurrency = (number) => {
  const result = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
  }).format(number);
  return result;
};
