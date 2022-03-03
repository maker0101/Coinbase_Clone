import { useLocation } from 'react-router-dom';

const usePathName = () => {
	const location = useLocation();
	const path = location.pathname;
	const page = path[1].toUpperCase() + path.substring(2);

	return { page };
};

export default usePathName;
