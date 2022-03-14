export const convertToCurrency = (number) => {
  const result = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
  }).format(number);
  return result;
};
