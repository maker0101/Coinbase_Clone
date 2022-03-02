import { useLocation } from 'react-router-dom';

const usePageName = () => {
	const location = useLocation();
	const path = location.pathname;
	const pageName = path[1].toUpperCase() + path.substring(2);

	return { pageName };
};

export default usePageName;
