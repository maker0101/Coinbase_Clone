import './App.css';
import { SignIn, SignUp, Assets, Trade, Pay } from './pages';
import { ProtectedRoutes } from './components';


function App() {
	return (
		<div className="App">
			<SignIn />
			<SignUp />
			<ProtectedRoutes>
				<Assets />
				<Trade />
				<Pay />
			</ProtectedRoutes>
		</div>
	);
}

export default App;
