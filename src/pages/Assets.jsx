import {
  ContentCenter,
  ContentRight,
  Section,
  SectionTitle,
  TableYourAssets,
  TableAssets,
  TabTrade,
  ChartPortfolio,
} from '../components';
import useMediaQuery from '../hooks/useMediaQuery';
import useAssets from '../hooks/useAssets';
import useGetCoins from '../hooks/useGetCoins';

const Assets = () => {
  let isWidthMin1150 = useMediaQuery('(min-width: 1150px)');
  const { yourCoins, coinsOnWatchlist } = useAssets();

  useGetCoins();

  return (
    <>
      <ContentCenter>
        <Section>
          <ChartPortfolio />
        </Section>
        <Section>
          <SectionTitle title='Your Assets' />
          <TableYourAssets assets={yourCoins} />
        </Section>
        <Section>
          <SectionTitle title='Watchlist' />
          <TableAssets assets={coinsOnWatchlist} />
        </Section>
      </ContentCenter>
      {isWidthMin1150 && (
        <ContentRight>
          <Section>
            <TabTrade />
          </Section>
        </ContentRight>
      )}
    </>
  );
};

export default Assets;
