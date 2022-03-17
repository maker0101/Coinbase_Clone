import { useLocation } from 'react-router-dom';

const usePath = () => {
  const location = useLocation();
  const path = location.pathname;
  const page = path[1].toUpperCase() + path.substring(2);

  return { path, page };
};

export default usePath;
