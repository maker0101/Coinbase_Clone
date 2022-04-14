import {
  ContentCenter,
  ContentRight,
  Section,
  SectionTitle,
  TabPay,
  TablePayments,
} from '../components';

import useMediaQuery from '../hooks/useMediaQuery';

const Pay = () => {
  const isWidthMax1150 = useMediaQuery('(max-width: 1150px)');
  const isWidthMin800 = useMediaQuery('(min-width: 800px)');

  return (
    <>
      {isWidthMin800 && (
        <ContentCenter>
          <Section width='s'>
            <TabPay />
          </Section>
        </ContentCenter>
      )}
      <ContentRight>
        <Section width={isWidthMax1150 ? 's' : ''}>
          <SectionTitle
            title='Send again'
            subtitle='Easily send to a recent destination'
          />
          <TablePayments />
        </Section>
      </ContentRight>
    </>
  );
};

export default Pay;
