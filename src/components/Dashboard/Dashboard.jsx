import './Dashboard.css';
import { Outlet } from 'react-router-dom';
import { Sidebar, Main, Header, Content, Footer, ModalsManager } from '..';
import useMediaQuery from '../../hooks/useMediaQuery';
import { ModalProvider } from '../../contexts/ModalContext';

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
