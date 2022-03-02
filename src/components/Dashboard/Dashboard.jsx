import './Dashboard.css';
import { Outlet } from 'react-router-dom';
import { Sidebar, Main, Header, Content } from '..';

const Dashboard = () => {
	return (
		<div className="Dashboard">
			<Sidebar />
			<Main>
				<Header />
				<Content>
					<Outlet />
				</Content>
			</Main>
		</div>
	);
};

export default Dashboard;
