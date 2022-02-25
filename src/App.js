import './App.css';
import { Routes, Route } from 'react-router-dom';
import { SignIn, SignUp, Assets, Trade, Pay } from './pages';
import { Dashboard } from './components';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/" element={<Dashboard />}>
					<Route path="assets" element={<Assets />} />
					<Route path="trade" element={<Trade />} />
					<Route path="pay" element={<Pay />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
