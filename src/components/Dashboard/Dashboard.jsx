import './Dashboard.css';

import { Content, Footer, Header, Main, ModalsManager, Sidebar } from '..';

import { AssetsProvider } from '../../contexts/AssetsContext';
import { ModalProvider } from '../../contexts/ModalContext';
import { Outlet } from 'react-router-dom';
import { TransactionsProvider } from '../../contexts/TransactionsContext';
import useMediaQuery from '../../hooks/useMediaQuery';

const Dashboard = () => {
  const isWidthMin800 = useMediaQuery('(min-width: 800px)');

  return (
    <div className='Dashboard'>
      <AssetsProvider>
        <TransactionsProvider>
          <ModalProvider>
            {isWidthMin800 && <Sidebar />}
            <Main>
              <Header />
              <Content>
                <Outlet />
              </Content>
              {!isWidthMin800 && <Footer />}
              <ModalsManager />
            </Main>
          </ModalProvider>
        </TransactionsProvider>
      </AssetsProvider>
    </div>
  );
};

export default Dashboard;
