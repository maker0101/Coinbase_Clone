import {
  ContentCenter,
  ContentRight,
  Section,
  SectionTitle,
  TabDeposit,
  TableFiatTransfers,
} from '../components';

import useMediaQuery from '../hooks/useMediaQuery';

const Deposit = () => {
  const isWidthMax1150 = useMediaQuery('(max-width: 1150px)');
  const isWidthMin800 = useMediaQuery('(min-width: 800px)');

  return (
    <>
      {isWidthMin800 && (
        <ContentCenter>
          <Section width='s'>
            <TabDeposit />
          </Section>
        </ContentCenter>
      )}
      <ContentRight>
        <Section width={isWidthMax1150 ? 's' : ''}>
          <SectionTitle title='Recent fiat transfers' />
          <TableFiatTransfers />
        </Section>
      </ContentRight>
    </>
  );
};

export default Deposit;
