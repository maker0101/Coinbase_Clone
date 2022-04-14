import {
  ChartPortfolio,
  ContentCenter,
  ContentRight,
  Section,
  SectionTitle,
  TabTrade,
  TableAssets,
  TableYourAssets,
} from '../components';

import { YourCoinsProvider } from '../contexts/YouCoinsContext';
import useAssets from '../hooks/useAssets';
import useMediaQuery from '../hooks/useMediaQuery';

const Assets = () => {
  const isWidthMin1150 = useMediaQuery('(min-width: 1150px)');
  const { yourCoins, coinsOnWatchlist } = useAssets();

  return (
    <>
      <ContentCenter>
        <Section>
          <YourCoinsProvider>
            <ChartPortfolio />
          </YourCoinsProvider>
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
