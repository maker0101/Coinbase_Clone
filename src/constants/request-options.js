export const REQUEST_OPTIONS = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coins',
  params: {
    referenceCurrencyUuid: '5k-_VTxqtCEI', //euro
    timePeriod: '24h',
    tiers: '1,2',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '100',
    offset: '0',
  },
  headers: {
    'x-rapidapi-host': process.env.REACT_APP_X_RAPIDAPI_HOST,
    'x-rapidapi-key': process.env.REACT_APP_X_RAPIDAPI_KEY,
  },
};
