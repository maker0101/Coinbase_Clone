import './AuthLayout.css';

const AuthLayout = ({ children }) => {
  return (
    <div className='AuthLayout'>
      <div>{children}</div>
    </div>
  );
};

export default AuthLayout;
