import './Trade.css';
import { RECENT_TRANSACTIONS } from '../constants/recent-transactions';
import {
  ContentCenter,
  ContentRight,
  Section,
  SectionTitle,
  TableAssets,
  TableRecentTransactions,
  Search,
  Dropdown,
  TabTrade,
} from '../components';
import useMediaQuery from '../hooks/useMediaQuery';
import useAssets from '../hooks/useAssets';
import useSearch from '../hooks/useSearch';
import useFilter from '../hooks/useFilter';
import useCombineSearchFilter from '../hooks/useCombineSearchFilter';

const Trade = () => {
  const isWidthMin1150 = useMediaQuery('(min-width: 1150px)');
  const isWidthMin800 = useMediaQuery('(min-width: 800px)');
  const { allCoins } = useAssets();

  const { searchResult, searchInput, handleSearch } = useSearch(allCoins);
  const { filterResult, filterInput, handleFilter } = useFilter(
    allCoins,
    'All assets'
  );
  const { searchFilterResult } = useCombineSearchFilter(
    searchResult,
    filterResult,
    'symbol'
  );

  const assetsInTable =
    searchInput || filterInput !== 'All assets' ? searchFilterResult : allCoins;

  const watchlistQuery = (asset) => asset.onWatchlist === true;

  const OPTIONS_TIME = ['1d', '1w', '1m', '1y'];
  const ASSET_TYPE = ['All assets', 'Watchlist'];

  return (
    <>
      <ContentCenter>
        <Section>
          <SectionTitle title='All Assets' noBorderBottom />
          <div className='trade__searchFilterRow'>
            <Search
              searchInput={searchInput}
              handleSearch={handleSearch}
              allItems={allCoins}
            />
            {isWidthMin800 && (
              <div className='trade__filters'>
                <Dropdown
                  name='timeframe'
                  options={OPTIONS_TIME}
                  initialValue='1d'
                />
                <Dropdown
                  name='assetType'
                  options={ASSET_TYPE}
                  initialValue='All Assets'
                  filterInput={filterInput}
                  handleFilter={handleFilter}
                  filterQuery={watchlistQuery}
                  allItems={allCoins}
                />
              </div>
            )}
          </div>
          {/*FIXME: Code below triggers browser warning "[Violation] Forced reflow
          while executing JavaScript took 82ms" and "[Violation] 'message'
            handler took 215ms" */}
          <TableAssets assets={assetsInTable} />
        </Section>
      </ContentCenter>
      <ContentRight>
        {isWidthMin1150 && (
          <Section>
            <TabTrade />
          </Section>
        )}
        <Section>
          <SectionTitle title='Recent transactions' />
          <TableRecentTransactions transactions={RECENT_TRANSACTIONS} />
        </Section>
      </ContentRight>
    </>
  );
};

export default Trade;
