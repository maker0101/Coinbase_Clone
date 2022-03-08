import './Dashboard.css';
import { Outlet } from 'react-router-dom';
import { Sidebar, Main, Header, Content, Footer } from '..';
import useMediaQuery from '../../hooks/useMediaQuery';

const Dashboard = () => {
	let isWidthMin800 = useMediaQuery('(min-width: 800px)');

	return (
		<div className="Dashboard">
			{isWidthMin800 && <Sidebar />}
			<Main>
				<Header />
				<Content>
					<Outlet />
				</Content>
				{!isWidthMin800 && <Footer />}
			</Main>
		</div>
	);
};

export default Dashboard;
