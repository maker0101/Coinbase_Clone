import './Dashboard.css';

import { Content, Footer, Header, Main, ModalsManager, Sidebar } from '..';

import { ModalProvider } from '../../contexts/ModalContext';
import { Outlet } from 'react-router-dom';
import useMediaQuery from '../../hooks/useMediaQuery';

const Dashboard = () => {
  const isWidthMin800 = useMediaQuery('(min-width: 800px)');

  return (
    <div className='Dashboard'>
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
    </div>
  );
};

export default Dashboard;
