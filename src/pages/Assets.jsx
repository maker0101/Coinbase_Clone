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
import useCryptoApi from '../hooks/useCryptoApi';

const Assets = () => {
  let isWidthMin1150 = useMediaQuery('(min-width: 1150px)');
  const { yourCrypto, watchlistCrypto } = useAssets();

  useCryptoApi();

  return (
    <>
      <ContentCenter>
        <Section>
          <ChartPortfolio />
        </Section>
        <Section>
          <SectionTitle title='Your Assets' />
          <TableYourAssets assets={yourCrypto} />
        </Section>
        <Section>
          <SectionTitle title='Watchlist' />
          <TableAssets assets={watchlistCrypto} />
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
