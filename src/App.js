import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import {
  SignIn,
  SignUp,
  Assets,
  Trade,
  Pay,
  Deposit,
  ProtectedPages,
} from './pages';
import { Dashboard } from './components';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <div className='App'>
      <UserProvider>
        <Routes>
          <Route path='/' element={<Navigate to='/assets' />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route element={<ProtectedPages />}>
            <Route path='/' element={<Dashboard />}>
              <Route path='assets' element={<Assets />} />
              <Route path='trade' element={<Trade />} />
              <Route path='pay' element={<Pay />} />
              <Route path='deposit' element={<Deposit />} />
              <Route path='*' element={<Assets />} />
            </Route>
          </Route>
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
